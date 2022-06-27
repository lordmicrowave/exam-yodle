import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Dandelion from '../assets/Dandelion.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Carousel } from '../components';
import { Carouselb } from '../components';
import Modal from "react-modal";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Divider from '@mui/material/Divider';

import CardActions from '@mui/material/CardActions';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/Share';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import BookmarkBorderOutlined from '@mui/icons-material/BookmarkBorderOutlined';
import InsertEmoticonOutlined from '@mui/icons-material/InsertEmoticonOutlined';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Wireframe from '../assets/Wireframe.jpeg';
import styleguide1 from '../assets/styleguide1.png';
import wireframe1 from '../assets/wireframe1.PNG';
import wireframe2 from '../assets/wireframe2.PNG';
import wireframe3 from '../assets/wireframe3.PNG';
import wireframe4 from '../assets/wireframe4.PNG';
import a from '../assets/a.jpg';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import d from '../assets/d.jpg';
import e from '../assets/e.jpg';
import f from '../assets/f.jpg';
import g from '../assets/g.jpg';
import h from '../assets/h.jpg';
import one from '../assets/one.png';
import twos from '../assets/twos.png';
import three from '../assets/three.png';
import four from '../assets/four.png';
import five from '../assets/five.png';
import six from '../assets/six.png';
import seven from '../assets/seven.png';
import eight from '../assets/eight.jpg';
import nine from '../assets/nine.png';
import ten from '../assets/ten.png';
import eleven from '../assets/eleven.png';
import twelve from '../assets/twelve.png';
import wa from '../assets/wa.jpeg';
import wb from '../assets/wb.jpeg';
import wc from '../assets/wc.jpeg';
import wd from '../assets/wd.jpeg';
import we from '../assets/we.jpeg';
import wf from '../assets/wf.jpeg';
import wg from '../assets/wg.jpeg';
import wh from '../assets/wh.jpeg';




//carousel function and constants
const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div>
        San Francisco<br/><span>Next line</span>
      </div>`,
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "<div>San Francisco</div>",
    },
  ];

const two = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div>
        San Francisco<br/><span>Next line</span>
      </div>`,
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "<div>San Francisco</div>",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  // end

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class MutipleButtonsWithModalInSameComponent  extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showModal: false,
        activeModal: "",
      };
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
  
    handleOpenModal(val) {
      this.setState({ activeModal: val });
      this.setState({ showModal: true });
    }
  
    handleCloseModal() {
      this.setState({ showModal: false });
      this.setState({ showModal: "" });
    }

render() {
  return (
<div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={2} >
        {/* Image 1 */}
        <Grid item xs={6} >
          <Item>
          <Card sx={{ flexGrow: 1 }}>
            <CardActionArea >
                <CardMedia
                component="img"
                height="140"
                image={Wireframe}
                alt=""
                />
                <ImageListItemBar
                title="Assignment 1"
                subtitle="Wireframe"
                actionIcon={
                    <IconButton onClick={() => this.handleOpenModal("login")}
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label="info"
                  >
                    <InfoIcon />
                  </IconButton>
                }
                />
            </CardActionArea>
            {/* Modal Content */}
        <div className="icon">
            <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "login"
              }
              contentLabel="login Modal"
            >
              <div className="content">
                <button className="close" onClick={this.handleCloseModal}>X</button>

                {/* User Info Header */}
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Assignment 1 Wireframe" secondary="@username | Jan 9, 2014" />
                </ListItem>
                </List>
                <Divider></Divider>

                <img src={Wireframe}></img>
              </div>
              <Divider></Divider>
              
              {/* Social Interaction Section */}
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
            </Modal>
        </div>
            </Card>
          </Item>
        </Grid>

        {/* Image 2 */}
        <Grid item xs={6} >
          <Item>
          <Card sx={{ flexGrow: 1 }}>
            <CardActionArea >
                <CardMedia
                component="img"
                height="140"
                image={styleguide1}
                alt=""
                />
                <ImageListItemBar
                title="Assignment 1"
                subtitle="Style Guide"
                actionIcon={
                    <IconButton onClick={() => this.handleOpenModal("style1")}
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label="info"
                  >
                    <InfoIcon />
                  </IconButton>
                }
                />
            </CardActionArea>

            {/* Modal Content */}
        <div className="icon">
            <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "style1"
              }
              contentLabel="style1 Modal"
            >
              <div className="content">
                <button className="close" onClick={this.handleCloseModal}>X</button>

                {/* User Info Header */}
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Assignment 1 Style Guide" secondary="@username | Jan 9, 2014" />
                </ListItem>
                </List>
                <Divider></Divider>

                <img src={styleguide1}></img>
              </div>
              
      
              <Divider></Divider>
              
              {/* Social Interaction Section */}
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
            </Modal>
        </div>
            </Card>
          </Item>
        </Grid>

        {/* Image 3 */}
        <Grid item xs={6}>
          <Item><Card sx={{ flexGrow: 1 }}>
            <CardActionArea >
                <CardMedia
                component="img"
                height="140"
                image={wireframe1}
                alt=""
                />
                <ImageListItemBar
                title="Assignment 2"
                subtitle="Wireframe"
                actionIcon={
                    <IconButton onClick={() => this.handleOpenModal("blockthree")}
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label="info"
                  >
                    <InfoIcon />
                  </IconButton>
                }
                />
            </CardActionArea>
            {/* Modal Content */}
        <div className="icon">
            <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "blockthree"
              }
              contentLabel="blockthree Modal"
            >
              <div className="content">
                <button className="close" onClick={this.handleCloseModal}>X</button>

                {/* User Info Header */}
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Assignment 2 Wireframe" secondary="@username | Jan 9, 2014" />
                </ListItem>
                </List>
                <Divider></Divider>

                <img src={wireframe1}></img>
                <Divider></Divider>
                <img src={wireframe2}></img>
                <Divider></Divider>
                <img src={wireframe3}></img>
                <Divider></Divider>
                <img src={wireframe4}></img>
                <Divider></Divider>
              </div>
              <Divider></Divider>
              
              {/* Social Interaction Section */}
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
            </Modal>
        </div>
            </Card></Item>
        </Grid>

        {/* Image 4 */}
        <Grid item xs={6}>
          <Item><Card sx={{ flexGrow: 1 }}>
            <CardActionArea >
                <CardMedia
                component="img"
                height="140"
                image={a}
                alt=""
                />
                <ImageListItemBar
                title="Assignment 2"
                subtitle="Style Guide"
                actionIcon={
                    <IconButton onClick={() => this.handleOpenModal("blockfour")}
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label="info"
                  >
                    <InfoIcon />
                  </IconButton>
                }
                />
            </CardActionArea>
            {/* Modal Content */}
        <div className="icon">
            <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "blockfour"
              }
              contentLabel="blockfour Modal"
            >
              <div className="content">
                <button className="close" onClick={this.handleCloseModal}>X</button>

                {/* User Info Header */}
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Assignment 2 Style Guide" secondary="@username | Jan 9, 2014" />
                </ListItem>
                </List>
                <Divider></Divider>

                
                <img src={a}></img>
                <Divider></Divider>
                <img src={b}></img>
                <Divider></Divider>
                <img src={c}></img>
                <Divider></Divider>
                <img src={d}></img>
                <Divider></Divider>
                <img src={e}></img>
                <Divider></Divider>
                <img src={f}></img>
                <Divider></Divider>
                <img src={g}></img>
                <Divider></Divider>
                <img src={h}></img>
                <Divider></Divider>
                
                <Divider></Divider>
              </div>
              <Divider></Divider>
              
              {/* Social Interaction Section */}
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
            </Modal>
        </div>
            </Card></Item>
        </Grid>

        {/* Image 5 */}
        <Grid item xs={6}>
          <Item><Card sx={{ flexGrow: 1 }}>
            <CardActionArea >
                <CardMedia
                component="img"
                height="140"
                image={wa}
                alt=""
                />
                <ImageListItemBar
                title="Exam"
                subtitle="Wireframe"
                actionIcon={
                    <IconButton onClick={() => this.handleOpenModal("exam")}
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label="info"
                  >
                    <InfoIcon />
                  </IconButton>
                }
                />
            </CardActionArea>
            {/* Modal Content */}
        <div className="icon">
            <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "exam"
              }
              contentLabel="exam Modal"
            >
              <div className="content">
                <button className="close" onClick={this.handleCloseModal}>X</button>

                {/* User Info Header */}
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Exam Wireframe" secondary="@username | Jan 9, 2014" />
                </ListItem>
                </List>
                <Divider></Divider>

                <img src={wa}></img>
                <Divider></Divider>
                <img src={wb}></img>
                <Divider></Divider>
                <img src={wc}></img>
                <Divider></Divider>
                <img src={wd}></img>
                <Divider></Divider>
                <img src={we}></img>
                <Divider></Divider>
                <img src={wf}></img>
                <Divider></Divider>
                <img src={wg}></img>
                <Divider></Divider>
                <img src={wh}></img>
                <Divider></Divider>
              </div>
              <Divider></Divider>
              
              {/* Social Interaction Section */}
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
            </Modal>
        </div>
            </Card></Item>
        </Grid>

        {/* Image 6 */}
        <Grid item xs={6}>
          <Item><Card sx={{ flexGrow: 1 }}>
            <CardActionArea >
                <CardMedia
                component="img"
                height="140"
                image={one}
                alt=""
                />
                <ImageListItemBar
                title="Exam"
                subtitle="Style Guide"
                actionIcon={
                    <IconButton onClick={() => this.handleOpenModal("examstyle")}
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label="info"
                  >
                    <InfoIcon />
                  </IconButton>
                }
                />
            </CardActionArea>
            {/* Modal Content */}
        <div className="icon">
            <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "examstyle"
              }
              contentLabel="examstyle Modal"
            >
              <div className="content">
                <button className="close" onClick={this.handleCloseModal}>X</button>

                {/* User Info Header */}
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Exam Style Guide" secondary="@username | Jan 9, 2014" />
                </ListItem>
                </List>
                <Divider></Divider>

                <img src={one}></img>
                <Divider></Divider>
                <img src={twos}></img>
                <Divider></Divider>
                <img src={three}></img>
                <Divider></Divider>
                <img src={four}></img>
                <Divider></Divider>
                <img src={five}></img>
                <Divider></Divider>
                <img src={six}></img>
                <Divider></Divider>
                <img src={seven}></img>
                <Divider></Divider>
                <img src={eight}></img>
                <Divider></Divider>
                <img src={nine}></img>
                <Divider></Divider>
                <img src={ten}></img>
                <Divider></Divider>
                <img src={eleven}></img>
                <Divider></Divider>
                <img src={twelve}></img>
                <Divider></Divider>
              </div>
              <Divider></Divider>
              
              {/* Social Interaction Section */}
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
            </Modal>
        </div>
            </Card></Item>
        </Grid>

        

      </Grid>
    </Box>
    </div>
  );
}
}

export default MutipleButtonsWithModalInSameComponent;

