import React, { useState } from 'react';

// semantic
import {
  Button,
  Checkbox,
  Divider,
  Dropdown,
  Form,
  Header,
  Icon,
  Input,
  Label,
  Message,
  Segment,
  Select,
  Tab,
  Table,
  TextArea,
} from 'semantic-ui-react';

// styles
import './Theme.css';

const MessageExample = (props) => {
  const [isMessageOpen, setIsMessageOpen] = useState(true);

  const handleMessageDismissClick = () => {
    setIsMessageOpen(false);
  };

  return (
    <div>
      {isMessageOpen && (
        <Message onDismiss={handleMessageDismissClick} {...props} />
      )}
    </div>
  );
};

export const Theme = () => {
  // state
  const [inputValue, setInputValue] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  // vars

  const dropdownOptions = [
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

  const panes = [
    {
      menuItem: {
        key: 'Balances',
        content: 'Balances',
      },
      render: () => <Tab.Pane>Some content for Balances</Tab.Pane>,
    },
    {
      menuItem: {
        key: 'Rates',
        content: 'Rates',
      },
      render: () => <Tab.Pane>Some content for Rates</Tab.Pane>,
    },
    {
      menuItem: {
        key: 'Renewal Rates',
        icon: 'bell',
        content: 'Renewal Rates',
      },
      render: () => <Tab.Pane>Some content for Renewal</Tab.Pane>,
    },
    {
      menuItem: {
        key: 'Performance Lock',
        icon: 'lock',
        content: 'Performance Lock',
      },
      render: () => <Tab.Pane>Some content for Performance</Tab.Pane>,
    },
  ];

  const messageText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  // handlers
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
  };

  const handleCheckboxOnChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  return (
    <div>
      <div className='section'>
        <Header as='h1'>Global Atlantic</Header>
      </div>

      <div className='section'>
        <Segment>
          <Header as='h2' dividing>
            Button
          </Header>

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
        </Segment>
      </div>

      <div className='section'>
        <Segment>
          <Header as='h2' dividing>
            Checkbox
          </Header>

          <Checkbox
            label='Default Checkbox'
            onChange={handleCheckboxOnChange}
          />

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
        </Segment>
      </div>

      <div className='section'>
        <Segment>
          <Header as='h2' dividing>
            Divider
          </Header>
          <div className='column'>
            <div>
              <p>
                Some text <strong>above</strong> the divider consectetur
                adipiscing elit.. Cras a risus metus. Morbi sed augue in lorem
                lobortis tempor. Proin arcu nisl, elementum sit amet odio
                finibus, porta accumsan tellus. Sed a vestibulum lectus.
              </p>
            </div>
            <Divider />
            <div>
              <p>
                Different text <strong>below</strong> the divider, consectetur
                adipiscing elit. Cras a risus metus. Morbi sed augue in lorem
                lobortis tempor. Proin arcu nisl, elementum sit amet odio
                finibus, porta accumsan tellus. Sed a vestibulum lectus.
              </p>
            </div>
          </div>
        </Segment>
      </div>

      <div className='section'>
        <Segment>
          <Header as='h2' dividing>
            Dropdown
          </Header>
          <div className='dropdownBox'>
            <Dropdown
              options={dropdownOptions}
              placeholder='Select'
              selection
            />
            <Dropdown
              error
              options={dropdownOptions}
              placeholder='Select'
              selection
            />
            <Dropdown
              disabled
              options={dropdownOptions}
              placeholder='Select'
              selection
            />
          </div>
        </Segment>
      </div>

      <div className='section'>
        <Segment>
          <Header as='h2' dividing>
            Form Label
          </Header>

          <Form>
            <Form.Field required>
              <label htmlFor='input-default'>Label</label>
              <Input id='input-default' placeholder='Input' />
            </Form.Field>

            <Form.Field className='error'>
              <label htmlFor='input-error'>Error</label>
              <Input id='input-error' placeholder='Input' />
            </Form.Field>

            <Form.Field className='success'>
              <label htmlFor='input-success'>Success</label>
              <Input id='input-success' placeholder='Input' />
            </Form.Field>

            <Form.Field className='disabled'>
              <label htmlFor='input-disabled'>Disabled</label>
              <Input id='input-disabled' placeholder='Input' />
            </Form.Field>

            <Form.Field
              control={Select}
              label='Dropdown'
              options={[
                { key: 'option1', text: 'Option 1', value: 'option1' },
                { key: 'option2', text: 'Option 2', value: 'option2' },
              ]}
              placeholder='Select options'
            />

            <Form.Field
              control={TextArea}
              label='About'
              placeholder='Tell us more about you...'
            />
          </Form>
        </Segment>
      </div>

      <div className='section'>
        <Segment>
          <Header as='h2' dividing>
            Input
          </Header>

          <Input
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Text input'
            icon={
              inputValue.length === 0 ? (
                ''
              ) : (
                <Icon name='times circle outline' onClick={handleClear} link />
              )
            }
          />
        </Segment>
      </div>

      <div className='section'>
        <Segment padded>
          <Header as='h2' dividing>
            Label
          </Header>
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
        </Segment>
      </div>

      <div className='section'>
        <Segment padded>
          <Header as='h2' dividing>
            Message
          </Header>
          <MessageExample header='Title' content={messageText} icon='alarm' />

          <Header size='small' dividing>
            Info
          </Header>
          <MessageExample content={messageText} info icon='info circle' />

          <Header size='small' dividing>
            Warning
          </Header>
          <MessageExample content={messageText} warning icon='warning sign' />

          <Header size='small' dividing>
            Positive/success
          </Header>
          <MessageExample content={messageText} success icon='check circle' />

          <Header size='small' dividing>
            Negative/error
          </Header>
          <MessageExample content={messageText} error icon='warning circle' />

          <Header size='small' dividing>
            Blue
          </Header>
          <MessageExample
            color='blue'
            content={messageText}
            icon='info circle'
            size='mini'
          />

          <Header size='small' dividing>
            Orange
          </Header>
          <MessageExample
            color='orange'
            content={messageText}
            icon='warning sign'
            size='mini'
          />

          <Header size='small' dividing>
            Green
          </Header>
          <MessageExample
            color='green'
            content={messageText}
            icon='check circle'
            size='mini'
          />

          <Header size='small' dividing>
            Red
          </Header>
          <MessageExample
            color='red'
            content={messageText}
            icon='warning circle'
            size='mini'
          />
        </Segment>
      </div>

      <div className='section'>
        <Segment padded>
          <Header as='h2' dividing>
            Tab
          </Header>
          <Tab panes={panes} />
        </Segment>
      </div>

      <div className='section'>
        <Segment padded>
          <Header as='h2' dividing>
            Table - Semantic UI
          </Header>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Transaction Name</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell textAlign='right'>Amount</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row verticalAlign='middle'>
                <Table.Cell>Anniversary</Table.Cell>
                <Table.Cell>
                  <div className='status'>
                    <Icon
                      size='large'
                      color='green'
                      verticalAlign='middle'
                      name='check circle'
                    />
                    Complete
                  </div>
                </Table.Cell>
                <Table.Cell textAlign='right'>$1,293.17</Table.Cell>
                <Table.Cell textAlign='center'>
                  <Button size='medium'>Confirm</Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Renewal</Table.Cell>
                <Table.Cell>
                  <div className='status'>
                    <Icon size='large' color='red' name='warning circle' />
                    Incomplete
                  </div>
                </Table.Cell>
                <Table.Cell textAlign='right'>$2,351.92</Table.Cell>

                <Table.Cell textAlign='center'>No Actions</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Calendar Year End</Table.Cell>
                <Table.Cell>
                  <div className='status'>
                    <Icon
                      size='large'
                      color='orange'
                      name='exclamation triangle'
                    />
                    Pending
                  </div>
                </Table.Cell>
                <Table.Cell textAlign='right'>$5,479.34</Table.Cell>
                <Table.Cell textAlign='center'>
                  <Checkbox
                    label='Action Required'
                    onChange={handleCheckboxOnChange}
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Issue</Table.Cell>
                <Table.Cell>
                  <div className='status'>
                    <Icon size='large' color='green' name='check circle' />
                    Complete
                  </div>
                </Table.Cell>
                <Table.Cell textAlign='right'>$3,419.87</Table.Cell>

                <Table.Cell textAlign='center'>
                  <Label basic color='green'>
                    Approved
                  </Label>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </div>

      <div className='section'>
        <Segment>
          <Header as='h2' dividing>
            Typography
          </Header>

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
        </Segment>
      </div>
    </div>
  );
};
