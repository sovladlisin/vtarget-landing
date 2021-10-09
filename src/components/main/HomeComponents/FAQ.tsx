import * as React from 'react';
import { isMobile } from 'react-device-detect';
import '../../../css/home/faq.css'

interface IFAQProps {
}

const FAQ: React.FunctionComponent<IFAQProps> = (props) => {

    const mobileClass = isMobile ? ' mobile' : ''

    const answer_placeholder = <>
        <p>Скоро у нас будет каталог исполнителей (таргетологов), в котором вы сможете легко и быстро найти компетентных специалистов. </p>
        <p>А пока вы можете оставить свою заявку чат-боту (бесплатно) и он отправит ее всем таргетологам, зарегистрировавшимся в нашей системе. Для этого перейдите по ссылке и опишите ван проект в 2-3 предложениях.</p>
    </>

    const faq_data = [
        {
            id: 1,
            question: 'С чего начать?',
            answer: answer_placeholder
        },
        {
            id: 2,
            question: 'Возможности и ограничения сервиса?',
            answer: answer_placeholder
        },
        {
            id: 3,
            question: 'Вы владелец онлайн-проекта и ищите таргетологов?',
            answer: answer_placeholder
        },
        {
            id: 4,
            question: 'Вы таргетолог для онлайн-школ и ищите заказчиков? ',
            answer: answer_placeholder
        },
        {
            id: 5,
            question: 'Как подключить Сенлер? Как провести интеграцию,не теряя интеграции с другими сервисами?',
            answer: answer_placeholder
        },
        {
            id: 6,
            question: 'Как скачать подписчиков по отдельным гипотезам для анализа?',
            answer: answer_placeholder
        },
        {
            id: 7,
            question: 'Как создать 200 новых объявлений на разные сообщества или аудитории за 1 минуту?',
            answer: answer_placeholder
        },
        {
            id: 8,
            question: 'Как вести трафик на сайты и отслеживать цели из Яндекс.Метрики?',
            answer: answer_placeholder
        },
        {
            id: 9,
            question: 'Партнерская программа: 2-х уровневая и пожизненная с выводом на карту банка!',
            answer: answer_placeholder
        },
        {
            id: 10,
            question: 'Как быстро изменить ставки в 2000 объявлениях?',
            answer: answer_placeholder
        },
        {
            id: 11,
            question: 'Как быстро изменить лимиты в 2000 объявлений?',
            answer: answer_placeholder
        },
    ]

    const [selectedIds, setSelectedIds] = React.useState([])

    return <>
        <div className={'faq-container' + mobileClass}>
            {faq_data.map(d => {
                return <>
                    <div
                        className={'faq-line-container' + mobileClass}
                        onClick={_ => {
                            selectedIds.includes(d.id) ?
                                setSelectedIds(selectedIds.filter(id => id != d.id)) :
                                setSelectedIds([...selectedIds, d.id])
                        }}
                    >
                        <div className={'faq-line' + mobileClass}>
                            <p>{d.question}</p>
                            <span>
                                {selectedIds.includes(d.id) ?
                                    <i style={{ color: 'rgba(45, 67, 121, 0.5)' }} className='fas fa-chevron-up'></i> :
                                    <i style={{ color: '#386BEE' }} className='fas fa-chevron-down'></i>}

                            </span>
                        </div>
                        {selectedIds.includes(d.id) &&
                            <div className={'faq-line-desc' + mobileClass}>
                                {d.answer}
                            </div>
                        }
                    </div>


                </>
            })}

        </div>

    </>;
};

export default FAQ;
