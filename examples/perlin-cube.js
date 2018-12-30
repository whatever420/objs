(function () {
  
  // Renderer
  var renderer = new THREE.WebGLRenderer({
    antialias : true,
    canvas: document.getElementById("you-know"),
  });
  renderer.setSize(300, 300);
  renderer.setPixelRatio(2.0);
  renderer.setClearColor(0xFFFFFF);

  // Camera
  var camera = new THREE.PerspectiveCamera(
    85.,
    1.0,
    1.0,
    1000.0,
  );
  camera.position.set(0.0, 5.0, 5.0);
  camera.lookAt(0.0, 0.0, 0.0);

  // Scene
  var scene = new THREE.Scene();

  var mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1.0, 1.0, 1.0),
    new THREE.MeshBasicMaterial({color: 0xFF00FF}),
  );

  scene.add(mesh);

  // Loop
  (function xxyyxx () {
    var t = new Date()/3000.0;
    mesh.rotation.set(5*t, 7*t, -3*t);
    renderer.render(scene, camera);
    requestAnimationFrame(xxyyxx);
  }());

}());
