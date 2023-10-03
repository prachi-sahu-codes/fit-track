import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/account/SignUp";
import Login from "./pages/account/Login";
import RequiresAuth from "./auth/RequiresAuth";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";
import Workout from "./pages/workout/Workout";
import Diet from "./pages/diet/Diet";
import Goal from "./pages/goal/Goal";
import { Loader } from "./components/loader/Loader";
import { useSelector } from "react-redux";

const App = () => {
  const loading = useSelector((state) => state.auth.loading);
  return (
    <div className="w-full min-h-screen bg-bgWhole">
      {loading && <Loader />}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequiresAuth>
              <Dashboard />
            </RequiresAuth>
          }
        />
        <Route
          path="/workout"
          element={
            <RequiresAuth>
              <Workout />
            </RequiresAuth>
          }
        />
        <Route
          path="/diet"
          element={
            <RequiresAuth>
              <Diet />
            </RequiresAuth>
          }
        />
        <Route
          path="/goal"
          element={
            <RequiresAuth>
              <Goal />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
