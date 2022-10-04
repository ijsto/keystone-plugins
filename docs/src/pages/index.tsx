import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroBannerContainer)}>
        <div style={{ maxWidth: 420 }}>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p style={{ lineHeight: 1.25 }} className='hero__subtitle'>
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className='button button--primary button--lg'
              to='/docs/intro'
            >
              Read Docs
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Keystone6 OAuth Plugin by iJS'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;
