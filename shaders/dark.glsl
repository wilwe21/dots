precision highp float;
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
	vec4 pixColor = texture2D(tex, v_texcoord);
	gl_FragColor = vec4(pixColor.r - 0.4, pixColor.g - 0.4, pixColor.b - 0.4, pixColor.a);
}
