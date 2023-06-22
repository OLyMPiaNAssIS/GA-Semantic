import React, { useState } from 'react';

// semantic
import { Button, Header, Modal } from 'semantic-ui-react';

import { contentText } from './';

export const ModalSegment = () => {
  // state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // functions
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
    </>
  );
};
