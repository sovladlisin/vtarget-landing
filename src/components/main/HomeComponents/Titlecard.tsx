import * as React from 'react';
import { isMobile } from 'react-device-detect';
import Guy from '../../../images/guy-titlecard.png'
import '../../../css/home/titlecard.css'




interface ITitleCardProps {
    onMoreClick: () => void,
    onLoginClick: () => void
}

const TitleCard: React.FunctionComponent<ITitleCardProps> = (props) => {

    const mobileClass = isMobile ? ' mobile' : ''

    return <>
        <div className={'titlecard-container' + mobileClass}>
            <div className={'titlecard-info-container' + mobileClass}>
                <h1><span>Онлайн-сервис по работе </span><a>с таргетированной рекламой</a> <span>во ВКонтакте</span></h1>
                <h3><span>Позволяет экономить время на 70%-90%</span>, выполняя
                    легко и быстро многие ежедневные рутинные действия, которые
                    совершает специалист или владелец бизнеса, при работе с рекламой ВК
                </h3>

                <div className={'titlecard-info-buttons-container' + mobileClass}>
                    <button onClick={props.onLoginClick} className={'titlecard-info-button-start' + mobileClass}><p>Начать работу</p><i className='fas fa-arrow-right'></i></button>
                    <button onClick={props.onMoreClick} className={'titlecard-info-button-login' + mobileClass}>Подробнее</button>
                </div>
            </div>
            <div className={'titlecard-image-container' + mobileClass}>
                <img src={Guy}></img>
            </div>
        </div>
    </>;
};

export default TitleCard;
