import React from 'react';
import DynamicLink from './dynamic-link';
import PoweredByVercel from '../images/svg/powered-by-vercel';

export default function Vercel() {
    return <DynamicLink to="https://vercel.com/?utm_source=hackbeanpot&utm_campaign=oss" className="footer__vercel">
        <PoweredByVercel />
    </DynamicLink>
}