import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Themecolor } from '../../util/data/Themecolor.js'
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typist from 'react-typist';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import ReplayIcon from '@material-ui/icons/Replay';
import Button from '@material-ui/core/Button';
import Background from './Background'
import Fireworks from './Fireworks'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
    width: "100%",
    // border: "2px solid"
  },
  progress: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  arrow: {
    bottom: "40px",
    position: "absolute",
    animation: "motion 1.0s linear infinite"
  },
  mention: {
    bottom: "100px",
    position: "absolute",
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
  },
  button: {
    textTransform: "none",
    animation: " blink 2s ease-in infinite",
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(1)
    }, 6000)
    return () => {
      clearInterval(timer);
    }
  })

  const handleChange = () => {
    console.log('hi')
    setProgress(-1)
    setTimeout(() => {
      setProgress(0)
    }, 30)
    setTimeout(() => {
      setProgress(1)
    }, 6000)
  }

  return (
    <div>
      <Background />
      {/* <Fireworks/> */}
      <Grid container justify="center"  >
        <Grid item xs={12}>
          {progress > -1 && <Typography variant='h3' align={'center'}>
            <Typist className={styles.title} avgTypingDelay={50}>
              <span> 안녕하세요. </span>
              <Typist.Backspace count={8} delay={600} />
              <span> 사용자 친화적인 </span>
              <Typist.Backspace count={10} delay={600} />
              <span> 최신트렌드를 중요시하는 </span>
              <Typist.Backspace count={14} delay={600} />
              <span> 프론트엔드 개발자 </span> <br />
              <span> 이제찬 입니다.</span>
            </Typist>
          </Typography>}
        </Grid >
        <Grid item xs={12} container justify="center">
          {progress > 0 &&
            <ThemeProvider theme={Themecolor[6]}>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                className={classes.button}
                endIcon={<ReplayIcon />}
                onClick={handleChange}
                mb={3}
              >
                다시보기
                </Button>
            </ThemeProvider>}
        </Grid >
        {progress > 0 && <Box className={classNames("animate__animated", classes.mention, "animate__fadeIn",)} textAlign="center" justifyContent="center" >
          더보기
          </Box >}
        {progress > 0 && <Box className={classNames("animate__animated", classes.arrow, "animate__fadeIn",)} textAlign="center" justifyContent="center" >
          <Box display="block" className={classes.motion}  >
            <ExpandMoreIcon style={{ fontSize: 60 }} />
          </Box>
        </Box >}
      </Grid >
    </div>
  )
}
