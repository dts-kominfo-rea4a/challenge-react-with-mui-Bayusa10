// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  const dtContact = [data.name, data.email, data.phone, data.photo];
  return (
    <ListItem>
      <ListItemAvatar sx={{mr:2}}>
        <Avatar 
          alt="Contact foto" 
          src={dtContact[3]}
        />
      </ListItemAvatar>
      <Box sx={{ marginLeft: "1.5rem" }} textAlign="left">
        <Typography variant="body1">{dtContact[0]}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {dtContact[2]}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {dtContact[1]}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default Contact;
