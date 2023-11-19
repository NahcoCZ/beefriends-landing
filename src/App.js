import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <Routes>
      <Route path="" element={<Main />} />
      <Route path="/*" element={<Navigate to="" />} />
      <Route path="/privacy-policy" element={<Privacy />} />
    </Routes>
  );
}
