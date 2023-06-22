import React, { useState } from 'react';

// semantic
import { Button, Checkbox, Icon, Table, Label } from 'semantic-ui-react';

export const TableSegment = () => {
  // state
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  // functions
  const handleCheckboxOnChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  return (
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
              <Icon size='large' color='orange' name='exclamation triangle' />
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
  );
};
