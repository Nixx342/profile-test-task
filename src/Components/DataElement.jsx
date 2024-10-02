import './DataElement.css'

function DataElement({ name, data, editMode}) {
    return (
      <div className="element">
        <h3 className="element-name">{name}</h3>
        {
            editMode
            ? <input type="text" value={data} className="element-input"/>
            : <span className="element-text">{data}</span>
        }
      </div>
    );
  }
  
  export default DataElement; 