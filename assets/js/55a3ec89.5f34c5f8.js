"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[6176],{8718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>P});var n=r(4848),o=r(8453);const s={sidebar_position:2},i="Trade XML",p={id:"feeds/product/formats/tradexml/index",title:"Trade XML",description:"We support the TradeXML format defined by Tradeplace which is an extension of the PI Standard format defined by Applia Europe",source:"@site/docs/feeds/product/formats/tradexml/index.md",sourceDirName:"feeds/product/formats/tradexml",slug:"/feeds/product/formats/tradexml/",permalink:"/feeds/product/formats/tradexml/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/product/formats/tradexml/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Google Manufacturer XML",permalink:"/feeds/product/formats/google_manufacturer_xml/"},next:{title:"Onix For Books XML",permalink:"/feeds/product/formats/onix/"}},a={},P=[{value:"Description",id:"description",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"trade-xml",children:"Trade XML"})}),"\n",(0,n.jsxs)(t.p,{children:["We support the ",(0,n.jsx)(t.code,{children:"TradeXML"})," format defined by ",(0,n.jsx)(t.a,{href:"https://tradeplace.com",children:"Tradeplace"})," which is an extension of the ",(0,n.jsx)(t.a,{href:"https://www.picertified.com/pi-standard/",children:"PI Standard"})," format defined by ",(0,n.jsx)(t.a,{href:"https://www.applia-europe.eu/",children:"Applia Europe"})]}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<TradeplaceMessage>\n  <TransportEnvelope>\n    \x3c!--not used by us--\x3e\n  </TransportEnvelope>\n  <BusinessMessage>\n    <CatalogDownloadReply>\n      <CatalogDownloadReplyHeader>\n        \x3c!--not used by us--\x3e\n      </CatalogDownloadReplyHeader>\n      <CatalogDownloadReplyItems>\n        <Product>\n          <PIData>\n            <Brand>LG</Brand>\n            <ProductFamily familyName="ACCESSORIES" />\n            <ProductCode>SQ-G2ST65</ProductCode>\n            <InternalArticleNumber>SQ-G2ST65</InternalArticleNumber>\n            <EANArticleCode>8806091664525</EANArticleCode>\n            <PIProperties>\n              <PIProperty name="PRODUCT_GROUP" description="Produktgrupp">Tillbeh\xf6r</PIProperty>\n              <PIProperty name="BRAND" description="Varum\xe4rke">LG</PIProperty>\n              <PIProperty name="PRODUCT_SERIES" description="Product series">G2</PIProperty>\n              <PIProperty name="CODE" description="Produktnamn">SQ-G2ST65.AEU</PIProperty>\n              <PIProperty name="EAN" description="EAN-kod">8806091664525</PIProperty>\n              <PIProperty name="HEIGHT" description="H\xf6jd" unit="mm">323</PIProperty>\n              <PIProperty name="WIDTH" description="Bredd" unit="mm">783</PIProperty>\n              <PIProperty name="DEPTH" description="Djup" unit="mm">322</PIProperty>\n              <PIProperty name="WEIGHT_NET" description="Nettovikt" unit="kg">5</PIProperty>\n              <PIProperty name="WEIGHT_GROSS" description="Bruttovikt" unit="kg">6.3</PIProperty>\n              <PIProperty name="ACCESSORY_FOR" description="Tillbeh\xf6r till">OLED65G26LA</PIProperty>\n              <PIProperty name="PRODUCT_IMAGE" description="Bild p\xe5 produkt">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/01_2022_SQ-G2ST%28G2_stand%29.jpg</PIProperty>\n              <PIProperty name="ADD_IMAGE1_ID" description="Bild 1">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/02_2022_SQ-G2ST%28G2_stand%29.jpg</PIProperty>\n              <PIProperty name="ADD_IMAGE2_ID" description="Bild 2">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/03_2022_SQ-G2ST%28G2_stand%29.jpg</PIProperty>\n              <PIProperty name="ADD_IMAGE3_ID" description="Bild 3">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/04_2022_SQ-G2ST%28G2_stand%29.jpg</PIProperty>\n              <PIProperty name="ADD_IMAGE4_ID" description="Bild 4">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/05_2022_SQ-G2ST%28G2_stand%29.jpg</PIProperty>\n            </PIProperties>\n          </PIData>\n          <ProductReferences />\n          <PriceData />\n          <UnitOfMeasures>\n            <UnitOfMeasureBaseType>PCE</UnitOfMeasureBaseType>\n            <UnitOfMeasure type="PCE">\n              <UnitOfMeasureProperty name="DEPTH" unit="mm">322</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="HEIGHT" unit="mm">323</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WIDTH" unit="mm">783</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WEIGHT_NET" unit="kg">5</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WEIGHT_GROSS" unit="kg">6.3</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="DEPTH_PACKED" unit="mm">322</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="HEIGHT_PACKED" unit="mm">323</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WIDTH_PACKED" unit="mm">783</UnitOfMeasureProperty>\n            </UnitOfMeasure>\n            <UnitOfMeasure type="CAT1">\n              <UnitOfMeasureProperty name="CONVERSION_NUMERATOR_TO_UOM" unit="PCE">1</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="DEPTH_PACKED" unit="mm">322</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="HEIGHT_PACKED" unit="mm">323</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WIDTH_PACKED" unit="mm">783</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WEIGHT_NET" unit="kg">5</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WEIGHT_GROSS" unit="kg">6.3</UnitOfMeasureProperty>\n            </UnitOfMeasure>\n            <UnitOfMeasure type="CAT2">\n              <UnitOfMeasureProperty name="CONVERSION_NUMERATOR_TO_UOM" unit="PCE">1</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="DEPTH_PACKED" unit="mm">322</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="HEIGHT_PACKED" unit="mm">323</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WIDTH_PACKED" unit="mm">783</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WEIGHT_NET" unit="kg">5</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WEIGHT_GROSS" unit="kg">6.3</UnitOfMeasureProperty>\n            </UnitOfMeasure>\n            <UnitOfMeasure type="CAT">\n              <UnitOfMeasureProperty name="DEPTH_PACKED" unit="mm">322</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="HEIGHT_PACKED" unit="mm">323</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WIDTH_PACKED" unit="mm">783</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WEIGHT_NET" unit="kg">5</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WEIGHT_GROSS" unit="kg">6.3</UnitOfMeasureProperty>\n            </UnitOfMeasure>\n            <UnitOfMeasure type="LAY">\n              <UnitOfMeasureProperty name="DEPTH_PACKED" unit="mm">966</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="HEIGHT_PACKED" unit="mm">323</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WIDTH_PACKED" unit="mm">783</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WEIGHT_NET" unit="kg">15</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WEIGHT_GROSS" unit="kg">18.9</UnitOfMeasureProperty>\n            </UnitOfMeasure>\n            <UnitOfMeasure type="PAL">\n              <UnitOfMeasureProperty name="STACKING_FACTOR">4</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="DEPTH_PACKED" unit="mm">966</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="HEIGHT_PACKED" unit="mm">1615</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="TOTAL_HEIGHT" unit="mm">1759</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WIDTH_PACKED" unit="mm">783</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WEIGHT_NET" unit="kg">60</UnitOfMeasureProperty>\n              <UnitOfMeasureProperty name="WEIGHT_GROSS" unit="kg">100.6</UnitOfMeasureProperty>\n            </UnitOfMeasure>\n          </UnitOfMeasures>\n          <OtherData>\n            <OtherProperties>\n              <OtherProperty name="Commodity Code" description="Per plant, a commodity code is maintained, which consists of the HS-code extended with any specific regional or national extension.">85299097</OtherProperty>\n              <OtherProperty name="country of origin" description="Country of origin of the material. Key of the country in which the material has been produced.  You are legally required to specify the country of origin both for export and import.">Poland</OtherProperty>\n              <OtherProperty name="Harmonised System Code" description="The 6 digit HS-code of the article, independent of any specific regional or national extension. Per plant, a commodity code is maintained, which consists of the HS-code extended with any specific regional or national extension.">852990</OtherProperty>\n              <OtherProperty name="ProductTitle" description="Short SEO product description">LG OLED G2 Stand</OtherProperty>\n              <OtherProperty name="INNER_PACKING_UNIT_1_DEPTH" description="Depth of the inner packing unit 1">322</OtherProperty>\n              <OtherProperty name="INNER_PACKING_UNIT_1_HEIGHT" description="Height of the inner packing unit 1">323</OtherProperty>\n              <OtherProperty name="WEIGHT_INNER_PACKING_UNIT_1" description="Gross weight (kg) of the inner packing unit 1">6.3</OtherProperty>\n              <OtherProperty name="WEIGHT_NET_INNER_PACKING_UNIT_1" description="Net weight (kg) of the inner packing unit 1">5</OtherProperty>\n              <OtherProperty name="INNER_PACKING_UNIT_1_WIDTH" description="Width of the inner packing unit 1">783</OtherProperty>\n              <OtherProperty name="NUMBER_INNER_PACKING_UNIT_1" description="Number of pieces per inner packing unit 1">1</OtherProperty>\n              <OtherProperty name="INNER_PACKING_UNIT_2_DEPTH" description="Depth of the inner packing unit 2">322</OtherProperty>\n              <OtherProperty name="INNER_PACKING_UNIT_2_HEIGHT" description="Height of the inner packing unit 2">323</OtherProperty>\n              <OtherProperty name="WEIGHT_INNER_PACKING_UNIT_2" description="Gross weight (kg) of the inner packing unit 2">6.3</OtherProperty>\n              <OtherProperty name="WEIGHT_NET_INNER_PACKING_UNIT_2" description="Net weight (kg) of the inner packing unit 2">5</OtherProperty>\n              <OtherProperty name="INNER_PACKING_UNIT_2_WIDTH" description="Width of the inner packing unit 2">783</OtherProperty>\n              <OtherProperty name="NUMBER_INNER_PACKING_UNIT_2" description="Number of pieces per inner packing unit 2">1</OtherProperty>\n              <OtherProperty name="PACKING_UNIT_DEPTH" description="Depth of the packing unit">322</OtherProperty>\n              <OtherProperty name="PACKING_UNIT_HEIGHT" description="Height of the packing unit">323</OtherProperty>\n              <OtherProperty name="WEIGHT_PACKING_UNIT" description="Gross weight (kg) of the packing unit">6.3</OtherProperty>\n              <OtherProperty name="WEIGHT_NET_PACKING_UNIT" description="Net weight (kg) of the packing unit">5</OtherProperty>\n              <OtherProperty name="PACKING_UNIT_WIDTH" description="Width of the packing unit">783</OtherProperty>\n              <OtherProperty name="LAYER_DEPTH" description="Depth of the layer">966</OtherProperty>\n              <OtherProperty name="LAYER_HEIGHT" description="Height of the layer">323</OtherProperty>\n              <OtherProperty name="WEIGHT_GROSS_LAYER" description="Gross weight (kg) of the layer">18.9</OtherProperty>\n              <OtherProperty name="WEIGHT_NET_LAYER" description="Net weight (kg) of the layer">15</OtherProperty>\n              <OtherProperty name="LAYER_WIDTH" description="Width of the layer">783</OtherProperty>\n              <OtherProperty name="PALLET_DEPTH" description="Depth of the pallet">966</OtherProperty>\n              <OtherProperty name="PALLET_HEIGHT" description="Height of the pallet">1615</OtherProperty>\n              <OtherProperty name="WEIGHT_GROSS_PALLET" description="Gross weight (kg) of the pallet">100.6</OtherProperty>\n              <OtherProperty name="WEIGHT_NET_PALLET" description="Net weight (kg) of the pallet">60</OtherProperty>\n              <OtherProperty name="PALLET_WIDTH" description="Width of the pallet">783</OtherProperty>\n              <OtherProperty name="LAYERS_PER_PALLET" description="Number of layers per pallet">4</OtherProperty>\n              <OtherProperty name="PALLET_HEIGHT_PALLET" description="Height of the pallet (incl. pallet)">1759</OtherProperty>\n              <OtherProperty name="Local Commodity Code" description="Can be used in addition to the Commodity Code especially when regional and national extensions are required.">85299097</OtherProperty>\n            </OtherProperties>\n            <RecommendedRetailPrice currencyQualifier="SEK">\n              <Amount>199000</Amount>\n              <NumberOfDecimal>2</NumberOfDecimal>\n            </RecommendedRetailPrice>\n            <StartingDate>\n              <Year>2022</Year>\n              <Month>03</Month>\n              <Day>30</Day>\n            </StartingDate>\n            <EndDate>\n              <Year>2025</Year>\n              <Month>03</Month>\n              <Day>30</Day>\n            </EndDate>\n            <ProductStatus>On market</ProductStatus>\n            <HighResolutionPictureName>https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/01_2022_SQ-G2ST%28G2_stand%29.jpg</HighResolutionPictureName>\n            <ChangeDate>\n              <Year>2023</Year>\n              <Month>04</Month>\n              <Day>04</Day>\n            </ChangeDate>\n            <Assets>\n              <Asset source="125755_01_2022_SQ-G2ST(G2_stand)">\n                <AssetProperty name="filename">01_2022_SQ-G2ST(G2_stand).jpg</AssetProperty>\n                <AssetProperty name="format">image/jpeg</AssetProperty>\n                <AssetProperty name="created">2022-01-18</AssetProperty>\n                <AssetProperty name="identifier">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/01_2022_SQ-G2ST%28G2_stand%29.jpg</AssetProperty>\n                <AssetProperty name="purpose">main picture</AssetProperty>\n                <AssetProperty name="subject">product picture</AssetProperty>\n                <AssetProperty name="pixelcount_x">5000</AssetProperty>\n                <AssetProperty name="pixelcount_y">5000</AssetProperty>\n                <AssetProperty name="filesize_kb">1769.29</AssetProperty>\n              </Asset>\n              <Asset source="125757_02_2022_SQ-G2ST(G2_stand)">\n                <AssetProperty name="filename">02_2022_SQ-G2ST(G2_stand).jpg</AssetProperty>\n                <AssetProperty name="format">image/jpeg</AssetProperty>\n                <AssetProperty name="created">2022-01-18</AssetProperty>\n                <AssetProperty name="identifier">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/02_2022_SQ-G2ST%28G2_stand%29.jpg</AssetProperty>\n                <AssetProperty name="purpose">additional picture</AssetProperty>\n                <AssetProperty name="subject">product picture</AssetProperty>\n                <AssetProperty name="pixelcount_x">5000</AssetProperty>\n                <AssetProperty name="pixelcount_y">5000</AssetProperty>\n                <AssetProperty name="filesize_kb">1815.49</AssetProperty>\n              </Asset>\n              <Asset source="125756_03_2022_SQ-G2ST(G2_stand)">\n                <AssetProperty name="filename">03_2022_SQ-G2ST(G2_stand).jpg</AssetProperty>\n                <AssetProperty name="format">image/jpeg</AssetProperty>\n                <AssetProperty name="created">2022-01-18</AssetProperty>\n                <AssetProperty name="identifier">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/03_2022_SQ-G2ST%28G2_stand%29.jpg</AssetProperty>\n                <AssetProperty name="purpose">additional picture</AssetProperty>\n                <AssetProperty name="subject">product picture</AssetProperty>\n                <AssetProperty name="pixelcount_x">5000</AssetProperty>\n                <AssetProperty name="pixelcount_y">5000</AssetProperty>\n                <AssetProperty name="filesize_kb">1122.4</AssetProperty>\n              </Asset>\n              <Asset source="125758_04_2022_SQ-G2ST(G2_stand)">\n                <AssetProperty name="filename">04_2022_SQ-G2ST(G2_stand).jpg</AssetProperty>\n                <AssetProperty name="format">image/jpeg</AssetProperty>\n                <AssetProperty name="created">2022-01-18</AssetProperty>\n                <AssetProperty name="identifier">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/04_2022_SQ-G2ST%28G2_stand%29.jpg</AssetProperty>\n                <AssetProperty name="purpose">additional picture</AssetProperty>\n                <AssetProperty name="subject">product picture</AssetProperty>\n                <AssetProperty name="pixelcount_x">5000</AssetProperty>\n                <AssetProperty name="pixelcount_y">5000</AssetProperty>\n                <AssetProperty name="filesize_kb">2042.68</AssetProperty>\n              </Asset>\n              <Asset source="125759_05_2022_SQ-G2ST(G2_stand)">\n                <AssetProperty name="filename">05_2022_SQ-G2ST(G2_stand).jpg</AssetProperty>\n                <AssetProperty name="format">image/jpeg</AssetProperty>\n                <AssetProperty name="created">2022-01-18</AssetProperty>\n                <AssetProperty name="identifier">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/05_2022_SQ-G2ST%28G2_stand%29.jpg</AssetProperty>\n                <AssetProperty name="purpose">additional picture</AssetProperty>\n                <AssetProperty name="subject">product picture</AssetProperty>\n                <AssetProperty name="pixelcount_x">5000</AssetProperty>\n                <AssetProperty name="pixelcount_y">5000</AssetProperty>\n                <AssetProperty name="filesize_kb">3216.15</AssetProperty>\n              </Asset>\n            </Assets>\n          </OtherData>\n        </Product>\n      </CatalogDownloadReplyItems>\n    </CatalogDownloadReply>\n  </BusinessMessage>\n</TradeplaceMessage>\n'})})]})}function y(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>p});var n=r(6540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);