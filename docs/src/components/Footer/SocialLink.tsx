import getSocialsData from '@site/src/utils/socials';
import React from 'react';
import { Social } from './index';

export const SocialLink = ({ url, backgroundColor }: Social) => {
  const { name, Icon } = getSocialsData(url);

  return (
    <a
      className='footer-social__link padding-horiz--sm padding-vert--md'
      style={{ backgroundColor }}
      href={url}
    >
      <Icon className='footer-social__icon' />
      <div className='footer-social__title'>{name}</div>
    </a>
  );
};
