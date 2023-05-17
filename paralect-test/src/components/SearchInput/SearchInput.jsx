import { TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useContext } from 'react';
import Context from '../../Context';

export const SearchInput = () => {
  const { queryParams, saveQueryParams } = useContext(Context);
  const form = useForm({
    initialValues: { keyword: '' },
  });

  const Btn = () => <Button type="submit">Найти</Button>;
  return (
    <form onSubmit={form.onSubmit((values) => saveQueryParams({ ...queryParams, ...values }))}>
      <TextInput
        icon={<IconSearch size="1.1rem" stroke={1.5} />}
        radius="sm"
        size="md"
        rightSection={<Btn />}
        placeholder="Search questions"
        {...form.getInputProps('keyword')}
      />
    </form>
  );
};
