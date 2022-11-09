const Welcome = () => {
  const styles = {
    divStyle: { paddingTop: "20%" },
    headingStyle: {
      margin: 0,
      fontSize: 56,
    },
  };

  return (
    <div style={styles.divStyle}>
      <h1 style={styles.headingStyle}>Welcome to USERZZZ!</h1>
    </div>
  );
};

export default Welcome;
