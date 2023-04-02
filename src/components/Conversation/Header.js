import { useTheme } from "@emotion/react";
import { faker } from "@faker-js/faker";
import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import React from "react";
import StyledBadge from "../../components/StyleBadge";

const Header = () => {
  const theme = useTheme();
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
        sx={{
          width: "100%",
          height: "100%",
        }}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack spacing={2} direction={"row"}>
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          </Box>
          <Stack direction={"column"} spacing={0.2}>
            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>

        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <IconButton>
            <MagnifyingGlass></MagnifyingGlass>
          </IconButton>
          <IconButton>
            <VideoCamera></VideoCamera>
          </IconButton>
          <IconButton>
            <Phone></Phone>
          </IconButton>

          <Divider orientation="vertical" flexItem />

          <IconButton>
            <CaretDown></CaretDown>
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
