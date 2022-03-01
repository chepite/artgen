import useStore from "./Store";

const Mouth = () => {
    const mouthPos = useStore((state) => state.mouthPos);
    const tertiaryColor = useStore((state) => state.tertiaryColor);

  return (
    <>
      <path
        // test
        transform={`scale(0.5), translate(${300 + 2 * mouthPos.x},${
          300 + 2 * mouthPos.y
        })`}
        fill="none"
        stroke={tertiaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={11}
        // test
        className="cls-1"
        d="M801.64,526.5s-423.37-358-487.12-111.15S801.64,526.5,801.64,526.5Z"
      />
      <path
        // test
        transform={`scale(0.5), translate(${300 + 2 * mouthPos.x},${
          300 + 2 * mouthPos.y
        })`}
        fill="none"
        stroke={tertiaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={11}
        // test
        className="cls-1"
        d="M801.64,528.91S460.12,553,520.48,683.42C585.65,824.25,801.64,528.91,801.64,528.91Z"
      />
      <path
        // test
        transform={`scale(0.5), translate(${300 + 2 * mouthPos.x},${
          300 + 2 * mouthPos.y
        })`}
        fill="none"
        stroke={tertiaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={11}
        // test
        className="cls-1"
        d="M801.64,528.91c4.5,6.72-338.81,28.11-281.16,154.51,64.4,141.18,281.16-154.51,281.16-154.51"
      />
    </>
  );
};
export default Mouth;
