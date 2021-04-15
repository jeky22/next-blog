import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Themecolor from '../data/Themecolor'
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typist from 'react-typist';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';

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
  }
}));

export default function Home(props) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Jeky blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="target-densitydpi=device-dpi, user-scalable=0, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={Themecolor[1]}>
        <Grid container justify="center"  >
          <Grid item xs={12}>
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
          </Grid >
          <Box className={classNames("animate__animated", classes.mention, "animate__delay-5s", "animate__fadeInUp",)} textAlign="center" justifyContent="center" >
            더보기
          </Box >
          <Box className={classes.arrow} textAlign="center" justifyContent="center" >
            <Box display="block" className={classes.motion}  >
              <ExpandMoreIcon style={{ fontSize: 60 }} />
            </Box>
          </Box >
        </Grid >
      </ThemeProvider>
    </div >
  )
}
