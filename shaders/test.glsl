precision highp float;
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
	float distanceToCenter = distance(v_texcoord, vec2(0.5, 0.5));
	float curvature = pow(distanceToCenter, 12.0);

	vec2 distortedTexCoord = v_texcoord + curvature * (v_texcoord - vec2(0.5, 0.5));

	float scanlineIntensity = sin(v_texcoord.y * 20.0) * 0.2;

	float fadeFactor = smoothstep(1.0, 0.2, distanceToCenter);

	vec3 noise = vec3(fract(sin(v_texcoord.x * 100.0) * 1000.0));

	vec4 pixColor = texture2D(tex, distortedTexCoord);
	gl_FragColor = (pixColor * fadeFactor * (1.0 - scanlineIntensity));
}
