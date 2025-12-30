import { useLocation } from 'react-router-dom';
import { LKHeader } from './LKHeader/LKHeader';
import { PgTariffsSection } from './PgTariffsSection/PgTariffsSection';

export const LKTariffsPage = () => {
  const location = useLocation();
  const userPhone = (location.state as { userPhone?: string })?.userPhone || '+7 (900) 111-11-11';
  const userName = (location.state as { userName?: string })?.userName || 'Печкин Игорь Иванович';
  
  return (
    <div className="min-h-screen bg-white">
      <LKHeader userPhone={userPhone} userName={userName} />
      <PgTariffsSection />
    </div>
  );
};

