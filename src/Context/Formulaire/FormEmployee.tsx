import React from 'react';
import { TextField, Grid, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'; // Importez les composants nécessaires
import departments from '../../Assets/data/Departement.json';

interface FormEmployeeProps {
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  dateOfBirth: string;
  setDateOfBirth: (value: string) => void;
  startDate: string;
  setStartDate: (value: string) => void;
  selectedDepartment: string;
  handleDepartmentChange: (event: SelectChangeEvent<string>) => void; 
}

const FormEmployee: React.FC<FormEmployeeProps> = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  dateOfBirth,
  setDateOfBirth,
  startDate,
  setStartDate,
  selectedDepartment,
  handleDepartmentChange,
}) => {
  return (
    <Grid container spacing={2} role="form">
      <Grid item xs={12} sm={6}>
        <TextField
          id="first-name"
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          fullWidth
          aria-label="First Name"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="last-name"
          label="Last Name"
          variant="outlined"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          fullWidth
          aria-label="Last Name"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="date-of-birth"
          label="Date of Birth"
          type="date"
          variant="outlined"
          value={dateOfBirth}
          onChange={e => setDateOfBirth(e.target.value)}
          InputLabelProps={{ shrink: true }}
          fullWidth
          aria-label="Date of Birth"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="start-date"
          label="Start Date"
          type="date"
          variant="outlined"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          fullWidth
          aria-label="Start Date"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="department-label">Department</InputLabel>
          <Select
            labelId="department-label"
            id="department"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
            label="Department"
            aria-label="Select Department"
          >
            <MenuItem value="" disabled aria-disabled="true">
              <em>Select Department</em>
            </MenuItem>
            {departments.map(dept => (
              <MenuItem key={dept.id} value={dept.name}>
                {dept.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FormEmployee;
