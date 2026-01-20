import React from 'react';

// Define the 'iconify-icon' custom element for TypeScript
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon?: string;
        width?: string | number;
        height?: string | number;
        style?: React.CSSProperties;
      };
    }
  }
}

const TECH_LOGOS = [
  { name: 'Meta', slug: 'meta', color: '#0668E1' },
  { name: 'Instagram', slug: 'instagram', color: '#E4405F' },
  { name: 'LinkedIn', slug: 'linkedin', color: '#0A66C2' },
  { name: 'Google Ads', slug: 'googleads', color: '#4285F4' },
  { name: 'ChatGPT', slug: 'openai', color: '#10A37F' },
  { name: 'Claude', slug: 'anthropic', color: '#D97757' },
  { name: 'Gemini', slug: 'googlegemini', color: '#1A73E8' },
  { name: 'Perplexity', slug: 'perplexity', color: '#20B2AA' },
  { name: 'MS Teams', slug: 'microsoftteams', color: '#6264A7' },
  { name: 'WhatsApp', slug: 'whatsapp', color: '#25D366' },
  { name: 'n8n', slug: 'n8n', color: '#FF6D5A' }
];

const LogoReel: React.FC = () => {
  // Creating the repeatable unit
  const LogoSet = () => (
    <>
      {TECH_LOGOS.map((logo, index) => (
        <div
          key={index}
          className="flex items-center gap-4 pr-24 group cursor-pointer transition-all duration-300 flex-shrink-0"
        >
          {/* Fixed size container for the icon */}
          <div className="w-8 h-8 flex items-center justify-center grayscale opacity-40 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 pointer-events-none">
            <iconify-icon
              icon={`simple-icons:${logo.slug}`}
              width="32"
              height="32"
              style={{ color: logo.color }}
            ></iconify-icon>
          </div>

          <span
            className="text-xl font-semibold tracking-tight text-gray-400 transition-colors duration-300 group-hover:text-[var(--hover-color)] whitespace-nowrap"
            style={{ '--hover-color': logo.color } as React.CSSProperties}
          >
            {logo.name}
          </span>
        </div>
      ))}
    </>
  );

  return (
    <div className="w-full bg-white relative">
      <div className="container mx-auto px-6 relative overflow-hidden border-y border-gray-100 py-12">
        <div className="scroller-inner animate-infinite-scroll">
          {/* We render exactly two sets. The first set scrolls away, the second set enters. 
              Because they are identical including the trailing padding, the loop is seamless. */}
          <LogoSet />
          <LogoSet />
        </div>

        {/* Soft fade gradients for a high-end look */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default LogoReel;