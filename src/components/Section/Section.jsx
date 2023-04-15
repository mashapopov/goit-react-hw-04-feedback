import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
