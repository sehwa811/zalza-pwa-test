import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./routes/enterpages/loginPage";
import PasswordPage from "./routes/enterpages/passwordPage";
import UserRouter from "./UserRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/password" element={<PasswordPage />} />
        <Route path="/*" element={<UserRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
