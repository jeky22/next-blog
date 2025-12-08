export interface ProjectItem {
    name: string;
    subtitle: string;
    description: string;
    mypart: string[];
    github?: string;
    stacks: string[];
    img: string;
    images?: string[];
}

export const projectsData: ProjectItem[] = [
    {
        name: "Smart Vet Clinic",
        subtitle: "동물병원 예약 및 진료 관리 시스템",
        description: "동물병원의 업무 흐름과 데이터 구조를 직접 분석해 기획부터 개발까지 단독으로 진행한 데이터 대시보드 프로젝트입니다. 추상적인 요구사항을 실제 업무 관찰을 통해 구체화했고, EMR 데이터 구조를 파악해 시계열·환자 이력 중심의 화면을 설계했습니다.",
        mypart: [
            "프론트엔드 환경 구축, 데이터 파이프라인 연동, 배포까지 전 과정 단독 수행",
            "시계열 차트, 대량 데이터 뷰어 등 데이터 시각화 및 정제 기능 구현",
            "AI를 활용한 대화형 테이블·차트 생성기 구축으로 데이터 활용성 향상"
        ],
        stacks: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
        img: "/images/vet1.png",
        images: ["/images/vet1.png", "/images/vet2.png", "/images/vet3.png", "/images/vet4.png"]
    },
    {
        name: "LG CNS 생성형 AI 이미지 플랫폼",
        subtitle: "기업용 생성형 AI 이미지 생성 및 편집 플랫폼 (COP) 개발",
        description: "LG CNS 관악연구소에서 생성형 AI 기반의 이미지 플랫폼 프론트엔드 개발을 담당하고 있습니다. 마스킹, 자르기 등 고급 이미지 편집 기능을 웹에서 구현하고, 대용량 이미지 처리 성능을 최적화하는 데 주력하고 있습니다.",
        mypart: [
            "Canvas API를 활용한 마스킹, 자르기 등 고급 이미지 편집 기능 구현 및 편집 로직 설계",
            "WebWorker 기반 이미지 처리로 메인 스레드 부하 분산 및 렌더링 지연(Blocking) 현상 완화",
            "웹소켓 재연결 상태머신(State Machine) 설계로 연결 안정성 강화 및 예외 상황 처리 고도화",
            "산돌과의 협업을 통한 커스텀 폰트 기반 텍스트 편집기 개발",
            "공통 UI 컴포넌트 시스템 구축으로 디자인 일관성 확보 및 유지보수 비용 절감"
        ],
        stacks: ['React', 'TypeScript', 'Canvas API', 'WebWorker', 'WebSocket'],
        img: "/images/cop.png"
    },
    {
        name: "노코드 App 제작 플랫폼 GAIA",
        subtitle: "드래그 앤 드롭으로 앱을 제작하는 노코드 플랫폼 개발",
        description: "티맥스가이아에서 사용자가 코딩 없이 앱을 만들 수 있는 노코드 플랫폼의 프론트엔드 코어를 개발했습니다. 런타임에서 컴포넌트를 동적으로 생성하고 배치하는 엔진을 구현하여 높은 자유도의 앱 제작 환경을 제공했습니다.",
        mypart: [
            "사용자 입력을 파싱해 런타임에서 컴포넌트를 자동 구성하는 동적 컴포넌트 할당 로직 개발",
            "렌더링된 개체 기반 코드 생성기를 설계하고 Injection 방식으로 재사용 구조 구축",
            "테이블·차트 편집기 설계 및 데이터 바인딩 구조 구현",
            "셀 구조 변경, UI 편의 기능 등 사용자 중심의 편집 기능 개선 및 UX 고도화"
        ],
        stacks: ['React', 'TypeScript', 'Styled-components'],
        img: "/images/gaia.jpg"
    },
    {
        name: "SuperOffice 웹 문서 편집기",
        subtitle: "클라우드 기반의 실시간 협업 웹 오피스 개발",
        description: "티맥스오피스에서 웹 기반의 워드프로세서 개발에 참여했습니다. 데스크탑 오피스 수준의 기능을 웹에서 구현하기 위해 DOM 조작과 렌더링 성능을 극한으로 최적화했으며, 복잡한 문서 포맷 변환 로직을 직접 구현했습니다.",
        mypart: [
            "이미지 압축·해시 기반 중복 탐지 알고리즘 구현으로 문서 로딩 속도 40% 개선 (특허 출원)",
            "SVG·VML 기반 커브 좌표 계산 로직을 HWPX 스펙에 맞게 구현하여 렌더링 정확도 향상",
            "EMF/WMF 등 외부 포맷을 내부 구조로 변환하는 미디어 컨버터 개발",
            "WebWorker 기반 병렬 처리로 대용량 이미지 로딩·편집 성능 개선",
            "Duotone, 선명도, 커스텀 필터 등 CSS 필터 기반의 고급 이미지 편집 기능 구현"
        ],
        stacks: ['React', 'TypeScript', 'MobX', 'Sass', 'Webpack', 'WebWorker'],
        img: ""
    },
    {
        name: "꽃길",
        subtitle: "온라인 부조금 송금 및 관리 웹 어플리케이션 (NH 농협 핀테크 공모전)",
        description: "모바일 환경에 최적화된 웹 어플리케이션으로, Vue.js를 활용하여 부조금 송금 및 관리 서비스를 구현했습니다.",
        mypart: [
            "Vuex와 JWT 토큰을 활용한 안전한 로그인 상태 관리 구현",
            "Webpack, Babel을 활용한 ES6 도입 및 SCSS 번들링 환경 구축",
            "ESLint, Prettier 도입으로 코드 품질 관리 및 협업 효율성 증대"
        ],
        github: "jeky22/NHfintech-frontend",
        stacks: ['Vue.js', 'Node.js', 'MySQL', 'AWS', 'Bootstrap'],
        img: "/images/ggotgil.png"
    },
    {
        name: "Let Eat, Go",
        subtitle: "음식점 구독 서비스 플랫폼",
        description: "자영업자와 소비자를 연결하는 음식점 구독 플랫폼으로, 프론트엔드와 백엔드 전반을 담당하여 개발했습니다.",
        mypart: [
            "AWS RDS, EC2, S3를 활용한 클라우드 인프라 구축 및 배포",
            "TravisCI를 도입하여 빌드 및 테스트 자동화 파이프라인(CI/CD) 구축",
            "Scrum 방식의 애자일 개발 프로세스 적용 및 백로그 관리"
        ],
        github: "jeky22/returnICE-frontend",
        stacks: ['Vue.js', 'Node.js', 'MySQL', 'AWS', 'Bootstrap'],
        img: "/images/leteatgo.png"
    },
    {
        name: "Circus",
        subtitle: "온라인 스터디 모집 및 관리 플랫폼",
        description: "교내외 스터디를 개설하고 참여할 수 있는 웹 플랫폼으로, RESTful API 설계 및 클라이언트 인증 로직을 구현했습니다.",
        mypart: [
            "RESTful API 설계 및 구현으로 프론트엔드-백엔드 데이터 통신 최적화",
            "Session/Cookie 기반의 클라이언트 인증 및 보안 강화",
            "Bootstrap을 활용한 반응형 UI 구현으로 모바일 접근성 확보"
        ],
        github: "jeky22/webproject",
        stacks: ['Vue.js', 'Node.js', 'MongoDB', 'Bootstrap'],
        img: "/images/circus.gif"
    },
    {
        name: "한터리즘",
        subtitle: "아주대학교 학술소학회 한터 소개 페이지",
        description: "학술 소학회 홍보 및 부원 신청을 위한 반응형 웹페이지를 개발했습니다.",
        mypart: [
            "Bootstrap 기반의 반응형 웹 디자인 및 퍼블리싱",
            "사용자 인터랙션을 고려한 UI/UX 개선"
        ],
        github: "jeky22/hantorism",
        stacks: ['Django', 'MySQL', 'AWS', 'Bootstrap'],
        img: "/images/hantorism.gif"
    },
];
