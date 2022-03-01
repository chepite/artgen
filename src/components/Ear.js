import useStore from "./Store";

const Ear = ({translator}) => {
      const earPos = useStore((state) => state.earPos);

  return (
    <>
      <path
        transform={`scale(0.3), translate(${2 * earPos.x + translator},${
          2 * earPos.y + 900
        })`}
        stroke="#000"
        fill="none"
        strokeWidth={15}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="cls-1"
        d="M891.66,832.61C810,926.21,689.88,985.35,555.92,985.35,310,985.35,110.57,786,110.57,540S310,94.65,555.92,94.65A443.52,443.52,0,0,1,839.2,196.35"
      />
      <line
        transform={`scale(0.3), translate(${2 * earPos.x + translator},${
          2 * earPos.y + 900
        })`}
        stroke="#000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={55}
        className="cls-2"
        x1="362.53"
        y1="371.4"
        x2="699.74"
        y2="708.6"
      />
      <line
        transform={`scale(0.3), translate(${2 * earPos.x + translator},${
          2 * earPos.y + 900
        })`}
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeWidth={55}
        className="cls-2"
        x1="699.74"
        y1="371.4"
        x2="362.53"
        y2="708.6"
      />
    </>
  );
};
export default Ear;
