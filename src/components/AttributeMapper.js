import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import AttributeTreeView from '@site/src/components/AttributeTreeView';
import Handlebars from "handlebars";
import attributeData from "./attribute-data.json";

Handlebars.registerPartial('detail', `<g:product_detail>
  <g:section_name><![CDATA[{{section}}]]></g:section_name>
  <g:attribute_name><![CDATA[{{name}}]]></g:attribute_name>
  <g:attribute_value><![CDATA[ value goes here ]]></g:attribute_value>
</g:product_detail>`);

const template = Handlebars.compile(`{{#each attributes}}
{{>detail attribute=.}}
{{/each}}`);
  
const preview = template(
{
    attributes: [
        { section: "Cardigans", name: "Design" },
        { section: "Cardigans", name: "Keyword" },
        { section: "Cardigans", name: "Gender/age" },
    ],
});

export default function AtrributeMapper() {
    return (<>
        <div className="column left">

            <AttributeTreeView data={attributeData} />

        </div>

        <div className="column right">

            <CodeBlock language="xml">
                {preview}
            </CodeBlock>

        </div>
    </>);
}