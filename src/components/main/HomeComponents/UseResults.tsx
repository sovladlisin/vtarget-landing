import * as React from 'react';
import { isMobile } from 'react-device-detect';

import Guy from '../../../images/guy-riding-graph.png'
import '../../../css/home/useresults.css'


interface IUseResultsProps {
}

const UseResults: React.FunctionComponent<IUseResultsProps> = (props) => {

    const mobileClass = isMobile ? ' mobile' : ''


    return <>
        <div className={'useresults-container' + mobileClass}>
            <div>
                <div className={'useresults-point' + mobileClass}>
                    <div>
                        <i className='fas fa-plus'></i>
                        <p>Экономия до 90%</p>
                    </div>
                    <p>До 90% времени экономят пользователи сервиса благодаря массовым операциям и автоматическим стратегиям</p>
                </div>
                <div className={'useresults-point' + mobileClass}>
                    <div>
                        <i className='fas fa-plus'></i>
                        <p>Быстрее в 5-7 раз</p>
                    </div>
                    <p>Оптимизация рекламных кампаний происходит значительно быстрее, сервис рассчитывает стоимость лидов и регистраций автоматически</p>
                </div>
                <div className={'useresults-point' + mobileClass}>
                    <div>
                        <i className='fas fa-plus'></i>
                        <p>Больше в 3-4 раза</p>
                    </div>
                    <p>По статистике, пользователи Втаргете приводят в 3-4 раза больше лидов и продаж своим заказчикам благодаря сквозной аналитике покупателей и быстрому масштабированию.</p>
                </div>
            </div>

            <div className={'useresults-image-container' + mobileClass}>
                <img src={Guy}></img>
            </div>
        </div>
    </>;
};

export default UseResults;
