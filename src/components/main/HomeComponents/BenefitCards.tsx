import * as React from 'react';
import { isMobile } from 'react-device-detect';

import Guy1 from '../../../images/smallguy1.png'
import Guy2 from '../../../images/smallguy2.png'
import Guy3 from '../../../images/smallguy3.png'

import '../../../css/home/benefitcard.css'


interface IBenefitCardsProps {
}

const BenefitCards: React.FunctionComponent<IBenefitCardsProps> = (props) => {

    const mobileClass = isMobile ? ' mobile' : ''

    return <>
        <div className={'benefitcards-container' + mobileClass}>
            <div>
                <div className={'benefitcards-image-container' + mobileClass}>
                    <img src={Guy1}></img>
                </div>
                <p>Тратит большую часть рабочего времени на однотипные задачи, тонет в рутине</p>
            </div>
            <div>
                <div className={'benefitcards-image-container' + mobileClass}>
                    <img src={Guy2}></img>
                </div>
                <p>Рискует сорвать KPI и дедлайн, находится в постоянном стрессе</p>
            </div>
            <div>
                <div className={'benefitcards-image-container' + mobileClass}>
                    <img src={Guy3}></img>
                </div>
                <p>Ограничен в финансовом и профессиональном росте - физически не успевает больше</p>
            </div>
        </div>
    </>;
};

export default BenefitCards;
