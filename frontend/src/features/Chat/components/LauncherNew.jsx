import { pipe, prop, length, last, equals } from 'ramda';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ChatWindow from './ChatWindow';
import launcherIcon from '../assets/logo-no-bg.svg';
import launcherIconActive from '../assets/close-icon.png';
import incomingMessageSound from '../assets/sounds/notification.mp3';

function LauncherNew(props) {
  const {
    isOpen,
    onClick,
    mute,
	  showEmoji,
	  agentProfile,
	  messageList,
	  newMessagesCount,
	  onMessageWasSent,
	  onFilesSelected,
    fileUpload,
    pinMessage,
	  onPinMessage,
    placeholder,
  } = props;

  const defaultState = {
	  isOpen: false,
	  messageList,
  };

  const [state, setState] = useState(defaultState);

  useEffect(() => {
    setState(state => ({
      ...state,
      isOpen,
    }));
  }, [isOpen]);

  useEffect(() => {
	  const prevMessageListLength = pipe(
	  	prop('messageList'),
		  length,
	  )(state);

	  const massageListLength = length(messageList);

	  const isIncoming = pipe(
	  	last,
		  prop('author'),
		  equals('them')
	  )(messageList);

	  const isNew = massageListLength > prevMessageListLength;

	  if (isIncoming && isNew) {
	    if (!mute) {
        playIncomingMessageSound();
      }

		  setState(state => ({
			  ...state,
			  messageList,
		  }));
	  }
  }, [messageList]);

  function playIncomingMessageSound() {
	  let audio = new Audio(incomingMessageSound);
	  audio.play();
  }

  function handleClick() {
  	if (onClick) {
      onClick();
	  } else {
  	  setState(state => ({
        ...state,
        isOpen: !state.isOpen
      }));
    }
  }

  return (
    <div id="sc-launcher">
	    <div className={classNames('sc-launcher', { 'opened': state.isOpen })} onClick={handleClick}>
		    <MessageCount count={newMessagesCount} isOpen={state.isOpen} />
		    <img className={'sc-open-icon'} src={launcherIconActive} />
		    <img className={'sc-closed-icon'} src={launcherIcon} />
	    </div>

	    <ChatWindow
		    messageList={messageList}
		    onUserInputSubmit={onMessageWasSent}
		    onFilesSelected={onFilesSelected}
		    agentProfile={agentProfile}
		    isOpen={state.isOpen}
		    onClose={onClick}
		    showEmoji={showEmoji}
        fileUpload={fileUpload}
        pinMessage={pinMessage}
		    onPinMessage={onPinMessage}
        placeholder={placeholder}
	    />
    </div>
  );
}

const MessageCount = ({ count, isOpen }) => {
  if (count === 0 || isOpen === true) return null;

  return (
    <div className='sc-new-messages-count'>
      {count}
    </div>
  );
};

LauncherNew.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  mute: PropTypes.bool,
  showEmoji: PropTypes.bool,
  messageList: PropTypes.arrayOf(PropTypes.object),
  newMessagesCount: PropTypes.number,
  onMessageWasSent: PropTypes.func,
  onMessageWasReceived: PropTypes.func,
  fileUpload: PropTypes.bool,
  pinMessage: PropTypes.object,
  onPinMessage: PropTypes.func,
  placeholder: PropTypes.string,
};

LauncherNew.defaultProps = {
  isOpen: false,
  mute: false,
  showEmoji: true,
  messageList: [],
  newMessagesCount: 0,
  fileUpload: true,
  placeholder: 'Write a reply...'
};

export default LauncherNew;
