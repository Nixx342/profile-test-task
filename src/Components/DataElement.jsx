import './DataElement.css'

// Приведение даты формата YYYY-MM-DD в формат DD.MM.YYYY для отображения
const formatDate = (date) => {
  const [year, month, day] = date.split('-');
  return `${day}.${month}.${year}`;
}


const is18years = (date) => {
  const birthDate = new Date(date);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  return age > 18 || (age === 18 && today.getMonth() > birthDate.getMonth()) || (age === 18 && today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
};


function DataElement({ name, data, editMode, type, onChange }) {
    return (
      <div className="element">
        <h3 className="element-name">{name}</h3>
        {
            editMode
            ? <div>
                <input 
                  type={type} 
                  defaultValue={data} 
                  className="element-input"
                  onChange={(e) => onChange(e.target.value)} 
                />
              </div>
            : type === "date"
                ? <span className="element-text">{formatDate(data)}</span>
                : <span className="element-text">{data}</span>            
        }
        {
          name == "Дата рождения"
          ? is18years(data)
            ? <></>
            : <span>Вам нет 18 лет</span>
          : <></>
        }
      </div>
    );



























  }
  
  export default DataElement; 