import React, { useState } from "react";
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";

const NewProduct = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: 20,
  };

  let [newProduct, setNewProduct] = useState({
    title: "",
    price: 500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let handleChange = (event) => {
    let { name, value } = event.target;

    let filedName = name.split("rating.")[1];

    if (name.includes("rating.")) {
      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          [filedName]: value,
        },
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    }
  };

  return (
    <Paper elevation={20} style={paperStyle}>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Create New Product
      </Typography>
      <Grid component="form" style={{ display: "grid", gap: "15px" }}>
        <TextField
          value={newProduct.title}
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          value={newProduct.category}
          name="category"
          label="Category"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField
              value={newProduct.rating.rate}
              name="rating.rate"
              label="Rate"
              type="number"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              value={newProduct.rating.count}
              name="rating.count"
              label="Count"
              type="number"
              variant="outlined"
              onChange={handleChange}
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
