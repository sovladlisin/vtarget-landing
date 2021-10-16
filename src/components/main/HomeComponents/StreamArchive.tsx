import * as React from 'react';
import { isMobile } from 'react-device-detect';
import '../../../css/home/stream-archive.css'

interface IStreamArchiveProps {
}

const StreamArchive: React.FunctionComponent<IStreamArchiveProps> = (props) => {

    const stream_data = [
        { title: 'Общий обзор интерфейса и возможностей Втаргете', link: 'https://vk.com/video-182472456_456239050' },
        { title: 'Генерация объявлений + фишки сервиса ', link: 'https://vk.com/video-182472456_456239054' },
        { title: 'Фиксируем и устраняем ошибки', link: 'https://vk.com/video-182472456_456239057' },
        { title: 'Обзоры основной таблицы и столбцов', link: 'https://vk.com/video-182472456_456239067' },
        { title: 'Стратегии управления ставками', link: 'https://vk.com/video-182472456_456239068' },
        { title: 'Тестирование гипотез', link: 'https://vk.com/video-182472456_456239073' },
        { title: 'Генерация ссылок, интеграция с Senler, копирование, отписки и...', link: 'https://vk.com/video-182472456_456239074' },
        { title: 'Стратегии управления ставками. Делаем поток регистраций в пределах KPI', link: 'https://vk.com/video-182472456_456239075' },
        { title: 'ВТаргете и обновление ВКонтакте', link: 'https://vk.com/video-182472456_456239084' },
    ]

    const mobileClass = isMobile ? ' mobile' : ''


    return <>
        <h3 className={'home-h3' + mobileClass}>Обучаем бесплатно доступным языком работе с сервисом, с таргетированной рекламой, с трафиком для онлайн школ</h3>
        <div className={'streams-container' + mobileClass}>
            {stream_data.map(d => {
                return <>
                    <div className={'stream-block' + mobileClass}>
                        <p className={'stream-title' + mobileClass}>{d.title}</p>
                        <a target='_blank' rel="noopener noreferrer" href={d.link}>
                            <p>Смотреть запись</p>
                            <i className='fas fa-arrow-right'></i>
                        </a>
                    </div>
                </>
            })}
        </div>
    </>;
};

export default StreamArchive;
