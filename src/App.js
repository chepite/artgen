import { useEffect } from "react";
import "./App.css";
import Camera from "./components/Camera_auto";
import FaceComp from "./components/FaceComp";
import Form from "./components/Form"
import useStore from "./components/Store";


const App =  () => {
    const primaryColor = useStore((state) => state.primaryColor);
    const secondaryColor = useStore((state) => state.secondaryColor);
    const rotation = useStore((state) => state.rotation);


    useEffect(() => {
      let root = document.documentElement;
        root.style.setProperty("--primaryColor", `${primaryColor}`);
        root.style.setProperty("--secondaryColor", `${secondaryColor}`);

    }, [primaryColor,secondaryColor]);

    useEffect(() => {
      let root = document.documentElement;
      root.style.setProperty("--rotation", `${rotation}deg`);
    }, [rotation]);

  return (   
    <>
      <Form/>
      <Camera />
      <FaceComp/>
    </>
  );
};

export default App;
