import "./App.css";
import Camera from "./components/Camera_auto";
import FaceComp from "./components/FaceComp";
import useStore from "./components/Store";


const App =  () => {
    const emotion = useStore((state) => state.emotion);

  return (   
    <>
    <p>{emotion}</p>
      <Camera />
      <FaceComp/>
    </>
  );
};

export default App;
