import React from 'react';

// semantic
import { Form, Header, Input } from 'semantic-ui-react';

import { placeholderText } from './';

export const FormLabelSegment = () => {
  return (
    <Form>
      <Form.Field required>
        <label htmlFor='input-default'>Label</label>
        <Input id='input-default' placeholder={placeholderText} />
      </Form.Field>

      <Header size='small' dividing>
        States
      </Header>
      <Form.Field className='error'>
        <label htmlFor='input-error'>Error</label>
        <Input id='input-error' placeholder={placeholderText} />
      </Form.Field>

      <Form.Field className='success'>
        <label htmlFor='input-success'>Success</label>
        <Input id='input-success' placeholder={placeholderText} />
      </Form.Field>

      <Form.Field className='disabled'>
        <label htmlFor='input-disabled'>Disabled</label>
        <Input id='input-disabled' placeholder={placeholderText} />
      </Form.Field>
    </Form>
  );
};
