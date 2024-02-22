import { ThreeCircles } from "react-loader-spinner";

export const Loader = () => (
  <>
    <div>Loading data...</div>
    <ThreeCircles
      visible={true}
      height="30"
      width="50"
      color="blueviolet"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </>
);

export default Loader;
