import './App.css'
import logo from './assets/8z-logo.svg'
import phone from './assets/phone.svg'
import exitBtn from './assets/exit-button.svg'
import gift from './assets/gift.svg'
import applications from './assets/applications.svg'
import profile from './assets/profile.svg'
import events from './assets/events.svg'
import services from './assets/services.svg'
import consultation from './assets/consultation.svg'
import education from './assets/education.svg'
import about from './assets/about.svg'
import profileLogo from './assets/profile-logo.svg'
import editBtn from './assets/edit-btn.svg'
import notice from './assets/notice-logo.svg'
import money from './assets/money-icon.svg'
import money2 from './assets/money-icon2.svg'
import monet from './assets/monet2.svg'

import MenuItem from './Components/MenuItem'
import { useState } from 'react'
import DataElement from './Components/DataElement'
// import exitBtn from './assets/svg/exitBtn.jsx'

//////
// Заменить SVG иконки на нормальные, без теней
//////

let info = {
  secondname: "Иванов",
  firstname: "Иван",
  surname: "Иванович",
  birthday: "01.01.2000",
  phone: "+7 (999) 999 99-99",
  email: "example@mail.com",
  passport_number: "22 12 / 324842",
  department_code: "520-001",
  issue_date: "01.01.2012",
  birth_place: "г. Москва",
  registration_adress: "г. Москва улица Ленина дом 22 квартира 13",
  actual_adress: "г. Москва улица Ленина дом 22 квартира 13",
  send_sms: false,
  send_mail: false
}

function App() {
  const [editMode, setEditMode] = useState (false)
  return (
    <>
      <header>
        <img className='logo' src={logo} alt="8z-logo" />
        <div className='btn-phone-block'>
          <button className='exit-btn'>
            <img className='exit-logo' src={exitBtn} alt='exit'/>
            Выйти
          </button>
          <span className='phone'>
            <img className='phone-logo' src={phone} alt="phone" />
            8 800 100 10 10
          </span>
        </div>
      </header>
      <main>
        <div className='menu'>
          <MenuItem text="Мои заявки" src={applications} link='/'/>
          <MenuItem text="Профиль" src={profile}  link='/profile'/>
          <MenuItem text="События" src={events}  link='/'/>
          <MenuItem text="Услуги" src={services} link='/'/>
          <MenuItem text="Консультация" src={consultation}  link='/'/>
          <MenuItem text="Обучение" src={education}  link='/'/>
          <MenuItem text="О сервисе" src={about} link='/'/>
          <button className='menu-btn'>
            <img className='gift-logo' src={gift} alt='gift'/>
            Мои предложения
          </button>
        </div>
        <div className='main-block'>
          <div className='head-main'>
            <span className='head-name'>
              <img className='main-head-logo' src={profileLogo} alt="profile-logo" />
              <span className='main-head-text'>Профиль</span>
            </span>
            {
              editMode 
              ? 
                <span className='edit-block edit-mode'>
                  <button onClick={() => setEditMode(false)}>Отменить</button>
                  <button onClick={() => setEditMode(false)}>Сохранить</button>
                </span> 
              : 
                <span className='edit-block edit-btn' onClick={() => setEditMode(true)}>
                  Редактировать
                  <img src={editBtn} alt='edit-logo'/>
                </span>
            }
            
          </div>
          <div className='notice'>
            <img src={notice} alt='notice-logo' className='notice-logo'/>
            <p className='notice-text'>
              Поддерживайте данные в актуальном виде, чтобы получать свежие предложения
            </p>
          </div>
          <div className='profile-info'>
            <div className='personal-info'>
              <div className='personal-data data-card'>
                <h3 className='info-name'>Личные данные</h3>
                <DataElement name="Фамилия" data={info.secondname} editMode={editMode}/>
                <DataElement name="Имя" data={info.firstname} editMode={editMode}/>
                <DataElement name="Отчество" data={info.surname} editMode={editMode}/>
                <DataElement name="Дата рождения" data={info.birthday} editMode={editMode}/>
                <DataElement name="Телефон" data={info.phone} editMode={editMode}/>
                <DataElement name="Почта" data={info.email} editMode={editMode}/>
              </div>
              <div className='passport-data data-card'>
                <h3 className='info-name'>Паспортные данные</h3>
                <DataElement name="Серия / Номер" data={info.passport_number} editMode={editMode}/>
                <DataElement name="Код подразделения" data={info.department_code} editMode={editMode}/>
                <DataElement name="Дата выдачи" data={info.issue_date} editMode={editMode}/>
                <DataElement name="Место рождения" data={info.birth_place} editMode={editMode}/>
                <DataElement name="Адрес регистрации" data={info.registration_adress} editMode={editMode}/>
                <DataElement name="Фактический адрес" data={info.actual_adress} editMode={editMode}/>
              </div>
            </div>
            <div className='settings'>
              <h3 className='info-name'>Настройки</h3>
              <span className='settings-element'><input type='checkbox' className='checkbox sms'/>Получать уведомления по смс</span>
              <span className='settings-element'><input type='checkbox' className='checkbox news-on-email'/>Согласие на e-mail рассылку новостей</span>
            </div>
          </div>
        </div>
      </main>
      <footer>
          <div className='footer-content'>
            <div className='footer-content-top'>
              <div>
                <div className='footer-links'>
                  <img src={logo} alt='8z logo'/>
                  <div className='links-block'>
                    <a>Наши тарифы</a>
                    <a>Как получить</a>
                    <a>Отзывы</a>
                    <a>Требования к заемщику</a>
                    <a>Вопрос ответ</a>
                  </div>
                </div>
                <div className='legal-information'>
                  <p className='legal-information-text'>
                    ООО "ВОСЬМИЗАЙМ", ИНН 1685017396, ОГРН 1241600034400 
                    420044, Россия, Респ. Татарстан, г. Казань, пр-кт Ямашева, д.36
                  </p>
                  <div className='money-icon'>
                    {/* <img className='small-money' src={money} alt='Money icon'/>
                    <img className='big-money' src={money2} alt='Money icon'/> */}
                    <img className='small-money' src={monet} alt='Money icon'/>
                    <img className='big-money' src={monet} alt='Money icon'/>
                  </div>
                </div>
              </div>
              <div className='contacts'>
                <span className='contact-name'>E-mail</span>
                <a className='contact'>osh@it-groupp.ru</a>
                <span className='contact-name'>Телефон</span>
                <a className='contact'>+7 800 600 00 27</a>
              </div>
            </div>
            <div className='footer-content-middle'>
              <p>Подавая заявку Вы соглашаетесь, что заявка действует
                 бессрочно и может быть отозвана 
                 путем отправки номера телефона через форму Отписаться от рассылок.</p>
              <p>Все материалы, размещенные на сайте являются собственностью 
                владельцев сайта, либо собственностью организаций, с которыми 
                у владельцев сайта есть соглашение о размещении материалов. Для 
                аналитических целей на сайте работает система статистики, которая 
                собирает информацию о посещенных страницах сайта, заполненных формах 
                и т.д.</p>
              <p>Регистрируясь на сайте или оставляя тем или иным способом свои 
                персональные данные (информацию о себе), Вы предоставляете право 
                обрабатывать вашу персональную информацию в соответствии с Политикой 
                обработки персональных данных сайта.</p>
              <p>Вся представленная на сайте информация, касающаяся финансовых 
                услуг, носит информационный характер и ни при каких условиях не 
                является публичной офертой, определяемой положениями статьи 437 
                Гражданского кодекса РФ. Нажатие на кнопку «Получить деньги», а 
                также последующее заполнение тех или иных форм, не накладывает на 
                владельцев сайта никаких обязательств, не гарантирует получение 
                денежных средств.</p>
            </div>
            <div className='footer-content-bottom'>
              <a>Отписаться от рассылок</a>
              <a>Политика обработки персональных данных</a>
              <a>Политика сбора cookie</a>
              <a>Согласие на звонки и email-рассылки с домена отправителя</a>
            </div>
          </div>
      </footer>
    </>
  )
}

export default App