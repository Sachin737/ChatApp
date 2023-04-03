import {
  Link,
  Box,
  Divider,
  Stack,
  Typography,
  useTheme,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import {
  DotsThreeVertical,
  DownloadSimple,
  Image,
} from "phosphor-react";
import React from "react";

const Timeline = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Divider width="46%"></Divider>
      <Typography sx={{ color: theme.palette.text }} variant="caption">
        {el.text}
      </Typography>
      <Divider width="46%"></Divider>
    </Stack>
  );
};

const TextMessage = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      // alignItems={"center"}
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,

          width: "max-content",
          borderRadius: 1.5,
        }}
        p={1.5}
      >
        <Typography
          color={el.incoming ? theme.palette.text : "white"}
          variant="body2"
        >
          {el.message}
        </Typography>
      </Box>
      <MessageOptions />
    </Stack>
  );
};

const ImageMessage = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      // alignItems={"center"}
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,

          width: "max-content",
          borderRadius: 1.5,
        }}
        p={1.5}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            alt="Not found!"
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <Typography
            color={el.incoming ? theme.palette.text : "white"}
            variant="body2"
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
};

const ReplyMessage = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      // alignItems={"center"}
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,

          width: "max-content",
          borderRadius: 1.5,
        }}
        p={1.5}
      >
        <Stack spacing={1.5}>
          <Stack
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
            p={2}
            spacing={2}
          >
            <Typography variant="body2" color={theme.palette.text}>
              {el.message}
            </Typography>
          </Stack>

          <Divider width="100%"></Divider>

          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "white"}
          >
            {el.reply}
          </Typography>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
};

const LinkMessage = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      // alignItems={"center"}
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,

          width: "max-content",
          borderRadius: 1.5,
        }}
        p={1.5}
      >
        <Stack spacing={2}>
          <Stack
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
            alignItems={"start"}
            spacing={2}
            p={2}
          >
            <img
              src={el.preview}
              alt={"Thumbnail not found!"}
              style={{ width: "100%", maxHeight: 210, borderRadius: "10px" }}
            />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">
                Crate your chatting app
              </Typography>
              <Typography
                sx={{ color: theme.palette.primary.main }}
                variant="subtitle2"
                component={Link}
                to="//https://www.youtube.com"
              >
                www.youtube.com
              </Typography>
            </Stack>

            <Divider width="100%"></Divider>

            <Typography
              variant="body2"
              color={el.incoming ? theme.palette.text : theme.palette.main}
            >
              {el.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
};

const DocMessage = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      // alignItems={"center"}
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,

          width: "max-content",
          borderRadius: 1.5,
        }}
        p={1.5}
      >
        <Stack spacing={1}>
          <Stack
            direction={"row"}
            spacing={3}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
            p={1}
          >
            <Image size={48}></Image>

            <Typography
              variant="caption"
              color={el.incoming ? theme.palette.text : theme.palette.main}
            >
              Abstract.png
            </Typography>

            <IconButton>
              <DownloadSimple></DownloadSimple>
            </IconButton>
          </Stack>

          <Divider width="100%"></Divider>

          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#FFF"}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
};

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <DotsThreeVertical
        cursor={"pointer"}
        size={20}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack>
          {Message_options.map((el) => (
            <MenuItem onClick={handleClick}>{el.title}</MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};

export {
  DocMessage,
  Timeline,
  TextMessage,
  ImageMessage,
  ReplyMessage,
  LinkMessage,
  MessageOptions,
};
