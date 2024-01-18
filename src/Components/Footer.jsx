import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#222',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white'
  },
  name: {
    fontSize: '20px',
    padding: '20px 30px 15px',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '17px',
      marginTop: '10px'
    }
  },

  a: {
    color: 'white'
  },

  iconContainer: {
    width: '60%',
    height: '50px',
    padding: '20px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      height: '40px',
      paddingTop: '4px'
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <span className={classes.name}>
        Inshorts clone made by -{" "}
        <a className={classes.a} href="https://github.com/ShamsQamar/Inshorts_clone-static" target="__blank">
          Shams Qamar
        </a>
      </span>
      <hr style={{ width: "90%", marginTop: '1px' }} />
      <Box className={classes.iconContainer}>
        <a className={classes.a} href="https://www.linkedin.com/in/shams-qamar-703a21212" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a className={classes.a} href="https://github.com/ShamsQamar" target="__blank">
          <i className="fab fa-github-square fa-2x"></i>
        </a>
        <a className={classes.a} href="https://www.facebook.com" target="__blank">
          <i className="fab fa-facebook-square fa-2x"></i>
        </a>
      </Box>
    </Box>
  );
};



export default Footer;