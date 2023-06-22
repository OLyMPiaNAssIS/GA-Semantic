import React, { useState } from 'react';

// semantic
import { Header, Message } from 'semantic-ui-react';

import { contentText } from './';

const MessageExample = (props) => {
  const [isMessageOpen, setIsMessageOpen] = useState(true);

  const handleDismissClick = () => {
    setIsMessageOpen(false);
  };

  return (
    <div>
      {isMessageOpen && (
        <Message onDismiss={handleDismissClick} {...props} />
      )}
    </div>
  );
};

export const MessageSegment = () => {
  return (
    <>
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
    </>
  );
};
