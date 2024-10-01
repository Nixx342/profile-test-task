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
import MenuItem from './Components/MenuItem'

function App() {

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
          <MenuItem text="Мои заявки" src={applications}/>
          <MenuItem text="Профиль" src={profile}/>
          <MenuItem text="События" src={events}/>
          <MenuItem text="Услуги" src={services}/>
          <MenuItem text="Консультация" src={consultation}/>
          <MenuItem text="Обучение" src={education}/>
          <MenuItem text="О сервисе" src={about}/>
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

            <span></span>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
