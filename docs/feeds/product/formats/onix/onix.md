---
sidebar_position: 3
title: 'Onix For Books XML'
---

# Onix For Books XML

If your products are books, we support the [Onix For Books](https://www.editeur.org/14/Code-Lists/) XML format to import your products.

## Example Files

```xml
<?xml version="1.0" encoding="utf-8"?>
<artikelregister>
  <filinformation>
    <avsandare>test</avsandare>
    <avsandare_email>test@test.com</avsandare_email>
    <mottagare>Generell</mottagare>
    <typ>e_artdag</typ>
  </filinformation>
  <artikel>
    <granskad>Ja</granskad>
    <uppdaterad>20240307204622</uppdaterad>
    <artikelnummer>9789174290882</artikelnummer>
    <ean>9789174290882</ean>
    <titel>Brott och straff</titel>
    <arbetstitel>Brott och straff</arbetstitel>
    <mediatyp>Bok</mediatyp>
    <bandtyp>Pocket</bandtyp>
    <forlag_id>4278</forlag_id>
    <forlag>Bonnier Pocket</forlag>
    <forlag_kortnamn>BONP</forlag_kortnamn>
    <huvuddistributor_id>102</huvuddistributor_id>
    <distributor>
      <distributor_id>102</distributor_id>
      <distributor_namn>Bonnierförlagen</distributor_namn>
      <distributor_kortnamn>SAMD</distributor_kortnamn>
      <lagerstatus>Finns i lager</lagerstatus>
      <lagersaldo>999</lagersaldo>
      <fpris>50,00</fpris>
      <pristyp>05</pristyp>
      <nollpris>0</nollpris>
    </distributor>
    <distributor>
      <distributor_id>1581</distributor_id>
      <distributor_namn>Stardist AB</distributor_namn>
      <distributor_kortnamn>SDIST</distributor_kortnamn>
      <distributor_gln>7300009034628</distributor_gln>
      <lagerstatus>Spärrad</lagerstatus>
      <lagersaldo>0</lagersaldo>
      <fpris>38,00</fpris>
      <pristyp>05</pristyp>
      <nollpris>0</nollpris>
    </distributor>
    <distributor>
      <distributor_id>3028</distributor_id>
      <distributor_namn>Förlagssystem grossisten</distributor_namn>
      <distributor_kortnamn>FSGR</distributor_kortnamn>
      <distributor_gln>7381000023118</distributor_gln>
      <lagerstatus>Finns i lager</lagerstatus>
      <lagersaldo>9</lagersaldo>
      <fpris>50,00</fpris>
      <pristyp>05</pristyp>
      <nollpris>0</nollpris>
    </distributor>
    <prisgrupp>M</prisgrupp>
    <moms>6</moms>
    <saljperiod>2010 Vår</saljperiod>
    <utgivningsdatum>20100104</utgivningsdatum>
    <recensionsdatum>20100104</recensionsdatum>
    <upplagenummer>0</upplagenummer>
    <omfang enhet="sidor">646</omfang>
    <bredd>110</bredd>
    <hojd>180</hojd>
    <ryggbredd>39</ryggbredd>
    <vikt>334</vikt>
    <illustrerad>Nej</illustrerad>
    <sprak>Svenska</sprak>
    <sprak_kod>swe</sprak_kod>
    <medarbetare typ="forfattare">Dostojevskij, Fjodor</medarbetare>
    <medarbetare typ="oversattare">Björkegren, Hans</medarbetare>
    <medarbetare typ="formgivare">Herrström Gemzell, Jenny</medarbetare>
    <laromedel>Nej</laromedel>
    <katalogsignum>Hce</katalogsignum>
    <varugrupp>004 Utländska berättare</varugrupp>
    <saga>&lt;p&gt;Brott och straff har kallats ”världens mest berömda roman” och är en av världens mest lästa böcker. Sedan den kom ut 1866 har hundratals miljoner läsare följt den fattige studenten och mördaren Raskolnikov på hans febervandring genom S:t Petersburg.&lt;/p&gt;</saga>
    <link typ="omslagsbild">https://prodbfopusgeneral.blob.core.windows.net/asset-storage-public/bokbilder/g/9789174290882.jpg?timestamp=20240226182952
</link>
    <link typ="omslagsbild">https://prodbfopusgeneral.blob.core.windows.net/asset-storage-public/bokbilder3d/g/9789174290882.jpg?timestamp=20240305094611
</link>
    <link typ="omslagsbild">https://prodbfopusgeneral.blob.core.windows.net/asset-storage-public/bokbilder/tif/9789174290882.tif?timestamp=20240226182949
</link>
    <link typ="omslagsbild">https://media.bonnierforlagen.se/bokbilder3d/tif/9789174290882.jpg?timestamp=20090914163533</link>
    <katalogtext>&lt;p&gt;Brott och straff har kallats ”världens mest berömda roman” och är en av världens mest lästa böcker. Sedan den kom ut 1866 har hundratals miljoner läsare följt den fattige studenten och mördaren Raskolnikov på hans febervandring genom S:t Petersburg.&lt;/p&gt;</katalogtext>
    <original>Nej</original>
    <miljomarkning>FSC</miljomarkning>
    <dewey>891.733</dewey>
    <thema>2ACSW</thema>
    <forhandsinfo>Nej</forhandsinfo>
  </artikel>
</artikelregister>
```