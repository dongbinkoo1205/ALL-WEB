import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, unmountComponentAtNode } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

import './ThreeJsScene.css';

const CombinedEllipse = ({ scrollY, activeSection }) => {
    // 그룹의 속성변경을 위한 ref
    const groupRef = useRef();
    const rotationRef = useRef();

    useFrame(() => {
        if (groupRef.current) {
            // Scroll에 따라 그룹 전체 회전
            groupRef.current.rotation.z = scrollY.current * 0.001;
            groupRef.current.rotation.x = scrollY.current * 0.001;
            rotationRef.current.rotation.x += 0.01; // Z축 회전 속도

            if (activeSection === 'ScrollScale1') {
                // 화면 좌측 하단으로 부드럽게 이동
                const targetPosition = [0, 0, 2.5]; // 목표 위치
                // groupRef.current.position는 현재 객체의 x,y,z좌표에 대한 위치값을 가지고 있음
                groupRef.current.position.x += (targetPosition[0] - groupRef.current.position.x) * 0.05;
                groupRef.current.position.y += (targetPosition[1] - groupRef.current.position.y) * 0.05;
                groupRef.current.position.z += (targetPosition[2] - groupRef.current.position.z) * 0.05;
            } else if (activeSection === 'ScrollScale3') {
                const targetPosition = [-3, -2, -3]; // 목표 위치
                groupRef.current.position.x = (targetPosition[0] - groupRef.current.position.x) * 0;
                groupRef.current.position.x = (targetPosition[1] - groupRef.current.position.x) * 0;
                groupRef.current.position.z += (targetPosition[2] - groupRef.current.position.z) * 0.05;
                // 그룹 내부의 메쉬 색상 변경
                groupRef.current.children.forEach((child) => {
                    if (child.isMesh && child.material) {
                        child.material.color.set('white'); // 원하는 색상으로 변경
                    }
                });
            } else if (activeSection === 'ScrollScale4') {
            } else {
                // 기본 위치로 복귀
                const defaultPosition = [0, 0, 0];
                groupRef.current.position.x += (defaultPosition[0] - groupRef.current.position.x) * 0.05;
                groupRef.current.position.y += (defaultPosition[1] - groupRef.current.position.y) * 0.05;
                groupRef.current.position.z += (defaultPosition[2] - groupRef.current.position.z) * 0.05;
                groupRef.current.children.forEach((child) => {
                    if (child.isMesh && child.material) {
                        child.material.color.set('#83B4FF'); // 원하는 색상으로 변경
                    }
                });
            }
        }
    });

    return (
        <group ref={groupRef} rotation={[Math.PI / -15.5, Math.PI / 1.3, 0]}>
            {/* 타원형 도형 */}
            {/* 굵은 곡선 추가 */}
            <mesh ref={rotationRef} position={[-4.5, -2, -1]} rotation={[Math.PI / -2, Math.PI / 1.3, 0]}>
                <torusGeometry args={[2.5, 0.33, 100, 100]} />
                <meshPhysicalMaterial
                    color={'purple'}
                    roughness={0.2} // 표면 거칠기
                    metalness={1} // 금속성
                    clearcoat={0.1} // 표면 코팅
                    clearcoatRoughness={0.5} // 코팅 거칠기
                    transmission={0.6} // 투명도
                    transparent={true} // 투명도 활성화
                    opacity={1} // 초기 opacity 값
                />
            </mesh>
            {/* 굵은 곡선 추가 */}
            <mesh position={[-4.5, -2, -1]}>
                <torusGeometry args={[4.5, 0.3, 100, 100]} />
                <meshPhysicalMaterial
                    color={'purple'}
                    roughness={0.2} // 표면 거칠기
                    metalness={1} // 금속성
                    clearcoat={0.1} // 표면 코팅
                    clearcoatRoughness={0.5} // 코팅 거칠기
                    transmission={0.6} // 투명도
                    transparent={true} // 투명도 활성화
                    opacity={1} // 초기 opacity 값
                />
            </mesh>
        </group>
    );
};

const Scene = ({ scrollY, activeSection }) => {
    const canvasRef = useRef();

    useEffect(() => {
        // 💡 컴포넌트가 언마운트될 때 cleanup 함수로 canvas 제거
        return () => {
            if (canvasRef.current) {
                unmountComponentAtNode(canvasRef.current);
            }
        };
    }, [canvasRef]);

    return (
        <div className="canvasWrap" ref={canvasRef}>
            <Canvas>
                {/* 1. 환경광: 전체적인 배경 조명 */}
                <ambientLight intensity={0.2} color="#ffffff" />
                <directionalLight position={[5, 5, 5]} />
                {/* 2. 주요 광원: SpotLight */}
                <spotLight
                    position={[5, 10, 10]} // 조명 위치
                    angle={Math.PI / 6} // 조명 확산 각도
                    penumbra={0.5} // 가장자리 부드러움
                    intensity={2} // 조명 강도
                    color="yellow" // 파란빛
                    castShadow={true} // 그림자 활성화
                />
                {/* 3. 보조 광원: PointLight */}
                <pointLight
                    position={[-5, -5, 5]} // 조명 위치
                    intensity={10} // 조명 강도
                    color="#fff" // 녹색 빛
                    decay={0.1} // 거리 감쇠
                />

                {/* 4. 발광 효과를 위한 HemisphereLight */}
                <hemisphereLight
                    skyColor="#0033ff" // 하늘 색
                    groundColor="#001a66" // 바닥 색
                    intensity={0.1} // 강도
                />
                {/* 결합된 타원형 */}
                <CombinedEllipse scrollY={scrollY} activeSection={activeSection} />
            </Canvas>
        </div>
    );
};

export default Scene;
