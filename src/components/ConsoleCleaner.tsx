'use client';

import { useEffect } from 'react';

export default function ConsoleCleaner() {
  useEffect(() => {
    // Store original console methods
    const originalError = console.error;
    const originalWarn = console.warn;
    const originalLog = console.log;

    // List of extension-related error patterns to suppress
    const suppressPatterns = [
      /chrome-extension:\/\/.*\/utils\.js/,
      /chrome-extension:\/\/.*\/extensionState\.js/,
      /chrome-extension:\/\/.*\/heuristicsRedefinitions\.js/,
      /completion_list\.html/,
      /net::ERR_FILE_NOT_FOUND/,
      /Failed to load resource: net::ERR_FILE_NOT_FOUND/,
      /pejdijmoenmkgeppbflobdenhhabjlaj/, // Specific extension ID
    ];

    // Override console.error
    console.error = (...args) => {
      const message = args.join(' ');
      const shouldSuppress = suppressPatterns.some(pattern => 
        typeof message === 'string' && pattern.test(message)
      );
      
      if (!shouldSuppress) {
        originalError.apply(console, args);
      }
    };

    // Override console.warn  
    console.warn = (...args) => {
      const message = args.join(' ');
      const shouldSuppress = suppressPatterns.some(pattern => 
        typeof message === 'string' && pattern.test(message)
      );
      
      if (!shouldSuppress) {
        originalWarn.apply(console, args);
      }
    };

    // Keep console.log unchanged for your app's logs
    console.log = originalLog;

    // Also suppress network errors from extensions
    const originalAddEventListener = window.addEventListener;
    window.addEventListener = function(type: string, listener: any, options?: any) {
      if (type === 'error') {
        const wrappedListener = (event: Event) => {
          const errorEvent = event as ErrorEvent;
          const shouldSuppress = suppressPatterns.some(pattern => 
            errorEvent.filename && pattern.test(errorEvent.filename)
          );
          
          if (!shouldSuppress && typeof listener === 'function') {
            listener(event);
          }
        };
        return originalAddEventListener.call(this, type, wrappedListener, options);
      }
      return originalAddEventListener.call(this, type, listener, options);
    };

    // Cleanup function to restore original methods if needed
    return () => {
      console.error = originalError;
      console.warn = originalWarn;
      console.log = originalLog;
      window.addEventListener = originalAddEventListener;
    };
  }, []);

  return null; // This component renders nothing
}