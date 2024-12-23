import React from 'react';
import { Headphones } from 'lucide-react';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export function Logo({ 
  className = "", 
  iconClassName = "w-8 h-8",
  textClassName = "text-gray-900"
}: LogoProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Headphones className={`${iconClassName} text-indigo-600`} />
      <span className={`text-xl font-semibold ${textClassName}`}>
        A Listening Companion
      </span>
    </div>
  );
}