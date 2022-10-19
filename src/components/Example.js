import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MyCalendar } from './MyCalendar';
import styled from 'styled-components';

export function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <NavWrapper>
                <Button variant="primary" onClick={handleShow}>
                    Calendar
                </Button>
            </NavWrapper>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MyCalendar />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const NavWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    margin-left: 300px;
    Button {
        width: 18%;
        font-size: 15px;
    }
    margin-top: -80px;
`;
