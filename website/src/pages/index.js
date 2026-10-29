import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HeroOption2 from '../components/Landing/Hero/HeroOption2';
import HeroVariantB from '../components/Landing/Hero/HeroVariantB';
import HowItWorks from '../components/Landing/HowItWorks';
import SecurityCompliance from '../components/Landing/SecurityCompliance';
import BottomCta from '../components/Landing/BottomCta';

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
