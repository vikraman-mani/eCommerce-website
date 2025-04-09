import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";

const NewProduct = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: 20,
  };
  return (
    <Paper elevation={20} style={paperStyle}>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Create New Product
      </Typography>
      <Grid component="form" style={{ display: "grid", gap: "15px" }}>
        <TextField name="title" label="Title" variant="outlined" fullWidth />
        <TextField
          name="category"
          label="Category"
          variant="outlined"
          fullWidth
        />
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField
              name="rating.rate"
              label="Rate"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid size={6}>
            <TextField
              name="rating.count"
              label="Count"
              type="number"
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Button variant="contained" fullWidth>
          Add
        </Button>
      </Grid>
    </Paper>
  );
};

export default NewProduct;
