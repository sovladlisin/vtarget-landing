import * as React from 'react';
import { isMobile } from 'react-device-detect';
import '../../../css/home/vtargete-pay.css'

import Guy from '../../../images/guy-vtargete-pay.png'
import GuyMobile from '../../../images/guy-pay-mobile.png'
interface IVtargetePayContainerProps {
    onSubmit: () => void
}

const VtargetePayContainer: React.FunctionComponent<IVtargetePayContainerProps> = (props) => {

    const mobileClass = isMobile ? ' mobile' : ''

    return <>
        {!isMobile && <>
            <div className={'vtargete-pay-container' + mobileClass}>
                <div>
                    <h1>
                        {'Рейтинг '}
                        <a>таргетологов</a>
                    </h1>
                    <p>Каталог таргетологов ВКонтакте с их открутом, лучшими кейсам и нишами. </p>

                    <div className={'vtargete-pay-container-links' + mobileClass}>
                        <a className={'vtargete-pay-container-link' + mobileClass} target='_blank' rel="noopener noreferrer" href='https://vtargete.pro/publicRecordsLeaderboard'><p>Перейти в каталог</p><i className='fas fa-arrow-right'></i></a>
                        <button onClick={props.onSubmit} className={'vtargete-pay-container-button' + mobileClass}><p>Участвовать в рейтинге</p></button>
                    </div>
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
                        {'Рейтинг '}
                        <a>таргетологов</a>
                    </h1>
                    <p>Каталог таргетологов ВКонтакте с их открутом, лучшими кейсам и нишами.</p>
                </div>
                <div className={'vtargete-pay-image-container' + mobileClass}>
                    <img src={GuyMobile}></img>
                </div>
            </div>
            <a className={'vtargete-pay-container-link' + mobileClass} target='_blank' rel="noopener noreferrer" href='https://vtargete.pro/publicRecordsLeaderboard'><p>Перейти в каталог</p><i className='fas fa-arrow-right'></i></a>
            <button onClick={props.onSubmit} className={'vtargete-pay-container-button' + mobileClass}><p>Участвовать в рейтинге</p></button>
        </>}
    </>;
};

export default VtargetePayContainer;
