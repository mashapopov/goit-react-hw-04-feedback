import PropTypes from 'prop-types';
import { FeedbackList, Button } from './FeedbackOptions.styled';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackList>
        {options.map(option => {
          return (
            <li key={nanoid()}>
              <Button
                name={option}
                type="button"
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </Button>
            </li>
          );
        })}
      </FeedbackList>
    </>
  );
};

FeedbackOptions.propType = {
  onClick: PropTypes.func.isRequired,
};
