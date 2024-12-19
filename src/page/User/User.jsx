import styles from "./User.module.css"
import Filter from "../../component/main/Filter";
import {useEffect, useState} from "react";
import Table from "../../component/main/Table";
import {
    ALL,
    D_BOUNDARY,
    D_CATEGORY,
    D_EXAM_SUBJECT,
    D_SUBSCRIPTION,
    D_TEST_DEGREE, D_TEST_SUBJECT,
    D_USER_TYPE, EXPERT, L_SUBSCRIPTION, L_USER, USER
} from "../../component/const/Const";

export default function User() {

    // 탭 데이터
    const tabs = [
        {label: "전체", id: "all"},
        {label: "회원 관리", id: "user"},
        {label: "활동 관리", id: "activity"},
        {label: "결제 관리", id: "transaction"},
        {label: "1:1 문의 관리", id: "ask"},
    ]

    // 사이트별 필터 데이터
    const [meta, setMeta] = useState(true);
    const [exam, setExam] = useState(true);
    const [doc, setDoc] = useState(true);

    const [userType, setUserType] = useState(ALL);
    const [subscription, setSubscription] = useState(ALL);

    const siteTypes = [
        {label: '메타 번역', value: meta, set: setMeta},
        {label: '시험', value: exam, set: setExam},
        {label: '문서', value: doc, set: setDoc},
    ];

    // 가입경로 필터 데이터
    const [self, setSelf] = useState(true);
    const [kakao, setKakao] = useState(true);
    const [naver, setNaver] = useState(true);
    const [google, setGoogle] = useState(true);

    const joinPaths = [
        {label: '본인인증', value: self, set: setSelf},
        {label: '카카오', value: kakao, set: setKakao},
        {label: '네이버', value: naver, set: setNaver},
        {label: '구글', value: google, set: setGoogle},
    ];

    // 알람 허용별 필터 데이터
    const [sms_alert, set_sms_alert] = useState(true);
    const [kakao_alert, set_kakao_alert] = useState(true);
    const [email_alert, set_email_alert] = useState(true);

    const alertTypes = [
        {label: '문자', value: sms_alert, set: set_sms_alert},
        {label: '카카오톡', value: kakao_alert, set: set_kakao_alert},
        {label: '이메일', value: email_alert, set: set_email_alert},
    ];

    // 마케팅 허용별 필터 데이터
    const [sms_marketing, set_sms_marketing] = useState(true);
    const [kakao_marketing, set_kakao_marketing] = useState(true);
    const [email_marketing, set_email_marketing] = useState(true);

    const marketingTypes = [
        {label: '문자', value: sms_marketing, set: set_sms_marketing},
        {label: '카카오톡', value: kakao_marketing, set: set_kakao_marketing},
        {label: '이메일', value: email_marketing, set: set_email_marketing},
    ];

    // 지역별 필터 데이터
    const [seoul, setSeoul] = useState(true);
    const [gyeonggi, setGyeonggi] = useState(true);
    const [busan, setBusan] = useState(true);
    const [daegu, setDaegu] = useState(true);
    const [gangwon, setGangwon] = useState(true);
    const [chungcheong, setChungcheong] = useState(true);
    const [jeolla, setJeolla] = useState(true);
    const [gyeongsang, setGyeongsang] = useState(true);
    const [others, setOthers] = useState(true);
    const [usa, setUsa] = useState(true);
    const [europe, setEurope] = useState(true);
    const [china, setChina] = useState(true);
    const [overseas, setOverseas] = useState(true);

    const regions = [
        {label: '서울', value: seoul, set: setSeoul},
        {label: '경기도', value: gyeonggi, set: setGyeonggi},
        {label: '부산', value: busan, set: setBusan},
        {label: '대구', value: daegu, set: setDaegu},
        {label: '강원', value: gangwon, set: setGangwon},
        {label: '충청도', value: chungcheong, set: setChungcheong},
        {label: '전라도', value: jeolla, set: setJeolla},
        {label: '경상도', value: gyeongsang, set: setGyeongsang},
        {label: '그 외', value: others, set: setOthers},
        {label: '미국', value: usa, set: setUsa},
        {label: '유럽', value: europe, set: setEurope},
        {label: '중국', value: china, set: setChina},
        {label: '그 외 해외', value: overseas, set: setOverseas},
    ];

    // 시험 정보별 필터 데이터
    const [primary, setPrimary] = useState(true);
    const [secondary, setSecondary] = useState(true);

    const [testSubject, setTestSubject] = useState(ALL);
    const [testDegree, setTestDegree] = useState(ALL);
    const [examSubject, setExamSubject] = useState(ALL);
    const [category, setCategory] = useState(ALL);
    const [boundary, setBoundary] = useState(ALL);

    const testType = [
        {label: '정시', value: primary, set: setPrimary},
        {label: '차시', value: secondary, set: setSecondary}
    ]

    //시험 결과별 필터 데이터
    const [passed, setPassed] = useState(true)
    const [nonPassed, setNonPassed] = useState(true)

    const testResult = [
        {label: '합격', value: passed, set: setPassed},
        {label: '합격', value: nonPassed, set: setNonPassed}
    ]

    // 검색 필터 데이터
    const searchFilters = [
        {label: "사이트 구분", options: siteTypes, additionalSelects: [
                {label: "회원 유형", options: D_USER_TYPE, value: userType, set: setUserType},
                {label: "구독", options: D_SUBSCRIPTION, value: subscription, set: setSubscription}]
        },
        {label: "가입경로", options: joinPaths},
        {label: "알림 설정", options: alertTypes},
        {label: "마케팅 설정", options: marketingTypes},
        {label: "지역", options: regions},
        {label: "접수 구분", options: testType, additionalSelects: [
                {label: "시험 과목", options: D_TEST_SUBJECT, value: testSubject, set: setTestSubject},
                {label: "검정 급수", options: D_TEST_DEGREE, value: testDegree, set: setTestDegree},
                {label: "검정 과목", options: D_EXAM_SUBJECT, value: examSubject, set: setExamSubject},
                {label: "분야", options: D_CATEGORY, value: category, set: setCategory},
                {label: "영역", options: D_BOUNDARY, value: boundary, set: setBoundary}
            ]
        },
        {label: "시험 결과", options: testResult}
    ];

    const [total, setTotal] = useState([
        {
            id: "UI240110/001",
            site: "메타번역",
            userType: "정식 회원",
            userSubscriptionStatus: "프리미엄 구독",
            name: "홍길동",
            age: 34,
            gender: "남",
            email: "abce@gmail.com",
            mobilePhone: "+82 1012345678",
            city: "서울",
            address: "강남구",
            groupStatus: true,
            groupName: "삼성",
            joinDate: "24.10.30",
            joinChannel: "카카오",
            firstAccessDevice: "모바일",
            recentLogin: "24.10.10 월",
            stayTime: "1h15m 30s",
            photo: "image.gif",
            alertKaKao: true,
            alertSms: true,
            alertEmail: true,
            marketingKaKao: true,
            marketingSms: true,
            marketingEmail: true,
            activityManagementNumber: "XXXXX\nXXXXX",
            serviceType: "시험",
            testNation: "대한민국",
            testCity: "서울",
            testDate: "24.01.10",
            testStartTime: "10:00",
            testEndTime: "16:00",
            applicationCategory: "정시",
            numberOfTimes: "25년 1차",
            testSubject: "번역 전문가",
            testGrade: "전문1급",
            category1: "카테고리(대)",
            category2: "카테고리(중)",
            category3: "카테고리(소)",
            examName: "시험명 표시 영역",
            detailedDescription: "(세부명)",
            departureLanguage: "한국어",
            arrivalLanguage: "English(US)",
            isChoice: true,
            isShort: true,
            isLong: true,
            applicationStartDate: "24.01.10",
            applicationEndDate: "24.01.30",
            applicationStatus: "접수 전",
            examStatus: "시험 전",
            candidateStatus: "응시 전",
            announceDate: "24.10.10 월",
            announceTime: "10:00",
            examResults: true,
            scoredPoints: 80,
            feedbackStatus: "피드백 전",
            feedbackCompleteDate: "",
            certificate: "",
            paymentDate: "24.10.10",
            paymentDetails: "시험 응시",
            used: 100000,
            discount: -10000,
            discountDescription: "이벤트 할인",
            paymentAmount: 90000,
            paymentMethod: "카드 결제",
            availablePoints: 12000,
            refundStatus: "",
            consultationDate: "24.01.10",
            consultationCompleteDate: "24.01.30",
            consultationStatus: "문의 요청",
            inquiryCategory: "결제",
            answerCategory: "관리자",
            answerer: "김관리",
            inquiryTitle: "제목이 ...",
            inquiryContents: "글자5개마우스오버시 모두...",
            attachedFile: "",
            adminMemo: "입력한 텍스트 ..."

        },
        {
            id: "UI240110/001",
            site: "메타번역",
            userType: "정식 회원",
            userSubscriptionStatus: "프리미엄 구독",
            name: "홍길동",
            age: 34,
            gender: "남",
            email: "abce@gmail.com",
            mobilePhone: "+82 1012345678",
            city: "서울",
            address: "강남구",
            groupStatus: "",
            groupName: "",
            joinDate: "24.10.30",
            joinChannel: "카카오",
            firstAccessDevice: "모바일",
            recentLogin: "24.10.10 월",
            stayTime: "1h15m 30s",
            photo: "image.gif",
            alertKaKao: true,
            alertSms: true,
            alertEmail: true,
            marketingKaKao: true,
            marketingSms: true,
            marketingEmail: true,
            activityManagementNumber: "XXXXX\nXXXXX",

            serviceType: "시험",
            testNation: "대한민국",
            testCity: "서울",
            testDate: "24.01.10",
            testStartTime: "10:00",
            testEndTime: "16:00",
            applicationCategory: "정시",
            numberOfTimes: "25년 1차",
            testSubject: "번역 전문가",
            testGrade: "전문1급",
            category1: "카테고리(대)",
            category2: "카테고리(중)",
            category3: "카테고리(소)",
            examName: "시험명 표시 영역",
            detailedDescription: "(세부명)",
            departureLanguage: "한국어",
            arrivalLanguage: "English(US)",
            isChoice: true,
            isShort: true,
            isLong: true,
            applicationStartDate: "24.01.10",
            applicationEndDate: "24.01.30",
            applicationStatus: "접수 전",
            examStatus: "시험 전",
            candidateStatus: "응시 전",
            announceDate: "24.10.10 월",
            announceTime: "10:00",
            examResults: true,
            scoredPoints: 80,
            feedbackStatus: "피드백 전",
            feedbackCompleteDate: "",
            certificate: "",

            paymentDate: "24.10.10",
            paymentDetails: "시험 응시",
            used: 100000,
            discount: -10000,
            discountDescription: "이벤트 할인",
            paymentAmount: 90000,
            paymentMethod: "카드 결제",
            availablePoints: 12000,
            refundStatus: "",

            consultationDate: "24.01.10",
            consultationCompleteDate: "24.01.30",
            consultationStatus: "문의 요청",
            inquiryCategory: "결제",
            answerCategory: "관리자",
            answerer: "김관리",
            inquiryTitle: "제목이 ...",
            inquiryContents: "글자5개마우스오버시 모두...",
            attachedFile: "",
            adminMemo: "입력한 텍스트 ..."

        },
        {
            id: "UI240110/001",
            site: "메타번역",
            userType: "정식 회원",
            userSubscriptionStatus: "프리미엄 구독",
            name: "홍길동",
            age: 34,
            gender: "남",
            email: "abce@gmail.com",
            mobilePhone: "+82 1012345678",
            city: "서울",
            address: "강남구",
            groupStatus: "",
            groupName: "",
            joinDate: "24.10.30",
            joinChannel: "카카오",
            firstAccessDevice: "모바일",
            recentLogin: "24.10.10 월",
            stayTime: "1h15m 30s",
            photo: "image.gif",
            alertKaKao: true,
            alertSms: true,
            alertEmail: true,
            marketingKaKao: true,
            marketingSms: true,
            marketingEmail: true,
            activityManagementNumber: "XXXXX\nXXXXX",

            serviceType: "시험",
            testNation: "대한민국",
            testCity: "서울",
            testDate: "24.01.10",
            testStartTime: "10:00",
            testEndTime: "16:00",
            applicationCategory: "정시",
            numberOfTimes: "25년 1차",
            testSubject: "번역 전문가",
            testGrade: "전문1급",
            category1: "카테고리(대)",
            category2: "카테고리(중)",
            category3: "카테고리(소)",
            examName: "시험명 표시 영역",
            detailedDescription: "(세부명)",
            departureLanguage: "한국어",
            arrivalLanguage: "English(US)",
            isChoice: true,
            isShort: true,
            isLong: true,
            applicationStartDate: "24.01.10",
            applicationEndDate: "24.01.30",
            applicationStatus: "접수 전",
            examStatus: "시험 전",
            candidateStatus: "응시 전",
            announceDate: "24.10.10 월",
            announceTime: "10:00",
            examResults: true,
            scoredPoints: 80,
            feedbackStatus: "피드백 전",
            feedbackCompleteDate: "",

            certificate: "",
            paymentDate: "24.10.10",
            paymentDetails: "시험 응시",
            used: 100000,
            discount: -10000,
            discountDescription: "이벤트 할인",
            paymentAmount: 90000,
            paymentMethod: "카드 결제",
            availablePoints: 12000,
            refundStatus: "",

            consultationDate: "24.01.10",
            consultationCompleteDate: "24.01.30",
            consultationStatus: "문의 요청",
            inquiryCategory: "결제",
            answerCategory: "관리자",
            answerer: "김관리",
            inquiryTitle: "제목이 ...",
            inquiryContents: "글자5개마우스오버시 모두...",
            attachedFile: "",
            adminMemo: "입력한 텍스트 ..."

        },
        {
            id: "UI240110/001",
            site: "메타번역",
            userType: "정식 회원",
            userSubscriptionStatus: "프리미엄 구독",
            name: "홍길동",
            age: 34,
            gender: "남",
            email: "abce@gmail.com",
            mobilePhone: "+82 1012345678",
            city: "서울",
            address: "강남구",
            groupStatus: "",
            groupName: "",
            joinDate: "24.10.30",
            joinChannel: "카카오",
            firstAccessDevice: "모바일",
            recentLogin: "24.10.10 월",
            stayTime: "1h15m 30s",
            photo: "image.gif",
            alertKaKao: true,
            alertSms: true,
            alertEmail: true,
            marketingKaKao: true,
            marketingSms: true,
            marketingEmail: true,
            activityManagementNumber: "XXXXX\nXXXXX",

            serviceType: "시험",
            testNation: "대한민국",
            testCity: "서울",
            testDate: "24.01.10",
            testStartTime: "10:00",
            testEndTime: "16:00",
            applicationCategory: "정시",
            numberOfTimes: "25년 1차",
            testSubject: "번역 전문가",
            testGrade: "전문1급",
            category1: "카테고리(대)",
            category2: "카테고리(중)",
            category3: "카테고리(소)",
            examName: "시험명 표시 영역",
            detailedDescription: "(세부명)",
            departureLanguage: "한국어",
            arrivalLanguage: "English(US)",
            isChoice: true,
            isShort: true,
            isLong: true,
            applicationStartDate: "24.01.10",
            applicationEndDate: "24.01.30",
            applicationStatus: "접수 전",
            examStatus: "시험 전",
            candidateStatus: "응시 전",
            announceDate: "24.10.10 월",
            announceTime: "10:00",
            examResults: true,
            scoredPoints: 80,
            feedbackStatus: "피드백 전",
            feedbackCompleteDate: "",

            certificate: "",
            paymentDate: "24.10.10",
            paymentDetails: "시험 응시",
            used: 100000,
            discount: -10000,
            discountDescription: "이벤트 할인",
            paymentAmount: 90000,
            paymentMethod: "카드 결제",
            availablePoints: 12000,
            refundStatus: "",

            consultationDate: "24.01.10",
            consultationCompleteDate: "24.01.30",
            consultationStatus: "문의 요청",
            inquiryCategory: "결제",
            answerCategory: "관리자",
            answerer: "김관리",
            inquiryTitle: "제목이 ...",
            inquiryContents: "글자5개마우스오버시 모두...",
            attachedFile: "",
            adminMemo: "입력한 텍스트 ..."

        },
        {
            id: "UI240110/001",
            site: "메타번역",
            userType: "정식 회원",
            userSubscriptionStatus: "프리미엄 구독",
            name: "홍길동",
            age: 34,
            gender: "남",
            email: "abce@gmail.com",
            mobilePhone: "+82 1012345678",
            city: "서울",
            address: "강남구",
            groupStatus: "",
            groupName: "",
            joinDate: "24.10.30",
            joinChannel: "카카오",
            firstAccessDevice: "모바일",
            recentLogin: "24.10.10 월",
            stayTime: "1h15m 30s",
            photo: "image.gif",
            alertKaKao: true,
            alertSms: true,
            alertEmail: true,
            marketingKaKao: true,
            marketingSms: true,
            marketingEmail: true,
            activityManagementNumber: "XXXXX\nXXXXX",

            serviceType: "시험",
            testNation: "대한민국",
            testCity: "서울",
            testDate: "24.01.10",
            testStartTime: "10:00",
            testEndTime: "16:00",
            applicationCategory: "정시",
            numberOfTimes: "25년 1차",
            testSubject: "번역 전문가",
            testGrade: "전문1급",
            category1: "카테고리(대)",
            category2: "카테고리(중)",
            category3: "카테고리(소)",
            examName: "시험명 표시 영역",
            detailedDescription: "(세부명)",
            departureLanguage: "한국어",
            arrivalLanguage: "English(US)",
            isChoice: true,
            isShort: true,
            isLong: true,
            applicationStartDate: "24.01.10",
            applicationEndDate: "24.01.30",
            applicationStatus: "접수 전",
            examStatus: "시험 전",
            candidateStatus: "응시 전",
            announceDate: "24.10.10 월",
            announceTime: "10:00",
            examResults: true,
            scoredPoints: 80,
            feedbackStatus: "피드백 전",
            feedbackCompleteDate: "",

            certificate: "",
            paymentDate: "24.10.10",
            paymentDetails: "시험 응시",
            used: 100000,
            discount: -10000,
            discountDescription: "이벤트 할인",
            paymentAmount: 90000,
            paymentMethod: "카드 결제",
            availablePoints: 12000,
            refundStatus: "",

            consultationDate: "24.01.10",
            consultationCompleteDate: "24.01.30",
            consultationStatus: "문의 요청",
            inquiryCategory: "결제",
            answerCategory: "관리자",
            answerer: "김관리",
            inquiryTitle: "제목이 ...",
            inquiryContents: "글자5개마우스오버시 모두...",
            attachedFile: "",
            adminMemo: "입력한 텍스트 ..."

        },
        {
            id: "UI240110/001",
            site: "메타번역",
            userType: "정식 회원",
            userSubscriptionStatus: "프리미엄 구독",
            name: "홍길동",
            age: 34,
            gender: "남",
            email: "abce@gmail.com",
            mobilePhone: "+82 1012345678",
            city: "서울",
            address: "강남구",
            groupStatus: "",
            groupName: "",
            joinDate: "24.10.30",
            joinChannel: "카카오",
            firstAccessDevice: "모바일",
            recentLogin: "24.10.10 월",
            stayTime: "1h15m 30s",
            photo: "image.gif",
            alertKaKao: true,
            alertSms: true,
            alertEmail: true,
            marketingKaKao: true,
            marketingSms: true,
            marketingEmail: true,
            activityManagementNumber: "XXXXX\nXXXXX",

            serviceType: "시험",
            testNation: "대한민국",
            testCity: "서울",
            testDate: "24.01.10",
            testStartTime: "10:00",
            testEndTime: "16:00",
            applicationCategory: "정시",
            numberOfTimes: "25년 1차",
            testSubject: "번역 전문가",
            testGrade: "전문1급",
            category1: "카테고리(대)",
            category2: "카테고리(중)",
            category3: "카테고리(소)",
            examName: "시험명 표시 영역",
            detailedDescription: "(세부명)",
            departureLanguage: "한국어",
            arrivalLanguage: "English(US)",
            isChoice: true,
            isShort: true,
            isLong: true,
            applicationStartDate: "24.01.10",
            applicationEndDate: "24.01.30",
            applicationStatus: "접수 전",
            examStatus: "시험 전",
            candidateStatus: "응시 전",
            announceDate: "24.10.10 월",
            announceTime: "10:00",
            examResults: true,
            scoredPoints: 80,
            feedbackStatus: "피드백 전",
            feedbackCompleteDate: "",

            certificate: "",
            paymentDate: "24.10.10",
            paymentDetails: "시험 응시",
            used: 100000,
            discount: -10000,
            discountDescription: "이벤트 할인",
            paymentAmount: 90000,
            paymentMethod: "카드 결제",
            availablePoints: 12000,
            refundStatus: "",

            consultationDate: "24.01.10",
            consultationCompleteDate: "24.01.30",
            consultationStatus: "문의 요청",
            inquiryCategory: "결제",
            answerCategory: "관리자",
            answerer: "김관리",
            inquiryTitle: "제목이 ...",
            inquiryContents: "글자5개마우스오버시 모두...",
            attachedFile: "",
            adminMemo: "입력한 텍스트 ..."

        },
        {
            id: "UI240110/001",
            site: "메타번역",
            userType: "정식 회원",
            userSubscriptionStatus: "프리미엄 구독",
            name: "홍길동",
            age: 34,
            gender: "남",
            email: "abce@gmail.com",
            mobilePhone: "+82 1012345678",
            city: "서울",
            address: "강남구",
            groupStatus: "",
            groupName: "",
            joinDate: "24.10.30",
            joinChannel: "카카오",
            firstAccessDevice: "모바일",
            recentLogin: "24.10.10 월",
            stayTime: "1h15m 30s",
            photo: "image.gif",
            alertKaKao: true,
            alertSms: true,
            alertEmail: true,
            marketingKaKao: true,
            marketingSms: true,
            marketingEmail: true,
            activityManagementNumber: "XXXXX\nXXXXX",

            serviceType: "시험",
            testNation: "대한민국",
            testCity: "서울",
            testDate: "24.01.10",
            testStartTime: "10:00",
            testEndTime: "16:00",
            applicationCategory: "정시",
            numberOfTimes: "25년 1차",
            testSubject: "번역 전문가",
            testGrade: "전문1급",
            category1: "카테고리(대)",
            category2: "카테고리(중)",
            category3: "카테고리(소)",
            examName: "시험명 표시 영역",
            detailedDescription: "(세부명)",
            departureLanguage: "한국어",
            arrivalLanguage: "English(US)",
            isChoice: true,
            isShort: true,
            isLong: true,
            applicationStartDate: "24.01.10",
            applicationEndDate: "24.01.30",
            applicationStatus: "접수 전",
            examStatus: "시험 전",
            candidateStatus: "응시 전",
            announceDate: "24.10.10 월",
            announceTime: "10:00",
            examResults: true,
            scoredPoints: 80,
            feedbackStatus: "피드백 전",
            feedbackCompleteDate: "",

            certificate: "",
            paymentDate: "24.10.10",
            paymentDetails: "시험 응시",
            used: 100000,
            discount: -10000,
            discountDescription: "이벤트 할인",
            paymentAmount: 90000,
            paymentMethod: "카드 결제",
            availablePoints: 12000,
            refundStatus: "",

            consultationDate: "24.01.10",
            consultationCompleteDate: "24.01.30",
            consultationStatus: "문의 요청",
            inquiryCategory: "결제",
            answerCategory: "관리자",
            answerer: "김관리",
            inquiryTitle: "제목이 ...",
            inquiryContents: "글자5개마우스오버시 모두...",
            attachedFile: "",
            adminMemo: "입력한 텍스트 ..."

        },
        {
            id: "UI240110/002",
            site: "메타번역",
            userType: "정식 회원",
            userSubscriptionStatus: "프리미엄 구독",
            name: "홍길동",
            age: 34,
            gender: "남",
            email: "abce@gmail.com",
            mobilePhone: "+82 1012345678",
            city: "서울",
            address: "강남구",
            groupStatus: "",
            groupName: "",
            joinDate: "24.10.30",
            joinChannel: "카카오",
            firstAccessDevice: "모바일",
            recentLogin: "24.10.10 월",
            stayTime: "1h15m 30s",
            photo: "image.gif",
            alertKaKao: true,
            alertSms: true,
            alertEmail: true,
            marketingKaKao: true,
            marketingSms: true,
            marketingEmail: true,
            activityManagementNumber: "XXXXX\nXXXXX",

            serviceType: "시험",
            testNation: "대한민국",
            testCity: "서울",
            testDate: "24.01.10",
            testStartTime: "10:00",
            testEndTime: "16:00",
            applicationCategory: "정시",
            numberOfTimes: "25년 1차",
            testSubject: "번역 전문가",
            testGrade: "전문1급",
            category1: "카테고리(대)",
            category2: "카테고리(중)",
            category3: "카테고리(소)",
            examName: "시험명 표시 영역",
            detailedDescription: "(세부명)",
            departureLanguage: "한국어",
            arrivalLanguage: "English(US)",
            isChoice: true,
            isShort: true,
            isLong: true,
            applicationStartDate: "24.01.10",
            applicationEndDate: "24.01.30",
            applicationStatus: "접수 전",
            examStatus: "시험 전",
            candidateStatus: "응시 전",
            announceDate: "24.10.10 월",
            announceTime: "10:00",
            examResults: true,
            scoredPoints: 80,
            feedbackStatus: "피드백 전",
            feedbackCompleteDate: "",

            certificate: "",
            paymentDate: "24.10.10",
            paymentDetails: "시험 응시",
            used: 100000,
            discount: -10000,
            discountDescription: "이벤트 할인",
            paymentAmount: 90000,
            paymentMethod: "카드 결제",
            availablePoints: 12000,
            refundStatus: "",

            consultationDate: "24.01.10",
            consultationCompleteDate: "24.01.30",
            consultationStatus: "문의 요청",
            inquiryCategory: "결제",
            answerCategory: "관리자",
            answerer: "김관리",
            inquiryTitle: "제목이 ...",
            inquiryContents: "글자5개마우스오버시 모두...",
            attachedFile: "",
            adminMemo: "입력한 텍스트 ..."

        },
        {
            id: "UI240110/002",
            site: "메타번역",
            userType: "정식 회원",
            userSubscriptionStatus: "프리미엄 구독",
            name: "홍길동",
            age: 34,
            gender: "남",
            email: "abce@gmail.com",
            mobilePhone: "+82 1012345678",
            city: "서울",
            address: "강남구",
            groupStatus: "",
            groupName: "",
            joinDate: "24.10.30",
            joinChannel: "카카오",
            firstAccessDevice: "모바일",
            recentLogin: "24.10.10 월",
            stayTime: "1h15m 30s",
            photo: "image.gif",
            alertKaKao: true,
            alertSms: true,
            alertEmail: true,
            marketingKaKao: true,
            marketingSms: true,
            marketingEmail: true,
            activityManagementNumber: "XXXXX\nXXXXX",

            serviceType: "시험",
            testNation: "대한민국",
            testCity: "서울",
            testDate: "24.01.10",
            testStartTime: "10:00",
            testEndTime: "16:00",
            applicationCategory: "정시",
            numberOfTimes: "25년 1차",
            testSubject: "번역 전문가",
            testGrade: "전문1급",
            category1: "카테고리(대)",
            category2: "카테고리(중)",
            category3: "카테고리(소)",
            examName: "시험명 표시 영역",
            detailedDescription: "(세부명)",
            departureLanguage: "한국어",
            arrivalLanguage: "English(US)",
            isChoice: true,
            isShort: true,
            isLong: true,
            applicationStartDate: "24.01.10",
            applicationEndDate: "24.01.30",
            applicationStatus: "접수 전",
            examStatus: "시험 전",
            candidateStatus: "응시 전",
            announceDate: "24.10.10 월",
            announceTime: "10:00",
            examResults: true,
            scoredPoints: 80,
            feedbackStatus: "피드백 전",
            feedbackCompleteDate: "",

            certificate: "",
            paymentDate: "24.10.10",
            paymentDetails: "시험 응시",
            used: 100000,
            discount: -10000,
            discountDescription: "이벤트 할인",
            paymentAmount: 90000,
            paymentMethod: "카드 결제",
            availablePoints: 12000,
            refundStatus: "",

            consultationDate: "24.01.10",
            consultationCompleteDate: "24.01.30",
            consultationStatus: "문의 요청",
            inquiryCategory: "결제",
            answerCategory: "관리자",
            answerer: "김관리",
            inquiryTitle: "제목이 ...",
            inquiryContents: "글자5개마우스오버시 모두...",
            attachedFile: "",
            adminMemo: "입력한 텍스트 ..."

        },
        {
            id: "UI240110/001",
            site: "메타번역",
            userType: "정식 회원",
            userSubscriptionStatus: "프리미엄 구독",
            name: "홍길동",
            age: 34,
            gender: "남",
            email: "abce@gmail.com",
            mobilePhone: "+82 1012345678",
            city: "서울",
            address: "강남구",
            groupStatus: "",
            groupName: "",
            joinDate: "24.10.30",
            joinChannel: "카카오",
            firstAccessDevice: "모바일",
            recentLogin: "24.10.10 월",
            stayTime: "1h15m 30s",
            photo: "image.gif",
            alertKaKao: true,
            alertSms: true,
            alertEmail: true,
            marketingKaKao: true,
            marketingSms: true,
            marketingEmail: true,
            activityManagementNumber: "XXXXX\nXXXXX",

            serviceType: "시험",
            testNation: "대한민국",
            testCity: "서울",
            testDate: "24.01.10",
            testStartTime: "10:00",
            testEndTime: "16:00",
            applicationCategory: "정시",
            numberOfTimes: "25년 1차",
            testSubject: "번역 전문가",
            testGrade: "전문1급",
            category1: "카테고리(대)",
            category2: "카테고리(중)",
            category3: "카테고리(소)",
            examName: "시험명 표시 영역",
            detailedDescription: "(세부명)",
            departureLanguage: "한국어",
            arrivalLanguage: "English(US)",
            isChoice: true,
            isShort: true,
            isLong: true,
            applicationStartDate: "24.01.10",
            applicationEndDate: "24.01.30",
            applicationStatus: "접수 전",
            examStatus: "시험 전",
            candidateStatus: "응시 전",
            announceDate: "24.10.10 월",
            announceTime: "10:00",
            examResults: true,
            scoredPoints: 80,
            feedbackStatus: "피드백 전",
            feedbackCompleteDate: "",

            certificate: "",
            paymentDate: "24.10.10",
            paymentDetails: "시험 응시",
            used: 100000,
            discount: -10000,
            discountDescription: "이벤트 할인",
            paymentAmount: 90000,
            paymentMethod: "카드 결제",
            availablePoints: 12000,
            refundStatus: "",

            consultationDate: "24.01.10",
            consultationCompleteDate: "24.01.30",
            consultationStatus: "문의 요청",
            inquiryCategory: "결제",
            answerCategory: "관리자",
            answerer: "김관리",
            inquiryTitle: "제목이 ...",
            inquiryContents: "글자5개마우스오버시 모두...",
            attachedFile: "",
            adminMemo: "입력한 텍스트 ..."

        },
    ]);

    const [view, setView] = useState([]);

    const table_header_all =[
        "번호",
        "회원 관리 번호",
        "사이트 구분₩회원 유형",
        "회원 구독 상태",
        "이름₩나이∙성별",
        "이메일₩휴대폰",
        "주소",
        "그룹여부₩그룹명",
        "가입일₩가입 채널",
        "최초접근기기",
        "최근 로그인₩체류시간",
        "사진",
        "알림 설정",
        "마케팅동의",
        "활동 관리 번호",
        "서비스 유형",
        "지역",
        "시험일₩시험시간",
        "접수 구분₩차수",
        "시험 종목₩시험 등급",
        "검정과목₩분야/영역",
        "시험명₩(세부명)",
        "출발어₩도착어",
        "시험 유형",
        "접수기간₩접수 상태",
        "시험 상태₩응시 상태",
        "성적 발표일₩발표 시간",
        "시험 결과₩채점 점수",
        "피드백 상태₩피드백 완료일",
        "자격증",
        "결제일",
        "결제 내용",
        "이용 금액₩헤택",
        "결제 금액₩결제 방법",
        "보유 포인트",
        "환불 상태",
        "상담일₩상담 완료일",
        "상담 상태",
        "문의 분류₩답변분류",
        "답변자",
        "문의 제목",
        "문의 내용",
        "첨부 파일",
        "관리자 메모",
    ]
    const table_header_activity =[
        "번호",
        "회원 관리 번호",
        "사이트 구분₩회원 유형",
        "회원 구독 상태",
        "이름₩나이∙성별",
        "이메일₩휴대폰",
        "주소",
        "지역",
        "시험일₩시험시간",
        "접수 구분₩차수",
        "시험 종목₩시험 등급",
        "검정과목₩분야/영역",
        "시험명₩(세부명)",
        "출발어₩도착어",
        "시험 유형",
        "접수기간₩접수 상태",
        "시험 상태₩응시 상태",
        "성적 발표일₩발표 시간",
        "시험 결과₩채점 점수",
        "피드백 상태₩피드백 완료일",
        "자격증",
        "관리자 메모",
    ]
    const table_header_ask =[
        "번호",
        "회원 관리 번호",
        "사이트 구분₩" +
        "회원 유형",
        "회원 구독 상태",
        "이름₩" +
        "나이∙" +
        "성별",
        "이메일₩" +
        "휴대폰",
        "주소",
        "그룹여부₩" +
        "그룹명",
        "가입일₩" +
        "가입 채널",
        "최초접근기기",
        "최근 로그인₩" +
        "체류시간",
        "사진",
        "알림 설정",
        "상담일₩" +
        "상담 완료일",
        "상담 상태",
        "문의 분류₩" +
        "답변분류",
        "답변자",
        "문의 제목",
        "문의 내용",
        "첨부 파일",
        "관리자 메모",
    ]
    const table_header_transaction =[
        "번호",
        "회원 관리 번호",
        "사이트 구분₩" +
        "회원 유형",
        "회원 구독 상태",
        "이름₩" +
        "나이∙" +
        "성별",
        "이메일₩" +
        "휴대폰",
        "주소",
        "그룹여부₩" +
        "그룹명",
        "가입일₩" +
        "가입 채널",
        "최초접근기기",
        "최근 로그인₩" +
        "체류시간",
        "사진",
        "알림 설정",
        "결제일",
        "결제 내용",
        "이용 금액₩" +
        "헤택",
        "결제 금액₩" +
        "결제 방법",
        "보유 포인트",
        "환불 상태",
        "관리자 메모",
    ]
    const table_header_user =[
        "번호",
        "회원 관리 번호",
        "사이트 구분₩회원 유형",
        "회원 구독 상태",
        "이름₩나이∙성별",
        "이메일₩휴대폰",
        "주소",
        "그룹여부₩그룹명",
        "가입일₩가입 채널",
        "최초접근기기",
        "최근 로그인₩체류시간",
        "사진",
        "알림 설정",
        "마케팅동의",
        "관리자 메모",
    ]

    const [header, setHeader] = useState([])

    const differTable = (q) => {
        Array.from(document.getElementsByClassName(styles.tab)).forEach(it => {
            if (it.id !== q) it.classList.remove(styles.tabActive)
            if (it.id === q && !it.classList.contains(styles.tabActive)) it.classList.add(styles.tabActive)
        })
        switch (q){
            case tabs[1].id:
                setHeader(table_header_user)
                setView(total.map(it =>({
                    id: it.id,
                    site: it.site,
                    userType: it.userType,
                    userSubscriptionStatus: it.userSubscriptionStatus,
                    name: it.name,
                    age: it.age,
                    gender: it.gender,
                    email: it.email,
                    mobilePhone: it.mobilePhone,
                    city: it.city,
                    address: it.address,
                    groupStatus: it.groupStatus,
                    groupName: it.groupName,
                    joinDate: it.joinDate,
                    joinChannel: it.joinChannel,
                    firstAccessDevice: it.firstAccessDevice,
                    recentLogin: it.recentLogin,
                    stayTime: it.stayTime,
                    photo: it.photo,
                    alertKaKao: it.alertKaKao,
                    alertSms: it.alertSms,
                    alertEmail: it.alertEmail,
                    marketingKaKao: it.marketingKaKao,
                    marketingSms: it.marketingSms,
                    marketingEmail: it.marketingEmail,
                    adminMemo: it.adminMemo
                })))
                break;

            case tabs[2].id:
                setHeader(table_header_activity)
                setView(total.map(it =>({
                    id: it.id,
                    site: it.site,
                    userType: it.userType,
                    userSubscriptionStatus: it.userSubscriptionStatus,
                    name: it.name,
                    age: it.age,
                    gender: it.gender,
                    email: it.email,
                    mobilePhone: it.mobilePhone,
                    city: it.city,
                    address: it.address,
                    testNation:it.testNation,
                    testCity:it.testCity,
                    testDate:it.testDate,
                    testStartTime:it.testStartTime,
                    testEndTime:it.testEndTime,
                    applicationCategory:it.applicationCategory,
                    numberOfTimes:it.numberOfTimes,
                    testSubject:it.testSubject,
                    testGrade:it.testGrade,
                    category1:it.category1,
                    category2:it.category2,
                    category3:it.category3,
                    examName:it.examName,
                    detailedDescription:it.detailedDescription,
                    departureLanguage:it.departureLanguage,
                    arrivalLanguage:it.arrivalLanguage,
                    isChoice:it.isChoice,
                    isShort:it.isShort,
                    isLong:it.isLong,
                    applicationStartDate:it.applicationStartDate,
                    applicationEndDate:it.applicationEndDate,
                    applicationStatus:it.applicationStatus,
                    examStatus:it.examStatus,
                    candidateStatus:it.candidateStatus,
                    announceDate:it.announceDate,
                    announceTime:it.announceTime,
                    examResults:it.examResults,
                    scoredPoints:it.scoredPoints,
                    feedbackStatus:it.feedbackStatus,
                    feedbackCompleteDate:it.feedbackCompleteDate,
                    certificate:it.certificate,
                    adminMemo: it.adminMemo
                })))
                break;

            case tabs[3].id:
                setHeader(table_header_transaction)
                setView(total.map(it =>({
                    id: it.id,
                    site: it.site,
                    userType: it.userType,
                    userSubscriptionStatus: it.userSubscriptionStatus,
                    name: it.name,
                    age: it.age,
                    gender: it.gender,
                    email: it.email,
                    mobilePhone: it.mobilePhone,
                    city: it.city,
                    address: it.address,
                    groupStatus: it.groupStatus,
                    groupName: it.groupName,
                    joinDate: it.joinDate,
                    joinChannel: it.joinChannel,
                    firstAccessDevice: it.firstAccessDevice,
                    recentLogin: it.recentLogin,
                    stayTime: it.stayTime,
                    photo: it.photo,
                    alertKaKao: it.alertKaKao,
                    alertSms: it.alertSms,
                    alertEmail: it.alertEmail,
                    paymentDate: it.paymentDate,
                    paymentDetails: it.paymentDetails,
                    used: it.used,
                    discount: it.discount,
                    discountDescription: it.discountDescription,
                    paymentAmount: it.paymentAmount,
                    paymentMethod: it.paymentMethod,
                    availablePoints: it.availablePoints,
                    refundStatus: it.refundStatus,
                    adminMemo: it.adminMemo
                })))

                break;

            case tabs[4].id:
                setHeader(table_header_ask)
                setView(total.map(it =>({
                    id: it.id,
                    site: it.site,
                    userType: it.userType,
                    userSubscriptionStatus: it.userSubscriptionStatus,
                    name: it.name,
                    age: it.age,
                    gender: it.gender,
                    email: it.email,
                    mobilePhone: it.mobilePhone,
                    city: it.city,
                    address: it.address,
                    groupStatus: it.groupStatus,
                    groupName: it.groupName,
                    joinDate: it.joinDate,
                    joinChannel: it.joinChannel,
                    firstAccessDevice: it.firstAccessDevice,
                    recentLogin: it.recentLogin,
                    stayTime: it.stayTime,
                    photo: it.photo,
                    alertKaKao: it.alertKaKao,
                    alertSms: it.alertSms,
                    alertEmail: it.alertEmail,
                    consultationDate: it.consultationDate,
                    consultationCompleteDate: it.consultationCompleteDate,
                    consultationStatus: it.consultationStatus,
                    inquiryCategory: it.inquiryCategory,
                    answerCategory: it.answerCategory,
                    answerer: it.answerer,
                    inquiryTitle: it.inquiryTitle,
                    inquiryContents: it.inquiryContents,
                    attachedFile: it.attachedFile,
                    adminMemo: it.adminMemo
                })))
                break;

            default:
                setHeader(table_header_all)
                setView(total)
        }
    }

    const toggleFilter = () => {
        document.getElementsByClassName(styles.filtersContainer).item(0).classList.toggle("hide")
    }

    useEffect(() => {
        differTable("all");
        search()
    }, []);

    const search = () => {
        setView(total.filter(it => {

            if (!(meta && it.site === "메타번역")
                && !(exam && it.site === "시험")
                && !(doc && it.site === "문서")) return false;

            if (userType !== ALL && userType + L_USER !== it.userType) return false;
            if (subscription !== ALL && subscription + L_SUBSCRIPTION !== it.userSubscriptionStatus) return false;

            if (!(self && it.joinChannel === "본인인증")
                && !(kakao && it.joinChannel === "카카오")
                && !(naver && it.joinChannel === "네이버")
                && !(google && it.joinChannel === "구글")) return false;

            if ((kakao_alert && !it.alertKaKao)
                && (email_alert && !it.alertEmail)
                && (sms_alert && !it.alertSms)) return false;

            if ((kakao_marketing && !it.marketingKaKao)
                && (email_marketing && !it.marketingEmail)
                && (sms_marketing && !it.marketingSms)) return false;

            if (!(seoul && (it.testCity + it.testNation).includes("서울"))
                && !(gyeonggi && (it.testCity + it.testNation).includes("경기도"))
                && !(busan && (it.testCity + it.testNation).includes("부산"))
                && !(daegu && (it.testCity + it.testNation).includes("대구"))
                && !(gangwon && (it.testCity + it.testNation).includes("강원"))
                && !(chungcheong && (it.testCity + it.testNation).includes("충청도"))
                && !(jeolla && (it.testCity + it.testNation).includes("전라도"))
                && !(gyeongsang && (it.testCity + it.testNation).includes("경상도"))
                && !(others && (it.testCity + it.testNation).includes("그 외"))
                && !(usa && (it.testCity + it.testNation).includes("미국"))
                && !(europe && (it.testCity + it.testNation).includes("유럽"))
                && !(china && (it.testCity + it.testNation).includes("중국"))
                && !(overseas && (it.testCity + it.testNation).includes("그 외 해외"))) return false;

            if ((primary && it.applicationCategory === "정시")
                && (secondary && it.applicationCategory === "차시")
            ) return false

            if (testSubject !== ALL && testSubject !== it.testSubject) return false;
            if (testDegree !== ALL && testDegree !== it.testGrade) return false;
            if (examSubject !== ALL && examSubject !== it.category1) return false;
            if (category !== ALL && category !== it.category2) return false;
            if (boundary !== ALL && boundary !== it.category3) return false;

            if ((passed && it.examResults)
                && (nonPassed && !it.examResults)) return false;

            return true;
        }))
    }
    const initialize = () => {
        setMeta(true)
        setExam(true)
        setDoc(true)

        setUserType(ALL)
        setSubscription(ALL)

        setSelf(true)
        setKakao(true)
        setNaver(true)
        setGoogle(true)

        set_sms_alert(true)
        set_kakao_alert(true)
        set_email_alert(true)

        set_sms_marketing(true)
        set_kakao_marketing(true)
        set_email_marketing(true)

        setSeoul(true)
        setGyeonggi(true)
        setBusan(true)
        setDaegu(true)
        setGangwon(true)
        setChungcheong(true)
        setJeolla(true)
        setGyeongsang(true)
        setOthers(true)
        setUsa(true)
        setEurope(true)
        setChina(true)
        setOverseas(true)

        setPrimary(true)
        setSecondary(true)

        setTestSubject(ALL)
        setTestDegree(ALL)
        setExamSubject(ALL)
        setCategory(ALL)
        setBoundary(ALL)


        setPassed(true)
        setNonPassed(true)

        search()
    }

    return (
        <div className={styles.pageContainer}>
            <main className={styles.mainContent}>
                <h1 className={styles.pageTitle}>회원 관리</h1>
                <div className={styles.tabsContainer}>
                    {tabs.map((it) =>
                        <button className={styles.tab} onClick={() => {differTable(it.id)
                        }} id={it.id}>{it.label}</button>
                    )}
                    <button className={styles.hideButton} onClick={toggleFilter}>숨기기</button>

                </div>
                <div className={styles.divider}/>
                <h2 className={styles.sectionTitle}>검색 조건</h2>
                <div className={styles.filtersContainer}>
                    {searchFilters.map((filter) => (
                        <Filter
                            key={filter.label}
                            label={filter.label}
                            options={filter.options}
                            additionalSelects={filter.additionalSelects}
                        />
                    ))}
                </div>
                <div className={styles.actionButtons}>
                    <button className={styles.actionButton}>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32a42da201634d63a2618e6479073a97b30ffc9873e39a522dc1562601945534?placeholderIfAbsent=true&apiKey=57ce1e6c5ff44d3ea8eda8a1d09f483d"
                            alt="" className={styles.buttonIcon}
                        />
                        엑셀 다운로드
                    </button>
                    <button className={styles.actionButton} onClick={initialize}>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/024bf6db325fa06769c3f0d11036f930c195b3749898408ff5c1920d31c0525e?placeholderIfAbsent=true&apiKey=57ce1e6c5ff44d3ea8eda8a1d09f483d"
                            alt="" className={styles.buttonIcon}/>
                        초기화
                    </button>
                    <button className={styles.actionButton} onClick={search}>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d52154b121ec9d0f349eeee64a6b10c0a5e21d33ae2217883ad30b388af7b2?placeholderIfAbsent=true&apiKey=57ce1e6c5ff44d3ea8eda8a1d09f483d"
                            alt="" className={styles.buttonIcon}/>
                        검색
                    </button>
                </div>
                <div>

                </div>
                <div className={styles.tableContainer}>
                    <Table data={view} header={header} to={USER.url}/>
                </div>
            </main>
        </div>
    )
}