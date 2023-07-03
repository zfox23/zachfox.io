import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const ZachFoxPhotographyLogo = ({ className = undefined }: { className: string | undefined }) => {
    let defaultClasses = `rounded-full relative group`;
    let classes = twMerge(defaultClasses, className);

    return (
        <div className={classes}>
            <StaticImage
                className="!absolute inset-0"
                loading='eager'
                src='../data/images/zfp-no-head.svg'
                alt="The Zach Fox Photography logo looks like a fox in the shape of a camera's aperture" />
            <StaticImage
                className="!absolute inset-0 transition-transform origin-bottom-right group-hover:rotate-[5deg] group-hover:-translate-x-[4%] group-hover:translate-y-[2%]"
                loading='eager'
                src='../data/images/zfp-only-head.svg'
                alt="The Zach Fox Photography logo looks like a fox in the shape of a camera's aperture" />
        </div>
    )
}