import { React, useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Box,
  Stack,
  IconButton,
  Divider,
  Avatar,
  MenuItem,
  Menu,
} from "@mui/material";
import { Gear } from "phosphor-react";
import { Nav_Buttons } from "../../data";
import useSettings from "../../hooks/useSettings";
import { faker } from "@faker-js/faker";
import AntSwitch from "../../components/AntSwitch";
import Logo from "../../assets/Images/logo.ico";
import { Profile_Menu } from "../../data";

const SideBar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0); // for selected icon from Nav_Buttons
  const { onToggleMode } = useSettings();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.neutral,
        height: "100vh",
        width: 100,
        padding: 2,
      }}
    >
      <Stack
        direction="column"
        justifyContent={"space-between"}
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
        spacing={4}
      >
        <Stack alignItems={"center"} spacing={4}>
          <Box
            sx={{
              backgroundColor: "blue",
              height: 64,
              width: 64,
              borderRadius: 1.5, // numeric value is multiplied by 8 i.e 1.5 x 8 = 12px (material UI spacing)
            }}
          >
            <img src={Logo} alt={"Chat app Logo"} />
          </Box>

          <Stack
            spacing={4}
            sx={{ width: "max-content" }}
            alignItems="center"
            direction="column"
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  {/* IconButton make icon clickable */}
                  <IconButton
                    key={el.index}
                    sx={{ width: "max-content", color: "white" }}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(el.index);
                  }}
                  key={el.index}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                >
                  {el.icon}
                </IconButton>
              )
            )}
            <Divider orientation="horizontal" sx={{ width: "48px" }}></Divider>
            {selected === 3 ? (
              <Box
                p={1}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "white" }}>
                  <Gear></Gear>
                </IconButton>
              </Box>
            ) : (
              <IconButton
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
                onClick={() => {
                  setSelected(3);
                }}
              >
                <Gear></Gear>
              </IconButton>
            )}
          </Stack>
        </Stack>

        <Stack spacing={4} alignItems="center">
          <AntSwitch
            onChange={() => {
              onToggleMode();
            }}
            defaultChecked
          />
          <Avatar
            src={faker.image.avatar()}
            style={{ cursor: "pointer" }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          ></Avatar>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            transformOrigin={{
              // creates an origin for this element
              vertical: "bottom",
              horizontal: "left",
            }}
            anchorOrigin={{
              // where relative to Menu to view popup
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Stack>
              {Profile_Menu.map((el) => (
                <MenuItem onClick={handleClick}>
                  <Stack
                    sx={{ width: 100 }}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
