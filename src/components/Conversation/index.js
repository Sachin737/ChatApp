import React from "react";
import { Box, Stack } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

const Conversation = () => {
  return (
    <Stack maxHeight="100vh" height={"100%"} width="auto">
      {/* HEADER BOX */}
      <Header></Header>

      {/* CHAT */}
      <Box sx={{ flexGrow: 1, width: "100%" }}>Chat</Box>

      {/* INPUTBAR */}
      <Footer></Footer>
    </Stack>
  );
};

export default Conversation;
