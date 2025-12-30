import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PgHeader } from "./Pg/PgHeader/PgHeader";
import HomePage from "./Pg/HomePage/HomePage";
import LoginPage from "./Pg/LoginPage/LoginPage";
import CallWaitingPage from "./Pg/CallWaitingPage/CallWaitingPage";
import { LKKabinet } from "./LK/LKKabinet";
import { LKPaymentPage } from "./LK/LKPaymentPage";
import { LKTariffsPage } from "./LK/LKTariffsPage";


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
        <Route path="/call-waiting" element={<CallWaitingPage />} />
        <Route path="/lk" element={<LKKabinet />} />
        <Route path="/lk/payment" element={<LKPaymentPage />} />
        <Route path="/lk/tariffs" element={<LKTariffsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;