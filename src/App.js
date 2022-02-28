import "./App.css";
import Camera from "./components/Camera_auto";
import FaceComp from "./components/FaceComp";
import useStore from "./components/Store";


const App =  () => {
  const mouthPos = useStore((state) => state.mouthPos);
       console.log(mouthPos);

  //global states
  //mouth pos
  //eyes pos'
  //ears pos'
  //nose pos => (x-pos right eye- x-pos left eye)/2

  return (   
    <>
    {/* <form onSubmit={(e)=> {e.preventDefault();
    const valueText = document.getElementById("value").value;
      posfunc(parseInt(valueText));
      console.log(mouthPos.x)
     }}>
      <input id="value" type="text"></input>
      <input type="submit"></input>
    </form> */}
      <Camera />
      <FaceComp/>
    </>
  );
};

export default App;






// import "./App.css";
// import React from "react";
// import * as faceapi from "face-api.js";

// const App = () => {

//   const test =  async () => {
//     Promise.all([
//       await faceapi.loadSsdMobilenetv1Model('/models'),
//       // await faceapi.loadTinyFaceDetectorModel('/models'),
//        await faceapi.loadFaceLandmarkModel('/models'),
//        //await faceapi.loadFaceLandmarkTinyModel('/models'),
//        //await faceapi.loadFaceRecognitionModel('/models'),
//        await faceapi.loadFaceExpressionModel('/models')
//     ]).then(startVideo);

//   };
//   test();
//   let  videosrc;

//    const startVideo=  async()=> {

//      videosrc = document.getElementById("video");;
//      console.log("started")

//      navigator.getUserMedia(
//        { video: {} },
//        (stream) => (videosrc.srcObject = stream),
//        (err) => console.error(err)
//      );

//     //  detect(video);
//    }

//    const detect = async () =>{
//      const detections = await faceapi
//        .detectAllFaces(videosrc)
//        .withFaceLandmarks()
//        .withFaceExpressions();
//      console.log("detect");
//      // LOGGING CERTAIN LANDMARKS
//     //  const landmarks = detections[0]["landmarks"];
//     //  const jawOutline = landmarks.getJawOutline();
//     //  const nose = landmarks.getNose();
//     //  const mouth = landmarks.getMouth();
//     //  const leftEye = landmarks.getLeftEye();
//     //  const rightEye = landmarks.getRightEye();
//     //  const leftEyeBbrow = landmarks.getLeftEyeBrow();
//     //  const rightEyeBrow = landmarks.getRightEyeBrow();

//     //  console.log("nose: ", nose);

//     //  console.log("mouth: ", mouth)

//      console.log(detections[0]["expressions"]);
//    }

//   return (
//     <>
//       {/* <Webcam ref={videoRef} onUserMedia={face} /> */}
//       <video id="video" width="720" height="560" autoPlay muted></video>

//       <button onClick={detect}>click</button>
//     </>
//   );
// };

// export default App;
