precision highp float;
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
	float distanceToCenter = distance(v_texcoord, vec2(0.5, 0.5));
	float curvature = pow(distanceToCenter, 12.0);

	vec2 distortedTexCoord = v_texcoord + curvature * (v_texcoord - vec2(0.5, 0.5));
	float vignetteFactor = smoothstep(1.0, 0.2, clamp(distanceToCenter, 0.2, 0.8));
	if (distortedTexCoord.x < 0.0 || distortedTexCoord.x > 1.0 || distortedTexCoord.y < 0.0 || distortedTexCoord.y > 1.0){
		gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
	} else {
		float scanlineIntensity = sin(v_texcoord.y * 20.0) * 0.2;

		float fadeFactor = smoothstep(1.0, 0.2, distanceToCenter);

		vec4 pixColor = texture2D(tex, distortedTexCoord);
		gl_FragColor = (pixColor * (1.0 - scanlineIntensity)) * vignetteFactor;
	}
}
