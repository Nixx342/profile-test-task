import './DataElement.css'
import { useState, useEffect } from 'react';
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

function DataElement({ name, data, editMode, type, onChange }) {
  const [isAdult, setIsAdult] = useState(is18years(data));

  useEffect(() => {
    setIsAdult(is18years(data));
  }, [data]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    onChange(newDate);
    setIsAdult(is18years(newDate));
  };



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
                {!isAdult && <span>Вам нет 18 лет</span>}
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
              <>
                <input 
                  type={type} 
                  defaultValue={data} 
                  className="element-input"
                  onChange={handleDateChange}
                />
                {/* {!isAdult && <span>Вам нет 18 лет</span>} */}
              </>
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
                  onChange={handleDateChange}
                />
                {/* {!isAdult && <span>Вам нет 18 лет</span>} */}
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
                <input 
                  type={type} 
                  defaultValue={data} 
                  className="element-input"
                  onChange={handleDateChange}
                />
                {/* {!isAdult && <span>Вам нет 18 лет</span>} */}
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
                {/* {!isAdult && <span>Вам нет 18 лет</span>} */}
              </>
            ) : (
              <span className="element-text">{data}</span>
            )}
          </>
        )
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