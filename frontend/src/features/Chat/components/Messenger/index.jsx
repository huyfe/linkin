import { prop, equals } from 'ramda';
import React from 'react';
import classNames from 'classnames';
import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';
import FileMessage from './FileMessage';
import chatIconUrl from './../../assets/chat-icon.svg';

function Message({ message }) {
  const type = prop('type', message);
  const author = prop('author', message);
  const me = equals(author, 'me');

  function renderMessageOfType(type) {
    switch(type) {
    case 'text':
      return <TextMessage {...message} />;
    case 'emoji':
      return <EmojiMessage {...message} />;
    case 'file':
      return <FileMessage {...message} />;
    default:
      console.error(`Attempting to load message with unsupported file type '${type}'`);
    }
  }

  return (
    <div className="sc-message">
      <div className={classNames('sc-message--content', { 'sent': me }, { 'received': !me })}>
        <div
          className="sc-message--avatar"
          style={{
            backgroundImage: `url(${chatIconUrl})`
          }}
        />

        {renderMessageOfType(type)}
      </div>
    </div>
  )
}

export default Message;
