import * as React from 'react';
import { isMobile } from 'react-device-detect';
import '../../../css/home/use-cases.css'
import VkLogo from '../../../images/vk-logo-vector.svg'

interface IUseCasesProps {
}

const UseCases: React.FunctionComponent<IUseCasesProps> = (props) => {
    const case_data = [
        { title: 'Таргетинг без рутины', link: 'https://vk.com/@vtargeteru-targeting-bez-rutiny' },
        { title: '9.364 рег за 10 дней на онлайн-квест по отношениям', link: 'https://vk.com/@vtargeteru-99364-registracii-za-10-dnei-na-besplatnyi-onlain-kvest-po-o' },
        { title: 'Почему я выбрал сервис vtargete.ru', link: 'https://vk.com/@vtargeteru-pochemu-ya-polzuus-servisom-vtargete' },
        { title: '1.064 регистрации за 24 часа', link: 'https://vk.com/@vtargeteru-50000-rublei-za-24-chasa' },
        { title: 'Как со vtargete.ru перегрузить отдел продаж 1000 клиентами', link: 'https://vk.com/@vtargeteru-kak-s-pomoschu-vtargeteru-peregruzit-otdel-prodazh-1000-lida' },
        { title: 'Как Втаргете помог мне получить 7.702 регистрации за 10 дней', link: 'https://vk.com/@vtargeteru-kak-servis-vtargete-pomog-mne-poluchit-7702-registracii-za-1' },
        { title: 'Как Миша заработал 85.000 ₽ за месяц', link: 'https://vk.com/@vtargeteru-kak-student-mihail-zarabotal-85000' },
        { title: 'Заявки по 8,2 ₽ на нишу фитнеса с помощью Втаргете', link: 'https://vk.com/@vtargeteru-keis-zayavki-po-82-rub-na-nishu-fitnesa-s-pomoschu-servisa-v' },
        { title: 'Как 700 регистраций принесли продажи \n на 725.000 ₽', link: 'https://vk.com/@vtargeteru-prodazhi-pochti-na-million-rublei-s-700-registracii-ochen-ho' },
    ]

    const mobileClass = isMobile ? ' mobile' : ''


    return <>
        <div className={'use-case-container' + mobileClass}>
            {case_data.map(d => {
                return <>
                    <div className={'use-case-block' + mobileClass}>
                        <p className={'use-case-title' + mobileClass}>{d.title}</p>
                        <a target='_blank' rel="noopener noreferrer" href={d.link}>
                            <span style={{ backgroundImage: 'url("' + VkLogo + '")' }} ></span>
                            <p>Читать полностью</p>
                        </a>
                    </div>
                </>
            })}
        </div>
    </>;
};

export default UseCases;
