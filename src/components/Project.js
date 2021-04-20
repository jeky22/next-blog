import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import NotionIcon from '/notion.svg';
// import { ReactComponent as Logo } from '/notion.svg';
import Typography from '@material-ui/core/Typography';

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
      <Typography variant="h5"> {"<Project />"} </Typography>
      <Slider {...settings} >
        {projects.map((i, index) =>
          <Box className="custom-slick" key={index.toString()} >
            <Cards  {...projects[index]} />
          </Box>
        )}
      </Slider>
      {/* <Cards {...projects[1]}/> */}
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
