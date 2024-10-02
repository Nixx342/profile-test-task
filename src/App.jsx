import './App.css'
import logo from './assets/8z-logo.svg'
import phone from './assets/phone.svg'
import exit from './assets/exit-btn.svg'
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
import MenuItem from './Components/MenuItem'
import { useState } from 'react'
import DataElement from './Components/DataElement'
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
  actual_adress: "г. Москва улица Ленина дом 22 квартира 13"
}

function App() {
  const [editMode, setEditMode] = useState (false)
  return (
    <>
      <header>
        <img className='logo' src={logo} alt="8z-logo" />
        <div className='btn-phone-block'>
          <button className='exit-btn'>
            <img className='exit-logo' src={exit} alt='exit'/>
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
                <h3>Личные данные</h3>
                <DataElement name="Фамилия" data={info.secondname} editMode={editMode}/>
                <DataElement name="Имя" data={info.firstname} editMode={editMode}/>
                <DataElement name="Отчество" data={info.surname} editMode={editMode}/>
                <DataElement name="Дата рождения" data={info.birthday} editMode={editMode}/>
                <DataElement name="Телефон" data={info.phone} editMode={editMode}/>
                <DataElement name="Почта" data={info.email} editMode={editMode}/>
              </div>
              <div className='passport-data data-card'>
                <h3>Паспортные данные</h3>
                <DataElement name="Серия / Номер" data={info.passport_number} editMode={editMode}/>
                <DataElement name="Код подразделения" data={info.department_code} editMode={editMode}/>
                <DataElement name="Дата выдачи" data={info.issue_date} editMode={editMode}/>
                <DataElement name="Место рождения" data={info.birth_place} editMode={editMode}/>
                <DataElement name="Адрес регистрации" data={info.registration_adress} editMode={editMode}/>
                <DataElement name="Фактический адрес" data={info.actual_adress} editMode={editMode}/>
              </div>
            </div>
            <div className='settings'>
              <h3>Настройки</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
