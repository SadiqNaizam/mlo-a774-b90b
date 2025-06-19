import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AuthFormContainerProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  title,
  children,
  footer,
  className,
  headerClassName,
  contentClassName,
  footerClassName,
}) => {
  console.log('AuthFormContainer loaded, title:', title);

  return (
    <Card className={cn("w-full max-w-md mx-auto", className)}>
      <CardHeader className={cn("p-6", headerClassName)}>
        <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className={cn("p-6 pt-0", contentClassName)}>
        {children}
      </CardContent>
      {footer && (
        <CardFooter className={cn("p-6 pt-0 flex flex-col items-center space-y-2", footerClassName)}>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export default AuthFormContainer;