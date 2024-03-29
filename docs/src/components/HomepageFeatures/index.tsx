import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Kickstart',
    // eslint-disable-next-line sort-keys
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <code>yarn add keystone-6-oauth@latest</code>

        <div>
          Getting Started
        </div>
      </>
    ),
  },
];

const Feature = ({ title, Svg, description }: FeatureItem) => (
  // col--3
  <div className={clsx('col')}>
    <div className='text--center'>
      {/* @ts-ignore */}
      {/* {styles.featureSvg && <Svg className={styles.featureSvg} role='img' />} */}
    </div>
    <div className='text--center padding-horiz--md'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const HomepageFeatures = (): JSX.Element => (
  <section
    style={{ alignItems: 'center', height: 220, justifyContent: 'center' }}
    className={styles.features}
  >
    <div className='container'>
      <div className='row'>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  </section>
);

export default HomepageFeatures;
