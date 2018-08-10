import React from 'react';

// eslint-disable-next-line import/no-webpack-loader-syntax
import * as THREE from 'expose-loader?THREE!three';
import 'three/examples/js/controls/OrbitControls';
import 'three/examples/js/loaders/GLTFLoader';
import 'three/examples/js/loaders/VRMLoader';

import model from './vrm/konono.vrm'
// import model from './vrm/AliciaSolid.vrm'

// 幅、高さ取得
const width = window.innerWidth;
const height = window.innerHeight;

// レンダラの作成、DOMに追加
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor(0xf3f3f3, 1.0);
document.body.appendChild(renderer.domElement);

// シーンの作成、カメラの作成と追加、ライトの作成と追加
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(80, width / height, 0.25, 20);
camera.position.set(0, 1.6, -2.2);
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

// メッシュの作成と追加
const grid = new THREE.GridHelper(10, 5);
scene.add(grid);

// OrbitControls の追加
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.userPan = false;
controls.userPanSpeed = 0.0;
controls.maxDistance = 5000.0;
controls.maxPolarAngle = Math.PI * 0.495;
controls.autoRotate = true;
controls.autoRotateSpeed = 1.0;

// 
const loader = new THREE.VRMLoader();
loader.load(model, function (vrm) {
    vrm.scene.traverse(function (object) {
        if (object.material) {
            if (Array.isArray(object.material)) {
                for (var i = 0, il = object.material.length; i < il; i++) {
                    var material = new THREE.MeshBasicMaterial();
                    THREE.Material.prototype.copy.call(material, object.material[i]);
                    material.color.copy(object.material[i].color);
                    material.map = object.material[i].map;
                    material.lights = false;
                    object.material[i] = material;
                }
            } else {
                var material = new THREE.MeshBasicMaterial();
                THREE.Material.prototype.copy.call(material, object.material);
                material.color.copy(object.material.color);
                material.map = object.material.map;
                material.lights = false;
                object.material = material;
            }
        }
    });
    scene.add(vrm.scene);
});

// レンダリング
const animation = (() => {
    renderer.render(scene, camera);
    // controls.update();
    requestAnimationFrame(animation);
})

class Three extends React.Component {

    constructor(props, context) {
        super(props, context)
        animation()
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Three;
