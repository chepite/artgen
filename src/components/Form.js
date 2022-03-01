import useStore from "./Store";

const Form = () =>{
    const lineWidth = useStore((state) => state.lineWidth);
    const setLineWidth = useStore((state) => state.setLineWidth);
    const emotion = useStore((state) => state.emotion);
    const setRotation = useStore((state) => state.setRotation);
    const rotation = useStore((state) => state.rotation);



    return (
      <>
        <p className="emotion">current emotion: {emotion}</p>
        <form className="form">
          <div className="form__row">
            <label htmlFor="width">Line Width: {lineWidth}</label>
            <input
              type={"range"}
              name="width"
              value={lineWidth}
              min={11}
              max={66}
              onChange={(e) => setLineWidth(e.target.value)}
            />
          </div>
          <div className="form__row">
            <label htmlFor="rotation">Rotation: {rotation} deg</label>
            <input
              type={"range"}
              name="rotation"
              value={rotation}
              min={0}
              max={359}
              onChange={(e) => setRotation(e.target.value)}
            />
          </div>
        </form>
      </>
    );
}

export default Form;