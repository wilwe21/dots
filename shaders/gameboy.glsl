precision highp float;
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
	//float pixels = 16384.0;
	float pixels = 8192.0;
	//float pixels = 4096.0;
	//float pixels = 2048.0;
	float curvatureStrength = 12.0;
	float scanlineIntensity = 0.2;
	float phosphorDecay = 0.0;

	float dx = 9.0 * (1.0 / pixels);
	float dy = 16.0 * (1.0 / pixels);
	vec2 Coord = vec2(dx * floor(v_texcoord.x /dx),
										dy * floor(v_texcoord.y /dy));
	vec4 pixelGridColor = texture2D(tex, Coord);
	vec4 green = vec4(0.0, pixelGridColor.g, 0.0, 1.0);
	int row = int(floor(Coord.y / (1.0 / pixels * 3.0)));
	int col = int(floor(Coord.x / (1.0 / pixels * 3.0)));
	int colIndex = int(floor(mod(float(col), 2.0)));
	if (colIndex == 1) {
		pixelGridColor = green;
	} else {
		pixelGridColor = vec4(0.0, 0.0, 0.0, 1.0);
	}
	int rowIndex = int(floor(mod(float(row), 2.0)));
	if (rowIndex == 1) {
		pixelGridColor = vec4(0.0, 0.0, 0.0, 1.0);
	}

	vec4 baseColor = texture2D(tex, Coord) * pixelGridColor;
	vec4 blurredColor = texture2D(tex, gl_FragCoord.xy / Coord + 0.005);
	vec4 prevPhosphor = gl_FragColor;
	vec4 phosphorGlow = mix(baseColor, (baseColor + blurredColor), 0.3);

	gl_FragColor = mix(prevPhosphor * phosphorDecay, phosphorGlow, 1.0);
}
