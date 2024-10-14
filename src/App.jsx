import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import { AuthProvider } from "./context/authContext";
const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/auth" element={<AuthPage />}></Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
