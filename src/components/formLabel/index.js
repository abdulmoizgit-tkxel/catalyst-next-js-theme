import { FormLabel, InputLabel, Stack } from "@mui/material";
import React from "react";

const FormLabelComponent = () => {
  return (
    <Stack spacing={2} direction="column" mt={2}>
      <Stack spacing={2} direction="row">
        <FormLabel>Default Form Label</FormLabel>
        <FormLabel color="error">Error Form Label</FormLabel>
        <FormLabel color="warning">Warning Form Label</FormLabel>
        <FormLabel color="info">Info Form Label</FormLabel>
        <FormLabel color="success">Success Form Label</FormLabel>
        <FormLabel color="secondary">Secondary Form Label</FormLabel>
        <FormLabel color="primary">Primary Form Label</FormLabel>
      </Stack>

      <Stack spacing={2} direction="row" marginTop={2}>
        <InputLabel>Default Input Label</InputLabel>
        <InputLabel color="error">Error Input Label</InputLabel>
        <InputLabel color="warning">Warning Input Label</InputLabel>
        <InputLabel color="info">Info Input Label</InputLabel>
        <InputLabel color="success">Success Input Label</InputLabel>
        <InputLabel color="secondary">Secondary Input Label</InputLabel>
        <InputLabel color="primary">Primary Input Label</InputLabel>
      </Stack>
    </Stack>
  );
};

export default FormLabelComponent;
