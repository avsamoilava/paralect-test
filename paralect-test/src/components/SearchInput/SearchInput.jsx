import { TextInput, Button, useMantineTheme } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useContext } from 'react';
import Context from '../../context';

export const SearchInput = () => {
  const { queryParams, saveQueryParams } = useContext(Context);
  const theme = useMantineTheme();
  const form = useForm({
    initialValues: { keyword: '' },
  });

  const Btn = () => (
    <Button type={'submit'} bg={theme.colors.blue500} radius={8} data-elem="search-button">
      Поиск
    </Button>
  );
  return (
    <form onSubmit={form.onSubmit((values) => saveQueryParams({ ...queryParams, ...values }))}>
      <TextInput
        icon={<IconSearch size={'16'} stroke={1.5} />}
        size={'lg'}
        radius={'8px'}
        h={48}
        rightSection={<Btn />}
        rightSectionWidth={100}
        placeholder={'Введите название вакансии'}
        {...form.getInputProps('keyword')}
        mb={16}
        data-elem="search-input"
      />
    </form>
  );
};
