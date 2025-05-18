import { GalaxyParams } from '@/lib/types';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Galaxy, Loader } from '@/components';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { XR, createXRStore } from '@react-three/xr';

interface CustomGalaxyProps {
  galaxyParams: GalaxyParams;
}

export const store = createXRStore({});

const Scene = ({ galaxyParams }: CustomGalaxyProps) => {
  return (
    <Canvas camera={{ position: [10, 10, 0], fov: 50 }}>
      <XR store={store}>
        <color attach="background" args={['#000']} />
        <ambientLight intensity={0.2} />
        <Suspense fallback={<Loader />}>
          <Galaxy {...galaxyParams} />
          <Stars radius={100} depth={50} count={10000} factor={4} saturation={0} fade speed={2} />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.02}
          />
          <Environment preset="night" />
        </Suspense>
      </XR>
    </Canvas>
  );
};

export default Scene;
