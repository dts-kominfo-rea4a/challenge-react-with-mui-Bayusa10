// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";
import { Card, CardContent, CardActions, Button, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const ContactForm = ({ fnTambahDataContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  //tampung value dari input ke dalam sebuah state
  const [inputData, setInputData] = useState(
      {name : "", phone : "", email : "", photo : ""}
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
    setInputData({name : "", phone : "", email : "", photo : ""})
  }


  return (
    <>
      <Card
        sx={{
          width: 500,
          height: "auto",
          backgroundColor: "#FAEBD7",
          marginTop: 4,
        }}
      >
        <form onSubmit={formSubmitHandler}>
          <CardContent>
            <FormControl sx={{ m: 2, width: "50ch" }}>
              <TextField 
                required 
                id="filled-basic"
                variant="filled" 
                label="Name"
                name="name" 
                value={inputData.name}
                onChange={formInputOnChangeHandler}
              />
            </FormControl>

            <FormControl sx={{ m: 2, width: "50ch" }}>
              <TextField
                required
                id="input-nomor-hp"
                name="phone" 
                label="Phone"
                variant="filled"
                value={inputData.phone}
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

          </CardContent>
          <CardActions>
            <FormControl sx={{ m: 2, width: "50ch" }}>
              <Button variant="text" type="submit">
                ADD NEW
              </Button>
            </FormControl>
          </CardActions>
          
        </form>
      </Card>
    </>
  );
};

export default ContactForm;
