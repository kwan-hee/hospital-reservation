import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import { mockComponent } from 'react-dom/test-utils';
import moment from 'moment';
import "./MyCalendar.css";

const reg = [
    {
        id: 1,
        clientName: '김민수',
        clientNumber: 1095223513,
        type: '초진',
        date: '2022-10-17',
        startTime: '4:30',
        reservationStatus: '예약',
    },
    {
        id: 2,
        clientName: '최사비',
        clientNumber: 84560801,
        type: '재진',
        date: '2022-10-16',
        startTime: '3:30',
        reservationStatus: '노쇼',
    },
    {
        id: 3,
        clientName: '김연아',
        clientNumber: 12341232,
        type: '상담',
        date: '2022-10-15',
        startTime: '2:30',
        reservationStatus: '완료',
    },
    {
        id: 4,
        clientName: '김민수',
        clientNumber: 95223513,
        type: '초진',
        date: '2022-10-17',
        startTime: '4:30',
        reservationStatus: '예약',
    },
    {
        id: 4,
        clientName: '손흥민',
        clientNumber: 12341233,
        type: '초진',
        date: '2022-10-22',
        startTime: '5:30',
        reservationStatus: '예약',
    },
    {
        id: 5,
        clientName: '홍길동',
        clientNumber: 95223513,
        type: '초진',
        date: '2022-10-17',
        startTime: '4:30',
        reservationStatus: '예약',
    },
];

export function MyCalendar() {
    const [value, onChange] = useState(new Date());
    const [mark, setMark] = useState([]);

    let a =[]
    const product = () =>{
        reg.map((item)=>(
            a.push(item.date), setMark(a),console.log('reg: ', item)
        ))
    }

    useEffect(()=>{
        product()
    },[])

     console.log('date: ', mark);
    return (
        <div>
            <Calendar
                onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
                formatDay={(locale, date) => moment(date).format("DD")}
                value={value}
                className="mx-auto w-full text-sm border-b"
                tileContent={({ date, view }) =>{
                    if (mark.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
                        return (
                            <>
                            <div className="flex justify-center items-center absoluteDiv">
                                <div className='dot'></div>
                            </div>
                            </>
                        )
                    }
                }}              

            />
            <div className="text-gray-500 mt-4 day">
                {moment(value).format('YYYY년 MM월 DD일')}
            </div>
        </div>
    );
}
