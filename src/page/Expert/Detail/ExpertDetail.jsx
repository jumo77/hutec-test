import {useParams} from "react-router-dom";

import React, { useState } from 'react';
import styles from './Detail.module.css';
import {FormField} from "./component/FormField";
import {DropdownField} from "./component/DropdownField";
import {DateField} from "./component/DateField";
import {CheckboxField} from "./component/CheckboxField";
import {D_EXPERT_STATUS} from "../../../component/const/Const";

export default function ExpertDetail(){
    let param = useParams()

    const [memberData, setMemberData] = useState({
        basic: {
            expertNumber: "자동 생성",
            siteType: "시험",
            memberType: "정식회원",
            subscriptionStatus: "프리미엄 구독",
            name: "홍길동",
            age: "00",
            birthDate: "YYYYMMDD",
            gender: "남",
            phone: "01012345678",
            email: "abcd@gmail.com",
            verification: "휴대폰",
            nationality: "대한민국",
            address: "서울 강남구 무슨무슨로 0000번길",
            addressDetail: "0000빌딩 0000호",
            isGroup: false,
            groupName: "삼성"
        },
        registration: {
            registrationDate: new Date().toISOString().split('T')[0],
            registrationChannel: "카카오",
            firstDevice: "모바일",
            lastLogin: new Date().toISOString().split('T')[0],
            stayTime: "00:00:00",
            photo: "filename.gif",
            alertKakao: true,
            alertSms: true,
            alertEmail: true,
            marketingKakao: true,
            marketingSms: true,
            marketingEmail: true,
            expertStatus:"",
            expertDate:"",
            level:"A",
            priority:1,
            rating: 4.5,
            reviews: 10,
            activityCount: 44,
            matchingReject: 10
        },
        details: {
            category1: ["카테고리(대)", "카테고리(대)", "카테고리(대)"],
            category2: ["카테고리(대)", "카테고리(대)", "카테고리(대)"],
            category3: ["카테고리(대)", "카테고리(대)", "카테고리(대)"],
            relevantFiles: ["filename.gif", "filename.gif"],
            expertServiceType: [{label: '시험 출제', value: true},
                {label: '시험 채점', value: true},
                {label: '문서 작성', value: true},
                {label: '감수', value: true},
                {label: '대면', value: true},
                {label: '전화(화상)', value: true},
                {label: '문서 단순 편집', value: true}],
            serviceTime: [{label: '서비스 가능 시간', value: true},
                {label: '언제든지', value: true},
                {label: '평일', value: true},
                {label: '주말', value: true},
                {label: '평일 오전', value: true},
                {label: '평일 오후', value: true},
                {label: '긴급 가능', value: true}],
            education:[
                "학교명 학부/ 학과 yyyy.mm.dd ~ yyyy.mm.dd 졸업",
                "학교명 학부/ 학과 yyyy.mm.dd ~ yyyy.mm.dd 졸업",
                "학교명 학부/ 학과 yyyy.mm.dd ~ yyyy.mm.dd 졸업",
                "학교명 학부/ 학과 yyyy.mm.dd ~ yyyy.mm.dd 졸업"
            ],
            career:[
                "회사명 부서 직위 yyyy.mm.dd ~ yyyy.mm.dd ",
                "회사명 부서 직위 yyyy.mm.dd ~ yyyy.mm.dd ",
                "회사명 부서 직위 yyyy.mm.dd ~ yyyy.mm.dd ",
                "회사명 부서 직위 yyyy.mm.dd ~ yyyy.mm.dd ",
                "회사명 부서 직위 yyyy.mm.dd ~ yyyy.mm.dd "
            ],
            careerFiles: ["filename.gif", "filename.gif"],
            foreign:[
                "해외 거주지 거주 이유 yyyy.mm.dd ~ yyyy.mm.dd",
                "해외 거주지 거주 이유 yyyy.mm.dd ~ yyyy.mm.dd",
                "해외 거주지 거주 이유 yyyy.mm.dd ~ yyyy.mm.dd",
            ],
            books:[
                "저서명 출판사 yyyy.mm.dd"
            ],
        },

        activity: {
            activityNumber: "자동 생성",
            serviceType: "시험",
            nation: "대한민국",
            city: "서울",
            examDate: new Date().toISOString().split('T')[0],
            startTime: "hh:mm",
            endTime: "hh:mm",
            registrationType: "정시",
            round: "YY년 00차",
            examSubject: "AITe 번역 전문가",
            examGrade: "전문 1급",
            testSubject: "검정과목",
            field: "검정과목",
            area: "검정과목",
            examName: "시험명 시험명 시험명",
            sourceLanguage: "한국어",
            targetLanguage: "English(US)",
            examType: "시험명 시험명(시험유형)",
            registrationPeriod: "YY.MM.DD - YY.MM.DD",
            registrationStatus: "접수 완료",
            examStatus: "시험 완료",
            testStatus: "응시 완료",
            resultDate: new Date().toISOString().split('T')[0],
            resultTime: "hh:mm",
            autoScore: "60",
            score: "70",
            result: "불합격",
            certificates: {
                certificate: true,
                cardCertificate: true,
                volunteerCertificate: true,
                certified: true
            },
            emergencyContact: "01012345678"
        },
        payment: {
            paymentNumber: "자동 생성",
            paymentDate: new Date().toISOString().split('T')[0],
            paymentContent: "시험응시",
            usageAmount: "100,000",
            benefit: "이벤트 할인",
            benefitAmount: "-10,000",
            paymentAmount: "90,000",
            points: "12,000",
            paymentMethod: "카드결제",
            paymentInfo: {
                card: "OO카드",
                number: "XXXXXX-XXXXXX-XXXXXXXXX"
            }
        },
        refund: {
            refundNumber: "자동 생성",
            requestDate: new Date().toISOString().split('T')[0],
            status: "환불 요청",
            requestAmount: "100,000",
            refundAmount: "90,000",
            refundMethod: "계좌 입금",
            accountInfo: {
                bank: "OO은행",
                account: "XXXXXX-XXX-XXXXXX",
                holder: "홍길동"
            }
        },
        adminMemo: ""
    });

    const handleDataChange = (section, field, value) => {
        setMemberData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const renderFields = (fields, section) => {
        return fields.map((field, index) => {
            if (field.type === 'date') {
                return (
                    <DateField
                        key={`${section}-${index}`}
                        label={field.label}
                        value={memberData[section][field.key]}
                        width={field.width}
                        onChange={(value) => handleDataChange(section, field.key, value)}
                    />
                );
            }
            if (field.type === 'dropdown') {
                return (
                    <DropdownField
                        key={`${section}-${index}`}
                        label={field.label}
                        value={memberData[section][field.key]}
                        width={field.width}
                        options={field.options}
                        onChange={(value) => handleDataChange(section, field.key, value)}
                    />
                );
            }
            if (field.type === 'checkbox') {
                return (
                    <CheckboxField
                        key={`${section}-${index}`}
                        label={field.label}
                        checked={memberData[section][field.key]}
                        width={field.width}
                        onChange={(value) => handleDataChange(section, field.key, value)}
                    />
                );
            }
            return (
                <FormField
                    key={`${section}-${index}`}
                    label={field.label}
                    value={memberData[section][field.key]}
                    width={field.width}
                    onChange={(value) => handleDataChange(section, field.key, value)}
                />
            );
        });
    };

    const basicFields = [
        { label: "전문가 관리 번호", key: "expertNumber", width: "140px" },
        { label: "사이트 구분", key: "siteType", width: "100px" },
        { label: "회원 유형", key: "memberType", width: "98px" },
        { label: "구독 상태", key: "subscriptionStatus", width: "120px" },
        { label: "이름", key: "name", width: "90px" },
        { label: "나이", key: "age", width: "60px" },
        { label: "생년월일", key: "birthDate", width: "84px" },
        { label: "성별", key: "gender", width: "60px" },
        { label: "휴대폰", key: "phone", width: "150px" },
        { label: "이메일", key: "email", width: "180px" },
        { label: "본인 인증", key: "verification", width: "100px" },
        { label: "국적", key: "nationality", width: "120px" },
        { label: "주소", key: "address", width: "180px" },
        { label: "상세 주소", key: "addressDetail", width: "120px" }
    ];

    const registrationFields = [
        { label: "가입일", key: "registrationDate", width: "140px", type: "date" },
        { label: "가입 채널", key: "registrationChannel", width: "100px" },
        { label: "최초접근기기", key: "firstDevice", width: "98px" },
        { label: "최근 로그인", key: "lastLogin", width: "130px", type: "date" },
        { label: "체류시간", key: "stayTime", width: "90px" },
        { label: "사진", key: "photo", width: "150px" },
        { label: "전문가 승인 상태", key: "expertStatus", width: "120px", type: "dropdown", options: D_EXPERT_STATUS},
        { label: "승인일", key: "expertDate", width: "70px", type:"date" },
        { label: "우선순위", key: "priority", width: "90px", type: "dropdown", options:[1,2,3,4] },
        { label: "전문가 레벨", key: "level", width: "90px", type: "dropdown", options:["A","B","C","D"] },
        { label: "평점", key: "rating", width: "70px" },
        { label: "리뷰", key: "reviews", width: "70px" },
        { label: "활동 횟수", key: "activityCount", width: "70px" },
        { label: "매칭 거절", key: "matchingReject", width: "70px" }
    ];

    const detailFields = [
        { label: "", key: "category1", width: "140px" ,type: "dropdown", options:[["카테고리(대)","카테고리(대)","카테고리(대)"],["카테고리(대)","카테고리(대)","카테고리(대)"],["카테고리(대)","카테고리(대)","카테고리(대)"]]},
        { label: "전문분야", key: "category2", width: "140px" ,type: "dropdown", options:[["카테고리(대)","카테고리(대)","카테고리(대)"],["카테고리(대)","카테고리(대)","카테고리(대)"],["카테고리(대)","카테고리(대)","카테고리(대)"]]},
        { label: "", key: "category3", width: "140px" ,type: "dropdown", options:[["카테고리(대)","카테고리(대)","카테고리(대)"],["카테고리(대)","카테고리(대)","카테고리(대)"],["카테고리(대)","카테고리(대)","카테고리(대)"]]},
        { label: "관련 파일", key: "relevantFiles", width: "150px"},
        { label: "서비스 가능 유형", key: "expertServiceType", width: "125px", type: "checkbox"},
        { label: "서비스 가능 시간", key: "serviceTime", width: "125px", type: "checkbox"},
        { label: "학력", key: "education",width: "650px"},
        { label: "경력", key: "career",width: "650px"},
        { label: "관련 파일", key: "careerFiles", width: "150px"},
        { label: "해외 거주 경험", key: "foreign",width: "400px"},
        { label: "저서 및 역서", key: "books",width: "200px"}
    ];

    const activityFields = [
        { label: "서비스 유형", key: "serviceType", width: "100px" },
        { label: "국적", key: "nation", width: "100px" },
        { label: "도시", key: "city", width: "90px" },
        { label: "시험일", key: "examDate", width: "130px", type: "date" },
        { label: "시작시간", key: "startTime", width: "90px" },
        { label: "종료시간", key: "endTime", width: "90px" },
        { label: "접수구분", key: "registrationType", width: "80px" },
        { label: "차수", key: "round", width: "130px" },
        { label: "시험 종목", key: "examSubject", width: "163px" },
        { label: "시험 등급", key: "examGrade", width: "120px" },
        { label: "검정과목", key: "testSubject", width: "180px" },
        { label: "분야", key: "field", width: "180px" },
        { label: "영역", key: "area", width: "180px" },
        { label: "시험명", key: "examName", width: "180px" },
        { label: "출발어", key: "sourceLanguage", width: "120px" },
        { label: "도착어", key: "targetLanguage", width: "120px" },
        { label: "시험 유형", key: "examType", width: "160px" }
    ];

    const paymentFields = [
        { label: "결제 관리 번호", key: "paymentNumber", width: "140px" },
        { label: "결제일", key: "paymentDate", width: "130px", type: "date" },
        { label: "결제 내용", key: "paymentContent", width: "130px" },
        { label: "이용 금액", key: "usageAmount", width: "100px" },
        { label: "혜택", key: "benefit", width: "120px", type: "dropdown", options: ["이벤트 할인", "쿠폰", "포인트"] },
        { label: "혜택 금액", key: "benefitAmount", width: "100px" },
        { label: "결제 금액", key: "paymentAmount", width: "100px" },
        { label: "보유포인트", key: "points", width: "100px" },
        { label: "결제 방법", key: "paymentMethod", width: "100px" }
    ];

    return (
        <div className={styles.container}>
            <main className={styles.content}>
                <header className={styles.header}>
                    <h1 className={styles.title}>전문가 관리</h1>
                    <button className={styles.saveButton} aria-label="저장">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb0601499ee262d95b91e09ec0dd7795b6b6bf61748919fae3ba78e9231a589b?placeholderIfAbsent=true&apiKey=57ce1e6c5ff44d3ea8eda8a1d09f483d"
                            alt="" className={styles.saveIcon}/>
                        <span>저장</span>
                    </button>
                </header>
                <section>
                    <h2 className={styles.sectionTitle}>전문가 정보</h2>
                    <div className={styles.fieldGrid}>
                        {renderFields(basicFields, 'basic')}
                    </div>
                </section>

                <section>
                    <div className={styles.fieldGrid}>
                        {renderFields(registrationFields, 'registration')}
                    </div>
                </section>
                
                <section>
                    <div className={styles.fieldGrid}>
                        {renderFields(detailFields, 'details')}
                    </div>
                </section>

                <section>
                    <h2 className={styles.sectionTitle}>전문가 활동 정보</h2>
                    <div className={styles.fieldGrid}>
                        {renderFields(activityFields, 'activity')}
                    </div>
                </section>

                <section>
                    <h2 className={styles.sectionTitle}>결제 정보</h2>
                    <div className={styles.fieldGrid}>
                        {renderFields(paymentFields, 'payment')}
                    </div>
                </section>

                <section>
                    <h2 className={styles.sectionTitle}>관리자 메모</h2>
                    <textarea
                        className={styles.adminMemo}
                        value={memberData.adminMemo}
                        onChange={(e) => handleDataChange('adminMemo', '', e.target.value)}
                        aria-label="관리자 메모"
                    />
                </section>

            </main>
        </div>
    );
};