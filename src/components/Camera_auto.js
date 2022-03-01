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
    const setmouthPos = useStore((state) => state.setmouthPos);
    const setearPos = useStore((state) => state.setearPos);
    const seteyePos = useStore((state) => state.seteyePos);
    const setnosePos = useStore((state) => state.setnosePos);
    const setEmotion = useStore((state) => state.setEmotion);
    const setPrimaryColor = useStore((state) => state.setPrimaryColor);
    const setSecondaryColor = useStore((state) => state.setSecondaryColor);
    const setTertiaryColor = useStore((state) => state.setTertiaryColor);



  const detect = async () => {

    const detections = await faceapi
      .detectAllFaces(videosrc)
      .withFaceLandmarks()
      .withFaceExpressions();

    // LOGGING CERTAIN LANDMARKS
    // console.log(detections)
    if(detections.length !== 0){
      const landmarks = detections[0]["landmarks"];
      face.nose = landmarks.getNose()[0];
      face.mouth = landmarks.getMouth()[0];
      face.eye = landmarks.getLeftEye()[0];

      //when not doing this it will update the camera component before the video is there => makes sure there aren't any startup errors
      if (updateable === true) {
        setmouthPos(face.mouth);
        setearPos(face.ear);
        seteyePos(face.eye);
        setnosePos(face.nose);
      } else {
        updateable = true;
      }

      //get the emotion
      const emotions = detections[0]["expressions"];
      emotion = { emotion: null, value: 0 };
      for (const key in emotions) {
        if (emotion.value <= 1 && emotion.value < emotions[key]) {
          emotion.emotion = key;
          emotion.value = emotions[key];
        }
      }
      setEmotion(emotion.emotion);
      // console.log(
      //   "filtered emotion: ",
      //   emotion.emotion,
      //   " value: ",
      //   emotion.value
      // );

      //set specific colors
      switch (emotion.emotion) {
        case "neutral":
          setPrimaryColor("#f1c7b2");
          setSecondaryColor("#f5d7c8");
          setTertiaryColor("#c08879");
          break;
        case "happy":
          setPrimaryColor("#FFF89A");
          setSecondaryColor("#9ADCFF");
          setTertiaryColor("#FF8AAE");
          break;
        case "sad":
          setPrimaryColor("#2a3b90");
          setSecondaryColor("#bbc392");
          setTertiaryColor("#0f0f18");
          break;
        case "surprised":
          setPrimaryColor("#ac94c6");
          setSecondaryColor("#c96d84");
          setTertiaryColor("#b3c694");
          break;
        case "angry":
          setPrimaryColor("#e72222");
          setSecondaryColor("#561743");
          setTertiaryColor("#f4ffbe");
          break;
        case "disgusted":
          setPrimaryColor("#67D224");
          setSecondaryColor("#FF7C7C");
          setTertiaryColor("#F8FDA2");
          break;
        case "fearful":
          setPrimaryColor("#7b3fa5");
          setSecondaryColor("#ac9aba");
          setTertiaryColor("#483e54");
          break;
        default:
          setPrimaryColor("#FFFFFF");
          setSecondaryColor("#FFFFFF");
          setTertiaryColor("#FFFFFF");
          break;
      }

    }
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
