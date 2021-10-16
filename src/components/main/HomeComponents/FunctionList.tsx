import * as React from 'react';
import { isMobile } from 'react-device-detect';

import '../../../css/home/function-list.css'


interface IFunctionListProps {
}

const FunctionList: React.FunctionComponent<IFunctionListProps> = (props) => {

    const mobileClass = isMobile ? ' mobile' : ''

    return <>

        <div className={'function-list-container' + mobileClass}>
            <div>
                <span className={'function-list-icon-container' + mobileClass}><i className='fas fa-chart-line'></i></span>
                <h4>Расчет и достижение KPI</h4>
                <ul>
                    <li>расчет стоимости регистрации для Senler</li>
                    <li>генерация ссылок с utm-метками для сайтов, Senler и Salebot</li>
                    <li>автоматические стратегии управления ставками (включая остановку объявлений) с отправкой уведомлений пользователю</li>
                    <li>массовое изменение ставок с разной степенью округления (вплоть до копейки)</li>
                    <li>расчет стоимости покупателей, активных и негативных подписчиков</li>
                    <li>фиксация количества отписок за указанный период (отписки, быстрые отписки, чистые отписки)</li>
                </ul>
            </div>
            <div>
                <span className={'function-list-icon-container' + mobileClass}><i className='fas fa-sliders-h'></i></span>
                <h4>Настройка интерфейса</h4>
                <ul>
                    <li>установка тегов для поиска и объединения объявлений по разным признакам</li>
                    <li>поиск и сортировка объявлений по двум логическим фильтрам</li>
                    <li>настройка динамических столбцов для собственных формул и расчетов</li>
                    <li>настройка внешнего вида рабочей таблицы (выбор, настройка ширины и последовательности столбцов, выбор количества объявлений на странице, создание конфигураций)</li>
                    <li>единый поиск по доступным рекламным кабинетам и кампаниям</li>
                    <li>поиск объявлений по настройкам на аудиторию или сообщества</li>
                </ul>
            </div>
            <div>
                <span className={'function-list-icon-container' + mobileClass}><i className='fas fa-tasks'></i></span>
                <h4>Массовое изменение и замена</h4>
                <ul>
                    <li>любых параметров объявлений (ставки, лимиты, возраст, пол, категории интересов, аудитории ретаргетинга и т.д.)</li>
                    <li>текста, ссылок, параметров ссылок, utm-меток, дат в тексте, картинок, сниппетов</li>
                    <li>отправка на повторную модерацию в 2 клика</li>
                    <li>массовое удаление аудиторий из кабинета</li>
                    <li>копируйте и вставляйте параметры объявлений как обычный текст (сообщества, аудитории, категории интересов, геотаргетинг координаты и т.д.)</li>
                </ul>
            </div>
            <div>
                <span className={'function-list-icon-container' + mobileClass}><i className='fas fa-clone'></i></span>
                <h4>Генерация и клонирование</h4>
                <ul>
                    <li>генерация и клонирование целых гипотез</li>
                    <li>генерация объявлений по списку сообществ (настройка на активных или подписчиков), аудиторий (200 штук за 1 минуту)</li>
                    <li>массовое редактирование объявлений (включая функцию "Найти и заменить" в названии объявлений)</li>
                    <li>клонирование объявлений в новую кампанию в 2 клика</li>
                </ul>
            </div>
            <div>
                <span className={'function-list-icon-container' + mobileClass}><i className='fas fa-folder-open'></i></span>
                <h4>Экспорт данных</h4>
                <ul>
                    <li>Экспорт в эксель отчетов с любыми данными (столбцами)</li>
                    <li>быстрая выгрузка списка сообществ из настроек объявления</li>
                    <li>скачивание подписчиков по гипотезам и тегам для дальнейшего анализа</li>
                </ul>
            </div>
            <div>
                <span className={'function-list-icon-container' + mobileClass}><i className='fas fa-heart'></i></span>
                <h4>Бонусная программа</h4>
                <ul>
                    <li>пожизненная двухуровневая партнёрская программа. Пожизненное начисление 10% со всех оплат тарифов привлеченных пользователей + 5% от оплат их рефералов. Привлеченный пользователь получает +30 дней безлимитного тарифа бесплатно</li>
                    <li>помощь в получении рефералов за наш счет</li>
                    <li>отзывчивая круглосуточная техническая поддержка</li>
                </ul>
            </div>
        </div>
    </>;
};

export default FunctionList;
