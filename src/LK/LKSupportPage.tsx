import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LKHeader } from './LKHeader/LKHeader';
import { SupportPage } from './SupportPage/SupportPage';
import ChatBot from '../Pg/ChatBot/ChatBot';

export const LKSupportPage = () => {
  const location = useLocation();
  const userPhone = (location.state as { userPhone?: string })?.userPhone || '+7 (900) 111-11-11';
  const userName = (location.state as { userName?: string })?.userName || 'Печкин Игорь Иванович';
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-[#F2F3F7]">
      <LKHeader userPhone={userPhone} userName={userName} />
      <div className="pt-24">
        <SupportPage onOpenChat={() => setIsChatOpen(true)} />
      </div>
      <ChatBot isOpenExternal={isChatOpen} onToggleExternal={setIsChatOpen} />
    </div>
  );
};
