import React, { useState } from 'react'
import { ChatState } from '../Context/Chatprovider'
import SideDrawer from '../components/miscellaneous/SideDrawer';
import { Box } from '@chakra-ui/react';
import MyChats from '../components/MyChats';
import Chatbox from '../components/Chatbox';

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  return (
    <div style={{width:"100%"}}>
          {user && <SideDrawer/>}
          <Box style={{display:"flex" ,justifyContent:"space-between" ,width:"100%" ,height:"91.5vh" ,padding:"10px"}}>
        {user && <MyChats/>}
        {user && <Chatbox/>}
      </Box>
    </div>
  )
}

export default ChatPage
