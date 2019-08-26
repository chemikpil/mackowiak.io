import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faInstagram, faGithub, fa500px } from '@fortawesome/free-brands-svg-icons';

import  { SocialList } from './styles';

export const Twitter = () => (
    <FontAwesomeIcon icon={faTwitterSquare} size='1x' />
);

export const Instagram = () => (
    <FontAwesomeIcon icon={faInstagram} size='1x' />
);

export const Github = () => (
    <FontAwesomeIcon icon={faGithub} size='1x' />
);

export const S500px = () => (
    <FontAwesomeIcon icon={fa500px} size='1x' />
);

export default () => {
    const { site: { siteMetadata: { social } } } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        social {
                            twitter
                            github
                            instagram
                        }
                    }
                }
            }
        `
    );

    return (
        <SocialList>
            {social && social.instagram && <li><a href={social.instagram} target='_blank'><Instagram /></a></li>}
            {social && social.github && <li><a href={social.github} target='_blank'><Github /></a></li>}
            {social && social.twitter && <li><a href={social.twitter} target='_blank'><Twitter /></a></li>}
        </SocialList>
    )
};
