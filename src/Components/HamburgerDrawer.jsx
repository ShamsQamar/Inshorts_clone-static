import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  list: {
    width: 200, 
    paddingLeft: 10, 
    paddingRight: 5,
    backgroundColor : '#303036',
    overflow: 'hidden',
    height: '100%'
  },
  fullList: {
    width: 'auto',
  },
  categories : {
    color: '#808290'
  },
  lst : {
    color: '#fff',
    height: '100vh',
    overflow: 'hidden'
  },
  menuicon: {
    [theme.breakpoints.down('sm')] : {
      marginLeft : "-25px",
    }
  }
}));

const categories = [
  "General",
  "Sports",
  "Business",
  "World",
  "Entertainment",
  "Health",
  "India",
  "Politics",
  "Technology",
  "Science"
];

export default function SwipeableTemporaryDrawer( {setCategory} ) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });



  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className={classes.categories}>Categories</ListItem>
      </List>
      <Divider />
      <List className={classes.lst}>
        {categories.map((text, index) => (
          <ListItem
          style={{ height: 50, borderRadius: 3 }}
          button
          onClick={() => {
            setCategory(text)
          }}
          key={text}
          >
  
          <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div >
     
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}>
            <MenuIcon className={classes.menuicon}/> </Button>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
           
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
      
    </div>
  );
}
