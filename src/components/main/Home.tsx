import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store';
import { URL } from '../../utils';
import MainLogo from '../../images/logo.png'
import { isMobile } from 'react-device-detect'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import BenefitCards from './HomeComponents/BenefitCards';

import ProfitCalc from './HomeComponents/ProfitCalc';
import Header from './HomeComponents/Header';
import TitleCard from './HomeComponents/Titlecard';
import UseResults from './HomeComponents/UseResults';
import BenefitDesc from './HomeComponents/BenefitDesc';
import FunctionList from './HomeComponents/FunctionList';
import ReviewGallery from './HomeComponents/ReviewGallery';
import FAQ from './HomeComponents/FAQ';
import UseCases from './HomeComponents/UseCases';
import StreamArchive from './HomeComponents/StreamArchive';
import SubscriptionPlans from './HomeComponents/SubscriptionPlans';
import VtargetePayContainer from './HomeComponents/VtargetePayContainer';
import Footer from './HomeComponents/Footer';
import LoginPopup from '../auth/LoginPopup';

export interface IAppProps {
}

const Home: React.FC = (props: IAppProps) => {
    const dispatch = useDispatch()
    // const authState = useSelector((state: RootStore) => state.auth);



    React.useEffect(() => {

    }, [])

    // hours saved for clients
    const [numberOfHours, setNumberOfHours] = useState<number>(767000)

    // opened tips
    const [tips, setTips] = useState<number[]>([])

    const mobileClass = isMobile ? ' mobile' : ''

    const scrollRef1 = React.useRef(null)
    const scrollRef2 = React.useRef(null)
    const scrollRef3 = React.useRef(null)
    const scrollRef4 = React.useRef(null)
    const scrollRef5 = React.useRef(null)
    const scrollRef6 = React.useRef(null)
    const scroll1 = () => scrollRef1.current.scrollIntoView({ behavior: 'smooth' })
    const scroll2 = () => scrollRef2.current.scrollIntoView({ behavior: 'smooth' })
    const scroll3 = () => scrollRef3.current.scrollIntoView({ behavior: 'smooth' })
    const scroll4 = () => scrollRef4.current.scrollIntoView({ behavior: 'smooth' })
    const scroll5 = () => scrollRef5.current.scrollIntoView({ behavior: 'smooth' })
    const scroll6 = () => scrollRef6.current.scrollIntoView({ behavior: 'smooth' })

    const [loginPopupWindow, setLoginPopupWindow] = useState(false)
    const [stopScroll, setStopScroll] = useState(false)
    React.useEffect(() => {
        const objRef = document.body

        if (loginPopupWindow || stopScroll) {
            objRef.style.overflow = "hidden";
            objRef.style.height = "100%";
        }
        else {
            objRef.style.overflow = "unset";
            objRef.style.height = "unset";
        }
    }, [, loginPopupWindow, stopScroll])


    // const [changed, setChanged] = useState(false)


    // React.useEffect(() => {
    //     if (!changed) {
    //         var viewport = document.querySelector('meta[name="viewport"]');

    //         if (viewport) {
    //             if (isMobile) {
    //                 // @ts-ignore
    //                 viewport.content = "maximum-scale=0.01, minimum-scale=0.01, initial-scale=0.01";
    //             }
    //         }

    //         if (isMobile) {
    //             setTimeout(function () {
    //                 var viewport = document.querySelector('meta[name="viewport"]');
    //                 // @ts-ignore
    //                 viewport.content = "width=1440";
    //                 setChanged(true)

    //             }, 1500);

    //         }
    //     }

    // })

    return <>
        <div className={'page-container' + mobileClass}>
            <Header
                onScroll1={scroll1}
                onScroll2={scroll2}
                onScroll3={scroll3}
                onScroll4={scroll4}
                onScroll5={scroll6}
                onStopScroll={(check) => setStopScroll(check)}
            />
            <TitleCard
                onMoreClick={scroll5}
                onLoginClick={() => setLoginPopupWindow(true)}
            />

            <span ref={scrollRef5}></span>
            <h2 className={'home-h2' + mobileClass}>???????????????????? ?????? ?????????????????????????? ??????????????:</h2>
            <BenefitCards />

            <h2 className={'home-h2' + mobileClass}>?????????????????? ?????????????????????????? <a>????????????????:</a></h2>
            <UseResults />

            <h2 className={'home-h2' + mobileClass}>???????????????? <a>??????????????????</a> ?????????????????????????? ???? 2020 ??????</h2>
            <ProfitCalc numberOfHours={numberOfHours} />

            <h2 className={'home-h2' + mobileClass}>???????????????????????? ?????????????? <a>????????????????:</a></h2>
            <BenefitDesc />

            <span ref={scrollRef4}></span>
            <VtargetePayContainer />

            <span ref={scrollRef1}></span>
            <h2 className={'home-h2' + mobileClass}>?????? <a>??????????????????????</a> ?????????????? ????????????????</h2>
            <FunctionList />

            <span ref={scrollRef2}></span>
            <h2 className={'home-h2' + mobileClass}>???????????? ?? ????????????????</h2>
            <ReviewGallery />

            <h2 className={'home-h2' + mobileClass}>???????????? ???? ?????????? ???????????????????? ??????????????</h2>
            <FAQ />

            <span ref={scrollRef3}></span>
            <h2 className={'home-h2' + mobileClass}>?????????? ??????????????????????????</h2>
            <UseCases />

            <span ref={scrollRef6}></span>
            <h2 className={'home-h2' + mobileClass}>???????????? ?????????? <a target='_blank' rel="noopener noreferrer" href={'https://vk.com/videos-182472456?section=album_2'}>"???????????????? ?????? ??????????????????"</a></h2>
            <StreamArchive />

            <h2 className={'home-h2' + mobileClass}>???????????????? ???????? ??????????</h2>
            <SubscriptionPlans
                onLoginClick={() => setLoginPopupWindow(true)}
            />

        </div>

        <Footer />

        {loginPopupWindow && <LoginPopup onClose={() => setLoginPopupWindow(false)} />}
    </>
}

export default Home
