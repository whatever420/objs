
import {cross, normalize, sub} from '@pool-water/math';


/**
 * Return a a set of vertices, edges, and normals
 * Args:
 *   w: width and also 
 *   h: height
 *   d: depth
 *   radius := w/2
 *
 *    ___
 *   /   \
 *  |     |
 *  |     |
 *  |_____|
 */
export function tombstone(w, h, d) {
  let vertices = [];
}

// random number between [low, high)
function random(low, high) {
  return Math.random()*(high-low)+low;
}

// random vector3
function random_vec3() {
  return [random(-1, 1), random(-1, 1), random(-1, 1)];
}

// random object
export function random_object(num_vertices, num_faces) {
  let vertices = [];
  let edges = [];
  let normals = [];

  // generate random vector-3's and add them to the vertices array
  // XXX: optimize this later by making vertices a Float32Array from the get-go
  for (let i=0; i < num_vertices; i++) {
    vertices.push(...random_vec3());
  }

  // generate random integer combinations and add them to the edges array
  // additionally, generate the normal vector for that flat face
  // XXX: optimize this later by making vertices a Float32Array from the get-go
  for (let i=0; i < num_faces; i++) {
    let a = Math.floor(random(0, num_vertices));
    let b = Math.floor(random(0, num_vertices));
    let c = Math.floor(random(0, num_vertices));
    edges.push(a, b, c);

    let u = sub(getVertex(c), getVertex(a));
    let v = sub(getVertex(b), getVertex(a));
    let n = normalize(cross(u, v));
    normals.push(...n);
    normals.push(...n);
    normals.push(...n);
  }

  return {
    vertices: vertices,
    edges: edges,
    normals: normals,
  };

  function getVertex(e) {
    return [vertices[e+0], vertices[e+1], vertices[e+2]];
  }
}
