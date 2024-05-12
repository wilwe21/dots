precision highp float;
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
	float angle = 6.28318;
	float cos_angle = cos(angle);
	float sin_angle = sin(angle);
	mat2 rotationMatrix = mat2(-cos_angle, sin_angle, -sin_angle, cos_angle);
	vec2 rotatedTexCoord = v_texcoord * rotationMatrix;
	rotatedTexCoord = mod(rotatedTexCoord, vec2(1.0));
	vec4 pixColor = texture2D(tex, rotatedTexCoord);
	gl_FragColor = pixColor;
}
