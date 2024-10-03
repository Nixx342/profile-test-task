import './DataElement.css'

const formatDate = (date) => {
  const [year, month, day] = date.split('-');
  return `${day}.${month}.${year}`;
}

// function DataElement({ name, data, editMode, type, register, errors, fieldName }) {
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
                {/* {errors.name && <span>{errors.name.message}</span>} */}
              </div>
            : type === "date"
                ? <span className="element-text">{formatDate(data)}</span>
                : <span className="element-text">{data}</span>
            
            
        }
      </div>
    );
  }
  
  export default DataElement; 