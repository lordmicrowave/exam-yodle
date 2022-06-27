import React, { Component } from 'react';
import Modal from "react-modal";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/Share';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import BookmarkBorderOutlined from '@mui/icons-material/BookmarkBorderOutlined';
import InsertEmoticonOutlined from '@mui/icons-material/InsertEmoticonOutlined';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


import Picture1 from '../assets/Picture1.png';
import Picture2 from '../assets/Picture2.png';
import Picture3 from '../assets/Picture3.png';
import Picture4 from '../assets/Picture4.jpg';
import Picture5 from '../assets/Picture5.png';
import Picture6 from '../assets/Picture6.png';
import Picture7 from '../assets/Picture7.PNG';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
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
      return(
        <div>

          {/* POST GRID */}
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        {/* NET/WEB ART POST */}
        <Grid item xs={2} sm={4} md={4}> 
          <Item>
            <Box sx={{ minWidth: 275 }}>
            <React.Fragment>
    <Card sx={{ flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="net art"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Net/Web Art
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Case study on the Net Art piece 'Tapered Throne'
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="icon">
        <Button size="small" color="primary" onClick={() => this.handleOpenModal("net")}>
          Read More
        </Button>
        <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "net"
              }
              contentLabel="net Modal"
            >
              <div className="content">
                <div className="modal-header">
                  <h1>Net/Web Art</h1>
                </div>
                <Divider></Divider>
                {/* Text container with vertical scroll bar */}
                <div style={{ height: 1100, whiteSpace: 'nowrap' }}>
                  <Box
                    component="div"
                    sx={{
                      overflowY: 'scroll',
                      my: 2,
                      p: 5,                          
                    }}
                  >
                    <Typography paragraph>
          The act of getting your haircut is a very intimate “thing”. It is a culture
           that fosters a community where Barbers don’t just cut hair. Their clients see 
           them as confidants – therapists almost – whom they are able to share the most 
           intimate details of their lives with. Marvin Church, who holds numerous titles 
           as barber, educator, and influencer, describes barbershops as “safe havens” 
           where your barber is someone you can confidently share with (Moratto, 2021).
          </Typography>
          <Typography paragraph>
          The environment of barbershops stays the same as multiple generations go to the 
          same barber Tapered Throne by Brandon Tauszik is a set of black and white GIF 
          images that gives viewers an intimate look into the lives of African American barbers. 
          </Typography>
          <Typography paragraph>
          The “portrait of oakland’s black barbers“ highlights the numerous roles played by 
          these barbers in the development and sustenance of the black community outside of 
          making a living. They are a hub of storytelling, comradery, and authentic expression. 
          The accompanying essay “Tapered Throne Introduction” by Quincy T. Mills, Ph.D provides
           an insightful and informative analysis of Tauszik’s project by further elaborating on 
           the value of barbers in the black community. I believe Tapered Throne functions well 
           as net/web art as it brings a deeper dimension to the traditional black and white 
           photograph. The project is about black barbers and the kinds of relationships they 
           foster with their clients and other black people in the community. For them, being a 
           barber is not just about cutting hair but providing a space where people can come and 
           express themselves freely and revel in their ‘blackness’. The author of the book 
           “You Next”, Antonio Johnson notes that “these were more than just places to get a trim”. 
           The setting is in Oakland, California; a place that residents have described as taken 
           over by crime and poverty.
          </Typography>
          <Typography paragraph>
          The GIFs, that depict barbers from different barber shops around Oakland, are accompanied 
          by a caption by the featured barber and a profile that lists their name, shop, the year the
           portrait was captured and the number of frames that make up the gif. Some of the themes 
           that appear throughout the portraits include the passion and skill that comes with cutting
            black hair. It is not seen as just skilled labour but an art.
          </Typography>
          <Typography paragraph>
          I believe the seamless loop of the gifs mimics the up and down rhythmic strokes of the hair clippers.
          All the GIFs are captured in black and white which helps to bring attention to the subjects of the 
          image without the distraction of colour (Rehman, 2021). It encourages the viewer to pause and look at
           the composition and feel the emotions captured in the frame.
           “Barbers tend to look like the boys they serve…” - Alvin Irby.
           The building of a community where generations of clients get their hair cut at one shop is not
          uncommon. Sometimes the clients go on to become the barbers themselves which results in a holistic experience of
          knowing what it is like to be in the chair and to hold the clippers.
          </Typography>
          <Typography paragraph>References:</Typography>
          <Typography paragraph>
            Dawson, M. (2020). Why the culture of black barbershops is so important. Available at: 
            https://nypost.com/2020/09/05/why-the-culture-of-black-barbershops-is-so-important/ (Accessed 09 March 2022).
          </Typography>
          <Typography paragraph>
            Mills, T. (2015). Tapered Throne Introduction. Available at: http://taperedthrone.com/ (Accessed 09 March 2022).
          </Typography>
          <Typography paragraph>
            Moratto, A. (2021). Black Barbershops: Much More Than a PLace to Get a Haircut. Available at: 
            https://www.modernsalon.com/1072854/black-barbershops-much-more-than-a-place-to-get-a-haircut (Accessed 09 March 2022).
          </Typography>
          <Typography paragraph>
            Rehman, R. (2021). Black and White Photography Advantages and Disadvantages. Available at: 
            https://www.thecubicfeetdesign.com/blog/black-and-white-photography-advantages-and-disadvantages/ (Accessed 09 March 2022).
          </Typography>
          <Typography paragraph>
            Tauszik, B. (2015). Tapered Throne. Available at: http://taperedthrone.com/ (Accessed 09 March 2022).
          </Typography>
                  </Box>
              </div>
                
                <div className="social-icons">
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
                </div>
                  <Divider></Divider>
                  <div className="close-button">
                    <Button className="close" onClick={this.handleCloseModal}>Close</Button>
                  </div>
              </div>
        </Modal>
            </div>
      </CardActions>
    </Card>
  </React.Fragment>
            </Box>
          </Item>
        </Grid>
              {/* NET/WEB ART POST END */}
              
              {/* DESIGN & AESTHETICS POST */}
        <Grid item xs={2} sm={4} md={4}> 
          <Item>
          <Box sx={{ flexGrow: 1 }}>
            <React.Fragment>
    <Card sx={{ flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="design"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Design and Aesthetics
          </Typography>
          <Typography variant="body2" color="text.secondary">
            An analysis oon the core principles of design and aesthetics
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="icon">
        <Button size="small" color="primary" onClick={() => this.handleOpenModal("aesthetic")}>
          Read More
        </Button>
        <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "aesthetic"
              }
              contentLabel="aesthetic Modal"
            >
              <div className="content">
                <div className="modal-header">
                  <h1>Design and Aesthetics</h1>
                </div>
                <Divider></Divider>
                {/* Text container with vertical scroll bar */}
                <div style={{ height: 1100, whiteSpace: 'nowrap' }}>
                  <Box
                    component="div"
                    sx={{
                      overflowY: 'scroll',
                      my: 2,
                      p: 5,                          
                    }}
                  >
                    <Box sx={{width: 500}}>
                    <Typography paragraph>
1. Invisible design elements
</Typography>
<Typography paragraph>
Net artists have used the net as a medium and created for the web itself, not just for<br></br> display purposes (Park, 2007). How I have come to understand this is that net art cannot exist outside of the web. For example, the format of a GIF cannot exist without the web. There are similar ways in which they can be displayed, such as videos (mp4s), but the way artists such as Tauszik (Tapered Throne) <br></br>have compiled their art means that the impact of their work would lose its efficacy if exhibited offline. 
</Typography>
<Typography paragraph>
Glitch art is a perfect example of the internet being used as material and canvas (Park, 2007). Elements of the web are turned into elements of art that are changed, broken and redefined to create something new. The art itself subverts the idea that different forms on the net are unchangeable programmed components (Park, 2007) because artists are able to go into the programming itself manipulating it into something new that can be viewed as art.
</Typography>
<Typography paragraph>
2. Collaborative participation
</Typography>
<Typography paragraph>
The internet has allowed artists on opposite ends of the globe to participate as well as audiences from different parts of the world being able to view and participate in these interactive experiences. Audiences become contributors to the artworks, thus, blurring the line between artist and viewer. The user’s participation in the artwork is all part of the process (Park, 2007) as the artwork would not exist without the interactive component. An example of this is World of female avatars. A public call for women to submit pictures of their body and personal statements about their bodies was used to create a digital collage with accounts from women from different cultural backgrounds around the world. By having the participants as a part of the artwork, the artists are able to simultaneously create and disseminate the information which gives the users power to control it due to their intrinsic role as the material, the subject and object of the art (Park, 2007).
</Typography>
<Typography paragraph>
3. Anarchic structure
</Typography>
<Typography paragraph>
The importance of communication of net art is not simple communication to deliver information but share experiences online without restrictions (Park, 2007). 
</Typography>
<Typography paragraph>
“Man With a Movie Camera: The Global Remake is a participatory video shot by people around the world who are invited to record images interpreting the original script of Vertov's Man With A Movie Camera and upload them to this site.
Software developed specifically for this project archives, sequences and streams the submissions as a film. Anyone can upload footage. When the work streams your contribution becomes part of a worldwide montage, in Vertov's terms the decoding of life as it is.
</Typography>

<Typography paragraph>
THE MOVIE
</Typography>
<Typography paragraph>
Everyday a new version of the movie is built. On the left is Vertov's original. On the right is a shot uploaded from a participant. The uploaded shots are rotated each day if there is more than one. So the built movie may never be quite the same.” (net-art).
In the case of “Man With A Movie Camera”, all participants are equal contributors as artists. There is no clear definition of artist and audience as it melts into an online interactive experience (Park, 2007).
</Typography>

<Typography paragraph>
4. Non-linear communication
</Typography>
<Typography paragraph>
Many net artists have explored the non-linearity of the web in their artworks. Some of their art remains ongoing due to the user’s ability to interact with the work and others remain time capsules that remain accessible to users to view by continuously visiting the website or being able to download parts of it (Park, 2007).
</Typography>
<Typography paragraph>
It’s doing it is an online group exhibition of computer-generated images that autonomously updates on a daily basis over the course of 45 days (itsdoingit, 2015). Users have the option of following their Facebook and Twitter accounts to get updates on the generated images. There is also a dropdown menu on the website that let’s users browse through previous exhibition dates.
</Typography>
<Typography paragraph>
References:
</Typography>
<Typography paragraph>
Bard, P. (2007). Man With A Movie Camera. Available at: https://artbase.rhizome.org/wiki/Q4102 (Accessed 25 April 2022).
</Typography>
<Typography paragraph>
Ferriss, A., Parrish, A., Schwarz, D., Wicks, D., Haider, G., Hollenbach, K., Dorfelt, M., Nobrega, M., Mendoza, N. (2016). Available at: https://www.itsdoing.it/ (Accessed 25 April 2022).
</Typography>
<Typography paragraph>
Kodzoman, J., Stermitz, E., Perkovic, L., Zbigniew, L. (). World Of Female Avatars. Available at: https://world-of-female-avatars.net/main.html (Accessed 25 April 2022).
</Typography>
<Typography paragraph>
Tauszik, B. (2015). Tapered Throne. Available at: http://taperedthrone.com/ (Accessed 09 March 2022).
</Typography>
</Box>
</Box>
              </div>
                
                <div className="social-icons">
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
                </div>
                  <Divider></Divider>
                  <div className="close-button">
                    <Button className="close" onClick={this.handleCloseModal}>Close</Button>
                  </div>
              </div>

            </Modal>
    </div>
      </CardActions>
    </Card>
  </React.Fragment>
              
            </Box>
          </Item>
        </Grid>
              {/* NET/WEB ART POST END*/}

              {/* INTERNET SOCIETY & DESIGN JUSTICE POST */}
              <Grid item xs={2} sm={4} md={4}> 
          <Item>
          <Box sx={{ flexGrow: 1 }}>
            <React.Fragment>
    <Card sx={{ flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="design justice"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Internet, Society and Design Justice
          </Typography>
          <Typography variant="body2" color="text.secondary">
          My experience with a need for decolonising technology is how I have seen 
          that AR filters on platforms like Snapchat and Instagram more so do not cater 
          to black audiences.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="icon">
        <Button size="small" color="primary" onClick={() => this.handleOpenModal("internetsociety")}>
          Read More
        </Button>
        <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "internetsociety"
              }
              contentLabel="internet society Modal"
            >
              <div className="content">
                <div className="modal-header">
                  <h1>Decolonising Technology</h1>
                </div>
                <Divider></Divider>
                {/* Text container with vertical scroll bar */}
                <div style={{ height: 1100, whiteSpace: 'nowrap' }}>
                  <Box
                    component="div"
                    sx={{
                      overflowY: 'scroll',
                      my: 2,
                      p: 5,                          
                    }}
                  >
                    
                    <Typography paragraph>
          My experience with a need for decolonising technology is how I have seen that 
          AR filters on platforms like Snapchat and Instagram more so do not cater to black
           audiences. A person cannot adjust their skin tone and the default remains at a 
           setting where the person appears paler. Morgan Jerkins has emphasised how such a 
           change has “both racial and cultural implications” (Mulaudzi, 2017). It further 
           perpetuates colorism within ethnic communities by reinforcing that having Westernized 
           features such as lighter skin and a thin nose are better than ethnic ones.
          </Typography>
          <Typography paragraph>
          Colorism, which has been long prevalent in print media, has found itself seeping into 
          the digital space such as platforms like Snapchat, Instagram and now TikTok where whiter 
          faces are promoted more than darker ones (Appelman, 2021). An experience of mine was with 
          hair-changing colour filters that do not take black hairstyles into account. The filters 
          broke or did not render well on black hairstyles like braids, bantu knots and afros which 
          further led to an othering experience and exclusion. I tested this theory of mine by trying 
          the same hair colour filters when I had my hair straightened or had a straight-hair weave. 
          I found that the filters rendered better with full coverage of my hair and with brighter 
          colours. Buolamwini (2019) further elaborates on this bias in artificial intelligence by 
          noting how facial analysis software fails to detect darker skinned people due to these systems 
          being tested on predominantly white males (Buolamwini, 2019).
          </Typography>
          <Typography paragraph>
          Black people cannot use certain filters or have to conform to a Westernized appearance in order 
          to use these filters. This means that only hairstyles that conform to a Western appearance like 
          straight hair weaves and wigs will ensure efficacy in the use of the filter. ‘Beautify’ filters 
          are not excluded. Whereas hairstyles can easily be changed and adapted because how black people 
          choose to wear their hair does not determine their level of “blackness”, makeup filters do not 
          allow for such room and adaptability.  It is prevalent especially among Snapchat filters for there 
          to be skin lightening effects. Snapchat has remained a topic of controversy due to some of their 
          filters having whitewashed effects. Many users have noticed how filters like the flower crown and 
          pink flower crown not only lighten people of colour's skin tone but alter their features to suit 
          Western standards of beauty (Sherrington in Mulaudzi, 2017). The nose is slimmed down and on some 
          occasions even the lips. Some of the filters go as far as altering the eye colour to a bluish hue.
          </Typography>
          <Typography paragraph>
          This kind of exclusion forces us to question who these systems truly serve and how much does a person
           have to change themselves to function with technological systems that increasingly govern our lives 
           (Buolamwini, 2019). Not only that but how can these systems be fixed to avoid the harmful effects that 
           they have on people of colour.
          </Typography>
          <Typography paragraph>
            References:
          </Typography>
          <Typography paragraph>
          Appelman, N. (2021). Photo filters are keeping colorism alive. Available at: 
          https://racismandtechnology.center/2021/10/01/photo-filters-are-keeping-colorism-alive/ (Accessed 19 April 2022).
          </Typography>
          <Typography paragraph>
          Buolamwini, J. (2019). Artificial Intelligence Has a Problem With Gender and Racial Bias. Here’s How to Solve It. 
          Available at: https://time.com/5520558/artificial-intelligence-racial-gender-bias/ (Accessed 19 April 2022).
          </Typography>
          <Typography paragraph>
          Mulaudzi, M. (2017). Let’s Be Honest: Snapchat Filters Are A Little Racist. Available at: 
          https://www.huffingtonpost.co.uk/2017/01/25/snapchat-filters-are-harming-black-womens-self-image_a_21658358/ (Accessed 19 April 2022).
          </Typography>

                  </Box>
              </div>
                
                <div className="social-icons">
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
                </div>
                  <Divider></Divider>
                  <div className="close-button">
                    <Button className="close" onClick={this.handleCloseModal}>Close</Button>
                  </div>
              </div>

            </Modal>
    </div>
      </CardActions>
    </Card>
  </React.Fragment>
              
            </Box>
          </Item>
        </Grid>
              {/* INTERNET SOCIETY & DESIGN JUSTICE POST END */}

              {/* INTERNET ART PREP WORK POST */}
              <Grid item xs={2} sm={4} md={4}> 
          <Item>
          <Box sx={{ flexGrow: 1 }}>
            <React.Fragment>
    <Card sx={{ flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="prep work"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Internet Art Prep Work
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A brief overview of the brainstorming process
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="icon">
        <Button size="small" color="primary" onClick={() => this.handleOpenModal("prep")}>
          Read More
        </Button>
        <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "prep"
              }
              contentLabel="prep Modal"
            >
              <div className="content">
                <div className="modal-header">
                  <h1>Prep Work</h1>
                  <div className="close-button">
                    <Button className="close" onClick={this.handleCloseModal}>Close</Button>
                  </div>
                </div>
                <Divider></Divider>
                {/* Text container with vertical scroll bar */}
                <div style={{ height: 1100, whiteSpace: 'nowrap' }}>
                  <Box
                    component="div"
                    sx={{
                      overflowY: 'scroll',
                      my: 2,
                      p: 5,                          
                    }}
                  >
                    <Box>
                    <Typography paragraph>
                    I wanted to create a website that looks almost like a social media platform – almost like the Instagram desktop app. The blog posts will be presented as posts on the feed 
                    </Typography>
                    <img src={Picture1}></img>
                    <Typography paragraph>
                    For the internet artwork, I would like to comment on social media and its part in determining and perpetuating beauty standards. With the rising popularity of beauty filters, the standard of beauty changes even more frequently and the desired features becoming harder to achieve. With AR platforms like Lens Studio (Snapchat) and Spark AR (Instagram / Facebook), anyone can create beauty filters. There is an overwhelming amount of beauty filters available in the effects gallery but somehow, they all manage to look similar in the way they change your facial features.
                    </Typography>
                    <img src={Picture2}></img>
                    <Typography paragraph>
                    The artwork will be a post with a picture or selfie of a person (the owner of the imaginary account). The user will be able to click on the picture and see a new filtered version of the image. The user can continue clicking on the image and more filtered images – sometimes the same image but with a different filter – will be overlayed on the previous ones. Parts of the images can be hovered over where information on the name of the filter or how much editing was done with what tools (retouching, face sculpting, eye colour change, picture enhancements, etc.).  Eventually the post will look like a chaotic collage of filters and editing information to highlight how distorted our views can become when looking at pictures of people on social media.
                    </Typography>
                    <img src={Picture3}></img>
                    <Divider></Divider>
                    <img src={Picture4}></img>
                    <Divider></Divider>
                    <img src={Picture5}></img>
                    
                    <Typography paragraph>
                    The user can navigate to the imaginary person’s account…
                    They can click on a post which will then allow them to interact with it. This is where the actual artwork is.
                    </Typography>
                    <img src={Picture6}></img>
                    <img src={Picture7}></img>
                    </Box>
                  </Box>
              </div>
                
                <div className="social-icons">
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
                </div>
                  <Divider></Divider>
                  <div className="close-button">
                    <Button className="close" onClick={this.handleCloseModal}>Close</Button>
                  </div>
              </div>

            </Modal>
    </div>
      </CardActions>
    </Card>
  </React.Fragment>
              
            </Box>
          </Item>
        </Grid>
              {/* INTERNET ART PREP WORK POST END */}


              {/* PREVIOUS INTERNET ART PROTOTYPE DISCUSSION END */}
              <Grid item xs={2} sm={4} md={4}> 
          <Item>
          <Box sx={{ flexGrow: 1 }}>
            <React.Fragment>
    <Card sx={{ flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="discussion"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Previous Internet Art Prototype Discussion
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="icon">
        <Button size="small" color="primary" onClick={() => this.handleOpenModal("discussion")}>
          Read More
        </Button>
        <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "discussion"
              }
              contentLabel="discussion Modal"
            >
              <div className="content">
                <div className="modal-header">
                  <h1>Title</h1>
                </div>
                <Divider></Divider>
                {/* Text container with vertical scroll bar */}
                <div style={{ height: 1100, whiteSpace: 'nowrap' }}>
                  <Box
                    component="div"
                    sx={{
                      overflowY: 'scroll',
                      my: 2,
                      p: 5,                          
                    }}
                  >
                    <Typography paragraph>
          The prototype will look like an Instagram post: it will have the username and profile picture at 
          the top. The like, comment, share and save button will be placed below the image followed by the 
          like count, caption, comment, time of posting and text box for posting comments. 
          </Typography>
          <Typography paragraph>
          The user will be able to click on the tag icon to view any relevant tags. The image will be 
          interactive as the user will be able to click on the image and reveal another image on top of it. 
          All the images will have different face filters with varying levels of transparency which will 
          eventually lead to a distortion of the original image. 
          </Typography>
          <Typography paragraph>
          As the user moves around the artwork, tooltips will appear to prompt the user to click on those 
          elements. When a button is clicked on, a popover will appear with information on how each image 
          has been edited and what filters were used.
          </Typography>
          <Typography paragraph>
          As an artwork, the piece functions as a commentary on how we are constantly consuming visual media
           especially pertaining to beauty standards. The overlaying of different versions of the same image 
           highlight how many of the pictures of people posted on social media are not accurate depictions/
           representations of themselves or what they really look like. It also puts emphasis on how drastically 
           you can alter your appearance using filters on social media platforms like Instagram and Snapchat, 
           and editing apps like FaceTune and Airbrush. 
          </Typography>
          <Typography>
          Photo-sharing social platforms like Instagram can be likened to digital galleries where people can share
           their art. It is not a platform where art can be created. With the subsequent rise of social networks,
            net art also turned its way of distributing artworks: before social networks, online communities were 
            organized on a topic-basis. Artists were gathering around topics they found interesting, and they 
            onnected with other artists. But nowadays, everything turned to individuals - like you already know, 
            social networks are constructed in a way that every individual is creating their own personal "galaxy"
             of friends and followers. Individuals are in the center of their own communities, and the distribution 
             of art just followed this path. The net artwork acts as a bridge between using the internet as a medium 
             to share and curate art, and the internet being used as the medium itself. With the prototype, I attempted 
             to turn aspects of the functionality of Instagram into a piece of art. The artwork, similar to projects 
             like ‘Mirroring’ and ‘Cameron’s World’, blends browser art and collage art by using browser art, A sub-genre 
             of internet art, browser art is a renegade artwork made as part of a URL that uses the computer as raw
              material, transforming the codes, the structure of the websites and the links between servers into visual 
              material, and presenting it in digital collage form.
          </Typography>
          <Typography paragraph>
          1.	Invisible design elements
          </Typography>
          <Typography>
          TThe artwork uses React and CSS to render the artwork as well as elements from social media platform UIs as 
          individual pieces that make up the artwork such as the like button (Park pg 4) 
          </Typography>
          <Typography>
          2.	Collaborative participation
          </Typography>
          <Typography>
          The artwork encourages the user to interact with it by incorporating interactive elements such as the popovers 
          and tooltips that prompt the user to engage with the message of the artwork. Ideally, in the final iteration of 
          the prototype, the aforementioned elements would further increase engagement by allowing the user to record the
           questions posed and have that information presented back to them in the form of poll results. This not only
            drives engagement but connects the user to others who have interacted with the artwork and ultimately driving
             a conversation around the artwork’s message. The user’s participation in the artwork is an important part of 
             the artwork itself (Park, 5). Without this level of engagement, the artwork would be missing a fundamental 
             aspect of what makes it net art: the ability to share it
          </Typography>
          <Typography>
          The non-linearity of the artwork also allows users to access the artwork whenever they want to (Park, 7).
          </Typography>
          <Typography>
          Challenges that came with this project was the implementation of overlaying the images in a way that would allow
           for a distorting effect to be created. A CSS component with glitching or image merging effects could be used to 
           make the distortion more effective. Integrating the popovers in a way that did not interfere with the rest of 
           the artwork’s interactive functionality would require either a close button or coding that would allow for dynamic 
           positioning of the modals when they appear.
          </Typography>
          <Typography>
          Moving forward, I believe it would be an interesting to turn the cursor into a magnifying glass where the original 
          image without any filters or editing can be revealed. This could tie in with the layering feature and allows the user 
          to “unmask” or see through all the layers of editing and distortion. 
          </Typography>
          <Typography>
          There could be a more focused idea on the information presented in the popovers and tooltips. A conversation could be 
          created between the user and the artwork to enhance the engagement of the artwork. Questions could be presented that 
          prompt the user to think about how they use and engage with face filters. Questions like, “How often do you take 
          pictures with a filter on?” could be integrated into a poll feature where yes/no buttons can be clicked to answer the 
          questions and have the information displayed around the artwork as the user continues to interact with it. This feature
           would, of course, be limited to my coding ability and time constraints. 
          </Typography>
          <Typography>
            References:
          </Typography>
          <Typography>
            
          </Typography>
          <Typography>
            
          </Typography>
          <Typography>
            
          </Typography>
                  </Box>
              </div>
                
                <div className="social-icons">
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
                </div>
                  <Divider></Divider>
                  <div className="close-button">
                    <Button className="close" onClick={this.handleCloseModal}>Close</Button>
                  </div>
              </div>

            </Modal>
    </div>
      </CardActions>
    </Card>
  </React.Fragment>
              
            </Box>
          </Item>
        </Grid>
              {/* PREVIOUS INTERNET ART PROTOTYPE DISCUSSION END */}
      

              {/* A1 REFLECTION POST */}
              <Grid item xs={2} sm={4} md={4}> 
          <Item>
          <Box sx={{ flexGrow: 1 }}>
            <React.Fragment>
    <Card sx={{ flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="reflection one"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Assignment 1 Reflection
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="icon">
        <Button size="small" color="primary" onClick={() => this.handleOpenModal("reflection1")}>
          Read More
        </Button>
        <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "reflection1"
              }
              contentLabel="reflection 1 Modal"
            >
              <div className="content">
                <div className="modal-header">
                  <h1>Title</h1>
                </div>
                <Divider></Divider>
                {/* Text container with vertical scroll bar */}
                <div style={{ height: 1100, whiteSpace: 'nowrap' }}>
                  <Box
                    component="div"
                    sx={{
                      overflowY: 'scroll',
                      my: 2,
                      p: 5,                          
                    }}
                  >
                    <Typography paragraph>
          The biggest thing for me that came to this assignment was the completing of it. I have always 
          struggled to gauge how much time I would need to complete an assignment including any challenges
           or obstacles I may face along the way and being able to account for that. This time, I had to 
           be realistic about needing another extension on top of the one we received.
          </Typography>
          <Typography paragraph>
          The challenges I faced with this assignment was dividing my time between my job and completing the assignment itself. Along 
          with that, I had to try and find ways around the loadshedding schedules as where I lived and where I worked fell under 
          different blocks. This meant that some days I would not be able to work on the assignment for very long because my laptop 
          would not last without power. During the times that I worked on the assignment, I made very little to no progress. I would 
          get very frustrated as soon as an error popped up on the screen. I felt very intimidated about having to use React and I felt
           very helpless/useless/limited/lacking knowledge. My ability to problem solve went out the window when it came to looking at 
           the errors and that further deepened my thinking that I’m not cut out for coding and doubted the basic knowledge I had of 
           HTML and CSS.
          </Typography>
          <Typography paragraph>
          After receiving my second extension, I was advised to take a short period of rest and come back to the assignment when I was 
          rested and less stressed. When I got back to the assignment, it was a complete turnaround because what was a mountain of 
          challenges and feelings of inexperience and frustration were gone and I was able to sit down and finish the website from 
          start to finish. This time I didn’t feel pressured or out of time. I was able to concentrate (another challenge for me 
          because I have ADHD and go periods without being medicated because wow the prescription is expensive) and calmly face any 
          errors that did come up. Most of the errors I was able to fix myself and those that I couldn’t, Stack Overflow and W3 Schools 
          were my friends. I could definitely benefit from actually asking for help but that’s something I have always struggled to do 
          but am actively working on.
          </Typography>
          <Typography>
          I believe I completed everything I set out to do within the basics for this assignment and maybe a little more especially 
          with the CSS. I kept the online store template because I thought it would be a good idea to use the business I am currently 
          running as the online store and have some of the menu items double as the blog posts. Everything on the website from the brand
           colours to the products and their prices are an accurate depiction of the brand and its inventory.
          </Typography>
          <Typography paragraph>
          My biggest challenge was figuring out how to link some of the menu items to the different blog pages I created. By looking at
           the code I already had for everything on the website and playing around with the code, I was able to figure out how to add 
           the Link component to the array so that a person would be able to have something to click on and direct them to the specified
            blog page listed on the menu item.
          </Typography>
          <Typography>
          The only things I would change or add to the website is linking the social media icons to the pages I currently have active
           for the business and using the business’s brand fonts. 
          </Typography>
          <Typography>
          I am very proud of myself for managing to complete this assignment – albeit not on time – because it’s been a very long time
           since I have been able to successfully submit a complete set of varsity work.
          </Typography>
                  </Box>
              </div>
                
                <div className="social-icons">
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
                </div>
                  <Divider></Divider>
                  <div className="close-button">
                    <Button className="close" onClick={this.handleCloseModal}>Close</Button>
                  </div>
              </div>
        </Modal>
    </div>
      </CardActions>
    </Card>
  </React.Fragment>
              
            </Box>
          </Item>
        </Grid>
              {/* A1 REFLECTION POST END */}

              {/* A2 REFLECTION POST */}
              <Grid item xs={2} sm={4} md={4}> 
          <Item>
          <Box sx={{ flexGrow: 1 }}>
            <React.Fragment>
    <Card sx={{ flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="reflection two"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Assignment 2 Reflection
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="icon">
        <Button size="small" color="primary" onClick={() => this.handleOpenModal("reflection2")}>
          Read More
        </Button>
        <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "reflection2"
              }
              contentLabel="reflection 2 Modal"
            >
              <div className="content">
                <div className="modal-header">
                  <h1>Title</h1>
                </div>
                <Divider></Divider>
                {/* Text container with vertical scroll bar */}
                <div style={{ height: 1100, whiteSpace: 'nowrap' }}>
                  <Box
                    component="div"
                    sx={{
                      overflowY: 'scroll',
                      my: 2,
                      p: 5,                          
                    }}
                  >
                    <Typography paragraph>
          I believe that for this assignment, I achieved a lot more than I expected to especially
           when it came to putting together different components that worked. I felt a lot more 
           confident compared to the first assignment and it was encouraging being able to execute 
           the ideas I had and see them visually. 
          </Typography>
          <Typography paragraph>
          I do feel a significant difference in how I managed to complete the assignment after going
           back on ADHD meds. It was a lot easier to manage my anxiety and initiate tasks without 
           feeling overwhelmed every time I prepared myself to sit in front of my laptop
          </Typography>
          <Typography paragraph>
          For this assignment, I wanted to take a few components that I found engaging and eye-catching
           and learn to incorporate them into my website. I feel like I surpassed this goal as I did not 
           expect to get almost all the components I wanted to have in the website working. The only 
           components I missed out on was the image layering effect for the prototype and needing more
            time to figure out how to have multiple modals on a single page. Because of the latter, I was
            unable to have some of my blog posts on different pages and had to settle for having them on
             the homepage.
          </Typography>
          <Typography>
          I fell short on the CSS but I’m confident I’ll be able to have a fully realised aesthetic for the
           final exam.
          </Typography>
          <Typography paragraph>
          Now that I have a clear idea of what I want to achieve for the exam, I realise that it is important 
          for me to break down the different tasks needed for the exam into very small manageable chunks. Even 
          if it means doing an hour of coding a day will help to relieve the amount of pressure I feel when it
           comes to the workload.
          </Typography>
                  </Box>
              </div>
                
                <div className="social-icons">
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
                </div>
                  <Divider></Divider>
                  <div className="close-button">
                    <Button className="close" onClick={this.handleCloseModal}>Close</Button>
                  </div>
              </div>

            </Modal>
    </div>
      </CardActions>
    </Card>
  </React.Fragment>
              
            </Box>
          </Item>
        </Grid>
              {/* A2 REFLECTION POST END*/}

              {/* TECHNICAL REFLECTION POST */}
              <Grid item xs={2} sm={4} md={4}> 
          <Item>
          <Box sx={{ flexGrow: 1 }}>
            <React.Fragment>
    <Card sx={{ flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="technical"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Technical Reflection
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="icon">
        <Button size="small" color="primary" onClick={() => this.handleOpenModal("tech")}>
          Read More
        </Button>
        <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "tech"
              }
              contentLabel="tech Modal"
            >
              <div className="content">
                <div className="modal-header">
                  <h1>Technical Reflection</h1>
                </div>
                <Divider></Divider>
                {/* Text container with vertical scroll bar */}
                <div style={{ height: 1100, whiteSpace: 'nowrap' }}>
                  <Box
                    component="div"
                    sx={{
                      overflowY: 'scroll',
                      my: 2,
                      p: 5,                          
                    }}
                  >
                    <Typography paragraph>
                   For the home page I used the mui library. For the posts I used the complex card example in the library. Within the contents of the card I used the Avatar component along with social media buttons and a text field for posting comments.
I included a feature from the complex card that allowed you to expand the card and reveal more text. This is where I would incorporate the rest of a blog post.
For the navigation bar, I used old code from assignment one and added the search bar component from the library. I then changed the text links to icons. As part of navigation within the site, I incorporated chip components that would link to their respective pages.
</Typography>
<Typography paragraph>
I had first tried to use the image list component that rendered an array of images in a quilted or masonry grid layout however due to my coding abilities I had to manually separate columns in order to achieve the same effect because I wanted to have each image open a lightbox on click and I was unable to create a constant function that would have a different lightbox connected to it. I used the multi-modal code to include static pictures.
</Typography>

<Typography paragraph>
I used another card component example from the library for the blog page.
To have different content for each card, I was unable to use the modal example from the library because it did not give me an option to have multiple modals on one page so I had to do further research and look for examples where there were multiple modals on one page and I had to install a specific library for that. 
</Typography>
<Typography paragraph>
I wanted for aesthetic purposes to have a vertical scrollbar. 
</Typography>
<Typography paragraph>
I found an overflow component in the library however, it was only. for horizontal overflow, so I played around with a few values and did some trial and error and eventually figured out how to turn that into a vertical scrollbar having used dividers just to make all the content look neat and to have visual separation of all the different content within the card. 
</Typography>
<Typography paragraph>
The internet art page which also doubles as the user profile I took the same structure used for the blog posts where you had a card that had an image a title and a caption and a button that would open that on click would open up the modal and within the modal’s container I inserted the Instagram post example I had used in assignment 2 and using the structure of the Instagram post was the layout for my internet at work and I used the popover component from the library and used one of its examples for the social interaction buttons. I used the basic popover component and then for customisation purposes I used the Anchor playground that was included on the page to custom as the different anchor points where the pop over content would render then I used the example code for the post button to render a hover popover. 
</Typography>

<Typography paragraph>
From my experience of coding and learning as I went along I think the challenge I faced with having thousands of lines of code could have been solved by creating different functions and constants.
</Typography>
<Typography paragraph>
To solve the issue of having thousands of lines of code, I made sure that all the code formatting and the structure was meet and as eligible as possible and I included lots of comments and I used comment lines to create dividers between the different codes so that I knew what I was looking at and which sections I was working from.
</Typography>


                  </Box>
              </div>
                
                <div className="social-icons">
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
                </div>
                  <Divider></Divider>
                  <div className="close-button">
                    <Button className="close" onClick={this.handleCloseModal}>Close</Button>
                  </div>
              </div>

            </Modal>
    </div>
      </CardActions>
    </Card>
  </React.Fragment>
              
            </Box>
          </Item>
        </Grid>
              {/* TECHNICAL REFLECTION POST END*/}

              {/* DESIGN REFLECTION POST */}
              <Grid item xs={2} sm={4} md={4}> 
          <Item>
          <Box sx={{ flexGrow: 1 }}>
            <React.Fragment>
    <Card sx={{ flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="design reflection"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Design Reflection
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="icon">
        <Button size="small" color="primary" onClick={() => this.handleOpenModal("design")}>
          Read More
        </Button>
        <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "design"
              }
              contentLabel="design Modal"
            >
              <div className="content">
                <div className="modal-header">
                  <h1>Design Reflection</h1>
                </div>
                <Divider></Divider>
                {/* Text container with vertical scroll bar */}
                <div style={{ height: 1100, whiteSpace: 'nowrap' }}>
                  <Box
                    component="div"
                    sx={{
                      overflowY: 'scroll',
                      my: 2,
                      p: 5,                          
                    }}
                  >
                    <Typography paragraph>
                    When designing the homepage, I used the Instagram structure as inspiration for Yodel's layout. 
                    </Typography>
                    <Typography paragraph>
Assignment Two:
</Typography>
<Typography paragraph>
I realised that I was focusing too much on creating a replica of Instagram instead of developing new layout for a new social Media platform. I recognised that it would be easier to model the platform around the type of content I was trying to display and meet the brief requirements rather than trying to force the content into Instagram listing layout. 
</Typography>
<Typography paragraph>
Existing Layout:
</Typography>
<Typography paragraph>
I rebooted my thinking and started by listing the basic features of a social media platform. This included posts with usernames, the time of posting, social interaction patterns, such as liking, commenting, sharing and saving the post, the ability to post comments along with an option to add emojis. 
</Typography>
<Typography paragraph>
A Search Function was included as it is a common trait on social media platforms.
</Typography>
<Typography paragraph>
I looked at other social media platforms for inspiration. I looked at Pinterest, Twitter and Tumblr where I been realised that Yodel's layout would be a lot similar to Tumblr’s. Yodel would be a mixture of mixed media such as images text posts in long and short form images that are in carousels. Tumblr’s homepage is the basis for the structure of Yodel's layout.
</Typography>
<Typography paragraph>
However, to meet the brief requirements, I would have had to separate the pages for the design and blog posts. This meant that I could not use Tumblr’s entire structure for Yodel.
</Typography>
<Typography paragraph>
For Yodel, I decided that the homepage would be a timeline of mixed posts. This would be posts from the design section and the blog section as well as the internet art section that would be featured on the homepage. 
</Typography>
<Typography paragraph>
The homepage timeline will only include ONE Post from each page as an example rather than adding everything because it would look bulky, and it would take up too much space in the coding file to have all the different posts from all the different pages.
</Typography>
<Typography paragraph>
They all have category tags so I took the idea of hashtags from Instagram and from blogs and I combined into. 
</Typography>
<Typography paragraph>
I used the chip component from the  MUI library to create category tags which if clicked on would take you to the respective pages on the platform. The header on each post on the homepage would have tags related to the category they were in. For example, the theory post would have a blog tag and the design post would have a design tag. These chips are listed under the username and time stamp on the post. 
</Typography>
<Typography paragraph>
I did not keep the social interaction buttons for the purpose of this assignment. I did not include a working feature of viewing, so I created the button, but I've made it a disabled button, so it is primarily for aesthetic purposes. You can see that a post would have comments but won’t be able to view them. You can also type out a post or a comment, but you can't post it in the actual post.  
</Typography>
<Typography paragraph>
The heading of emojis feature was also disabled or not included in the code in the interest of time. I felt it would be better to show that it is a feature that can be implemented but a user follow suggestion has been included, which was inspired by both Instagram and Tumblr. A trending categories section was included under the suggested following which was inspired by blog websites. 
</Typography>
<Typography paragraph>
There is also a switch function in the navigation bar, but that is also a feature that was not implemented in the code. The text field can be used; however, you cannot search for anything on the site. 
</Typography>
<Typography paragraph>
For the design section, I was inspired by the Pinterest feed. I really liked how the posts were rendered in a masonry grid. I wanted to emulate that, and my idea was that it would have different images from the different design documents randomly displayed in the design section which would open when clicked.
</Typography>
<Typography paragraph>
When you click on an image, it opens in a carousel to enable you to view them in an enlarged format so that you can see them clearly and view them in order and to keep with the social media platform. 
</Typography>
<Typography paragraph>
Design documents would look as if they came from different users. And when you open up an image in the speed on the design page then you would have the imaginary user’s information and indeed able to view the document or cycle through the images and in there with the social interaction buttons again and needs so that it looks more like a post where you can like comment share save. 
</Typography>
<Typography paragraph>
and at first, I wanted to implement this idea using the masonry grid component however due to my coding limitations. I was unable to include a constant way in the array with it would open the specific. Image Carousel related to the Post being clicked on, so I had to do a lot of research, and it came down to my coding abilities, which resulted in me settling for manually plotting the grid components. 
</Typography>
<Typography paragraph>
There was a quilted image list example in the MUI library that I really liked, and I was unable to use that code due to my coding abilities, but I took the layout and I plotted the different red components manually so that I could use the existing code. 
</Typography>
<Typography paragraph>
I had a previous idea where it would be the same layout but when you click on the post it would have a drop-down feature with a visible carousel that you could click through. However, I felt like that would be ineffective as you would not be able to view the images clearly enough to read the information especially in documents such as the style guide. 
</Typography>
<Typography paragraph>
For the blog section, I just used a standard grid layout with all the text posts and was able to implement multiple models so that the viewer could read the different documents such as my previous assignment reflections and my technical reflections.  
</Typography>
<Typography paragraph>
Within the modal content I wanted the text to have a scrollable feature so that the viewer could see how much of the content they have read; I did not want it to be one long wall of text. In keeping to the social media theme, included are the social interaction buttons at the bottom that the user would be able to use to like, comment, share, and save the post. These features were disabled. 
</Typography>
<Typography paragraph>
In the user profile, the person who is viewing the website would be visible to create emotion as if you were using your own account to view the platform and I used Pinterest user profile layout for the user information. I then used Instagram’s post layout grid to display the internet card prototype and the final internet artwork. I kept with the Instagram theme where one clicks on the post, and it opens a modal where you can view the enlarged version of the post. I considered having the artwork’s rational posted alongside the artwork; however, I felt that would be too cumbersome as the artwork is interactive and I wanted to use it to be able to focus on the artwork rather than have the text distracting the user. 
</Typography>
<Typography paragraph>
In conclusion, I wanted every part of the platform’s different pages to look like a different type of feed and I got that inspiration from Instagram and it's explore page where you have a feed on your timeline and then you have a different feed on the explore page. You have a different feed nested within that when you search for specific hashtags, where you will view other types of photos. 
</Typography>
<Typography paragraph>
I wanted each page on Yodel's platform to be a quilted type of explore page where you are viewing a specific type of content.
</Typography>
<Typography paragraph>
When it comes to the aesthetic of Yodel, I kept with the style guide I had created for Assignment Two because I felt like it reflected what I was trying to communicate through Yodel. The feeling that I was going for is youthful, fun, carefree, innovative yet traditional in its fundamental features. I didn't want it to be too different or innovative compared to the existing social media platforms. I would have wanted to still have users feel as though they know what they're doing and what they are getting into when they use the Yodel platform. The idea was to create a more curated experience rather than create something completely new. 
</Typography>
<Typography paragraph>
When it comes to designing and structuring the flow of the website, I wanted everything to be able to link to each other in some way which is why I thought the chips with the category tags would be useful.
</Typography>
<Typography paragraph>
I decided to make every single type of post look as if it was from a different user just to make the viewer feel they are viewing an actual social media site with real people posting rather than just have the users simulated by the username shown in their user profile because it would be strange to have a social media platform where you appear to be the only user. 
</Typography>
<Typography paragraph>
The experience and information presented throughout the website needed to come across as authentic as possible. 
</Typography>
<Typography paragraph>
I think for future projects or if I had to expand on this project further, I would then work on developing the flow between the different pages such as the homepage, the design, and the blog. I would also place emphasis and focus on smaller elements such as the animation when you “like” a post as seen on Instagram. The pages would also focus more on the user experience and the user’s sentiments when they are using the website.
</Typography>
                  </Box>
              </div>
                
                <div className="social-icons">
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
                </div>
                  <Divider></Divider>
                  <div className="close-button">
                    <Button className="close" onClick={this.handleCloseModal}>Close</Button>
                  </div>
              </div>

            </Modal>
    </div>
      </CardActions>
    </Card>
  </React.Fragment>
              
            </Box>
          </Item>
        </Grid>
              {/* DESIGN REFLECTION POST END */}

              {/* INTERNET ART FINAL RATIONAL POST */}
              <Grid item xs={2} sm={4} md={4}> 
          <Item>
          <Box sx={{ flexGrow: 1 }}>
            <React.Fragment>
    <Card sx={{ flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="rational"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Internet Art Final Rational
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A final walkthrough of the internet artwork's processes and inspiration
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="icon">
        <Button size="small" color="primary" onClick={() => this.handleOpenModal("rational")}>
          Read More
        </Button>
        <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "rational"
              }
              contentLabel="rational Modal"
            >
              <div className="content">
                <div className="modal-header">
                  <h1>Internet Art Final Rational</h1>
                </div>
                <Divider></Divider>
                {/* Text container with vertical scroll bar */}
                <div style={{ height: 1100, whiteSpace: 'nowrap' }}>
                  <Box
                    component="div"
                    sx={{
                      overflowY: 'scroll',
                      my: 2,
                      p: 5,                          
                    }}
                  >
                    
<Typography paragraph>
The prototype will look like an Instagram post: it will have the username and profile picture at the top. The like, comment, share and save button will be placed below the image followed by the like count, caption, comment, time of posting and text box for posting comments. 
</Typography>

<Typography paragraph>
The user will be able to click on the tag icon to view any relevant tags. The image will be interactive as the user will be able to click on the image and reveal another image on top of it. All the images will have different face filters with varying levels of transparency which will eventually lead to a distortion of the original image. 
</Typography>

<Typography paragraph>
As the user moves around the artwork, tooltips will appear to prompt the user to click on those elements. When a button is clicked on, a popover will appear with information on how each image has been edited and what filters were used
</Typography>

<Typography paragraph>
As an artwork, the piece functions as a commentary on how we are constantly consuming visual media especially pertaining to beauty standards. The overlaying of different versions of the same image highlight how many of the pictures of people posted on social media are not accurate depictions/representations of themselves or what they really look like. It also puts emphasis on how drastically you can alter your appearance using filters on social media platforms like Instagram and Snapchat, and editing apps like FaceTune and Airbrush. 
</Typography>

<Typography paragraph>
Photo-sharing social platforms like Instagram can be likened to digital galleries where people can share their art. It is not a platform where art can be created. With the subsequent rise of social networks, net art also turned its way of distributing artworks: before social networks, online communities were organized on a topic-basis. Artists were gathering around topics they found interesting, and they connected with other artists. But nowadays, everything turned to individuals - like you already know, social networks are constructed in a way that every individual is creating their own personal "galaxy" of friends and followers. Individuals are in the center of their own communities, and the distribution of art just followed this path. The net artwork acts as a bridge between using the internet as a medium to share and curate art, and the internet being used as the medium itself. With the prototype, I attempted to turn aspects of the functionality of Instagram into a piece of art. The artwork, similar to projects like ‘Mirroring’ and ‘Cameron’s World’, blends browser art and collage art by using browser art, A sub-genre of internet art, browser art is a renegade artwork made as part of a URL that uses the computer as raw material, transforming the codes, the structure of the websites and the links between servers into visual material, and presenting it in digital collage form.
</Typography>

<Typography paragraph>
1.	Invisible design elements
</Typography>
The artwork uses React and CSS to render the artwork as well as elements from social media platform UIs as individual pieces that make up the artwork such as the like button (Park, 2007)

<Typography paragraph>
2.	Collaborative participation
</Typography>

<Typography paragraph>
The artwork encourages the user to interact with it by incorporating interactive elements such as the popovers and tooltips that prompt the user to engage with the message of the artwork. Ideally, in the final iteration of the prototype, the aforementioned elements would further increase engagement by allowing the user to record the questions posed and have that information presented back to them in the form of poll results. This not only drives engagement but connects the user to others who have interacted with the artwork and ultimately driving a conversation around the artwork’s message. The user’s participation in the artwork is an important part of the artwork itself (Park, 2007). Without this level of engagement, the artwork would be missing a fundamental aspect of what makes it net art: the ability to share it
The non-linearity of the artwork also allows users to access the artwork whenever they want to (Park, 2007).
</Typography>

<Typography paragraph>
Challenges that came with this project was the implementation of overlaying the images in a way that would allow for a distorting effect to be created. A CSS component with glitching or image merging effects could be used to make the distortion more effective. Integrating the popovers in a way that did not interfere with the rest of the artwork’s interactive functionality would require either a close button or coding that would allow for dynamic positioning of the modals when they appear.
</Typography>

<Typography paragraph>
Moving forward, I believe it would be an interesting to turn the cursor into a magnifying glass where the original image without any filters or editing can be revealed. This could tie in with the layering feature and allows the user to “unmask” or see through all the layers of editing and distortion. 
There could be a more focused idea on the information presented in the popovers and tooltips. A conversation could be created between the user and the artwork to enhance the engagement of the artwork. Questions could be presented that prompt the user to think about how they use and engage with face filters. Questions like, “How often do you take pictures with a filter on?” could be integrated into a poll feature where yes/no buttons can be clicked to answer the questions and have the information displayed around the artwork as the user continues to interact with it. This feature would, of course, be limited to my coding ability and time constraints. 
</Typography>

<Typography paragraph>
References:
</Typography>
<Typography paragraph>
Park, J.Y. (2007). Design principles for interactive user experience through net art. Journal of Digital Design, 7, 47-55.
</Typography>


                  </Box>
              </div>
                
                <div className="social-icons">
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
                </div>
                  <Divider></Divider>
                  <div className="close-button">
                    <Button className="close" onClick={this.handleCloseModal}>Close</Button>
                  </div>
              </div>

            </Modal>
    </div>
      </CardActions>
    </Card>
  </React.Fragment>
              
            </Box>
          </Item>
        </Grid>
              {/* INTERNET ART FINAL RATIONAL POST */}

              {/* INTERNET ART CRITICAL REFLECTION POST */}
              <Grid item xs={2} sm={4} md={4}> 
          <Item>
          <Box sx={{ flexGrow: 1 }}>
            <React.Fragment>
    <Card sx={{ flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="critical reflection"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Internet Art Critical Reflection
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="icon">
        <Button size="small" color="primary" onClick={() => this.handleOpenModal("critical")}>
          Read More
        </Button>
        <Modal
              isOpen={
                this.state.showModal &&
                this.state.activeModal === "critical"
              }
              contentLabel="critical Modal"
            >
              <div className="content">
                <div className="modal-header">
                  <h1>Critical Reflection</h1>
                </div>
                <Divider></Divider>
                {/* Text container with vertical scroll bar */}
                <div style={{ height: 1100, whiteSpace: 'nowrap' }}>
                  <Box
                    component="div"
                    sx={{
                      overflowY: 'scroll',
                      my: 2,
                      p: 5,                          
                    }}
                  >
                    <Typography paragraph>
                    My idea was that there would be an artwork that would be present throughout the site and I would have an actual artwork included on the user profile page. I realised that I was being a bit unrealistic and that time would be affected and my coding abilities would be limited in terms of achieving that. I would rather tie in the theme of the artwork which was social media into the theme of the website and have the website be an extension of the artwork rather than an artwork itself. I wanted the user to question the posts that they see on existing social media platforms already. I wanted them to question how accepted and how Commonplace it is for images especially those of people's faces to be edited and the extremes that people can go towards editing their appearance or what the person actually looks like. 
                    </Typography>
                    <Typography paragraph>
I would demonstrate that you can create visually different versions of yourself using editing software that is very easily accessible so I used the idea of overlaying versions of the same person's face just edited in different ways to emphasise the idea and the suspect and I wanted to further enhance the prototype or the artwork by having the popovers which would have thought provoking questions also making the user question how they feed into this phenomenon.  I felt adding a pop over that would appear just before you click the post button to make you think about and reflect on the impact of your post The comment you were about supposed is or could be potentially harmful towards the person who posted the image. I added popovers with different types of content to the social interaction patterns to further emphasise how we interact with these posts 
</Typography>
<Typography paragraph>
I wanted these popovers to make the user stop and think for a second if what they are sharing is true information, if it's factual which comes down to the image that is presented in the artwork that is it a true reflection of who this person is.
</Typography>
<Typography paragraph>
The impact it would have on the person. They are sharing the post work because there's some type of content that some people don't like I don't like 10 gauge with and also you know I'm think before you like because I feel then also you know the higher the amount of likes forget the further Drive the message and the further it conditions the user and the poster into a certain way of saving with the user would notice that they get more likes on a picture then edited rather than a picture that they have not edited further driving them to feel the need to edit their pictures for acceptance and this ties in with all the teams that come. With the negative effects of social media with there is a standard of beauty or certainly and certain behaviours on more accepted or celebrated compared to others and also. furthering ideas that are prevalent in certain communities in minorities for example colourism, it would further the idea that post or images of woman who are lighter skin colour or fit into Western standards of Beauty and accepted and celebrated and viewed more than those who do not follow those standards of beauty. 
</Typography>
<Typography paragraph>
So the whole idea of the artwork is for the user to really question all the different ways that they interact the post down to how they view it. 
</Typography>
<Typography paragraph>
And how they think about it, and how they process the information that they are being presented with at first I wanted the artwork to be. 
</Typography>
<Typography paragraph>
I wanted the artwork to be a more visceral experience where a user would really feel how  sensory demanding social media is on you with the constant notifications and bombardment of images where you know you'll see on your timeline or your explore page the same images of from different angles and of different people but the different people look the same. It evolved and developed more into an internal and quieter experience for the user
</Typography>
<Typography paragraph>
You are forced to really question. You're thinking and your process rather than having external demands be made on your system.
</Typography>
                  </Box>
              </div>
                
                <div className="social-icons">
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
                </div>
                  <Divider></Divider>
                  <div className="close-button">
                    <Button className="close" onClick={this.handleCloseModal}>Close</Button>
                  </div>
              </div>

            </Modal>
    </div>
      </CardActions>
    </Card>
  </React.Fragment>
              
            </Box>
          </Item>
        </Grid>
              {/* INTERNET ART CRITICAL REFLECTION POST END */}

              </Grid>
          </Box >
          </div>
      )
      
    }
}
export default MutipleButtonsWithModalInSameComponent;