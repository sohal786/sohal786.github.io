import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import textureImage from './map.png'; // Replace with your texture path
import Hero from './Hero';
import colors from './colors';

const MapCanvas = () => {
	const mapRef = useRef(null);

	useEffect(() => {
		let renderer, scene, camera, particles;
		let ww = window.innerWidth;
		let wh = window.innerHeight;
		const centerVector = new THREE.Vector3(0, 0, 0);

		const init = () => {
			renderer = new THREE.WebGLRenderer({
				canvas: mapRef.current,
				antialias: true,
			});
			renderer.setSize(ww, wh);
			renderer.setClearColor(colors.black);

			scene = new THREE.Scene();

			camera = new THREE.PerspectiveCamera(50, ww / wh, 0.1, 10000);
			camera.position.set(100, 20, 250); 
			camera.lookAt(centerVector);
			scene.add(camera);

			const textureLoader = new THREE.TextureLoader();
			textureLoader.load(
				textureImage,
				(texture) => {
					const imagedata = getImageData(texture.image);
					drawTheMap(imagedata);
				},
				undefined,
				(err) => {
					console.error('An error occurred:', err);
				}
			);
		};

		const getImageData = (image) => {
			const canvas = document.createElement("canvas");
			canvas.width = image.width;
			canvas.height = image.height;

			const ctx = canvas.getContext("2d");
			ctx.drawImage(image, 0, 0);

			return ctx.getImageData(0, 0, image.width, image.height);
		};

		const drawTheMap = (imagedata) => {
			const geometry = new THREE.BufferGeometry();
			const vertices = [];

			for (let y = 0, y2 = imagedata.height; y < y2; y += 2) {
				for (let x = 0, x2 = imagedata.width; x < x2; x += 2) {
					if (imagedata.data[(x * 4 + y * 4 * imagedata.width) + 3] > 128) {
						vertices.push(x - imagedata.width / 2);
						vertices.push(-y + imagedata.height / 2);
						vertices.push(0);
					}
				}
			}

			geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

			const material = new THREE.PointsMaterial({
				size: 2,
				color: colors.red,
				sizeAttenuation: false
			});

			particles = new THREE.Points(geometry, material);
			scene.add(particles);
		};

		const onResize = () => {
			ww = window.innerWidth;
			wh = window.innerHeight;
			renderer.setSize(ww, wh);
			camera.aspect = ww / wh;
			camera.updateProjectionMatrix();
		};

		const render = (time) => {
			requestAnimationFrame(render);

			if (particles) {
				const positions = particles.geometry.attributes.position.array;
				for (let i = 0; i < positions.length; i += 3) {
					positions[i + 2] = 10 * Math.sin(time * 0.001 + positions[i] * 0.02);
				}
				particles.geometry.attributes.position.needsUpdate = true;
			}

			renderer.render(scene, camera);
		};

		init();
		render();

		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	return(
		<>
		<canvas ref={mapRef} id="map" />
		</>
	);
};

export default MapCanvas;
