document.addEventListener('DOMContentLoaded', () => {
    console.log("html done ....");

    const canvas = document.querySelector("canvas");

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(70, canvas.width / canvas.height, 1.0, 100);
    var renderer = new THREE.WebGLRenderer(({ canvas: canvas }));
    renderer.setSize(300, 300);
    renderer.setClearColor(0x0000ff);

    function draw_head(x, y) {
        var geometry = new THREE.CylinderGeometry(5, 5, 5, 20);
        var material = new THREE.MeshPhongMaterial({ color: 0xffffff });
        var cylinder = new THREE.Mesh(geometry, material);
        cylinder.position.x = x + 0;
        cylinder.position.y = y + 10;
        cylinder.position.z = 0.00;
        cylinder.rotation.y = 0;
        scene.add(cylinder);
    }

    function draw_torax(x, y) {
        let geometry = new THREE.CylinderGeometry(5, 5, 20, 20);
        let material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        let cylinder = new THREE.Mesh(geometry, material);

        cylinder.position.x = x;
        cylinder.position.y = y;
        cylinder.position.z = 0.00;
        cylinder.rotation.z = 190;
        scene.add(cylinder);

        let belly = new THREE.CylinderGeometry(10, 7, 10, 32);
        let belly_mesh = new THREE.Mesh(belly, material);
        belly_mesh.position.x = x;
        belly_mesh.position.y = y - 10;

        scene.add(belly_mesh);
    }

    draw_head(0, 0);
    draw_torax(0, 0);


    function draw_legs(x, y) {
        let geometry = new THREE.CylinderGeometry(2, 2, 20, 20);
        let material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        let left = new THREE.Mesh(geometry, material);
        let right = new THREE.Mesh(geometry, material);

        left.position.x = x + 8;
        left.position.y = y - 25;
        left.position.z = 0;
        scene.add(left);

        right.position.x = x - 8;
        right.position.y = y - 25;
        right.position.z = 0;
        scene.add(right)
    }

    draw_legs(0, 0);

    function draw_arms(x, y) {
        let geometry = new THREE.CylinderGeometry(2, 2, 20, 20);
        let material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        let left = new THREE.Mesh(geometry, material);
        let right = new THREE.Mesh(geometry, material);

        left.position.x = x + 8;
        left.position.y = y + 10;
        left.position.z = 0;
        scene.add(left);

        right.position.x = x - 8;
        right.position.y = y - 25;
        right.position.z = 0;
        scene.add(right)
    }

    draw_arms(0, 0);


    var geometry = new THREE.DodecahedronGeometry(1, 0);
    var material = new THREE.MeshPhongMaterial({ color: 0xffff00, shininess: 1.0 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 60.0;
    camera.position.x = 0.0;
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(100, 100, 100);

    spotLight.castShadow = true
    scene.add(spotLight)

    var geometry = new THREE.CylinderGeometry(1, 1, 5, 20);
    var material = new THREE.MeshPhongMaterial({ color: 0xffff00 });
    var cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.x = 5.00;
    cylinder.position.y = 0.00;
    cylinder.position.z = 0.00;
    cylinder.rotation.y = 0.00;
    scene.add(cylinder);

    const animate = function() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        renderer.render(scene, camera);
    };

    animate();


})