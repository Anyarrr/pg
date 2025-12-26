import { PgAddress } from "./Pg/PgAddress/PgAddress";
import { PgHeader } from "./Pg/PgHeader/PgHeader";
import PgContactSection from "./Pg/ContactSection/ContactSection";
import UltimateOfferResult from "./Pg/UltimateOfferResult/UltimateOfferResult";
import CooperativeSections from "./Pg/CooperativeSections/CooperativeSections";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <PgHeader />
      <main>
        <PgAddress />
        <UltimateOfferResult />
        <CooperativeSections />
      </main>
      <PgContactSection />
    </div>
  );
}

export default App;