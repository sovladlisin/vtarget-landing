import * as React from 'react';
import { isMobile } from 'react-device-detect';
import '../../../css/home/faq.css'

interface IFAQProps {
}

const FAQ: React.FunctionComponent<IFAQProps> = (props) => {

    const mobileClass = isMobile ? ' mobile' : ''

    const answer_placeholder = <>

    </>

    const faq_data = [
        {
            id: 1,
            question: 'С чего начать?',
            answer: <>
                <p>Посмотрите <a target='_blank' rel="noopener noreferrer" href='https://vk.com/vtargeteru'>короткие видео-инструкции</a> на стене нашей группы Вк.</p>
                <p>Для работы со статистикой и расчета регистраций, подключите Сенлер в сервису.</p>
                <p>Выберите любую кампанию через окно в левом верхнем углу и начинайте работу.</p>
                <p>Во вкладке "Конфигурации" (в правом меню экрана) сохраняйте удобные рабочие настройки под разные задачи.</p>
            </>
        },
        {
            id: 2,
            question: 'Возможности и ограничения сервиса?',
            answer: <>
                <p>Возможности на данный момент такие:</p>
                <ul>
                    <li>Генерация ссылок для Senler</li>
                    <li>Расчет стоимости регистрации для Senler</li>
                    <li>Генерация ссылок с утм метками для сайтов</li>
                    <li>Стратегии управления ставками</li>
                    <li>Теги для объединения объявлений по разным признакам</li>
                    <li>Разгадывает капчу</li>
                    <li>Скачивает подписчиков по гипотезам и тегам для дальнейшего анализа </li>
                    <li>Сортировка и группировка объявлений по любым параметрам</li>
                    <li>Двойной расширенный фильтр с логическими операциями по любому столбику </li>
                    <li>Экспорт в эксель отчетов с любыми данными (столбиками)</li>
                </ul>
                <p>Массовое изменение и замена:</p>
                <ul>
                    <li>Любых параметров объявлений (ставки, лимиты, возраст, пол, категории интересов, аудитории ретагетинга и т.д.) </li>
                    <li>Текста, ссылок, параметров ссылок, утм-меток, дат в тексте, картинок, сниппетов </li>
                    <li>Отправка на повторную модерацию в 2 клика</li>
                </ul>
                <p>Ограничения на данный момент такие:</p>
                <ul>
                    <li>Сервис работает с промопостами в ленте Вк с картинками, со сниппетом или без сниппета </li>
                    <li>Промопосты должны содержать не более 4.500 знаков, включая пробелы </li>
                    <li>Генерирует ссылки для рассыльщика Senler и для сайтов</li>
                    <li>Некорректно работает с включенным Адблоком</li>
                </ul>
            </>
        },
        {
            id: 3,
            question: 'Вы владелец онлайн-проекта и ищите таргетологов?',
            answer: <>
                <p>Скоро у нас будет каталог исполнителей (таргетологов), в котором вы сможете легко и быстро найти компетентных специалистов. </p>
                <p>А пока вы можете оставить свою заявку чат-боту (бесплатно) и он отправит ее всем таргетологам, зарегистрировавшимся в нашей системе. Для этого перейдите по <a target='_blank' rel="noopener noreferrer" href='https://vk.com/app5898182_-182472456#s=337147&forc '>ссылке</a> и опишите ван проект в 2-3 предложениях.</p>
            </>
        },
        {
            id: 4,
            question: 'Вы таргетолог для онлайн-школ и ищите заказчиков? ',
            answer: <>
                <p>Скоро у нас будет каталог исполнителей (таргетологов), в котором вы сможете легко и быстро найти компетентных специалистов. </p>
                <p>А пока вы можете оставить свою заявку чат-боту (бесплатно) и он отправит ее всем таргетологам, зарегистрировавшимся в нашей системе. Для этого перейдите по <a target='_blank' rel="noopener noreferrer" href='https://vk.com/app5898182_-182472456#s=337147&forc '>ссылке</a> и опишите ван проект в 2-3 предложениях.</p>
            </>
        },
        {
            id: 5,
            question: 'Как подключить Сенлер? Как провести интеграцию,не теряя интеграции с другими сервисами?',
            answer: <>
                <p>Как подключить Сенлер?</p>
                <p>Есть несколько вариантов: </p>
                <ul>
                    <li>Просто настройте Веб-хуки в нужной группе в Сенлере на наш адрес https://vtargete.ru/webhooks/senler </li>
                    <li>Свяжитесь с нами через сообщения в группе или виджет в левом нижнем углу, и мы сделаем это за Вас буквально за несколько минут </li>
                    <li>Посмотрите видео и сделайте интеграцию сами</li>
                </ul>
                <p>P.S.Для чего нужна интеграция сервиса с Сенлером и как ее осуществить, читайте здесь: https://vk.com/wall-182472456_53 </p>
                <p>Если у вас не получилось интегрироваться самостоятельно, напишите вопрос в техподдержку: https://vk.me/vtargeteru </p>
                <p>Если нет времени и желания в этом разбираться, мы можем это сделать за вас. Для этого нашему специалисту понадобится подключиться к вам через TeamViewer. Напишите «нужна помощь с интеграцией» тут: https://vk.me/vtargeteru</p>
                <p>TeamViewer — бесплатная программа для удаленной помощи. Скачать ее можно тут: https://www.teamviewer.com/ru/ </p>
            </>
        },
        {
            id: 6,
            question: 'Как скачать подписчиков по отдельным гипотезам для анализа?',
            answer: <>
                <ul>
                    <li>С помощью фильтров, тегов и сортировки выберите нужные объявления </li>
                    <li>Нажмите на них правой кнопкой мыши и выберите "Скачать подписчиков" - "Senler.ru" </li>
                    <li>Выберите за какой период нужны подписчики: за тот, который стоит в настройках кампании в данный момент или за все время. </li>
                </ul>
            </>
        },
        {
            id: 7,
            question: 'Как создать 200 новых объявлений на разные сообщества или аудитории за 1 минуту?',
            answer: <>
                <p>Запустили новую функцию "Массовая генерация объявлений по списку сообществ или аудиторий". </p>
                <p>Теперь вы можете указать список сообществ Вк и Втаргете создаст на каждое сообщество отдельное объявление с этим сообществом в настройках. Также, вы можете загрузить или выбрать аудитории в кабинете и сгенерировать на их основе. </p>
                <p>Вы можете генерировать не только по схеме "1 объявление - 1 сообщество", но и целыми гипотезами: "4 объявления с разными баннерами или текстами - 1 сообщество". Что особенно полезно на стадии тестов. </p>
                <p>Важно не забывать об ограничениях Вк на создание постов: на 1 кабинет в сутки можно создавать не более 200 постов. Лимит обнуляется в 2-00 ночи по Мск. </p>
                <p>Пошаговая инструкция тут: https://vk.com/@vtargeteru-generaciya-obyavlenii-po-spisku-soobschestv-ili-auditorii </p>
            </>
        },
        {
            id: 8,
            question: 'Как вести трафик на сайты и отслеживать цели из Яндекс.Метрики?',
            answer: <>
                <p>Для этого вам нужно сгенерировать ссылки:</p>
                <p>Выберите объявления.Нажмите на них правой кнопкой мышки, выберите "Сгенерировать ссылки" - "Сайты"</p>
                <ul>
                    <li>
                        В открывшемся окне нажмите на "Добавить сайт с ЯндексМетрикой"
                        <ul>
                            <li>Откроется вкладка с авторизацией в Яндексе, авторизуйтесь. После авторизации она закроется и можно будет выбрать счетчик</li>
                            <li>Выберите счетчик, который активен на нужном вам сайте.</li>
                            <li>Выберите цель, достижение которой будет считаться за регистрацию и будет отображаться в столбце "Регистрации".</li>
                        </ul>
                    </li>
                    <li>Введите название ссылки, чтобы можно было ее сохранить и пользоваться в будущем.</li>
                    <li> Проверьте правильно-ли заполнена ссылка на сайт, с которым вы хотите работать и нажмите "Продолжить". </li>
                    <li>Проверьте правильность заполнения utm-меток (Также вы можете добавить любой параметр, нажав на кнопку "Добавить").</li>
                    <li>Нажмите на "Сохранить и применить" для установки этой ссылки во все выбранные объявления.</li>
                    <li>Нажмите на Зеленую Дискету для сохранения изменений в Вк.</li>
                </ul>
            </>
        },
        {
            id: 9,
            question: 'Партнерская программа: 2-х уровневая и пожизненная с выводом на карту банка!',
            answer: <>
                <p>1 уровень. Вы получаете 10% пожизненно со всех оплат тарифов привлеченных пользователей. </p>
                <p>2 уровень. Вы получаете 5% пожизненно со всех оплат тарифов пользователей, привлеченных вашей первой линией. </p>
                <p>Вывод возможен на баланс кабинета Втаргете или на карту банка. </p>
                <p>Минимальная сумма вывода - 1.000р</p>
                <p>Для подключения, достаточно сгенерировать промокод в правом боковом меню (во вкладке Партнерка) и размещать его в промо материалах, статьях, таргетированной рекламе. </p>
                <p>Реферал, зарегистрировавшийся по вашему промокоду получает +30 дней максимального тарифа. </p>
                <p>Таким образом, если он зарегистрируется, например, 10 июня, то получает бесплатно максимальный тариф до 1 августа (это общее правило для всех пользователей) +30 дней по вашему промокоду. </p>
                <p>Итого, примерно 80 дней бесплатно, до 31 августа. </p>
                <p>После 1 августа: просто получает +30 дней максимального тарифа </p>
            </>
        },
        {
            id: 10,
            question: 'Как быстро изменить ставки в 2000 объявлениях?',
            answer: <>
                <ul>
                    <li>Выделите нужные объявления (если нужно 2000 - поставьте в правом верхнем углу отображение не 20, а "Все") </li>
                    <li>Нажмите правой кнопкой на области в столбце СРМ или СРС. На каждый столбик изменение ставок происходит отдельно. Например, сначала меняем ставки в столбце СРМ, затем, следующим действием - в СРС. </li>
                    <li>Выберите "Изменить"</li>
                    <li>Выберите режим который вам нужен:
                        <ul>
                            <li>( = ) установить ставку, равную какому-либо числу</li>
                            <li>( -1 ) уменьшить ставку на значение в рулях. Например, уменьшить на 3 рубля. </li>
                            <li>( -% ) уменьшить значение на процент от нынешней ставки. Например, уменьшить на 10%. </li>
                            <li>( +1 ) увеличить ставку на значение в рулях. Например, увеличить на 3 рубля. </li>
                            <li>( +% ) увеличить значение на процент от нынешней ставки. Например, увеличить на 10%. </li>
                        </ul>
                    </li>
                    <li>Введите нужно значение.</li>
                    <li>Если нужно получить округленное значение (например, без копеек или кратно 10), выберите необходимый режим:
                        <ul>
                            <li>Без округления. Вы получите результат такого вида: 122.34</li>
                            <li>Округлить до 10 коп. Вы получите результат такого вида: 122.30 </li>
                            <li>Округлить до 1 руб. Вы получите результат такого вида: 122.00 </li>
                            <li>Округлить до 10 руб. Вы получите результат такого вида: 120.00 </li>
                        </ul>
                    </li>
                    <li>Нажмите "Применить" для применения изменений в выбранных объявлениях. Если нажмете на "Применить" еще раз, то изменение повторится еще раз. </li>
                    <li>Нажмите на Зеленую Дискету для сохранения в Вк.</li>
                </ul>
            </>
        },
        {
            id: 11,
            question: 'Как быстро изменить лимиты в 2000 объявлений?',
            answer: <>
                <p>Все точно так-же как и изменение ставок, только нажимайте правой кнопкой на столбце "Дневной лимит" или "Лимит объявления" т.е.:</p>
                <ul>
                    <li>Выделите нужные объявления (если нужно 2000, то выберите в поле отображения строк (в правом верхнем углу) не 20, а "Все").</li>
                    <li>Нажмите правой кнопкой мыши на области столбца "Дневной лимит" или "Лимит объявления".</li>
                    <li>Выберите "Изменить".</li>
                    <li>Выберите режим который вам нужен:
                        <ul>
                            <li>( = ) установить ставку, равную какому-либо числу</li>
                            <li>( -1 ) уменьшить ставку на значение в рулях. Например, уменьшить на 3 рубля. </li>
                            <li>( -% ) уменьшить значение на процент от нынешней ставки. Например, уменьшить на 10%. </li>
                            <li>( +1 ) увеличить ставку на значение в рулях. Например, увеличить на 3 рубля. </li>
                            <li>( +% ) увеличить значение на процент от нынешней ставки. Например, увеличить на 10%. </li>
                        </ul>
                    </li>
                    <li>Введите нужно значение.</li>
                    <li>Если нужно получить округленное значение (например, без копеек или кратно 10), выберите необходимый режим:
                        <ul>
                            <li>Без округления. Вы получите результат такого вида: 122.34</li>
                            <li>Округлить до 10 коп. Вы получите результат такого вида: 122.30 </li>
                            <li>Округлить до 1 руб. Вы получите результат такого вида: 122.00 </li>
                            <li>Округлить до 10 руб. Вы получите результат такого вида: 120.00 </li>
                        </ul>
                    </li>
                    <li>Нажмите "Применить" для применения изменений в выбранных объявлениях. Если нажмете на "Применить" еще раз, то изменение повторится еще раз.</li>
                    <li>Нажмите на Зеленую Дискету для сохранения в Вк. </li>
                </ul>
            </>
        },
    ]

    const [selectedIds, setSelectedIds] = React.useState([])

    const onClick = (id: number) => {
        selectedIds.includes(id) ?
            setSelectedIds(selectedIds.filter(id => id != id)) :
            setSelectedIds([...selectedIds, id])
    }
    return <>
        <div className={'faq-container' + mobileClass}>
            {faq_data.map(d => {
                return <>
                    <div
                        className={'faq-line-container' + mobileClass}
                    >
                        <div className={'faq-line' + mobileClass}>
                            <p onClick={_ => onClick(d.id)}>{d.question}</p>
                            <span onClick={_ => onClick(d.id)}>
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
