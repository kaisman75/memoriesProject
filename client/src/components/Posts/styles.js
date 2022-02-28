import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  Spinner:{
    width: "104px",
    height: "440px",
    margin:"auto",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  }
}));