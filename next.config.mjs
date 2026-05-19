/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/bench",                   destination: "/learn",               permanent: true },
      { source: "/bench/wind-tunnel",       destination: "/learn/wind-tunnel",   permanent: true },
      { source: "/bench/snapshot",          destination: "/learn/snapshot",      permanent: true },
      { source: "/bench/interpretation",    destination: "/learn/interpretation",permanent: true },
      { source: "/bench/fde-calibration",   destination: "/learn/fde",           permanent: true },
      { source: "/bench/simulation",        destination: "/learn/simulation",    permanent: true },
      { source: "/bench/evidence-scaffold", destination: "/learn/evidence",      permanent: true },
      { source: "/bench/validation",        destination: "/learn/validation",    permanent: true },
      { source: "/bench/pilot",             destination: "/learn/pilot",         permanent: true },
      { source: "/bench/:path*",            destination: "/learn",               permanent: false },
      { source: "/human-before-loop",        destination: "/learn/fde",           permanent: true  },
      { source: "/human-before-loop/:path*", destination: "/learn/fde",          permanent: true  },
      { source: "/admissible-deployment",   destination: "/deploy",              permanent: true  },
      { source: "/admissible-deployment/:path*", destination: "/deploy",         permanent: false },
    ];
  },
};

export default nextConfig;
