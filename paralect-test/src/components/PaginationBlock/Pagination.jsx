import React, { useContext, useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import Context from '../../Context';

export const PaginationBlock = () => {
  const [activePage, setPage] = useState(1);
  const { queryParams, saveQueryParams } = useContext(Context);

  useEffect(() => {
    saveQueryParams({ ...queryParams, page: activePage });
  }, [activePage]);

  return (
    <Pagination
      value={activePage}
      onChange={setPage}
      total={25}
      boundaries={0}
      siblings={1}
      position="center"
    />
  );
};
