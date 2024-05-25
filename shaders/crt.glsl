precision highp float;
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
	//float pixels = 16384.0;
	//float pixels = 8192.0;
	float pixels = 4096.0;
	//float pixels = 2048.0;
	float curvatureStrength = 12.0;
	float scanlineIntensity = 0.2;
	float phosphorDecay = 0.0;
	float distanceToCenter = distance(v_texcoord, vec2(0.5, 0.5));
	float curvature = pow(distanceToCenter, curvatureStrength);

	vec2 distortedTexCoord = v_texcoord + curvature * (v_texcoord - vec2(0.5, 0.5));
	float vignetteFactor = smoothstep(1.0, 0.2, clamp(distanceToCenter, 0.2, 0.7));

	if (distortedTexCoord.x < 0.0 || distortedTexCoord.x > 1.0 || distortedTexCoord.y < 0.0 || distortedTexCoord.y > 1.0){
		gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
	} else {
		float dx = 4.5 * (1.0 / pixels);
		float dy = 8.0 * (1.0 / pixels);
		vec2 Coord = vec2(dx * floor(distortedTexCoord.x /dx),
											dy * floor(distortedTexCoord.y /dy));
		vec4 pixelGridColor = texture2D(tex, Coord);
		//vec4 pixelGridColor;
		vec4 red = vec4(pixelGridColor.r, 0.0, 0.0, 1.0);
		vec4 green = vec4(0.0, pixelGridColor.g, 0.0, 1.0);
		vec4 blue = vec4(0.0, 0.0, pixelGridColor.b, 1.0);
		vec4 black = vec4(0.0, 0.0, 0.0, 1.0);
		vec4 white = vec4(1.0, 1.0, 1.0, 1.0);
		vec4 all = pixelGridColor;
		int row = int(floor(Coord.y / (1.0 / pixels * 3.0)));
		int col = int(floor(Coord.x / (1.0 / pixels * 3.0)));
		int colIndex = int(floor(mod(float(col), 4.0)));
		int rowIndex = int(floor(mod(float(row), 4.0)));
		if (rowIndex == 1) {
			pixelGridColor = mix(pixelGridColor, black, 0.5);
		} else if (rowIndex == 3) {
			pixelGridColor = mix(pixelGridColor, white, 0.5);
		}
		/*if (colIndex == 1) {
			pixelGridColor = blue;
		} else if (colIndex == 2) {
			pixelGridColor = green;
		} else if (colIndex == 3){
			pixelGridColor = red;
		} else {
			pixelGridColor = black;
		}*/
		float scanlineOffset = fract(Coord.y) * 2.0 - 1.0;
		float scanline = abs(scanlineOffset) * scanlineIntensity;

		vec4 baseColor = texture2D(tex, Coord) * pixelGridColor;
		vec4 blurredColor = texture2D(tex, gl_FragCoord.xy / Coord + 0.005);
		vec4 prevPhosphor = gl_FragColor;
		vec4 phosphorGlow = mix(baseColor, (baseColor + blurredColor), 0.3);

		gl_FragColor = mix(prevPhosphor * phosphorDecay, phosphorGlow * (1.0 - scanline), vignetteFactor);
	}
}
