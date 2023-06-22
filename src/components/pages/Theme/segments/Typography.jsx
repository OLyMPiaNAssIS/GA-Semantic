import React from 'react';

// semantic
import { Header } from 'semantic-ui-react';

export const TypographySegment = () => {
  return (
    <>
      <Header size='huge'>Huge</Header>
      <Header size='large'>Large</Header>
      <Header as='h1'>Heading 1</Header>
      <Header as='h2'>Heading 2</Header>
      <Header as='h3'>Heading 3</Header>
      <Header as='h4'>Heading 4</Header>
      <Header as='h5'>Heading 5</Header>
      <Header as='h6'>Heading 6</Header>
      <Header size='medium'>Medium</Header>
      <Header size='small'>Small</Header>
      <Header size='tiny'>Tiny</Header>
    </>
  );
};
