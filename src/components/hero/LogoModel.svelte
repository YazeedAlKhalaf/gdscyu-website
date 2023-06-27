<script>
  import { Canvas, PerspectiveCamera, OrbitControls } from "@threlte/core";
  import { GLTF } from "@threlte/extras";
</script>

<div class="w-5/6 md:w-1/2 lg:min-h-[24.5rem] lg:w-full lg:max-w-xl">
  <Canvas>
    <!-- Camera -->
    <PerspectiveCamera position={{ x: 75, y: 0, z: 50 }} fov={25}>
      <!-- Controls -->
      <!-- **minDistance={85} with a scale of {5} -->
      <OrbitControls autoRotate enableZoom={false} />
    </PerspectiveCamera>
    <!-- Logo -->
    <GLTF useDraco={true} scale={4.5} url="/assets/3d-models/gdsc-logo.glb" />
  </Canvas>
</div>
