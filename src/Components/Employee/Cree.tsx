import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import FormEmployee from "../../Context/Formulaire/FormEmployee";
import FormAddress from "../../Context/Formulaire/FormAddress";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

// Définition des étapes du formulaire
const steps = ["Informations personnelles", "Adresse", "Confirmation"];

// État initial des données du formulaire
const initialFormData = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  startDate: "",
  selectedDepartment: "",
  street: "",
  city: "",
  selectedState: "",
  zipCode: "",
};

export default function FormulaireCreation() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);

  // Handlers pour la modification des champs
  const handleChange = (field: string, value: any) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  // Handler pour la modification de l'état sélectionné
  const handleStateChange = (event: SelectChangeEvent<string>) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedState: event.target.value,
    }));
  };

  // Handler pour la modification du département sélectionné
  const handleDepartmentChange = (event: SelectChangeEvent<string>) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedDepartment: event.target.value,
    }));
  };

  const handleNext = () => {
    if (isStepComplete(activeStep)) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  // Fonction pour vérifier si l'étape est complète
  const isStepComplete = (step: number): boolean => {
    switch (step) {
      case 0:
        return formData.firstName !== '' && formData.lastName !== '' && formData.dateOfBirth !== '' && formData.startDate !== '' && formData.selectedDepartment !== '';
      case 1:
        return formData.street !== '' && formData.city !== '' && formData.selectedState !== '' && formData.zipCode !== '';
      default:
        return true;
    }
  };

  // Fonction pour obtenir le contenu de chaque étape du formulaire
  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Container>
            <Card className="form-card">
              <CardContent>
                <Typography
                  component="h2"
                  sx={{ fontSize: 25, marginBottom: 5 }}
                >
                  Create Employee
                </Typography>
              </CardContent>
              <FormEmployee
                firstName={formData.firstName}
                setFirstName={(value) => handleChange("firstName", value)}
                lastName={formData.lastName}
                setLastName={(value) => handleChange("lastName", value)}
                dateOfBirth={formData.dateOfBirth}
                setDateOfBirth={(value) => handleChange("dateOfBirth", value)}
                startDate={formData.startDate}
                setStartDate={(value) => handleChange("startDate", value)}
                selectedDepartment={formData.selectedDepartment}
                handleDepartmentChange={handleDepartmentChange}
              />
            </Card>
          </Container>
        );
      case 1:
        return (
          <Container>
            <Card className="form-card">
              <CardContent>
                <Typography
                  component="h2"
                  sx={{ fontSize: 25, marginBottom: 5 }}
                >
                  Adresse
                </Typography>
              </CardContent>
              <FormAddress
                street={formData.street}
                setStreet={(value) => handleChange("street", value)}
                city={formData.city}
                setCity={(value) => handleChange("city", value)}
                selectedState={formData.selectedState}
                handleStateChange={handleStateChange}
                zipCode={formData.zipCode}
                setZipCode={(value) => handleChange("zipCode", value)}
              />
            </Card>
          </Container>
        );
      case 2:
        return (
          <Container>
          <Card className="form-card">
            <CardContent>
              <Typography
                component="h2"
                sx={{ fontSize: 25, marginBottom: 5 }}
              >
                Sauvgarder
              </Typography>
            </CardContent>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
      <Button
        variant="contained"
        color="primary"
        aria-label="Save employee"
      >
        Save
      </Button>
    </Box>
            </Card>
            </Container>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {getStepContent(activeStep)}
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={!isStepComplete(activeStep)}
          >
            {activeStep === steps.length - 1 ? "Terminer" : "Suivant"}
          </Button>
        </Box>
      </div>
    </div>
  );
}
