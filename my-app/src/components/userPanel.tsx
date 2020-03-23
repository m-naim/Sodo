import React, {
  Component
} from "react";
import { Paper, Avatar, Typography, IconButton } from "@material-ui/core";
import UserMenu from "./userMenu";



class UserPanel extends Component {

  render() {
    return (
      <Paper square className='user-card' >
        <Avatar src='https://cdn.pixabay.com/photo/2013/07/12/19/33/panda-154984_960_720.png'></Avatar>
        <Typography variant="h6" component="h6" >
          Email@gmail.com
        </Typography>

        <UserMenu />
      </Paper >
    );
  }
}


export default UserPanel;