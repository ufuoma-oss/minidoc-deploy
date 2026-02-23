'use client';

import { MotionEffect } from './effects/MotionEffect';

export const Footer = () => {
  return (
    <MotionEffect
      slide={{ direction: 'down' }}
      fade
      zoom
      delay={1.6}
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto h-16">
          <div className="size-full px-4 md:px-6 flex items-center justify-center">
            <p className="text-center text-sm text-muted-foreground">
              Built with{' '}
              <span className="text-red-500">❤</span>
              {' '}by Mini Doc Team. Open source on{' '}
              <a
                href="https://github.com"
                rel="noopener noreferrer"
                target="_blank"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </MotionEffect>
  );
};
