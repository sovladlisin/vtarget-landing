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


    return <>
        <div className={'page-container' + mobileClass}>
            <Header />
            <TitleCard />

            <h2 className={'home-h2' + mobileClass}>Таргетолог без автоматизации таргета:</h2>
            <BenefitCards />

            <h2 className={'home-h2' + mobileClass}>Результат использования <a>Втаргете:</a></h2>
            <UseResults />

            <h2 className={'home-h2' + mobileClass}>Втаргете <a>сэкономил</a> пользователям за 2020 год</h2>
            <ProfitCalc numberOfHours={numberOfHours} />

            <h2 className={'home-h2' + mobileClass}>Преимущества сервиса <a>Втаргете:</a></h2>
            <BenefitDesc />

            <VtargetePayContainer />

            <h2 className={'home-h2' + mobileClass}>Все <a>возможности</a> сервиса Втаргете</h2>
            <FunctionList />

            <h2 className={'home-h2' + mobileClass}>Отзывы о Втаргете</h2>
            <ReviewGallery />

            <h2 className={'home-h2' + mobileClass}>Ответы на часто задаваемые вопросы</h2>
            <FAQ />

            <h2 className={'home-h2' + mobileClass}>Кейсы пользователей</h2>
            <UseCases />

            <h2 className={'home-h2' + mobileClass}>Прямые эфиры <a>"Втаргете для блондинок"</a></h2>
            <StreamArchive />

            <h2 className={'home-h2' + mobileClass}>Выберите свой тариф</h2>
            <SubscriptionPlans />

        </div>

        <Footer />

    </>
}

export default Home
