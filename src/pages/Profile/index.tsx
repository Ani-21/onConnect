import Rightbar from "@/components/Profile/Rightbar";
import Sidebar from "@/components/Navigation/Sidebar";
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const ProfilePage = () => (
  <Box sx={{ mx: "auto" }}>
    <Stack direction="row" justifyContent="space-between">
      <Sidebar />
      <Box flex={2} m={2}>
        <Outlet />
      </Box>
      <Rightbar />
    </Stack>
  </Box>
);

export default ProfilePage;
