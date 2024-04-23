import React, {useMemo} from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function AttributeMapper({selectedAttributes}) {
    const preview = useMemo(() => selectedAttributes.map((attr) => `
      <g:product_detail>
        <g:section_name><![CDATA[${attr.parent}]]></g:section_name>
        <g:attribute_name><![CDATA[${attr.name}]]></g:attribute_name>
        <g:attribute_value><![CDATA[ value goes here ]]></g:attribute_value>
      </g:product_detail>`
    ).join("/n"), [selectedAttributes]);

    return (
      <CodeBlock language="xml">
        {preview}
      </CodeBlock>
    );
}
