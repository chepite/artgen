import React from "react";
import * as faceapi from "face-api.js";
//zustand store
import useStore from "./Store"

const test = async () => {
  console.log("testing")
   Promise.all([
    await faceapi.loadSsdMobilenetv1Model("/models"),
    await faceapi.loadFaceLandmarkModel("/models"),
    await faceapi.loadFaceExpressionModel("/models"),
  ]).then(startVideo());
};
let videosrc;
  test();

const startVideo = async () => {
  videosrc = document.getElementById("video");
  console.log("started video");

    navigator.getUserMedia(
    { video: {} },
    (stream) => (videosrc.srcObject = stream),
    (err) => console.error(err)
  );
  //detect();
};

let emotion;
let face = {
  mouth: { x: 0, y: 0 },
  eye: { x: 0, y: 0 },
  nose: { x: 0, y: 0 },
  ear: { x: 0, y: 0 },
};



const Camera =  () => {
  //first run makes it fail because the camera is updating components while
  //the app is building for the first time => updateable fixes this => 
  //looks if it is first run or not
  let updateable = false;
    const mouthPos = useStore((state) => state.mouthPos);
    const setmouthPos = useStore((state) => state.setmouthPos);
    const setearPos = useStore((state) => state.setearPos);
    const seteyePos = useStore((state) => state.seteyePos);
    const setnosePos = useStore((state) => state.setnosePos);



  const detect = async () => {
      if (updateable === true) {
        setmouthPos(face.mouth);
        setearPos(face.ear);
        seteyePos(face.eye);
        setnosePos(face.nose);
      } else {
        updateable = true;
      }
    // console.log("detecting");
    const detections = await faceapi
      .detectAllFaces(videosrc)
      .withFaceLandmarks()
      .withFaceExpressions();
    // LOGGING CERTAIN LANDMARKS
    // console.log(detections)
    if(detections.length !== 0){
      const landmarks = detections[0]["landmarks"];
      //oor hangt aan jaw? misschien werkt dit
      face.ear = landmarks.getJawOutline()[0];
      face.nose = landmarks.getNose()[0];
      face.mouth = landmarks.getMouth()[0];
      face.eye = landmarks.getLeftEye()[0];

      //get the emotion
      const emotions = detections[0]["expressions"];
      emotion = { emotion: null, value: 0 };
      for (const key in emotions) {
        if (emotion.value <= 1 && emotion.value < emotions[key]) {
          emotion.emotion = key;
          emotion.value = emotions[key];
        }
      }
      console.log(
        "filtered emotion: ",
        emotion.emotion,
        " value: ",
        emotion.value
      );
    }

    //make emotion a state instead of a local value in this function
    detect();
  };
 
  return (
    <>
    <button onClick={detect}></button>
      <video id="video"
        width="720" height="560" 
       autoPlay muted></video>
    </>
  );
};

export default Camera;
