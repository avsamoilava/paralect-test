import { useContext, useEffect, useState } from 'react';
import cl from './Filter.module.scss';
import { useForm } from '@mantine/form';
import { Box, Select, Button, NumberInput, Group, Flex } from '@mantine/core';
import { VacanciesAPI } from '../../api/VacanciesAPI';
import Context from '../../Context';
import { IconChevronDown, IconX } from '@tabler/icons-react';

export const Filter = () => {
  const form = useForm({
    initialValues: {
      industry: 0,
      from: 0,
      to: 0,
    },
  });

  const [industries, setIndustries] = useState({});
  const { queryParams, saveQueryParams } = useContext(Context);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchIndustries = async () => {
      const data = await VacanciesAPI.getIndustries(token);
      data &&
        setIndustries(
          data.reduce((acc, item) => {
            acc[item.title] = item.key;
            return acc;
          }, {})
        );
    };
    fetchIndustries();
  }, [queryParams]);

  const handleSubmit = (values) => {
    saveQueryParams({
      ...queryParams,
      catalogues: industries[values.industry],
      payment_from: values.from,
      payment_to: values.to,
    });
  };
  const handleReset = () => {
    saveQueryParams({});
    form.reset();
  };

  return (
    <Box w={315} mah={360} mx="auto" p={20} className={cl['filter']}>
      <form
        onSubmit={form.onSubmit((values) => {
          handleSubmit(values);
        })}
        onReset={handleReset}
      >
        <Flex direction="column" gap={20}>
          <Flex justify={'space-between'}>
            <div className={cl['title']}>Фильтры</div>
            <button className={cl['reset']} type="reset">
              <Flex gap={4} align={'center'}>
                Сбросить все
                <IconX size={16} color={'#ACADB9'} />
              </Flex>
            </button>
          </Flex>
          <Group w="100%" gap={8}>
            <div className={cl['subtitle']}>Отрасль</div>
            <Select
              w="100%"
              placeholder="Выберите отрасль"
              rightSection={<IconChevronDown size="1rem" />}
              rightSectionWidth={30}
              styles={{ rightSection: { pointerEvents: 'none' } }}
              data={Object.keys(industries).length ? Object.keys(industries) : []}
              {...form.getInputProps('industry')}
            />
          </Group>
          <Group w="100%" gap={8}>
            <div className={cl['subtitle']}>Оклад</div>
            <Flex w="100%" direction="column" gap={8}>
              <NumberInput w="100%" placeholder="от" {...form.getInputProps('from')} />
              <NumberInput w="100%" placeholder="до" {...form.getInputProps('to')} />
            </Flex>
          </Group>

          <Button w="100%" type="submit">
            Применить
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
