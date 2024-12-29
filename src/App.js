import './App.css';
import {
    BrowserRouter as Router, Navigate, Route, Routes,
} from "react-router-dom";
import {
    LOGIN,
    Const,
    ALL_LABEL,
    D_USER_TYPE,
    D_SUBSCRIPTION,
    D_TEST_SUBJECT,
    D_TEST_DEGREE,
    D_EXAM_SUBJECT,
    D_CATEGORY,
    D_BOUNDARY,
    D_EXPERT_STATUS,
    D_EXPERT_REQUEST,
    D_EXPERT_CATE_B,
    D_EXPERT_CATE_M,
    D_EXPERT_CATE_S,
    D_TEST_ADMIS_YEAR,
    D_TEST_ADMIS_ROUND, D_TEST_GRADE_STAT, D_TEST_STAT, D_TEST_SUBMIT_STAT, D_TEST_APPLIC_STAT
} from "./component/const/Const";

import Sidebar from "./component/sidebar/Sidebar";
import Login from "./page/Login/Login";
import User from "./page/User/User";
import PrivateRoute from "./component/const/PrivateRoute";
import UserDetail from "./page/User/Detail/UserDetail";
import {SearchContext} from "./component/context/SearchContext";
import {useState} from "react";
import {tabs} from "./component/const/tabs";
import {table} from "./component/const/table";

export default function App() {

    // user

    // 사이트별 필터 데이터
    const [meta, setMeta] = useState(true);
    const [exam, setExam] = useState(true);
    const [doc, setDoc] = useState(true);

    const [userType, setUserType] = useState(ALL_LABEL);
    const [subscription, setSubscription] = useState(ALL_LABEL);

    const siteTypes = [
        {label: '메타번역', value: meta, set: setMeta},
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

    const [testSubject, setTestSubject] = useState(ALL_LABEL);
    const [testDegree, setTestDegree] = useState(ALL_LABEL);
    const [examSubject, setExamSubject] = useState(ALL_LABEL);
    const [category, setCategory] = useState(ALL_LABEL);
    const [boundary, setBoundary] = useState(ALL_LABEL);

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

    // expert

    // 전문가 분류 필터 데이터
    const [expertStatus, setExpertStatus] = useState(ALL_LABEL);
    const [expertRequest, setExpertRequest] = useState(ALL_LABEL);

    // 서비스 가능 유형 필터 데이터
    const [question, setQuestion] = useState(true);
    const [grading, setGrading] = useState(true);
    const [docWriting, setDocWriting] = useState(true);
    const [inspect, setInspect] = useState(true);
    const [face, setFace] = useState(true)
    const [call, setCall] = useState(true);
    const [docEdit, setDocEdit] = useState(true)

    const serviceType = [
        {label: '시험 출제', value: question, set: setQuestion},
        {label: '시험 채점', value: grading, set: setGrading},
        {label: '문서 작성', value: docWriting, set: setDocWriting},
        {label: '감수', value: inspect, set: setInspect},
        {label: '대면', value: face, set: setFace},
        {label: '전화(화상)', value: call, set: setCall},
        {label: '문서 단순 편집', value: docEdit, set: setDocEdit},
    ];

    // 서비스 가능 시간별 필터 데이터
    const [everyTime, set_everyTime] = useState(true);
    const [weekdays, set_weekdays] = useState(true);
    const [weekend, set_weekend] = useState(true);
    const [weekdaysAM, setWeekdaysAM] = useState(true);
    const [weekdaysPM, setWeekdaysPM] = useState(true);
    const [emergency, setEmergency] = useState(true);

    const serviceTime = [
        {label: '언제든지', value: everyTime, set: set_everyTime},
        {label: '평일', value: weekdays, set: set_weekdays},
        {label: '주말', value: weekend, set: set_weekend},
        {label: '평일 오전', value: weekdaysAM, set: setWeekdaysAM},
        {label: '평일 오후', value: weekdaysPM, set: setWeekdaysPM},
        {label: '긴급', value: emergency, set: setEmergency}
    ];

    // 전문가 레벨별 필터 데이터
    const [levelA, setLevelA] = useState(true);
    const [levelB, setLevelB] = useState(true);
    const [levelC, setLevelC] = useState(true);
    const [levelD, setLevelD] = useState(true);

    const level = [
        {label: 'A', value: levelA, set: setLevelA},
        {label: 'B', value: levelB, set: setLevelB},
        {label: 'C', value: levelC, set: setLevelC},
        {label: 'D', value: levelD, set: setLevelD},
    ];

    // 전문 분야별 필터 데이터
    const [categoryBig, setCategoryBig] = useState(ALL_LABEL);
    const [categoryMiddle, setCategoryMiddle] = useState(ALL_LABEL);
    const [categorySmall, setCategorySmall] = useState(ALL_LABEL);

    // 우선 순위별 필터 데이터
    const [pri, setPri] = useState(true);
    const [sec, setSec] = useState(true);
    const [tri, setTri] = useState(true);
    const [quad, setQuad] = useState(true);

    const priority = [
        {label: 1, value: pri, set: setPri},
        {label: 2, value: sec, set: setSec},
        {label: 3, value: tri, set: setTri},
        {label: 4, value: quad, set: setQuad}
    ]

    // 시험 정보별 필터 데이터
    const [forSubmit, setForSubmit] = useState(true);
    const [forTesting, setForTesting] = useState(true);
    const [forTestType, setForTestType] = useState(true);
    const [base, setBase] = useState(true)

    const purpose = [
        {label: '응시용', value: forSubmit, set: setForSubmit},
        {label: '연습용', value: forTesting, set: setForTesting},
        {label: '시험 유형', value: forTestType, set: setForTestType},
        {label: '기본 문제', value: base, set: setBase}
    ]

    //정산 상태별 필터 데이터
    const [settled, setSettled] = useState(true)
    const [nonSettled, setNonSettled] = useState(true)
    const [settleDeclined, setSettleDeclined] = useState(true)

    const settleStatus = [
        {label: '정산 전', value: nonSettled, set: setNonSettled},
        {label: '정산 완료', value: settled, set: setSettled},
        {label: '정산 취소', value: settleDeclined, set: setSettleDeclined},
    ]

    // test

    // 접수 구분별 필터 데이터
    const [isRegular, setIsRegular] = useState(true);
    const [isEarly, setIsEarly] = useState(true);

    const admissionType =[
        {label: '정시', value: isRegular, set: setIsRegular},
        {label: '차시', value: isEarly, set: setIsEarly},
    ]

    const [year, setYear] = useState(ALL_LABEL);
    const [round, setRound] = useState(ALL_LABEL);

    const [appliStatus, setAppliStatus] = useState(ALL_LABEL)
    const [submitStatus, setSubmitStatus] = useState(ALL_LABEL)
    const [testingStatus, setTestingStatus] = useState(ALL_LABEL)
    const [gradingStatus, setGradingStatus] = useState(ALL_LABEL)

    const [searchAttribute, setSearchAttribute] = useState("id")
    const [searching, setSearching] = useState("")
    // grading

    // article

    // support

    // site

    // category

    // transaction

    // admin



    // 검색 필터 데이터
    const searchFilters = {
        user: [
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
                    {label: "영역", options: D_BOUNDARY, value: boundary, set: setBoundary}]
            },
            {label: "시험 결과", options: testResult}],
        expert: [
            {label: "사이트 구분", options: siteTypes, additionalSelects: [
                {label: "전문가 승인 상태", options: D_EXPERT_STATUS, value: expertStatus, set: setExpertStatus},
                {label: "전문가 요청", options: D_EXPERT_REQUEST, value: expertRequest, set: setExpertRequest}]},
            {label: "서비스 가능 유형", options: serviceType},
            {label: "서비스 가능 시간", options: serviceTime},
            {label: "전문 분야", additionalSelects: [
                {label: "카테고리(대)", options: D_EXPERT_CATE_B, value: categoryBig, set: setCategoryBig},
                    {label: "카테고리(중)", options: D_EXPERT_CATE_M, value: categoryMiddle, set: setCategoryMiddle},
                    {label: "카테고리(소)", options: D_EXPERT_CATE_S, value: categorySmall, set: setCategorySmall}]
            },
            {label: "전문가 레벨", options: level},
            {label: "우선 순위", options: priority},
            {label: "지역", options: regions},
            {label: "출제 목적", options: purpose},
            {label: "정산 상태", options: settleStatus}],
        test: [
            {label: "지역", options: regions},
            {label: "접수 구분", options: admissionType, additionalSelects:[
                    {label:"년도", options: D_TEST_ADMIS_YEAR, value: year, set:setYear},
                    {label:"차수", options: D_TEST_ADMIS_ROUND, value: round, set:setRound},]},
            {label: "텍스트 검색", additionalSelects: [
                    {label:"검색 옵션", options: table.test.all, value: searchAttribute, set:setSearchAttribute}],
                search: {label: "검색어 입력", value:searching, set:setSearching}},
            {label: "상태", additionalSelects: [
                    {label:"접수 상태", options:D_TEST_APPLIC_STAT, value: appliStatus, set: setAppliStatus},
                    {label:"출제 상태", options:D_TEST_SUBMIT_STAT, value: submitStatus, set: setSubmitStatus},
                    {label:"시험 상태", options:D_TEST_STAT, value: testingStatus, set: setTestingStatus},
                    {label:"채점 상태", options:D_TEST_GRADE_STAT, value: gradingStatus, set: setGradingStatus},
                ]},
        ],
        grading: [

        ],
        article: [

        ],
        support: [

        ],
        site: [

        ],
        category: [

        ],
        transaction: [

        ],
        admin: [

        ],
    };


    return (
        <SearchContext.Provider value={{
            searchFilters,

            meta, exam, doc,
            setMeta, setExam, setDoc,
            siteTypes,

            userType, subscription,
            setUserType, setSubscription,

            self, kakao, naver, google,
            setSelf, setKakao, setNaver, setGoogle,

            joinPaths,

            sms_alert, kakao_alert, email_alert,
            set_sms_alert, set_kakao_alert, set_email_alert,

            sms_marketing, kakao_marketing, email_marketing,
            set_sms_marketing, set_kakao_marketing, set_email_marketing,

            seoul, gyeonggi, busan, daegu, gangwon, chungcheong, jeolla, gyeongsang, others, usa, europe, china, overseas,
            setSeoul, setGyeonggi, setBusan, setDaegu, setGangwon, setChungcheong, setJeolla, setGyeongsang, setOthers, setUsa, setEurope, setChina, setOverseas,

            regions,

            primary, secondary,
            setPrimary, setSecondary,

            testSubject, testDegree, examSubject, category, boundary,
            setTestSubject, setTestDegree, setExamSubject, setCategory, setBoundary,

            testType,

            passed, nonPassed,
            setPassed, setNonPassed,

            testResult,

            expertStatus, expertRequest,
            setExpertStatus, setExpertRequest,

            question, grading, docWriting, inspect, face, call, docEdit,
            setQuestion, setGrading, setDocWriting, setInspect, setFace, setCall, setDocEdit,

            serviceType,

            everyTime, weekdays, weekend, weekdaysAM, weekdaysPM, emergency,
            set_everyTime, set_weekdays, set_weekend, setWeekdaysAM, setWeekdaysPM, setEmergency,

            serviceTime,

            levelA, levelB, levelC, levelD,
            setLevelA, setLevelB, setLevelC, setLevelD,

            level,

            categoryBig, categoryMiddle, categorySmall,
            setCategoryBig, setCategoryMiddle, setCategorySmall,

            pri, sec, tri, quad,
            setPri, setSec, setTri, setQuad,

            priority,

            forSubmit, forTesting, forTestType, base,
            setForSubmit, setForTesting, setForTestType, setBase,

            purpose,

            settled, nonSettled, settleDeclined,
            setSettled, setNonSettled, setSettleDeclined,
            settleStatus,


            isRegular, setIsRegular,
            isEarly, setIsEarly,

            admissionType,

            year, setYear,
            round, setRound,

            appliStatus, setAppliStatus,
            submitStatus, setSubmitStatus,
            testingStatus, setTestingStatus,
            gradingStatus, setGradingStatus,

            searching, setSearching,
            searchAttribute, setSearchAttribute,
        }}>
            <Router>
                <Sidebar/>
                <Routes>
                    <Route path={LOGIN} Component={Login}/>
                    <Route element={<PrivateRoute/>}>
                        <Route path="/" element={<Navigate to={Const.USER.url}/>}/>
                        <Route path="/:site" Component={User}/>
                        <Route path="/:site/:id" Component={UserDetail}/>
                    </Route>
                </Routes>
            </Router>
        </SearchContext.Provider>
    )
}
