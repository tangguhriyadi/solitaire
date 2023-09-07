import React, { useEffect, useMemo, useState } from "react";
import { instance } from "../api";
import { UserHooks, UserPagination } from "../utils/types";
import { AxiosResponse } from "axios";

interface Props {
    page: number;
}

const useUsers = (props: Props): UserHooks => {
    const [users, setUsers] = useState<UserPagination>();
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        const fetchUsers = async (page: number) => {
            try {
                const response: AxiosResponse<UserPagination> =
                    await instance.get(`/users`, {
                        params: {
                            page: page,
                        },
                    });
                setUsers(response.data)
            } catch {
                setIsError(true);
            } finally {
                setIsloading(false);
            }
        };
        fetchUsers(props.page);
    }, [props.page]);

    return {
        data: users,
        isError,
        isLoading,
    };
};

export default useUsers;
