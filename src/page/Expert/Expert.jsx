import styles from "./Expert.module.css"
import Filter from "../../component/main/Filter";
import {use, useEffect, useState} from "react";
import Table from "../../component/main/Table";
import {
    ALL_LABEL,
    D_BOUNDARY,
    D_CATEGORY,
    D_EXAM_SUBJECT, D_EXPERT_CATE_B, D_EXPERT_CATE_M, D_EXPERT_CATE_S, D_EXPERT_REQUEST, D_EXPERT_STATUS,
    D_SUBSCRIPTION,
    D_TEST_DEGREE, D_TEST_SUBJECT,
    D_USER_TYPE, EXPERT, L_SUBSCRIPTION, L_USER
} from "../../component/const/Const";
import {tabs} from "../../component/const/tabs";

export default function Expert() {

    // 사이트별 필터 데이터
    const [meta, setMeta] = useState(true);
    const [exam, setExam] = useState(true);
    const [doc, setDoc] = useState(true);

    const [expertStatus, setExpertStatus] = useState(ALL_LABEL);
    const [expertRequest, setExpertRequest] = useState(ALL_LABEL);

    const siteTypes = [
        {label: '메타번역', value: meta, set: setMeta},
        {label: '시험', value: exam, set: setExam},
        {label: '문서', value: doc, set: setDoc},
    ];

    // 서비스 가능 유형 필터 데이터
    const [question, setQuestion] = useState(true);
    const [grading, setGrading] = useState(true);
    const [docWritting, setDocWritting] = useState(true);
    const [inspect, setInspect] = useState(true);
    const [face, setFace] = useState(true)
    const [call, setCall] = useState(true);
    const [docEdit, setDocEdit] = useState(true)
    
    const serviceType = [
        {label: '시험 출제', value: question, set: setQuestion},
        {label: '시험 채점', value: grading, set: setGrading},
        {label: '문서 작성', value: docWritting, set: setDocWritting},
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
    const [submit, setSubmit] = useState(true);
    const [testing, setTesting] = useState(true);
    const [testType, setTestType] = useState(true);
    const [base, setBase] = useState(true)

    const purpose = [
        {label: '응시용', value: submit, set: setSubmit},
        {label: '연습용', value: testing, set: setTesting},
        {label: '시험 유형', value: testType, set: setTestType},
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

    // 검색 필터 데이터
    const searchFilters = [
        {label: "사이트 구분", options: siteTypes, additionalSelects: [
                {label: "전문가 승인 상태", options: D_EXPERT_STATUS, value: expertStatus, set: setExpertStatus},
                {label: "전문가 요청", options: D_EXPERT_REQUEST, value: expertRequest, set: setExpertRequest}]
        },
        {label: "서비스 가능 유형", options: serviceType},
        {label: "서비스 가능 시간", options: serviceTime},
        {label: "전문 분야", additionalSelects: [
                {label: "카테고리(대)", options: D_EXPERT_CATE_B, value: categoryBig, set: setCategoryBig},
                {label: "카테고리(중)", options: D_EXPERT_CATE_M, value: categoryMiddle, set: setCategoryMiddle},
                {label: "카테고리(소)", options: D_EXPERT_CATE_S, value: categorySmall, set: setCategorySmall}
            ]},
        {label: "전문가 레벨", options: level},
        {label: "지역", options: regions},
        {label: "출제 목적", options: purpose},
        {label: "정산 상태", options: settleStatus}
    ];

    const [total, setTotal] = useState([
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

        "이력서",
        "전문 분야",
        "서비스 가능 유형",
        "서비스 가능 시간",
        "승인 상태₩승인일",
        "우선순위",
        "전문가 레벨",
        "평점₩리뷰",
        "활동 횟수₩매칭 거절",
        "정산 정보",
        "총 경력",
        "학력",

        "지역",
        "시험일₩시험시간",
        "시험 종목₩시험 등급",
        "검정과목₩분야/영역",
        "시험명₩(세부명)",
        "출발어₩도착어",

        "출제 목적",
        "활동 내역₩활동 수",
        "서비스 완료일₩정산 예정일",

        "정산 금액₩가산 금액",
        "최종 정산액",
        "정산 상태₩정산 완료일",
        "정산 후 잔액",

        "관리자 메모",
    ]
    const table_header_settle =[
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

        "평점₩리뷰",
        "활동 횟수₩매칭 거절",
        "정산 정보",
        "총 경력",
        "학력",

        "지역",
        "접수 구분₩차수",
        "시험 종목₩시험 등급",
        "검정과목₩분야/영역",
        "시험명₩(세부명)",
        "출발어₩도착어",
        "출제 목적",
        "활동 내역₩활동 수",
        "서비스 완료일₩정산 예정일",

        "정산 금액₩가산 금액",
        "최종 정산액",
        "정산 상태₩정산 완료일",
        "정산 후 잔액",

        "관리자 메모",
    ]
    const table_header_expert =[
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

        "이력서",
        "전문 분야",
        "서비스 가능 유형",
        "서비스 가능 시간",
        "승인 상태₩승인일",
        "우선순위",
        "전문가 레벨",
        "평점₩리뷰",
        "활동 횟수₩매칭 거절",
        "정산 정보",
        "총 경력",
        "학력",

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
                setHeader(table_header_expert)
                setView(total.map(it =>({
                    id:it.id,
                    site:it.site,
                    userType:it.userType,
                    userSubscriptionStatus:it.userSubscriptionStatus,
                    name:it.name,
                    age:it.age,
                    gender:it.gender,
                    email:it.email,
                    mobilePhone:it.mobilePhone,
                    city:it.city,
                    address:it.address,
                    groupStatus:it.groupStatus,
                    groupName:it.groupName,
                    joinDate:it.joinDate,
                    joinChannel:it.joinChannel,
                    firstAccessDevice:it.firstAccessDevice,
                    recentLogin:it.recentLogin,
                    stayTime:it.stayTime,
                    photo:it.photo,
                    alertKaKao:it.alertKaKao,
                    alertSms:it.alertSms,
                    alertEmail:it.alertEmail,

                    resume:it.resume,
                    categoryB:it.categoryB,
                    categoryM:it.categoryM,
                    categoryS:it.categoryS,
                    expertServiceType:it.expertServiceType,
                    serviceTime:it.serviceTime,
                    expertStatus:it.expertStatus,
                    priority:it.priority,
                    expertDate:it.expertDate,
                    expertLevel:it.expertLevel,
                    rating:it.rating,
                    reviews:it.reviews,
                    activities:it.activities,
                    matchingDecline:it.matchingDecline,
                    settleBank:it.settleBank,
                    settleAccount:it.settleAccount,
                    settleOwner:it.settleOwner,
                    totalCareer:it.totalCareer,
                    education:it.education,

                    adminMemo:it.adminMemo
                })))
                break;

            case tabs[2].id:
                setHeader(table_header_settle)
                setView(total.map(it =>({
                    id:it.id,
                    site:it.site,
                    userType:it.userType,
                    userSubscriptionStatus:it.userSubscriptionStatus,
                    name:it.name,
                    age:it.age,
                    gender:it.gender,
                    email:it.email,
                    mobilePhone:it.mobilePhone,
                    city:it.city,
                    address:it.address,
                    groupStatus:it.groupStatus,
                    groupName:it.groupName,
                    joinDate:it.joinDate,
                    joinChannel:it.joinChannel,
                    firstAccessDevice:it.firstAccessDevice,
                    recentLogin:it.recentLogin,
                    stayTime:it.stayTime,
                    photo:it.photo,
                    alertKaKao:it.alertKaKao,
                    alertSms:it.alertSms,
                    alertEmail:it.alertEmail,
                    marketingKaKao:it.marketingKaKao,
                    marketingSms:it.marketingSms,
                    marketingEmail:it.marketingEmail,
                    rating:it.rating,
                    reviews:it.reviews,
                    activities:it.activities,
                    matchingDecline:it.matchingDecline,
                    settleBank:it.settleBank,
                    settleAccount:it.settleAccount,
                    settleOwner:it.settleOwner,
                    totalCareer:it.totalCareer,
                    education:it.education,
                    testNation:it.testNation,
                    testCity:it.testCity,
                    applicationCategory:it.applicationCategory,
                    round:it.round,
                    testSubject:it.testSubject,
                    testGrade:it.testGrade,
                    category1:it.category1,
                    category2:it.category2,
                    category3:it.category3,
                    examName:it.examName,
                    detailedDescription:it.detailedDescription,
                    departureLanguage:it.departureLanguage,
                    arrivalLanguage:it.arrivalLanguage,
                    purpose:it.purpose,
                    activityCareer:it.activityCareer,
                    activityCareerCount:it.activityCareerCount,
                    activityDoneDate:it.activityDoneDate,
                    settleDueDate:it.settleDueDate,
                    settlePlaned:it.settlePlaned,
                    settleAddition:it.settleAddition,
                    settleAmount:it.settleAmount,
                    settleStatus:it.settleStatus,
                    settledDate:it.settledDate,
                    unspent:it.unspent,
                    adminMemo:it.adminMemo
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
        differTable(ALL);
        search()
    }, []);

    const search = () => {
        setView(total.filter(it => {

            if (!(meta && it.site === siteTypes[0].label)
                && !(exam && it.site === siteTypes[1].label)
                && !(doc && it.site === siteTypes[2].label)) return false;


            if (expertStatus !== ALL_LABEL && expertStatus + L_USER !== it.expertStatus) return false;
            // if (expertRequest !== ALL && expertRequest !== it.userSubscriptionStatus) return false;

            if (!(question && it.expertServiceType === serviceType[0].label)
                && !(grading && it.expertServiceType === serviceType[1].label)
                && !(docWritting && it.expertServiceType === serviceType[2].label)
                && !(inspect && it.expertServiceType === serviceType[3].label)
                && !(face && it.expertServiceType === serviceType[4].label)
                && !(call && it.expertServiceType === serviceType[5].label)
                && !(docEdit && it.expertServiceType === serviceType[6].label)
            ) return false;

            if (
                !(weekdays && it.serviceTime===serviceTime[1].label)
                && !(weekdaysAM && it.serviceTime===serviceTime[3].label)
                && !(weekdaysPM && it.serviceTime===serviceTime[4].label)
                && !(weekend && it.serviceTime===serviceTime[2].label)
                && !(everyTime && it.serviceTime===serviceTime[0].label)
                && !(emergency && it.serviceTime===serviceTime[5].label)) return false;


            if (!(levelA && it.expertLevel===level[0].label)
                && !(levelB && it.expertLevel===level[1].label)
                && !(levelC && it.expertLevel===level[2].label)
                && !(levelD && it.expertLevel===level[3].label)) return false;

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


            if (!(submit && it.purpose === purpose[0].label)
                && !(testing && it.purpose === purpose[1].label)
                && !(testType && it.purpose === purpose[2].label)
                && !(base && it.purpose === purpose[3].label)) return false


            if (categoryBig !== ALL_LABEL && categoryBig !== it.categoryB) return false;
            if (categoryMiddle !== ALL_LABEL && categoryMiddle !== it.categoryM) return false;
            if (categorySmall !== ALL_LABEL && categorySmall !== it.categoryS) return false;

            console.log(it.settleStatus)

            if (!(settled && it.settleStatus===settleStatus[0].label)
                && !(nonSettled && it.settleStatus===settleStatus[1].label)
                && !(settleDeclined && it.settleStatus===settleStatus[2].label)
            ) return false;


            return true;
        }))
    }
    const initialize = () => {
        setMeta(true)
        setExam(true)
        setDoc(true)

        setExpertStatus(ALL_LABEL)
        setExpertRequest(ALL_LABEL)

        setQuestion(true)
        setGrading(true)

        set_everyTime(true)
        set_weekdays(true)
        set_weekend(true)

        setLevelA(true)
        setLevelB(true)
        setLevelC(true)
        setLevelD(true)

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

        setSubmit(true)
        setTesting(true)
        setTestType(true)
        setBase(true)

        setCategoryBig(ALL_LABEL)
        setCategoryMiddle(ALL_LABEL)
        setCategorySmall(ALL_LABEL)

        setSettled(true)
        setNonSettled(true)
        setSettleDeclined(true)

        search()
    }

    return (
        <div className={styles.pageContainer}>
            <main className={styles.mainContent}>
                <h1 className={styles.pageTitle}>전문가 관리</h1>
                <div className={styles.tabsContainer}>
                    {tabs["expert"].map((it) =>
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
                    <Table data={view} header={header} to={EXPERT.url}/>
                </div>
            </main>
        </div>
    )
}