varying vec3 vertexNormal void main() {
float intensity = pow(0.4 - dot(vertexNormal, vec3(0, 0, 1)), 1.8) gl_FragColor = vec4(0.15, 0.48, 0.92, 0.8) * intensity }