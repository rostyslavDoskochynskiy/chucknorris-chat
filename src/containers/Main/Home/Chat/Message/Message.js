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
        <div className="msg-info-name">{userName}</div>
        <div className="msg-info-time">{time}</div>
      </div>

      <div className="msg-text">
        {text} {me && '😄'}
      </div>
    </div>
  </li>
));
