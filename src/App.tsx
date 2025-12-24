import { PgAddress } from "./Pg/PgAddress/PgAddress";
import { PgHeader } from "./Pg/PgHeader/PgHeader";
import { PgTariffsSection } from "./Pg/PgTariffsSection/PgTariffsSection";
import PgBenefitsSection from "./Pg/BenefitsSection/PgBenefitsSection";
import PgContactSection from "./Pg/ContactSection/ContactSection";
import FastConnect from "./Pg/FastConnect/FastConnect";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <PgHeader />
      <main>
        <PgAddress />
        <PgTariffsSection />
        <FastConnect />
        <PgBenefitsSection />
      </main>
      <PgContactSection />
    </div>
  );
}

export default App;