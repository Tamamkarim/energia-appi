
# Tekninen raportti – Energia-hallintapaneeliprojekti

## Projektin Yhteenveto
Energia-hallintapaneelijärjestelmä kehitettiin käyttäjien sähkönkulutuksen hallintaan ja seurantaan. Järjestelmä mahdollistaa kirjautumisen, sopimus- ja laskutietojen tarkastelun sekä sähkönkulutuksen seuraamisen päivittäin, kuukausittain ja vuosittain. Lisäksi tarjolla on edistyneitä analyysejä ja kaavioita energiankulutuksesta.

## Käytetyt teknologiat
- **React.js**: Dynaamisten käyttöliittymien rakentamiseen.
- **TypeScript**: JavaScript-pohjainen kieli, jossa on tyyppiturva.
- **Vite**: Moderni ja nopea kehitystyökalu React-sovelluksille.
- **Chart.js** ja **react-chartjs-2**: Kaavioiden ja analyysien näyttämiseen.
- **CSS**: Käyttöliittymän suunnitteluun ja tyylittelyyn.
- **Fetch API**: Tietojen hakemiseen palvelimelta.
- **Node.js**: Taustapalvelimen (backend) ajamiseen.

## Projektin rakenne
- **Käyttöliittymä (Frontend)**: Rakennettu Reactilla ja TypeScriptillä. Käyttöliittymä on jaettu erillisiin komponentteihin, kuten kirjautuminen, hallintapaneeli, kaaviot jne.
- **Palvelin (Backend)**: Node.js-pohjainen, tarjoaa rajapinnat (API) sopimus-, lasku- ja kulutustietojen hakemiseen.
- **Kaaviot**: Chart.js käytössä kulutustietojen visuaaliseen esittämiseen.
- **Monikielisyys**: Käyttöliittymä tukee sekä arabiaa että suomea.

## Käytetyt kielet
- **TypeScript** (Reactin kanssa)
- **JavaScript** (osassa palvelinta)
- **CSS** (tyylittelyyn)

## Lisäominaisuudet
- Responsiivinen suunnittelu – toimii kaikilla laitteilla.
- Moderni ja helppokäyttöinen käyttöliittymä.
- Koodin selkeä organisointi helpottaa jatkokehitystä ja ylläpitoa.
