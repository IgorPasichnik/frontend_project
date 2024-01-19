import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { LoginPage } from "../../pages/LoginPage/LoginPage.js";
import { LocationPage } from "../../pages/LocationPage/LocationPage";
import { ServicePage } from "../../pages/ServicePage/ServicePage.js";
import { RegistrationPage } from "../../pages/RegistrationPage/RegistrationPage.js";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage.js";
import { EntryPage } from "../../pages/EntryPage/EntryPage.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/entry" element={<EntryPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
