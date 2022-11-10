import ThemeCurrent from "./ui/ThemeCurrent";
import Layout from "./ui/Layout";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import ContextProvider from "./store/Context";
import IncorrectRoute from "./components/IncorrectRoute";
import Welcome from "./components/Welcome";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <ContextProvider>
        <ThemeCurrent>
          <Layout>
            <Routes>
              <Route path="/" exact element={<Welcome />} />
              <Route path="/users" exact element={<Users />} />
              <Route path="/newuser" exact element={<NewUser />} />
              <Route path="*" element={<IncorrectRoute />} />
            </Routes>
          </Layout>
        </ThemeCurrent>
      </ContextProvider>
    </div>
  );
}

export default App;
