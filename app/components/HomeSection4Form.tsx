'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from '@formspree/react';

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

    const [state, handleSubmit] = useForm("xyzdoboo");

    if (state.succeeded) {
        return <p className={'text-xl glowing-text'}>Email sent successfully!</p>;
    }

    const handleChange = (value: string, field: keyof formProps) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    return (
        <form
            className="w-full md:w-1/2 flex flex-col gap-6 items-start"
            onSubmit={handleSubmit}
        >
            <Input
                type="text"
                placeholder="Your name"
                className="md:max-w-[200px] w-full"
                name="name"
                value={form.name}
                onChange={e => handleChange(e.target.value, "name")}
                required
            />

            <Input
                type="email"
                placeholder="Your email address"
                name="email"
                className="md:max-w-[200px] w-full"
                value={form.email}
                onChange={e => handleChange(e.target.value, "email")}
                required
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

            {/* Hidden input so Formspree actually gets this field */}
            <input type="hidden" name="typeOfService" value={form.typeOfService} />

            <Textarea
                placeholder="Message"
                value={form.message}
                onChange={e => handleChange(e.target.value, "message")}
                name="message"
                required
            />

            <Button variant="default" type="submit" disabled={state.submitting}>
                Submit
            </Button>
        </form>
    );
}
