import { Union } from '../icons';
import { NavLink } from 'react-router-dom';
import {
  Flex,
  Group,
  useMantineTheme,
  Header,
  Text,
  Transition,
  Burger,
  Paper,
  createStyles,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const HEADER_HEIGHT = rem(84);
const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },
  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    gap: 20,
    overflow: 'hidden',
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1138,
    padding: 10,
    margin: '0 auto',
    height: HEADER_HEIGHT,
  },
  links: {
    flexBasis: '63%',
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

export const HeaderWithBurger = () => {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <Header bg={theme.colors.white} className={classes.root}>
      <Flex className={classes.header}>
        <Group spacing={12}>
          <Union />
          <Text ff={'Poppins, sans-serif'} fz={24} fw={600}>
            Jobored
          </Text>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size={'sm'} />
        </Group>
        <Group className={classes.links} spacing={60}>
          <NavLink to={'/'}>Поиск Вакансий</NavLink>
          <NavLink to={'/favorites'}>Избранное</NavLink>
        </Group>
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              <NavLink to={'/'}>Поиск Вакансий</NavLink>
              <NavLink to={'/favorites'}>Избранное</NavLink>
            </Paper>
          )}
        </Transition>
      </Flex>
    </Header>
  );
};
