import User from "./User";
import Spinner from "../ui/Spinner";
import { apiSliceActions } from "../store/Store";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Users = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const apiData = useSelector((state) => state.apiSliceReducer.data);

  useEffect(() => {
    setIsLoading(true);
    const defineHttp = async (page = 1, paginatedData = []) => {
      const response = await fetch(`https://reqres.in/api/users/?page=${page}`);
      if (!response.ok) {
        throw new Error(
          "Whoops! Received invalid API response. Could not fetch details... "
        );
      }
      const fetchedData = await response.json();
      const colatedPaginatedData = [...paginatedData, ...fetchedData.data];
      console.log(colatedPaginatedData);
      if (fetchedData.data.length !== 0) {
        page++;
        return defineHttp(page, colatedPaginatedData);
      } else {
        console.log(colatedPaginatedData);
        dispatch(apiSliceActions.setApiData(colatedPaginatedData));
        setIsLoading(false);
      }
    };
    const callHttp = async () => {
      try {
        await defineHttp();
      } catch (error) {
        dispatch(apiSliceActions.setApiData([]));
        setError(error.message);
        setIsLoading(false);
      }
    };
    callHttp();
  }, [dispatch]);

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && apiData.length > 0 && (
        <h2 style={{ marginBottom: "20px" }}>ALL USERS</h2>
      )}
      {!isLoading && apiData.length === 0 && (
        <div>
          <h2>ERROR</h2>
          <h3>{error}</h3>
        </div>
      )}
      {!isLoading && apiData.length > 0 && <User />}
    </>
  );
};

export default Users;
