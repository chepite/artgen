import React from "react";
import * as faceapi from "face-api.js";


const test = async () => {
  console.log("testing")
   Promise.all([
    await faceapi.loadSsdMobilenetv1Model("/models"),
    // await faceapi.loadTinyFaceDetectorModel('/models'),
    await faceapi.loadFaceLandmarkModel("/models"),
    //await faceapi.loadFaceLandmarkTinyModel('/models'),
    //await faceapi.loadFaceRecognitionModel('/models'),
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
const detect = async () => { 
  console.log("detecting")
  const detections = await faceapi
    .detectAllFaces(videosrc)
    .withFaceLandmarks()
    .withFaceExpressions();
  // LOGGING CERTAIN LANDMARKS
    const landmarks = detections[0]["landmarks"];
  //  const jawOutline = landmarks.getJawOutline();
    //const nose = landmarks.getNose();
    const mouth = landmarks.getMouth()[0];
  //  const leftEye = landmarks.getLeftEye();
  //  const rightEye = landmarks.getRightEye();
  //  const leftEyeBbrow = landmarks.getLeftEyeBrow();
  //  const rightEyeBrow = landmarks.getRightEyeBrow();

  //  console.log("nose: ", nose);

    console.log("mouth: ", mouth)

  //get the emotion
  const emotions = detections[0]["expressions"];
   emotion = {emotion: null, value: 0};
  for(const key in emotions){
    if(emotion.value <= 1 && emotion.value < emotions[key]){
      emotion.emotion= key;
      emotion.value = emotions[key];
    }
  }
  console.log("filtered emotion: ", emotion.emotion, " value: ", emotion.value);
  
  //make emotion a state instead of a local value in this function
  detect()  
};


const Camera =  () => {
  return (
    <>
    <button onClick={detect}></button>
      <video id="video" width="720" height="560" autoPlay muted></video>
    </>
  );
};

export default Camera;
