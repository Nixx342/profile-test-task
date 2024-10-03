import InputMask from 'react-input-mask';

function PhoneNumberInput({ value, onChange }) {
  return (
    <InputMask
      mask="+7 (999) 999-99-99"
      value={value}
      onChange={onChange}
      placeholder="+7 (___) ___-__-__"
      className="phone-input"
    >
      {(inputProps) => <input {...inputProps} type="tel" />}
    </InputMask>
  );
}

export default PhoneNumberInput;