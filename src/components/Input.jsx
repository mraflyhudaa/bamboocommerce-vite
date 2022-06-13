import React from 'react';

const Input = (props) => {
  const style =
    'focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md';
  return (
    <div>
      <label
        htmlFor={props.label}
        className='block text-sm font-medium text-gray-700'>
        {props.label}
      </label>
      <div className='mt-1 relative rounded-md shadow-sm'>
        <input
          {...props}
          className='focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md'
        />
      </div>
    </div>
  );
};

export default Input;
