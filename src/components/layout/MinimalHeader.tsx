import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const MinimalHeader: React.FC = () => {
  console.log('MinimalHeader loaded');

  return (
    <header className="py-4 px-6 border-b bg-background">
      <div className="container mx-auto flex items-center justify-start">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
          <ShieldCheck className="h-7 w-7 text-blue-600" />
          <span>Auth Secure</span>
        </Link>
        {/* Minimal header, no navigation links as per description for auth pages */}
      </div>
    </header>
  );
};

export default MinimalHeader;