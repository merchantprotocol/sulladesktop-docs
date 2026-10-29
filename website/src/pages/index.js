import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HeroOption2 from './Landing/Hero/HeroOption2';
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

      <HeroOption2 />
      <HeroVariantB />
      <HowItWorks />
      <SecurityCompliance />
      <BottomCta />
    </Layout>
  );
}
