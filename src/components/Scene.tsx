import { GalaxyParams } from '@/lib/types';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Galaxy, Loader } from '@/components';
import { OrbitControls, Stars, Environment } from '@react-three/drei';

interface CustomGalaxyProps {
  galaxyParams: GalaxyParams;
}

const Scene = ({ galaxyParams }: CustomGalaxyProps) => {
  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 75 }}>
      <color attach="background" args={['#000']} />
      <ambientLight intensity={0.2} />
      <Suspense fallback={<Loader />}>
        <Galaxy {...galaxyParams} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={true} enablePan={true} />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
