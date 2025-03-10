import styles from "./User.module.css"
import Filter from "../../component/main/Filter";
import {useContext, useEffect, useState} from "react";
import Table from "../../component/main/Table";
import {
    ALL,
    ALL_LABEL, Const,
    L_SUBSCRIPTION, L_USER
} from "../../component/const/Const";
import {tabs} from "../../component/const/tabs";
import {SearchContext} from "../../component/context/SearchContext";
import {useParams} from "react-router-dom";
import {tableHeader} from "../../component/const/tableHeader";
import {table} from "../../component/const/table";
import {DumiData} from "../../component/const/DumiData";

export default function User() {

    const site = useParams().site

    const {searchFilters,
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

        testSubject, testDegree, examSubject, category, boundary, passed, nonPassed,
        setTestSubject, setTestDegree, setExamSubject, setCategory, setBoundary, setPassed, setNonPassed,

        testType,

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
    } = useContext(SearchContext)

    const [total, setTotal] = useState(DumiData[site]);
    const [searchResult, setSearchResult] = useState([])
    const [view, setView] = useState([]);

    const [header, setHeader] = useState([])
    const [tabId, setTabId] = useState(ALL)

    const differTable = () => {
        Array.from(document.getElementsByClassName(styles.tab)).forEach(it => {
            if (it.id !== tabId) it.classList.remove(styles.tabActive)
            if (it.id === tabId && !it.classList.contains(styles.tabActive)) it.classList.add(styles.tabActive)
        })

        setHeader(tableHeader[site][tabId])
        setView(searchResult.map(item => Object.fromEntries(
                table[site][tabId].map(key => [key, item[key]])
            )))
        console.log("searchResult",searchResult)
    }

    const toggleFilter = () => {
        document.getElementsByClassName(styles.filtersContainer).item(0).classList.toggle("hide")
    }

    const search = () => {
        setSearchResult(total.filter(it => {

            if (site === "user") {
                if (!(meta && it.site === siteTypes[0].label)
                    && !(exam && it.site === siteTypes[1].label)
                    && !(doc && it.site === siteTypes[2].label)) return false;

                if (userType !== ALL_LABEL && userType + L_USER !== it.userType) return false;
                if (subscription !== ALL_LABEL && subscription + L_SUBSCRIPTION !== it.userSubscriptionStatus) return false;

                if (!(self && it.joinChannel === joinPaths[0].label)
                    && !(kakao && it.joinChannel === joinPaths[1].label)
                    && !(naver && it.joinChannel === joinPaths[2].label)
                    && !(google && it.joinChannel === joinPaths[3].label)) return false;

                if ((kakao_alert && !it.alertKaKao)
                    && (email_alert && !it.alertEmail)
                    && (sms_alert && !it.alertSms)) return false;

                if ((kakao_marketing && !it.marketingKaKao)
                    && (email_marketing && !it.marketingEmail)
                    && (sms_marketing && !it.marketingSms)) return false;

                if (!(seoul && (it.testCity + it.testNation).includes(regions[0].label))
                    && !(gyeonggi && (it.testCity + it.testNation).includes(regions[1].label))
                    && !(busan && (it.testCity + it.testNation).includes(regions[2].label))
                    && !(daegu && (it.testCity + it.testNation).includes(regions[3].label))
                    && !(gangwon && (it.testCity + it.testNation).includes(regions[4].label))
                    && !(chungcheong && (it.testCity + it.testNation).includes(regions[5].label))
                    && !(jeolla && (it.testCity + it.testNation).includes(regions[6].label))
                    && !(gyeongsang && (it.testCity + it.testNation).includes(regions[7].label))
                    && !(others && (it.testCity + it.testNation).includes(regions[8].label))
                    && !(usa && (it.testCity + it.testNation).includes(regions[9].label))
                    && !(europe && (it.testCity + it.testNation).includes(regions[10].label))
                    && !(china && (it.testCity + it.testNation).includes(regions[11].label))
                    && !(overseas && (it.testCity + it.testNation).includes(regions[12].label))) return false;

                if ((primary && it.applicationCategory === "정시")
                    && (secondary && it.applicationCategory === "차시")
                ) return false

                if (testSubject !== ALL_LABEL && testSubject !== it.testSubject) return false;
                if (testDegree !== ALL_LABEL && testDegree !== it.testGrade) return false;
                if (examSubject !== ALL_LABEL && examSubject !== it.category1) return false;
                if (category !== ALL_LABEL && category !== it.category2) return false;
                if (boundary !== ALL_LABEL && boundary !== it.category3) return false;

                if ((passed && it.examResults)
                    && (nonPassed && !it.examResults)) return false;
            } else if (site === "expert") {

                if (!(meta && it.site === siteTypes[0].label)
                    && !(exam && it.site === siteTypes[1].label)
                    && !(doc && it.site === siteTypes[2].label)) return false;


                if (expertStatus !== ALL_LABEL && expertStatus + L_USER !== it.expertStatus) return false;
                if (expertRequest !== ALL_LABEL && expertRequest !== it.userSubscriptionStatus) return false;

                if (!(question && it.expertServiceType === serviceType[0].label)
                    && !(grading && it.expertServiceType === serviceType[1].label)
                    && !(docWriting && it.expertServiceType === serviceType[2].label)
                    && !(inspect && it.expertServiceType === serviceType[3].label)
                    && !(face && it.expertServiceType === serviceType[4].label)
                    && !(call && it.expertServiceType === serviceType[5].label)
                    && !(docEdit && it.expertServiceType === serviceType[6].label)
                ) return false;

                if (
                    !(weekdays && it.serviceTime === serviceTime[1].label)
                    && !(weekdaysAM && it.serviceTime === serviceTime[3].label)
                    && !(weekdaysPM && it.serviceTime === serviceTime[4].label)
                    && !(weekend && it.serviceTime === serviceTime[2].label)
                    && !(everyTime && it.serviceTime === serviceTime[0].label)
                    && !(emergency && it.serviceTime === serviceTime[5].label)) return false;


                if (!(levelA && it.expertLevel === level[0].label)
                    && !(levelB && it.expertLevel === level[1].label)
                    && !(levelC && it.expertLevel === level[2].label)
                    && !(levelD && it.expertLevel === level[3].label)) return false;

                if (!(seoul && (it.testCity + it.testNation).includes(regions[0].label))
                    && !(gyeonggi && (it.testCity + it.testNation).includes(regions[1].label))
                    && !(busan && (it.testCity + it.testNation).includes(regions[2].label))
                    && !(daegu && (it.testCity + it.testNation).includes(regions[3].label))
                    && !(gangwon && (it.testCity + it.testNation).includes(regions[4].label))
                    && !(chungcheong && (it.testCity + it.testNation).includes(regions[5].label))
                    && !(jeolla && (it.testCity + it.testNation).includes(regions[6].label))
                    && !(gyeongsang && (it.testCity + it.testNation).includes(regions[7].label))
                    && !(others && (it.testCity + it.testNation).includes(regions[8].label))
                    && !(usa && (it.testCity + it.testNation).includes(regions[9].label))
                    && !(europe && (it.testCity + it.testNation).includes(regions[10].label))
                    && !(china && (it.testCity + it.testNation).includes(regions[11].label))
                    && !(overseas && (it.testCity + it.testNation).includes(regions[12].label))) return false;


                if (!(forSubmit && it.purpose === purpose[0].label)
                    && !(forTesting && it.purpose === purpose[1].label)
                    && !(testType && it.purpose === purpose[2].label)
                    && !(base && it.purpose === purpose[3].label)) return false


                if (categoryBig !== ALL_LABEL && categoryBig !== it.categoryB) return false;
                if (categoryMiddle !== ALL_LABEL && categoryMiddle !== it.categoryM) return false;
                if (categorySmall !== ALL_LABEL && categorySmall !== it.categoryS) return false;

                if (!(settled && it.settleStatus === settleStatus[0].label)
                    && !(nonSettled && it.settleStatus === settleStatus[1].label)
                    && !(settleDeclined && it.settleStatus === settleStatus[2].label)
                ) return false;

                if (!(pri && it.priority === priority[0].label)
                    && !(sec && it.priority === priority[1].label)
                    && !(tri && it.priority === priority[2].label)
                    && !(quad && it.priority === priority[3].label)
                ) return false
            }
            else if(site==="test"){

                if (!(seoul && (it.testCity + it.testNation).includes(regions[0].label))
                    && !(gyeonggi && (it.testCity + it.testNation).includes(regions[1].label))
                    && !(busan && (it.testCity + it.testNation).includes(regions[2].label))
                    && !(daegu && (it.testCity + it.testNation).includes(regions[3].label))
                    && !(gangwon && (it.testCity + it.testNation).includes(regions[4].label))
                    && !(chungcheong && (it.testCity + it.testNation).includes(regions[5].label))
                    && !(jeolla && (it.testCity + it.testNation).includes(regions[6].label))
                    && !(gyeongsang && (it.testCity + it.testNation).includes(regions[7].label))
                    && !(others && (it.testCity + it.testNation).includes(regions[8].label))
                    && !(usa && (it.testCity + it.testNation).includes(regions[9].label))
                    && !(europe && (it.testCity + it.testNation).includes(regions[10].label))
                    && !(china && (it.testCity + it.testNation).includes(regions[11].label))
                    && !(overseas && (it.testCity + it.testNation).includes(regions[12].label))) return false;

                if(!(isRegular && it.applicationCategory !== admissionType[0].label)
                    && !(isEarly && it.applicationCategory !== admissionType[1].label))return false;

                if(year!==ALL_LABEL && year !== it.year) return false;
                if(round!==ALL_LABEL && round !== it.round) return false;

                if(appliStatus !==ALL_LABEL && appliStatus!== it.appliStatus )return false;
                if(submitStatus !==ALL_LABEL && submitStatus!== it.submittingStatus )return false;
                if(testingStatus !==ALL_LABEL && testingStatus!== it.testingStatus )return false;
                if(gradingStatus !==ALL_LABEL && gradingStatus!== it.gradingStatus )return false;

                if(searching !==""&& !it[searchAttribute].toString().includes(searching)) return false;
            }
            return true;
        }))

        differTable()
    }

    useEffect(() => {
        search()
    }, [tabId, site]);

    useEffect(() => {
        // searchResult가 변경될 때마다 실행
        if (searchResult.length > 0) {
            // searchResult를 사용하는 로직
            console.log('searchResult:', searchResult);
            differTable()
        }
    }, [searchResult]);
    useEffect(() => {
        // searchResult가 변경될 때마다 실행
        if (view.length > 0) {
            // searchResult를 사용하는 로직
            console.log('view:', view);
        }
    }, [view]);

    useEffect(() => {
        console.log("site: ",site)
        setTotal(DumiData[site])
        console.log("Dumi: ",DumiData[site])
    }, [site]);

    useEffect(() => {
        console.log("total: ",total)
        search()
    }, [total]);
    const initialize = () => {

        setMeta(true)
        setExam(true)
        setDoc(true)

        setUserType(ALL_LABEL)
        setSubscription(ALL_LABEL)

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

        setTestSubject(ALL_LABEL)
        setTestDegree(ALL_LABEL)
        setExamSubject(ALL_LABEL)
        setCategory(ALL_LABEL)
        setBoundary(ALL_LABEL)


        setPassed(true)
        setNonPassed(true)

        search()
    }


    return (
        <div className={styles.pageContainer}>
            <main className={styles.mainContent}>
                <h1 className={styles.pageTitle}>{Const[site.toUpperCase()].title}</h1>
                <div className={styles.tabsContainer}>
                    {tabs[site].map((it, idx) => <button key={idx.toString()+it.label} className={styles.tab}
                        onClick={() => {setTabId(it.id)}} id={it.id}>{it.label}</button>
                    )}
                    <button className={styles.hideButton} onClick={toggleFilter}>숨기기</button>

                </div>
                <div className={styles.divider}/>
                <h2 className={styles.sectionTitle}>검색 조건</h2>
                <div className={styles.filtersContainer}>
                    {searchFilters[site]?.map((filter) => (
                        <Filter
                            key={filter.label}
                            label={filter.label}
                            options={filter.options}
                            additionalSelects={filter.additionalSelects}
                            search={filter.search}
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
                    <Table data={view} header={header} to={site}/>
                </div>
            </main>
        </div>
    )
}