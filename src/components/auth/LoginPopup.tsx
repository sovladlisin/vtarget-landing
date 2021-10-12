import * as React from 'react';
import { isMobile } from 'react-device-detect';
import { useOnClickOutside } from '../utils/HandleClickOutside';
import '../../css/auth/login-popup.css'

interface ILoginPopupProps {
    onClose: () => void
}

const LoginPopup: React.FunctionComponent<ILoginPopupProps> = (props) => {
    const url = 'https://oauth.vk.com/authorize?client_id=5223962&redirect_uri=https%3A%2F%2Fvtargete.ru%2Fauth%2Fvk%2Fcallback&scope=email%2CADS%2COFFLINE%2CFRIENDS%2CPHOTOS%2CGROUPS&response_type=code'

    const ref = React.useRef()
    useOnClickOutside(ref, () => props.onClose())

    const mobileClass = isMobile ? ' mobile' : ''

    return <>
        <div className='m-background'></div>
        <div className={'login-popup-container' + mobileClass} ref={ref}>
            <p className={'login-title' + mobileClass}>Войти в аккаунт</p>
            <p className={'login-desc' + mobileClass}>Авторизуясь в сервисе, вы подтверждаете безоговорочное согласие
                с <a target='_blank' href='https://vtargete.ru/policy'>пользовательским соглашением</a> и <a target='_blank' href='https://vtargete.ru/offer'>договором-офертой</a></p>
            <a target='_blank' className={'login-link' + mobileClass} href={url}>Продолжить</a>
            <button className={'login-cancel' + mobileClass} onClick={props.onClose}>Отмена</button>
        </div>
    </>;
};

export default LoginPopup;
