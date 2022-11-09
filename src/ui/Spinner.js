import spinner from "./spinner.gif";

const Spinner = () => {
  const styles = {
    divStyle: { paddingTop: "20%" },
  };
  return (
    <div style={styles.divStyle}>
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

export default Spinner;
