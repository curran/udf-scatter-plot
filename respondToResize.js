export const respondToResize = ({ state, setState }) => {
  const handleResize = () => {
    setState((state) => ({
      ...state,
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  };
  const { width, height } = state;
  if (width === undefined) {
    handleResize();
    return null;
  } else {
    window.onresize = handleResize;
    return { width, height };
  }
};
