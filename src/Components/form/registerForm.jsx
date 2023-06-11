import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const FormComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const navigate = useNavigate();
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFirstNameValid(!!firstName);
    setIsLastNameValid(!!lastName);
    setIsEmailValid(!!email);
    setIsPasswordValid(!!password);
    setIsConfirmPasswordValid(!!confirmPassword);

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return;
    }

    if (!isValidName(firstName)) {
      setIsFirstNameValid(false);
      return;
    }

    if (!isValidName(lastName)) {
      setIsLastNameValid(false);
      return;
    }

    if (!isValidEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    if (!isValidPassword(password)) {
      setIsPasswordValid(false);
      return;
    }

    if (password !== confirmPassword) {
      setIsConfirmPasswordValid(false);
      return;
    }

    // Form submission successful
    console.log("Form submitted:", {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
    // Redirect to profile page
    navigate("/profile", {
      state: { firstName, lastName, email },
    });

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsFirstNameValid(true);
    setIsLastNameValid(true);
    setIsEmailValid(true);
    setIsPasswordValid(true);
    setIsConfirmPasswordValid(true);
  };

  const isValidName = (value) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(value);
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const isValidPassword = (value) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()\-=_+]{8,}$/;
    return passwordRegex.test(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" maxWidth="300px" mx="auto">
        <TextField
          required
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          error={!isFirstNameValid}
          helperText={!isFirstNameValid && "Accepting only letters"}
          sx={{ mb: 2 }}
        />

        <TextField
          required
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          error={!isLastNameValid}
          helperText={!isLastNameValid && "Accepting only letters"}
          sx={{ mb: 2 }}
        />

        <TextField
          required
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!isEmailValid}
          helperText={
            !isEmailValid && "Valid Email format (e.g., jon_snow@westeros.com)"
          }
          sx={{ mb: 2 }}
        />

        <TextField
          required
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!isPasswordValid}
          helperText={
            !isPasswordValid &&
            "The password must be at least 8 characters long and must contain alphanumeric characters and special characters."
          }
          sx={{ mb: 2 }}
          InputProps={{
            endAdornment: (
              <Button
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                size="small"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </Button>
            ),
          }}
        />

        <TextField
          required
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={!isConfirmPasswordValid}
          helperText={
            !isConfirmPasswordValid && "The password entered does not match."
          }
          sx={{ mb: 2 }}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default FormComponent;
