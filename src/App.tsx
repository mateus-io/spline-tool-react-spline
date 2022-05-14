import Spline from '@splinetool/react-spline';

export default function App() {
  const splineDesigns = ["https://prod.spline.design/gRkuAKf81IWxaDiP/scene.splinecode", "https://prod.spline.design/5kvC5MRinh4ViIIR/scene.splinecode", "https://prod.spline.design/vgsmyOyMD7x3qlug/scene.splinecode"]
  return (
    <Spline scene={splineDesigns[0]} />
  );
}
