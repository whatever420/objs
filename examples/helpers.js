/**
 * Return a THREE.Geometry objects from a set of vertices, edges, and normals
 */
function ToThreeGeometry({vertices, edges, normals}) {

  var geo = new THREE.BufferGeometry();
  var position = new Float32Array(vertices);
  let normal = new Float32Array(normals);
  geo.addAttribute("position", new THREE.BufferAttribute(position, 3));
  geo.addAttribute("normal", new THREE.BufferAttribute(normal, 3));
  geo.setIndex(edges);

  return geo;
}
