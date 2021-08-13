import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  "@global": {
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  formControl: {
    display: "flex",
  },
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: 1200,
    padding: theme.spacing(2, 6, 8, 6),
    margin: "auto",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  button: {
    margin: "auto",
    maxWidth: 120,
  },
});

export default withStyles(styles);
