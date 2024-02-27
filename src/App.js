import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import Divider from "@mui/material/Divider";

function App() {
  const [day, setDay] = React.useState("");

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleChange = (event) => {
    setDay(event.target.value);
  };

  return (
    <div style={{ padding: "20px", display: "flex", gap: "20px" }}>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Day</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={day}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Monday</MenuItem>
            <MenuItem value={20}>Tuesday</MenuItem>
            <MenuItem value={30}>Wednesday</MenuItem>
            <MenuItem value={40}>Thursday</MenuItem>
            <MenuItem value={50}>Friday</MenuItem>
            <MenuItem value={60}>Saturday</MenuItem>
            <MenuItem value={70}>Saunday</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          bgcolor: "background.paper",
          color: "text.secondary",
          "& svg": {
            m: 1,
          },
        }}
      >
        <FormatBoldIcon />
        <Divider orientation="vertical" variant="middle" flexItem />
        <FormatItalicIcon />
      </Box>
    </div>
  );
}

export default App;
