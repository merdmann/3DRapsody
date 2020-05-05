document.addEventListener('DOMContentLoaded', () => {
    console.log("html done ....");

    const canvas = document.querySelector("canvas");

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(50, canvas.width / canvas.height, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer(({ canvas: canvas }));
    renderer.setSize(300, 300);
    renderer.setClearColor(0x0000ff);

    var geometry = new THREE.DodecahedronGeometry(1, 0);
    var material = new THREE.MeshPhongMaterial({ color: 0xffff00, shininess: 1.0 });
    var cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(100, 0, 100);

    spotLight.castShadow = true
    scene.add(spotLight)

    const animate = function() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        renderer.render(scene, camera);
    };

    animate();
})