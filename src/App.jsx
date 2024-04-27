import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Plane } from "@react-three/drei";
import TKL_keyboard from "../public/TKL_keyboard.jsx";
import "./App.scss";

const App = () => {
  const [canAnimate, setCanAnimate] = useState(false);

  const [canAnimateKeys, setCanAnimateKeys] = useState(false);

  const text = ["K", "e", "y", "l", "o", "g", "g", "e", "r"];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [reverseText, setReverseText] = useState(false);

  useEffect(() => {
    if (!canAnimate) return;
    if (!reverseText) {
      if (currentText.length > currentTextIndex || currentTextIndex < 0) return;
      setCurrentText(currentText + text[currentTextIndex]);
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentText(currentText.substring(0, currentText.length - 1));
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [currentText, currentTextIndex, canAnimate, setCurrentText, reverseText]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCanAnimate(true);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [canAnimate]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCanAnimateKeys(true);
    }, 1640);
    return () => clearTimeout(timeoutId);
  }, [canAnimateKeys]);

  return (
    <>
      <Canvas orthographic camera={{ zoom: 50, position: [8, 0, 50] }} shadows>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.2} />
        <Suspense fallback={null}>
          <TKL_keyboard
            setCurrentText={setCurrentText}
            setReverseText={setReverseText}
            currentTextIndex={currentTextIndex}
            setCurrentTextIndex={setCurrentTextIndex}
            canAnimateKeys={canAnimateKeys}
            setCanAnimateKeys={setCanAnimateKeys}
            scale={55}
            position={[2, -3, 0]}
            rotation={[0.675, -0.55, 0.1]}
          />
          <pointLight
            position={[0, 40, 0]}
            rotation={[0, 0, 0]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-radius={14}
            shadow-mapSize-left={-5}
            shadow-mapSize-right={5}
            shadow-mapSize-top={5}
            shadow-mapSize-bottom={-5}
            shadow-mapSize-far={10}
            shadow-bias={-0.001}
          />
          <Plane
            args={[40, 40]}
            rotation={[-Math.PI * 0.35, 0, 0]}
            position={[2, -8, 0]}
            receiveShadow
          >
            <shadowMaterial transparent opacity={0.2} />
          </Plane>
        </Suspense>

        <Environment preset="sunset" />
      </Canvas>
      <div className="text-container">
        <div className="typewriter">
          <h5 className="typewriter-text">{currentText}</h5>
          <h5 className="typewriter-cursor">|</h5>
        </div>
        <p className="description">Designed and developed using C++ and Qt.</p>
        <div className="buttons">
          <a
            className="download"
            href="https://github.com/josipglavas/KeyLogger/releases/download/v1.0.0/KeyLoggerInstaller.exe"
            target="_blank"
            rel="noreferrer"
          >
            Download for Windows x64
          </a>
          <div className="github-container">
            <a
              href="https://github.com/josipglavas/KeyLogger"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              View sourcecode on github.
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">© Josip Glavaš 2024</div>
    </>
  );
};

export default App;
