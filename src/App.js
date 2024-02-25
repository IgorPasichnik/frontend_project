import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage.js";
import { LoginPage } from "./pages/LoginPage/LoginPage.js";
import { LocationPage } from "./pages/LocationPage/LocationPage.js";
import { ServicePage } from "./pages/ServicePage/ServicePage.js";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage.js";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.js";
import { store } from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
