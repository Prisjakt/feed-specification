import React from 'react';
import Link from '@docusaurus/Link';

export default function Anchor({ id, title }) {

    return <>
        <Link id={id} /><a class="anchor">{title}</a><a class="hash-link" href={'#' + id} title="Direct link"></a>
    </>
}