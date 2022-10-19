import React from 'react';
import { MyCalendar } from '../components/MyCalendar';
import { Register } from '../components/Register';
import { Example } from '../components/Example';
import {Check} from '../components/Check'
import './Main.css';
import {ModalCh} from '../components/ModalCh'

const Main = () => {
    return (
        <div>
            <meta name='viewport 'content="width=device-width, initial-scal=1" />
          <div className='reg'>
            <Register />
            </div>
            <div className='ex'>
            <Example/>
            <ModalCh />
            {/* <MyCalendar /> */}
            </div>
        </div>
    );
};

export default Main;
