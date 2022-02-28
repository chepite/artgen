import Mouth from './Mouth'
import Eye from './Eye'
import Ear from './Ear';
const FaceComp = () =>{
    return (
      <>
        <svg viewBox="0 0 1920 1080">
          <Eye />
          <Ear />
          <Mouth />
          {/* mirror these components */}
          {/* -<Eye />
          -<Ear /> */}
        </svg>
      </>
    );
}
export default FaceComp;