import ApplicationBar from "./ApplicationBar";

const Layout = (props) => {
  const styles = {
    divStyle: {
      textAlign: "center",
      height: "minContent",
      width: "100%",
      margin: 0,
    },
  };
  return (
    <>
      <ApplicationBar />
      <div style={styles.divStyle}>{props.children}</div>
    </>
  );
};

export default Layout;
