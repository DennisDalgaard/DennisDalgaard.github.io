/* ============================================
   Shelly Device Selector — Internationalization
   Languages: da, sv, no, fi, de, en
   ============================================ */

const LANGUAGES = {
    da: { flag: '🇩🇰', name: 'Dansk', code: 'DA' },
    sv: { flag: '🇸🇪', name: 'Svenska', code: 'SV' },
    no: { flag: '🇳🇴', name: 'Norsk', code: 'NO' },
    fi: { flag: '🇫🇮', name: 'Suomi', code: 'FI' },
    de: { flag: '🇩🇪', name: 'Deutsch', code: 'DE' },
    en: { flag: '🇬🇧', name: 'English', code: 'EN' }
};

const TRANSLATIONS = {
    // ─── UI Chrome ──────────────────────────────
    subtitle: {
        da: 'Enhedsvælger', sv: 'Enhetsväljare', no: 'Enhetsvelger',
        fi: 'Laitevalitsin', de: 'Geräteauswahl', en: 'Device Selector'
    },
    reset: {
        da: 'Start forfra', sv: 'Börja om', no: 'Start på nytt',
        fi: 'Aloita alusta', de: 'Neu starten', en: 'Start over'
    },
    heroTitle: {
        da: 'Find den perfekte Shelly enhed',
        sv: 'Hitta den perfekta Shelly-enheten',
        no: 'Finn den perfekte Shelly-enheten',
        fi: 'Löydä täydellinen Shelly-laite',
        de: 'Finde das perfekte Shelly-Gerät',
        en: 'Find the perfect Shelly device'
    },
    heroDesc: {
        da: 'Gennemgå tre enkle trin for at finde den rigtige enhed til dit projekt.',
        sv: 'Gå igenom tre enkla steg för att hitta rätt enhet för ditt projekt.',
        no: 'Gå gjennom tre enkle trinn for å finne riktig enhet til prosjektet ditt.',
        fi: 'Käy läpi kolme yksinkertaista vaihetta löytääksesi oikean laitteen projektiisi.',
        de: 'Durchlaufe drei einfache Schritte, um das richtige Gerät für dein Projekt zu finden.',
        en: 'Follow three simple steps to find the right device for your project.'
    },

    // ─── Steps ──────────────────────────────────
    step1Label: {
        da: 'Anvendelse', sv: 'Användning', no: 'Anvendelse',
        fi: 'Käyttötarkoitus', de: 'Anwendung', en: 'Use case'
    },
    step2Label: {
        da: 'Specifikationer', sv: 'Specifikationer', no: 'Spesifikasjoner',
        fi: 'Tekniset tiedot', de: 'Spezifikationen', en: 'Specifications'
    },
    step3Label: {
        da: 'Enheder', sv: 'Enheter', no: 'Enheter',
        fi: 'Laitteet', de: 'Geräte', en: 'Devices'
    },

    // ─── Step 1 ─────────────────────────────────
    step1Title: {
        da: 'Hvad skal enheden bruges til?',
        sv: 'Vad ska enheten användas till?',
        no: 'Hva skal enheten brukes til?',
        fi: 'Mihin laitetta käytetään?',
        de: 'Wofür soll das Gerät verwendet werden?',
        en: 'What will the device be used for?'
    },
    step1Desc: {
        da: 'Vælg en eller flere anvendelser der beskriver dit projekt.',
        sv: 'Välj ett eller flera användningsområden som beskriver ditt projekt.',
        no: 'Velg en eller flere bruksområder som beskriver prosjektet ditt.',
        fi: 'Valitse yksi tai useampi käyttötarkoitus joka kuvaa projektiasi.',
        de: 'Wähle einen oder mehrere Anwendungsbereiche, die dein Projekt beschreiben.',
        en: 'Select one or more use cases that describe your project.'
    },

    // ─── Step 2 ─────────────────────────────────
    step2Title: {
        da: 'Tilpas dine krav',
        sv: 'Anpassa dina krav',
        no: 'Tilpass dine krav',
        fi: 'Tarkenna vaatimuksiasi',
        de: 'Passe deine Anforderungen an',
        en: 'Refine your requirements'
    },
    step2Desc: {
        da: 'Vælg de specifikationer der er relevante for dit projekt. Du kan springe filtre over.',
        sv: 'Välj de specifikationer som är relevanta för ditt projekt. Du kan hoppa över filter.',
        no: 'Velg spesifikasjoner som er relevante for prosjektet ditt. Du kan hoppe over filtre.',
        fi: 'Valitse projektillesi olennaiset tekniset tiedot. Voit ohittaa suodattimia.',
        de: 'Wähle die für dein Projekt relevanten Spezifikationen. Du kannst Filter überspringen.',
        en: 'Choose specifications relevant to your project. You can skip filters.'
    },

    // ─── Step 3 ─────────────────────────────────
    step3Title: {
        da: 'Anbefalede enheder',
        sv: 'Rekommenderade enheter',
        no: 'Anbefalte enheter',
        fi: 'Suositellut laitteet',
        de: 'Empfohlene Geräte',
        en: 'Recommended devices'
    },
    step3Desc: {
        da: 'Baseret på dine valg anbefaler vi følgende enheder.',
        sv: 'Baserat på dina val rekommenderar vi följande enheter.',
        no: 'Basert på dine valg anbefaler vi følgende enheter.',
        fi: 'Valintojesi perusteella suosittelemme seuraavia laitteita.',
        de: 'Basierend auf deiner Auswahl empfehlen wir folgende Geräte.',
        en: 'Based on your selections, we recommend the following devices.'
    },

    // ─── Buttons ────────────────────────────────
    next: {
        da: 'Næste', sv: 'Nästa', no: 'Neste',
        fi: 'Seuraava', de: 'Weiter', en: 'Next'
    },
    back: {
        da: 'Tilbage', sv: 'Tillbaka', no: 'Tilbake',
        fi: 'Takaisin', de: 'Zurück', en: 'Back'
    },
    showResults: {
        da: 'Vis enheder', sv: 'Visa enheter', no: 'Vis enheter',
        fi: 'Näytä laitteet', de: 'Geräte anzeigen', en: 'Show devices'
    },
    adjustFilters: {
        da: 'Juster filtre', sv: 'Justera filter', no: 'Juster filtre',
        fi: 'Muokkaa suodattimia', de: 'Filter anpassen', en: 'Adjust filters'
    },
    viewSpecs: {
        da: 'Se specifikationer', sv: 'Se specifikationer', no: 'Se spesifikasjoner',
        fi: 'Katso tekniset tiedot', de: 'Spezifikationen ansehen', en: 'View specifications'
    },

    // ─── No results ─────────────────────────────
    noResultsTitle: {
        da: 'Ingen enheder matcher',
        sv: 'Inga enheter matchar',
        no: 'Ingen enheter matcher',
        fi: 'Laitteita ei löytynyt',
        de: 'Keine Geräte gefunden',
        en: 'No matching devices'
    },
    noResultsDesc: {
        da: 'Prøv at justere dine filtre for at se flere enheder.',
        sv: 'Prova att justera dina filter för att se fler enheter.',
        no: 'Prøv å justere filtrene for å se flere enheter.',
        fi: 'Kokeile muuttaa suodattimia nähdäksesi enemmän laitteita.',
        de: 'Versuche die Filter anzupassen, um mehr Geräte zu sehen.',
        en: 'Try adjusting your filters to see more devices.'
    },

    // ─── Footer ─────────────────────────────────
    footerText: {
        da: 'Shelly Enhedsvælger — Et værktøj til at finde den rigtige Shelly enhed.',
        sv: 'Shelly Enhetsväljare — Ett verktyg för att hitta rätt Shelly-enhet.',
        no: 'Shelly Enhetsvelger — Et verktøy for å finne riktig Shelly-enhet.',
        fi: 'Shelly Laitevalitsin — Työkalu oikean Shelly-laitteen löytämiseen.',
        de: 'Shelly Geräteauswahl — Ein Tool zum Finden des richtigen Shelly-Geräts.',
        en: 'Shelly Device Selector — A tool to find the right Shelly device.'
    },
    footerDisclaimer: {
        da: 'Produktdata er vejledende. Tjek altid de officielle specifikationer på',
        sv: 'Produktdata är vägledande. Kontrollera alltid de officiella specifikationerna på',
        no: 'Produktdata er veiledende. Sjekk alltid de offisielle spesifikasjonene på',
        fi: 'Tuotetiedot ovat suuntaa-antavia. Tarkista aina viralliset tekniset tiedot osoitteesta',
        de: 'Produktdaten sind Richtwerte. Prüfe immer die offiziellen Spezifikationen auf',
        en: 'Product data is for guidance only. Always check the official specifications at'
    },

    // ─── Filter Groups ──────────────────────────
    filterTitle_type_lysstyring: {
        da: 'Type lysstyring', sv: 'Typ av ljusstyrning', no: 'Type lysstyring',
        fi: 'Valaistuksen ohjaustyyppi', de: 'Art der Lichtsteuerung', en: 'Lighting control type'
    },
    filterDesc_type_lysstyring: {
        da: 'Hvilken type lysstyring har du brug for?',
        sv: 'Vilken typ av ljusstyrning behöver du?',
        no: 'Hvilken type lysstyring trenger du?',
        fi: 'Millaista valaistuksen ohjausta tarvitset?',
        de: 'Welche Art von Lichtsteuerung brauchst du?',
        en: 'What type of lighting control do you need?'
    },
    filterTitle_installationsmetode: {
        da: 'Installationsmetode', sv: 'Installationsmetod', no: 'Installasjonsmetode',
        fi: 'Asennustapa', de: 'Installationsmethode', en: 'Installation method'
    },
    filterDesc_installationsmetode: {
        da: 'Hvor skal enheden monteres?',
        sv: 'Var ska enheten monteras?',
        no: 'Hvor skal enheten monteres?',
        fi: 'Mihin laite asennetaan?',
        de: 'Wo soll das Gerät montiert werden?',
        en: 'Where will the device be installed?'
    },
    filterTitle_forsyningsspaending: {
        da: 'Forsyningsspænding', sv: 'Matningsspänning', no: 'Forsyningsspenning',
        fi: 'Syöttöjännite', de: 'Versorgungsspannung', en: 'Supply voltage'
    },
    filterDesc_forsyningsspaending: {
        da: 'Hvilken spænding er tilgængelig?',
        sv: 'Vilken spänning finns tillgänglig?',
        no: 'Hvilken spenning er tilgjengelig?',
        fi: 'Mikä jännite on käytettävissä?',
        de: 'Welche Spannung ist verfügbar?',
        en: 'What voltage is available?'
    },
    filterTitle_protokol: {
        da: 'Protokol', sv: 'Protokoll', no: 'Protokoll',
        fi: 'Protokolla', de: 'Protokoll', en: 'Protocol'
    },
    filterDesc_protokol: {
        da: 'Hvilke protokoller er vigtige?',
        sv: 'Vilka protokoll är viktiga?',
        no: 'Hvilke protokoller er viktige?',
        fi: 'Mitkä protokollat ovat tärkeitä?',
        de: 'Welche Protokolle sind wichtig?',
        en: 'Which protocols are important?'
    },
    filterTitle_effektmaaling: {
        da: 'Effektmåling', sv: 'Effektmätning', no: 'Effektmåling',
        fi: 'Tehon mittaus', de: 'Leistungsmessung', en: 'Power monitoring'
    },
    filterDesc_effektmaaling: {
        da: 'Skal enheden kunne måle forbrug?',
        sv: 'Ska enheten kunna mäta förbrukning?',
        no: 'Skal enheten kunne måle forbruk?',
        fi: 'Pitääkö laitteen mitata kulutusta?',
        de: 'Soll das Gerät den Verbrauch messen können?',
        en: 'Should the device measure power consumption?'
    },
    filterTitle_antal_kanaler: {
        da: 'Antal kanaler', sv: 'Antal kanaler', no: 'Antall kanaler',
        fi: 'Kanavien määrä', de: 'Anzahl Kanäle', en: 'Number of channels'
    },
    filterDesc_antal_kanaler: {
        da: 'Hvor mange kanaler har du brug for?',
        sv: 'Hur många kanaler behöver du?',
        no: 'Hvor mange kanaler trenger du?',
        fi: 'Kuinka monta kanavaa tarvitset?',
        de: 'Wie viele Kanäle brauchst du?',
        en: 'How many channels do you need?'
    },

    // ─── Spec labels ────────────────────────────
    specChannels: {
        da: 'Kanaler', sv: 'Kanaler', no: 'Kanaler',
        fi: 'Kanavat', de: 'Kanäle', en: 'Channels'
    },
    specPowerMon: {
        da: 'Effektmåling', sv: 'Effektmätning', no: 'Effektmåling',
        fi: 'Tehon mittaus', de: 'Leistungsmessung', en: 'Power monitoring'
    },
    specVoltage: {
        da: 'Forsyningsspænding', sv: 'Matningsspänning', no: 'Forsyningsspenning',
        fi: 'Syöttöjännite', de: 'Versorgungsspannung', en: 'Supply voltage'
    },
    specInstall: {
        da: 'Installation', sv: 'Installation', no: 'Installasjon',
        fi: 'Asennus', de: 'Installation', en: 'Installation'
    },
    specProtocols: {
        da: 'Protokoller', sv: 'Protokoll', no: 'Protokoller',
        fi: 'Protokollat', de: 'Protokolle', en: 'Protocols'
    },
    yes: {
        da: 'Ja', sv: 'Ja', no: 'Ja',
        fi: 'Kyllä', de: 'Ja', en: 'Yes'
    },
    no_word: {
        da: 'Nej', sv: 'Nej', no: 'Nei',
        fi: 'Ei', de: 'Nein', en: 'No'
    },
    devicesFound: {
        da: '{n} enheder fundet',
        sv: '{n} enheter hittade',
        no: '{n} enheter funnet',
        fi: '{n} laitetta löydetty',
        de: '{n} Geräte gefunden',
        en: '{n} devices found'
    },
    deviceFound: {
        da: '1 enhed fundet',
        sv: '1 enhet hittad',
        no: '1 enhet funnet',
        fi: '1 laite löydetty',
        de: '1 Gerät gefunden',
        en: '1 device found'
    },

    // ─── Use Case icons & translations ──────────
    uc_Adgangskontrol: {
        da: 'Adgangskontrol', sv: 'Åtkomstkontroll', no: 'Adgangskontroll',
        fi: 'Kulunvalvonta', de: 'Zugangskontrolle', en: 'Access control'
    },
    'uc_Energimåling 1 fase': {
        da: 'Energimåling 1 fase', sv: 'Energimätning 1 fas', no: 'Energimåling 1 fase',
        fi: 'Energiamittaus 1-vaihe', de: 'Energiemessung 1 Phase', en: 'Energy metering 1 phase'
    },
    'uc_Energimåling 3 faser': {
        da: 'Energimåling 3 faser', sv: 'Energimätning 3 faser', no: 'Energimåling 3 faser',
        fi: 'Energiamittaus 3-vaihe', de: 'Energiemessung 3 Phasen', en: 'Energy metering 3 phase'
    },
    uc_Garageport: {
        da: 'Garageport', sv: 'Garageport', no: 'Garasjeport',
        fi: 'Autotallin ovi', de: 'Garagentor', en: 'Garage door'
    },
    'uc_Hastighedsstyring af ventilatorer': {
        da: 'Hastighedsstyring af ventilatorer', sv: 'Hastighetsstyrning av fläktar', no: 'Hastighetsstyring av vifter',
        fi: 'Puhaltimen nopeudensäätö', de: 'Drehzahlregelung von Lüftern', en: 'Fan speed control'
    },
    'uc_Inputlæser for afbrydere, sensorer og lignende': {
        da: 'Inputlæser (afbrydere/sensorer)', sv: 'Ingångsläsare (brytare/sensorer)', no: 'Inngangsleser (brytere/sensorer)',
        fi: 'Tulojen luku (kytkimet/anturit)', de: 'Eingangsleser (Schalter/Sensoren)', en: 'Input reader (switches/sensors)'
    },
    uc_Kontrolpanel: {
        da: 'Kontrolpanel', sv: 'Kontrollpanel', no: 'Kontrollpanel',
        fi: 'Ohjauspaneeli', de: 'Bedienfeld', en: 'Control panel'
    },
    uc_Lysstyring: {
        da: 'Lysstyring', sv: 'Ljusstyrning', no: 'Lysstyring',
        fi: 'Valaistuksen ohjaus', de: 'Lichtsteuerung', en: 'Lighting control'
    },
    uc_Motorstyring: {
        da: 'Motorstyring', sv: 'Motorstyrning', no: 'Motorstyring',
        fi: 'Moottorin ohjaus', de: 'Motorsteuerung', en: 'Motor control'
    },
    uc_Pumper: {
        da: 'Pumper', sv: 'Pumpar', no: 'Pumper',
        fi: 'Pumput', de: 'Pumpen', en: 'Pumps'
    },
    uc_Solafskærmning: {
        da: 'Solafskærmning', sv: 'Solskydd', no: 'Solavskjerming',
        fi: 'Aurinkosuojaus', de: 'Sonnenschutz', en: 'Solar shading'
    },
    uc_Stikkontakter: {
        da: 'Stikkontakter', sv: 'Uttag', no: 'Stikkontakter',
        fi: 'Pistorasiat', de: 'Steckdosen', en: 'Power outlets'
    },
    uc_Varmepumpe: {
        da: 'Varmepumpe', sv: 'Värmepump', no: 'Varmepumpe',
        fi: 'Lämpöpumppu', de: 'Wärmepumpe', en: 'Heat pump'
    },
    uc_Varmestyring: {
        da: 'Varmestyring', sv: 'Värmestyrning', no: 'Varmestyring',
        fi: 'Lämmön ohjaus', de: 'Heizungssteuerung', en: 'Heating control'
    },
    uc_Ventilatorer: {
        da: 'Ventilatorer', sv: 'Fläktar', no: 'Vifter',
        fi: 'Puhaltimet', de: 'Lüfter', en: 'Fans'
    }
};

// ─── Use Case metadata (icons + descriptions) ──────────────
const USE_CASE_META = {
    'Adgangskontrol': { icon: '🔐', desc: {
        da: 'Dørtelefoner, låse og adgangskontrol', sv: 'Porttelefoner, lås och åtkomstkontroll', no: 'Dørtelefoner, låser og adgangskontroll',
        fi: 'Ovipuhelimet, lukot ja kulunvalvonta', de: 'Türsprechanlage, Schlösser und Zugangskontrolle', en: 'Intercoms, locks and access control'
    }},
    'Energimåling 1 fase': { icon: '⚡', desc: {
        da: 'Overvåg strømforbrug på enkelte kredse', sv: 'Övervaka strömförbrukning på enskilda kretsar', no: 'Overvåk strømforbruk på enkelte kretser',
        fi: 'Seuraa yksittäisten piirien sähkönkulutusta', de: 'Stromverbrauch einzelner Stromkreise überwachen', en: 'Monitor power consumption on individual circuits'
    }},
    'Energimåling 3 faser': { icon: '🔋', desc: {
        da: 'Overvåg hele installationens strømforbrug', sv: 'Övervaka hela installationens strömförbrukning', no: 'Overvåk hele installasjonens strømforbruk',
        fi: 'Seuraa koko asennuksen sähkönkulutusta', de: 'Gesamtverbrauch der Installation überwachen', en: 'Monitor total power consumption of the installation'
    }},
    'Garageport': { icon: '🚗', desc: {
        da: 'Åbn og luk garageporte og porte', sv: 'Öppna och stäng garageportar och grindar', no: 'Åpne og lukke garasjeporter og porter',
        fi: 'Avaa ja sulje autotallin ovet ja portit', de: 'Garagentore und Tore öffnen und schließen', en: 'Open and close garage doors and gates'
    }},
    'Hastighedsstyring af ventilatorer': { icon: '🌀', desc: {
        da: 'Reguler hastigheden på ventilatorer', sv: 'Reglera hastigheten på fläktar', no: 'Reguler hastigheten på vifter',
        fi: 'Säädä puhaltimien nopeutta', de: 'Lüftergeschwindigkeit regeln', en: 'Control fan speed'
    }},
    'Inputlæser for afbrydere, sensorer og lignende': { icon: '🔘', desc: {
        da: 'Læs input fra kontakter, knapper og sensorer', sv: 'Läs input från kontakter, knappar och sensorer', no: 'Les input fra kontakter, knapper og sensorer',
        fi: 'Lue kytkimien, painikkeiden ja antureiden tuloja', de: 'Eingaben von Schaltern, Tasten und Sensoren lesen', en: 'Read inputs from switches, buttons and sensors'
    }},
    'Kontrolpanel': { icon: '🖥️', desc: {
        da: 'Touchskærm til central styring af enheder', sv: 'Pekskärm för central styrning av enheter', no: 'Berøringsskjerm for sentral styring av enheter',
        fi: 'Kosketusnäyttö laitteiden keskitettyyn ohjaukseen', de: 'Touchscreen zur zentralen Steuerung von Geräten', en: 'Touchscreen for central device control'
    }},
    'Lysstyring': { icon: '💡', desc: {
        da: 'Tænd, sluk, dæmp og automatiser belysning', sv: 'Tänd, släck, dimma och automatisera belysning', no: 'Slå på, av, dimme og automatiser belysning',
        fi: 'Kytke, himmennä ja automatisoi valaistus', de: 'Beleuchtung ein-/ausschalten, dimmen und automatisieren', en: 'Switch, dim and automate lighting'
    }},
    'Motorstyring': { icon: '⚙️', desc: {
        da: 'Styr motorer, ventiler og aktuatorer', sv: 'Styr motorer, ventiler och aktuatorer', no: 'Styr motorer, ventiler og aktuatorer',
        fi: 'Ohjaa moottoreita, venttiilejä ja toimilaitteita', de: 'Motoren, Ventile und Aktoren steuern', en: 'Control motors, valves and actuators'
    }},
    'Pumper': { icon: '🔄', desc: {
        da: 'Styr cirkulationspumper og vandpumper', sv: 'Styr cirkulationspumpar och vattenpumpar', no: 'Styr sirkulasjonspumper og vannpumper',
        fi: 'Ohjaa kiertovesipumppuja ja vesipumppuja', de: 'Umwälz- und Wasserpumpen steuern', en: 'Control circulation and water pumps'
    }},
    'Solafskærmning': { icon: '🪟', desc: {
        da: 'Automatiser persienner, markiser og rullegardiner', sv: 'Automatisera persienner, markiser och rullgardiner', no: 'Automatiser persienner, markiser og rullegardiner',
        fi: 'Automatisoi kaihtimet, markiisit ja rullaverhot', de: 'Jalousien, Markisen und Rollläden automatisieren', en: 'Automate blinds, awnings and roller shutters'
    }},
    'Stikkontakter': { icon: '🔌', desc: {
        da: 'Gør stikkontakter og apparater smarte', sv: 'Gör uttag och apparater smarta', no: 'Gjør stikkontakter og apparater smarte',
        fi: 'Tee pistorasioista ja laitteista älykkäitä', de: 'Steckdosen und Geräte smart machen', en: 'Make power outlets and appliances smart'
    }},
    'Varmepumpe': { icon: '♨️', desc: {
        da: 'Styr og overvåg varmepumper', sv: 'Styr och övervaka värmepumpar', no: 'Styr og overvåk varmepumper',
        fi: 'Ohjaa ja seuraa lämpöpumppuja', de: 'Wärmepumpen steuern und überwachen', en: 'Control and monitor heat pumps'
    }},
    'Varmestyring': { icon: '🌡️', desc: {
        da: 'Styr radiatorer, gulvvarme og klimaanlæg', sv: 'Styr radiatorer, golvvärme och klimatanläggningar', no: 'Styr radiatorer, gulvvarme og klimaanlegg',
        fi: 'Ohjaa pattereita, lattialämmitystä ja ilmastointia', de: 'Heizkörper, Fußbodenheizung und Klimaanlage steuern', en: 'Control radiators, underfloor heating and HVAC'
    }},
    'Ventilatorer': { icon: '🌬️', desc: {
        da: 'Styr udsugning og ventilationsanlæg', sv: 'Styr utsug och ventilationsanläggningar', no: 'Styr avtrekk og ventilasjonsanlegg',
        fi: 'Ohjaa poistoilmaa ja ilmanvaihtolaitteita', de: 'Abluft und Lüftungsanlagen steuern', en: 'Control exhaust and ventilation systems'
    }}
};

// ─── Translation Helper ─────────────────────────────────────
let currentLang = 'da';

function t(key) {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[currentLang] || entry['en'] || key;
}

function tUseCase(originalName) {
    const key = 'uc_' + originalName;
    const entry = TRANSLATIONS[key];
    if (!entry) return originalName;
    return entry[currentLang] || entry['en'] || originalName;
}

function tUseCaseDesc(originalName) {
    const meta = USE_CASE_META[originalName];
    if (!meta || !meta.desc) return '';
    return meta.desc[currentLang] || meta.desc['en'] || '';
}

function getUseCaseIcon(originalName) {
    return USE_CASE_META[originalName]?.icon || '📦';
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const translated = t(key);
        if (translated !== key) {
            el.textContent = translated;
        }
    });
    document.title = t('heroTitle');
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update language button
    const langInfo = LANGUAGES[lang];
    document.getElementById('langFlag').textContent = langInfo.flag;
    document.getElementById('langCode').textContent = langInfo.code;

    // Update active state
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    applyTranslations();
}
