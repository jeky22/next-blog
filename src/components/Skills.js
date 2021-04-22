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
import Zoom from '@material-ui/core/Zoom';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Tooltip from '@material-ui/core/Tooltip';
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
        onDelete={() => { false }}
        color={props.color}
        deleteIcon={props.use ? <FiberManualRecordIcon className={classes.icon} /> : <p></p>}
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
  button: {
    // border: "1px solid",
    animation: " blinkBtn 1.5s cubic-bezier(0.85, 0, 0.15, 1) infinite",
  },
  badge: {
    float: "right",
    marginRight: "20px",
    backgroundColor: "white",
    paddingLeft: "10px",
    paddingRight: "10px",
    // border: "2px solid",
    // BorderColor: theme
  },
  icon: {
    color: '#5fff00',
    paddingLeft: '5px',
    paddingRight: '5px',
    animation: 'ripple 1.2s infinite ease-in-out',
  }
}));
const tip = <Typography variant="body2" >
  초급: 간단한 디버깅을 할 줄 안다.<br />
  중급: 에러메세지가 친숙하다.<br />
  고급: 에러가 뜨면 상처받는다.<br />
  완숙: 에러 메세지를 보면 추억에 잠긴다.
</Typography>
export default function Skills(props) {
  const classes = useStyles();
  const [details, setDetail] = useState(true)

  return (
    <div>
      {props.start && <div>
        <Typography variant="h5"> {details ? "<Main-Skills />" : "<Sub-Skills />"} </Typography>
        <Box justifyContent="flex-end" display="flex" className={classes.vertical}>
          <Tooltip title={tip} placement="top-end" TransitionComponent={Zoom} arrow>
            <Box display="flex" >
              <Box>
                <LinearProgress color="secondary" style={{ width: '93%' }} />
                <Box display="flex">
                  <Typography variant="body2" style={{ lineHeight: 1.1, whiteSpace: 'pre-wrap', margin: "auto auto 0" }} >
                    &nbsp;| 초급 | 중급 | 고급 | 완숙 |<br />
                    &nbsp;0 &nbsp; - &nbsp;25 &nbsp;- &nbsp;50 &nbsp;-&nbsp; 75 &nbsp;-&nbsp;100%
                  </Typography>
                </Box>
              </Box>
              <Box>
                <HelpOutlineIcon color="action" style={{ margin: "3px 10px 0 0" }} />
              </Box>
            </Box>
          </Tooltip>
          <Typography variant="body2" display="flex" style={{ margin: "auto 20px auto 0" }} >
            <FiberManualRecordIcon className={classes.icon} />
              포트폴리오에 사용한 기술
           </Typography>
          <Button size="small" variant="outlined" className={classes.button} onClick={() => setDetail(!details)}>
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
