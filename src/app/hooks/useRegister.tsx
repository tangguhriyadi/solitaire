import React, { useEffect, useState } from "react";
import { FormData } from "../utils/types";
import { AxiosResponse } from "axios";
import { instance } from "../api";

const useRegister = () => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsloading] = useState(false);

    const register = async (data: FormData) => {
        setIsloading(true);
        try {
            const response: AxiosResponse = await instance.post(
                "/register",
                data
            );
            return Promise.resolve(response.data)
        } catch (err: any) {
            setIsError(true);
            return Promise.reject(err.response.data.error)
        } finally {
            setIsloading(false);
        }
    };

    return {
        isError,
        isLoading,
        register,
    };
};

export default useRegister;
