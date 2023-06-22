import React from 'react';

// semantic
import { Header, Segment } from 'semantic-ui-react';

// segments
import {
  ButtonSegment,
  CheckboxSegment,
  DividerSegment,
  DropdownSegment,
  FormLabelSegment,
  InputSegment,
  LabelSegment,
  MessageSegment,
  ModalSegment,
  TableSegment,
  TabSegment,
  TextAreaSegment,
  TypographySegment,
} from './segments';

// styles
import './Theme.css';

const SectionWrapper = ({ title, children }) => {
  return (
    <div className='section'>
      <Segment>
        <Header as='h2' dividing>
          {title}
        </Header>
        {children}
      </Segment>
    </div>
  );
};

export const Theme = () => {
  return (
    <div>
      <Header as='h1'>Global Atlantic</Header>

      <SectionWrapper title='Button'>
        <ButtonSegment />
      </SectionWrapper>

      <SectionWrapper title='Checkbox'>
        <CheckboxSegment />
      </SectionWrapper>

      <SectionWrapper title='Divider'>
        <DividerSegment />
      </SectionWrapper>

      <SectionWrapper title='Dropdown'>
        <DropdownSegment />
      </SectionWrapper>

      <SectionWrapper title='Form Label'>
        <FormLabelSegment />
      </SectionWrapper>

      <SectionWrapper title='Input'>
        <InputSegment />
      </SectionWrapper>

      <SectionWrapper title='Label'>
        <LabelSegment />
      </SectionWrapper>

      <SectionWrapper title='Message'>
        <MessageSegment />
      </SectionWrapper>

      <SectionWrapper title='Modal'>
        <ModalSegment />
      </SectionWrapper>

      <SectionWrapper title='Table'>
        <TableSegment />
      </SectionWrapper>

      <SectionWrapper title='Tab'>
        <TabSegment />
      </SectionWrapper>

      <SectionWrapper title='Text Area'>
        <TextAreaSegment />
      </SectionWrapper>

      <SectionWrapper title='Typography'>
        <TypographySegment />
      </SectionWrapper>
    </div>
  );
};
