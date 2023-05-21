import parse from 'html-react-parser';
import cl from './Description.module.scss';
import { Box, useMantineTheme } from '@mantine/core';

export const Description = (props) => {
  const { vacancyRichText } = props.vacancy;
  const theme = useMantineTheme();
  return (
    <Box p={24} radius={10} className={cl['description']}>
      {parse(vacancyRichText)}
    </Box>
  );
};
