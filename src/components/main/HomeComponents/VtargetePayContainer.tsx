import * as React from 'react';
import { isMobile } from 'react-device-detect';
import '../../../css/home/vtargete-pay.css'

import Guy from '../../../images/guy-vtargete-pay.png'
import GuyMobile from '../../../images/guy-pay-mobile.png'
interface IVtargetePayContainerProps {
}

const VtargetePayContainer: React.FunctionComponent<IVtargetePayContainerProps> = (props) => {

    const mobileClass = isMobile ? ' mobile' : ''

    return <>
        {!isMobile && <>
            <div className={'vtargete-pay-container' + mobileClass}>
                <div>
                    <h1>
                        Удобное и выгодное пополнение<br />
                        <a>рекламных</a> кабинетов для<br />
                        пользователей Втаргете<br />
                    </h1>
                    <p>Пользуйся сервисом. Пополняй баланс в пару кликов и получай бонусы. Получай крутые результаты благодаря мощным инструментам и бонусам к бюджету</p>
                    <a className={'vtargete-pay-container-link' + mobileClass} target='_blank' rel="noopener noreferrer" href='https://vtargete.pro'><p>Перейти в сервис пополнения</p><i className='fas fa-arrow-right'></i></a>
                </div>
                <div className={'vtargete-pay-image-container' + mobileClass}>
                    <img src={Guy}></img>
                </div>
            </div>
        </>}
        {isMobile && <>
            <div className={'vtargete-pay-container' + mobileClass}>
                <div>
                    <h1>
                        Удобное и выгодное пополнение<br />
                        <a>рекламных</a> кабинетов для<br />
                        пользователей Втаргете<br />
                    </h1>
                    <p>Пользуйся сервисом. Пополняй баланс в пару кликов и получай бонусы. Получай крутые результаты благодаря мощным инструментам и бонусам к бюджету</p>
                </div>
                <div className={'vtargete-pay-image-container' + mobileClass}>
                    <img src={GuyMobile}></img>
                </div>
            </div>
            <a className={'vtargete-pay-container-link' + mobileClass} target='_blank' rel="noopener noreferrer" href='https://vtargete.pro'><p>Перейти в сервис пополнения</p><i className='fas fa-arrow-right'></i></a>
        </>}
    </>;
};

export default VtargetePayContainer;
