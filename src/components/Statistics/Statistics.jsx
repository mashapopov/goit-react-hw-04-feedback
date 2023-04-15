import PropTypes from 'prop-types';
import { StatisticsReviews, Span } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsReviews className="Statistics__reviews">
        <Span>Good: {good}</Span>
        <Span>Neutal: {neutral}</Span>
        <Span>Bad: {bad}</Span>
        <Span>Total: {total}</Span>
        <Span>Positive feedback: {positivePercentage}%</Span>
      </StatisticsReviews>
    </>
  );
};

Statistics.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
