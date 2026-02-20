/* ============================================
   Shelly Device Selector — Application Logic
   ============================================ */

// ─── Data: Use Cases ────────────────────────────────────────
const useCases = [
    {
        id: 'lighting',
        icon: '💡',
        title: 'Lysstyring',
        desc: 'Tænd, sluk og automatiser belysning i dit hjem eller kontor.',
        tags: ['relay', 'dimmer']
    },
    {
        id: 'garage',
        icon: '🚗',
        title: 'Garageportstyring',
        desc: 'Åbn og luk din garageport eller port fra din telefon.',
        tags: ['dry-contact', 'relay']
    },
    {
        id: 'blinds',
        icon: '🪟',
        title: 'Persienner & Gardiner',
        desc: 'Automatiser rullegardiner, persienner og markiser.',
        tags: ['roller-shutter']
    },
    {
        id: 'energy',
        icon: '⚡',
        title: 'Energimåling',
        desc: 'Overvåg strømforbrug på individuelle kredse eller hele installationen.',
        tags: ['energy-meter', 'power-monitoring']
    },
    {
        id: 'dimming',
        icon: '🔆',
        title: 'Dæmpning',
        desc: 'Dæmp belysning jævnt med kompatible lyskilder og drivere.',
        tags: ['dimmer']
    },
    {
        id: 'appliance',
        icon: '🔌',
        title: 'Apparatstyring',
        desc: 'Gør enhver stikkontakt eller apparat smart med fjernbetjening.',
        tags: ['relay', 'plug']
    },
    {
        id: 'heating',
        icon: '🌡️',
        title: 'Varme & Klima',
        desc: 'Styr radiatorer, gulvvarme eller klimaanlæg intelligent.',
        tags: ['relay', 'sensor']
    },
    {
        id: 'scenes',
        icon: '🎬',
        title: 'Scenestyring',
        desc: 'Konfigurer knapper til at aktivere scener og automatiseringer.',
        tags: ['scene-controller']
    },
    {
        id: 'sensors',
        icon: '📡',
        title: 'Sensorovervågning',
        desc: 'Overvåg temperatur, fugtighed, oversvømmelse og bevægelse.',
        tags: ['sensor']
    },
    {
        id: 'intercom',
        icon: '🔔',
        title: 'Dørtelefon & Adgang',
        desc: 'Automatiser dørtelefoner, låse og adgangskontrol.',
        tags: ['dry-contact', 'low-voltage']
    },
    {
        id: 'motor',
        icon: '⚙️',
        title: 'Motorstyring',
        desc: 'Styr pumper, ventiler og andre motordrevne enheder.',
        tags: ['relay', 'heavy-duty']
    },
    {
        id: 'display',
        icon: '🖥️',
        title: 'Centralt kontrolpanel',
        desc: 'Touchskærm til styring af alle enheder fra ét sted.',
        tags: ['display']
    }
];

// ─── Data: Shelly Devices ───────────────────────────────────
const devices = [
    // === Gen4 Flush Mount ===
    {
        id: 'shelly-1-gen4',
        name: 'Shelly 1 Gen4',
        series: 'Gen4',
        icon: '🔲',
        desc: 'Kompakt 1-kanals relæ med tørkontakt. Ideel til lysstyring og garageporte. Understøtter WiFi, Bluetooth, Zigbee og Matter.',
        channels: 1,
        voltage: ['110-240V AC', '12V DC', '24V DC'],
        maxCurrent: '16A',
        installation: 'flush',
        powerMonitoring: false,
        dryContact: true,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth', 'Zigbee', 'Matter'],
        useCases: ['lighting', 'garage', 'appliance', 'heating', 'intercom', 'motor'],
        tags: ['Tørkontakt', 'Matter-klar']
    },
    {
        id: 'shelly-1pm-gen4',
        name: 'Shelly 1PM Gen4',
        series: 'Gen4',
        icon: '📊',
        desc: 'Verdens mindste relæ med effektmåling. 35% mindre end forgængeren. Perfekt til at gøre eksisterende installationer smarte.',
        channels: 1,
        voltage: ['110-240V AC', '24V DC'],
        maxCurrent: '16A',
        installation: 'flush',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth', 'Zigbee', 'Matter'],
        useCases: ['lighting', 'appliance', 'heating', 'energy'],
        tags: ['Effektmåling', 'Ultra-kompakt']
    },
    {
        id: 'shelly-1pm-mini-gen4',
        name: 'Shelly 1PM Mini Gen4',
        series: 'Gen4',
        icon: '🔹',
        desc: 'Verdens mindste relæ. Passer bag kontakter og stikkontakter. Med effektmåling til overvågning af forbrug.',
        channels: 1,
        voltage: ['110-240V AC'],
        maxCurrent: '8A',
        installation: 'flush',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth', 'Zigbee', 'Matter'],
        useCases: ['lighting', 'appliance'],
        tags: ['Effektmåling', 'Ultrakompakt']
    },
    {
        id: 'shelly-2pm-gen4',
        name: 'Shelly 2PM Gen4',
        series: 'Gen4',
        icon: '🪟',
        desc: '2-kanals relæ med effektmåling. Perfekt til persienner, rullegardiner og bi-direktionelle motorer.',
        channels: 2,
        voltage: ['110-240V AC', '24V DC'],
        maxCurrent: '10A/kanal',
        installation: 'flush',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: true,
        protocols: ['WiFi', 'Bluetooth', 'Zigbee', 'Matter'],
        useCases: ['blinds', 'lighting', 'appliance', 'motor'],
        tags: ['Rullegardin', 'Effektmåling']
    },
    {
        id: 'shelly-mini-1-gen4',
        name: 'Shelly Mini 1 Gen4',
        series: 'Gen4',
        icon: '✨',
        desc: 'Ultrakompakt relæ der passer i lampeudtag og trange installationsdåser. Enkel styring af lys og apparater.',
        channels: 1,
        voltage: ['110-240V AC'],
        maxCurrent: '8A',
        installation: 'flush',
        powerMonitoring: false,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth', 'Zigbee', 'Matter'],
        useCases: ['lighting', 'appliance'],
        tags: ['Ultrakompakt', 'Lampeudtag']
    },

    // === Gen4 Sensors ===
    {
        id: 'shelly-flood-gen4',
        name: 'Shelly Flood Sensor Gen4',
        series: 'Gen4 Sensor',
        icon: '🌊',
        desc: 'Vandlækagesensor med kabel. Giver besked i realtid ved lækager. Ideel til kældre, køkkener og bryggerser.',
        channels: 0,
        voltage: ['Batteri'],
        maxCurrent: 'N/A',
        installation: 'standalone',
        powerMonitoring: false,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth'],
        useCases: ['sensors'],
        tags: ['Batteridrevet', 'Alarm']
    },
    {
        id: 'shelly-motion-gen4',
        name: 'Shelly Motion Sensor Gen4',
        series: 'Gen4 Sensor',
        icon: '👁️',
        desc: 'Bevægelsessensor med tilstedeværelsesregistrering. Ved hvem der er i rummet og hvor de er.',
        channels: 0,
        voltage: ['Batteri'],
        maxCurrent: 'N/A',
        installation: 'standalone',
        powerMonitoring: false,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth'],
        useCases: ['sensors', 'lighting', 'heating'],
        tags: ['Tilstedeværelse', 'Batteridrevet']
    },

    // === Gen4 Other ===
    {
        id: 'shelly-em-mini-gen4',
        name: 'Shelly EM Mini Gen4',
        series: 'Gen4',
        icon: '📈',
        desc: 'Kompakt energimåler til overvågning af individuelle apparaters strømforbrug.',
        channels: 1,
        voltage: ['110-240V AC'],
        maxCurrent: 'N/A',
        installation: 'flush',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth', 'Zigbee', 'Matter'],
        useCases: ['energy'],
        tags: ['Energimåling', 'Kompakt']
    },
    {
        id: 'shelly-plug-gen4',
        name: 'Shelly Plug Gen4',
        series: 'Gen4',
        icon: '🔌',
        desc: 'Smart stik med effektmåling op til 1800W/15A. Lux-sensor og tilpasselig LED-ring. Plug-and-play.',
        channels: 1,
        voltage: ['110-240V AC'],
        maxCurrent: '15A',
        installation: 'plug',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth', 'Zigbee', 'Matter'],
        useCases: ['appliance', 'energy', 'lighting'],
        tags: ['Plug & Play', 'Effektmåling']
    },

    // === Dimmer Gen3 ===
    {
        id: 'shelly-dimmer-gen3',
        name: 'Shelly Dimmer Gen3',
        series: 'Gen3',
        icon: '🔆',
        desc: 'Smart lysdæmper til dæmpbare LED, halogener og transformatorer. Virker med og uden nulskinner. 110-240V.',
        channels: 1,
        voltage: ['110-240V AC'],
        maxCurrent: '2A (dimmer)',
        installation: 'flush',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth'],
        useCases: ['dimming', 'lighting'],
        tags: ['Lysdæmpning', 'Uden nul']
    },
    {
        id: 'shelly-dimmer-010v-gen3',
        name: 'Shelly Dimmer 0/1-10V PM Gen3',
        series: 'Gen3',
        icon: '🎚️',
        desc: 'Smart 0-10V/1-10V dæmper til LED-drivere, motorer og ventiler. Effektmåling inkluderet.',
        channels: 1,
        voltage: ['110-240V AC'],
        maxCurrent: '2A',
        installation: 'flush',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth'],
        useCases: ['dimming', 'lighting', 'motor'],
        tags: ['0-10V', 'Effektmåling']
    },

    // === Plus Series (Flush Mount) ===
    {
        id: 'shelly-plus-1',
        name: 'Shelly Plus 1',
        series: 'Plus',
        icon: '🔲',
        desc: '1-kanals relæ med tørkontakt (potentialfri). Kan forsynes med AC eller DC. Ideel til garageporte og dørtelefoner.',
        channels: 1,
        voltage: ['110-240V AC', '12V DC', '24-240V DC'],
        maxCurrent: '16A',
        installation: 'flush',
        powerMonitoring: false,
        dryContact: true,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth'],
        useCases: ['lighting', 'garage', 'appliance', 'intercom', 'heating'],
        tags: ['Tørkontakt', 'DC-forsyning']
    },
    {
        id: 'shelly-plus-1pm',
        name: 'Shelly Plus 1PM',
        series: 'Plus',
        icon: '📊',
        desc: '1-kanals relæ med effektmåling. 16A kapacitet. Understøtter både AC og DC forsyning.',
        channels: 1,
        voltage: ['110-240V AC', '24-30V DC'],
        maxCurrent: '16A',
        installation: 'flush',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth'],
        useCases: ['lighting', 'appliance', 'heating', 'energy'],
        tags: ['Effektmåling', '16A']
    },
    {
        id: 'shelly-plus-2pm',
        name: 'Shelly Plus 2PM',
        series: 'Plus',
        icon: '🔀',
        desc: '2-kanals relæ med effektmåling pr. kanal. Understøtter rullegardin-tilstand til persienner og motorer.',
        channels: 2,
        voltage: ['110-240V AC', '24V DC'],
        maxCurrent: '10A/kanal',
        installation: 'flush',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: true,
        protocols: ['WiFi', 'Bluetooth'],
        useCases: ['blinds', 'lighting', 'motor'],
        tags: ['Rullegardin', '2 kanaler']
    },
    {
        id: 'shelly-plus-i4',
        name: 'Shelly Plus i4',
        series: 'Plus',
        icon: '🎛️',
        desc: '4-kanals scenecontroller uden relæ. 12 tilpasselige handlinger. Gør enhver eksisterende kontakt smart.',
        channels: 4,
        voltage: ['110-240V AC'],
        maxCurrent: 'N/A',
        installation: 'flush',
        powerMonitoring: false,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth'],
        useCases: ['scenes'],
        tags: ['Scener', '4 inputs']
    },
    {
        id: 'shelly-plus-i4-dc',
        name: 'Shelly Plus i4 DC',
        series: 'Plus',
        icon: '🎛️',
        desc: '4-kanals scenecontroller til DC-installationer (5-24V). Perfekt til lavsignal-knapper og sensorer.',
        channels: 4,
        voltage: ['5-24V DC'],
        maxCurrent: 'N/A',
        installation: 'flush',
        powerMonitoring: false,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth'],
        useCases: ['scenes', 'sensors'],
        tags: ['DC', 'Scener']
    },
    {
        id: 'shelly-plus-uni',
        name: 'Shelly Plus Uni',
        series: 'Plus',
        icon: '🔧',
        desc: 'Universelt lavspændingsmodul med 2 solid-state relæer, analog input, 1-Wire og pulscount. Til dørtelefoner, alarmer m.m.',
        channels: 2,
        voltage: ['8-24V AC', '5-28V DC'],
        maxCurrent: '0.3A',
        installation: 'flush',
        powerMonitoring: false,
        dryContact: true,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth'],
        useCases: ['intercom', 'sensors', 'garage'],
        tags: ['Lavspænding', 'Tørkontakt', 'Sensorinput']
    },

    // === Pro Series (DIN Rail) ===
    {
        id: 'shelly-pro-1',
        name: 'Shelly Pro 1',
        series: 'Pro',
        icon: '🏗️',
        desc: 'Professionelt 1-kanals DIN-skinne relæ med tørkontakt. WiFi, LAN og Bluetooth.',
        channels: 1,
        voltage: ['110-240V AC'],
        maxCurrent: '16A',
        installation: 'din',
        powerMonitoring: false,
        dryContact: true,
        rollerShutter: false,
        protocols: ['WiFi', 'LAN', 'Bluetooth'],
        useCases: ['lighting', 'garage', 'appliance', 'motor', 'heating'],
        tags: ['DIN-skinne', 'LAN']
    },
    {
        id: 'shelly-pro-1pm',
        name: 'Shelly Pro 1PM',
        series: 'Pro',
        icon: '📊',
        desc: 'Professionelt 1-kanals DIN-skinne relæ med effektmåling. Op til 16A. WiFi, LAN og Bluetooth.',
        channels: 1,
        voltage: ['110-240V AC'],
        maxCurrent: '16A',
        installation: 'din',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'LAN', 'Bluetooth'],
        useCases: ['lighting', 'appliance', 'heating', 'energy'],
        tags: ['DIN-skinne', 'LAN', 'Effektmåling']
    },
    {
        id: 'shelly-pro-2pm',
        name: 'Shelly Pro 2PM',
        series: 'Pro',
        icon: '🔀',
        desc: 'Professionelt 2-kanals DIN-skinne relæ. 16A pr. kanal, 25A total. Understøtter rullegardin-tilstand.',
        channels: 2,
        voltage: ['110-240V AC'],
        maxCurrent: '16A/kanal (25A total)',
        installation: 'din',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: true,
        protocols: ['WiFi', 'LAN', 'Bluetooth'],
        useCases: ['blinds', 'lighting', 'motor'],
        tags: ['DIN-skinne', 'Rullegardin', 'LAN']
    },
    {
        id: 'shelly-pro-4pm',
        name: 'Shelly Pro 4PM',
        series: 'Pro',
        icon: '🏢',
        desc: '4-kanals DIN-skinne relæ med farveskærm. 16A pr. kanal, 40A total. Perfekt til eltavle-installationer.',
        channels: 4,
        voltage: ['110-240V AC'],
        maxCurrent: '16A/kanal (40A total)',
        installation: 'din',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'LAN', 'Bluetooth'],
        useCases: ['lighting', 'appliance', 'heating', 'energy'],
        tags: ['DIN-skinne', '4 kanaler', 'Farveskærm']
    },

    // === Pro Dimmer (DIN Rail) ===
    {
        id: 'shelly-pro-dimmer-1pm',
        name: 'Shelly Pro Dimmer 1PM',
        series: 'Pro',
        icon: '🔆',
        desc: 'Professionel 1-kanals DIN-skinne dæmper med effektmåling. Til dæmpbare LED, halogen og transformatorer.',
        channels: 1,
        voltage: ['110-240V AC'],
        maxCurrent: '10A',
        installation: 'din',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'LAN', 'Bluetooth'],
        useCases: ['dimming', 'lighting'],
        tags: ['DIN-skinne', 'Lysdæmpning']
    },
    {
        id: 'shelly-pro-dimmer-2pm',
        name: 'Shelly Pro Dimmer 2PM',
        series: 'Pro',
        icon: '🔅',
        desc: 'Professionel 2-kanals DIN-skinne dæmper med effektmåling pr. kanal. Styr to dæmpede lyskredse.',
        channels: 2,
        voltage: ['110-240V AC'],
        maxCurrent: '10A',
        installation: 'din',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'LAN', 'Bluetooth'],
        useCases: ['dimming', 'lighting'],
        tags: ['DIN-skinne', 'Lysdæmpning', '2 kanaler']
    },
    {
        id: 'shelly-pro-dimmer-010v',
        name: 'Shelly Pro Dimmer 0/1-10V PM',
        series: 'Pro',
        icon: '🎚️',
        desc: 'Professionel DIN-skinne 0-10V/1-10V dæmper. Til LED-drivere, motorer og ventiler med analog styring.',
        channels: 1,
        voltage: ['110-240V AC'],
        maxCurrent: 'N/A',
        installation: 'din',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'LAN', 'Bluetooth'],
        useCases: ['dimming', 'motor'],
        tags: ['DIN-skinne', '0-10V', 'LAN']
    },

    // === Pro Energy Meter ===
    {
        id: 'shelly-pro-3em',
        name: 'Shelly Pro 3EM',
        series: 'Pro',
        icon: '⚡',
        desc: '3-faset DIN-skinne energimåler med CT-spoler. 60 dages lokal datahistorik. MODBUS-understøttelse.',
        channels: 3,
        voltage: ['110-240V AC'],
        maxCurrent: '120A CT',
        installation: 'din',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'LAN', 'Bluetooth'],
        useCases: ['energy'],
        tags: ['DIN-skinne', '3-faset', 'MODBUS']
    },
    {
        id: 'shelly-pro-3em-400',
        name: 'Shelly Pro 3EM-400',
        series: 'Pro',
        icon: '⚡',
        desc: '3-faset DIN-skinne energimåler med 400A CT-spoler. Til større installationer og industriel brug.',
        channels: 3,
        voltage: ['110-240V AC'],
        maxCurrent: '400A CT',
        installation: 'din',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'LAN', 'Bluetooth'],
        useCases: ['energy'],
        tags: ['DIN-skinne', '3-faset', '400A']
    },

    // === Displays ===
    {
        id: 'shelly-wall-display',
        name: 'Shelly Wall Display X2',
        series: 'Display',
        icon: '🖥️',
        desc: '6,95" touchskærm kontrolpanel. Integreret relæ, effektmåling og sensorer. Passer i standard installationsdåser.',
        channels: 2,
        voltage: ['110-240V AC'],
        maxCurrent: '10A',
        installation: 'flush',
        powerMonitoring: true,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth'],
        useCases: ['display', 'scenes', 'lighting'],
        tags: ['Touchskærm', 'Sensorer']
    },
    {
        id: 'shelly-wall-display-xl',
        name: 'Shelly Wall Display XL',
        series: 'Display',
        icon: '📺',
        desc: '10" touchskærm kontrolpanel. Styr alle enheder, aktiver scener og se energi- og vejrdata.',
        channels: 0,
        voltage: ['110-240V AC'],
        maxCurrent: 'N/A',
        installation: 'flush',
        powerMonitoring: false,
        dryContact: false,
        rollerShutter: false,
        protocols: ['WiFi', 'Bluetooth'],
        useCases: ['display', 'scenes'],
        tags: ['10" skærm', 'Sonos-integration']
    }
];

// ─── Filter Definitions ─────────────────────────────────────
const filterGroups = [
    {
        id: 'voltage',
        icon: '⚡',
        title: 'Spændingsniveau',
        desc: 'Hvilken forsyningsspænding har du?',
        options: [
            { id: 'any-v', label: 'Alle', value: 'any' },
            { id: '230v', label: '110-240V AC', value: '110-240V AC' },
            { id: '24vdc', label: '24V DC', value: '24V DC' },
            { id: '12vdc', label: '12V DC', value: '12V DC' },
            { id: '5vdc', label: '5V DC', value: '5-24V DC' },
            { id: 'battery', label: 'Batteri', value: 'Batteri' }
        ]
    },
    {
        id: 'installation',
        icon: '🔧',
        title: 'Installationsmetode',
        desc: 'Hvor skal enheden monteres?',
        options: [
            { id: 'any-inst', label: 'Alle', value: 'any' },
            { id: 'flush', label: 'Indbygning (bag kontakt)', value: 'flush' },
            { id: 'din', label: 'Tavlemontering (DIN-skinne)', value: 'din' },
            { id: 'plug', label: 'Stikkontakt (Plug & Play)', value: 'plug' },
            { id: 'standalone', label: 'Fritplaceret', value: 'standalone' }
        ]
    },
    {
        id: 'powerMonitoring',
        icon: '📊',
        title: 'Effektmåling',
        desc: 'Skal enheden kunne måle strømforbrug?',
        options: [
            { id: 'any-pm', label: 'Ligegyldigt', value: 'any' },
            { id: 'pm-yes', label: 'Ja, krævet', value: true },
            { id: 'pm-no', label: 'Nej, ikke nødvendigt', value: false }
        ]
    },
    {
        id: 'channels',
        icon: '🔢',
        title: 'Antal kanaler',
        desc: 'Hvor mange enheder skal styres?',
        options: [
            { id: 'any-ch', label: 'Alle', value: 'any' },
            { id: 'ch-1', label: '1 kanal', value: 1 },
            { id: 'ch-2', label: '2 kanaler', value: 2 },
            { id: 'ch-3', label: '3+ kanaler', value: 3 }
        ]
    },
    {
        id: 'dryContact',
        icon: '🔗',
        title: 'Tørkontakt',
        desc: 'Har du brug for potentialfrit relæ?',
        options: [
            { id: 'any-dc', label: 'Ligegyldigt', value: 'any' },
            { id: 'dc-yes', label: 'Ja, krævet', value: true },
            { id: 'dc-no', label: 'Nej', value: false }
        ]
    },
    {
        id: 'protocol',
        icon: '📡',
        title: 'Protokol',
        desc: 'Hvilke protokoller er vigtige for dig?',
        options: [
            { id: 'any-proto', label: 'Alle', value: 'any' },
            { id: 'proto-matter', label: 'Matter', value: 'Matter' },
            { id: 'proto-zigbee', label: 'Zigbee', value: 'Zigbee' },
            { id: 'proto-lan', label: 'LAN (Ethernet)', value: 'LAN' },
            { id: 'proto-wifi', label: 'WiFi', value: 'WiFi' }
        ]
    }
];

// ─── State ──────────────────────────────────────────────────
let state = {
    currentStep: 1,
    selectedUseCase: null,
    filters: {
        voltage: 'any',
        installation: 'any',
        powerMonitoring: 'any',
        channels: 'any',
        dryContact: 'any',
        protocol: 'any'
    }
};

// ─── DOM References ─────────────────────────────────────────
const stepsIndicator = document.getElementById('stepsIndicator');
const step1El = document.getElementById('step1');
const step2El = document.getElementById('step2');
const step3El = document.getElementById('step3');
const usecaseGrid = document.getElementById('usecaseGrid');
const filtersContainer = document.getElementById('filtersContainer');
const resultsGrid = document.getElementById('resultsGrid');
const resultsSummary = document.getElementById('resultsSummary');
const noResults = document.getElementById('noResults');

// ─── Initialization ─────────────────────────────────────────
function init() {
    renderUseCases();
    renderFilters();
    bindEvents();
}

// ─── Render: Use Cases ──────────────────────────────────────
function renderUseCases() {
    usecaseGrid.innerHTML = useCases.map(uc => `
        <div class="usecase-card" data-id="${uc.id}">
            <div class="usecase-icon">${uc.icon}</div>
            <h3>${uc.title}</h3>
            <p>${uc.desc}</p>
        </div>
    `).join('');
}

// ─── Render: Filters ────────────────────────────────────────
function renderFilters() {
    filtersContainer.innerHTML = filterGroups.map(group => `
        <div class="filter-group" data-filter="${group.id}">
            <div class="filter-group-header">
                <div class="filter-group-icon">${group.icon}</div>
                <div>
                    <h3>${group.title}</h3>
                    <p>${group.desc}</p>
                </div>
            </div>
            <div class="filter-options">
                ${group.options.map(opt => `
                    <button class="filter-chip ${opt.value === 'any' ? 'active any-chip' : ''}"
                            data-filter="${group.id}"
                            data-value="${opt.value}">
                        ${opt.label}
                    </button>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// ─── Render: Results ────────────────────────────────────────
function renderResults() {
    const results = getFilteredDevices();

    // Render summary tags
    const summaryParts = [];
    const uc = useCases.find(u => u.id === state.selectedUseCase);
    if (uc) summaryParts.push(uc.title);

    Object.entries(state.filters).forEach(([key, value]) => {
        if (value !== 'any') {
            const group = filterGroups.find(g => g.id === key);
            const opt = group?.options.find(o => String(o.value) === String(value));
            if (opt && group) summaryParts.push(opt.label);
        }
    });

    resultsSummary.innerHTML = summaryParts.map(tag => `
        <span class="summary-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            ${tag}
        </span>
    `).join('');

    if (results.length === 0) {
        resultsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    resultsGrid.style.display = 'grid';

    resultsGrid.innerHTML = results.map((device, index) => `
        <div class="result-card ${index === 0 ? 'best-match' : ''}">
            <div class="result-card-badge">Bedste match</div>
            <div class="result-card-body">
                <div class="result-card-top">
                    <div>
                        <div class="result-card-series">${device.series}</div>
                        <div class="result-card-name">${device.name}</div>
                    </div>
                    <div class="result-card-icon">${device.icon}</div>
                </div>
                <div class="result-card-desc">${device.desc}</div>
                <div class="result-card-specs">
                    <div class="spec-item">
                        <span class="spec-label">Kanaler</span>
                        <span class="spec-value">${device.channels}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Max strøm</span>
                        <span class="spec-value">${device.maxCurrent}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Spænding</span>
                        <span class="spec-value">${device.voltage.join(', ')}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Installation</span>
                        <span class="spec-value">${getInstallationLabel(device.installation)}</span>
                    </div>
                </div>
                <div class="result-card-tags">
                    ${device.protocols.map(p => `<span class="tag tag-blue">${p}</span>`).join('')}
                    ${device.tags.map(t => `<span class="tag tag-green">${t}</span>`).join('')}
                    ${device.powerMonitoring ? '<span class="tag tag-gray">Effektmåling</span>' : ''}
                    ${device.dryContact ? '<span class="tag tag-gray">Tørkontakt</span>' : ''}
                    ${device.rollerShutter ? '<span class="tag tag-gray">Rullegardin</span>' : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function getInstallationLabel(type) {
    const labels = {
        flush: 'Indbygning',
        din: 'DIN-skinne',
        plug: 'Stikkontakt',
        standalone: 'Fritplaceret'
    };
    return labels[type] || type;
}

// ─── Filtering Logic ────────────────────────────────────────
function getFilteredDevices() {
    return devices.filter(device => {
        // Use case filter
        if (state.selectedUseCase && !device.useCases.includes(state.selectedUseCase)) {
            return false;
        }

        // Voltage filter
        if (state.filters.voltage !== 'any') {
            const hasVoltage = device.voltage.some(v =>
                v.toLowerCase().includes(state.filters.voltage.toLowerCase()) ||
                state.filters.voltage.toLowerCase().includes(v.toLowerCase())
            );
            if (!hasVoltage) return false;
        }

        // Installation filter
        if (state.filters.installation !== 'any') {
            if (device.installation !== state.filters.installation) return false;
        }

        // Power monitoring filter
        if (state.filters.powerMonitoring !== 'any') {
            const required = state.filters.powerMonitoring === 'true' || state.filters.powerMonitoring === true;
            if (device.powerMonitoring !== required) return false;
        }

        // Channels filter
        if (state.filters.channels !== 'any') {
            const minChannels = parseInt(state.filters.channels);
            if (minChannels === 3) {
                if (device.channels < 3) return false;
            } else {
                if (device.channels !== minChannels) return false;
            }
        }

        // Dry contact filter
        if (state.filters.dryContact !== 'any') {
            const required = state.filters.dryContact === 'true' || state.filters.dryContact === true;
            if (device.dryContact !== required) return false;
        }

        // Protocol filter
        if (state.filters.protocol !== 'any') {
            if (!device.protocols.includes(state.filters.protocol)) return false;
        }

        return true;
    }).sort((a, b) => {
        // Sort: more relevant first (more matching use case tags)
        const uc = useCases.find(u => u.id === state.selectedUseCase);
        if (!uc) return 0;
        const aRelevance = a.useCases.filter(u => u === state.selectedUseCase).length;
        const bRelevance = b.useCases.filter(u => u === state.selectedUseCase).length;
        return bRelevance - aRelevance;
    });
}

// ─── Navigation ─────────────────────────────────────────────
function goToStep(step) {
    state.currentStep = step;

    // Update step indicators
    document.querySelectorAll('.step').forEach(el => {
        const stepNum = parseInt(el.dataset.step);
        el.classList.remove('active', 'completed');
        if (stepNum === step) el.classList.add('active');
        if (stepNum < step) el.classList.add('completed');
    });

    // Show/hide step content
    [step1El, step2El, step3El].forEach((el, i) => {
        el.classList.toggle('active', i + 1 === step);
    });

    // Render results when entering step 3
    if (step === 3) {
        renderResults();
    }

    // Scroll to top of main
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetAll() {
    state.selectedUseCase = null;
    state.filters = {
        voltage: 'any',
        installation: 'any',
        powerMonitoring: 'any',
        channels: 'any',
        dryContact: 'any',
        protocol: 'any'
    };

    // Reset UI
    document.querySelectorAll('.usecase-card').forEach(c => c.classList.remove('selected'));
    renderFilters();
    goToStep(1);
}

// ─── Event Binding ──────────────────────────────────────────
function bindEvents() {
    // Use case selection
    usecaseGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.usecase-card');
        if (!card) return;

        const id = card.dataset.id;
        state.selectedUseCase = id;

        document.querySelectorAll('.usecase-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        // Auto-advance to step 2 after brief delay
        setTimeout(() => goToStep(2), 300);
    });

    // Filter chip clicks
    filtersContainer.addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;

        const filterId = chip.dataset.filter;
        const value = chip.dataset.value;

        state.filters[filterId] = value;

        // Update active state for this filter group
        const group = chip.closest('.filter-group');
        group.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
    });

    // Navigation buttons
    document.getElementById('backToStep1').addEventListener('click', () => goToStep(1));
    document.getElementById('showResults').addEventListener('click', () => goToStep(3));
    document.getElementById('backToStep2').addEventListener('click', () => goToStep(2));
    document.getElementById('startOver').addEventListener('click', resetAll);
    document.getElementById('resetBtn').addEventListener('click', resetAll);
}

// ─── Start ──────────────────────────────────────────────────
init();
