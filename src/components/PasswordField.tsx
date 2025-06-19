import React, { useState } from 'react';
import { Input, InputProps } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from 'lucide-react';
import { cn } from "@/lib/utils";

interface PasswordFieldProps extends InputProps {
  containerClassName?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ className, containerClassName, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  console.log('PasswordField loaded');

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className={cn("relative w-full", containerClassName)}>
      <Input
        type={showPassword ? 'text' : 'password'}
        className={cn("pr-12", className)} // Added padding-right for the icon button
        {...props}
      />
      <Button
        type="button" // Prevents form submission on click
        variant="ghost"
        size="icon" // Use "icon" size for a compact button
        className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 transform text-gray-500 hover:bg-transparent hover:text-gray-700"
        onClick={togglePasswordVisibility}
        aria-label={showPassword ? "Hide password" : "Show password"}
        tabIndex={-1} // Optional: to prevent tabbing to the button itself if desired, focusing on input interaction
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Eye className="h-4 w-4" aria-hidden="true" />
        )}
      </Button>
    </div>
  );
};

export default PasswordField;