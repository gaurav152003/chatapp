import { Box } from "@chakra-ui/layout";
import { useEffect } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../context/ChatProvider";

const Chatpage = () => {
  const { user } = ChatState();

  useEffect(() => {
    if (user && !sessionStorage.getItem("firstLoginRefreshed")) {
      sessionStorage.setItem("firstLoginRefreshed", "true");
      window.location.reload(); // refresh only once
    }
  }, [user]);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        height="91.5vh"
        padding="10px"
      >
        {user && <MyChats />}
        {user && <Chatbox />}
      </Box>
    </div>
  );
};

export default Chatpage;
