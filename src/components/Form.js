import useStore from "./Store";

const Form = () =>{
    const lineWidth = useStore((state) => state.lineWidth);
    const setLineWidth = useStore((state) => state.setLineWidth);

    return (
      <>
        <form>
            <label for="width">Line Width</label>
          <input
            type={"range"}
            name="width"
            value={lineWidth}
            min={11}
            max={26}
            onChange={(e) => setLineWidth(e.target.value)}
          />
        </form>
      </>
    );
}

export default Form;