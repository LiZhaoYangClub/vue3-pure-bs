import elementResizeDetectorMaker from "element-resize-detector";

const useResizeHook = () => {
  const erd = elementResizeDetectorMaker();
  return {
    erd
  };
};

export default useResizeHook;
