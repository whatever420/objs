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
    ToThreeGeometry(objs.random_object(100, 100, 0)),
    new THREE.MeshPhongMaterial({
      color: 0xFF00FF,
      emissive: 0x004400,
      specular: 0xFFFFFF,
      shininess: 3.0,
      side: THREE.DoubleSide,
    }),
  );

  scene.add(mesh);

  var light = new THREE.PointLight(0xFFFFFF, 1, 100);
  light.position.set(0, 10.0, 10.0);
  light.lookAt(0, 0, 0);
  scene.add(light);

  var dirlight = new THREE.PointLight(0xFFFFFF, 1, 100);
  light.position.set(0, -10.0, 0.0);
  light.lookAt(0, 0, 0);
  scene.add(dirlight);

  // Loop
  (function xxyyxx () {
    var t = new Date()/3000.0;
    var x = 2*Math.cos(t);
    var y = 2.0;
    var z = 2*Math.sin(t);

    camera.position.set(x, y, z);
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    requestAnimationFrame(xxyyxx);
  }());

}());
