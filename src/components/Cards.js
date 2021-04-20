import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import SvgIcon from '@material-ui/core/SvgIcon';
import AlarmIcon from '@material-ui/icons/Alarm';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import { ButtonGroup } from '@material-ui/core';
const NotionIcon = <SvgIcon fontSize={'inherit'} viewBox={'0 0 44 44'} fontSize={'large'}>
  <path fillRule="evenodd" clipRule="evenodd" d="M28.4602 9.06842L11.8104 10.2936C10.4679 10.4098 10 11.285 10 12.3342V30.5316C10 31.3492 10.2916 32.048 10.993 32.982L14.9069 38.0563C15.5498 38.8734 16.134 39.0482 17.3616 38.9897L36.6969 37.823C38.3322 37.7069 38.8 36.9481 38.8 35.665V15.1925C38.8 14.5292 38.5374 14.3376 37.7632 13.7728C37.7206 13.7418 37.6764 13.7096 37.6307 13.6761L32.3159 9.94338C31.0308 9.01056 30.5048 8.89318 28.4602 9.06842ZM17.8 14.8567C16.2214 14.9632 15.8627 14.9874 14.9662 14.2596L12.6865 12.4516C12.454 12.2178 12.5706 11.9262 13.1544 11.8683L29.1613 10.7017C30.5045 10.5848 31.2054 11.0522 31.7314 11.4602L34.4769 13.4435C34.5938 13.5016 34.8854 13.8511 34.5347 13.8511L18.0038 14.843L17.8 14.8567ZM15.9587 35.4897V18.1093C15.9587 17.3512 16.1924 17.001 16.893 16.9421L35.8782 15.8343C36.5222 15.776 36.8138 16.1846 36.8138 16.9421V34.206C36.8138 34.9648 36.6966 35.6072 35.6447 35.665L17.4773 36.7155C16.4259 36.7733 15.9587 36.4238 15.9587 35.4897ZM33.8936 19.0416C34.0101 19.5671 33.8936 20.092 33.3668 20.1511L32.4914 20.3254V33.1567C31.7314 33.5649 31.0306 33.7983 30.4466 33.7983C29.5116 33.7983 29.2774 33.5064 28.5771 32.632L22.8513 23.65V32.3404L24.6631 32.7489C24.6631 32.7489 24.6631 33.7983 23.2014 33.7983L19.1716 34.0319C19.0545 33.7983 19.1716 33.2155 19.5803 33.0987L20.6319 32.8075V21.3172L19.1718 21.2003C19.0547 20.6749 19.3463 19.9173 20.1648 19.8585L24.4879 19.5673L30.4466 28.6662V20.617L28.9274 20.4428C28.8107 19.8004 29.2774 19.334 29.8617 19.2761L33.8936 19.0416Z" />
</SvgIcon>

const useStyles = makeStyles((theme) => ({

  subtitle: {
    fontWeight: 600,
    padding: theme.spacing(2),
    whiteSpace: "pre-wrap",
  },
  cover: {
    width: "100%",
    height: "",
    backgroundSize: "cover !important",
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
  boxstyle: {
    overflow: "hidden",
    width: "370px",
    margin: "auto",
    marginBottom: "16px",
    backgroundColor: "white",
  },

}))


export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [value, setValue] = useState('recents');

  const handleChange = (event) => {
    setValue(event.target.innerText);
  };
  return (
    <div>
      <div className="card-container ">
        <div className="left"></div>
        <div className="right"></div>
        <div className="card">
          <div className="front">
            <div className="cover" style={{ background: `url("/${props.img}") center` }} ></div>
            <Typography variant="h4" align="center" className={classes.title} >{props.name}</Typography>
            <Typography variant="subtitle1" align="center" className={classes.subtitle} >
              {props.subtitle}
            </Typography>
            <Typography variant="body2" className={classes.description}>
              {props.description}
            </Typography>
          </div>
          <div className="back">
            <Typography variant="body1" >#세부사항 </Typography>
            <Box justifyContent="space-between" display="flex" className={classes.backbadge}>
              <Typography variant="body">개발 일자 : </Typography>
              <img src={`https://img.shields.io/github/last-commit/${props.github}?style=plastic`} />
            </Box>
            <Box justifyContent="space-between" display="flex" className={classes.backbadge}>
              <Typography variant="body">개발 직무 : </Typography>
              <Box><img className={classes.badgestyle} src={`https://img.shields.io/badge/-Frontend-brightgreen`} />
                <img className={classes.badgestyle} src={`https://img.shields.io/badge/-Design-brightgreen`} />
                <img className={classes.badgestyle} src={`https://img.shields.io/badge/-Backend-brightgreen`} /></Box>
            </Box>
            <Box className={classes.backtypography}>
              <Typography variant="body1" className={classes.backtypography} display="block">#나의 기여도 </Typography>
              {props.mypart && props.mypart.map((content, index) => <Typography key={index.toString()} className={classes.backtable} variant="body2">✔ {content}</Typography>)}
            </Box>
            <Box className={classes.backstack}>
              <Divider variant="middle" />
              <Typography variant="body1" className={classes.backtypography} display="block">#기술스택 </Typography>
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
      <div>
        <Box onMouseLeave={() => setValue("")} textAlign="center" className={classes.boxstyle} borderRadius={16} boxShadow={4}>
          <BottomNavigation value={value}>
            <BottomNavigationAction onMouseEnter={handleChange} label="Recents" value="Recents" icon={<AlarmIcon />} />
            <BottomNavigationAction onMouseEnter={handleChange} label="Video" value="Video" icon={<YouTubeIcon />} />
            <BottomNavigationAction onMouseEnter={handleChange} label="Notion" value="Notion" icon={NotionIcon} />
            <BottomNavigationAction onMouseEnter={handleChange} label="Github" value="Github" icon={<GitHubIcon />} />
          </BottomNavigation>
        </Box>
      </div>
    </div>
  );
}