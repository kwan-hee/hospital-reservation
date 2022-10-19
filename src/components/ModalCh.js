import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MyCalendar } from './MyCalendar';
import styled from 'styled-components';
import {Check} from './Check';

export function ModalCh() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <NavWrapper>
                <Button variant="primary" onClick={handleShow}>
                예약확인
                </Button>
            </NavWrapper>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>예약확인</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Check />
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
    margin-left: 600px;
    Button {
        width: 18%;
        font-size: 15px;
    }
    margin-top: -80px;
`;
