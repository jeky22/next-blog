import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import React, { useEffect, useState } from 'react';
import { Timelinedata } from '../../util/data/Timelinedata.js'
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';

import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  item: {
    [theme.breakpoints.up('xs')]: {
      padding: '0',
      margin: '0',
    }
  },
  secondaryTdail: {
    backgroundColor: theme.palette.secondary.main,
  },
  lowFlex: {
    flex: 0.2,
  }
}));

// setinterval 로 시간을 걸어서 나타나는 액션 2번씩 걸기 props.start기반으로 하나씩 
// 액션1 flip하기
// 액션2 색깔바꾸기
function TimelineItems(props) {
  const classes = useStyles();
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(1)
    }, props.time)
    return () => {
      clearInterval(timer);
    }
  })
  return (
    <TimelineItem align="left" >
      <TimelineOppositeContent className={classes.lowFlex}>
        <Typography variant="body2" color="textSecondary">
          {props.date}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" className={classNames("animate__animated", classes.mention, { "animate__flipInX": progress > 0 },)}>
          {progress > 0 ? props.icon : <FiberManualRecordSharpIcon color="primary" />}
        </TimelineDot>
        {props.detail && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        < Paper elevation={3} className={classNames("animate__animated", classes.paper, { "animate__flipInX": progress > 0 })}>
          <Typography variant="h6">
            {progress > 0 ? props.title : ""}
          </Typography>
          {props.detail && progress > 0 ? <Divider /> : ""}
          {props.detail && progress > 0 ? <Typography>{props.detail}</Typography> : ""}
        </Paper>
      </TimelineContent>
    </TimelineItem >
  )
}



export default function Timehistory(props) {
  const classes = useStyles();
  const [progress, setProgress] = useState(0)


  // console.log(Timelinedata[0])
  return (
    <div>
      {props.start &&
        <div>
          <Typography variant="h5"> {"<TimeLine />"} </Typography>
          <Box borderRadius={10} border={3} borderColor="secondary.main" boxShadow={8}  >
            <Timeline align="left">
              {Timelinedata.map((t, index) =>
                <TimelineItems key={index} {...t} time={500 + index * 300} />
              )}
            </Timeline>
          </Box>
        </div>}
    </div>
  );
}