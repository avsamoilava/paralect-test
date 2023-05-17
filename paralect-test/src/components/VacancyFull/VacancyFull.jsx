import React from 'react';
import { Vacancy } from '../Vacancy/Vacancy';
import { Description } from '../Description/Description';

export const VacancyFull = ({ vacancy }) => {
  return (
    <div className="vacancy">
      {Object.keys(vacancy).length && (
        <React.Fragment>
          <Vacancy vacancy={vacancy} />
          <Description vacancy={vacancy} />
        </React.Fragment>
      )}
    </div>
  );
};
