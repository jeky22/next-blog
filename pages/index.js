import Project from '../src/components/Project'
import Footer from '../src/components/Footer'
import Timehistory from '../src/components/Timehistory'
import Title from '../src/components/Title'
import Skills from '../src/components/Skills'
import { createMuiTheme, ThemeProvider, responsiveFontSizes, makeStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import ReactFullpage from "@fullpage/react-fullpage";
import { useState } from 'react'
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import { color, fontWeight, positions } from '@material-ui/system';
import Head from "next/head"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import { Themecolor } from '../util/data/Themecolor.js'

let fonts = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: lightBlue['600'],
    },
    secondary: {
      main: lightBlue['700'],
    },
  },
  typography: {
    h5: {
      fontWeight: 1000,
      color: lightBlue['900'],
      display: 'inline-block',
      backgroundColor: lightBlue['50'],
      marginLeft: "10px",
      marginBottom: "10px",
      padding: "3px",
      borderRadius: "6px",
      border: "2px solid " + lightBlue['700']
    },

    fontFamily: [
      'seoul-hangang-jung-m'
    ].join(','),
  },
});

fonts.typography.body1 = {
  [fonts.breakpoints.down('xs')]: {
    fontSize: '0.8rem',
  },
};
fonts.typography.body2 = {
  fontSize: '0.85rem',
  [fonts.breakpoints.down('xs')]: {
    fontSize: '0.75rem',
  },
};

fonts.typography.h5 = {
  ...fonts.typography.h5,
  [fonts.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
};
fonts.typography.h6 = {
  ...fonts.typography.h6,
  [fonts.breakpoints.down('xs')]: {
    fontSize: '0.9rem',
  },
};
fonts.typography.button = {
  ...fonts.typography.button,
  [fonts.breakpoints.down('xs')]: {
    fontSize: '0.8rem',
  },
};

const useStyles = makeStyles((theme) => ({
  gridMargin: {
    margin: "auto"
  },
  root: {
    flexGrow: 1,
  },
  button: {
    textTransform: "none",
    minWidth: "0 !important",
    whiteSpace: "nowrap"
  },
}));


export default function Index() {
  const classes = useStyles()
  let [start, setStart] = useState([true, false, false, false, false])
  const [value, setValue] = useState(0)

  const onLeave = function (origin, destination, direction) {
    setValue(destination.index)
    setStart(
      start.map((_, index) => {
        if (index === destination.index) return true
        return false
      })
    )
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const all = [
    <Title start={start[0]} />,
    <Skills start={start[1]} />,
    <Timehistory start={start[2]} />,
    <Project start={start[3]} />,
    <Footer start={start[4]} />,
  ]
  return (
    <span>
      <Head>
        <meta name="google-site-verification" content="RN2CstU6sdPwa8PeQ71QqsRvC9CIsh8oMrLh3sZQqsQ" />
        <meta name="naver-site-verification" content="1917c6dc095426f5c000ea5ea4985e1fa72a39a2" />
        <title>프론트엔드 개발자 - 이제찬 포트폴리오 웹사이트</title>
        <meta name="title" content="프론트엔드 개발자 - 이제찬 포트폴리오 웹사이트" key="title" />
        <meta name="description" content='인터랙티브한 웹 개발을 지향하는 프론트엔드 개발자 이제찬입니다. "어떻게 하면 사용자가 더 쓰기편한 서비스를 만들 수 있을까?"에 대하여 늘 고민하며 개발합니다.' key="description" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="viewport" content="target-densitydpi=device-dpi, user-scalable=0, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={fonts}>
        <AppBar color="transparent" position="fixed" className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="secondary"
            centered
            variant="fullWidth"
            id={"menu"}
          >
            <Tab component={Link} href={"#0"} label={`<Header />`} className={classes.button} />
            <Tab component={Link} href={"#1"} label={`<Skill />`} className={classes.button} />
            <Tab component={Link} href={"#2"} label={`<TimeLine />`} className={classes.button} />
            <Tab component={Link} href={"#3"} label={`<Project />`} className={classes.button} />
            <Tab component={Link} href={"#4"} label={`<Footer />`} className={classes.button} />
          </Tabs>
        </AppBar>
        <ReactFullpage
          onLeave={onLeave}
          scrollingSpeed={1000}
          touchSensitivity={5}
          sectionsColor={["", "", "", lightBlue['50']]}
          render={(comp) =>
          (
            <ReactFullpage.Wrapper >
              <Grid container>
                {all.map((item, index) => (
                  <Grid container data-anchor={index} item xs={12} key={index.toString()} className="section">
                    <Grid item xs={11} sm={10} md={8} className={classes.gridMargin} >
                      {item}
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </ReactFullpage.Wrapper>
          )}
        />
      </ThemeProvider>
    </span>
  )
}
