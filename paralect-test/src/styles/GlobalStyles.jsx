import { Global, useMantineTheme } from '@mantine/core';

export const GlobalStyles = () => {
  const theme = useMantineTheme();
  return (
    <Global
      styles={{
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        'body, html': {
          fontFamily: 'Inter, sans-serif',
          color: theme.colors.black,
          height: '100%',
          background: theme.colors.grey400,
        },
        a: {
          color: theme.colors.black,
          textDecoration: 'none',
          '&.active': {
            color: theme.colors.blue500,
          },
        },
        '#root': {
          textAlign: 'center',
          height: '100%',
        },
      }}
    />
  );
};
