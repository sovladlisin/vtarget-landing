import * as React from 'react';
import { isMobile } from 'react-device-detect';
import Logo from '../../../images/logo.png'
import '../../../css/home/header.css'
import { useOnClickOutside } from '../../utils/HandleClickOutside';


interface IHeaderProps {
    onScroll1: () => void
    onScroll2: () => void
    onScroll3: () => void
    onScroll4: () => void,
    onScroll5: () => void,
    onClose?: () => void,
    onStopScroll?: (check: boolean) => void
}

const MobileSideMenu: React.FunctionComponent<IHeaderProps> = (props) => {
    const ref = React.useRef()
    useOnClickOutside(ref, () => props.onClose())
    return <>
        <div className='m-background'></div>
        <div className='header-side-panel-container' ref={ref}>
            <button onClick={() => { props.onScroll1(); props.onClose() }}>Возможности</button>
            <button onClick={() => { props.onScroll2(); props.onClose() }}>Отзывы</button>
            <button onClick={() => { props.onScroll3(); props.onClose() }}>Кейсы</button>
            <button onClick={() => { props.onScroll4(); props.onClose() }}>Выгодное пополнение</button>
            <button onClick={() => { props.onScroll5(); props.onClose() }}>Обучение</button>

        </div>
    </>
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {

    const mobileClass = isMobile ? ' mobile' : ''

    const [isMobileSideMenu, setIsMobileSideMenu] = React.useState(false)

    React.useEffect(() => {
        if (isMobileSideMenu) props.onStopScroll(true)
        else props.onStopScroll(false)

    }, [isMobileSideMenu])

    return <>
        <div className={'header-container' + mobileClass}>
            <div className={'header-logo' + mobileClass}><img src={Logo}></img></div>

            {!isMobile && <>
                <div className={'header-page-buttons' + mobileClass}>
                    <button onClick={props.onScroll1}>Возможности</button>
                    <button onClick={props.onScroll2}>Отзывы</button>
                    <button onClick={props.onScroll3}>Кейсы</button>
                    <button onClick={props.onScroll4}>Выгодное пополнение</button>
                    <button onClick={props.onScroll5}>Обучение</button>
                </div>
                <div className={'header-contact-button-container' + mobileClass}>
                    <span><i className='fas fa-phone-alt'></i></span>
                    <p>{'+7 (913) 068-62-92'}</p>
                </div>
            </>}

            {isMobile && <>
                <button className='header-side-panel-button' onClick={_ => setIsMobileSideMenu(true)}>
                    <i className="fas fa-bars"></i>
                </button>
                <div className={'header-contact-button-container' + mobileClass}>
                    <a href="tel:+79130686292">
                        <span><i className='fas fa-phone-alt'></i></span>
                    </a>
                </div>
            </>}

        </div>
        {isMobileSideMenu &&
            <MobileSideMenu
                onClose={() => setIsMobileSideMenu(false)}
                onScroll1={props.onScroll1}
                onScroll2={props.onScroll2}
                onScroll3={props.onScroll3}
                onScroll4={props.onScroll4}
                onScroll5={props.onScroll5}

            />}
    </>;
};

export default Header;
