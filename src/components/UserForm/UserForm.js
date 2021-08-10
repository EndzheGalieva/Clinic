import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import {Button, FormControl} from "@material-ui/core";
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
    this.state = {
      fullName: '',
      birthday: '',
      phoneNumber: '',
      sex: '',
      groups: [],
      doctor: '',
      checkedSMS: false,
      errors: {}
    }
  }

  handleChange = event => {
    const data = event.target.value;
    const name = event.target.name;
    this.setState({...this.state, [name]: data});
    this.setState({errors: {[name]: data}});
  };

  handleCheckboxChange = event => {
    const checked = event.target.checked;
    this.setState({checkedSMS: checked});
  };

  onSubmit = event => {
    event.preventDefault();
    const user = {
      fullName: this.state.fullName,
      birthday: this.state.birthday,
      phoneNumber: this.state.phoneNumber,
      sex: this.state.sex,
      groups: this.state.groups,
      doctor: this.state.doctor,
      checkedSMS: this.state.checkedSMS
    };
    console.log(user);
  };

  render() {
    const {classes} = this.props;
    const {errors} = this.state;
    return (
      <Grid container className={classes.container} justifyContent="center">
        <Grid item xs={12} md={8}>
          <FormControl className={classes.formControl}>
            <TextField
              required
              label="ФИО"
              margin="normal"
              name="fullName"
              error={errors.fullName}
              onChange={this.handleChange}
              helperText={errors.fullName}
            />
            <TextField
              required
              label="Дата рождения"
              margin="normal"
              name="birthday"
              onChange={this.handleChange}
            />
            <TextField
              required
              label="Номер телефона"
              margin="normal"
              name="phoneNumber"
              onChange={this.handleChange}
            />
            <TextField
              label="Пол"
              margin="normal"
              name="sex"
              onChange={this.handleChange}
            />
            <FormControl>
              <InputLabel required id="client-group-label">Группа клиентов</InputLabel>
              <Select
                labelId="client-group-label"
                id="client-group"
                multiple
                name="groupName"
                value={this.state.groups}
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
                name="doctor"
              >
                <MenuItem>Петров</MenuItem>
                <MenuItem>Захаров</MenuItem>
                <MenuItem>Черниговская</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={<Checkbox name="checkedSMS" onChange={this.handleCheckboxChange}/>}
              label="Не отправлять СМС"
            />
            <Button onClick={this.onSubmit}>
              Создать
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    )
  }
}

export default (styles(UserForm));
