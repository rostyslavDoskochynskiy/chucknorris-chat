import React from 'react';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

const mapStateToProps = ({ notifications }) => ({
  notifications,
});

export const Notification = connect(mapStateToProps)(
  ({ notifications }) => <Notifications notifications={notifications} />,
);
