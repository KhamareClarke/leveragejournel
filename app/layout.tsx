import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
});
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leveragejournal.com'),
  title: {
    default: 'Leverage Journal™ – The 90-Day Goal System That Combines Psychology and AI',
    template: '%s | Leverage Journal™'
  },
  description: 'Join 10,000+ achievers using the Leverage Journal™ to turn goals into systems. Plan, track, and achieve measurable progress in 90 days. Free shipping worldwide.',
  keywords: [
    'Leverage Journal',
    'goal setting',
    'productivity planner',
    'daily planner',
    '90-day planner',
    'success journal',
    'entrepreneur journal',
    'AI planner',
    'goal tracker',
    'habit tracker',
    'productivity system',
    'achievement journal',
    'business planner',
    'life planner',
    'goal achievement',
    'personal development',
    'success planning',
    'mindset journal',
    'vision board',
    'progress tracking',
    // Long-tail keywords for better SEO
    'how to set goals effectively',
    'best productivity planner for entrepreneurs',
    '90 day goal setting system',
    'AI powered goal tracking journal',
    'psychology based productivity planner',
    'systematic goal achievement method',
    'digital journal with app integration',
    'goal setting planner with progress tracking',
    'entrepreneur productivity system 2025',
    'habit formation and goal tracking',
    'business goal planning journal',
    'personal development planner with AI',
    'quarterly goal setting framework',
    'achievement tracking system',
    'goal oriented daily planner',
    'success mindset journal',
    'productivity journal for high achievers',
    'systematic approach to goal setting',
    'goal accountability system',
    'performance tracking journal'
  ],
  authors: [{ name: 'Leverage Journal Team' }],
  creator: 'Leverage Journal™',
  publisher: 'Leverage Journal™',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'productivity',
  classification: 'Business & Productivity',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://leveragejournal.com',
    siteName: 'Leverage Journal™',
    title: 'Leverage Journal™ — The Ultimate 90-Day Achievement System',
    description: 'Transform your goals into systematic success. The premium journal that bridges vision and execution with AI-powered insights and real-time progress tracking.',
    images: [
      {
        url: '/images/leverage-og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Leverage Journal™ - The 90-Day Achievement System',
        type: 'image/jpeg',
      },
      {
        url: '/images/leverage-square.jpg',
        width: 1080,
        height: 1080,
        alt: 'Leverage Journal™ Premium Edition',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@leveragejournal',
    creator: '@leveragejournal',
    title: 'Leverage Journal™ — The Ultimate 90-Day Achievement System',
    description: 'Transform your goals into systematic success. Premium journal + AI app for achievers.',
    images: ['/images/leverage-og-banner.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://leveragejournal.com',
    languages: {
      'en-GB': 'https://leveragejournal.com',
      'en-US': 'https://leveragejournal.com/us',
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#d97706' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Leverage Journal™',
    'application-name': 'Leverage Journal™',
    'mobile-web-app-capable': 'yes',
    'msapplication-navbutton-color': '#d97706',
    'msapplication-starturl': '/',
    'price': '19.99',
    'priceCurrency': 'GBP',
    'availability': 'InStock',
    'brand': 'Leverage Journal™',
    'category': 'Productivity',
    'condition': 'NewCondition',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://leveragejournal.com/#organization",
        "name": "Leverage Journal™",
        "url": "https://leveragejournal.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://leveragejournal.com/images/logo.png",
          "width": 300,
          "height": 100
        },
        "sameAs": [
          "https://twitter.com/leveragejournal",
          "https://facebook.com/leveragejournal",
          "https://instagram.com/leveragejournal",
          "https://linkedin.com/company/leveragejournal"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+44-20-1234-5678",
          "contactType": "customer service",
          "availableLanguage": ["English"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://leveragejournal.com/#website",
        "url": "https://leveragejournal.com",
        "name": "Leverage Journal™",
        "description": "The revolutionary 90-day goal achievement system that combines psychology-backed planning with AI-powered insights.",
        "publisher": {
          "@id": "https://leveragejournal.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://leveragejournal.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Product",
        "@id": "https://leveragejournal.com/#product",
        "name": "Leverage Journal™ - Premium Edition",
        "description": "The 90-day goal achievement system with premium journal and AI companion app",
        "brand": {
          "@id": "https://leveragejournal.com/#organization"
        },
        "category": "Productivity Tools",
        "image": [
          "https://leveragejournal.com/images/product-main.jpg",
          "https://leveragejournal.com/images/product-detail-1.jpg",
          "https://leveragejournal.com/images/product-detail-2.jpg"
        ],
        "offers": {
          "@type": "Offer",
          "url": "https://leveragejournal.com/#order",
          "priceCurrency": "GBP",
          "price": "19.99",
          "availability": "https://schema.org/InStock",
          "validFrom": "2025-01-01",
          "seller": {
            "@id": "https://leveragejournal.com/#organization"
          },
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "GBP"
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 2,
                "maxValue": 3,
                "unitCode": "WK"
              }
            }
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "10000",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Michael Kim"
            },
            "reviewBody": "I went from scattered goals to a systematic approach that actually works. The Leverage Journal didn't just organize my thoughts—it transformed my entire life trajectory."
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} font-sans`}>{children}</body>
    </html>
  );
}
