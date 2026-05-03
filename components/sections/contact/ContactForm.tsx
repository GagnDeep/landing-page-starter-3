"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { contactContent } from "@/content/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  date: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your visit."),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const { register, handleSubmit, formState: { errors }, reset } = form;

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl">
      <h2 className="font-heading text-3xl font-bold mb-8">{contactContent.form.title}</h2>

      {isSuccess ? (
        <div className="bg-primary/10 border border-primary/20 text-primary p-6 rounded-2xl animate-fade-in text-center">
          <h3 className="font-heading text-2xl font-bold mb-2">{contactContent.form.success.title}</h3>
          <p>{contactContent.form.success.message}</p>
          <Button
            className="mt-6 rounded-full"
            variant="outline"
            onClick={() => setIsSuccess(false)}
          >
            {contactContent.form.success.resetBtn}
          </Button>
        </div>
      ) : (

                <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                name="name"
                render={() => (
                  <FormItem>
                    <FormLabel>{contactContent.form.nameLabel}</FormLabel>
                    <FormControl>
                      <Input placeholder={contactContent.form.placeholders.name} {...register("name")} />
                    </FormControl>
                    {errors.name && <FormMessage>{errors.name.message}</FormMessage>}
                  </FormItem>
                )}
              />
              <FormField
                name="phone"
                render={() => (
                  <FormItem>
                    <FormLabel>{contactContent.form.phoneLabel}</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder={contactContent.form.placeholders.phone} {...register("phone")} />
                    </FormControl>
                    {errors.phone && <FormMessage>{errors.phone.message}</FormMessage>}
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                name="email"
                render={() => (
                  <FormItem>
                    <FormLabel>{contactContent.form.emailLabel}</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder={contactContent.form.placeholders.email} {...register("email")} />
                    </FormControl>
                    {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
                  </FormItem>
                )}
              />
              <FormField
                name="date"
                render={() => (
                  <FormItem>
                    <FormLabel>{contactContent.form.dateLabel}</FormLabel>
                    <FormControl>
                      <Input type="date" {...register("date")} />
                    </FormControl>
                    {errors.date && <FormMessage>{errors.date.message}</FormMessage>}
                  </FormItem>
                )}
              />
            </div>

            <FormField
              name="message"
              render={() => (
                <FormItem>
                  <FormLabel>{contactContent.form.messageLabel}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={contactContent.form.placeholders.message}
                      className="min-h-[120px]"
                      {...register("message")}
                    />
                  </FormControl>
                  {errors.message && <FormMessage>{errors.message.message}</FormMessage>}
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="w-full rounded-full h-14 text-lg mt-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : contactContent.form.submitText}
            </Button>
          </form>
        </Form>

      )}
    </div>
  );
}
