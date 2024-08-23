import { Card, Input, Checkbox, Button, Typography, Textarea, } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useCountries } from "use-react-countries";
import { Menu, MenuHandler, MenuList, MenuItem, } from "@material-tailwind/react";
import { useState } from "react";
import { Select, Option } from "@material-tailwind/react";


const Form = () => {

    const { countries } = useCountries();
    const [country, setCountry] = useState(187);
    const { name, flags, countryCallingCode } = countries[country];

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        console.log(name, email);
    }

    return (
        <div className="flex justify-center items-center gap-3 bg-green-300">
            {/* <div>
                <Typography variant="h4" color="blue-gray">
                    Welcome to Jj &apos;s Online Admission Portal! We are excited that you are considering joining our vibrant learning community. Please fill out the form below to apply for admission. Ensure all information provided is accurate to help us process your application efficiently. We look forward to having you with us.
                </Typography>
            </div> */}
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Register your sit now
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full ">
                    {/* name and email field */}
                    <div className="mb-1 flex gap-6">
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Your Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Type Your Name"
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
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>
                    {/* gender and date of birth field */}
                    <div className="mb-1 flex gap-6">
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Gender
                            </Typography>
                            <Select variant="outlined" label="Select Version"
                                {...register("gender", { required: true })}>
                                <Option>Male</Option>
                                <Option>Female</Option>
                                <Option>Other</Option>
                            </Select>
                            {errors.gender && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Date of Birth
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Type Your Date"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("date", { required: true })}
                            />
                            {errors.date && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>
                    {/* mobile number field */}
                    <div>
                        <Typography variant="h6" color="blue-gray" className="mb-1">
                            Mobile Number
                        </Typography>
                        <div className=" flex w-full max-w-[36rem] mb-3">
                            <Menu placement="bottom-start">
                                <MenuHandler>
                                    <Button
                                        ripple={false}
                                        variant="text"
                                        color="blue-gray"
                                        className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                                    >
                                        <img
                                            src={flags.svg}
                                            alt={name}
                                            className="h-4 w-4 rounded-full object-cover"
                                        />
                                        {countryCallingCode}
                                    </Button>
                                </MenuHandler>
                                <MenuList className="max-h-[20rem] max-w-[18rem]">
                                    {countries.map(({ name, flags, countryCallingCode }, index) => {
                                        return (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                className="flex items-center gap-2"
                                                onClick={() => setCountry(index)}
                                            >
                                                <img
                                                    src={flags.svg}
                                                    alt={name}
                                                    className="h-5 w-5 rounded-full object-cover"
                                                />
                                                {name} <span className="ml-auto">{countryCallingCode}</span>
                                            </MenuItem>
                                        );
                                    })}
                                </MenuList>
                            </Menu>
                            <Input
                                type="tel"
                                placeholder="Mobile Number"
                                className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                                {...register("mobileNumber", { required: true })}
                            />
                            {errors.streetAddress && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>
                    {/* street and city field */}
                    <div className="mb-1 flex gap-6">
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Street Address
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("streetAddress", { required: true })}
                            />
                            {errors.streetAddress && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                City
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("city", { required: true })}
                            />
                            {errors.city && <span className="text-red-500">This field is required</span>}

                        </div>
                    </div>
                    {/* previous school name */}
                    <div className="mb-1 flex gap-6">
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Previous School Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Previous School Name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("previousSchool", { required: true })}
                            />
                            {errors.previousSchool && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                City
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("city", { required: true })}
                            />
                            {errors.city && <span className="text-red-500">This field is required</span>}

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