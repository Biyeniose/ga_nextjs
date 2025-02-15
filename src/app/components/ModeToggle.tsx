"use client";

import * as React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useColorScheme } from "@mui/joy/styles"; // Adjust the import based on your setup

type Mode = "system" | "light" | "dark"; // Define the type for `mode`

const ModeToggle: React.FC = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState<boolean>(false);

  // Necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleChange = (
    event: React.SyntheticEvent | null,
    newMode: Mode | null,
  ) => {
    if (newMode) {
      setMode(newMode); // Ensure `newMode` is of type `Mode`
    }
  };

  return (
    <Select value={mode} onChange={handleChange} sx={{ width: "max-content" }}>
      <Option value="system">System</Option>
      <Option value="light">Light</Option>
      <Option value="dark">Dark</Option>
    </Select>
  );
};

export default ModeToggle;
