import React, { useState } from "react";

import {
  Stack,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";
import styled from "@emotion/styled";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useSSR } from "react-i18next";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

const ChatInput = ({setOpenPicker}) => {
  return (
    <StyledInput
      InputProps={{
        disableUnderline: true,
        //  putting other mui element in input field"

        startAdornment: (
          <InputAdornment>
            <IconButton>
              <LinkSimple></LinkSimple>
            </IconButton>
          </InputAdornment>
        ),

        endAdornment: (
          <InputAdornment>
            <IconButton onClick={()=>{
              setOpenPicker((a)=> !a); // a : current value of openPicker
            }}>
              <Smiley></Smiley>
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
      placeholder="Write a message.."
      variant="filled"
    ></StyledInput>
  );
};

const Footer = () => {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = useState(false);

  return (
    <Box
      p={2}
      sx={{
        backgroundColor:
          theme.palette.mode === "light"
            ? "#f8faff"
            : theme.palette.background.default,
        boxShadow: "0 0 2px rgba(0,0,0,.25)",
        width: "100%",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={3}
      >
        <Stack sx={{ width: "100%" }}>
          <Box
            sx={{
              zIndex: 5,
              display: openPicker ? "inline" : "none",
              position: "fixed",
              right: 90,
              bottom: 85,
            }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>
          <ChatInput setOpenPicker={setOpenPicker} />
        </Stack>

        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{ height: "100%", width: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <IconButton>
              <PaperPlaneTilt color="#fff"></PaperPlaneTilt>
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
