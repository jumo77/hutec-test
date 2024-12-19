import {ADMIN, BLOG, CATEGORY, EXPERT, GRADING, SITE, SUPPORT, TEST, TRANSACTION, USER} from "../const/Const";

export const SidebarData = [
    {
        title: USER.title,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/96162cb6663df5a93a33c0c9b813c52ea6940a09c581d2006e5baad24373af60?placeholderIfAbsent=true&apiKey=57ce1e6c5ff44d3ea8eda8a1d09f483d",
        iconAlt: "회원관리 아이콘",
        url: USER.url
    },
    {
        title: EXPERT.title,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/faf87da709d3d4709d8438be5686516fc5e8adbc75f2704d330c8ac560cb18d2?placeholderIfAbsent=true&apiKey=57ce1e6c5ff44d3ea8eda8a1d09f483d",
        iconAlt: "전문가관리 아이콘",
        url: EXPERT.url
    },
    {
        title: "시험관리",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f85cdd621e94b19cf6a760aebdd64da5facfe2afbf2b2cc71e16e01bb7186092?placeholderIfAbsent=true&apiKey=57ce1e6c5ff44d3ea8eda8a1d09f483d",
        iconAlt: "시험관리 아이콘",
        subItems: [TEST, GRADING]
    },
    {
        title: "운영관리",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/24c1dd343e3a419d58d2a8e86325c45bda42ff5676ea38225cedb8050c7c7750?placeholderIfAbsent=true&apiKey=57ce1e6c5ff44d3ea8eda8a1d09f483d",
        iconAlt: "운영관리 아이콘",
        subItems: [BLOG, SUPPORT, SITE]
    },
    {
        title: "기준관리",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/58f57c57d687989572474886baf2de447b6860fccb6a417e36b6932235dbd2ef?placeholderIfAbsent=true&apiKey=57ce1e6c5ff44d3ea8eda8a1d09f483d",
        iconAlt: "기준관리 아이콘",
        subItems: [CATEGORY, TRANSACTION, ADMIN]
    },
    {
        title: "로그아웃",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb1274bb90fc13ce2dc56bbb44fa9fc21b8a6e5757a314cd7d2c2f9de64cd977?placeholderIfAbsent=true&apiKey=57ce1e6c5ff44d3ea8eda8a1d09f483d",
        iconAlt: "로그아웃 아이콘"
    }
];