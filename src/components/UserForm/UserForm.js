import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import {FormControl} from "@material-ui/core";

class UserForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid container>
        <Grid>
          <FormControl/>
        </Grid>
      </Grid>
    )
  }
}

export default UserForm;
