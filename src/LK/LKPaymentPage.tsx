import { useLocation } from 'react-router-dom';
import { LKHeader } from './LKHeader/LKHeader';
import LKPayment from './LKPayment/LKPayment';

export const LKPaymentPage = () => {
  const location = useLocation();
  const userPhone = (location.state as { userPhone?: string })?.userPhone || '+7 (900) 111-11-11';
  const userName = (location.state as { userName?: string })?.userName || 'Печкин Игорь Иванович';
  
  return (
    <div className="min-h-screen bg-[#F8F9FD]">
      <LKHeader userPhone={userPhone} userName={userName} />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-6xl">
        <LKPayment />
      </main>
    </div>
  );
};

