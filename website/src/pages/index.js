import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HeroOption1 from './Landing/Hero/HeroOption1';
import HeroOption2 from './Landing/Hero/HeroOption2';
import HeroOption3 from './Landing/Hero/HeroOption3';
import HeroVariantB from './Landing/Hero/HeroVariantB';
import HowItWorks from './Landing/HowItWorks';
import SecurityCompliance from './Landing/SecurityCompliance';
import BottomCta from './Landing/BottomCta';

export default function Home() {
  return (
    <Layout wrapperClassName="page-splash">
      <Head>
        <html className="SplashPage" />
      </Head>

      {/* ── HERO OPTION 1: "The Cinematic Marquee" ── */}
      <HeroOption1 />

      {/* ── HERO OPTION 2: "The Split Terminal" ── */}
      <HeroOption2 />

      {/* ── HERO OPTION 3: "The Command Center" ── */}
      <HeroOption3 />

      <HeroVariantB />
      <HowItWorks />
      <SecurityCompliance />
      <BottomCta />
    </Layout>
  );
}
