import React from 'react';

// semantic
import { Header, Icon, Label } from 'semantic-ui-react';

export const LabelSegment = () => {
  return (
    <>
      <Header size='small' dividing>
        Default
      </Header>
      <div className='row'>
        <Label color='green'>Filled Green</Label>
        <Label color='blue'>Filled Blue</Label>
        <Label color='grey'>Filled Grey</Label>
      </div>

      <Header size='small' dividing>
        Outlined
      </Header>
      <div className='row'>
        <Label basic color='green'>
          Outlined Green
        </Label>
        <Label basic color='blue'>
          Outlined Blue
        </Label>
        <Label basic color='grey'>
          Outlined Grey
        </Label>
      </div>

      <Header size='small' dividing>
        Interactive
      </Header>
      <div className='row'>
        <Label basic as='button' color='green'>
          Interactive
          <Icon name='delete' />
        </Label>
        <Label as='button' color='blue'>
          Interactive
          <Icon name='delete' />
        </Label>
        <Label as='button' color='grey'>
          Interactive
          <Icon name='delete' />
        </Label>
      </div>
    </>
  );
};
