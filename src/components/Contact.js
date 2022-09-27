// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />*/}
      <List
        sx={{ width: "100%", maxWidth: 500, bgcolor: "azure", marginTop: 4 }}
      >
        {/* cetak data contact disini */}
        {data.map((dataContact) => {
          return (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar key={dataContact.photo}>
                  <Avatar alt={dataContact.name} src={dataContact.photo} />
                </ListItemAvatar>
                <ListItemText
                  primary={dataContact.name}
                  secondary={
                    <React.Fragment>
                      <Typography>{dataContact.dataContact}</Typography>
                      <Typography>{dataContact.email}</Typography>
                    </React.Fragment>
                  }
                  key={dataContact.name}
                />
              </ListItem>
              <Divider variant="middle" />
            </>
          );
        })}
      </List>
    </>
  );
};

export default Contact;
