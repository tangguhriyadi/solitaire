import React, { useState } from "react";
import Button from "./Button";
import { useForm, Controller } from "react-hook-form";
import { FormData } from "../utils/types";
import useRegister from "../hooks/useRegister";

const Header: React.FC<{}> = () => {
    const [isShowForm, setIsShowForm] = useState<boolean>(false);
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormData>();

    const { isLoading, register } = useRegister();

    const onSubmit = async (data: FormData) => {
        await register(data)
            .then((res) => {
                alert(`success register with token ${res.token}`);
                setIsShowForm(false);
            })
            .catch((err) => alert(err));
    };
    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-48 items-center mb-5">
                {isShowForm ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Email:</label>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Invalid email address",
                                    },
                                }}
                                render={({ field }) => <input {...field} />}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div>
                            <label>Password:</label>
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Password is required" }}
                                render={({ field }) => <input type="password" {...field} />}
                            />
                            {errors.password && (
                                <p>{errors.password.message}</p>
                            )}
                        </div>

                        <div className="flex justify-between">
                            <button
                                className="custom-button mt-2"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? "Loading..." : "Submit"}
                            </button>
                            <button
                                onClick={() => setIsShowForm(false)}
                                className="custom-button cancel mt-2"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <Button
                        onClick={() => setIsShowForm(true)}
                        className="custom-button"
                        text="Add New User"
                    />
                )}
            </div>
        </div>
    );
};

export default Header;
