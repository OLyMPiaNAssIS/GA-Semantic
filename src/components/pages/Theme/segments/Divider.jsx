import React from 'react';

// semantic
import { Divider } from 'semantic-ui-react';

export const DividerSegment = () => {
  return (
    <div className='column'>
      <div>
        <p>
          Some text <strong>above</strong> the divider consectetur adipiscing
          elit.. Cras a risus metus. Morbi sed augue in lorem lobortis tempor.
          Proin arcu nisl, elementum sit amet odio finibus, porta accumsan
          tellus. Sed a vestibulum lectus.
        </p>
      </div>
      <Divider />
      <div>
        <p>
          Different text <strong>below</strong> the divider, consectetur
          adipiscing elit. Cras a risus metus. Morbi sed augue in lorem lobortis
          tempor. Proin arcu nisl, elementum sit amet odio finibus, porta
          accumsan tellus. Sed a vestibulum lectus.
        </p>
      </div>
    </div>
  );
};
