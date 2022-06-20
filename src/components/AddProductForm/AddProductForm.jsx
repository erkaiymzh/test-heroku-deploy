import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

// title, description, price, image

const AddProductForm = () => {
  const { createProduct } = useContext(productsContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleValues() {
    let newProduct = {
      title,
      description,
      price,
      //   price: +price,
      image,
    };
    if (!title.trim() || !description.trim() || !price || !image.trim()) {
      alert("AAAAAAA");
      return;
    }
    createProduct(newProduct);
    navigate("/products");
  }
  console.log(typeof price);
  return (
    <Container maxWidth="sm">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Shop
        </Link>
        <Link underline="hover" color="inherit" href="/products">
          Products
        </Link>
        <Typography color="text.primary">Add</Typography>
      </Breadcrumbs>

      <Box
        display={"flex"}
        flexDirection={"column"}
        padding={"30px"}
        textAlign={"center"}>
        <Typography variant="h4" component="h2">
          Add New Product
        </Typography>
        ;
        <TextField
          value={title}
          onChange={e => setTitle(e.target.value)}
          id="standard-basic"
          label="Title"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <TextField
          value={description}
          onChange={e => setDescription(e.target.value)}
          id="standard-basic"
          label="Description"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <TextField
          type="number"
          value={price}
          onChange={e => setPrice(+e.target.value)}
          id="standard-basic"
          label="Price"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <TextField
          value={image}
          onChange={e => setImage(e.target.value)}
          id="standard-basic"
          label="Image"
          variant="standard"
          style={{ margin: "10px" }}
        />
        <Button
          onClick={handleValues}
          variant="contained"
          color="success"
          style={{ margin: "10px" }}>
          Add Product
        </Button>
      </Box>
    </Container>
  );
};

export default AddProductForm;
