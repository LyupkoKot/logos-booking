import { useRef } from 'react';

const Input = (props) => {
  const {
    id,
    containerClassName = '',
    labelClassName = '',
    inputClassName = '',
    placeholder = '',
    label = '',
    type = 'text',
    error = false,
    errorText = '',
    required = false,
    register,
    ...rest
  } = props;
  return (
    <div className={containerClassName}>
      <label
        htmlFor={id}
        className={`ml-0 mr-auto text-sm px-2 pt-1.5 ${labelClassName} ${error ? 'text-red-500' : 'text-green-500'}`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`bottom-bar ${
          error
            ? 'focus-within:border-red-500 border-red-500 border-2'
            : 'focus-within:border-green-500 border-green-500 border-2'
        }`}
      >
        <input
          type={type}
          // className={`outline-none border-gray-300 border rounded p-2 mt-3 w-full
          // focus:shadow-inputfocus focus:border-white ${inputClassName}`}
          className="bottom-bar-input"
          id={id}
          placeholder={placeholder}
          {...register}
          {...rest}
        />
      </div>

      {errorText && <p className="text-xs pl-2	text-red-500 mb-4">{errorText}</p>}
    </div>
  );
};

export default Input;
