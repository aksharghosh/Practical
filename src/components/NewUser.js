import NewUserForm from "./NewUserForm";
import Spinner from "../ui/Spinner";
import { useState, useEffect } from "react";

const NewUser = () => {
  const [loading, setLoading] = useState(false);
  const [infoDiv, setInfoDiv] = useState();

  const formData = (data) => {
    setLoading(true);
    const url = "https://reqres.in/api/users";
    const { firstName: first_name, lastName: last_name, email } = data;
    const toPost = { first_name, last_name, email };

    const callPostHttp = async () => {
      const definePostHttp = async () => {
        console.log(toPost);
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(toPost),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(
            "Whoops! Something went wrong. Error code - " + response.status
          );
        }
        const postedResponse = await response.json();
        console.log(postedResponse);
        setLoading(false);
        setInfoDiv(
          <h5 style={{ backgroundColor: "#66cc66", padding: "5px" }}>
            Posted successfully!
          </h5>
        );
      };

      try {
        await definePostHttp();
      } catch (error) {
        setLoading(false);
        setInfoDiv(
          <h5 style={{ backgroundColor: "#ff3333", padding: "5px" }}>
            {error.message}
          </h5>
        );
      }
    };
    callPostHttp();
  };

  useEffect(() => {
    if (infoDiv !== "") {
      setTimeout(() => {
        setInfoDiv("");
      }, 3000);
    }
  }, [infoDiv]);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <div>
          {infoDiv}
          <NewUserForm formDataHandler={formData} />
        </div>
      )}
    </>
  );
};

export default NewUser;
