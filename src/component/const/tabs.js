import {ALL, ALL_LABEL} from "./Const";

export const tabs = {
    user: [
        {label: ALL_LABEL, id: ALL},
        {label: "회원 관리", id: "user"},
        {label: "활동 관리", id: "activity"},
        {label: "결제 관리", id: "transaction"},
        {label: "1:1 문의 관리", id: "ask"},
    ],
    expert:[
        {label: ALL_LABEL, id: ALL},
        {label: "전문가 관리", id: "user"},
        {label: "정산 관리", id: "settlement"},
    ],
    test:[
        {label: ALL_LABEL, id: ALL},
        {label: "시험 관리", id: "test"},
        {label: "출제 관리", id: "submit"},
    ],
    grading:[
        {label: ALL_LABEL, id: ALL},
        {label: "채점 관리", id: "grading"},
        {label: "자격증 관리", id: "qualification"},
    ],
    blog:[
        {label: ALL_LABEL, id: ALL},
    ],
    support:[
        {label: ALL_LABEL, id: ALL},
    ],
    site:[
        {label: ALL_LABEL, id: ALL},
    ],
    category:[
        {label: ALL_LABEL, id: ALL},
    ],
    transaction:[
        {label: ALL_LABEL, id: ALL},
    ],
    admin:[
        {label: ALL_LABEL, id: ALL},
    ],
}