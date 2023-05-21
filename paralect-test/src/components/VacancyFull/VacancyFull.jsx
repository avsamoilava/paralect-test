import React from 'react';
import { Vacancy } from '../Vacancy/Vacancy';
import { Description } from '../Description/Description';
import { Flex } from '@mantine/core';
import { Navigate } from 'react-router-dom';

export const VacancyFull = ({ vacancy }) => {
  return (
    <Flex className="vacancy" gap={20} direction={'column'} maw={1138} m={'0 auto'}>
      {Object.keys(vacancy).length ? (
        <React.Fragment>
          <Vacancy vacancy={vacancy} />
          <Description vacancy={vacancy} />
        </React.Fragment>
      ) : (
        <Navigate to="/empty" />
      )}
    </Flex>
  );
};
