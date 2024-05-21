import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

const IntroSection = () => {
    const canvasRef = useRef(null);
    const textBehindRef = useRef(null);
    const textFrontRef = useRef(null);
    const textBehindBlurRef = useRef(null);
    const [currentScroll, setCurrentScroll] = useState(0);
    const [targetScroll, setTargetScroll] = useState(0);

    const parallaxScaling1 = 0.0005;
    const parallaxScaling2 = 0.00025;
    const parallaxScaling3 = 0.0000001;
    let theta1 = 0;

    useEffect(() => {
        if (!canvasRef.current) return;

        const renderer = new THREE.WebGLRenderer({ 
            canvas: canvasRef.current, 
            antialias: true, 
            alpha: true 
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;

        const group = new THREE.Group();
        scene.add(group);
        group.add(camera);

        const loadHDR = () => {
            new RGBELoader()
                .setPath('https://raw.githubusercontent.com/miroleon/gradient_hdr_freebie/main/Gradient_HDR_Freebies/')
                .load('ml_gradient_freebie_01.hdr', function (texture) {
                    texture.mapping = THREE.EquirectangularReflectionMapping;
                    scene.environment = texture;
                });
        };

        const addLights = () => {
            const colors = [0x85ccb8, 0x9f85cc];
            colors.forEach((color, index) => {
                const light = new THREE.PointLight(color, 7.5, 20);
                light.position.set(0, 3, 2);
                group.add(light);
            });
        };

        const loadModel = () => {
            const objLoader = new OBJLoader();
            objLoader.load(
                '/coinwithlogo.obj',
                (object) => {
                    const material = new THREE.MeshStandardMaterial({
                        color: 0xffffff,
                        roughness: 0,
                        metalness: 0.5,
                        envMapIntensity: 10
                    });
                    object.children[0].material = material;
                    object.scale.setScalar(3);
                    object.position.set(0, -0.25, 0);
                    group.add(object);
                },
            );
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        loadHDR();
        addLights();
        loadModel();
        const animate = () => {
            requestAnimationFrame(animate);

            group.rotation.y += 0.01;

            camera.position.x = Math.sin(theta1) * 10;
            camera.position.z = Math.cos(theta1) * 10;
            camera.position.y = Math.cos(theta1);

            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);

            theta1 += 0.0025;
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            if (renderer) renderer.dispose();
        };
    }, []);

    useEffect(() => {
        const scaleValue1 = 1 + (currentScroll * parallaxScaling1);
        const scaleValue2 = 1 + (currentScroll * parallaxScaling2);

        if (textBehindRef.current && textFrontRef.current && textBehindBlurRef.current && canvasRef.current) {
            textBehindRef.current.style.transform = `scale(${scaleValue1})`;
            textFrontRef.current.style.transform = `scale(${scaleValue1})`;
            textBehindBlurRef.current.style.transform = `scale(${scaleValue1})`;
            canvasRef.current.style.transform = `scale(${scaleValue2})`;
        }

        theta1 += currentScroll * parallaxScaling3;

        // Easing towards the target scroll position for smooth animation
        const easing = 0.1;
        if (currentScroll !== targetScroll) {
            setCurrentScroll(currentScroll + (targetScroll - currentScroll) * easing);
        }
    }, [currentScroll, targetScroll]);

    const handleScroll = () => {
        setTargetScroll(window.pageYOffset);
    };

    return (
        <div>
            <div className="headline-container">
                <div ref={textBehindRef} id="text-behind">DeFinance Liquidity Protocol</div>
                <div ref={textBehindBlurRef} id="text-behind-blur">DeFinance Liquidity Protocol</div>
                <div ref={textFrontRef} id="text-front">DeFinance Liquidity Protocol</div>
                <canvas ref={canvasRef}></canvas>
            </div>
        </div>
    );
};

export default IntroSection;
