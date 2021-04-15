import Project from './src/components/Project'
import Footer from './src/components/Footer'
import Timehistory from './src/components/Timehistory'
import Title from './src/components/Title'
import Skills from './src/components/Skills'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import ReactFullpage from "@fullpage/react-fullpage";
import { useState } from 'react'
import classNames from 'classnames';


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
}));


export default function Index() {
  const classes = useStyles()
  let [start, setStart] = useState([true, false, false, false, false])

  const onLeave = function (origin, destination, direction) {
    setStart(
      start.map((_, index) => {
        if (index === destination.index) return true
        return false
      })
    )
  }
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
        <ul id="menu">
          <li data-menuanchor="0">
            <a href="#0">zero slide</a>
          </li>
          <li data-menuanchor="1" class="active">
            <a href="#1">First slide</a>
          </li>
          <li data-menuanchor="2">
            <a href="#2">Second slide</a>
          </li>
          <li data-menuanchor="3">
            <a href="#3">Third slide</a>
          </li>
          <li data-menuanchor="4">
            <a href="#4">quird slide</a>
          </li>
        </ul>
        <ReactFullpage
          onLeave={onLeave}
          scrollingSpeed={1000}
          touchSensitivity={50}
          anchors={['0', '1', '2', '3', '4',]}
          menu={'#menu'}
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
