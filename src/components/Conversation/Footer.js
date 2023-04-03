import React, { useState } from "react";

import {
  Stack,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
  Fab,
  Tooltip,
} from "@mui/material";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import styled from "@emotion/styled";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

const ChatInput = ({ setOpenPicker }) => {
  const [openAction, setOpenAction] = useState(false);

  return (
    <StyledInput
      InputProps={{
        disableUnderline: true,
        //  putting other mui element in input field"

        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack
              sx={{
                position: "relative",
                display: openAction ? "inline" : "none",
              }}
            >
              {Actions.map((el) => (
                <Tooltip title={el.title} placement={"right"}>
                  <Fab
                    sx={{
                      backgroundColor: el.color,
                      position: "absolute",
                      top: -el.y,
                      left: -5,
                    }}
                  >
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>

            <InputAdornment>
              <IconButton onClick={()=>{
                setOpenAction((a)=>!a);
              }}>
                <LinkSimple></LinkSimple>
              </IconButton>
            </InputAdornment>
          </Stack>
        ),

        endAdornment: (
          <InputAdornment>
            <IconButton
              onClick={() => {
                setOpenPicker((a) => !a); // a : current value of openPicker
              }}
            >
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
