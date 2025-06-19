import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import AuthFormContainer from '../components/AuthFormContainer';
import MinimalHeader from '../components/layout/MinimalHeader';
import MinimalFooter from '../components/layout/MinimalFooter';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner'; // For notifications

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type PasswordRecoveryFormValues = z.infer<typeof formSchema>;

const PasswordRecoveryPage = () => {
  console.log('PasswordRecoveryPage loaded');
  const navigate = useNavigate();

  const form = useForm<PasswordRecoveryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: PasswordRecoveryFormValues) => {
    console.log('Password recovery requested for:', data.email);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("Password recovery email sent!", {
      description: "If an account exists for this email, you will receive instructions to reset your password shortly.",
    });
    // Optionally, navigate the user or clear the form
    // form.reset();
    // navigate('/'); // Example: navigate to login after request
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <MinimalHeader />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AuthFormContainer
          title="Forgot Your Password?"
          footer={
            <div className="text-center space-y-2">
              <Link to="/" className="text-sm text-blue-600 hover:underline">
                Remembered your password? Back to Login
              </Link>
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/registration" className="font-medium text-blue-600 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          }
        >
          <p className="text-sm text-muted-foreground mb-6 text-center">
            No problem! Enter your email address below and we'll send you instructions to reset your password.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="you@example.com" 
                        {...field} 
                        autoComplete="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Sending..." : "Send Recovery Email"}
              </Button>
            </form>
          </Form>
        </AuthFormContainer>
      </main>
      <MinimalFooter />
    </div>
  );
};

export default PasswordRecoveryPage;