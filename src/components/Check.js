import React, { useEffect, useState, useRef, useMemo } from 'react';
import styled from 'styled-components';
import './Check.css';
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

export function Check() {
    const [mark, setMark] = useState([]);
    const [number, setNumber] = useState();
    const inputRef = useRef(0);

    let a = [];
    const product = () => {
        reg.map(
            (item) => (
                a.push(item.clientNumber),
                setMark(a),
                console.log('reg: ', item)
            )
        );
    };

    const test = useMemo(() => {
        return product();
    }, []);

    console.log('date: ', mark);
    const array = mark;
    useEffect(() => {
        product();
    }, []);

    const handleChange = (e) => {
        setNumber(e.target.value);
    };
    console.log('findNum', number);
    let num = number;
    const result = mark.indexOf(num);
    console.log('find: ', result);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handlearray', mark);
        console.log('handle: ', inputRef.current.value);
        const result = mark.indexOf(inputRef.current.value);

        if (result === -1) {
            alert('예약 가능');
        } else {
            alert('예약 불가');
        }

        console.log('find: ', result);
    };

    return (
        <div>
            <Container>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        placeholder="연락처를 입력하세요"
                        value={number}
                        ref={inputRef}
                        // onChange={handleChange}
                    />
                    <button type="submit">검색</button>
                </form>
            </Container>
        </div>
    );
}
const Container = styled.div`
    width: 40%;
    border: 1px solid black;
    margin: 0 auto;
`;

const p = styled.div`
    font-color: blue;
`;

const s = styled.div`
    font-color: red;
`;
