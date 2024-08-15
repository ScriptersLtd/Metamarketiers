
const ZigzagPath = ({pathRef,classes}) => {
  return (
    <svg className="sticky top-0" width="530" height="900" viewBox="0 0 530 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    id="zigzag"
    ref={pathRef}
    d="M1 1V514.285C3.33333 530.795 18.8 565.014 62 569.816H466.5C483.5 570.15 526 576.32 529 621.345V900"
    stroke="#7528CF"
    stroke-opacity="0.5"
    stroke-linecap="square"
    stroke-linejoin="round"
    stroke-dasharray="20 23"
  />
</svg>

   
  );
};

export default ZigzagPath;
