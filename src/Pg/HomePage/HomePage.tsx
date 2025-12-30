import { PgAddress } from "../PgAddress/PgAddress";
import PgContactSection from "../ContactSection/ContactSection";
import UltimateOfferResult from "../UltimateOfferResult/UltimateOfferResult";
import CooperativeSections from "../CooperativeSections/CooperativeSections";

const HomePage = () => {
  return (
    <>
      <main>
        <PgAddress />
        <UltimateOfferResult />
        <CooperativeSections />
      </main>
      <PgContactSection />
    </>
  );
};

export default HomePage;

