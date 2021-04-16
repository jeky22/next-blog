import { deepPurple, red, pink, purple, indigo, blue, grey } from '@material-ui/core/colors';

import { createMuiTheme } from '@material-ui/core/styles';

export const Themecolor = [
  createMuiTheme({
    palette: {
      primary: {
        main: red['700'],
      },
      secondary: {
        main: red['700'],
      },
    },
  }),
  createMuiTheme({
    palette: {
      primary: {
        main: pink['700'],
      },
      secondary: {
        main: pink['700'],
      },
    },
  }),
  createMuiTheme({
    palette: {
      primary: {
        main: purple['700'],
      },
      secondary: {
        main: purple['700'],
      },
    },
  }),
  createMuiTheme({
    palette: {
      primary: {
        main: deepPurple['700'],
      },
      secondary: {
        main: deepPurple['700'],
      },
    },
  }),
  createMuiTheme({
    palette: {
      primary: {
        main: indigo['600'],
      },
      secondary: {
        main: indigo['700'],
      },
    },
  }),
  createMuiTheme({
    palette: {
      primary: {
        main: blue['700'],
      },
      secondary: {
        main: blue['700'],
      },
    },
  }),
  createMuiTheme({
    palette: {
      primary: {
        main: grey['700'],
      },
      secondary: {
        main: grey['700'],
      },
    },
    typography: {
      fontFamily: [
        'seoul-hangang-jung-m'
      ].join(','),
    },
  }),
]
