import { useLazyQuery } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { GET_DASHBOARD_USER } from "../../queries/dashboard-user.queries";

function useDashboardUser(
  name?: string,
  surname?: string,
  email?: string,
  startDate?: string,
  endDate?: string
) {
  const [list, setList] = useState<any[]>([]);
  const [nextToken, setNextToken] = useState("");
  const [fetch, { data, loading, error }] = useLazyQuery(GET_DASHBOARD_USER, {
    variables: {
      name,
      surname,
      email,
      startDate,
      endDate,
    } as any,
  });

  const loadMore = useCallback(() => {
    if (nextToken) {
      fetch({
        variables: {
          name,
          surname,
          email,
          startDate,
          endDate,
          nextToken,
        },
      });
    }
  }, [fetch, nextToken, name, surname, email, startDate, endDate]);

  const loadFilter = useCallback(() => {
    setList([])
    fetch({
      variables: {
        name,
        surname,
        email,
        startDate,
        endDate,
        nextToken: "",
      },
    });
  }, [fetch, nextToken, name, surname, email, startDate, endDate]);

  useEffect(() => {
    if (startDate && endDate) {
      fetch();
    }
  }, []);

  useEffect(() => {
    setNextToken(data?.dashboardUser?.nextToken);
  }, [data?.dashboardUser?.nextToken]);

  useEffect(() => {
    if (data?.dashboardUser?.user) {
      setList((prev) => [...prev, ...(data?.dashboardUser?.user || [])]);
    }
  }, [data?.dashboardUser?.user]);
  
  return {
    data: list,
    dashboardUser: data?.dashboardUser,
    loading,
    error,
    loadMore,
    loadFilter,
    nextToken,
  };
}

export default useDashboardUser;
