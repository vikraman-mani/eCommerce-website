import React, { useEffect } from "react";
import { useState } from "react";
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: 20,
  };

  let [updateProduct, setUpdateProduct] = useState(null);

  let navigate = useNavigate();

  let { id } = useParams(); // Get ID value from Navigation / URL

  useEffect(() => {
    axios.get(`http://localhost:4000/products/${id}`).then((response) => {
      setUpdateProduct(response.data);
    });
  }, []);

  let handleChange = (event) => {
    let { name, value } = event.target;

    let filedName = name.split("rating.")[1];

    if (name.includes("rating.")) {
      setUpdateProduct({
        ...updateProduct,
        rating: {
          ...updateProduct.rating,
          [filedName]: value,
        },
      });
    } else {
      setUpdateProduct({
        ...updateProduct,
        [name]: value,
      });
    }
  };

  let handleUpdate = (event) => {
    event.preventDefault(); // avoid load/refresh browser page when submit the button

    fetch(`http://localhost:4000/products/${id}`, {
      method: "PUT",
      header: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct), // JS convert to JSON format
    }).then(() => {
      alert("Data Saved successfully");
      navigate("/products"); // Redirect to products page
    });
  };

  if (updateProduct !== null) {
    return (
      <Paper elevation={20} style={paperStyle}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Update Product
        </Typography>
        <Grid
          component="form"
          onSubmit={handleUpdate}
          style={{ display: "grid", gap: "15px" }}
        >
          <TextField
            value={updateProduct.title}
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            value={updateProduct.category}
            name="category"
            label="Category"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                value={updateProduct.rating.rate}
                name="rating.rate"
                label="Rate"
                type="number"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                value={updateProduct.rating.count}
                name="rating.count"
                label="Count"
                type="number"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Button type="submit" variant="contained" color="success" fullWidth>
            Save
          </Button>
        </Grid>
      </Paper>
    );
  } else {
    <div>Loading...</div>;
  }
};

export default UpdateProduct;
