// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <header>
        <Typography mt={4} variant="h3"> Call a Friend </Typography>
      </header>

      <header>
        <Typography mt={1}> 
          <Divider> Your friendly contact app </Divider>
        </Typography>
      </header> 
    </>
  );
};

export default Header;
