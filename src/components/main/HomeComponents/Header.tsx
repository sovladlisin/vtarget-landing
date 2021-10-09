import * as React from 'react';
import { isMobile } from 'react-device-detect';
import Logo from '../../../images/logo.png'
import '../../../css/home/header.css'

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {

    const mobileClass = isMobile ? ' mobile' : ''


    return <>
        <div className={'header-container' + mobileClass}>
            <div className={'header-logo' + mobileClass}><img src={Logo}></img></div>
            <div className={'header-page-buttons' + mobileClass}>
                <button>Возможности</button>
                <button>Отзывы</button>
                <button>Кейсы</button>
                <button>Выгодное пополнение</button>
            </div>
            <div className={'header-contact-button-container' + mobileClass}>
                <span><i className='fas fa-phone-alt'></i></span>
                <p>{'+7 (913) 068-62-92'}</p>
            </div>
        </div>

    </>;
};

export default Header;
