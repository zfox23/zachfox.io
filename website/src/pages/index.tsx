import React from 'react';
import { Layout } from "../components/Layout";
import SEOHeader from "../components/SEOHeader";
import { StaticImage } from 'gatsby-plugin-image';
import { ZachFoxPhotographyLogo } from '../components/ZachFoxPhotographyLogo';

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <SEOHeader title="Home" />
            <div className='w-screen h-screen max-w-3xl flex flex-col items-center justify-center relative text-neutral-900 dark:text-neutral-50'>
                <a href="https://zachfox.photography" target="_blank" className="rounded-full">
                    <ZachFoxPhotographyLogo className='relative w-48 max-w-screen h-48 max-h-screen' />
                </a>
            </div>
        </Layout>
    )
}

export default IndexPage;

