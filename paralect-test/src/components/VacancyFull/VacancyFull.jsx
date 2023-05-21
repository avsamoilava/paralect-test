import React from 'react';
import { Vacancy } from '../Vacancy/Vacancy';
import { Description } from '../Description/Description';
import { Flex } from '@mantine/core';

export const VacancyFull = ({ vacancy }) => {
  return (
    <Flex gap={20} direction={'column'} maw={773} m={'0 auto'}>
      {Object.keys(vacancy).length && (
        <React.Fragment>
          <Vacancy mode="nolink" vacancy={vacancy} />
          <Description vacancy={vacancy} />
        </React.Fragment>
      )}
    </Flex>
  );
};
