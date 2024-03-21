---
sidebar_position: 3
title: 'Onix For Books XML'
---

# Onix For Books XML

If your products are books, we support the [Onix For Books](https://www.editeur.org/14/Code-Lists/) XML format to import your products.

## Example Files

```xml
<?xml version="1.0" encoding="utf-8"?>
<ONIXMessage release="3.0" xmlns="http://ns.editeur.org/onix/3.0/reference">
  <Header>
    <Sender>
      <SenderIdentifier>
        <SenderIDType>01</SenderIDType>
        <IDValue>BR101</IDValue>
      </SenderIdentifier>
      <EmailAddress>test@prisjakt.nu</EmailAddress>
    </Sender>
    <SentDateTime>20231015</SentDateTime>
    <DefaultCurrencyCode>SEK</DefaultCurrencyCode>
  </Header>
  <Product>
    <RecordReference>9780521614320</RecordReference>
    <NotificationType>02</NotificationType>
    <ProductIdentifier>
      <ProductIDType>15</ProductIDType>
      <IDValue>9780521614320</IDValue>
    </ProductIdentifier>
    <ProductIdentifier>
      <ProductIDType>03</ProductIDType>
      <IDValue>9780521614320</IDValue>
    </ProductIdentifier>
    <DescriptiveDetail>
      <ProductComposition>00</ProductComposition>
      <ProductForm>00</ProductForm>
      <ProductFormDescription>CD-skiva</ProductFormDescription>
      <Measure>
        <MeasureType>01</MeasureType>
        <Measurement>134</Measurement>
        <MeasureUnitCode>mm</MeasureUnitCode>
      </Measure>
      <Measure>
        <MeasureType>08</MeasureType>
        <Measurement>102</Measurement>
        <MeasureUnitCode>gr</MeasureUnitCode>
      </Measure>
      <TitleDetail>
        <TitleType>01</TitleType>
        <TitleElement>
          <TitleElementLevel>01</TitleElementLevel>
          <TitleText>Messages 2 class cds</TitleText>
        </TitleElement>
      </TitleDetail>
      <TitleDetail>
        <TitleType>10</TitleType>
        <TitleElement>
          <TitleElementLevel>01</TitleElementLevel>
          <TitleText>Messages 2 class cds</TitleText>
        </TitleElement>
      </TitleDetail>
      <Contributor>
        <SequenceNumber>1</SequenceNumber>
        <ContributorRole>A01</ContributorRole>
        <PersonNameInverted>Goodey, Noel</PersonNameInverted>
        <NamesBeforeKey>Noel</NamesBeforeKey>
        <KeyNames>Goodey</KeyNames>
      </Contributor>
      <Language>
        <LanguageRole>01</LanguageRole>
        <LanguageCode>eng</LanguageCode>
      </Language>
      <Subject>
        <SubjectSchemeIdentifier>47</SubjectSchemeIdentifier>
        <SubjectCode>23</SubjectCode>
        <SubjectHeadingText>Litteraturvetenskap</SubjectHeadingText>
      </Subject>
      <Subject>
        <SubjectSchemeIdentifier>95</SubjectSchemeIdentifier>
        <SubjectCode>2ACB</SubjectCode>
      </Subject>
    </DescriptiveDetail>
    <CollateralDetail/>
    <PublishingDetail>
      <Publisher>
        <PublishingRole>01</PublishingRole>
        <PublisherIdentifier>
          <PublisherIDType>01</PublisherIDType>
          <IDTypeName>BR-ID</IDTypeName>
          <IDValue>1966</IDValue>
        </PublisherIdentifier>
        <PublisherIdentifier>
          <PublisherIDType>01</PublisherIDType>
          <IDTypeName>Forlag_kortnamn</IDTypeName>
          <IDValue>CAMB</IDValue>
        </PublisherIdentifier>
        <PublisherName>Cambridge University Press</PublisherName>
      </Publisher>
      <Publisher>
        <PublishingRole>04</PublishingRole>
        <PublisherName>Cambridge university press</PublisherName>
      </Publisher>
      <PublishingDate>
        <PublishingDateRole>01</PublishingDateRole>
        <Date>20050407</Date>
      </PublishingDate>
    </PublishingDetail>
    <ProductSupply>
      <SupplyDetail>
        <Supplier>
          <SupplierRole>03</SupplierRole>
          <SupplierIdentifier>
            <SupplierIDType>01</SupplierIDType>
            <IDTypeName>BR-ID</IDTypeName>
            <IDValue>3279</IDValue>
          </SupplierIdentifier>
          <SupplierIdentifier>
            <SupplierIDType>01</SupplierIDType>
            <IDTypeName>Distributor_kortnamn</IDTypeName>
            <IDValue>FSBI</IDValue>
          </SupplierIdentifier>
          <SupplierIdentifier>
            <SupplierIDType>06</SupplierIDType>
            <IDValue>7381000023118</IDValue>
          </SupplierIdentifier>
          <SupplierName>Förlagssystem bokimporten</SupplierName>
        </Supplier>
        <ProductAvailability>22</ProductAvailability>
        <Price>
          <PriceType>05</PriceType>
          <PriceAmount>545.00</PriceAmount>
          <Tax>
            <TaxType>01</TaxType>
            <TaxRatePercent>6</TaxRatePercent>
          </Tax>
          <PriceDate>
            <PriceDateRole>14</PriceDateRole>
            <Date>20200101</Date>
          </PriceDate>
        </Price>
      </SupplyDetail>
    </ProductSupply>
  </Product>
</ONIXMessage>
```