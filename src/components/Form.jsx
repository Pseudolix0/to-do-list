import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EditIcon from '@mui/icons-material/Edit';

export default function CheckboxList(props) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleDelete = () => {
    props.onDelete(props.key);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        marginLeft: "20%",
      }}
    >
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="comments">
            <RemoveCircleOutlineIcon onClick={handleDelete} /></IconButton>} disablePadding>            
        <ListItemButton role={undefined} onClick={handleToggle(props.key)} dense >
          <ListItemIcon>
            <Checkbox edge="start" checked={checked.indexOf(props.key) !== -1} tabIndex={-1} disableRipple />
          </ListItemIcon>
          <ListItemText primary={props.todo} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

