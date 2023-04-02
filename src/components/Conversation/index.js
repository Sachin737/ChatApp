import React from "react";
import { Box, Stack } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";
import Messages from "./Messages";
import Scrollbars from "react-custom-scrollbars";

const Conversation = () => {
  return (
    <Stack maxHeight="100vh" height={"100%"} width="auto">
      {/* HEADER BOX */}
      <Header></Header>

      {/* CHAT */}
      <Box sx={{ flexGrow: 1, height: "100%", width: "100%" }}>
        <Scrollbars autoHide={true} autoHideTimeout={500}>
          <Messages></Messages>
        </Scrollbars>
      </Box>

      {/* INPUTBAR */}
      <Footer></Footer>
    </Stack>
  );
};

export default Conversation;
