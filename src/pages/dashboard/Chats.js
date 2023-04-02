import React from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Button,
  Divider,
  Avatar,
  styled,
  Badge,
  useTheme,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import { MagnifyingGlass, CircleDashed, ArchiveBox } from "phosphor-react";
import { Scrollbars } from "react-custom-scrollbars";

import Search from "../../components/Search/Search";
import SearchIconWrapper from "../../components/Search/SearchIconWrapper";
import StyledInputBase from "../../components/Search/StyledInputBase";

import { ChatList } from "../../data";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatElement = ({ id, name, img, time, msg, unread, online }) => {
  const theme = useTheme();

  //Capital Letter in start of component name (react)
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#ffffff"
            : theme.palette.background.paper,
        borderRadius: 1,
      }}
      p={2}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}

          <Stack direction={"column"} spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>

        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            {time}
          </Typography>
          <Badge badgeContent={unread} color="primary"></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const Chats = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: 350,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.default,
        boxShadow: "0 0px 0px rgba(0,0,0,0.25)",
      }}
    >
      <Stack
        sx={{ padding: "24px", height: "100vh" }}
        direction="column"
        spacing={2}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed></CircleDashed>
          </IconButton>
        </Stack>

        <Stack sx={{ width: "100%" }} direction={"row"}>
          <Search
            sx={{
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#EAF2FE"
                  : theme.palette.background.paper,
            }}
          >
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search Chats.." />
          </Search>
        </Stack>

        <Stack spacing={1}>
          <Stack direction={"row"} alignItems="center" spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archived</Button>
          </Stack>
          <Divider />
        </Stack>

        <Scrollbars autoHide={true} autoHideTimeout={500}>
          <Stack spacing={3}>
            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                Pinned
              </Typography>

              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </Stack>

            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                All Chats
              </Typography>

              {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </Stack>
          </Stack>
        </Scrollbars>
      </Stack>
    </Box>
  );
};

export default Chats;
