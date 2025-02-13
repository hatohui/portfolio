export const fragmentShader = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_blobs[16]; // 8 blobs * 2 (x, y)
uniform float u_radius[8]; // 8 radii

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution; 
    vec2 pos = (uv * 2.0 - 1.0) * vec2(u_resolution.x / u_resolution.y, 1.0);

    float intensity = 0.0;
    float closestDist = 1000.0;

    for (int i = 0; i < 8; i++) {
        vec2 blobPos = vec2(u_blobs[i * 2], u_blobs[i * 2 + 1]);

        // **Water-like distortion**
        blobPos.x += sin(u_time + float(i)) * 0.02;
        blobPos.y += cos(u_time + float(i)) * 0.02;

        float radius = u_radius[i] * 1.5; // **INCREASED SIZE**
        float dist = length(pos - blobPos);
        closestDist = min(closestDist, dist);

        // **Merging only when VERY close**
        intensity += radius / (dist + 0.1);
    }

    float mergeEffect = smoothstep(0.85, 0.85, intensity); // **Small merging radius**
    float sharpCircle = step(closestDist, 0.045); // **Adjusted for bigger balls**

    float finalIntensity = max(mergeEffect, sharpCircle);

    // **Gradient Background**
    vec3 bgColor = mix( vec3(0.651, 0.306, 0.275),vec3(0.164, 0.149, 0.251), uv.y);

    // **Metaball Gradient (adapts to background)**
    vec3 metaballColor = mix(
        bgColor * 0.7, // Darker in lighter areas
        bgColor * 1.5, // Lighter in darker areas
        finalIntensity
    );

    gl_FragColor = vec4(mix(bgColor, metaballColor, finalIntensity), 1.0);
}
`;

export const vertexShader = `
  precision highp float;
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;
