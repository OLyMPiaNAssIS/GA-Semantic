import React, { useState } from 'react';

//redux datagrid
import Datagrid, { PaginationHandler } from 'redux-form-datagrid';

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
  Modal,
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
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // vars
  const data = [
    // missing workphone should be rendered as blank
    {
      name: 'John Doe',
      govtID: '823456789',
      homePhone: '3431231233',
      workPhone: '',
      insuredDate: '09/10/2020',
      amount: '1875.00',
    },
    // incorrect data in govtID should be rendered with error
    {
      name: 'John Smith',
      govtID: '72345670',
      homePhone: '3431231237',
      workPhone: '',
      insuredDate: '02/13/2020',
      amount: '1250.00',
    },
    {
      name: 'Darius Carreira',
      govtID: '223456678',
      homePhone: '8674561293',
      workPhone: '8674561245',
      insuredDate: '07/25/2020',
      amount: '150.00',
    },
    {
      name: 'John Smith',
      govtID: '12345678',
      homePhone: '3431231236',
      workPhone: '',
      insuredDate: '01/13/2020',
      amount: '11625.00',
    },
    {
      name: 'Darius Carreira',
      govtID: '523456678',
      homePhone: '8674561297',
      workPhone: '8674561245',
      insuredDate: '03/11/2020',
      amount: '1152.29',
    },
    {
      name: 'John Smith',
      govtID: '32345678',
      homePhone: '3431231234',
      workPhone: '',
      insuredDate: '06/22/2020',
      amount: '-1250',
    },
    {
      name: 'Darius Carreira1',
      govtID: '923456678',
      homePhone: '8674561294',
      workPhone: '8674561245',
      insuredDate: '04/28/2020',
      amount: '1875.00',
    },
    {
      name: 'John Smith1',
      govtID: '42345678',
      homePhone: '3431231234',
      workPhone: '',
      insuredDate: '08/15/2020',
      amount: '1050',
    },
    {
      name: 'Darius Carreira1',
      govtID: '223456678',
      homePhone: '8674561292',
      workPhone: '8674561245',
      insuredDate: '05/19/2020',
      amount: '1050.00',
    },
    {
      name: 'John Smith',
      govtID: '62345678',
      homePhone: '3431231234',
      workPhone: '',
      insuredDate: '09/14/2020',
      amount: '69.95',
    },
    {
      name: 'Darius Carreira1',
      govtID: '823456678',
      homePhone: '8674561294',
      workPhone: '8674561245',
      insuredDate: '03/20/2020',
      amount: '65',
    },
    {
      name: 'John Smith1',
      govtID: '72345678',
      homePhone: '3431231234',
      workPhone: '',
      insuredDate: '12/12/2020',
      amount: '34.97',
    },
    {
      name: 'Darius Carreira1',
      govtID: '323456678',
      homePhone: '8674561292',
      workPhone: '8674561245',
      insuredDate: '11/12/2020',
      amount: '34.97',
    },
    {
      name: 'John Smith',
      govtID: '62345678',
      homePhone: '3431231234',
      workPhone: '',
      insuredDate: '05/30/2020',
      amount: '34.97',
    },
    {
      name: 'Darius Carreira1',
      govtID: '123456678',
      homePhone: '8674561294',
      workPhone: '8674561245',
      insuredDate: '09/29/2020',
      amount: '34.97',
    },
  ];

  const columnModel = [
    {
      dataIndex: 'name',
      name: 'Name',
      order: 1,
      sortComparator: (first, second) => {
        if (first < second) {
          return true;
        }
        return false;
      },
      sortable: true,
      sortingType: 'string',
    },
    {
      dataIndex: 'govtID',
      name: 'Government ID',
      order: 2,
      sortable: true,
      sortingType: 'number',
      sortComparator: 'default', // can be skipped and default should be used
      // formatter should only be called if data is valid else render value as is with error
      // formatter should only be called for non empty, non-null values
      /*not implemented yet*/
      validator: (value) => {
        if (value.length === 9) {
          return true;
        }
        return false;
      },
      // Can custom render cell values (might be key for redux form)
      formatter: (value) =>
        `${value.substring(0, 3)}-${value.substring(3, 5)}-${value.substring(
          5
        )}`,
    },
    {
      dataIndex: 'homePhone',
      name: 'Home Phone',
      order: 3,
      sortable: true,
      sortingType: 'number',
      // skipping default comparator
      // skipping formatter, same value should be rendered
    },
    {
      dataIndex: 'insuredDate',
      name: 'Insured Date',
      order: 4,
      sortable: true,
      sortingType: 'date',
    },
    {
      dataIndex: 'amount',
      name: 'Amount',
      order: 5,
      sortable: true,
      sortingType: 'number',
      formatter: (value) => <div>${value}</div>,
    },
    {
      dataIndex: 'workPhone',
      name: 'Work Phone',
      sortable: true,
      sortingType: 'number',
      // missing order should be pushed to end
      formatter: (value) => (
        <div>
          <Icon name='phone' />
          {value &&
            `(${value.substring(0, 3)})-${value.substring(
              3,
              6
            )}-${value.substring(6)}`}
        </div>
      ),
    },
  ];

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

  const contentText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
  const placeholderText = 'Enter your value here...';

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
          <div className='column'>
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
        </Segment>
      </div>

      <div className='section'>
        <Segment>
          <Header as='h2' dividing>
            Input
          </Header>

          <div className='grid'>
            <Input
              value={inputValue}
              onChange={handleInputChange}
              placeholder={placeholderText}
              icon={
                inputValue.length === 0 ? (
                  ''
                ) : (
                  <Icon
                    name='times circle outline'
                    onClick={handleClear}
                    link
                  />
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
          <MessageExample header='Title' content={contentText} icon='alarm' />

          <Header size='small' dividing>
            Info
          </Header>
          <MessageExample content={contentText} info icon='info circle' />

          <Header size='small' dividing>
            Warning
          </Header>
          <MessageExample content={contentText} warning icon='warning sign' />

          <Header size='small' dividing>
            Positive/success
          </Header>
          <MessageExample content={contentText} success icon='check circle' />

          <Header size='small' dividing>
            Negative/error
          </Header>
          <MessageExample content={contentText} error icon='warning circle' />

          <Header size='small' dividing>
            Blue
          </Header>
          <MessageExample
            color='blue'
            content={contentText}
            icon='info circle'
            size='mini'
          />

          <Header size='small' dividing>
            Orange
          </Header>
          <MessageExample
            color='orange'
            content={contentText}
            icon='warning sign'
            size='mini'
          />

          <Header size='small' dividing>
            Green
          </Header>
          <MessageExample
            color='green'
            content={contentText}
            icon='check circle'
            size='mini'
          />

          <Header size='small' dividing>
            Red
          </Header>
          <MessageExample
            color='red'
            content={contentText}
            icon='warning circle'
            size='mini'
          />
        </Segment>
      </div>

      <div className='section'>
        <Segment padded>
          <Header as='h2' dividing>
            Modal
          </Header>

          <Button onClick={handleOpenModal}>Open Modal</Button>

          <Header size='small' dividing>
            Modal trigger
          </Header>
          <Modal
            onClose={handleCloseModal}
            onOpen={handleOpenModal}
            open={isModalOpen}
            trigger={<Button>Open Modal (trigger)</Button>}
            closeIcon
          >
            <Modal.Header>
              <Header as='h2'>Heading 2</Header>
            </Modal.Header>

            <Modal.Content>
              <Modal.Description>
                <p>{contentText}</p>
              </Modal.Description>
            </Modal.Content>

            <Modal.Actions>
              <Button secondary size='small' onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button size='small' onClick={handleCloseModal}>
                Confirm
              </Button>
            </Modal.Actions>
          </Modal>
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
        <Segment padded>
          <Header as='h2' dividing>
            Table - Redux Datagrid
          </Header>
          <Datagrid
            columnModel={columnModel}
            data={data}
            name='sample'
            localStore
            pageSize={5}
            title=''
          />
        </Segment>
      </div>

      <div className='section'>
        <Segment>
          <Header as='h2' dividing>
            Text Area
          </Header>

          <Form>
            <div className='column'>
              <Form.Field
                control={TextArea}
                label='Textarea'
                placeholder={placeholderText}
              />

              <Form.Field
                control={TextArea}
                error
                label='Error'
                placeholder={placeholderText}
              />

              <Form.Field
                control={TextArea}
                disabled
                label='Disabled'
                placeholder={placeholderText}
              />
            </div>
          </Form>
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
