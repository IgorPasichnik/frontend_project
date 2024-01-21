import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login.jsx";
import { Registration } from "./pages/Registration";
import { AuthProvider, useAuthContext } from "./context/authContext";
import { store } from "./store";

const PrivateRoute = ({ children }) => {
  const { isLogin } = useAuthContext();

  if (isLogin === false) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Main />
                </PrivateRoute>
              }
            />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
