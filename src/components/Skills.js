import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { Skillsdata } from '../../util/data/Skillsdata.js'
import Button from '@material-ui/core/Button';
import classNames from 'classnames';


function LinearProgressWithLabel(props) {
  const classes = useStyles();

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => p >= props.percent ? props.percent : p + 1)
    }, 13)
    return () => clearInterval(timer)
  }, [progress])


  return (
    <Box display="flex" alignItems="center" className={classes.progress}>
      <Chip
        size={"small"}
        avatar={<Avatar src={props.imgsrc + ".png"} />}
        label={props.name}
        clickable
        color={props.color}
        deleteIcon={<DoneIcon />}
        style={{ width: "163px", justifyContent: "flex-start" }}
      />
      <Box width="100%" mr={1} ml={2}>
        <LinearProgress variant="determinate" color={props.color} value={progress} />
      </Box>
      <Box minWidth={24}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          progress,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  vertical: {
    // marginTop: theme.spacing(3)
  },
  paper: {
    paddingLeft: theme.spacing(1),
    width: "100%",
    // border: "2px solid"
  },
  progress: {
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  colorCustom: {
    color: "red"
  },
  badge: {
    float: "right",
    marginRight: "20px",
    backgroundColor: "white",
    paddingLeft: "10px",
    paddingRight: "10px",
    // border: "2px solid",
    // BorderColor: theme
  }
}));

export default function Skills(props) {
  const classes = useStyles();
  const [details, setDetail] = useState(true)

  return (
    <div>
      {props.start && <div>
        <Typography variant="h5"> {"<Skills />"} </Typography>
        <Box justifyContent="flex-end" display="flex" className={classes.vertical}>
          <Button size="small" onClick={() => setDetail(!details)}>
            {details ? "Sub_Skills\t\>" : "Main_Skills\t\>"}
          </Button>
        </Box>
        {Object.values(Skillsdata).map((kind, index) => {
          let isEmpty = kind.filter((k) => k.main === details).length > 0
          return (
            <Box key={index.toString()} className={classNames("animate__animated", { "animate__bounceInLeft": props.start, "animate__delay-0.5s": props.start, "animate__bounceOutRight": !props.start })}>
              {isEmpty && <Typography variant="subtitle1">
                {"#"}{Object.keys(Skillsdata)[index]}
              </Typography>}
              <Box borderColor="secondary.main" className={classes.paper} >
                {kind.map((c, i) => (details === c.main) && <LinearProgressWithLabel key={c.name} {...c} theme={index} />)}
              </Box>
            </Box>
          )
        })}
      </div>}
    </div >
  )
}
