import Project from '../src/components/Project'
import Footer from '../src/components/Footer'
import Timehistory from '../src/components/Timehistory'
import Title from '../src/components/Title'
import Skills from '../src/components/Skills'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
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
import { positions } from '@material-ui/system';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Themecolor } from '../util/data/Themecolor.js'

const fonts = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue['600'],
    },
    secondary: {
      main: lightBlue['700'],
    },
  },
  typography: {
    fontFamily: [
      'seoul-hangang-jung-m'
    ].join(','),
  },
});

const useStyles = makeStyles((theme) => ({
  gridMargin: {
    margin: "auto"
  },
  root: {
    flexGrow: 1,
  },
  button: {
    textTransform: "none",
    fontFamily: "inherit"
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
      <ThemeProvider theme={fonts}>
        <AppBar color="transparent" position="fixed" className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="secondary"
            centered
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
          touchSensitivity={50}
          sectionsColor={["", "", "", lightBlue['50']]}
          render={(comp) =>
            console.log("render prop change") || (
              <ReactFullpage.Wrapper >
                <Grid container>
                  {all.map((item, index) => (
                    <Grid container data-anchor={index} item xs={12} key={index.toString()} className="section">
                      <Grid item xs={12} md={8} className={classes.gridMargin} >
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
