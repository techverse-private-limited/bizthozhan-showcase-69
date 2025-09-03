
import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center space-y-6">
        {/* Logo with rotation animation */}
        <div className="flex justify-center">
          <img 
            src="https://uutaghaildtlsjistpkz.supabase.co/storage/v1/object/public/assets/bizthozhanlogo_1.png" 
            alt="BIZTHOZHAN Logo" 
            className="w-32 h-32 animate-spin"
            style={{ animationDuration: '2s' }}
          />
        </div>
        
        {/* Brand name */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">BIZTHOZHAN</h1>
          <p className="text-lg text-muted-foreground">REGISTER, BUILD SUCCEED</p>
        </div>
        
        {/* Motivational message */}
        <div className="mt-8">
          <p className="text-xl text-primary font-medium animate-fade-in">
            Your success gives us the motivation
          </p>
        </div>
        
        {/* Loading dots animation */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
