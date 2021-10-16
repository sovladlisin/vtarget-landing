import * as React from 'react';
import { isMobile } from 'react-device-detect';
import '../../../css/home/benefit-desc.css'

import Screen1 from '../../../images/benefit-screen-1.png'
import Screen2 from '../../../images/benefit-screen-2.png'
import Screen3 from '../../../images/benefit-screen-3.png'
import Screen4 from '../../../images/benefit-screen-4.png'

interface IBenefitDescProps {
}

const BenefitDesc: React.FunctionComponent<IBenefitDescProps> = (props) => {

    const mobileClass = isMobile ? ' mobile' : ''


    return <>
        <div className={'benefit-desc-container' + mobileClass}>
            {isMobile && <>
                <div className={'benefit-desc-image-container' + mobileClass}>
                    <img src={Screen1}></img>
                </div>
                <div>
                    <h4>Расчет стоимости лида и покупателя</h4>
                    <p>Втаргете в режиме реального времени рассчитывает стоимость подписчика в Senler. Также есть расчёт стоимости покупателя.</p>
                    <p>Легко отслеживать, какие объявления приносят больше регистраций и продаж. Можно сортировать по значениям или фильтровать по KPI.</p>
                </div>


                <div className={'benefit-desc-image-container' + mobileClass}>
                    <img src={Screen2}></img>
                </div>
                <div>
                    <h4>Массовое редактирование</h4>
                    <p>Объявления можно в пару кликов массово — клонировать (будут созданы копии), генерировать (на основе существующего промопоста), либо редактировать:</p>
                    <ul>
                        <li>текст, картинку объявления</li>
                        <li>название объявлений</li>
                        <li>ссылку в сниппете, тексте</li>
                        <li>кнопку</li>
                    </ul>
                </div>


                <div className={'benefit-desc-image-container' + mobileClass}>
                    <img src={Screen3}></img>
                </div>
                <div>
                    <h4>Стратегии управления ставками и KPI</h4>
                    <p>Достижение KPI с минимальным бюджетом и защита от слива. Можно забыть о ручной корректировке ставок.</p>
                    <p>Задайте параметр эффективности (стоимость регистрации, количество кликов и т.д.), а ВТаргете будет корректировать цену, отправлять уведомления или приостанавливать рекламу в зависимости от событий.</p>
                </div>

                <div className={'benefit-desc-image-container' + mobileClass}>
                    <img src={Screen4}></img>
                </div>
                <div>
                    <h4>Автоматическая сегментация</h4>
                    <p>При создании объявлений сразу можно создавать дубли на разные виды сегментов:</p>
                    <ul>
                        <li>по полу</li>
                        <li>по типу оплаты</li>
                        <li>по возрасту</li>
                        <li>по количеству групп</li>
                    </ul>
                </div>

            </>}
            {!isMobile && <>
                <div>
                    <h4>Расчет стоимости лида и покупателя</h4>
                    <p>Втаргете в режиме реального времени рассчитывает стоимость подписчика в Senler. Также есть расчёт стоимости покупателя.</p>
                    <p>Легко отслеживать, какие объявления приносят больше регистраций и продаж. Можно сортировать по значениям или фильтровать по KPI.</p>
                </div>
                <div className={'benefit-desc-image-container' + mobileClass}>
                    <img src={Screen1}></img>
                </div>

                <div>
                    <h4>Массовое редактирование</h4>
                    <p>Объявления можно в пару кликов массово — клонировать (будут созданы копии), генерировать (на основе существующего промопоста), либо редактировать:</p>
                    <ul>
                        <li>текст, картинку объявления</li>
                        <li>название объявлений</li>
                        <li>ссылку в сниппете, тексте</li>
                        <li>кнопку</li>
                    </ul>
                </div>
                <div className={'benefit-desc-image-container' + mobileClass}>
                    <img src={Screen2}></img>
                </div>

                <div>
                    <h4>Стратегии управления ставками и KPI</h4>
                    <p>Достижение KPI с минимальным бюджетом и защита от слива. Можно забыть о ручной корректировке ставок.</p>
                    <p>Задайте параметр эффективности (стоимость регистрации, количество кликов и т.д.), а ВТаргете будет корректировать цену, отправлять уведомления или приостанавливать рекламу в зависимости от событий.</p>
                </div>
                <div className={'benefit-desc-image-container' + mobileClass}>
                    <img src={Screen3}></img>
                </div>

                <div>
                    <h4>Автоматическая сегментация</h4>
                    <p>При создании объявлений сразу можно создавать дубли на разные виды сегментов:</p>
                    <ul>
                        <li>по полу</li>
                        <li>по типу оплаты</li>
                        <li>по возрасту</li>
                        <li>по количеству групп</li>
                    </ul>
                </div>
                <div className={'benefit-desc-image-container' + mobileClass}>
                    <img src={Screen4}></img>
                </div>
            </>}

        </div>
    </>;
};

export default BenefitDesc;
