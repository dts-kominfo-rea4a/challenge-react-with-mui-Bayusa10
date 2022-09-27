// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";
import Box from "@mui/system/Box";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const ContactForm = ({ fnTambahDataContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  //tampung value dari input ke dalam sebuah state
  const [inputData, setInputData] = useState(
    {nama : "", nomorHp : "", email : "", photo : ""}
  );

  const formInputOnChangeHandler = (event) =>{
    const name  = event.target.name;
    const value = event.target.value;

    setInputData({
        ...inputData, [name] : value
    })
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    fnTambahDataContact(inputData);
    setInputData({
        nama : "", nomorHp : "", email : "", photo : ""
    })
  }


  return (
    <>
      <Box
        sx={{
          width: 500,
          height: "auto",
          backgroundColor: "#FAEBD7",
          flexGrow: 1,
          marginLeft: 10,
          marginTop: 4,
        }}
      >
        <form onSubmit={formSubmitHandler}>
          <FormControl sx={{ m: 2, width: "50ch" }}>
            <TextField 
                required 
                id="input-nama"
                name="nama" 
                label="Name" 
                variant="filled" 
                value={inputData.nama}
                onChange={formInputOnChangeHandler}
            />
          </FormControl>

          <FormControl sx={{ m: 2, width: "50ch" }}>
            <TextField
              required
              id="input-nomor-hp"
              name="nomorHp" 
              label="Phone"
              variant="filled"
              value={inputData.nomorHp}
              onChange={formInputOnChangeHandler}
            />
          </FormControl>

          <FormControl sx={{ m: 2, width: "50ch" }}>
            <TextField
              required
              id="input-email"
              name="email" 
              label="Email"
              variant="filled"
              value={inputData.email}
              onChange={formInputOnChangeHandler}
            />
          </FormControl>

          <FormControl sx={{ m: 2, width: "50ch" }}>
            <TextField
              required
              id="input-photo"
              name="photo" 
              label="Photo URL"
              variant="filled"
              value={inputData.photo}
              onChange={formInputOnChangeHandler}
            />
          </FormControl>

          <FormControl sx={{ m: 2, width: "50ch" }}>
            <Button variant="text" type="submit">
              ADD NEW
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default ContactForm;
