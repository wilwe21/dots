import { App } from 'astal/gtk3';
import { subprocess, execAsync } from 'astal/process';
import { writeFile } from 'astal/file';
import { dependencies } from "../utils.ts";
import options from '../options.ts';

export function scssWatcher() {
    return subprocess(
        [
            'inotifywait',
            '--recursive',
            '--event', 'create,modify',
            '-m', `${SRC}/scss`,
        ],
        reloadScss,
        (err) => console.error('Scss Error: ', err),
    );
}

/**
 * generate an scss file that makes every option available as a variable
 * based on the passed scss parameter or the path in the object
 *
 * e.g
 * options.bar.style.value => $bar-style
 */
export async function reloadScss() {
		if (!dependencies(['sassc'])) {
        return '';
		}

    const opts = options.list();
    const varo = opts.map(opt => {
    		if (opt.scss === 'exclude') {
            return '';
				}

        const unit = typeof opt.value === 'number' ? opt.unit : '';
        const value = opt.scssFormat ? opt.scssFormat(opt.value) : opt.value;
        return `$${opt.scss}: ${value}${unit};`;
    });

    try {
        const tmp = '/tmp/ags/scss';
        await writeFile(`${tmp}/options.scss`, varo.join('\n'));
        await subprocess(['sassc', `${SRC}/scss/main.scss`, `${tmp}/style.css`]);
				App.reset_css();
        App.apply_css(`${tmp}/style.css`);
    } catch (error) {
        if (error instanceof Error)
            console.error(error.message);

        if (typeof error === 'string')
            console.error(error);
    }
}
