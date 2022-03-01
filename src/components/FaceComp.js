import Mouth from "./Mouth";
import Eye from "./Eye";

const FaceComp = () => {
  return (
    <>
      <svg viewBox="0 0 1920 1080">
        <Eye translator={300} />
        <Mouth />
        <Eye translator={1500} />
      </svg>
    </>
  );
};
export default FaceComp;
