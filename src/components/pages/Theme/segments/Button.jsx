import React from 'react';

// semantic
import { Button } from 'semantic-ui-react';

export const ButtonSegment = () => {
  return (
    <div className='column'>
      <div className='row'>
        <Button size='small'>Small Primary</Button>
        <Button size='medium'>Medium Primary</Button>
        <Button size='large'>Large Primary</Button>
      </div>
      <div className='row'>
        <Button secondary size='small'>
          Small Secondary
        </Button>
        <Button secondary size='medium'>
          Medium Secondary
        </Button>
        <Button secondary size='large'>
          Large Secondary
        </Button>
      </div>
    </div>
  );
};
