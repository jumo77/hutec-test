import React from "react";
import "./table.css";
import {useNavigate, useParams} from "react-router-dom";

export default function Table({data, header, to}) {

    let nav = useNavigate()
    const navigate = (index) => {
        nav('/'+ to + "/" + index)
    }

    const site = useParams().site

    return (
        <table id="all_table">
            <thead>
            <tr>
                {header.map((it, index) => (
                    <th key={it + index.toString()} dangerouslySetInnerHTML={{__html: it.replace("₩", '<br />')}}/>
                ))}
            </tr>
            </thead>
            <tbody>
            {data?.map((d, index) =>
                <tr key={index.toString() + d.id} onClick={() => navigate(index)}>
                    <td>{index + 1}</td>
                    {site === "user" && d.id !== undefined && <td>{d.id}</td>}
                    {site === "user" && d.site !== undefined && <td>{d.site}<br/>{d.userType}</td>}
                    {site === "user" && d.userSubscriptionStatus !== undefined && <td>{d.userSubscriptionStatus}</td>}
                    {site === "user" && d.name !== undefined && <td>{d.name}<br/>{d.age}∙{d.gender}</td>}
                    {site === "user" && d.email !== undefined && <td>{d.email}<br/>{d.mobilePhone}</td>}
                    {site === "user" && d.city !== undefined && <td>{d.city}<br/>{d.address.split(" ")[0]}</td>}
                    {site === "user" && d.groupStatus !== undefined && <td>{d.groupStatus ? d.groupName : ""}</td>}
                    {site === "user" && d.joinDate !== undefined && <td>{d.joinDate}<br/>{d.joinChannel}</td>}
                    {site === "user" && d.firstAccessDevice !== undefined && <td>{d.firstAccessDevice}</td>}
                    {site === "user" && d.recentLogin !== undefined && <td>{d.recentLogin}<br/>{d.stayTime}</td>}
                    {site === "user" && d.photo !== undefined && <td>{d.photo}</td>}
                    {site === "user" && d.alertKaKao !== undefined &&
                        <td>{d.alertKaKao ? "카카오" : null}{d.alertSms && d.alertKaKao ?
                            <br/> : null}{d.alertSms ? "문자" : null}{d.alertSms && d.alertEmail ?
                            <br/> : null}{d.alertEmail ? "이메일" : null}</td>}
                    {site === "user" && d.marketingKaKao !== undefined &&
                        <td>{d.marketingKaKao ? "카카오" : null}{d.marketingSms && d.marketingKaKao ?
                            <br/> : null}{d.marketingSms ? "문자" : null}{d.marketingSms && d.marketingEmail ?
                            <br/> : null}{d.marketingEmail ? "이메일" : null}</td>}
                    {site === "user" && d.activityManagementNumber !== undefined &&
                        <td>{d.activityManagementNumber}</td>}
                    {site === "user" && d.serviceType !== undefined && <td>{d.serviceType}</td>}
                    {site === "user" && d.testNation !== undefined && <td>{d.testNation}<br/>{d.testCity}</td>}
                    {site === "user" && d.testDate !== undefined &&
                        <td>{d.testDate}<br/>{d.testStartTime}~{d.testEndTime}</td>}
                    {site === "user" && d.applicationCategory !== undefined &&
                        <td>{d.applicationCategory}<br/>{d.year}년 {d.round}차</td>}
                    {site === "user" && d.testSubject !== undefined && <td>{d.testSubject}<br/>{d.testGrade}</td>}
                    {site === "user" && d.category1 !== undefined &&
                        <td>{d.category1}<br/>{d.category2}<br/>{d.category3}</td>}
                    {site === "user" && d.examName !== undefined && <td>{d.examName}<br/>{d.detailedDescription}</td>}
                    {site === "user" && d.departureLanguage !== undefined &&
                        <td>{d.departureLanguage}<br/>{d.arrivalLanguage}</td>}
                    {site === "user" && d.isChoice !== undefined &&
                        <td>{d.isChoice ? "객관식" : null}{d.isChoice && d.isShort ?
                            <br/> : null}{d.isShort ? "주관식" : null}{d.isShort && d.isLong ?
                            <br/> : null}{d.isLong ? "서술형" : null}</td>}
                    {site === "user" && d.applicationStartDate !== undefined &&
                        <td>{d.applicationStartDate}~{d.applicationEndDate}<br/>{d.applicationStatus}</td>}
                    {site === "user" && d.examStatus !== undefined && <td>{d.examStatus}<br/>{d.candidateStatus}</td>}
                    {site === "user" && d.announceDate !== undefined && <td>{d.announceDate}<br/>{d.announceTime}</td>}
                    {site === "user" && d.examResults !== undefined && <td>{d.examResults}<br/>{d.scoredPoints}</td>}
                    {site === "user" && d.feedbackStatus !== undefined &&
                        <td>{d.feedbackStatus}<br/>{d.feedbackCompleteDate}</td>}
                    {site === "user" && d.certificate !== undefined && <td>{d.certificate}</td>}
                    {site === "user" && d.paymentDate !== undefined && <td>{d.paymentDate}</td>}
                    {site === "user" && d.paymentDetails !== undefined && <td>{d.paymentDetails}</td>}
                    {site === "user" && d.used !== undefined &&
                        <td>{d.used}<br/>({d.discountDescription}){d.discount}</td>}
                    {site === "user" && d.paymentAmount !== undefined &&
                        <td>{d.paymentAmount}<br/>{d.paymentMethod}</td>}
                    {site === "user" && d.availablePoints !== undefined && <td>{d.availablePoints}</td>}
                    {site === "user" && d.refundStatus !== undefined && <td>{d.refundStatus}{/*todo*/}</td>}
                    {site === "user" && d.consultationDate !== undefined &&
                        <td>{d.consultationDate}<br/>{d.consultationCompleteDate}</td>}
                    {site === "user" && d.consultationStatus !== undefined && <td>{d.consultationStatus}</td>}
                    {site === "user" && d.inquiryCategory !== undefined &&
                        <td>{d.inquiryCategory}<br/>{d.answerCategory}></td>}
                    {site === "user" && d.answerer !== undefined && <td>{d.answerer}</td>}
                    {site === "user" && d.inquiryTitle !== undefined && <td>{d.inquiryTitle}</td>}
                    {site === "user" && d.inquiryContents !== undefined && <td>{d.inquiryContents}</td>}
                    {site === "user" && d.attachedFile !== undefined && <td>{d.attachedFile}</td>}

                    {site === "expert" && d.id !== undefined && <td>{d.id}</td>}
                    {site === "expert" && d.site !== undefined && <td>{d.site}<br/>{d.userType}</td>}
                    {site === "expert" && d.userSubscriptionStatus !== undefined && <td>{d.userSubscriptionStatus}</td>}
                    {site === "expert" && d.name !== undefined && <td>{d.name}<br/>{d.age}∙{d.gender}</td>}
                    {site === "expert" && d.email !== undefined && <td>{d.email}<br/>{d.mobilePhone}</td>}
                    {site === "expert" && d.city !== undefined && <td>{d.city}<br/>{d.address.split(" ")[0]}</td>}
                    {site === "expert" && d.groupStatus !== undefined && <td>{d.groupStatus ? d.groupName : ""}</td>}
                    {site === "expert" && d.joinDate !== undefined && <td>{d.joinDate}<br/>{d.joinChannel}</td>}
                    {site === "expert" && d.firstAccessDevice !== undefined && <td>{d.firstAccessDevice}</td>}
                    {site === "expert" && d.recentLogin !== undefined && <td>{d.recentLogin}<br/>{d.stayTime}</td>}
                    {site === "expert" && d.photo !== undefined && <td>{d.photo}</td>}
                    {site === "expert" && d.alertKaKao !== undefined &&
                        <td>{d.alertKaKao ? "카카오" : null}{d.alertSms && d.alertKaKao ?
                            <br/> : null}{d.alertSms ? "문자" : null}{d.alertSms && d.alertEmail ?
                            <br/> : null}{d.alertEmail ? "이메일" : null}</td>}
                    {site === "expert" && d.marketingKaKao !== undefined &&
                        <td>{d.marketingKaKao ? "카카오" : null}{d.marketingSms && d.marketingKaKao ?
                            <br/> : null}{d.marketingSms ? "문자" : null}{d.marketingSms && d.marketingEmail ?
                            <br/> : null}{d.marketingEmail ? "이메일" : null}</td>}
                    {site === "expert" && d.resume !== undefined && <td>{d.resume}</td>}
                    {site === "expert" && d.categoryB !== undefined &&
                        <td>{d.categoryB}<br/>{d.categoryM}<br/>{d.categoryS}</td>}
                    {site === "expert" && d.expertServiceType !== undefined && <td>{d.expertServiceType}</td>}
                    {site === "expert" && d.serviceTime !== undefined && <td>{d.serviceTime}</td>}
                    {site === "expert" && d.expertStatus !== undefined && <td>{d.expertStatus}<br/>{d.expertDate}</td>}
                    {site === "expert" && d.priority !== undefined && <td>{d.priority}</td>}
                    {site === "expert" && d.expertLevel !== undefined && <td>{d.expertLevel}</td>}
                    {site === "expert" && d.rating !== undefined && <td>{d.rating}<br/>{d.reviews}</td>}
                    {site === "expert" && d.activities !== undefined && <td>{d.activities}<br/>{d.matchingDecline}</td>}
                    {site === "expert" && d.settleBank !== undefined &&
                        <td>{d.settleBank}<br/>{d.settleAccount}<br/>{d.settleOwner}</td>}
                    {site === "expert" && d.totalCareer !== undefined && <td>{d.totalCareer}</td>}
                    {site === "expert" && d.education !== undefined && <td>{d.education}</td>}
                    {site === "expert" && d.activityManagementNumber !== undefined &&
                        <td>{d.activityManagementNumber}</td>}
                    {site === "expert" && d.serviceType !== undefined && <td>{d.serviceType}</td>}
                    {site === "expert" && d.testNation !== undefined && <td>{d.testNation}<br/>{d.testCity}</td>}
                    {site === "expert" && d.testDate !== undefined &&
                        <td>{d.testDate}<br/>{d.testStartTime}~{d.testEndTime}</td>}
                    {site === "expert" && d.applicationCategory !== undefined &&
                        <td>{d.applicationCategory}<br/>{d.year}년 {d.round}차</td>}
                    {site === "expert" && d.testSubject !== undefined && <td>{d.testSubject}<br/>{d.testGrade}</td>}
                    {site === "expert" && d.category1 !== undefined &&
                        <td>{d.category1}<br/>{d.category2}<br/>{d.category3}</td>}
                    {site === "expert" && d.examName !== undefined && <td>{d.examName}<br/>{d.detailedDescription}</td>}
                    {site === "expert" && d.departureLanguage !== undefined &&
                        <td>{d.departureLanguage}<br/>{d.arrivalLanguage}</td>}
                    {site === "expert" && d.purpose !== undefined && <td>{d.purpose}</td>}
                    {site === "expert" && d.activityCareer !== undefined &&
                        <td>{d.activityCareer}<br/>{d.activityCareerCount}</td>}
                    {site === "expert" && d.activityDoneDate !== undefined &&
                        <td>{d.activityDoneDate}<br/>{d.settleDueDate}</td>}
                    {site === "expert" && d.settlePlaned !== undefined &&
                        <td>{d.settlePlaned}<br/>{d.settleAddition}</td>}
                    {site === "expert" && d.settleAmount !== undefined && <td>{d.settleAmount}</td>}
                    {site === "expert" && d.settleStatus !== undefined &&
                        <td>{d.settleStatus}{d.settleStatus === "정산완료" ? <br/> : null}
                            {d.settleStatus === "정산완료" ? d.settledDate : null}</td>}
                    {site === "expert" && d.unspent !== undefined && <td>{d.unspent}</td>}


                    {site === "test" && d.id !== undefined && <td dangerouslySetInnerHTML={{__html: d.id}}/>}
                    {site === "test" && d.siteCategory !== undefined && <td dangerouslySetInnerHTML={{__html:d.siteCategory}}/>}
                    {site === "test" && d.testAvailableStartDate !== undefined && <td>{d.testAvailableStartDate}~{d.testAvailableEndDate}</td>}
                    {site === "test" && d.testNation !== undefined && <td>{d.testNation}<br/>{d.testCity}</td>}
                    {site === "test" && d.testDate !== undefined && <td>{d.testDate}<br/>{d.testStartTime}~{d.testEndTime}</td>}
                    {site === "test" && d.applicationCategory !== undefined && <td>{d.applicationCategory}<br/>{d.year}년 {d.round}차</td>}
                    {site === "test" && d.testSubject !== undefined && <td>{d.testSubject}<br/>{d.testGrade}</td>}
                    {site === "test" && d.category1 !== undefined && <td>{d.category1}<br/>{d.category2}<br/>{d.category3}</td>}
                    {site === "test" && d.examName !== undefined &&
                        <td>{d.examName}{d.detailedDescription !==""? <br/>:null}
                            {d.detailedDescription !==""? (d.detailedDescription):null}</td>}
                    {site === "test" && d.departureLanguage !== undefined && <td>{d.departureLanguage}<br/>{d.arrivalLanguage}</td>}
                    {site === "test" && d.purpose !== undefined && <td>{d.purpose}</td>}
                    {site === "test" && d.defaultValue !== undefined && <td>{d.defaultValue}</td>}
                    {site === "test" && d.order !== undefined && <td>{d.order}</td>}
                    {site === "test" && d.submittingStartDate !== undefined && <td>{d.submittingStartDate}~{d.submittingEndDate}<br/>{d.submittingStatus}</td>}
                    {site === "test" && d.questionFile !== undefined && <td>{d.questionFile}</td>}
                    {site === "test" && d.fileType !== undefined && <td>{d.fileType}</td>}
                    {site === "test" && d.translationToolUsed !== undefined && <td dangerouslySetInnerHTML={{__html:d.translationToolUsed}}></td>}
                    {site === "test" && d.aiUsed !== undefined && <td dangerouslySetInnerHTML={{__html:d.aiUsed}}></td>}
                    {site === "test" && d.testOverview !== undefined && <td>{d.testOverview}</td>}
                    {site === "test" && d.passingScore !== undefined && <td>{d.passingScore}<br/>{d.fullScore}<br/>({d.searchCount})</td>}
                    {site === "test" && d.totalNumberOfQuestions !== undefined && <td>{d.totalNumberOfQuestions}<br/>
                        ({d.levelHigh}/{d.levelMedium}/{d.levelLow})</td>}
                    {site === "test" && d.questionSetter !== undefined && <td>{d.questionSetter}<br/>{d.questionSetterContact}</td>}
                    {site === "test" && d.applicationStartDate !== undefined && <td>{d.applicationStartDate}~{d.applicationEndDate}<br/>{d.applicationStatus}</td>}
                    {site === "test" && d.testingStatus !== undefined && <td>{d.testingStatus}</td>}
                    {site === "test" && d.gradingStartDate !== undefined && <td>{d.gradingStartDate}~{d.gradingEndDate}<br/>{d.gradingStatus}</td>}
                    {site === "test" && d.grader !== undefined && <td>{d.grader}<br/>{d.graderContact}</td>}
                    {site === "test" && d.announceDate !== undefined && <td>{d.announceDate}<br/>{d.announceTime}</td>}
                    {site === "test" && d.numberOfApplicants !== undefined && <td>{d.numberOfApplicants}<br/>({d.previousNumberOfApplicants})</td>}
                    {site === "test" && d.passers !== undefined && <td>{d.passers}<br/>{d.failers}</td>}
                    {site === "test" && d.questionSetterMemo !== undefined && <td>{d.questionSetterMemo}</td>}
                    {site === "test" && d.graderMemo !== undefined && <td>{d.graderMemo}</td>}

                    <td>{d.adminMemo}</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}
