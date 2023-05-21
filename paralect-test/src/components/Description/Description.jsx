import parse from 'html-react-parser';
import cl from './Description.module.scss';
import { Box, useMantineTheme } from '@mantine/core';

export const Description = (props) => {
  const { vacancyRichText } = props.vacancy;
  const theme = useMantineTheme();
  return (
    <Box
      className={cl['description']}
      p={24}
      style={{ borderRadius: '10px', border: `1px solid ${theme.colors.grey200}` }}
      bg={theme.colors.white}
    >
      {parse(vacancyRichText)}
    </Box>
  );
};
