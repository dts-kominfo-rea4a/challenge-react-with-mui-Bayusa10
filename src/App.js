import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import Grid from "@mui/material/Grid";
import dataContact from './data/contacts.json';
import { Container } from '@mui/system';
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setDataContact] = useState(dataContact);

  const tambahContact = (arrayDataContact) => {
    const objectContactBaru = 
      {"name"  : arrayDataContact.name,
      "phone" : arrayDataContact.phone,
      "email" : arrayDataContact.email,
      "photo" : arrayDataContact.photo}
    setDataContact([...contacts, objectContactBaru]);
  }

  return (
    <div className="App">
      <Container>
        <Header />
        <Grid container spacing={4}>
          <Grid item xs={6} md={6}> 
            <ContactForm fnTambahDataContact={tambahContact}/>
          </Grid>
          <Grid item xs={6} md={6}>
            <List sx={{ width: "100%", maxWidth: 500, bgcolor: "aquamarine", marginTop: 4}}>
              {contacts.map((data, index) => {
                  return(
                    <div key={index}>
                      <Contact data={data}/>
                      <Divider variant="inset" component="li" /> 
                    </div> 
                  )
              })}
            </List>
          </Grid>
        </Grid>
      </Container>
      
      {/*<Box sx={{ flexGrow: 1 } <Contact data={contacts}/> }>
      <Grid container spacing={2}>
        <Grid item xs={6}><ContactForm fnTambahDataContact={tambahContact}/></Grid>
        <Grid item xs={6}><Contact data={contacts}/></Grid>
      </Grid>
      </Box>*/}
    </div>
  );
};

export default App;
