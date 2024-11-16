import { App } from 'astal/gtk3';
import { subprocess, execAsync } from 'astal/process';
import { writeFile } from 'astal/file';
import { getOptions } from './option.ts';
import vars from '../vars.ts'

export function scssWatcher() {
    return subprocess(
        [
            'inotifywait',
            '--recursive',
            '--event', 'create,modify',
            '-m', vars.confDir + '/scss',
        ],
        reloadScss,
        (err) => print('missing dependancy for css hotreload: inotify-tools', vars.confDir, err),
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

    const opts = getOptions();
    const varo = opts.map(opt => {
        if (opt.scss === 'exclude')
            return '';

        const unit = typeof opt.value === 'number' ? opt.unit : '';
        const value = opt.scssFormat ? opt.scssFormat(opt.value) : opt.value;
        return `$${opt.scss}: ${value}${unit};`;
    });

    const bar_style = opts.find(opt => opt.id === 'bar.style')?.value || '';
    const additional = bar_style === 'normal' ? '//' : `
        window#quicksettings .window-content {
            margin-right: $wm-gaps;
        }
    `;

    try {
        const tmp = '/tmp/ags/scss';
        await writeFile(varo.join('\n'), `${tmp}/options.scss`);
        await writeFile(additional, `${tmp}/additional.scss`);
        await execAsync(`sassc ${vars.confDir}/scss/main.scss ${tmp}/style.css`);
        App.resetCss();
        App.applyCss(`${tmp}/style.css`);
    } catch (error) {
        if (error instanceof Error)
            console.error(error.message);

        if (typeof error === 'string')
            console.error(error);
    }
}
