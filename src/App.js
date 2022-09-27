import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import dataContact from './data/contacts.json';

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
    const objectContactBaru = {
      "name"  : arrayDataContact.nama,
      "phone" : arrayDataContact.nomorHp,
      "email" : arrayDataContact.email,
      "photo" : arrayDataContact.photo
    }

    setDataContact([...contacts, objectContactBaru]);
  }

  return (
    <div className="App">
      <Header />
      
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}><ContactForm fnTambahDataContact={tambahContact}/></Grid>
        <Grid item xs={6}><Contact data={contacts}/></Grid>
      </Grid>
      </Box>
    </div>
  );
};

export default App;
