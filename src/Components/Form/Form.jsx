import { Card, Input, Checkbox, Button, Typography, } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        console.log(name, email);
    }

    return (
        <div className="flex justify-center">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex gap-6">
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Your Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Date of Birth
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("date", { required: true })}
                            />
                            {errors.date && <span className="text-red-500">This field is required</span>}

                        </div>
                    </div>
                    <div className="mb-1 flex gap-6">
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Gender
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("name", { required: true })}
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}

                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("email", { required: true })}
                            />
                        </div>
                    </div>
                    <div className="mb-1 flex gap-6">
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Your Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("email", { required: true })}
                            />
                        </div>
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button type="submit" className="mt-6" fullWidth>
                        sign up
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="#" className="font-medium text-gray-900">
                            Sign In
                        </a>
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default Form;