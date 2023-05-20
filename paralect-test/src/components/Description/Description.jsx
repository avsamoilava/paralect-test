import parse from 'html-react-parser';
import cl from './Description.module.scss';
import { Box } from '@mantine/core';

export const Description = (props) => {
  const { vacancyRichText } = props.vacancy;
  return (
    <Box p={24} className={cl['description']}>
      {parse(vacancyRichText)}
    </Box>
  );
};
