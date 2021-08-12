import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Button, FormControl } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import styles from "../../styles";
import axios from "axios";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PhoneMask from "./PhoneMask";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '../Alert/Alert';

const groups = ["VIP", "Проблемные", "ОМС", "ДМС"];

const doctors = ["Петров", "Захаров", "Черниговская"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      birthday: "",
      phoneNumber: "",
      gender: "",
      groupName: [],
      doctor: "",
      checkedSMS: false,
      errors: {},
      suggestions: [],
    };
  }

  componentDidMount() {
    this.setState({open: false})
  }

  handleChange = (event) => {
    const data = event.target.value;
    const name = event.target.name;
    this.setState({ ...this.state, [name]: data });
  };

  handleFullNameChange = (event) => {
    const data = event.target.value;
    const url =
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio";
    const token = "3ba950c928eb7a21e6e3c0eb084c287309d53f6b";
    axios
      .post(
        url,
        { query: data },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Token " + token,
          },
        }
      )
      .then((res) => this.setState({ suggestions: res.data.suggestions }));
  };

  handleAutocompleteChange = (event) => {
    const text = event.target.outerText;
    this.setState({ fullName: text });
  };

  handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    this.setState({ checkedSMS: checked });
  };

  handleDateChange = (date) => {
    this.setState({ setSelectedDate: date });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({open: false});
  };

  onSubmit = (event) => {
    event.preventDefault();
    const user = {
      fullName: this.state.fullName,
      birthday: this.state.birthday,
      phoneNumber: this.state.phoneNumber,
      gender: this.state.gender,
      groupName: this.state.groupName,
      doctor: this.state.doctor,
      checkedSMS: this.state.checkedSMS,
    };
    console.log(user);
    this.setState({open: true});
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    const flatProps = {
      options: this.state.suggestions.map((option) => option.value),
    };
    
    return (
      <Grid container className={classes.container} justifyContent="center">
        <Grid item xs={12} md={8}>
          <FormControl className={classes.formControl}>
            <Autocomplete
              {...flatProps}
              id="flat-demo"
              name="autocomplete"
              onChange={this.handleAutocompleteChange}
              getOptionSelected={(option, value) =>
                option.value === value.value
              }
              renderInput={(params) => (
                <TextField
                  required
                  name="fullName"
                  onChange={this.handleFullNameChange}
                  value={this.state.fullName}
                  {...params}
                  label="ФИО"
                  helperText={errors.fullName}
                  margin="normal"
                />
              )}
            />
            <TextField
              required
              id="date"
              label="Birthday"
              type="date"
              name="birthday"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={this.handleChange}
            />
            <FormControl>
              <InputLabel required htmlFor="phone-number-mask-input">
                Номер телефона
              </InputLabel>
              <Input
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                name="phoneNumber"
                id="phone-number-mask-input"
                inputComponent={PhoneMask}
              />
            </FormControl>
            <TextField
              label="Пол"
              margin="normal"
              name="gender"
              onChange={this.handleChange}
            />
            <FormControl>
              <InputLabel required id="client-group-label">
                Группа клиентов
              </InputLabel>
              <Select
                labelId="client-group-label"
                id="client-group"
                multiple
                name="groupName"
                onChange={this.handleChange}
                value={this.state.groupName}
                input={<Input />}
                MenuProps={MenuProps}
              >
                {groups.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
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
                onChange={this.handleChange}
                value={this.state.doctor}
              >
                {doctors.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  name="checkedSMS"
                  onChange={this.handleCheckboxChange}
                />
              }
              label="Не отправлять СМС"
            />
            <Button onClick={this.onSubmit}>Создать</Button>
            <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
            <Alert onClose={this.handleClose} severity="success">
            Новый клиент успешно создан!
           </Alert>
           </Snackbar>
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}

export default styles(UserForm);
