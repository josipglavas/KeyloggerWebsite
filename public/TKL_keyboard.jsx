/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 TKL_keyboard.gltf 
*/

import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations, Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

const Model = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/TKL_keyboard.gltf");
  const { actions } = useAnimations(animations, group);
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

  const [canAnimate, setCanAnimate] = useState(true);

  const [aspect, setAspect] = useState(0);

  const animationSequence = [
    "K",
    "E",
    "Y",
    "L",
    "O",
    "G",
    "G",
    "E",
    "R",
    "Delete",
  ];

  const onAnimationFinished = () => {
    if (currentAnimationIndex < animationSequence.length - 1) {
      props.setReverseText(false);
      setCurrentAnimationIndex(currentAnimationIndex + 1);
      if (props.currentTextIndex != currentAnimationIndex) {
        props.setCurrentTextIndex(currentAnimationIndex);
      }
    } else {
      props.setCurrentText("");
      setCurrentAnimationIndex(0);
      props.setCurrentTextIndex(0);
    }

    if (currentAnimationIndex === animationSequence.length - 2) {
      setCanAnimate(false);

      const timeoutId = setTimeout(() => {
        setCanAnimate(true);
        props.setReverseText(true);
      }, 2480);

      return () => clearTimeout(timeoutId);
    }
  };

  useEffect(() => {
    if (!props.canAnimateKeys || !canAnimate) return;

    const action = actions[animationSequence[currentAnimationIndex]];
    action.reset().play().setLoop(THREE.LoopOnce);
    action.clampWhenFinished = true;
    action.getMixer().addEventListener("finished", onAnimationFinished);

    return () => {
      action.getMixer().removeEventListener("finished", onAnimationFinished);
    };
  }, [currentAnimationIndex, actions, props.canAnimateKeys, canAnimate]);

  useFrame((_, delta) => {
    const scaledDelta = delta * 0.05;

    Object.values(actions).forEach((action) => {
      action.getMixer().update(scaledDelta);
    });
  });

  const { viewport } = useThree();

  useFrame(() => {
    setAspect(viewport.width / viewport.height);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        name="Scene"
        scale={aspect < 1 ? 0.45 : 1}
        position={[aspect < 1 ? -0.086 : 0, aspect < 1 ? -0.025 : 0, 0]}
      >
        <group
          name="version_2(red,_gray,_white,_black)001"
          position={[0, 0, -0.088]}
        >
          <Box
            args={[0.28, 0.1, 0.005]}
            rotation={[-Math.PI * 0.47, 0, 0]}
            position={[0, -0.007, 0]}
            receiveShadow={false}
            castShadow
          >
            <meshStandardMaterial color="white" transparent opacity={0} />
            <shadowMaterial opacity={0.2} />
          </Box>

          <mesh
            name="-E"
            geometry={nodes["-E"].geometry}
            material={materials["white keycaps 2.001"]}
            position={[-0.077, 0.007, -0.004]}
            rotation={[0.087, 0, 0]}
          >
            <mesh
              name="QWERTY_letters_2007"
              geometry={nodes.QWERTY_letters_2007.geometry}
              material={materials["black characters.003"]}
              position={[-0.003, 0, -0.003]}
              rotation={[0.076, -0.018, -0.107]}
            />
          </mesh>
          <mesh
            name="-G"
            geometry={nodes["-G"].geometry}
            material={materials["white keycaps 2.001"]}
            position={[-0.043, 0.006, 0.011]}
            rotation={[0.087, 0, 0]}
          >
            <mesh
              name="QWERTY_letters_2011"
              geometry={nodes.QWERTY_letters_2011.geometry}
              material={materials["black characters.001"]}
              position={[-0.003, 0, -0.003]}
              rotation={[0.077, -0.012, -0.07]}
            />
          </mesh>
          <mesh
            name="-K"
            geometry={nodes["-K"].geometry}
            material={materials["white keycaps 2.001"]}
            position={[0.002, 0.006, 0.011]}
            rotation={[0.087, 0, 0]}
          >
            <mesh
              name="QWERTY_letters_2006"
              geometry={nodes.QWERTY_letters_2006.geometry}
              material={materials["black characters.001"]}
              position={[-0.003, 0, -0.003]}
              rotation={[0.077, -0.012, -0.07]}
            />
          </mesh>
          <mesh
            name="-L"
            geometry={nodes["-L"].geometry}
            material={materials["white keycaps 2.001"]}
            position={[0.017, 0.006, 0.011]}
            rotation={[0.087, 0, 0]}
          >
            <mesh
              name="QWERTY_letters_2009"
              geometry={nodes.QWERTY_letters_2009.geometry}
              material={materials["black characters.001"]}
              position={[-0.003, 0, -0.002]}
              rotation={[0.077, -0.012, -0.07]}
            />
          </mesh>
          <mesh
            name="-O"
            geometry={nodes["-O"].geometry}
            material={materials["white keycaps 2.001"]}
            position={[0.013, 0.007, -0.004]}
            rotation={[0.087, 0, 0]}
          >
            <mesh
              name="QWERTY_letters_2010"
              geometry={nodes.QWERTY_letters_2010.geometry}
              material={materials["black characters.001"]}
              position={[-0.002, 0, -0.003]}
              rotation={[0.077, -0.012, -0.07]}
            />
          </mesh>
          <mesh
            name="-R"
            geometry={nodes["-R"].geometry}
            material={materials["white keycaps 2.001"]}
            position={[-0.062, 0.007, -0.004]}
            rotation={[0.087, 0, 0]}
          >
            <mesh
              name="QWERTY_letters_2012"
              geometry={nodes.QWERTY_letters_2012.geometry}
              material={materials["black characters.001"]}
              position={[-0.002, 0, -0.003]}
              rotation={[0.077, -0.012, -0.07]}
            />
          </mesh>
          <mesh
            name="-Y"
            geometry={nodes["-Y"].geometry}
            material={materials["white keycaps 2.001"]}
            position={[-0.032, 0.007, -0.004]}
            rotation={[0.087, 0, 0]}
          >
            <mesh
              name="QWERTY_letters_2008"
              geometry={nodes.QWERTY_letters_2008.geometry}
              material={materials["black characters.001"]}
              position={[-0.003, 0, -0.003]}
              rotation={[0.077, -0.012, -0.07]}
            />
          </mesh>
          <mesh
            name="Delete"
            geometry={nodes.Delete.geometry}
            material={materials["gray keycaps.001"]}
            position={[0.073, 0.01, -0.018]}
            rotation={[0.087, 0, 0]}
          >
            <mesh
              name="QWERTY_letters_2013"
              geometry={nodes.QWERTY_letters_2013.geometry}
              material={materials["black characters.006"]}
              position={[0.007, 0.001, 0]}
              rotation={[0.232, -0.012, -0.07]}
              scale={[1.101, 1.096, 1.189]}
            />
          </mesh>
          <group
            name="Caps"
            position={[-0.028, 0.0039, 0.011]}
            rotation={[0.087, 0, 0]}
          >
            <mesh
              name="Cube004"
              geometry={nodes.Cube004.geometry}
              material={materials["white keycaps 2.001"]}
            />
            <mesh
              name="Cube004_1"
              geometry={nodes.Cube004_1.geometry}
              material={materials["gray keycaps.001"]}
            />
            <mesh
              name="Cube004_2"
              geometry={nodes.Cube004_2.geometry}
              material={materials["red keycaps.001"]}
            />
            <mesh
              name="CAPS"
              geometry={nodes.CAPS.geometry}
              material={materials["black characters.002"]}
              position={[-0.103, 0.0025, -0.001]}
              rotation={[0.162, -0.012, -0.07]}
            />
            <mesh
              name="ctrl"
              geometry={nodes.ctrl.geometry}
              material={materials["black characters.001"]}
              position={[-0.101, 0.00335, 0.03]}
              rotation={[-0.126, 0, 0]}
              scale={0.005}
            />
            <mesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials["black characters.001"]}
              position={[-0.081, 0.00047, 0.03]}
              rotation={[-0.119, 0, 0]}
              scale={0.003}
            />
            <mesh
              name="Cube001"
              geometry={nodes.Cube001.geometry}
              material={materials["black characters.007"]}
              position={[0.089, 0.00047, 0.03]}
              rotation={[-0.119, 0, 0]}
              scale={0.003}
            />
            <mesh
              name="QWERTY_letters_2002"
              geometry={nodes.QWERTY_letters_2002.geometry}
              material={materials["black characters.001"]}
              position={[-0.103, 0.00335, 0.015]}
              rotation={[0.077, -0.012, -0.07]}
            />
            <mesh
              name="QWERTY_letters_2003"
              geometry={nodes.QWERTY_letters_2003.geometry}
              material={materials["black characters.001"]}
              position={[-0.101, 0.004, -0.053]}
              rotation={[-0.087, 0, 0]}
              scale={0.6}
            />
            <mesh
              name="QWERTY_letters_2004"
              geometry={nodes.QWERTY_letters_2004.geometry}
              material={materials["black characters.003"]}
              position={[-0.074, 0.00435, -0.056]}
              rotation={[0.077, -0.012, -0.07]}
            />
            <mesh
              name="Text"
              geometry={nodes.Text.geometry}
              material={materials["black characters.001"]}
              position={[-0.063, 0.0034, 0.03]}
              rotation={[-0.119, 0, 0]}
              scale={0.005}
            />
            <mesh
              name="Text001"
              geometry={nodes.Text001.geometry}
              material={materials["black characters.001"]}
              position={[0.051, 0.0037, 0.03]}
              rotation={[-0.124, 0, 0]}
              scale={0.005}
            />
            <mesh
              name="Text002"
              geometry={nodes.Text002.geometry}
              material={materials["black characters.001"]}
              position={[0.07, 0.0032, 0.028]}
              rotation={[-0.087, 0, 0]}
              scale={0.005}
            />
          </group>
          <mesh
            name="Case_2001"
            geometry={nodes.Case_2001.geometry}
            material={materials["black aluminum case.001"]}
            rotation={[0.087, 0, 0]}
          />
          <mesh
            name="ctrl001"
            geometry={nodes.ctrl001.geometry}
            material={materials["black characters.004"]}
            position={[0.078, 0.005, 0.041]}
            rotation={[-0.039, 0, 0]}
            scale={0.005}
          />
          <mesh
            name="Pads_2001"
            geometry={nodes.Pads_2001.geometry}
            material={materials["Material.002"]}
            position={[0, -0.013, -0.001]}
          />
          <group
            name="QWERTY_letters"
            position={[-0.102, 0.013, -0.044]}
            rotation={[0.164, -0.012, -0.07]}
          >
            <mesh
              name="Text011"
              geometry={nodes.Text011.geometry}
              material={materials["black characters.001"]}
            />
            <mesh
              name="Text011_1"
              geometry={nodes.Text011_1.geometry}
              material={materials["black characters.001"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export default Model;

useGLTF.preload("/TKL_keyboard.gltf");
