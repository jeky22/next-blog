import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AlarmIcon from '@material-ui/icons/Alarm';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SvgIcon from '@material-ui/core/SvgIcon';
// import NotionIcon from '/notion.svg';
// import { ReactComponent as Logo } from '/notion.svg';

import Cards from './Cards'
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  boxstyle: {
    width: "400px",
    margin: "auto",
    marginBottom: "16px",
    backgroundColor: "white",
  }
}));

const projects = [
  {
    name: "꽃길",
    subtitle: `온라인으로 부조금을 송금 및 관리할 수 있는 웹 어플리케이션 \n(NH 농협 핀테크 공모전 참가)`,
    description: `프로젝트를 기획하고 웹 UI 디자인과 퍼블리싱을 진행하였습니다.\n
    모바일 어플리케이션으로 실행시키기 위하여 웹 어플리케이션 형태로 제작하였습니다`,
    mypart: [` vuex와 JWT 토큰으로 로그인 상태 관리 구현`,
      ` eslint, prettier 통한 코딩컨벤션의 지속적인 통합`,
      ` webpack, babel을 활용하여 es6도입 및 scss파일 번들링, 배포`,],
    github: `jeky22/NHfintech-frontend`,
    stacks: ['vue', 'node', 'mysql', 'aws', 'bootstrap'],
    img: "ggotgil.png"
  },
  {
    name: "Let Eat, Go",
    subtitle: `음식점구독서비스를 일반 자영업자들과 소비자들에게 \n제공하기 위한 플랫폼`,
    description: `웹 프론트 개발과 백엔드 서버 개발을 맡아 진행하였습니다 프로젝트에서 개발환경세팅과 메인 기능구현 서버구축을 하였습니다`,
    mypart: [
      `webpack, babel 을 활용한 모듈 번들링 및 배포`,
      `travisCI 를 통해 빌드 테스트 코딩컨벤션 통일`,
      `스크럼 회의 백로그 작성등을 통한 agile 방식의 개발 적용`,
      `AWS RDS, EC2, S3 활용한 클라우드 배포`,
    ],
    github: `jeky22/returnICE-frontend`,
    stacks: ['vue', 'node', 'mysql', 'aws', 'bootstrap'],
    img: "leteatgo.png"
  },
  {
    name: "Circus",
    subtitle: `온라인으로 교내외 스터디를 만들고 \n참여할 수 있도록 돕는 웹 서비스 플랫폼`,
    description: `프론트엔드를 맡아 프로젝트를 진행하였습니다`,
    mypart: [
      `restful 한 API 설계`,
      `session 쿠키 관리를 통한 클라이언트 인증 방식 도입`,
      `Bootsrap 사용하여 반응형 웹으로 제작`,
    ],
    github: `jeky22/webproject`,
    stacks: ['vue', 'node', 'mongodb', 'bootstrap'],
    img: "circus.gif"
  },
  {
    name: "한터리즘",
    subtitle: `아주대학교 학술소학회 한터의 소개 및\n학술부원 신청을 위한 웹페이지`,
    description: `웹 퍼블리싱을 맡아 진행하였습니다 모바일과 pc 모두 보기 편하도록 반응형 웹으로 제작하였습니다`,
    mypart: [
      ` Bootsrap 사용하여 반응형 웹으로 제작`,
      ` 인터렉티브한 웹 개발`,
    ],
    github: `jeky22/hantorism`,
    stacks: ['django', 'mysql', 'aws', 'bootstrap'],
    img: "hantorism.gif"

  },
]


const Cprojects = [
  {
    name: "Factagora",
    subtitle: `온라인으로 부조금을 송금 및 관리할 수 있는 \n웹 어플리케이션 (NH 농협 핀테크 공모전 참가)`,
    description: `프로젝트를 기획하고 웹 UI 디자인과 퍼블리싱을 진행하였습니다.
    모바일 어플리케이션으로 실행시키기 위하여 웹 어플리케이션 형태로 제작하였습니다`,
    mypart: [` vuex와 JWT 토큰으로 로그인 상태 관리 구현`,
      ` eslint, prettier 통한 코딩컨벤션의 지속적인 통합`,
      ` webpack, babel을 활용하여 es6도입 및 scss파일 번들링, 배포`,]
  },
]
const proj2 = [
  { name: "코테공부중" },
  { name: "시소보" },
  { name: "창소입" },
  { name: "소응보" },
  { name: "네보" },
  { name: "운체" },
  { name: "자구" },
]

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  swipeToSlide: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
  ]
};


export default function AutoGrid() {
  const classes = useStyles();
  return (
    <div>
      <Slider {...settings}>
        {projects.map((i, index) =>
          <Box key={index.toString()} >
            <Cards  {...projects[index]} />
            <Box textAlign="center" className={classes.boxstyle} borderRadius={16} boxShadow={4}>
              <IconButton color="primary" aria-label="add an alarm">
                <AlarmIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add an alarm">
                <YouTubeIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add an alarm">
                <GitHubIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add an alarm">
                <SvgIcon fontSize={'inherit'} viewBox={'0 0 44 44'} fontSize={'large'}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M28.4602 9.06842L11.8104 10.2936C10.4679 10.4098 10 11.285 10 12.3342V30.5316C10 31.3492 10.2916 32.048 10.993 32.982L14.9069 38.0563C15.5498 38.8734 16.134 39.0482 17.3616 38.9897L36.6969 37.823C38.3322 37.7069 38.8 36.9481 38.8 35.665V15.1925C38.8 14.5292 38.5374 14.3376 37.7632 13.7728C37.7206 13.7418 37.6764 13.7096 37.6307 13.6761L32.3159 9.94338C31.0308 9.01056 30.5048 8.89318 28.4602 9.06842ZM17.8 14.8567C16.2214 14.9632 15.8627 14.9874 14.9662 14.2596L12.6865 12.4516C12.454 12.2178 12.5706 11.9262 13.1544 11.8683L29.1613 10.7017C30.5045 10.5848 31.2054 11.0522 31.7314 11.4602L34.4769 13.4435C34.5938 13.5016 34.8854 13.8511 34.5347 13.8511L18.0038 14.843L17.8 14.8567ZM15.9587 35.4897V18.1093C15.9587 17.3512 16.1924 17.001 16.893 16.9421L35.8782 15.8343C36.5222 15.776 36.8138 16.1846 36.8138 16.9421V34.206C36.8138 34.9648 36.6966 35.6072 35.6447 35.665L17.4773 36.7155C16.4259 36.7733 15.9587 36.4238 15.9587 35.4897ZM33.8936 19.0416C34.0101 19.5671 33.8936 20.092 33.3668 20.1511L32.4914 20.3254V33.1567C31.7314 33.5649 31.0306 33.7983 30.4466 33.7983C29.5116 33.7983 29.2774 33.5064 28.5771 32.632L22.8513 23.65V32.3404L24.6631 32.7489C24.6631 32.7489 24.6631 33.7983 23.2014 33.7983L19.1716 34.0319C19.0545 33.7983 19.1716 33.2155 19.5803 33.0987L20.6319 32.8075V21.3172L19.1718 21.2003C19.0547 20.6749 19.3463 19.9173 20.1648 19.8585L24.4879 19.5673L30.4466 28.6662V20.617L28.9274 20.4428C28.8107 19.8004 29.2774 19.334 29.8617 19.2761L33.8936 19.0416Z" />
                </SvgIcon>
              </IconButton>
            </Box>
          </Box>
        )}
        <Cards />
      </Slider>
      {/* 갠 프로젝트 뭐했는지 쓰자
      <Grid container>
        <Grid item xs={3}>
          <Paper>코테공부중</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>시소보</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>창소입</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>소응보</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>네보</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>운체</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>자구</Paper>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Paper>
          프로젝트 기능 1. 확대 기능 2. carosel 기능 3. 링크 기능 4. 보기란
          기능 5. hits
          </Paper>
      </Grid> */}
    </div>
  );
}
