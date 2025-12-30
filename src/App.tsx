import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PgHeader } from "./Pg/PgHeader/PgHeader";
import HomePage from "./Pg/HomePage/HomePage";
import LoginPage from "./Pg/LoginPage/LoginPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col min-h-screen">
            <PgHeader />
            <HomePage />
          </div>
        } />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;