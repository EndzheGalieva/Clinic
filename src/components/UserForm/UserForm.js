import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import {FormControl} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import styles from "../../styles";

const groups = [
  'VIP',
  'Проблемные',
  'ОМС',
  'ДМС',
];

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {personName: []}
  }

  render() {
    const {classes} = this.props;
    return (
      <Grid container className={classes.container} justifyContent="center">
        <Grid item xs={12} md={8}>
          <FormControl className={classes.formControl}>
            <TextField
              required
              label="ФИО"
              margin="normal"
              name="fullName"
            />
            <TextField
              required
              label="Дата рождения"
              margin="normal"
              name="birthday"
            />
            <TextField
              required
              label="Номер телефона"
              margin="normal"
              name="phoneNumber"
            />
            <TextField
              label="Пол"
              margin="normal"
              name="sex"
            />
            <FormControl>
              <InputLabel required id="client-group-label">Группа клиентов</InputLabel>
              <Select
                labelId="client-group-label"
                id="client-group"
                multiple
                value={this.state.personName}
                input={<Input/>}
              >
                {groups.map((group) => (
                  <MenuItem key={group} value={group}>
                    {group}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="doctor-select-label">Лечащий врач</InputLabel>
              <Select
                labelId="doctor-select-label"
                id="doctor-select"
              >
                <MenuItem>Петров</MenuItem>
                <MenuItem>Захаров</MenuItem>
                <MenuItem>Черниговская</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={<Checkbox name="checkedA"/>}
              label="Не отправлять СМС"
            />
          </FormControl>
        </Grid>
      </Grid>
    )
  }
}

export default (styles(UserForm));
