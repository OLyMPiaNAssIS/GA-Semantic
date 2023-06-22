import React, { useState } from 'react';

// semantic
import { Form, Header, Icon, Input } from 'semantic-ui-react';

import { placeholderText } from './';

export const InputSegment = () => {
  // state
  const [inputValue, setInputValue] = useState('');

  // vars
  const inputTypes = [
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'time',
    'url',
  ];

  // functions
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <>
      <div className='grid'>
        <Input
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholderText}
          icon={
            inputValue.length === 0 ? (
              ''
            ) : (
              <Icon name='times circle outline' onClick={handleClear} link />
            )
          }
        />
      </div>

      <Header size='small' dividing>
        Error
      </Header>
      <Input error placeholder={placeholderText} />

      <Header size='small' dividing>
        Disabled
      </Header>
      <Input disabled placeholder={placeholderText} />

      <Header size='small' dividing>
        Types
      </Header>
      <Form>
        <div className='grid'>
          {inputTypes.map((type, index) => (
            <Form.Field
              className='formLabel'
              control='input'
              key={`input-type-${index}`}
              label={type}
              type={type}
              placeholder={placeholderText}
            />
          ))}
        </div>
      </Form>
    </>
  );
};
