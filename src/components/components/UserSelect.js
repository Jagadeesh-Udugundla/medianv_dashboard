import * as React from 'react';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('Freight');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth:120}}>
      <FormControl fullWidth variant="standard">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          sx={{ border: 'none',marginRight:"20px" }}
          onChange={handleChange}
        >
          <MenuItem value={age}>Freight EG</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}