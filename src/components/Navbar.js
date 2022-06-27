import React, { Component } from 'react';
import Logo from "../assets/Logos.png";
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import PaletteIcon from '@mui/icons-material/Palette';
import yodel from '../assets/yodel.png';

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      openLinks : false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState(prevState => ({
      openLinks : !prevState.openLinks
    }));
  }


  render() {
    return (
      <div className="navbar">
        <div className="leftSide" id={this.state.openLinks ? "open" : "close"}>
          <img src={yodel}/>
          <div className="hiddenLinks">
            <Link to='/'><HomeIcon/></Link>
            <Link to='/menu'><PaletteIcon/></Link>
            <Link to='/about'><MenuBookIcon/></Link>
            <Link to='/contact'><AccountCircleIcon/></Link>
          </div>
        </div>

        <Box //search box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
              flexGrow: 1}}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Search" variant="outlined" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            />
            </Box>
          
        <div className="rightSide">
          <Link to='/'><HomeIcon/></Link>
          <Link to='/menu'><PaletteIcon/></Link>
          <Link to='/about'><MenuBookIcon/></Link>
          <Link to='/contact'><AccountCircleIcon/></Link>
          <button onClick={this.toggleNav}><ReorderIcon/></button>

          
        </div>
      </div>
    )
  }
}


