import React from 'react';
import './styles.css';

// eslint-disable-next-line import/no-unresolved
import Footer from '@theme-original/Footer';
import { FooterSocials } from './FooterSocials';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <FooterSocials />
    </>
  );
}
