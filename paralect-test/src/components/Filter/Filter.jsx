import React, { useEffect, useState } from 'react';
import cl from './Filter.module.css';
import { useForm } from '@mantine/form';
import { Box, Select, Button, NumberInput, Group } from '@mantine/core';
import { VacanciesAPI } from '../../api/VacanciesAPI';

export const Filter = () => {
  const form = useForm({
    initialValues: {
      industry: 0,
      from: 0,
      to: 0,
    },
  });

  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchIndustries = async () => {
      const data = await VacanciesAPI.getIndustries(token);
      const newData = data.map((elem) => ({ [elem.title]: elem.key }));
      setIndustries(newData.map((elem) => Object.keys(elem)[0]));
    };
    fetchIndustries();
  }, []);

  return (
    <Box maw={300} mx="auto" className={cl['filter']}>
      <h2>Filters</h2>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Select
          label="Отрасль"
          placeholder="Выберите отрасль"
          data={industries.length ? industries : []}
          {...form.getInputProps('industry')}
        />
        <Group label="Оклад">
          <NumberInput placeholder="от" {...form.getInputProps('from')} />
          <NumberInput placeholder="до" {...form.getInputProps('to')} />
        </Group>
        <Button type="submit">Применить</Button>
      </form>
    </Box>
  );
};
