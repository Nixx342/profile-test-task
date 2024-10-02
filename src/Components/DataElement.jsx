
function DataElement({ name, data, editMode}) {
    return (
      <div>
        <h3>{name}</h3>
        {
            editMode
            ? <input type="text" value={data} />
            : <span>{data}</span>
        }
      </div>
    );
  }
  
  export default DataElement; 