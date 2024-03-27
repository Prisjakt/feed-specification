import TreeView from '@site/src/components/treeview';


# Attribute Mapper

This tool helps in mapping your product attributes to Prisjakt's taxonomy via the [product_detail](/feeds/product/fields/product_detail.md) field. Select all attributes that you want to send to us to generate example field values, then include them **for each product item** in your feed. You can see a full feed example [here](/feeds/product/formats/prisjakt_manufacturer_xml/index.md#full).

<div class="column left">

  ## Selection

  <TreeView />

</div>
  
<div class="column right">

  ## Output

  ```xml
  <g:product_detail>
      <g:section_name><![CDATA[Cardigans]]></g:section_name>
      <g:attribute_name><![CDATA[Design]]></g:attribute_name>
      <g:attribute_value><![CDATA[ value goes here ]]></g:attribute_value>
  </g:product_detail>
  <g:product_detail>
      <g:section_name><![CDATA[Cardigans]]></g:section_name>
      <g:attribute_name><![CDATA[Keyword]]></g:attribute_name>
      <g:attribute_value><![CDATA[ value goes here  ]]></g:attribute_value>
  </g:product_detail>
  <g:product_detail>
      <g:section_name><![CDATA[Cardigans]]></g:section_name>
      <g:attribute_name><![CDATA[Gender/age]]></g:attribute_name>
      <g:attribute_value><![CDATA[ value goes here ]]></g:attribute_value>
  </g:product_detail>    
  ```

</div>