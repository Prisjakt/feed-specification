import React from 'react';

export default function Anchor({ id, title }) {

    return <>
        <a id={id} class="anchor">{title}</a><a class="hash-link" href={'#' + id} title="Direct link"></a>
    </>
}