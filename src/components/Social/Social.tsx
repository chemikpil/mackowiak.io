import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

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
            {social && social.instagram && <li><a href={social.instagram}><Instagram /></a></li>}
            {social && social.github && <li><a href={social.github}><Github /></a></li>}
            {social && social.twitter && <li><a href={social.twitter}><Twitter /></a></li>}
        </SocialList>
    )
};
