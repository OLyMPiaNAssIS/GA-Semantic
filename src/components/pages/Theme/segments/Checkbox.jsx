import React, { useState } from 'react';

// semantic
import { Checkbox, Header, Form } from 'semantic-ui-react';

export const CheckboxSegment = () => {
  // state
  const [isChecked, setIsChecked] = useState(false);

  // functions
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <Checkbox label='Default Checkbox' onChange={handleOnChange} />

      <Header size='small' dividing>
        Disabled
      </Header>
      <Checkbox label='Disabled Checkbox' disabled />

      <Header size='small' dividing>
        Form
      </Header>
      <div className='section'>
        <Form.Checkbox label='Form checkbox' />
      </div>
      <Form.Field control={Checkbox} label='Form field' />
    </>
  );
};
