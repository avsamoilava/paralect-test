import { useContext, useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import Context from '../../Context';

export const PaginationBlock = ({ total }) => {
  const [activePage, setPage] = useState(1);
  const { queryParams, saveQueryParams } = useContext(Context);

  useEffect(() => {
    saveQueryParams({ ...queryParams, page: activePage });
  }, [activePage]);
  const getTotalPages = (total) => {
    return Math.round(total / 20) > 25 ? Math.round(total / 20) : 25;
  };

  return (
    <Pagination
      value={activePage}
      onChange={setPage}
      total={getTotalPages(total)}
      boundaries={0}
      siblings={1}
      position="center"
      mt={40}
    />
  );
};
