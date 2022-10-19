import React from 'react';
import { MyCalendar } from '../components/MyCalendar';
import { Register } from '../components/Register';
import { Example } from '../components/Example';
import './Main.css';

const Main = () => {
    return (
        <div>
            <meta name='viewport 'content="width=device-width, initial-scal=1" />
          <div className='reg'>
            <Register />
            </div>
            <div className='ex'>
            <Example/>
            </div>
        </div>
    );
};

export default Main;
