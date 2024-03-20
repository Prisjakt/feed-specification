---
sidebar_position: 2
---

# Trade XML

We support the `TradeXML` format defined by [Tradeplace](https://tradeplace.com) which is an extension of the [PI Standard](https://www.picertified.com/pi-standard/) format defined by [Applia Europe](https://www.applia-europe.eu/)

## Description

```xml
<?xml version="1.0" encoding="utf-8"?>
<TradeplaceMessage>
  <TransportEnvelope>
    <!--not used by us-->
  </TransportEnvelope>
  <BusinessMessage>
    <CatalogDownloadReply>
      <CatalogDownloadReplyHeader>
        <!--not used by us-->
      </CatalogDownloadReplyHeader>
      <CatalogDownloadReplyItems>
        <Product>
          <PIData>
            <Brand>LG</Brand>
            <ProductFamily familyName="ACCESSORIES" />
            <ProductCode>SQ-G2ST65</ProductCode>
            <InternalArticleNumber>SQ-G2ST65</InternalArticleNumber>
            <EANArticleCode>8806091664525</EANArticleCode>
            <PIProperties>
              <PIProperty name="PRODUCT_GROUP" description="Produktgrupp">Tillbehör</PIProperty>
              <PIProperty name="BRAND" description="Varumärke">LG</PIProperty>
              <PIProperty name="PRODUCT_SERIES" description="Product series">G2</PIProperty>
              <PIProperty name="CODE" description="Produktnamn">SQ-G2ST65.AEU</PIProperty>
              <PIProperty name="EAN" description="EAN-kod">8806091664525</PIProperty>
              <PIProperty name="HEIGHT" description="Höjd" unit="mm">323</PIProperty>
              <PIProperty name="WIDTH" description="Bredd" unit="mm">783</PIProperty>
              <PIProperty name="DEPTH" description="Djup" unit="mm">322</PIProperty>
              <PIProperty name="WEIGHT_NET" description="Nettovikt" unit="kg">5</PIProperty>
              <PIProperty name="WEIGHT_GROSS" description="Bruttovikt" unit="kg">6.3</PIProperty>
              <PIProperty name="ACCESSORY_FOR" description="Tillbehör till">OLED65G26LA</PIProperty>
              <PIProperty name="PRODUCT_IMAGE" description="Bild på produkt">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/01_2022_SQ-G2ST%28G2_stand%29.jpg</PIProperty>
              <PIProperty name="ADD_IMAGE1_ID" description="Bild 1">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/02_2022_SQ-G2ST%28G2_stand%29.jpg</PIProperty>
              <PIProperty name="ADD_IMAGE2_ID" description="Bild 2">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/03_2022_SQ-G2ST%28G2_stand%29.jpg</PIProperty>
              <PIProperty name="ADD_IMAGE3_ID" description="Bild 3">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/04_2022_SQ-G2ST%28G2_stand%29.jpg</PIProperty>
              <PIProperty name="ADD_IMAGE4_ID" description="Bild 4">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/05_2022_SQ-G2ST%28G2_stand%29.jpg</PIProperty>
            </PIProperties>
          </PIData>
          <ProductReferences />
          <PriceData />
          <UnitOfMeasures>
            <UnitOfMeasureBaseType>PCE</UnitOfMeasureBaseType>
            <UnitOfMeasure type="PCE">
              <UnitOfMeasureProperty name="DEPTH" unit="mm">322</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="HEIGHT" unit="mm">323</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WIDTH" unit="mm">783</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WEIGHT_NET" unit="kg">5</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WEIGHT_GROSS" unit="kg">6.3</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="DEPTH_PACKED" unit="mm">322</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="HEIGHT_PACKED" unit="mm">323</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WIDTH_PACKED" unit="mm">783</UnitOfMeasureProperty>
            </UnitOfMeasure>
            <UnitOfMeasure type="CAT1">
              <UnitOfMeasureProperty name="CONVERSION_NUMERATOR_TO_UOM" unit="PCE">1</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="DEPTH_PACKED" unit="mm">322</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="HEIGHT_PACKED" unit="mm">323</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WIDTH_PACKED" unit="mm">783</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WEIGHT_NET" unit="kg">5</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WEIGHT_GROSS" unit="kg">6.3</UnitOfMeasureProperty>
            </UnitOfMeasure>
            <UnitOfMeasure type="CAT2">
              <UnitOfMeasureProperty name="CONVERSION_NUMERATOR_TO_UOM" unit="PCE">1</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="DEPTH_PACKED" unit="mm">322</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="HEIGHT_PACKED" unit="mm">323</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WIDTH_PACKED" unit="mm">783</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WEIGHT_NET" unit="kg">5</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WEIGHT_GROSS" unit="kg">6.3</UnitOfMeasureProperty>
            </UnitOfMeasure>
            <UnitOfMeasure type="CAT">
              <UnitOfMeasureProperty name="DEPTH_PACKED" unit="mm">322</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="HEIGHT_PACKED" unit="mm">323</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WIDTH_PACKED" unit="mm">783</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WEIGHT_NET" unit="kg">5</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WEIGHT_GROSS" unit="kg">6.3</UnitOfMeasureProperty>
            </UnitOfMeasure>
            <UnitOfMeasure type="LAY">
              <UnitOfMeasureProperty name="DEPTH_PACKED" unit="mm">966</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="HEIGHT_PACKED" unit="mm">323</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WIDTH_PACKED" unit="mm">783</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WEIGHT_NET" unit="kg">15</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WEIGHT_GROSS" unit="kg">18.9</UnitOfMeasureProperty>
            </UnitOfMeasure>
            <UnitOfMeasure type="PAL">
              <UnitOfMeasureProperty name="STACKING_FACTOR">4</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="DEPTH_PACKED" unit="mm">966</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="HEIGHT_PACKED" unit="mm">1615</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="TOTAL_HEIGHT" unit="mm">1759</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WIDTH_PACKED" unit="mm">783</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WEIGHT_NET" unit="kg">60</UnitOfMeasureProperty>
              <UnitOfMeasureProperty name="WEIGHT_GROSS" unit="kg">100.6</UnitOfMeasureProperty>
            </UnitOfMeasure>
          </UnitOfMeasures>
          <OtherData>
            <OtherProperties>
              <OtherProperty name="Commodity Code" description="Per plant, a commodity code is maintained, which consists of the HS-code extended with any specific regional or national extension.">85299097</OtherProperty>
              <OtherProperty name="country of origin" description="Country of origin of the material. Key of the country in which the material has been produced.  You are legally required to specify the country of origin both for export and import.">Poland</OtherProperty>
              <OtherProperty name="Harmonised System Code" description="The 6 digit HS-code of the article, independent of any specific regional or national extension. Per plant, a commodity code is maintained, which consists of the HS-code extended with any specific regional or national extension.">852990</OtherProperty>
              <OtherProperty name="ProductTitle" description="Short SEO product description">LG OLED G2 Stand</OtherProperty>
              <OtherProperty name="INNER_PACKING_UNIT_1_DEPTH" description="Depth of the inner packing unit 1">322</OtherProperty>
              <OtherProperty name="INNER_PACKING_UNIT_1_HEIGHT" description="Height of the inner packing unit 1">323</OtherProperty>
              <OtherProperty name="WEIGHT_INNER_PACKING_UNIT_1" description="Gross weight (kg) of the inner packing unit 1">6.3</OtherProperty>
              <OtherProperty name="WEIGHT_NET_INNER_PACKING_UNIT_1" description="Net weight (kg) of the inner packing unit 1">5</OtherProperty>
              <OtherProperty name="INNER_PACKING_UNIT_1_WIDTH" description="Width of the inner packing unit 1">783</OtherProperty>
              <OtherProperty name="NUMBER_INNER_PACKING_UNIT_1" description="Number of pieces per inner packing unit 1">1</OtherProperty>
              <OtherProperty name="INNER_PACKING_UNIT_2_DEPTH" description="Depth of the inner packing unit 2">322</OtherProperty>
              <OtherProperty name="INNER_PACKING_UNIT_2_HEIGHT" description="Height of the inner packing unit 2">323</OtherProperty>
              <OtherProperty name="WEIGHT_INNER_PACKING_UNIT_2" description="Gross weight (kg) of the inner packing unit 2">6.3</OtherProperty>
              <OtherProperty name="WEIGHT_NET_INNER_PACKING_UNIT_2" description="Net weight (kg) of the inner packing unit 2">5</OtherProperty>
              <OtherProperty name="INNER_PACKING_UNIT_2_WIDTH" description="Width of the inner packing unit 2">783</OtherProperty>
              <OtherProperty name="NUMBER_INNER_PACKING_UNIT_2" description="Number of pieces per inner packing unit 2">1</OtherProperty>
              <OtherProperty name="PACKING_UNIT_DEPTH" description="Depth of the packing unit">322</OtherProperty>
              <OtherProperty name="PACKING_UNIT_HEIGHT" description="Height of the packing unit">323</OtherProperty>
              <OtherProperty name="WEIGHT_PACKING_UNIT" description="Gross weight (kg) of the packing unit">6.3</OtherProperty>
              <OtherProperty name="WEIGHT_NET_PACKING_UNIT" description="Net weight (kg) of the packing unit">5</OtherProperty>
              <OtherProperty name="PACKING_UNIT_WIDTH" description="Width of the packing unit">783</OtherProperty>
              <OtherProperty name="LAYER_DEPTH" description="Depth of the layer">966</OtherProperty>
              <OtherProperty name="LAYER_HEIGHT" description="Height of the layer">323</OtherProperty>
              <OtherProperty name="WEIGHT_GROSS_LAYER" description="Gross weight (kg) of the layer">18.9</OtherProperty>
              <OtherProperty name="WEIGHT_NET_LAYER" description="Net weight (kg) of the layer">15</OtherProperty>
              <OtherProperty name="LAYER_WIDTH" description="Width of the layer">783</OtherProperty>
              <OtherProperty name="PALLET_DEPTH" description="Depth of the pallet">966</OtherProperty>
              <OtherProperty name="PALLET_HEIGHT" description="Height of the pallet">1615</OtherProperty>
              <OtherProperty name="WEIGHT_GROSS_PALLET" description="Gross weight (kg) of the pallet">100.6</OtherProperty>
              <OtherProperty name="WEIGHT_NET_PALLET" description="Net weight (kg) of the pallet">60</OtherProperty>
              <OtherProperty name="PALLET_WIDTH" description="Width of the pallet">783</OtherProperty>
              <OtherProperty name="LAYERS_PER_PALLET" description="Number of layers per pallet">4</OtherProperty>
              <OtherProperty name="PALLET_HEIGHT_PALLET" description="Height of the pallet (incl. pallet)">1759</OtherProperty>
              <OtherProperty name="Local Commodity Code" description="Can be used in addition to the Commodity Code especially when regional and national extensions are required.">85299097</OtherProperty>
            </OtherProperties>
            <RecommendedRetailPrice currencyQualifier="SEK">
              <Amount>199000</Amount>
              <NumberOfDecimal>2</NumberOfDecimal>
            </RecommendedRetailPrice>
            <StartingDate>
              <Year>2022</Year>
              <Month>03</Month>
              <Day>30</Day>
            </StartingDate>
            <EndDate>
              <Year>2025</Year>
              <Month>03</Month>
              <Day>30</Day>
            </EndDate>
            <ProductStatus>On market</ProductStatus>
            <HighResolutionPictureName>https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/01_2022_SQ-G2ST%28G2_stand%29.jpg</HighResolutionPictureName>
            <ChangeDate>
              <Year>2023</Year>
              <Month>04</Month>
              <Day>04</Day>
            </ChangeDate>
            <Assets>
              <Asset source="125755_01_2022_SQ-G2ST(G2_stand)">
                <AssetProperty name="filename">01_2022_SQ-G2ST(G2_stand).jpg</AssetProperty>
                <AssetProperty name="format">image/jpeg</AssetProperty>
                <AssetProperty name="created">2022-01-18</AssetProperty>
                <AssetProperty name="identifier">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/01_2022_SQ-G2ST%28G2_stand%29.jpg</AssetProperty>
                <AssetProperty name="purpose">main picture</AssetProperty>
                <AssetProperty name="subject">product picture</AssetProperty>
                <AssetProperty name="pixelcount_x">5000</AssetProperty>
                <AssetProperty name="pixelcount_y">5000</AssetProperty>
                <AssetProperty name="filesize_kb">1769.29</AssetProperty>
              </Asset>
              <Asset source="125757_02_2022_SQ-G2ST(G2_stand)">
                <AssetProperty name="filename">02_2022_SQ-G2ST(G2_stand).jpg</AssetProperty>
                <AssetProperty name="format">image/jpeg</AssetProperty>
                <AssetProperty name="created">2022-01-18</AssetProperty>
                <AssetProperty name="identifier">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/02_2022_SQ-G2ST%28G2_stand%29.jpg</AssetProperty>
                <AssetProperty name="purpose">additional picture</AssetProperty>
                <AssetProperty name="subject">product picture</AssetProperty>
                <AssetProperty name="pixelcount_x">5000</AssetProperty>
                <AssetProperty name="pixelcount_y">5000</AssetProperty>
                <AssetProperty name="filesize_kb">1815.49</AssetProperty>
              </Asset>
              <Asset source="125756_03_2022_SQ-G2ST(G2_stand)">
                <AssetProperty name="filename">03_2022_SQ-G2ST(G2_stand).jpg</AssetProperty>
                <AssetProperty name="format">image/jpeg</AssetProperty>
                <AssetProperty name="created">2022-01-18</AssetProperty>
                <AssetProperty name="identifier">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/03_2022_SQ-G2ST%28G2_stand%29.jpg</AssetProperty>
                <AssetProperty name="purpose">additional picture</AssetProperty>
                <AssetProperty name="subject">product picture</AssetProperty>
                <AssetProperty name="pixelcount_x">5000</AssetProperty>
                <AssetProperty name="pixelcount_y">5000</AssetProperty>
                <AssetProperty name="filesize_kb">1122.4</AssetProperty>
              </Asset>
              <Asset source="125758_04_2022_SQ-G2ST(G2_stand)">
                <AssetProperty name="filename">04_2022_SQ-G2ST(G2_stand).jpg</AssetProperty>
                <AssetProperty name="format">image/jpeg</AssetProperty>
                <AssetProperty name="created">2022-01-18</AssetProperty>
                <AssetProperty name="identifier">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/04_2022_SQ-G2ST%28G2_stand%29.jpg</AssetProperty>
                <AssetProperty name="purpose">additional picture</AssetProperty>
                <AssetProperty name="subject">product picture</AssetProperty>
                <AssetProperty name="pixelcount_x">5000</AssetProperty>
                <AssetProperty name="pixelcount_y">5000</AssetProperty>
                <AssetProperty name="filesize_kb">2042.68</AssetProperty>
              </Asset>
              <Asset source="125759_05_2022_SQ-G2ST(G2_stand)">
                <AssetProperty name="filename">05_2022_SQ-G2ST(G2_stand).jpg</AssetProperty>
                <AssetProperty name="format">image/jpeg</AssetProperty>
                <AssetProperty name="created">2022-01-18</AssetProperty>
                <AssetProperty name="identifier">https://pdm-lg-s02.prodanet.com/pdm/assets/LG/Products/Nordics/HE/Accessories/2022/SQ-G2ST/05_2022_SQ-G2ST%28G2_stand%29.jpg</AssetProperty>
                <AssetProperty name="purpose">additional picture</AssetProperty>
                <AssetProperty name="subject">product picture</AssetProperty>
                <AssetProperty name="pixelcount_x">5000</AssetProperty>
                <AssetProperty name="pixelcount_y">5000</AssetProperty>
                <AssetProperty name="filesize_kb">3216.15</AssetProperty>
              </Asset>
            </Assets>
          </OtherData>
        </Product>
      </CatalogDownloadReplyItems>
    </CatalogDownloadReply>
  </BusinessMessage>
</TradeplaceMessage>
```