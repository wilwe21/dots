precision highp float;
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
	float angle = 6.28318;
	float distance = distance(v_texcoord, vec2(0.5, 0.5));
	float warpFactor = smoothstep(0.0, 0.25, distance);
	vec2 rotatedTexCoord = v_texcoord + warpFactor * (vec2(sin(angle), cos(angle)));
	rotatedTexCoord = mod(rotatedTexCoord, vec2(1.0));
	vec4 pixColor = texture2D(tex, rotatedTexCoord);
	gl_FragColor = pixColor;
}
