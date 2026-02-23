'use client';

import { MotionEffect } from './effects/MotionEffect';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { 
  FileText, 
  Search, 
  MessageSquare, 
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const FEATURES = [
  {
    title: 'Document Understanding',
    description: 'AI reads and analyzes your documents instantly',
    icon: FileText,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Smart Search',
    description: 'Find any content across all your files',
    icon: Search,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Chat Interface',
    description: 'Ask questions and get answers from your data',
    icon: MessageSquare,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Instant Insights',
    description: 'Get summaries and key points automatically',
    icon: Zap,
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'Secure Storage',
    description: 'Your documents are encrypted and protected',
    icon: Shield,
    color: 'from-red-500 to-rose-500',
  },
  {
    title: 'Cloud Sync',
    description: 'Access your files from anywhere',
    icon: Globe,
    color: 'from-indigo-500 to-violet-500',
  },
];

export const Features = () => {
  return (
    <div className="relative pt-16 pb-10 px-5 flex flex-col items-center justify-center mt-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <MotionEffect
              slide={{ direction: 'down' }}
              fade
              zoom
              delay={1 + 0.15 * index}
              key={index}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                }}
                className="relative w-full bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 border border-border hover:border-primary/20 transition-colors"
              >
                <div className={cn(
                  'w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br',
                  feature.color
                )}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            </MotionEffect>
          );
        })}
      </div>
    </div>
  );
};
