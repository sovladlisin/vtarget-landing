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
                    <p>Времени автоматизации рутины</p>
                </div>
                <div className={'useresults-point' + mobileClass}>
                    <div>
                        <i className='fas fa-plus'></i>
                        <p>Быстрее в 5-7 раз</p>
                    </div>
                    <p>Оптимизация рекламных кампаний</p>
                </div>
                <div className={'useresults-point' + mobileClass}>
                    <div>
                        <i className='fas fa-plus'></i>
                        <p>Больше в 3-4 раза</p>
                    </div>
                    <p>Количество регистраций в Senler больше</p>
                </div>
            </div>

            <div className={'useresults-image-container' + mobileClass}>
                <img src={Guy}></img>
            </div>
        </div>
    </>;
};

export default UseResults;
