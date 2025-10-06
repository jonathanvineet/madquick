import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Providers from './providers';
import ConsoleCleaner from '@/components/ConsoleCleaner';

export const metadata: Metadata = {
  title: 'MadQuick Vault',
  description: 'Password generator + secure vault (MVP)'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const originalError = console.error;
                const originalWarn = console.warn;
                
                const suppressPatterns = [
                  /chrome-extension:\\/\\/.*\\/utils\\.js/,
                  /chrome-extension:\\/\\/.*\\/extensionState\\.js/,
                  /chrome-extension:\\/\\/.*\\/heuristicsRedefinitions\\.js/,
                  /completion_list\\.html/,
                  /net::ERR_FILE_NOT_FOUND/,
                  /Failed to load resource: net::ERR_FILE_NOT_FOUND/,
                  /pejdijmoenmkgeppbflobdenhhabjlaj/
                ];
                
                console.error = function(...args) {
                  const message = args.join(' ');
                  const shouldSuppress = suppressPatterns.some(pattern => 
                    typeof message === 'string' && pattern.test(message)
                  );
                  
                  if (!shouldSuppress) {
                    originalError.apply(console, args);
                  }
                };
                
                console.warn = function(...args) {
                  const message = args.join(' ');
                  const shouldSuppress = suppressPatterns.some(pattern => 
                    typeof message === 'string' && pattern.test(message)
                  );
                  
                  if (!shouldSuppress) {
                    originalWarn.apply(console, args);
                  }
                };
              })();
            `,
          }}
        />
      </head>
      <body>
        <ConsoleCleaner />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
