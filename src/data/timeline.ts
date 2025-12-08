import React from 'react';
import { MdSchool, MdBuild, MdMenuBook, MdWork, MdComputer, MdEventAvailable } from 'react-icons/md';

export interface TimelineItem {
    date: string;
    icon: any;
    title: string;
    detail: string;
}

export const timelineData: TimelineItem[] = [
    { date: "2014.03", icon: MdSchool, title: "아주대학교 입학", detail: "사이버보안학과 14학번" },
    { date: "2015.06 ~ 2017.06", icon: MdBuild, title: "군 입대", detail: "공군병장 만기전역" },
    { date: "2019.07 ~ 2019.08", icon: MdMenuBook, title: "청년 IT 인재육성(웹개발자) 수료", detail: "SK C&C, 경기도·경기경제과학진흥원 주최" },
    { date: "2020.01 ~ 2020.06", icon: MdWork, title: "㈜팩타고라 인턴", detail: "모바일 개발팀 - React Native 앱 개발" },
    { date: "2020.08", icon: MdEventAvailable, title: "아주대학교 졸업", detail: "사이버보안학과" },
    { date: "2020.09", icon: MdComputer, title: "우아한 테크러닝 3기", detail: "React&TypeScript by 우아한형제들" },
    { date: "2021.08 ~ 2023.11", icon: MdWork, title: "티맥스오피스 연구원", detail: "SuperOffice 웹 문서 편집기 개발" },
    { date: "2023.11 ~ 2025.02", icon: MdWork, title: "티맥스가이아 연구원", detail: "노코드 App 제작 플랫폼 GAIA 개발" },
    { date: "2025.03 ~ 현재", icon: MdWork, title: "관악연구소 프론트엔드 개발자", detail: "LG CNS 생성형 AI 이미지 플랫폼 개발" },
];
