import './App.css'
import logo from './assets/8z-logo.svg'
import phone from './assets/phone.svg'
import exit from './assets/exit-btn.svg'
import gift from './assets/gift.svg'
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
          <MenuItem text="Мои заявки"/>
          <div className='menu-item'>Мои заявки</div>
          <div className='menu-item'>Профиль</div>
          <div className='menu-item'>События</div>
          <div className='menu-item'>Услуги</div>
          <div className='menu-item'>Консультация</div>
          <div className='menu-item'>Обучение</div>
          <div className='menu-item'>О сервисе</div>
          <button className='menu-btn'>
            <img className='gift-logo' src={gift} alt='gift'/>
            Мои предложения
          </button>
        </div>
      </main>
    </>
  )
}

export default App
