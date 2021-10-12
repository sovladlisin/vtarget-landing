import * as React from 'react';
import { isMobile } from 'react-device-detect';
import '../../../css/home/footer.css'

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {

    const mobileClass = isMobile ? ' mobile' : ''

    return <>

        <div className={'footer' + mobileClass} style={isMobile ? { background: 'none' } : {}}>
            {!isMobile && <div id='wave'>
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{ stroke: 'none', fill: '#0d253c' }}></path>
                </svg>
            </div>}

            <div className={'footer-main' + mobileClass}>
                <div className={'footer-left' + mobileClass}>
                    <div className={'footer-left-top' + mobileClass}>
                        <p className={'footer-left-top-title' + mobileClass}>Остались вопросы?</p>
                        <p className={'footer-left-top-title-2' + mobileClass}><a>Свяжитесь с нами</a> лично!</p>
                    </div>
                    <div className={'footer-left-bottom' + mobileClass}>
                        <p className={'footer-left-bottom-phone' + mobileClass}>
                            <i className='fas fa-phone'></i>
                            <p>{'+7 (913) 068-62-92' + mobileClass}</p>
                        </p>
                        <p className={'footer-left-bottom-email' + mobileClass}>
                            <i className='far fa-envelope'></i>
                            <p>servicepopolnenia@info.ru</p>
                        </p>
                    </div>
                </div>

                <div className={'footer-bottom' + mobileClass}>
                    <div className={'footer-bottom-left' + mobileClass}>
                        <p>ИП Крестинин К.И.</p>
                        <p>ИНН 745104702135 </p>
                        <p>ООО ‎‎«‎Социальные Технологии»‎</p>
                    </div>
                    <div className={'footer-bottom-right' + mobileClass}>
                        <span></span>
                        <a href='https://vtargete.ru/offer' target='_blank'>Оферта</a>
                        <a href='https://vtargete.ru/policy' target='_blank'>Политика конфиденциальности</a>
                        <a href='https://vtargete.ru/pravilo' target='_blank'>Пользовательское соглашение</a>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Footer;
