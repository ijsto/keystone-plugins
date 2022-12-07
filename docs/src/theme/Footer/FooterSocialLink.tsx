import React from 'react';

import getSocialsData from '../../utils/socials';

export interface Social {
  url: string;
  backgroundColor: string;
}

export const FooterSocialLink = ({ url, backgroundColor }: Social) => {
  const { name, Icon } = getSocialsData(url);
  return (
    <a
      className='footer-social__link padding-horiz--sm padding-vert--md'
      style={{ backgroundColor }}
      href={url}
      target='_blank'
      rel='noreferrer noopener'
    >
      <Icon className='footer-social__icon' />
      <div className='footer-social__title'>{name}</div>
    </a>
  );
};
