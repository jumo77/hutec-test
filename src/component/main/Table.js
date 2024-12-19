import React from "react";
import "./table.css";
import {useNavigate} from "react-router-dom";

export default function Table({data, header, to}) {

    console.log(data)
    console.log(header)

    let nav = useNavigate()
    const navigate = (index) => {
        nav(to + "/" + index)
    }

    return (
        <table id="all_table">
            <thead>
            <tr>
                {header.map(it => (
                    <th dangerouslySetInnerHTML={{__html: it.replace("₩", '<br />')}}/>
                ))}
            </tr>
            </thead>
            <tbody>
            {data?.map((d, index) =>
                <tr key={index.toString() + d.id} onClick={() => navigate(index)}>
                    <td>{index + 1}</td>
                    {d.id !== undefined && <td>{d.id}</td>}
                    {d.site !== undefined && <td>{d.site}<br/>{d.userType}</td>}
                    {d.userSubscriptionStatus !== undefined && <td>{d.userSubscriptionStatus}</td>}
                    {d.name !== undefined && <td>{d.name}<br/>{d.age}∙{d.gender}</td>}
                    {d.email !== undefined && <td>{d.email}<br/>{d.mobilePhone}</td>}
                    {d.city !== undefined && <td>{d.city}<br/>{d.address.split(" ")[0]}</td>}
                    {d.groupStatus !== undefined && <td>{d.groupStatus ? d.groupName : ""}</td>}
                    {d.joinDate !== undefined && <td>{d.joinDate}<br/>{d.joinChannel}</td>}
                    {d.firstAccessDevice !== undefined && <td>{d.firstAccessDevice}</td>}
                    {d.recentLogin !== undefined && <td>{d.recentLogin}<br/>{d.stayTime}</td>}
                    {d.photo !== undefined && <td>{d.photo}</td>}
                    {d.alertKaKao !== undefined && <td>{d.alertKaKao ? "카카오" : null}{d.alertSms && d.alertKaKao ?
                        <br/> : null}{d.alertSms ? "문자" : null}{d.alertSms && d.alertEmail ?
                        <br/> : null}{d.alertEmail ? "이메일" : null}</td>}
                    {d.marketingKaKao !== undefined &&
                        <td>{d.marketingKaKao ? "카카오" : null}{d.marketingSms && d.marketingKaKao ?
                            <br/> : null}{d.marketingSms ? "문자" : null}{d.marketingSms && d.marketingEmail ?
                            <br/> : null}{d.marketingEmail ? "이메일" : null}</td>}

                    {d.resume !== undefined&& <td>{d.resume}</td>}
                    {d.categoryB !== undefined && <td>{d.categoryB}<br/>{d.categoryM}<br/>{d.categoryS}</td>}
                    {d.expertServiceType !== undefined && <td>{d.expertServiceType}</td>}
                    {d.serviceTime !== undefined&& <td>{d.serviceTime}</td>}
                    {d.expertStatus !== undefined&& <td>{d.expertStatus}<br/>{d.expertDate}</td>}
                    {d.priority !== undefined&& <td>{d.priority}</td>}
                    {d.expertLevel !== undefined&& <td>{d.expertLevel}</td>}
                    {d.rating !== undefined&& <td>{d.rating}<br/>{d.reviews}</td>}
                    {d.activities !== undefined&& <td>{d.activities}<br/>{d.matchingDecline}</td>}
                    {d.settleBank !== undefined&& <td>{d.settleBank}<br/>{d.settleAccount}<br/>{d.settleOwner}</td>}
                    {d.totalCareer !== undefined&& <td>{d.totalCareer}</td>}
                    {d.education !== undefined&& <td>{d.education}</td>}

                    {d.activityManagementNumber !== undefined && <td>{d.activityManagementNumber}</td>}
                    {d.serviceType !== undefined && <td>{d.serviceType}</td>}
                    {d.testNation !== undefined && <td>{d.testNation}<br/>{d.testCity}</td>}
                    {d.testDate !== undefined && <td>{d.testDate}<br/>{d.testStartTime}~{d.testEndTime}</td>}
                    {d.applicationCategory !== undefined && <td>{d.applicationCategory}<br/>{d.numberOfTimes}</td>}
                    {d.testSubject !== undefined && <td>{d.testSubject}<br/>{d.testGrade}</td>}
                    {d.category1 !== undefined && <td>{d.category1}<br/>{d.category2}<br/>{d.category3}</td>}
                    {d.examName !== undefined && <td>{d.examName}<br/>{d.detailedDescription}</td>}
                    {d.departureLanguage !== undefined && <td>{d.departureLanguage}<br/>{d.arrivalLanguage}</td>}

                    {d.isChoice !== undefined && <td>{d.isChoice ? "객관식" : null}{d.isChoice && d.isShort ?
                        <br/> : null}{d.isShort ? "주관식" : null}{d.isShort && d.isLong ?
                        <br/> : null}{d.isLong ? "서술형" : null}</td>}
                    {d.applicationStartDate !== undefined &&
                        <td>{d.applicationStartDate}~{d.applicationEndDate}<br/>{d.applicationStatus}</td>}
                    {d.examStatus !== undefined && <td>{d.examStatus}<br/>{d.candidateStatus}</td>}
                    {d.announceDate !== undefined && <td>{d.announceDate}<br/>{d.announceTime}</td>}
                    {d.examResults !== undefined && <td>{d.examResults}<br/>{d.scoredPoints}</td>}
                    {d.feedbackStatus !== undefined && <td>{d.feedbackStatus}<br/>{d.feedbackCompleteDate}</td>}
                    {d.certificate !== undefined && <td>{d.certificate}</td>}
                    {d.paymentDate !== undefined && <td>{d.paymentDate}</td>}
                    {d.paymentDetails !== undefined && <td>{d.paymentDetails}</td>}
                    {d.used !== undefined && <td>{d.used}<br/>({d.discountDescription}){d.discount}</td>}
                    {d.paymentAmount !== undefined && <td>{d.paymentAmount}<br/>{d.paymentMethod}</td>}
                    {d.availablePoints !== undefined && <td>{d.availablePoints}</td>}
                    {d.refundStatus !== undefined && <td>{d.refundStatus}{/*todo*/}</td>}
                    {d.consultationDate !== undefined && <td>{d.consultationDate}<br/>{d.consultationCompleteDate}</td>}
                    {d.consultationStatus !== undefined && <td>{d.consultationStatus}</td>}
                    {d.inquiryCategory !== undefined && <td>{d.inquiryCategory}<br/>{d.answerCategory}></td>}
                    {d.answerer !== undefined && <td>{d.answerer}</td>}
                    {d.inquiryTitle !== undefined && <td>{d.inquiryTitle}</td>}
                    {d.inquiryContents !== undefined && <td>{d.inquiryContents}</td>}
                    {d.attachedFile !== undefined && <td>{d.attachedFile}</td>}

                    {d.purpose!==undefined && <td>{d.purpose}</td>}
                    {d.activityCareer!==undefined && <td>{d.activityCareer}<br/>{d.activityCareerCount}</td>}
                    {d.activityDoneDate!==undefined && <td>{d.activityDoneDate}<br/>{d.settleDueDate}</td>}
                    {d.settlePlaned!==undefined && <td>{d.settlePlaned}<br/>{d.settleAddition}</td>}
                    {d.settleAmount!==undefined && <td>{d.settleAmount}</td>}
                    {d.settleStatus!==undefined && <td>{d.settleStatus}
                        {d.settleStatus==="정산완료" ? <br/>:null}
                        {d.settleStatus==="정산완료" ? d.settledDate:null}
                    </td>}

                    {d.unspent!==undefined && <td>{d.unspent}</td>}
                    {d.adminMemo !== undefined && <td>{d.adminMemo}</td>}
                </tr>
            )}
            </tbody>
        </table>
    )
}
