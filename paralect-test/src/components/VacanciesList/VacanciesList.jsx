import { Flex } from '@mantine/core';
import { Vacancy } from '../Vacancy/Vacancy';

export const VacanciesList = ({ vacancies }) => {
  return (
    <Flex direction={'column'} gap={20}>
      {vacancies.map((vacancy) => (
        <Vacancy key={vacancy.id} vacancy={vacancy} />
      ))}
    </Flex>
  );
};
