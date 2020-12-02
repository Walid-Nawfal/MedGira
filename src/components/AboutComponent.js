import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import StarsIcon from '@material-ui/icons/Stars';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.short,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: grey[900],
  },
}));



export function ReviewCardService() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [favorite, setFavorite] = React.useState("danger");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavClick = () => {
    if(favorite === "secondary") {
      setFavorite("danger");
    }
    else {
      setFavorite("secondary");
    }
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <PhoneAndroidIcon />
          </Avatar>
        }
        title="24/7 support"
        subheader="0096170111222"
      />
      <CardMedia
        className={classes.media}
        image="assets/images/phone talking...jpeg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color={favorite} onClick= {handleFavClick} /> 
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            We have served 500+ customers around the world
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export function ReviewCardGuarantee() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [favorite, setFavorite] = React.useState("danger");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavClick = () => {
    if(favorite === "secondary") {
      setFavorite("danger");
    }
    else {
      setFavorite("secondary");
    }
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <MonetizationOnIcon/>
          </Avatar>
        }
        title="Money back guarantee"
        subheader="Up to 1 month"
      />
      <CardMedia
        className={classes.media}
        image="assets/images/moneygirl.jpeg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color={favorite} onClick= {handleFavClick} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            We have served 500+ customers around the world
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export function ReviewCardExperience() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [favorite, setFavorite] = React.useState("danger");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavClick = () => {
    if(favorite === "secondary") {
      setFavorite("danger");
    }
    else {
      setFavorite("secondary");
    }
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <StarsIcon/>
          </Avatar>
        }
        title="Top in the market"
        subheader="10 years of experience"
      />
      <CardMedia
        className={classes.media}
        image="assets/images/doctor.jpeg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color={favorite} onClick= {handleFavClick} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            We have served 500+ customers around the world
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export function ReviewCardCenters() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [favorite, setFavorite] = React.useState("danger");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavClick = () => {
    if(favorite === "secondary") {
      setFavorite("danger");
    }
    else {
      setFavorite("secondary");
    }
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <StarsIcon/>
          </Avatar>
        }
        title="Medical Centers"
        subheader="10 years of experience"
      />
      <CardMedia
        className={classes.media}
        image="assets/images/medicals.jpeg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color={favorite} onClick= {handleFavClick} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            We have served 500+ customers around the world
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export const About = () => {
    return(
        <div className="row myContainer mt-5 mb-5">
            <div className="col-12 col-md-3">
                <ReviewCardService />
            </div>
            <div className="col-12 col-md-3">
                <ReviewCardGuarantee />
            </div>
            <div className="col-12 col-md-3">
                <ReviewCardExperience />
            </div>
            <div className="col-12 col-md-3">
                <ReviewCardCenters />
            </div>
        </div>
    );
}