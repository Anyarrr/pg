import { PgAddress } from "./Pg/PgAddress/PgAddress";
import { PgHeader } from "./Pg/PgHeader/PgHeader";
import { PgTariffsSection } from "./Pg/PgTariffsSection/PgTariffsSection";
import PgBenefitsSection from "./Pg/BenefitsSection/PgBenefitsSection";
import PgContactSection from "./Pg/ContactSection/ContactSection";
import FastConnect from "./Pg/FastConnect/FastConnect";
import DownloadApp from "./Pg/DownloadApp/DownloadApp";
import Support from "./Pg/Support/Support";
import ChatBot from "./Pg/ChatBot/ChatBot";
import UltimateOffer from "./Pg/UltimateOffer/UltimateOffer";
import UltimateOfferClone from "./Pg/UltimateOfferClone/UltimateOfferClone";
import UltimateOfferResult from "./Pg/UltimateOfferResult/UltimateOfferResult";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <PgHeader />
      <main>
        <PgAddress />
        <UltimateOfferResult />
        <FastConnect />
        <PgBenefitsSection />
        <Support />
        <DownloadApp />
      </main>
      <PgContactSection />
      <ChatBot />
    </div>
  );
}

export default App;