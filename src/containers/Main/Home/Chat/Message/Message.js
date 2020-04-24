import React, { memo } from 'react';
import './index.css';

export const Message = memo(({ time, text, avatar, userName, me }) => (
  <li className={`msg ${me ? 'right-msg' : 'left-msg'}`}>
    <div
      className="msg-img"
      style={{
        backgroundImage: `url(${avatar})`,
      }}
    />
    <div className="msg-bubble">
      <div className="msg-info">
        <span className="msg-info-name">{userName}</span>
        <span className="msg-info-time">{time}</span>
      </div>

      <span className="msg-text">
        {text} {me && '😄'}
      </span>
    </div>
  </li>
));
