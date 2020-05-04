document.addEventListener('DOMContentLoaded', () => {
    console.log("html done ....");

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var outputCanvas = document.getElementById("OutputCanvas")
    console.log(outputCanvas);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.clear
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.DodecahedronGeometry(1, 0);
    var material = new THREE.MeshPhongMaterial({ color: 0xffff00, shininess: 0.5 });
    var cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(100, 1000, 100)

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