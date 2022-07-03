import {Canvas} from "@react-three/fiber";
import Index from "./index";
import Header from "../config";

export default function App({ Component, pageProps = { title: 'index' } }: any) {
  return (
    <>
      <Header title={pageProps.title} />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Index></Index>
      </Canvas>
    </>
  )
}
