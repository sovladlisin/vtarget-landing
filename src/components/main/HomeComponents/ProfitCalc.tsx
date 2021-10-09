import * as React from 'react';
import { isMobile } from 'react-device-detect';
import '../../../css/home/profit-calc.css'

interface IProfitCalcProps {
    numberOfHours: number
}

const ProfitCalc: React.FunctionComponent<IProfitCalcProps> = (props) => {
    const mobileClass = isMobile ? ' mobile' : ''


    return <>
        <div className={'profit-calc-container' + mobileClass}>
            <div className={'profit-calc-numbers-container' + mobileClass}>
                {props.numberOfHours.toString().split('').reverse().map((l, i) => {
                    const style = { marginLeft: '20px' }
                    return <>
                        <div className={'profit-calc-number-container' + mobileClass} style={(i + 1) % 3 === 0 && i != props.numberOfHours.toString().length - 1 ? style : {}}>
                            <span className={'profit-calc-number-top' + mobileClass}></span>
                            <span className={'profit-calc-number-bottom' + mobileClass}></span>
                            <span className={'profit-calc-number-border-top' + mobileClass}></span>
                            <span className={'profit-calc-number-border-bottom' + mobileClass}></span>
                            <span className={'profit-calc-number-border' + mobileClass}></span>
                            <span className={'profit-calc-number-hinge-left' + mobileClass}></span>
                            <span className={'profit-calc-number-hinge-right' + mobileClass}></span>
                            <span className={'profit-calc-number-separator' + mobileClass}></span>
                            <p>{l}</p>
                        </div>
                    </>
                }).reverse()}
            </div>
            <p> часов - это {Math.ceil(props.numberOfHours / 8)} рабочих
                дней по 8 часов, или {Math.ceil(props.numberOfHours / 8 / 22)} месяцев, по 22 рабочих дня,
                или {Math.ceil(props.numberOfHours / 8 / 22 / 12)} года...
            </p>
            <p>Наши пользователи сделали для рекламного рынка за один год столько, сколько без автоматизации делали
                бы {Math.round((props.numberOfHours / 8 / 22 / 12 / 100) * 10) / 10} века.
            </p>
        </div>
    </>;
};

export default ProfitCalc;
