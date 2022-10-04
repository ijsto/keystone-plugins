import {
  YoutubeIcon,
  GithubIcon,
  DiscordIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
} from '../icons';

const map = [
  { Icon: YoutubeIcon, name: 'Youtube' },
  { Icon: GithubIcon, name: 'GitHub' },
  { Icon: DiscordIcon, name: 'Discord' },
  { Icon: TwitterIcon, name: 'Twitter' },
  { Icon: LinkedInIcon, name: 'LinkedIn' },
  { Icon: InstagramIcon, name: 'Instagram' },
  { Icon: FacebookIcon, name: 'Facebook' },
];

// Returns an object with icon and name for given url
export default function getSocialsData(url: string) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < map.length; i++) {
    if (url.toLowerCase().includes(map[i].name.toLowerCase())) {
      return map[i];
    }
  }

  return null;
}
