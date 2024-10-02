import './MenuItem.css'
import arrow from '../assets/right-arrow.svg'

function MenuItem({ text, src, link}) {
  return (
    <a className='menu-item' href={link}>
      <span className='menu-item-info'>
        {src && <img src={src} alt="Icon 1" className="menu-item-icon" />}
        {text}
      </span>
      <img src={arrow} alt="arrow" className="menu-item-arrow" />
    </a>
  );
}

export default MenuItem; 