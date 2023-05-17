import React, { useContext, useEffect, useState } from 'react';
import cl from './Filter.module.css';
import { useForm } from '@mantine/form';
import { Box, Select, Button, NumberInput, Group } from '@mantine/core';
import { VacanciesAPI } from '../../api/VacanciesAPI';
import Context from '../../Context';
import { createQueryStr } from '../../utils';

export const Filter = () => {
  const form = useForm({
    initialValues: {
      industry: 0,
      from: 0,
      to: 0,
    },
  });

  const [industries, setIndustries] = useState([]);
  const { queryParams, saveQueryParams } = useContext(Context);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchIndustries = async () => {
      const data = await VacanciesAPI.getIndustries(token);
      setIndustries(
        data.reduce((acc, item) => {
          acc[item.title] = item.key;
          return acc;
        }, {})
      );
    };
    fetchIndustries();
    console.log(queryParams);
    console.log(createQueryStr(queryParams));
  }, [queryParams]);

  const handleSubmit = (values) => {
    saveQueryParams({
      ...queryParams,
      catalogues: industries[values.industry],
      payment_from: values.from,
      payment_to: values.to,
    });
  };

  return (
    <Box maw={300} mx="auto" className={cl['filter']}>
      <h2>Filters</h2>
      <form
        onSubmit={form.onSubmit((values) => {
          handleSubmit(values);
        })}
      >
        <Select
          label="Отрасль"
          placeholder="Выберите отрасль"
          data={Object.keys(industries).length ? Object.keys(industries) : []}
          {...form.getInputProps('industry')}
        />
        <Group>
          <NumberInput placeholder="от" {...form.getInputProps('from')} />
          <NumberInput placeholder="до" {...form.getInputProps('to')} />
        </Group>
        <Button type="submit">Применить</Button>
      </form>
    </Box>
  );
};
