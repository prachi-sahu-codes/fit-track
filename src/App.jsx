import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/account/SignUp";
import Login from "./pages/account/Login";
import RequiresAuth from "./auth/RequiresAuth";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-bgWhole">
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
      </Routes>
    </div>
  );
};

export default App;
