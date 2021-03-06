import * as React from 'react';
import { isMobile } from 'react-device-detect';

import '../../../css/home/subscription.css'

interface ISubscriptionPlansProps {
    onLoginClick: () => void
}

const SubscriptionPlans: React.FunctionComponent<ISubscriptionPlansProps> = (props) => {

    const sub_pluses = [
        { id: 1, text: 'безлимитное изменение ставок' },
        { id: 2, text: 'безлимитный запуск и остановка объявлений ' },
        { id: 3, text: 'безлимитное изменение лимитов у объявлений' },
        { id: 4, text: 'расчет регистраций в Senler.ru и Яндекс.Метрике' },
        { id: 5, text: 'расчет стоимости покупателей' },
        { id: 6, text: 'работа с тегами (назначение, изменение, удаление, управление)' },
        { id: 7, text: 'динамика цен по дням' },
        { id: 8, text: 'сортировки и фильтры по любым полям' },
        { id: 9, text: 'экспорт отчетов в Excel' },
        { id: 10, text: 'удобная оптимизация и аналитика кампаний' },
        { id: 11, text: 'безлимитная работа 1 стратегии с 5 объявлениями' },
        { id: 12, text: 'безлимитная работа стратегий' },
        { id: 13, text: 'массовая генерация и клонирование объявлений' },
        { id: 14, text: 'массовое изменение ссылок, баннеров, текста в постах' },
        { id: 15, text: 'массовое изменение любых параметров кампаний и объявлений' },

    ]

    const mobileClass = isMobile ? ' mobile' : ''

    const [selectedCard, setSelectedCard] = React.useState(1)

    var nav_leg = {
        0: 1,
        1: 0
    }

    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);

    function handleTouchStart(e) {
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e) {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    function handleTouchEnd() {
        if (touchStart - touchEnd > 150) {
            setSelectedCard(nav_leg[selectedCard])
        }

        if (touchStart - touchEnd < -150) {
            setSelectedCard(nav_leg[selectedCard])
        }
    }

    return <>
        <div className={'sub-info-container' + mobileClass}>
            {!isMobile && <>
                <div className={'sub-info-free' + mobileClass}>
                    <div className={'sub-info-price-log-container' + mobileClass}>
                        <div className={'sub-info-price-container' + mobileClass}>
                            <div className={'sub-info-price-amount-container' + mobileClass}>
                                <p>0₽</p>
                                <span>/ месяц</span>
                            </div>
                            <p>Бесплатный тариф</p>
                        </div>
                        <button onClick={props.onLoginClick}>Войти</button>
                    </div>
                    <div className={'sub-info-points-container' + mobileClass}>
                        {sub_pluses.map(s => {
                            const classN = s.id <= 11 ? ' sub-info-line-includes' : ''
                            return <>
                                <div className={'sub-info-line' + mobileClass + classN}>
                                    <span><i className='far fa-check-circle'></i></span>
                                    <p>{s.text}</p>
                                </div>
                            </>
                        })}
                    </div>
                </div>
                <div className={'sub-info-pay' + mobileClass}>
                    <div className={'sub-info-price-log-container' + mobileClass}>
                        <div className={'sub-info-price-container' + mobileClass}>
                            <div className={'sub-info-price-amount-container' + mobileClass}>
                                <p>2000₽</p>
                                <span>/ месяц</span>
                            </div>
                            <p>Безлимит</p>
                        </div>
                        <button onClick={props.onLoginClick}>Войти</button>
                    </div>
                    <div className={'sub-info-points-container' + mobileClass}>
                        {sub_pluses.filter(s => s.id != 11).map(s => {
                            const classN = ' sub-info-line-includes'
                            return <>
                                <div className={'sub-info-line' + mobileClass + classN}>
                                    <span><i className='fas fa-check-circle'></i></span>
                                    <p>{s.text}</p>
                                </div>
                            </>
                        })}
                    </div>
                </div>
            </>}


            {isMobile && <>
                {selectedCard === 0 && <>
                    <div className={'sub-info-free' + mobileClass}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onTouchMove={handleTouchMove}
                    >
                        <div className={'sub-info-price-log-container' + mobileClass}>
                            <div className={'sub-info-price-container' + mobileClass}>
                                <div className={'sub-info-price-amount-container' + mobileClass}>
                                    <p>0₽</p>
                                    <span>/ месяц</span>
                                </div>
                                <p>Бесплатный тариф</p>
                            </div>
                            <button onClick={props.onLoginClick}>Войти</button>
                        </div>
                        <div className={'sub-info-points-container' + mobileClass}>
                            {sub_pluses.map(s => {
                                const classN = s.id <= 11 ? ' sub-info-line-includes' : ''
                                return <>
                                    <div className={'sub-info-line' + mobileClass + classN}>
                                        <span><i className='far fa-check-circle'></i></span>
                                        <p>{s.text}</p>
                                    </div>
                                </>
                            })}
                        </div>
                    </div>
                </>}

                {selectedCard === 1 && <>
                    <div className={'sub-info-pay' + mobileClass}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onTouchMove={handleTouchMove}
                    >
                        <div className={'sub-info-price-log-container' + mobileClass}>
                            <div className={'sub-info-price-container' + mobileClass}>
                                <div className={'sub-info-price-amount-container' + mobileClass}>
                                    <p>2000₽</p>
                                    <span>/ месяц</span>
                                </div>
                                <p>Безлимит</p>
                            </div>
                            <button onClick={props.onLoginClick}>Войти</button>
                        </div>
                        <div className={'sub-info-points-container' + mobileClass}>
                            {sub_pluses.filter(s => s.id != 11).map(s => {
                                const classN = ' sub-info-line-includes'
                                return <>
                                    <div className={'sub-info-line' + mobileClass + classN}>
                                        <span><i className='fas fa-check-circle'></i></span>
                                        <p>{s.text}</p>
                                    </div>
                                </>
                            })}
                        </div>
                    </div>
                </>}
            </>}
            {isMobile && <>
                <div className={'sub-dots-buttons' + mobileClass}>
                    <button onClick={_ => setSelectedCard(nav_leg[selectedCard])}><i className="fas fa-chevron-left"></i></button>
                    <button onClick={_ => setSelectedCard(nav_leg[selectedCard])}><i className="fas fa-chevron-right"></i></button>
                </div>
            </>}

        </div>
    </>;
};

export default SubscriptionPlans;
