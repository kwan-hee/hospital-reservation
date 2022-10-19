import React, { useState, useCallback, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

export function Register() {
    const [selectData, setSelectData] = useState({});
    const [count, setCount] = useState(1);
    const [userInput, setUserInput] = useState({
        reserch: '',
        phone: '',
        selectData: '',
    });

    const reserchandle = (e) => {
        e.preventDefault();  
        setUserInput({
            ...userInput,
            reserch: e.target.value,
        });
    };

    const phonehandle = (e) => {
        e.preventDefault();
        setUserInput({
            ...userInput,
            phone: e.target.value,
        });
    };

    const radiohandling = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log(name, value);
        setSelectData({
            [name]: value,
        });
        setUserInput({
            ...userInput,
            selectData: e.target.value,
        });
    };
    console.log('examle', userInput);

    const saveStorage = () => {
       
        console.log('SAVE!!!');
        window.localStorage.setItem(userInput.phone, JSON.stringify(userInput));
    };

    let name = '';
    return (
      <Container>
       <Form onSubmit={saveStorage}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>예약자</Form.Label>
                <Form.Control
                    type="name"
                    placeholder="예약자를 입력하세요"
                    onChange={reserchandle}
                />
                <Form.Text className="text-muted">
                   
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>연락처</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="연락처를 입력하세요"
                    onChange={phonehandle}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>예약종류</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <HiddenInput>
                    <Form.Check
                     
                      type="radio"
                       name={name}
                        value="초진"
                        label="초진"
                        checked={setSelectData[name] === '초진' ? true : null}
                        onChange={radiohandling}
                    />
                </HiddenInput>
                <HiddenInput>
                    <Form.Check
                        type="radio"
                        name={name}
                        value="재진"
                        label="재진"
                        checked={setSelectData[name] === '재진' ? true : null}
                        onChange={radiohandling}
                    />
                </HiddenInput>
                <HiddenInput>
                    <Form.Check
                        type="radio"
                        name={name}
                        value="상담"
                        label="상담"
                        checked={setSelectData[name] === '상담' ? true : null}
                        onChange={radiohandling}
                    />
                </HiddenInput>
            </Form.Group>
            <LocBut>
                <Button variant="primary" type="submit">
                    <p>예약확정</p>
                </Button>
            </LocBut>
        </Form>
        </Container>
    );
}

const HiddenInput = styled.div`
    display: flex;
    float: left;
    marin-left: 100px;
`;
const LocBut = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    align-items: center;
    Button {
        width: 500px;
        margin: 0 auto;
        display: flex;
        height: 35px;
    }
    p {
        font-size: 15px;
        display: flex;
        margin-left: 90px;
    }
`;

const Container = styled.div`
    width: 30%;
    border: 1px solid black;
    margin : 0 auto;
`;