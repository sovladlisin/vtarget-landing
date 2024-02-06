import * as React from 'react';
import { isMobile } from 'react-device-detect';
import { useOnClickOutside } from '../utils/HandleClickOutside';

interface ILoginProProps {
    onClose: () => void
}

const LoginPro: React.FunctionComponent<ILoginProProps> = (props) => {
    var url = 'https://vtargete.pro/?register=true'

    const ref = React.useRef()
    useOnClickOutside(ref, () => props.onClose())

    const mobileClass = isMobile ? ' mobile' : ''
    return <>
        <div className='m-background'></div>
        <div className={'login-popup-container' + mobileClass} ref={ref}>
            <p className={'login-title' + mobileClass}>Участие в рейтинге</p>
            <p className={'login-desc' + mobileClass}>Для участия в рейтинге необходима авторизация на нашем сервисе vtargete.pro</p>
            <p className={'login-desc' + mobileClass}>Авторизуясь в сервисе, вы подтверждаете безоговорочное согласие
                с <a target='_blank' href='https://vtargete.ru/policy.html'>пользовательским соглашением</a> и <a target='_blank' href='https://vtargete.ru/offer.html'>договором-офертой</a></p>
            <a target='_blank' className={'login-link' + mobileClass} href={url}>Продолжить</a>
            <button className={'login-cancel' + mobileClass} onClick={props.onClose}>Отмена</button>
        </div>
    </>;
};

export default LoginPro;
