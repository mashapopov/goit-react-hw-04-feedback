import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <>
      <span>{message}</span>
    </>
  );
};

Notification.propType = {
  message: PropTypes.string.isRequired,
};
