import { TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useContext } from 'react';
import cl from './SearchInput.module.scss';
import Context from '../../context';

export const SearchInput = () => {
  const { queryParams, saveQueryParams } = useContext(Context);
  const form = useForm({
    initialValues: { keyword: '' },
  });

  const Btn = () => (
    <Button type="submit" bg={'#5E96FC'} radius={8} className={cl['search-btn']}>
      Поиск
    </Button>
  );
  return (
    <form onSubmit={form.onSubmit((values) => saveQueryParams({ ...queryParams, ...values }))}>
      <TextInput
        icon={<IconSearch size="16" stroke={1.5} />}
        size="lg"
        radius="8px"
        h={48}
        rightSection={<Btn />}
        rightSectionWidth={100}
        placeholder="Введите название вакансии"
        {...form.getInputProps('keyword')}
        mb={16}
      />
    </form>
  );
};
