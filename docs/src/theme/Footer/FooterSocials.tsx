// TODO: Find out how to hook into useThemeConfig
// import { useThemeConfig } from '@docusaurus/theme-common';

import React from 'react';

import { ThemeConfig } from '@docusaurus/preset-classic';
import { FooterSocialLink, Social } from './FooterSocialLink';

export interface SocialsConfig extends ThemeConfig {
  socials: Social[];
}

export const FooterSocials = () => {
  const socials = [
    {
      backgroundColor: 'rgba(234,51,36,0.25)',
      url: 'https://www.youtube.com/channel/UCk54GuQ7ha-wvviMimD8i1w',
    },
    {
      backgroundColor: 'rgba(42,98,217,0.25)',
      url: 'https://facebook.com/ijsto',
    },
    {
      backgroundColor: 'rgba(37,41,46,0.25)',
      url: 'https://github.com/ijsto',
    },
    {
      backgroundColor: 'rgba(74,152,233,0.25)',
      url: 'https://twitter.com/ijstodev',
    },
    {
      backgroundColor: 'rgba(234,51,133,0.25)',
      url: 'https://instagram.com/ijsto',
    },
    {
      backgroundColor: 'rgba(66,77,228,0.25)',
      url: 'https://discord.gg/GrdX6jRnFH',
    },
  ];

  return (
    <div className='footer-socials'>
      {socials &&
        socials.map((props, idx) => <FooterSocialLink key={idx} {...props} />)}
    </div>
  );
};
