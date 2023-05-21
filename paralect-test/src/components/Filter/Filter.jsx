import { useContext, useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import {
  Box,
  Select,
  Button,
  NumberInput,
  Group,
  Flex,
  Text,
  useMantineTheme,
  UnstyledButton,
} from '@mantine/core';
import { VacanciesAPI } from '../../api/VacanciesAPI';
import Context from '../../context';
import { IconChevronDown, IconX } from '@tabler/icons-react';

export const Filter = () => {
  const form = useForm({
    initialValues: {
      industry: 0,
      from: 0,
      to: 0,
    },
  });
  const theme = useMantineTheme();
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
    <Box
      w={315}
      mah={360}
      mx={'auto'}
      p={20}
      bg={theme.colors.white}
      style={{ border: `1px solid ${theme.colors.grey200}`, borderRadius: '12px', flexShrink: 0 }}
    >
      <form
        onSubmit={form.onSubmit((values) => {
          handleSubmit(values);
        })}
        onReset={handleReset}
      >
        <Flex direction={'column'} gap={20}>
          <Flex justify={'space-between'}>
            <Text fz={20} fw={700}>
              Фильтры
            </Text>
            <UnstyledButton
              type={'reset'}
              bg={'none'}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              <Flex gap={4} align={'center'}>
                <Text color={theme.colors.grey500} fz={14}>
                  Сбросить все
                </Text>
                <IconX size={16} color={theme.colors.grey500} />
              </Flex>
            </UnstyledButton>
          </Flex>
          <Group w={'100%'} gap={8}>
            <Text fw={700} lh={'19px'} ta={'left'}>
              Отрасль
            </Text>
            <Select
              w={'100%'}
              placeholder={'Выберите отрасль'}
              rightSection={<IconChevronDown size={'1.3rem'} />}
              rightSectionWidth={30}
              styles={{ rightSection: { pointerEvents: 'none' } }}
              data={Object.keys(industries).length ? Object.keys(industries) : []}
              {...form.getInputProps('industry')}
              data-elem="industry-select"
            />
          </Group>
          <Group w={'100%'} gap={8}>
            <Text fw={700} lh={'19px'} ta={'left'}>
              Оклад
            </Text>
            <Flex w={'100%'} direction={'column'} gap={8}>
              <NumberInput
                w={'100%'}
                placeholder="от"
                {...form.getInputProps('from')}
                data-elem="salary-from-input"
              />
              <NumberInput
                w={'100%'}
                placeholder="до"
                {...form.getInputProps('to')}
                data-elem="salary-to-input"
              />
            </Flex>
          </Group>
          <Button w={'100%'} type={'submit'} bg={theme.colors.blue500} radius={8}>
            Применить
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
