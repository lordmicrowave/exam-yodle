import React, { Component } from 'react'
import "../styles/Home.css";
//import HomepageBanner from "../assets/HomepageBanner.png";
import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import BookmarkBorderOutlined from '@mui/icons-material/BookmarkBorderOutlined';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InsertEmoticonOutlined from '@mui/icons-material/InsertEmoticonOutlined';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaletteIcon from '@mui/icons-material/Palette';
import Button from '@mui/material/Button';
//image imports
import profile from '../assets/profile.jpg';
import biscuit from '../assets/biscuit.jpg';
import dusty from '../assets/dusty.jpg';
import pobox from '../assets/pobox.jpg';
import reality from '../assets/reality.jpg';
import Wireframe from '../assets/Wireframe.jpeg';
import d from '../assets/d.jpg';
import h from '../assets/h.jpg';


import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';

//grid constants
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


//post constants
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
// end

export default function ExplorePost() {
  // chip constants
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  // end

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
      <Grid item xs={1}>
          
        </Grid>

        <Grid item xs={10}>
          <Item>
          <div className="postOne" /* POST ONE -----------------------------------------------------------------------------------------------------*/> 
      <Card sx={{ flexGrow: 1 }}>
      <CardHeader
        avatar={
          <Avatar alt="A" src={pobox} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="@_poboxza"
        subheader="1 MINUTE AGO"
      />
      
      <Stack direction="row" spacing={1} /*Category Chip Tag*/>
      <Link to='/about'>
      <Chip icon={<MenuBookIcon />} label="Blog" onClick={handleClick} />
      </Link> 
      </Stack>


      <CardMedia
        component="img"
        height="194"
        image={Wireframe}
        alt="Exam Reflection"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"> 
          <FavoriteBorderOutlinedIcon />
        </IconButton>

        <IconButton aria-label="add comment">
          <ModeCommentOutlined />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <IconButton aria-label="bookmark">
          <BookmarkBorderOutlined />
        </IconButton>


        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography paragraph>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
        
        <InputAdornment position="start" /*comment box emoji*/>
         <IconButton aria-label="emoji">
              <InsertEmoticonOutlined/>
          </IconButton>
          <Box //comment box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Post Comment" variant="outlined" />
            <Button variant="text">Post</Button>
            </Box>
            </InputAdornment>
            <Button disabled>View Comments</Button>
      </Collapse>
    </Card>
      </div>

      <div className="postTwo">
    <Card sx={{ flexGrow: 1 }}>
      <CardHeader
        avatar={
          <Avatar src={biscuit} aria-label="design"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="@nakedmariebiscuit"
        subheader="1 DAY AGO"
      />
      
      <Stack direction="row" spacing={1} /*Category Chip Tag*/>
      <Link to='/about'>
      <Chip icon={<PaletteIcon />} label="Design" onClick={handleClick} />
      </Link> 
      </Stack>


      <CardMedia
        component="img"
        height="194"
        image={d}
        alt="Style Guide"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"> 
          <FavoriteBorderOutlinedIcon />
        </IconButton>

        <IconButton aria-label="add comment">
          <ModeCommentOutlined />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        

        <InputAdornment position="start" /*comment box emoji*/>
          <IconButton aria-label="emoji">
              <InsertEmoticonOutlined/>
          </IconButton>
          <Box //comment box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Post Comment" variant="outlined" />
            <Button variant="text">Post</Button>
            </Box>
            </InputAdornment>
            
            <IconButton aria-label="bookmark">
              <BookmarkBorderOutlined />
            </IconButton>
      </CardActions>
      <Button disabled>View Comments</Button>
    </Card>
    </div>

    <div className="postThree">
    <Card sx={{ flexGrow: 1 }}>
      <CardHeader
        avatar={
          <Avatar src={reality} aria-label="internet art"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="@thisisyou"
        subheader="21 APRIL"
      />
      
      <Stack direction="row" spacing={1} /*Category Chip Tag*/>
      <Link to='/about'>
      <Chip icon={<MenuBookIcon />} label="Blog" onClick={handleClick} />
      </Link> 
      <Link to='/contact'>
      <Chip icon={<AccountCircleIcon />} label="Net Art" onClick={handleClick} />
      </Link>
      </Stack>


      <CardMedia
        component="img"
        height="194"
        image={h}
        alt="Internet Art"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"> 
          <FavoriteBorderOutlinedIcon />
        </IconButton>

        <IconButton aria-label="add comment">
          <ModeCommentOutlined />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        

        <InputAdornment sx={{ flexGrow: 1 }} position="start" /*comment box emoji*/>
          <IconButton aria-label="emoji">
              <InsertEmoticonOutlined/>
          </IconButton>
          <Box //comment box
            component="form"
            sx={{ 
              '& > :not(style)': { m: 1, width: '25ch' },
              }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Post Comment" variant="outlined" />
            <Button variant="text">Post</Button>
            </Box>
            </InputAdornment>

            <IconButton aria-label="bookmark">
          <BookmarkBorderOutlined />
        </IconButton>
      </CardActions>
      <Button disabled>View Comments</Button>
    </Card>
    </div>
          </Item>
        </Grid>

              {/* Follow and Category Section */}
              {/* SUGGESTED FOLLOWINGS */}
        <Grid item xs={4}>
          <div className="category">
          <Item>
            <h1>Suggested followings</h1>
            <Divider></Divider>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem alignItems="flex-start">
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar alt="Dusty Orchid" src={dusty} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Sasha-Lee"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          @dustyorchid
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  </ListItemButton>
              </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt="P. O. Box ZA" src={pobox} />
          </ListItemAvatar>
          <ListItemText
            primary="P. O. Box ZA"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  @_poboxza
                </Typography>
              </React.Fragment>
            }
          />
          </ListItemButton>
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt="Naked Marie Biscuit" src={biscuit} />
          </ListItemAvatar>
          <ListItemText
            primary="Some Kid"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  @nakedmariebiscuit
                </Typography>
              </React.Fragment>
            }
          />
          </ListItemButton>
      </ListItem>
      </List>
      <Divider></Divider>
  
      {/* CATEGORY SECTION */}
      <h1>Trending Categories</h1>
      <Stack direction="row" spacing={1} /*Category Chip Tag*/>
        <Link to='/about'>
          <Chip icon={<MenuBookIcon />} label="Blog" onClick={handleClick} />
        </Link> 
        <Link to='/menu'>
          <Chip icon={<PaletteIcon />} label="Design" onClick={handleClick} />
        </Link> 
        <Link to='/contact'>
          <Chip icon={<AccountCircleIcon />} label="Net Art" onClick={handleClick} />
        </Link> 
      </Stack>


    
          </Item>
          </div>
        </Grid>
      </Grid>
    </Box>


    

    </div>
    
  );
}
