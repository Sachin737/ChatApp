import Chats from "./Chats";
import { Stack, Box } from "@mui/system";
import Conversation from "../../components/Conversation";
import { useTheme } from "@emotion/react";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        <Chats />
        <Box
          sx={{
            height: "100%",
            width: "calc(100vw - 450px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#f0f4fa"
                : theme.palette.background.paper,
          }}
        >
          <Conversation />
        </Box>
      </Stack>
    </>
  );
};

export default GeneralApp;
