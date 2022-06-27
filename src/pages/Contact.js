import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
// post import
import profile from '../assets/profile.jpg';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import Popover from '@mui/material/Popover';

//import '../styles/Contact.css';

// modal constants
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  // end

 



export default function ImageAvatars() {
    // popover constants
    const [anchorEls, setAnchorEls] = React.useState(null);

    const handleClicker = (event) => {
        setAnchorEls(event.currentTarget);
    };

    const handleCloser = () => {
        setAnchorEls(null);
    };

    const opened = Boolean(anchorEls);
    const id = opened ? 'simple-popover' : undefined;
    // end

    // hover popover constants
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const Open = Boolean(anchorEl);
    // end

    // modal constants
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // end

  return (
    <div>
     <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <h1>This Is You</h1>
        <p>@_thisisyou</p>
        <h2>124 followers | 300 following</h2>

    <Stack spacing={2} direction="row">
        <Button variant="outlined">Share</Button>
        <Button variant="outlined">Edit Profile</Button>
    </Stack>

    <Divider></Divider> {/* purely for aesthetic purposes */}

    <Stack direction="row" spacing={5}>
        {/* ARTWORK POST */}
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="artwork"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Final Internet Artwork
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Launch Artwork
        </Button>
        {/* Opens modal where artwork is */}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Card variant="outlined">
                    {/* Prototype */}
                <div className="app__post">
      <div className="app__post-top">
        <div className="top__container">
          <div className="top__container-user">
            <div className="posts__status">
            <Avatar  src={profile} />
            </div>
            <p>thisisyou</p>
          </div>
          <div className="top__container-options">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div> 
        <div className="post__img-container">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="post__footer">
        <div className="footer__top">
          <div className="footer__top-left">
            <IconButton aria-describedby={id} variant="contained"  aria-label="add to favourites" onClick={handleClicker}>
            <FavoriteBorderRoundedIcon/>
            </IconButton>
            <Popover
                id={id}
                open={opened}
                anchorEl={anchorEls}
                onClose={handleCloser}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
          
            <IconButton aria-label="add comment">
            <ForumOutlinedIcon />
            </IconButton>
            
            <IconButton aria-label="direct message">
            <SendOutlinedIcon />
            </IconButton>
            
          </div>
          <IconButton aria-label="bookmark post">
          <BookmarkBorderOutlinedIcon />
          </IconButton>
          
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-top">
            <span>104 likes</span>
            <p>Line of text</p>
            <div className="view__app">View all comments</div>
            <p className="time">1 HOUR AGO</p>
          </div>
          <div className="footer__bottom-bottom">
            <IconButton aria-label="insert emoji">
            <SentimentSatisfiedAltOutlinedIcon />
            </IconButton>
            <input type="text" placeholder="Add a comment" />
            <button
                aria-owns={Open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                Post
            </button>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={Open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>Are you sure you want to post this?</Typography>
            </Popover>
          </div>
        </div>
      </div>
    </div>
                </Card>
            </Box>
        </Modal>
      </CardActions>
    </Card>

                {/* PROTOTYPE POST */}
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="prototype"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Internet Artwork Prototype
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Launch Prototype
        </Button>
      </CardActions>
    </Card>
    </Stack>
    </div>
  );
}