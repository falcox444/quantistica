const languageSelect = document.getElementById('language-select');

// Funzione per tradurre i testi
function translatePage(language) {
    const translations = {
        'it': {
            'hero-title': 'Benvenuti nel Mondo Quantistico',
            'intro': 'La meccanica quantistica è la teoria che descrive il comportamento della materia e dell\'energia a livello atomico e subatomico. È un mondo di probabilità, incertezza e fenomeni sorprendenti.',
            'concepts-title': 'Concetti Fondamentali',
            'dualismo': 'Dualismo onda-particella: In fisica classica, si distingue nettamente tra particelle (come una pallina da tennis) e onde (come un’onda del mare). Ma in meccanica quantistica, questa distinzione si sfuma. Le particelle subatomiche, come fotoni (luce) o elettroni, si comportano sia come onde che come particelle, a seconda di come le osserviamo. Ad esempio, possono creare interferenze, tipiche delle onde, ma allo stesso tempo colpire un bersaglio in un singolo punto, come una particella.',
            'indeterminazione': 'Principio di indeterminazione di Heisenberg: Formulato da Werner Heisenberg nel 1927, questo principio afferma che non possiamo conoscere con precisione assoluta sia la posizione che la velocità (quantità di moto) di una particella quantistica. Più cerchiamo di determinare dove si trova, meno conosciamo quanto velocemente si muove, e viceversa.',
            'doppia-fenditura': 'Esperimento della doppia fenditura: È l’esperimento simbolo della stranezza quantistica. Se lanciamo elettroni (o fotoni) contro una barriera con due fessure, e dietro c’è uno schermo che ne rileva l’impatto, succede qualcosa di sorprendente:',
            'df-li1' : 'Se non osserviamo quale fessura attraversano, gli elettroni creano un pattern di interferenza, come se passassero da entrambe le fessure contemporaneamente.',
            'df-li2' : 'Se invece li osserviamo, il pattern sparisce, e gli elettroni si comportano come particelle classiche, passando da una sola fenditura.',
            'entanglentment':'Entanglement Quantistico: L’entanglement (intreccio quantistico) è un fenomeno in cui due o più particelle diventano così collegate che il loro stato non può essere descritto separatamente, anche a grandi distanze. Cambiare lo stato di una particella influisce istantaneamente sull’altra, indipendentemente dalla distanza tra loro.',
            'tunneling': 'Tunneling Quantistico: Nel mondo classico, se una particella non ha abbastanza energia per superare una barriera, semplicemente non può farlo. Ma nel mondo quantistico, c’è una piccola probabilità che la particella “tunneleggia” attraverso la barriera, anche senza energia sufficiente.',
            'superconducibilita':'Superconduttività e Superfluidità: Entrambi sono esempi di come comportamenti quantistici possono emergere anche in sistemi “grandi” (macroscopici).',
            'superconducibilita-li1':'Superconduttività: materiali che, a temperature molto basse, conducono elettricità senza resistenza. Nessuna perdita di energia.',
            'superfluidita':'Superfluidità: liquidi (come l’elio superfluido) che scorrono senza attrito, anche risalendo le pareti del contenitore!',
            'applications-title': 'La Fisica Quantistica nella Tecnologia di Oggi e di Domani',
            'computer-title': 'Computer Quantistici',
            'computer-desc': 'I computer tradizionali usano bit, che possono essere solo 0 o 1. I computer quantistici usano invece qubit, che possono essere 0, 1, o entrambe le cose contemporaneamente (grazie alla sovrapposizione quantistica). Inoltre, i qubit possono essere entangled, aumentando la potenza computazionale.',
            'crittografia-title': 'Crittografia Quantistica',
            'crittografia-desc': 'Usa i principi della meccanica quantistica per creare comunicazioni inviolabili. Il metodo più famoso è il quantum key distribution (QKD), che sfrutta l’entanglement o la polarizzazione dei fotoni.',
            'sensori-title': 'Sensori Quantistici',
            'sensori-desc': 'Sono dispositivi che sfruttano la sensibilità estrema degli stati quantistici per misurare con precisione altissima grandezze fisiche: tempo, gravità, magnetismo, ecc.',
            'interpretazioni-link': 'Approfondisci le Interpretazioni della Meccanica Quantistica',
            'interpretations-title': 'Un Mondo di Interpretazioni',
            'copenhagen-title': 'Interpretazione di Copenhagen',
            'copenhagen-desc': 'Proposta da Niels Bohr e altri nel XX secolo, è l’interpretazione più “tradizionale” della meccanica quantistica. Dice che una particella non esiste in uno stato definito finché non viene misurata. Fino a quel momento, si trova in una sovrapposizione di tutti gli stati possibili. L’atto della misura “collassa” la sovrapposizione in uno stato reale. È l’interpretazione usata nei libri di scuola, ma non l’unica.',
            'molti-mondi-title': 'Teoria dei Molti Mondi',
            'molti-mondi-desc': 'Un’alternativa all’interpretazione di Copenhagen, formulata da Hugh Everett. Dice che ogni volta che avviene una misura quantistica, l’universo si divide in tanti universi paralleli quanti sono i possibili risultati. In uno, il gatto è vivo; in un altro, è morto (come nel famoso paradosso del gatto di Schrödinger). Non c’è collasso della funzione d’onda: tutti gli esiti avvengono, ma in mondi separati.',
            'altre-title': 'Altre Interpretazioni',
            'altre-desc': 'Esistono molte altre interpretazioni, come la teoria delle variabili nascoste e l\'interpretazione transazionale.',
            'index-link': 'Torna all\'Introduzione',
            'introduzione':'Introduzione',
            'fenomeni' : 'Fenomeni',
            'applicazioni': 'Applicazioni',
            'interpretazioni' : 'Interpretazioni',
            'tf':'Fenomeni Quantistici che Sfuggono all’Intuito'
        },
        'en': {
            'hero-title': 'Welcome to the Quantum World',
            'intro': 'Quantum mechanics is the theory that describes the behavior of matter and energy at the atomic and subatomic levels. It’s a world of probabilities, uncertainty, and surprising phenomena.',
            'concepts-title': 'Fundamental Concepts',
            'dualismo': 'Wave-particle duality: In classical physics, there is a clear distinction between particles (like a tennis ball) and waves (like an ocean wave). But in quantum mechanics, this line blurs. Subatomic particles like photons (light) or electrons behave both as waves and as particles, depending on how we observe them. For example, they can create interference patterns, typical of waves, but also hit a target at a single point, like a particle.',
            'indeterminazione': 'Heisenberg’s Uncertainty Principle: Formulated by Werner Heisenberg in 1927, this principle states that we cannot know with absolute precision both the position and the velocity (momentum) of a quantum particle. The more precisely we try to determine its position, the less we know about its speed, and vice versa.',
            'doppia-fenditura': 'Double-slit experiment: This is the symbolic experiment of quantum weirdness. If we shoot electrons (or photons) at a barrier with two slits, and there’s a screen behind it to detect impacts, something surprising happens:',
            'df-li1' : 'If we do not observe which slit they go through, the electrons create an interference pattern, as if they pass through both slits simultaneously.',
            'df-li2' : 'If we observe them, the pattern disappears, and the electrons behave like classical particles, going through only one slit.',
            'entanglentment': 'Quantum Entanglement: Entanglement is a phenomenon where two or more particles become so connected that their states cannot be described independently, even at great distances. Changing the state of one particle instantly affects the other, regardless of the distance between them.',
            'tunneling': 'Quantum Tunneling: In the classical world, if a particle doesn’t have enough energy to overcome a barrier, it simply cannot pass. But in the quantum world, there’s a small probability the particle can “tunnel” through the barrier, even without sufficient energy.',
            'superconducibilita': 'Superconductivity and Superfluidity: Both are examples of how quantum behaviors can emerge even in “large” (macroscopic) systems.',
            'superconducibilita-li1': 'Superconductivity: materials that, at very low temperatures, conduct electricity without resistance. No energy loss.',
            'superfluidita': 'Superfluidity: liquids (like superfluid helium) that flow without friction, even climbing the walls of their container!',
            'applications-title': 'Quantum Physics in Today’s and Tomorrow’s Technology',
            'computer-title': 'Quantum Computers',
            'computer-desc': 'Traditional computers use bits, which can be only 0 or 1. Quantum computers use qubits, which can be 0, 1, or both at the same time (thanks to quantum superposition). Additionally, qubits can be entangled, increasing computing power.',
            'crittografia-title': 'Quantum Cryptography',
            'crittografia-desc': 'Uses principles of quantum mechanics to create unbreakable communications. The most famous method is quantum key distribution (QKD), which uses entanglement or photon polarization.',
            'sensori-title': 'Quantum Sensors',
            'sensori-desc': 'These are devices that exploit the extreme sensitivity of quantum states to measure physical quantities—such as time, gravity, magnetism—with incredibly high precision.',
            'interpretazioni-link': 'Explore Interpretations of Quantum Mechanics',
            'interpretations-title': 'A World of Interpretations',
            'copenhagen-title': 'Copenhagen Interpretation',
            'copenhagen-desc': 'Proposed by Niels Bohr and others in the 20th century, this is the most “traditional” interpretation of quantum mechanics. It says that a particle doesn’t exist in a definite state until it is measured. Until then, it exists in a superposition of all possible states. The act of measurement “collapses” the superposition into a real state. This is the interpretation found in textbooks, but it’s not the only one.',
            'molti-mondi-title': 'Many-Worlds Theory',
            'molti-mondi-desc': 'An alternative to the Copenhagen interpretation, formulated by Hugh Everett. It says that every time a quantum measurement is made, the universe splits into as many parallel universes as there are possible outcomes. In one, the cat is alive; in another, it’s dead (like in the famous Schrödinger’s cat paradox). There is no wavefunction collapse: all outcomes occur, but in separate worlds.',
            'altre-title': 'Other Interpretations',
            'altre-desc': 'There are many other interpretations, such as hidden variables theory and the transactional interpretation.',
            'index-link': 'Back to Introduction',
            'introduzione':'Introduction',
            'fenomeni':'Phenomena',
            'applicazioni':'Applications',
            'interpretazioni': 'Interpretations',
            'tf':'Quantum Phenomena That Elude Intuition'
        }
    };

    //Traduzione elementi con attributo 'id'
    const textElements = document.querySelectorAll('[id]');
    textElements.forEach(element => {
        const id = element.id;
        if (translations[language][id]) {
            element.textContent = translations[language][id];
        }
    });
    // Traduzione elementi con attributo 'data-translate'
    const textElementsData = document.querySelectorAll('[data-translate]');
    textElementsData.forEach(element => {
        const key = element.dataset.translate;
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}


// Gestione della selezione della lingua
languageSelect.addEventListener('change', () => {
    const selectedLanguage = languageSelect.value;
    translatePage(selectedLanguage);
});

// Traduzione iniziale al caricamento della pagina
translatePage(languageSelect.value);
