import './DataElement.css'
import { useState, useEffect } from 'react';
import MaskedInput from 'react-text-mask';
import DadataInput from './DadataInput';
// Приведение даты формата YYYY-MM-DD в формат DD.MM.YYYY для отображения
const formatDate = (date) => {
  const [year, month, day] = date.split('-');
  return `${day}.${month}.${year}`;
}

// Проверка на совершеннолетие
const is18years = (date) => {
  const birthDate = new Date(date);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  return age > 18 || (age === 18 && today.getMonth() > birthDate.getMonth()) || (age === 18 && today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
};

// Проверка но корректность почты
const validateEmail = (data) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data)
} 

function DataElement({ name, data, editMode, type, onChange }) {

  const [isAdult, setIsAdult] = useState(is18years(data));
  const [validEmailStatus, setValidEmail] = useState(validateEmail(data));

  useEffect(() => {
    if (type === 'date') {
      setIsAdult(is18years(data));
    } else if (type === 'email') {
      setValidEmail(validateEmail(data));
    }
  }, [data, type]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    onChange(newDate);
    setIsAdult(is18years(newDate));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    onChange(newEmail);
    setValidEmail(validateEmail(newEmail));
  };

  const handleChange = (e) => {    
    onChange(e.target.value);
  };


  //////////
  const handleFullNameChange = (value) => {
    onChange(value);
  };
  //////////


  const phoneNumberMask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  const passportNumberMask = [/[1-9]/,/\d/,' ',/\d/,/\d/,' ','/',' ',/\d/,/\d/,/\d/,/\d/,/\d/,/\d/];

  const renderContent = () => {
    switch (name) {
      case "Дата рождения":
        return (
          <>
            {editMode ? (
              <>
                <input 
                  type={type} 
                  defaultValue={data} 
                  className="element-input"
                  onChange={handleDateChange}
                />
                {!isAdult && <span className='error-message'>Вам нет 18 лет</span>}
              </>
            ) : (
              <span className="element-text">{formatDate(data)}</span>
            )}
          </>
        )
      case "Дата выдачи":
        return (
          <>
            {editMode ? (
                <input 
                  type={type} 
                  defaultValue={data} 
                  className="element-input"
                  onChange={handleDateChange}
                />
            ) : (
              <span className="element-text">{formatDate(data)}</span>
            )}
          </>
        )
      case "Телефон":
        return (
          <>
            {editMode ? (
                <MaskedInput
                  type='tel'
                  mask={phoneNumberMask}
                  placeholder={'+7 (___) ___-__-__'}
                  guide={false}
                  showMask
                  defaultValue={data}
                  onChange={handleChange}
                  className="input"
                />
            ) : (
              <span className="element-text">{data}</span>
            )}
          </>
        )
      case "Почта":
        return (
          <>
          {editMode ? (
              <>
                <input 
                  type={type} 
                  defaultValue={data} 
                  className="element-input"
                  onChange={handleEmailChange}
                />
                {!validEmailStatus && <span className='error-message'>Не корректно введен email</span>}
              </>
            ) : (
              <span className="element-text">{data}</span>
            )}
          </>
        )
      case "Серия / Номер":
        return (
          <>
          {editMode ? (
              <>
                <MaskedInput
                  type='passnum'
                  mask={passportNumberMask}
                  placeholder={'__ __ / ______'}
                  guide={false}
                  showMask
                  defaultValue={data}
                  onChange={handleChange}
                  className="input"
                />
              </>
            ) : (
              <span className="element-text">{data}</span>
            )}
          </>
        )
      case "Код подразделения":
        return (
          <>
          {editMode ? (
              <>
                <input 
                  type={type} 
                  defaultValue={data} 
                  className="element-input"
                  onChange={handleDateChange}
                />
              </>
            ) : (
              <span className="element-text">{data}</span>
            )}
          </>
        )
        //Dadata
        case "Имя":
        return (
          <>
          {editMode ? (
              <>
                <DadataInput onChange={handleFullNameChange} name={data}/>
              </>
            ) : (
              <span className="element-text">{data}</span>
            )}
          </>
        )
        case "Фамилия":
          return (
            <>
            {editMode ? (
                <>
                  <DadataInput onChange={handleFullNameChange} name={data}/>
                </>
              ) : (
                <span className="element-text">{data}</span>
              )}
            </>
          )
        case "Отчество":
          return (
            <>
            {editMode ? (
                <>
                  <DadataInput onChange={handleFullNameChange} name={data}/>
                </>
              ) : (
                <span className="element-text">{data}</span>
              )}
            </>
          )
        //
      default:
        return (
          <>
            {editMode ? (
              <div>
                <input 
                  type={type} 
                  defaultValue={data} 
                  className="element-input"
                  onChange={(e) => onChange(e.target.value)} 
                />
              </div>
            ) : (
              <span className="element-text">{data}</span>
            )}
          </>
        )
    }
  }
  
  return (
    <div className="element">
      <h3 className="element-name">{name}</h3>
      {renderContent()}
    </div>
  );
}

export default DataElement; 



// function DataElement({ name, data, editMode, type, onChange }) {
//     return (
//       <div className="element">
//         <h3 className="element-name">{name}</h3>
//         {
//             editMode
//             ? <div>
//                 <input 
//                   type={type} 
//                   defaultValue={data} 
//                   className="element-input"
//                   onChange={(e) => onChange(e.target.value)} 
//                 />
//               </div>
//             : type === "date"
//                 ? <span className="element-text">{formatDate(data)}</span>
//                 : <span className="element-text">{data}</span>            
//         }
//         {
//           name === "Дата рождения"
//           ? is18years(data)
//             ? <></>
//             : <span>Вам нет 18 лет</span>
//           : <></>
//         }
//       </div>
//     );
// }
  
//   export default DataElement; 