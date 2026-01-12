import { useLocation } from 'react-router-dom';
import { LKHeader } from './LKHeader/LKHeader';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const LKHistoryPage = () => {
  const location = useLocation();
  const userPhone = (location.state as { userPhone?: string })?.userPhone || '+7 (900) 111-11-11';
  const userName = (location.state as { userName?: string })?.userName || 'Печкин Игорь Иванович';
  
  return (
    <div className="min-h-screen bg-[#F2F3F7]">
      <LKHeader userPhone={userPhone} userName={userName} />
      <TransactionHistory />
    </div>
  );
};
