'use client';

import { MotionEffect } from './effects/MotionEffect';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { 
  FileText, 
  Search, 
  Link2,
  Zap,
  Shield,
  Brain,
  Layers,
  Lightbulb,
  MessageSquare,
  Mail,
  Smartphone,
  Upload,
  Database,
  Clock,
  Sparkles,
} from 'lucide-react';

const FEATURES = [
  {
    title: 'Smart Digital Library',
    description: 'Upload docs, work files, screenshots — any data you want your AI to access. All in one place.',
    icon: Database,
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Deep Document Intelligence',
    description: 'Reads and understands PDFs, slides, contracts, and emails instantly.',
    icon: Brain,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Reference-Based Retrieval',
    description: 'Pull info by date, name, occasion, or any reference point from your digital library.',
    icon: Clock,
    color: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'Multi-Platform Sync',
    description: 'Connect Gmail, Drive, and more. Sync everything into one unified AI workspace.',
    icon: Link2,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Context Awareness',
    description: 'Understands relationships between your documents, conversations, and projects.',
    icon: Layers,
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'PDF & Slide Creation',
    description: 'Generate polished documents and presentations in seconds.',
    icon: FileText,
    color: 'from-red-500 to-orange-500',
  },
  {
    title: 'Instant Insights',
    description: 'Summaries, key points, action items — automatically extracted for you.',
    icon: Lightbulb,
    color: 'from-yellow-500 to-amber-500',
  },
  {
    title: 'Email Management',
    description: 'Read, draft, summarize, and organize your inbox with AI assistance.',
    icon: Mail,
    color: 'from-sky-500 to-blue-600',
  },
  {
    title: 'Secure by Design',
    description: 'Encrypted storage. Private by default. Your data stays yours.',
    icon: Shield,
    color: 'from-slate-500 to-zinc-600',
  },
];

const MESSAGING_CHANNELS = [
  { name: 'iMessage', icon: MessageSquare },
  { name: 'Telegram', icon: Smartphone },
  { name: 'WhatsApp', icon: MessageSquare },
];

const USE_CASES = [
  {
    title: 'Upload Your Data',
    description: 'Add docs, work files, screenshots, or any data you want your AI to have access to.',
    icon: Upload,
    step: '1',
  },
  {
    title: 'Connect Your Apps',
    description: 'Link Gmail, Drive, and other platforms. Sync everything to one smart library.',
    icon: Link2,
    step: '2',
  },
  {
    title: 'Ask Anything',
    description: 'Your AI agent pulls info based on date, name, occasion — any reference you need.',
    icon: Sparkles,
    step: '3',
  },
];

export const Features = () => {
  return (
    <div className="relative pt-16 pb-10 px-5 flex flex-col items-center justify-center mt-auto">
      {/* Benefits Section */}
      <div className="w-full max-w-5xl mx-auto mb-16">
        <MotionEffect
          slide={{ direction: 'down' }}
          fade
          zoom
          inView
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-2">
            Everything your AI agent can do
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            Powerful capabilities that transform how you work with your data.
          </p>
        </MotionEffect>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MotionEffect
                slide={{ direction: 'down' }}
                fade
                zoom
                inView
                delay={0.15 * index}
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
                  className="relative w-full bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-5 border border-border hover:border-primary/20 transition-colors"
                >
                  <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br',
                    feature.color
                  )}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <h3 className="text-base font-semibold text-foreground mb-1.5">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </MotionEffect>
            );
          })}
        </div>
      </div>

      {/* Messaging Channels Section */}
      <div className="w-full max-w-5xl mx-auto mb-16">
        <MotionEffect
          slide={{ direction: 'down' }}
          fade
          zoom
          inView
        >
          <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-8 border border-border">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                Access Your AI Agent Anywhere
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Chat with your AI agent from your favorite messaging apps — iMessage, Telegram, WhatsApp, and more.
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {MESSAGING_CHANNELS.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <MotionEffect
                    key={channel.name}
                    slide={{ direction: 'up' }}
                    fade
                    zoom
                    inView
                    delay={0.2 * index}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex flex-col items-center gap-2 cursor-pointer"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-white dark:bg-neutral-700 shadow-lg flex items-center justify-center border border-border">
                        <Icon className="w-7 h-7 text-foreground" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">{channel.name}</span>
                    </motion.div>
                  </MotionEffect>
                );
              })}
            </div>
          </div>
        </MotionEffect>
      </div>

      {/* Use Cases / How It Works Section */}
      <div className="w-full max-w-5xl mx-auto">
        <MotionEffect
          slide={{ direction: 'down' }}
          fade
          zoom
          inView
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-2">
            How it works
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            Three simple steps to your personal AI agent.
          </p>
        </MotionEffect>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {USE_CASES.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <MotionEffect
                slide={{ direction: 'down' }}
                fade
                zoom
                inView
                delay={0.15 * index}
                key={index}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full bg-white dark:bg-neutral-900 rounded-2xl p-5 border border-border"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {useCase.step}
                    </div>
                    <Icon className="w-5 h-5 text-muted-foreground mt-1.5" />
                  </div>
                  
                  <h3 className="text-base font-semibold text-foreground mb-1.5">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              </MotionEffect>
            );
          })}
        </div>
      </div>
    </div>
  );
};
