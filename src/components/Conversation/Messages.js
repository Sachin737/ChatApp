import React from "react";
import { Stack, Box } from "@mui/material";
import { Chat_History } from "../../data";
import {
  ReplyMessage,
  Timeline,
  TextMessage,
  ImageMessage,
  LinkMessage,
  DocMessage,
} from "./MessageTypes";

const Messages = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          if (el.type === "divider") {
            return <Timeline el={el} />;
          } else {
            if (el.subtype === "doc") {
              return <DocMessage el={el}/>;
            } else if (el.subtype === "img") {
              return <ImageMessage el={el} />;
            } else if (el.subtype === "link") {
              return <LinkMessage el={el} />;
            } else if (el.subtype === "reply") {
              return <ReplyMessage el={el} />;
            } else {
              return <TextMessage el={el} />;
            }
          }
          return <></>;
        })}
      </Stack>
    </Box>
  );
};

export default Messages;
