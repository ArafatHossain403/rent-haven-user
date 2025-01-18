import { useFilteredListingsQuery } from "@/graphql/generated";
import { useEffect, useState } from "react";

export const useListingData = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
//   const [sort, setSort] = useState({
//     field: "updated_at",
//     direction: "desc",
//   });
//   const [status, setStatus] = useState(undefined);

  const { data, refetch, isSuccess, isLoading, isError } =
    useFilteredListingsQuery({
      limit,
      page,
    //   search: query,
    //   sort_col: sort?.field,
    //   sort_dir: sort?.direction,
    //   status: status,
    });

  useEffect(() => {
    refetch();
  }, [query, page, limit, refetch]);

//   const nodes = data?.data?.nodes;
//   const totalCount = data?.data?.total_count || 0;
//   const currentPage = data?.data?.page;

  return {
    data,
    limit,
    page,
    isSuccess,
    isLoading,
    isError,
    setQuery,
    setPage,
    setLimit,
    refetch,
  };
};
