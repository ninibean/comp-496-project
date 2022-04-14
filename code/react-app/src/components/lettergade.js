import React from "react";
import Box from '@mui/material/Box';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function BasicSelect() {
    const [grade, setGrade] = React.useState('');
  
    const handleChange = (event) => {
      setGrade(event.target.value);
    };
  
    return (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Grade</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={grade}
            label="Grade"
            onChange={handleChange}
          >
            <MenuItem value={4.00}> A </MenuItem>
            <MenuItem value={3.70}> A- </MenuItem>
            <MenuItem value={3.30}> B+ </MenuItem>
            <MenuItem value={3.00}> B </MenuItem>
            <MenuItem value={2.70}> B- </MenuItem>
            <MenuItem value={2.30}> C+ </MenuItem>
            <MenuItem value={2.00}> C </MenuItem>
            <MenuItem value={1.70}> C- </MenuItem>
            <MenuItem value={1.30}> D+ </MenuItem>
            <MenuItem value={1.00}> D </MenuItem>
            <MenuItem value={0.00}> F </MenuItem>
          </Select>
        </FormControl>
    );
  }
  