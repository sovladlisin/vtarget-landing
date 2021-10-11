import * as React from 'react';
import { isMobile } from 'react-device-detect';
import '../../../css/home/vtargete-pay.css'

import Guy from '../../../images/guy-vtargete-pay.png'
interface IVtargetePayContainerProps {
}

const VtargetePayContainer: React.FunctionComponent<IVtargetePayContainerProps> = (props) => {

    const mobileClass = isMobile ? ' mobile' : ''

    return <>
        <div className={'vtargete-pay-container' + mobileClass}>
            <div>
                <h1>
                    Удобное и выгодное пополнение <a>рекламных</a> кабинетов
                </h1>
                <p>Пополняй баланс в кабинете в пару кликов и получай бонусы, статистику кампаний и объявлений, профессиональные инструменты для таргетолога</p>
                <a target='_blank' rel="noopener noreferrer" href='https://vtargete.pro'><p>Перейти в сервис пополнения</p><i className='fas fa-arrow-right'></i></a>
            </div>
            <div className={'vtargete-pay-image-container' + mobileClass}>
                <img src={Guy}></img>
            </div>
        </div>
    </>;
};

export default VtargetePayContainer;
