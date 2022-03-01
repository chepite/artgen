import useStore from "./Store";

const Eye = ({translator}) => {
  const eyePos = useStore((state) => state.eyePos);
  const tertiaryColor = useStore((state) => state.tertiaryColor);
  return (
    <>
      <path
        transform={`scale(0.4), translate(${2 * eyePos.x + translator},${
          2 * eyePos.y
        })`}
        //test
        fill="none"
        stroke={tertiaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={15}
        //test
        className="cls-1"
        d="M248.16,831.48a593.49,593.49,0,0,0,8.67,101.32,41.87,41.87,0,0,0,39.83,34.48q11.44.45,23,.45c325.93,0,590.16-264.22,590.16-590.16a593.49,593.49,0,0,0-8.67-101.32,41.88,41.88,0,0,0-39.83-34.48q-11.46-.45-23-.45C512.38,241.32,248.16,505.55,248.16,831.48Z"
      />
      <line
        //test
        transform={`scale(0.4), translate(${2 * eyePos.x + translator},${
          2 * eyePos.y
        })`}
        fill="none"
        stroke={tertiaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={15}
        //test
        className="cls-1"
        x1="861.34"
        y1="241.77"
        x2="861.34"
        y2="112.27"
      />
      <line
        //test
        transform={`scale(0.4), translate(${2 * eyePos.x + translator},${
          2 * eyePos.y
        })`}
        fill="none"
        stroke={tertiaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={15}
        //test
        className="cls-1"
        x1="420.17"
        y1="415.03"
        x2="287.98"
        y2="301.23"
      />
      <line
        //test
        transform={`scale(0.4), translate(${2 * eyePos.x + translator},${
          2 * eyePos.y
        })`}
        fill="none"
        stroke={tertiaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={15}
        //test
        className="cls-1"
        x1="256.83"
        y1="932.8"
        x2="125.41"
        y2="932.8"
      />
      <circle
        //test
        transform={`scale(0.4), translate(${2 * eyePos.x + translator},${
          2 * eyePos.y
        })`}
        fill="none"
        stroke={tertiaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={15}
        //test
        className="cls-1"
        cx="579"
        cy="604.53"
        r="180.41"
      />
      <circle
        //test
        transform={`scale(0.4), translate(${2 * eyePos.x + translator},${
          2 * eyePos.y
        })`}
        fill="none"
        stroke={tertiaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={15}
        //test
        className="cls-1"
        cx="579"
        cy="604.53"
        r="89.9"
      />
    </>
  );
};
export default Eye;
