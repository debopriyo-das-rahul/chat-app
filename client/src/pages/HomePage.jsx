import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
import { ChatContext } from '../../context/ChatContext'

const HomePage = () => {
  const { selectedUser } = useContext(ChatContext);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
  setShowSidebar(false);
  }, [selectedUser]); 
  

 const gridLayout = selectedUser
  ? showSidebar
    ? 'md:grid-cols-[1fr_1.5fr_1fr]'
    : 'md:grid-cols-[1fr_2fr]'
    : 'md:grid-cols-2';
  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
      <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-full grid grid-cols-1 ${gridLayout}`}>
        
        <Sidebar />
        <ChatContainer setShowSidebar={setShowSidebar} />
        {showSidebar && <RightSidebar />}

      </div>
    </div>
  );
};

export default HomePage
