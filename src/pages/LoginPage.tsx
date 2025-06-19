import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Custom Components
import MinimalHeader from '@/components/layout/MinimalHeader';
import AuthFormContainer from '@/components/AuthFormContainer';
import PasswordField from '@/components/PasswordField';
import MinimalFooter from '@/components/layout/MinimalFooter';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// Note: Label is listed in layout_info, but FormLabel from shadcn/ui Form is more idiomatic here.

const loginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');
  const navigate = useNavigate(); // For redirection after login, if needed

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    console.log('Login form submitted:', values);
    // Simulate API call
    // alert(`Logging in with Email: ${values.email}, Remember Me: ${values.rememberMe}`);
    // In a real application, you would handle authentication here.
    // For example, on successful login:
    // navigate('/dashboard'); // Replace '/dashboard' with actual target route after login
    // Since no dashboard route is in App.tsx, we'll just log for now.
    // For demonstration, let's imagine a successful login navigates to a generic authenticated area.
    // If there were a '/home' or '/dashboard' route in App.tsx, we'd use that.
    // For now, just logging.
    alert("Login functionality would be handled here. Check console for form values.");
  };

  const authFormFooterContent = (
    <>
      <Link
        to="/password-recovery" // Path from App.tsx
        className="text-sm text-blue-600 hover:underline dark:text-blue-400"
      >
        Forgot Password?
      </Link>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        {"Don't have an account? "}
        <Link
          to="/registration" // Path from App.tsx
          className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          Sign Up
        </Link>
      </p>
    </>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <MinimalHeader />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AuthFormContainer title="Login to Your Account" footer={authFormFooterContent}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordField placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-normal">Remember me</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Logging in...' : 'Login'}
              </Button>
            </form>
          </Form>
        </AuthFormContainer>
      </main>
      <MinimalFooter />
    </div>
  );
};

export default LoginPage;