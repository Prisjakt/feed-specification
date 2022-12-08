import React from 'react';
import Anchor from '@site/src/components/anchor';
import MDXContent from '@theme/MDXContent';

export default function Definition({ id, title, children }) {

    return <>
        <h3><Anchor id={id} title={title} /></h3>
        <blockquote>

            <MDXContent>

                {children}

            </MDXContent>
        </blockquote>
    </>
}