"use strict";(self.webpackChunkfeed_specification=self.webpackChunkfeed_specification||[]).push([[7168],{43421:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(74848),i=t(28453);const o={sidebar_position:3,title:"Onix For Books XML"},s="Onix For Books XML",a={id:"feeds/product/formats/onix/index",title:"Onix For Books XML",description:"If your products are books, we support the Onix For Books XML format to import your products.",source:"@site/docs/feeds/product/formats/onix/index.md",sourceDirName:"feeds/product/formats/onix",slug:"/feeds/product/formats/onix/",permalink:"/feeds/product/formats/onix/",draft:!1,unlisted:!1,editUrl:"https://github.com/Prisjakt/feed-specification/tree/master/docs/feeds/product/formats/onix/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Onix For Books XML"},sidebar:"tutorialSidebar",previous:{title:"Trade XML",permalink:"/feeds/product/formats/tradexml/"},next:{title:"Product Fields",permalink:"/feeds/product/fields/"}},l={},u=[{value:"Example Files",id:"example-files",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"onix-for-books-xml",children:"Onix For Books XML"})}),"\n",(0,r.jsxs)(n.p,{children:["If your products are books, we support the ",(0,r.jsx)(n.a,{href:"https://www.editeur.org/14/Code-Lists/",children:"Onix For Books"})," XML format to import your products."]}),"\n",(0,r.jsxs)(n.p,{children:["Code list for mappings can be found ",(0,r.jsx)(n.a,{href:"https://www.editeur.org/files/ONIX%20for%20books%20-%20code%20lists/ONIX_BookProduct_Codelists_Issue_65.html",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"example-files",children:"Example Files"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<ONIXMessage release="3.0" xmlns="http://ns.editeur.org/onix/3.0/reference">\n  <Header>\n    <Sender>\n      <SenderIdentifier>\n        <SenderIDType>01</SenderIDType>\n        <IDValue>BR101</IDValue>\n      </SenderIdentifier>\n      <EmailAddress>test@prisjakt.nu</EmailAddress>\n    </Sender>\n    <SentDateTime>20231015</SentDateTime>\n    <DefaultCurrencyCode>SEK</DefaultCurrencyCode>\n  </Header>\n  <Product>\n    <RecordReference>9780521614320</RecordReference>\n    <NotificationType>02</NotificationType>\n    <ProductIdentifier>\n      <ProductIDType>15</ProductIDType>\n      <IDValue>9780521614320</IDValue>\n    </ProductIdentifier>\n    <ProductIdentifier>\n      <ProductIDType>03</ProductIDType>\n      <IDValue>9780521614320</IDValue>\n    </ProductIdentifier>\n    <DescriptiveDetail>\n      <ProductComposition>00</ProductComposition>\n      <ProductForm>00</ProductForm>\n      <ProductFormDetail>E116</ProductFormDetail>\n      <ProductFormDescription>CD-skiva</ProductFormDescription>\n      <Measure>\n        <MeasureType>01</MeasureType>\n        <Measurement>134</Measurement>\n        <MeasureUnitCode>mm</MeasureUnitCode>\n      </Measure>\n      <Measure>\n        <MeasureType>08</MeasureType>\n        <Measurement>102</Measurement>\n        <MeasureUnitCode>gr</MeasureUnitCode>\n      </Measure>\n      <TitleDetail>\n        <TitleType>01</TitleType>\n        <TitleElement>\n          <TitleElementLevel>01</TitleElementLevel>\n          <TitleText>Messages 2 class cds</TitleText>\n        </TitleElement>\n      </TitleDetail>\n      <TitleDetail>\n        <TitleType>10</TitleType>\n        <TitleElement>\n          <TitleElementLevel>01</TitleElementLevel>\n          <TitleText>Messages 2 class cds</TitleText>\n        </TitleElement>\n      </TitleDetail>\n      <Contributor>\n        <SequenceNumber>1</SequenceNumber>\n        <ContributorRole>A01</ContributorRole>\n        <PersonNameInverted>Goodey, Noel</PersonNameInverted>\n        <NamesBeforeKey>Noel</NamesBeforeKey>\n        <KeyNames>Goodey</KeyNames>\n      </Contributor>\n      <Language>\n        <LanguageRole>01</LanguageRole>\n        <LanguageCode>eng</LanguageCode>\n      </Language>\n      <Subject>\n        <SubjectSchemeIdentifier>47</SubjectSchemeIdentifier>\n        <SubjectCode>23</SubjectCode>\n        <SubjectHeadingText>Litteraturvetenskap</SubjectHeadingText>\n      </Subject>\n      <Subject>\n        <SubjectSchemeIdentifier>95</SubjectSchemeIdentifier>\n        <SubjectCode>2ACB</SubjectCode>\n      </Subject>\n      <Extent>\n          <ExtentType>00</ExtentType>\n          <ExtentValue>200</ExtentValue>\n          <ExtentUnit>03</ExtentUnit>\n      </Extent>\n      <Contributor>\n          <SequenceNumber>2</SequenceNumber>\n          <ContributorRole>A01</ContributorRole>\n          <PersonNameInverted>King, Ben</PersonNameInverted>\n          <NamesBeforeKey>Ben</NamesBeforeKey>\n          <KeyNames>King</KeyNames>\n      </Contributor>\n    </DescriptiveDetail>\n    <CollateralDetail/>\n    <PublishingDetail>\n      <Publisher>\n        <PublishingRole>01</PublishingRole>\n        <PublisherIdentifier>\n          <PublisherIDType>01</PublisherIDType>\n          <IDTypeName>BR-ID</IDTypeName>\n          <IDValue>1966</IDValue>\n        </PublisherIdentifier>\n        <PublisherIdentifier>\n          <PublisherIDType>01</PublisherIDType>\n          <IDTypeName>Forlag_kortnamn</IDTypeName>\n          <IDValue>CAMB</IDValue>\n        </PublisherIdentifier>\n        <PublisherName>Cambridge University Press</PublisherName>\n      </Publisher>\n      <Publisher>\n        <PublishingRole>04</PublishingRole>\n        <PublisherName>Cambridge university press</PublisherName>\n      </Publisher>\n      <PublishingDate>\n        <PublishingDateRole>01</PublishingDateRole>\n        <Date>20050407</Date>\n      </PublishingDate>\n    </PublishingDetail>\n    <ProductSupply>\n      <SupplyDetail>\n        <Supplier>\n          <SupplierRole>03</SupplierRole>\n          <SupplierIdentifier>\n            <SupplierIDType>01</SupplierIDType>\n            <IDTypeName>BR-ID</IDTypeName>\n            <IDValue>3279</IDValue>\n          </SupplierIdentifier>\n          <SupplierIdentifier>\n            <SupplierIDType>01</SupplierIDType>\n            <IDTypeName>Distributor_kortnamn</IDTypeName>\n            <IDValue>FSBI</IDValue>\n          </SupplierIdentifier>\n          <SupplierIdentifier>\n            <SupplierIDType>06</SupplierIDType>\n            <IDValue>7381000023118</IDValue>\n          </SupplierIdentifier>\n          <SupplierName>F\xf6rlagssystem bokimporten</SupplierName>\n        </Supplier>\n        <ProductAvailability>22</ProductAvailability>\n        <Price>\n          <PriceType>05</PriceType>\n          <PriceAmount>545.00</PriceAmount>\n          <Tax>\n            <TaxType>01</TaxType>\n            <TaxRatePercent>6</TaxRatePercent>\n          </Tax>\n          <PriceDate>\n            <PriceDateRole>14</PriceDateRole>\n            <Date>20200101</Date>\n          </PriceDate>\n        </Price>\n      </SupplyDetail>\n    </ProductSupply>\n  </Product>\n</ONIXMessage>\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);