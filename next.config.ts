import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
];

const nextConfig: NextConfig = {
  // pdfkit reads Helvetica.afm at runtime; the Next.js tracer does not pick
  // up these binary asset files automatically, so the serverless bundle was
  // throwing ENOENT on /api/send-letter. Force the trace to include all .afm
  // metric files and the sRGB profile that pdfkit may also reach for.
  outputFileTracingIncludes: {
    '/api/send-letter': [
      './node_modules/pdfkit/js/data/**/*',
    ],
    '/api/webhooks/stripe': [
      './node_modules/pdfkit/js/data/**/*',
    ],
  },
  serverExternalPackages: ['pdfkit'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/:path((?!api/).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=86400, stale-while-revalidate=43200',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
