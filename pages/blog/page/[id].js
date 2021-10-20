import React, {useEffect, useContext} from 'react';

import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Skeleton from '@material-ui/lab/Skeleton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useSound from 'use-sound';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShareIcon from '@material-ui/icons/Share';
import Head from 'next/head'



const useStyles = makeStyles((theme) => ({
    root: {
        margin: '20px 100px 100px 100px',
        width: '50%',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        wordWrap: "break-word" ,
         overflow:"hidden",

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '10px 0px',
        },
    },
    main:{
        margin: '5px'
    },
    content:{
        display: 'flex',
        flexDirection: 'column',
        width: '95%',
        margin: "10px"
    },
    
    imageBox:{
        width: '100%',
        display: 'flex',
        alignContent: 'center',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        // [theme.breakpoints.down('md')]: {
        //     width: '50%',
        // },
        // [theme.breakpoints.down('sm')]: {
        //     width: '50%',
        // },
        // [theme.breakpoints.down('xs')]: {
        //     width: '400%',
        // },
    },
    image:{
        width: '100%',
        height: '50%',
        [theme.breakpoints.down('md')]: {
            padding: '0px',
            width: '100%',
            height: '40%',
        },
    },
    title:{
        fontSize: '50px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '35px',
            margin: '0px 0px 20px 0px'
        },
    },
    author:{
        backgroundColor: 'rgba(0, 0, 0, .3)',
        borderRadius: '23px',
        margin: '15px 5px',
        display: 'flex',
       alignItems: 'center',
    },
    buttonBig:{
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    buttonSmall:{
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },

  
 }));

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function BlogPage({ blog }) {
    const classes = useStyles();
    const myRef = React.useRef(null);
    const router = useRouter()
    const { id } = router.query
    const [link, setLink] = React.useState(false);
    const [liked, setLiked] = React.useState(false);


    // useEffect(() => {
    //     scrollToRef(myRef)
    //     console.log(photo)
    // }, [])

    // useEffect(() => {
    //     if(liked){
    //         setTimeout(function(){ 
    //             try{
    //                 axios.put(`https://pcmjourney.herokuapp.com/blogs/blogs/${id}`,{likes : blog.likes}).then(response => {
    //                     setLiked(false)
    //                 })
    //             }catch(error){
    //                 setLiked(false)
    //                 console.log(error)
                    
    //             }
                
            
    //         }, 5000);
    //     }
        
        
    // }, [liked])

    // useEffect(() => {
    //     async function getBlog() { 
    //         const {data} = await axios.get(`https://pcmjourney.herokuapp.com/blogs/${id}`);
    //         setBlog(data)
    //         const url = `"${data.title.replaceAll(' ', '%20')}"%0ABy%20${data.author.replaceAll(' ', '%20')}%0D%0A${data.description.replaceAll(' ', '%20')}`
    //         setBlog({...data, 
    //             clipboard: data.clipboard.url, 
    //             thumbnail: data.clipboard.formats.thumbnail.url,
    //             urltitle : url
    //         })
    //         console.log(blog)
            
    //     }
    //     getBlog()

    // }, [])



    // const onLike =() => {
        
    // }

    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(`https://jetzrecords.com/blog/${id}`)
        setLink(true)
      }
      
    if(blog.title){
        return (

            <div className={classes.root} ref={myRef} >

                <Head>
                    <meta property="og:type" content="website" />
                    <title>{blog.title}</title>
                    <meta property="og:title" content={blog.title} />
                    <meta property="og:image" content={blog.clipboard.url} />
                    <meta property="og:description" content={blog.description} />
                </Head>

                <div  className={classes.main}>
                    <Typography variant="h6" >Published {moment(blog.published_at).fromNow()} ...</Typography>
                    <Typography variant="h2" color="primary" className={classes.title}>{blog.title}</Typography>
                    <Typography variant="caption" >{blog.description}</Typography>
                    
                    <br/>
                    <br/>
                    <div className={classes.author1}>
                        <div className={classes.author}>
                            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="45" height="45"><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" fill="white" rx="72"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#f85931"></rect><rect x="0" y="0" width="36" height="36" transform="translate(9 9) rotate(59 18 18) scale(1.2)" fill="#009989" rx="6"></rect><g transform="translate(4.5 4.5) rotate(9 18 18)"><path d="M13,21 a1,0.75 0 0,0 10,0" fill="white"></path><rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect><rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect></g></g></svg> 
                            
                            <Typography variant="h6" style={{margin: '10px'}}>By {blog.author}</Typography>
                        </div>


                        <div className={classes.buttonBig}>

                            

                            <a href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjetzrecords.com%2Fblog%2f${id}%2fnice&amp;src=sdkpreparse&quote=${blog.urltitle}`}>

                            
                            <Button variant="contained" style={{float: 'right',backgroundColor: '#3b5998' ,color: '#fff', margin: '5px'}} >
                                <FacebookIcon style={{margin: '0px 3px'}}/> Share
                            </Button>
                            </a>


                            <Button onClick={copyCodeToClipboard} variant="contained" color={!link ? 'primary' : "secondary"} style={{float: 'right' , margin: '5px'}} >
                            <ShareIcon style={{margin: '0px 3px'}}/> {!link ? 'Copy Link' : "Copied"}
                            </Button>
                            
                            <IconButton  variant="contained" style={{float: 'right',backgroundColor: '#FF647F' ,color: '#fff', padding: '5px'}}>
                                <FavoriteBorderIcon style={{fontSize: '35px' }} />
                            </IconButton>
                            
                        </div>
                        <div className={classes.buttonSmall}>
                            <IconButton onClick={copyCodeToClipboard} variant="contained" color={!link ? 'secondary' : "#00FF00"} style={{float: 'right' , margin: '5px', backgroundColor: '#EC113E'}}>
                                <ShareIcon />
                            </IconButton>

                            <a href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjetzrecords.com%2Fblog%2f${id}%2fnice&amp;src=sdkpreparse&quote=${blog.urltitle}`}>
                            <IconButton variant="contained" style={{float: 'right',backgroundColor: '#3b5998' ,color: '#fff', margin: '5px'}}>
                                <FacebookIcon/>
                            </IconButton>
                            </a>

                            <IconButton  variant="contained" style={{float: 'right',backgroundColor: '#FF647F' ,color: '#fff', padding: '5px',margin: '5px'}}>
                                <FavoriteBorderIcon style={{fontSize: '32px' }} />
                            </IconButton>
                        </div>
                       

                    </div>
                   
                   
                   

                    <br/>
                    <Typography variant="h5" >{blog.likes} Likes</Typography>
                    <div className={classes.imageBox} >
                        <img  className={classes.image} src={blog.clipboard.url} />
                    </div>

                    

                </div>
               
    
                
                <div className={classes.content} dangerouslySetInnerHTML={{__html: `${blog.content}`}} />
                
                <div  item md={12} style={{padding: '100px 0px 30px 0px' , width: '100%' ,  display:'flex' , justifyContent: 'center', textAlign: 'center'}}>

                <Typography variant="h6" >Help Inspire the Community, Tell Us Your Story. </Typography>
                </div>
                
            </div>
        );
    }else{
        return(
            <div className={classes.root} ref={myRef}>
                <div  className={classes.main}>
                    <Typography variant="h6" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h2" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="p" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="p" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="p" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="p" >
                        <Skeleton />
                    </Typography>
                    
                    <Skeleton variant="circle" width={40} height={40} style={{margin: '10px'}}/>
                    <Skeleton variant="rect" style={{width: '100%', height: '300px'}} />

                    <Typography variant="h2" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h6" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h6" >
                        <Skeleton />
                    </Typography>
                    <Typography variant="h6" >
                        <Skeleton />
                    </Typography>
                </div>
            
            </div>
        );
           
    }
    
}
  


export async function getServerSideProps(context) {
    const  { id } = context.params;
    console.log(context)
    let blog = null;
    await fetch(`https://pcmjourney.herokuapp.com/blogs/${id}`)
      .then((response) => response.json())
      .then((json) =>{
        blog=json
      })
  
    return {
      props: {
        blog,
      },
    };
  };