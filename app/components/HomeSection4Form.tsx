'use client';

import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {useState} from "react";

interface formProps {
    name: string;
    email: string;
    typeOfService: string;
    message: string;
}

export default function HomeSection4Form() {

    const [form, setForm] = useState<formProps>({
        name: "",
        email: "",
        typeOfService: "website",
        message: ""
    });


    const handleChange = (e: string, field: string) => {
        setForm(prev => ({ ...prev, [field]: e }));
    };

    return (
        <form className={'w-full md:w-1/2 flex flex-col gap-6 items-start'}>
            <Input
                type={'text'}
                placeholder={'Your email address'}
                className={' md:max-w-[200px] w-full'}
                value={form.name}
                onChange={e => handleChange(e.target.value, "name")}
            />
            <Input
                type={'text'}
                placeholder={'Your email address'}
                className={' md:max-w-[200px] w-full'}
                value={form.email}
                onChange={e => handleChange(e.target.value, "email")}
            />
            <Select
                value={form.typeOfService}
                onValueChange={value => handleChange(value, "typeOfService")}
            >
                <SelectTrigger className="md:max-w-[200px] w-full">
                    <SelectValue placeholder="Type of service" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="website">Web Development</SelectItem>
                    <SelectItem value="mobile-app">Mobile Development</SelectItem>
                </SelectContent>
            </Select>
            <Textarea
                placeholder={'Message'}
                value={form.message}
                onChange={e => handleChange(e.target.value, "message")}
            />
            <Button variant={'default'} type={'submit'} >Submit</Button>
        </form>
    )
}