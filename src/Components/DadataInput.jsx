import React, { useState } from 'react';
import axios from 'axios';
import './DadataInput.css'

const API_KEY = 'c4e693def5518786b2fe1687b3d787c8d9c8fbce';

const DadataInput = ({ onChange, name }) => {
  const [inputValue, setInputValue] = useState(name);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);
    onChange(value); 

    if (value.length > 2) { 
      try {
        const response = await axios.post(
          'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio',
          {
            query: value,
          },
          {
            headers: {
              'Authorization': `Token ${API_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );

        setSuggestions(response.data.suggestions);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (name) => {
    setInputValue(name);
    setSuggestions([]);
    onChange(name); // Вызываем метод onChange родителя с выбранным значением
  };

  return (
    <div className='dadata-input'>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Введите ФИО"
      />
      {/* {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.value}
              onClick={() => handleSelect(suggestion.value)}
            >
              {suggestion.value}
            </li>
          ))}
        </ul>
      )} */}

        {suggestions.length > 0 && (
                <div className='suggestion'>
                {suggestions.map((suggestion) => (
                    <span
                    key={suggestion.value}
                    onClick={() => handleSelect(suggestion.value)}
                    >
                    {suggestion.value}
                    </span>
                ))}
                </div>
        )}
    </div>
  );
};

export default DadataInput;
