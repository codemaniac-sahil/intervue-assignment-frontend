import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import RoleSelection from "./components/RoleSelection";
import Teacher from "./components/Teacher";
import Student from "./components/Student";
import { theme } from "./theme/theme";
import { io } from "socket.io-client";

const App = () => {
  const [isTeacher, setIsTeacher] = useState(null);
  const socket = io("http://localhost:3001"); // Replace with actual socket connection

  const handleRoleSelection = (role) => {
    setIsTeacher(role === "teacher");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#F2F2F2', minHeight: '100vh', width: '100vw' }}>


        {isTeacher === null ? (
          <RoleSelection onRoleSelect={handleRoleSelection} />
        ) : isTeacher ? (
          <Teacher socket={socket} />
        ) : (
          <Student socket={socket} />
        )}


      </Box>

    </ThemeProvider>
  );
};

export default App;
