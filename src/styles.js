import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  '@global': {
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%'
    }
  },
  formControl: {
    display: 'flex'
  },
  container: {
    display: 'flex',
    maxWidth: 1200,
    padding: theme.spacing(2, 6, 8, 6),
    margin: 'auto',
  }

});

export default withStyles(styles);
