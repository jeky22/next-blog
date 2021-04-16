import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontWeight: 600,
    padding: theme.spacing(2),
    whiteSpace: "pre-wrap",
  },
  title: {
    paddingTop: theme.spacing(2),
    fontWeight: 600,
  },
  description: {
    padding: theme.spacing(2),
  },
  backtable: {
    paddingTop: theme.spacing(1),
  },
  badgestyle: {
    paddingLeft: theme.spacing(1),
  },
  backbadge: {
    paddingRight: theme.spacing(9),
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(1),
    margin: "auto"
  },
  backstack: {
    position: "fixed",
    width: "100%",
    bottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    right: 0
  },
  backtypography: {
    marginTop: theme.spacing(3)
  },
  backchip: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1)
  },

}))


export default function RecipeReviewCard(props) {
  const classes = useStyles();
  return (
    <div className="card-container ">
      <div className="left"></div>
      <div className="right"></div>
      <div className="card">
        <div className="front">
          <div className="cover" style={{  background: `url("/${props.img}") center`}} ></div>
          <Typography variant="h4" align="center" className={classes.title} >{props.name}</Typography>
          <Typography variant="subtitle1" align="center" className={classes.subtitle} >
            {props.subtitle}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {props.description}
          </Typography>
        </div>
        <div className="back">
          <Typography variant="h6" >#세부사항 </Typography>
          <Box justifyContent="space-between" display="flex" className={classes.backbadge}>
            <Typography>개발 일자 : </Typography>
            <img src={`https://img.shields.io/github/last-commit/${props.github}?style=plastic`} />
          </Box>
          <Box justifyContent="space-between" display="flex" className={classes.backbadge}>
            <Typography>개발 직무 : </Typography>
            <Box><img className={classes.badgestyle} src={`https://img.shields.io/badge/-Frontend-brightgreen`} />
            <img className={classes.badgestyle} src={`https://img.shields.io/badge/-Design-brightgreen`} />
            <img className={classes.badgestyle} src={`https://img.shields.io/badge/-Backend-brightgreen`} /></Box>
          </Box>
          <Box className={classes.backtypography}>
            <Typography variant="h6" className={classes.backtypography} display="block">#나의 기여도 </Typography>
            {props.mypart && props.mypart.map((content, index) => <Typography key={index.toString()} className={classes.backtable} variant="body1">✔ {content}</Typography>)}
          </Box>
          <Box className={classes.backstack}>
            <Divider variant="middle" />
            <Typography variant="h6" className={classes.backtypography} display="block">#기술스택 </Typography>
            <Box justifyContent="space-between" display="block" >
              {props.stacks && props.stacks.map(item =>
                <Chip
                  key={item}
                  className={classes.backchip}
                  avatar={<Avatar src={`${item}.png`} />}
                  label={item}
                  clickable
                  color="primary"
                />
              )}
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}