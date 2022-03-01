import "./App.css";
import Camera from "./components/Camera_auto";
import FaceComp from "./components/FaceComp";
import useStore from "./components/Store";


const App =  () => {
    const emotion = useStore((state) => state.emotion);
    const primaryColor = useStore((state) => state.primaryColor);
    const secondaryColor = useStore((state) => state.secondaryColor);

    let $root = document.getElementById('root');
    $root.style.backgroundColor =
      `${primaryColor}`;

  return (   
    <>
    <p>{emotion}</p>
      <Camera />
      <FaceComp/>
    </>
  );
};

export default App;
