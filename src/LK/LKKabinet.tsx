import { useLocation } from 'react-router-dom';
import LKDashboard from './LKDashboard/LKDashboard';

export const LKKabinet = () => {
    const location = useLocation();
    const userPhone = (location.state as { userPhone?: string })?.userPhone || '+7 (900) 111-11-11';
    const userNameDashboard = (location.state as { userNameDashboard?: string })?.userNameDashboard || 'Печкин Игорь Иванович';
    
    return (
        <LKDashboard userPhone={userPhone} userName={userNameDashboard} />
    )
}