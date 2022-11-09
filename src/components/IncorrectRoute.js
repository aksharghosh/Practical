import { useState } from "react";
import { Navigate } from "react-router-dom";

const IncorrectRoute = () => {
  const styles = {
    divStyle: { paddingTop: "20%" },
    headingStyle: {
      margin: 0,
      fontSize: 56,
    },
  };

  const [time, setTime] = useState(3);

  if (time > 0) {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }

  return (
    <div style={styles.divStyle}>
      <h1 style={styles.headingStyle}>404 Page Not Found!</h1>
      <h3>Redirecting to Home in...</h3>
      <h1>{time}</h1>
      {!time && <Navigate to="/" replace />}
    </div>
  );
};

export default IncorrectRoute;
