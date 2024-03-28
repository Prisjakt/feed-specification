import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Handlebars from "handlebars";
import { AttributeMapperContext } from "./AttributeMapperContext";

Handlebars.registerPartial('detail', `<g:product_detail>
  <g:section_name><![CDATA[{{id}}]]></g:section_name>
  <g:attribute_name><![CDATA[{{name}}]]></g:attribute_name>
  <g:attribute_value><![CDATA[ value goes here ]]></g:attribute_value>
</g:product_detail>
`);

const template = Handlebars.compile(`{{#each attributes}}
{{>detail attribute=.}}
{{/each}}`);

export default function AttributeMapper() {
    const {selectedAttributes} = React.useContext(AttributeMapperContext);
    // Render template
    const preview = template({ attributes: selectedAttributes });
    console.log(selectedAttributes);

    return (<CodeBlock language="xml">
                {preview}
            </CodeBlock>
    );
}