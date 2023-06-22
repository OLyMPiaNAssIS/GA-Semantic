import React from 'react';

// semantic
import { Dropdown, Form, Header, Select } from 'semantic-ui-react';

export const DropdownSegment = () => {
  // vars
  const options = [
    {
      text: 'January',
      value: 'january',
    },
    {
      text: 'February',
      value: 'february',
    },
    {
      text: 'March',
      value: 'march',
    },
    {
      text: 'April',
      value: 'april',
    },
    {
      text: 'May',
      value: 'may',
    },
    {
      text: 'June',
      value: 'june',
    },
    {
      text: 'July',
      value: 'july',
    },
  ];

  return (
    <>
      <div className='column'>
        <Dropdown options={options} placeholder='Select' selection />
        <Dropdown error options={options} placeholder='Select' selection />
        <Dropdown
          disabled
          options={options}
          placeholder='Select'
          selection
        />
      </div>

      <Header size='small' dividing>
        Form Field
      </Header>
      <Form>
        <Form.Field
          control={Select}
          label='Dropdown'
          options={[
            { key: 'option1', text: 'Option 1', value: 'option1' },
            { key: 'option2', text: 'Option 2', value: 'option2' },
          ]}
          placeholder='Select'
        />
      </Form>
    </>
  );
};
