import { SiTypescript, SiJavascript, SiPython, SiReact, SiNextdotjs, SiVuedotjs, SiMobx, SiRedux, SiStyledcomponents, SiTailwindcss, SiMui, SiNodedotjs, SiNestjs, SiSpringboot, SiAmazon, SiFirebase, SiMysql, SiVercel, SiNetlify, SiGit, SiGithub, SiJira, SiNotion, SiFigma, SiJest, SiGraphql, SiTravisci } from 'react-icons/si';
import { FaJava, FaCogs, FaCalculator, FaImage, FaFileCode, FaMicrochip, FaLayerGroup, FaDatabase, FaServer, FaTools, FaCloud } from 'react-icons/fa';
import { MdHttp } from 'react-icons/md';

export interface SkillItem {
    name: string;
    icon: React.ElementType;
}

export interface SkillCategory {
    title: string;
    description: string[];
    items: SkillItem[];
    icon: React.ElementType;
}

export interface EngineSkillItem {
    title: string;
    description: string;
    icon: React.ElementType;
    tags: string[];
}

export const skillsData: SkillCategory[] = [
    {
        title: "Languages",
        icon: FaFileCode,
        description: [
            "JavaScript, TypeScript: React 및 Next.js 프로젝트에서 주력으로 사용",
            "Java, SQL: 백엔드 API 개발 및 데이터베이스 연동 경험",
            "HTML, CSS: 반응형 UI 구현 및 스타일링 경험"
        ],
        items: [
            { name: "TypeScript", icon: SiTypescript },
            { name: "JavaScript", icon: SiJavascript },
            { name: "Java", icon: FaJava },
            { name: "Python", icon: SiPython },
        ]
    },
    {
        title: "Frameworks & Libs",
        icon: SiReact,
        description: [
            "React, Next.js, React Native: 경력의 웹/모바일 서비스 개발에서 다수의 프로젝트 경험",
            "Vue.js: 학부생 시절 대부분의 웹 프로젝트에 활용",
            "Spring: REST API 개발 및 서버 구축 경험",
            "Material-UI, Vuetify, Bootstrap: UI 컴포넌트 라이브러리 활용"
        ],
        items: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Vue.js", icon: SiVuedotjs },
            { name: "Spring", icon: SiSpringboot },
        ]
    },
    {
        title: "State Management",
        icon: SiRedux,
        description: [
            "MobX: 대규모 상태 관리 최적화 및 성능 개선 경험",
            "Vuex: Vue 프로젝트에서 상태 관리 적용",
            "Recoil/Zustand: 최신 React 상태 관리 라이브러리 활용"
        ],
        items: [
            { name: "MobX", icon: SiMobx },
            { name: "Redux", icon: SiRedux },
        ]
    },
    {
        title: "API & Communication",
        icon: MdHttp,
        description: [
            "Axios: RESTful API 통신 구현 및 비동기 데이터 핸들링",
            "Apollo: GraphQL 기반 API 연동 경험"
        ],
        items: [
            { name: "Axios", icon: MdHttp }, // Using generic HTTP icon as Axios icon is not standard in simple-icons
            { name: "GraphQL", icon: SiGraphql },
        ]
    },
    {
        title: "Performance",
        icon: FaCogs,
        description: [
            "WebWorker: 무거운 연산을 백그라운드에서 처리하여 UI 성능 개선",
            "IntersectionObserver, Lazy Loading: 이미지 및 콘텐츠 로딩 최적화",
            "이미지 압축 로직: 웹페이지 로딩 속도 향상을 위해 적용"
        ],
        items: [
            { name: "WebWorker", icon: FaCogs },
            { name: "Optimization", icon: FaMicrochip },
        ]
    },
    {
        title: "Testing & CI/CD",
        icon: SiJest,
        description: [
            "Jest: 유닛 및 컴포넌트 테스트 적용",
            "GitHub Actions: CI/CD 자동화 구성 및 배포 파이프라인 구축",
            "Travis CI: 간단한 프로젝트에서 사용 경험"
        ],
        items: [
            { name: "Jest", icon: SiJest },
            { name: "Actions", icon: SiGithub },
            { name: "Travis", icon: SiTravisci },
        ]
    },
    {
        title: "Tools & Collaboration",
        icon: FaTools,
        description: [
            "Git, JIRA, Notion: 프로젝트 협업 및 문서화, 애자일 프로세스 경험",
            "Figma, Slack: UI/UX 설계 및 실시간 커뮤니케이션"
        ],
        items: [
            { name: "Git", icon: SiGit },
            { name: "JIRA", icon: SiJira },
            { name: "Figma", icon: SiFigma },
        ]
    },
    {
        title: "Cloud & Deploy",
        icon: FaCloud,
        description: [
            "AWS (S3, Lambda, DynamoDB): 서버리스 애플리케이션 구축 및 운영 경험",
            "Netlify, Vercel: 빠른 프로토타이핑 및 배포 환경 구성"
        ],
        items: [
            { name: "AWS", icon: SiAmazon },
            { name: "Vercel", icon: SiVercel },
            { name: "Netlify", icon: SiNetlify },
        ]
    },
];

export const engineSkillsData: EngineSkillItem[] = [
    {
        title: "이미지 처리 & 최적화 알고리즘",
        description: "이미지 압축 및 해시 기반 중복 탐지 알고리즘을 설계하여 리소스 로딩 속도를 개선하고, WebWorker를 활용한 병렬 처리로 대용량 이미지 편집 시의 렌더링 지연을 해결했습니다.",
        icon: FaImage,
        tags: ["Image Compression", "Hash Algorithm", "WebWorker", "Optimization"]
    },
    {
        title: "복잡한 수학/좌표 연산 로직",
        description: "SVG/VML 기반의 벡터 그래픽 편집 엔진을 위해 베지어 곡선 연산, 좌표 변환, 충돌 감지 등의 기하학적 알고리즘을 직접 구현했습니다.",
        icon: FaCalculator,
        tags: ["Geometry", "Vector Math", "Bezier Curves", "Collision Detection"]
    },
    {
        title: "문서 포맷 파싱 & 변환 엔진",
        description: "OOXML, HWPX 등 복잡한 문서 포맷을 내부 데이터 구조로 변환하는 파서와 매핑 로직을 개발하고, EMF/WMF 같은 레거시 미디어 포맷 컨버터를 구현했습니다.",
        icon: FaFileCode,
        tags: ["Parser", "Data Mapping", "File Format Converter", "Binary Processing"]
    },
    {
        title: "RLE 마스크 디코딩 & 시각화",
        description: "Python(pycocotools)의 RLE(Run-Length Encoding) 마스크 데이터를 JavaScript 환경에서 고속으로 디코딩하고 Canvas에 렌더링하는 파서를 구현했습니다.",
        icon: FaLayerGroup,
        tags: ["RLE Decoding", "Canvas API", "Data Visualization", "Performance"]
    },
    {
        title: "동적 컴포넌트 렌더링 엔진",
        description: "사용자 설정 데이터를 기반으로 런타임에 React 컴포넌트 트리를 동적으로 생성하고 주입(Injection)하는 노코드 플랫폼의 코어 엔진을 설계했습니다.",
        icon: FaCogs,
        tags: ["Dynamic Rendering", "Component Injection", "Runtime Generation", "Architecture"]
    },
    {
        title: "커스텀 렌더링 & 필터 엔진",
        description: "브라우저의 기본 기능을 넘어선 커스텀 CSS 필터(Duotone 등) 적용 로직과 고성능 텍스트 렌더링 엔진을 구현하여 웹 오피스의 표현력을 확장했습니다.",
        icon: FaMicrochip,
        tags: ["Custom Rendering", "CSS Filters", "Text Engine", "Browser Internals"]
    }
];
