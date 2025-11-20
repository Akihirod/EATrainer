document.addEventListener('DOMContentLoaded', () => {

    // --- DONNÉES FLASH CARDS (COMPLETES) ---
    const flashCardData = [
        { title: "I. Aviation légère de l’armée de Terre (I)", cards: [
            { q: "En quelle année l’ALAT a-t-elle été créée ?", r: "1954." },
            { q: "Quelle est la mission principale de l’ALAT ?", r: "Appuyer les troupes au sol par l’observation, le transport et l’appui feu." },
            { q: "Quel hélicoptère est l’emblème de l’ALAT dans l’appui feu ?", r: "Le Tigre HAD." },
            { q: "Quel appareil de reconnaissance légère est utilisé par l’ALAT ?", r: "La Gazelle." },
            { q: "Quel hélicoptère est utilisé pour le transport tactique ?", r: "Le NH90 Caïman." },
            { q: "Quelle unité forme les pilotes d’hélicoptère de l’ALAT ?", r: "L’École de l’ALAT de Dax." },
            { q: "Où se trouve le centre de formation opérationnelle de l’ALAT ?", r: "Au Luc-en-Provence." },
            { q: "Quelle est la devise de l’ALAT ?", r: "« Là où je suis, je veille. »" },
            { q: "De quel ministère dépend l'ALAT ?", r: "Ministère des Armées." },
            { q: "Quelle est la spécialité de l’escadrille des communications et liaisons de l’ALAT ?", r: "Transport de commandement et missions logistiques." },
            { q: "Quelle capacité clé distingue les hélicos de l’ALAT des avions de chasse ?", r: "La capacité d’appui rapproché au plus près des troupes." },
            { q: "Quel rôle joue l’ALAT dans les opérations extérieures ?", r: "Appui feu, évacuation sanitaire, transport tactique, observation." },
            { q: "Quel hélicoptère a longtemps servi de machine polyvalente avant le NH90 ?", r: "Le Puma." },
            { q: "Quel est le signe distinctif des unités ALAT sur uniforme ?", r: "La “libellule”." },
            { q: "Dans quelle opération l'ALAT a fortement été engagée au Mali ?", r: "L’opération Barkhane." },
            { q: "Quel type de lunettes permettent de voler de nuit ?", r: "Les JVN (jumelles de vision nocturne)." },
            { q: "Que signifie “HAD” dans Tigre HAD ?", r: "Hélicoptère d’Appui Destruction." },
            { q: "Que signifie “HOT” dans missile HOT ?", r: "“Haut subsonique Optiquement Téléguidé”." },
            { q: "L’ALAT dépend-elle d’un commandement spécialisé ?", r: "Oui, le COMALAT." },
            { q: "Quel hélicoptère de l’ALAT est spécialisé dans l’évacuation sanitaire ?", r: "Le Caïman (version MEDEVAC)." }
        ]},
        { title: "I. Aviation légère de l’armée de Terre (II)", cards: [
            { q: "Quelle base aérienne est souvent associée à la flotte d’hélicoptères de l’ALAT ?", r: "Base aérienne d’Etain (5e RHC)." },
            { q: "Quel est le rôle du 4e Régiment d'Hélicoptères des Forces Spéciales (RHFS) ?", r: "Fournir un appui aérien aux unités des Forces Spéciales de l'Armée de Terre." },
            { q: "Que signifie 'RHC' dans la terminologie ALAT ?", r: "Régiment d'Hélicoptères de Combat." },
            { q: "Quel grade porte le Commandant de l'ALAT (COMALAT) ?", r: "Général." },
            { q: "Comment nomme-t-on la capacité d'un hélicoptère à se déplacer très près du sol ?", r: "Vol en rase-mottes (ou vol tactique très basse altitude)." },
            { q: "Quelle est l'arme principale utilisée par le Tigre contre les cibles blindées ?", r: "Le missile antichar (Hellfire ou HOT, selon la version)." },
            { q: "En plus de la formation des pilotes, quelle autre spécialité est enseignée à Dax ?", r: "Les contrôleurs d'appui aérien (JTAC)." },
            { q: "Quel hélicoptère léger, en cours de remplacement, est utilisé pour l'école et la liaison ?", r: "Le Fennec." },
            { q: "Quel est le but des exercices 'Guepard' ?", r: "Préparer l'ALAT à des déploiements rapides et complexes." },
            { q: "Combien y a-t-il de RHC actifs en métropole ?", r: "Trois (1er, 3e, 5e RHC) plus le 4e RHFS." },
            { q: "Quel est l'objectif du programme 'Hélicoptère Interarmées Léger' (HIL) ?", r: "Remplacer les Gazelle et Fennec par le H160 Guépard." },
            { q: "Qu'est-ce qu'un 'POC' dans le contexte de l'ALAT ?", r: "Point d'Opérations Carburant (ravitaillement sur zone)." },
            { q: "Quel rôle le RHC joue-t-il dans l'urgence en France ?", r: "Transport de personnel et de matériel pour l'aide à la population." },
            { q: "Quelle est l'altitude moyenne de croisière d'un hélicoptère de transport en mission tactique ?", r: "Très basse, sous 150 pieds (environ 50 mètres) pour l'évasion radar." },
            { q: "Quelle particularité technique permet au Caïman de voler en conditions de givrage ?", r: "Son système de dégivrage des pales et des entrées d'air." },
            { q: "Quel instrument indique au pilote son attitude et sa position par rapport à l'horizon ?", r: "L'horizon artificiel (ou indicateur d'assiette)." },
            { q: "Quel est le nom du système de guerre électronique embarqué sur le Tigre ?", r: "Système de protection et de guerre électronique (SPGE)." },
            { q: "Comment les hélicoptères de l'ALAT se repèrent-ils sans GPS en zone hostile ?", r: "Navigation à l'estime et navigation visuelle (suivi de cartes et de repères)." },
            { q: "Quel est l'armement secondaire d'un hélicoptère de transport pour l'autoprotection ?", r: "Mitrailleuses de sabord (souvent MAG 58 ou M3M)." },
            { q: "L'ALAT dispose-t-elle d'appareils à voilure fixe (avions) ?", r: "Non, l'ALAT est exclusivement dédiée à la voilure tournante (hélicoptères)." }
        ]},
        { title: "II. EOPAN (I) - Marine Nationale", cards: [
            { q: "Que signifie l'acronyme EOPAN ?", r: "Élève Officier Pilote de l'Aéronautique Navale." },
            { q: "Quelle est la devise de l'Aéronautique Navale ?", r: "« Par tous les temps, dans toutes les mers. »" },
            { q: "Quel est le nom du seul porte-avions français ?", r: "Le Charles de Gaulle (R91)." },
            { q: "Quel est le chasseur embarqué principal de la Marine Nationale ?", r: "Le Rafale Marine (M)." },
            { q: "Quel est le rôle principal des pilotes de l'Aéronautique Navale ?", r: "Protéger le groupe aéronaval et projeter la puissance depuis la mer." },
            { q: "Où est basée la majorité des unités de l'Aéronautique Navale en métropole ?", r: "Base Aéronautique Navale (BAN) de Landivisiau (Finistère)." },
            { q: "Comment nomme-t-on la phase d'appontage d'un avion sur un porte-avions ?", r: "L'appontage (ou 'touch and go' en entraînement)." },
            { q: "Quel système est utilisé pour freiner l'avion lors de l'appontage ?", r: "Les brins d'arrêt (ou 'trap' pour 'trapé')." },
            { q: "Quel est l'hélicoptère de lutte anti-sous-marine de la Marine Nationale ?", r: "Le Caïman Marine (NH90) ou le Panther/Lynx (en retrait progressif)." },
            { q: "Quel est le rôle de l'avion de guet aérien embarqué E-2C Hawkeye ?", r: "Détection lointaine et contrôle des opérations aériennes." },
            { q: "Que signifie 'CATOBAR' (utilisé sur le Charles de Gaulle) ?", r: "Catapult Assisted Take Off But Arrested Recovery." },
            { q: "Quel appareil assure la surveillance maritime et la reconnaissance lointaine ?", r: "L'Atlantique 2 (ATL2)." },
            { q: "Quel est le surnom donné aux pilotes de chasse de la Marine ?", r: "Les 'Pacha' (chef d'unité) ou plus largement 'Navalards'." },
            { q: "Quelle est la première école de vol pour les EOPAN (souvent) ?", r: "L'École de Pilotage de l'Aviation Légère (EPA) ou une école aux États-Unis (US Navy)." },
            { q: "Combien d'officiers pilotes y a-t-il en général sur un Rafale Marine ?", r: "Un (version monoplace F3-R) ou deux (version biplace B/C)." },
            { q: "Quelle est la principale différence entre le Rafale Marine et le Rafale Armée de l'Air ?", r: "Train d'atterrissage renforcé, crosse d'appontage et capacité à être catapulté." },
            { q: "Qu'est-ce qu'une 'flotille' ?", r: "L'équivalent d'un escadron dans l'Aéronautique Navale." },
            { q: "Quel est la mission principale du Groupe Aérien Embarqué (GAé) ?", r: "Assurer la permanence de la présence aérienne et la puissance du porte-avions." },
            { q: "Quel est le rôle du 'chien jaune' sur le pont d'envol ?", r: "Officier responsable de la sécurité et de la coordination des mouvements." },
            { q: "Quel est le commandement qui dirige toutes les unités de l'Aéronautique Navale ?", r: "ALAVIA (Amiral Commandant l'Aéronautique Navale)." }
        ]},
        { title: "II. EOPAN (II) - Aviation", cards: [
            { q: "Quel est le principal missile air-air utilisé par le Rafale Marine ?", r: "Le missile MICA (Missile d'Interception et de Combat Aérien)." },
            { q: "Quel est le rôle du 'PA' (Pilote d'Avion) par rapport au 'PH' (Pilote d'Hélicoptère) chez les EOPAN ?", r: "Le PA pilote des avions de chasse ou de patrouille ; le PH des hélicoptères de combat ou de sauvetage." },
            { q: "Quel est le surnom donné au porte-avions Charles de Gaulle par les marins ?", r: "Le 'CDG'." },
            { q: "Quelle BAN est dédiée aux avions de patrouille maritime (ATL2) ?", r: "BAN Lann-Bihoué." },
            { q: "Quelle est la difficulté majeure du catapultage pour le pilote ?", r: "La forte accélération (+5G) en très peu de temps." },
            { q: "Comment les pilotes sont-ils formés à l'éjection ?", r: "Par un passage obligatoire au 'siège éjectable' au CEPA/10S (Centre d'Expérimentations Pratiques et de l'Aéronautique navale)." },
            { q: "Quel instrument de navigation est crucial pour l'approche finale sur porte-avions ?", r: "Le LSO (Landing Signal Officer) et le système d'aide optique (miroir)." },
            { q: "Que signifie 'ASW' dans le contexte des hélicoptères ?", r: "Anti-Submarine Warfare (Lutte Anti-Sous-Marine)." },
            { q: "Quel est le rôle de l'Officier Systèmes d'Armes (OSA) sur un Rafale B/C ou un Hawkeye ?", r: "Gérer les capteurs, les armes et la navigation complexe." },
            { q: "Quel est le premier avion à réaction français conçu pour l'embarquement ?", r: "Le Dassault Étendard IV." },
            { q: "Quel est le rôle du 'Détachement' (DET) de l'Aéronautique Navale ?", r: "Missions de courte ou moyenne durée à partir de frégates ou de bases à terre." },
            { q: "Quelle mission le Rafale M assure-t-il en complément de l'interception et de l'attaque ?", r: "La reconnaissance et la dissuasion nucléaire (ASMP-A)." },
            { q: "Quelle est la vitesse limite d'un avion pour effectuer un appontage ?", r: "Environ 130 à 150 nœuds (variable selon le poids et le type d'avion)." },
            { q: "Comment se nomme l'officier qui dirige les opérations sur le pont d'envol ?", r: "Le 'chef de pont' ou 'deck boss'." },
            { q: "Quel est le principal danger d'un appontage manqué ('bolter') ?", r: "La nécessité de redécoller immédiatement à pleine puissance et de refaire le circuit." },
            { q: "Les pilotes de l'Aéronautique Navale sont-ils formés uniquement en France ?", r: "Non, une partie de la formation initiale se fait souvent aux États-Unis avec l'US Navy (jet, patrouille, ou hélicoptère)." },
            { q: "Quel est le nom du système permettant de diriger les opérations du porte-avions de la passerelle ?", r: "Le CDC (Centre de Conduite des Opérations)." },
            { q: "Quel est le code OTAN pour le Rafale ?", r: "N/A (C'est une désignation française, parfois désigné par sa fonction : 'Omnirole Fighter')." },
            { q: "Quelle est la caractéristique principale du missile de croisière SCALP/Storm Shadow ?", r: "Longue portée et frappe de précision contre des cibles fortement protégées." },
            { q: "Quel est le nom de l'École de spécialisation des pilotes de chasse après l'école de vol ?", r: "Le Centre d'Entraînement des Pilotes de Chasse (CEPT)." }
        ]},
        { title: "III. Armée de Terre", cards: [
            { q: "Quelle est la devise de l’Armée de Terre ?", r: "« Faire face »." },
            { q: "Combien de grandes forces composent l’Armée de Terre française ?", r: "Quatre grandes forces : blindée, infanterie, renseignement, ALAT (plus l'artillerie, le génie, etc.)." },
            { q: "Quel régiment est spécialisé dans les chars Leclerc ?", r: "Le 501e-503e RCC (Régiment de Chars de Combat)." },
            { q: "Quelle tenue porte-t-on en opération extérieure ?", r: "La tenue F3 ou F4." },
            { q: "Quel est l’équivalent “forces spéciales” dans l’Armée de Terre ?", r: "Le Commandement des Forces Spéciales Terre (COM FST)." },
            { q: "Quel régiment incarne les parachutistes de l’armée de Terre ?", r: "Le 1er RCP (Régiment de Chasseurs Parachutistes) ou le 8e RPIMa (Régiment de Parachutistes d'Infanterie de Marine)." },
            { q: "Qu’est-ce qu’un GTIA ?", r: "Groupement tactique interarmes." },
            { q: "Quelle arme gère l’artillerie sol-sol ?", r: "L’Arme de l’Artillerie." },
            { q: "Quel canon d’artillerie est en service en France ?", r: "Le CAESAR (Camion Équipé d'un Système d'Artillerie)." },
            { q: "L’Armée de Terre utilise-t-elle encore le FAMAS ?", r: "Il est progressivement remplacé par le HK416F." },
            { q: "Quelle armée est la plus ancienne : Terre, Air ou Marine ?", r: "L’Armée de Terre." },
            { q: "Qu’est-ce qu’un SGTIA ?", r: "Sous-groupement tactique interarmes." },
            { q: "Quelle est la fonction de Sentinelle ?", r: "Protéger le territoire contre le terrorisme." },
            { q: "Quel véhicule blindé remplace le VAB ?", r: "Le Griffon (Véhicule Blindé Multirôles)." },
            { q: "Quel véhicule blindé léger modernise le parc ?", r: "Le Jaguar (Engin Blindé de Reconnaissance et de Combat)." },
            { q: "Que signifie OPEX ?", r: "Opération extérieure." },
            { q: "Quel est le rôle du 2e REP ?", r: "Infanterie aéroportée de la Légion étrangère." },
            { q: "Quel est le motto de la Légion étrangère ?", r: "« Legio Patria Nostra » (La Légion est notre patrie)." },
            { q: "Qu’est-ce que l’opération Barkhane ?", r: "Une opération de lutte antiterroriste au Sahel (2014–2022)." },
            { q: "Quel régiment est spécialisé dans la montagne ?", r: "Les chasseurs alpins (27e BCA - Bataillon de Chasseurs Alpins)." }
        ]},
        { title: "IV. Armée Française (I) - Structure & Grades", cards: [
            { q: "Qui est le chef suprême des armées françaises ?", r: "Le Président de la République." },
            { q: "Quel est le titre du militaire qui assure le commandement opérationnel ?", r: "Chef d'État-Major des Armées (CEMA)." },
            { q: "Quel est le grade équivalent à 'Capitaine' dans la Marine Nationale ?", r: "Lieutenant de Vaisseau." },
            { q: "Comment se nomme le ministère dont dépendent les armées ?", r: "Le Ministère des Armées." },
            { q: "Quel est l'échelon de commandement le plus élevé après le CEMA ?", r: "Les Chefs d'État-Major d'Armée (Chef d'État-Major de la Marine, etc.)." },
            { q: "Quel grade est supérieur à 'Adjudant' mais inférieur à 'Major' dans l'Armée de Terre ?", r: "Adjudant-Chef." },
            { q: "Que signifie 'CSN' dans la Marine Nationale ?", r: "Chef de Service du Navire (souvent un Lieutenant ou Enseigne)." },
            { q: "Quelle est la première distinction d'un sous-officier dans l'Armée de Terre ?", r: "Sergent." },
            { q: "Quel est l'organe qui assure la direction générale de l'armement ?", r: "La DGA (Direction Générale de l'Armement)." },
            { q: "Qu'est-ce qu'une 'Brigade' dans l'Armée de Terre ?", r: "Une grande unité de commandement regroupant plusieurs régiments (environ 5 000 à 8 000 hommes)." },
            { q: "Quel grade est supérieur à 'Aspirant' avant d'être officier de carrière ?", r: "Sous-Lieutenant (Armée de Terre/Air) ou Enseigne de Vaisseau de 2e classe (Marine)." },
            { q: "Quel est le grade le plus élevé d'officier général ?", r: "Maréchal de France (dignité non grade), sinon Général d'Armée (5 étoiles)." },
            { q: "Que signifie 'COS' ?", r: "Commandement des Opérations Spéciales." },
            { q: "Qu'est-ce qu'une 'Compagnie' dans l'Armée de Terre ?", r: "Une unité de base commandée par un Capitaine (environ 100 à 150 hommes)." },
            { q: "Combien y a-t-il de grandes armées en France ?", r: "Quatre : Armée de Terre, Marine Nationale, Armée de l'Air et de l'Espace, et Gendarmerie Nationale (rattachée pour emploi au Ministère de l'Intérieur, mais force armée)." },
            { q: "Quel grade de base pour un militaire du rang ?", r: "Soldat de 2e classe (Terre) ou Matelot (Marine)." },
            { q: "Quel est le rôle du 'Commissariat des Armées' ?", r: "Soutien administratif, logistique et financier des forces." },
            { q: "Qu'est-ce que la 'Réserve Opérationnelle' ?", r: "Personnel civil ou ancien militaire qui s'engage à servir l'armée pour des périodes limitées." },
            { q: "Quel est l'insigne d'un Maréchal de France ?", r: "Sept étoiles, surmontées de deux bâtons croisés." },
            { q: "Qu'est-ce que l'opération 'Résilience' ?", r: "Contribution des armées à la lutte contre la pandémie de Covid-19 en France." }
        ]},
        { title: "IV. Armée Française (II) - Matériels & Missions", cards: [
            { q: "Quel avion de transport stratégique est utilisé pour la projection de force ?", r: "L'Airbus A400M Atlas." },
            { q: "Quel est le rôle principal des 'FOS' (Forces Opérations Spéciales) ?", r: "Missions clandestines, contre-terrorisme et reconnaissance spéciale." },
            { q: "Quel est le missile de la force de dissuasion nucléaire française sur les sous-marins ?", r: "Le M51 (Missile mer-sol balistique stratégique)." },
            { q: "Quel est le principal char de combat de l'Armée de Terre ?", r: "Le Char Leclerc." },
            { q: "Quel est le nom du programme de modernisation de l'équipement terrestre ?", r: "Le programme SCORPION." },
            { q: "Quel est le rôle du 17e RGP (Régiment de Génie Parachutiste) ?", r: "Soutien au combat, déminage, construction/destruction d'ouvrages en opération aéroportée." },
            { q: "Quelle est la principale frégate multi-missions de la Marine Nationale ?", r: "La Frégate Multi-Missions (FREMM)." },
            { q: "Qu'est-ce que l'opération 'Chammal' ?", r: "Participation française à la coalition internationale contre Daech en Irak et en Syrie." },
            { q: "Quel est le navire spécialisé dans le projection de forces (type porte-hélicoptères) ?", r: "Les BPC (Bâtiments de Projection et de Commandement, classe Mistral)." },
            { q: "Quel est l'hélicoptère spécialisé dans la recherche et le sauvetage en mer ?", r: "L'EC225 Super Puma ou le Caïman (selon l'unité)." },
            { q: "Quel missile air-sol de croisière est utilisé pour les frappes lointaines ?", r: "Le SCALP (Système de Croisière Autonome à Longue Portée)." },
            { q: "Quel est le canon-obusier automoteur qui remplace les AMX-30 AUF1 ?", r: "Le CAESAR." },
            { q: "Qu'est-ce que le 'Service de Santé des Armées' (SSA) ?", r: "Le corps médical militaire assurant le soutien sanitaire des forces en toutes circonstances." },
            { q: "Quel est le rôle du 'GIGN' ?", r: "Intervention contre-terroriste et de haute sécurité (Gendarmerie Nationale)." },
            { q: "Quel est l'avion ravitailleur en vol de l'Armée de l'Air et de l'Espace ?", r: "L'A330 MRTT Phénix (remplaçant le C-135)." },
            { q: "Que signifie 'DCA' ?", r: "Défense Contre Avions (défense sol-air)." },
            { q: "Quel est le véhicule blindé léger utilisé pour la liaison et le commandement en opération Sentinelle ?", r: "Le P4 (en cours de remplacement par le Véhicule Léger Tactique Polyvalent - VLTP P)." },
            { q: "Quel est le missile mer-mer anti-navire de la Marine Nationale ?", r: "L'Exocet." },
            { q: "Quelle est la principale mission de l'Armée de l'Air et de l'Espace en temps de paix ?", r: "Police du ciel (Mission 'Posture Permanente de Sûreté Aérienne' - PPSA)." },
            { q: "Qu'est-ce que la 'Loi de Programmation Militaire' (LPM) ?", r: "Document pluriannuel qui fixe les objectifs et les crédits alloués aux Armées par le gouvernement." }
        ]},
        { title: "V. Techniques hélicoptères", cards: [
            { q: "Quel est le nom de la pièce rotative qui porte les pales ?", r: "Le moyeu du rotor." },
            { q: "Comment s’appelle le rotor arrière ?", r: "Le rotor anti-couple." },
            { q: "Que permet le pas collectif ?", r: "Modifier l’altitude." },
            { q: "Que permet le pas cyclique ?", r: "Contrôler l’inclinaison et la direction." },
            { q: "Pourquoi un hélicoptère peut-il faire du vol stationnaire ?", r: "Grâce à l’orientation variable des pales." },
            { q: "Comment se nomme l’effet qui tire l’hélico vers la droite au décollage ?", r: "L’effet de couple." },
            { q: "Comment s’appelle la vitesse maximale sans perte de contrôle ?", r: "La VNE (Velocity Never Exceed)." },
            { q: "Quel est le principal danger en vol proche du sol ?", r: "Le vortex de sol (settling with power)." },
            { q: "Quel capteur permet au pilote de connaître sa vitesse verticale ?", r: "Le variomètre." },
            { q: "Pourquoi les pales sont-elles articulées ?", r: "Pour compenser les différences de portance entre les pales." },
            { q: "Quel est le carburant utilisé par les hélicoptères militaires ?", r: "Le kérosène (Jet A-1)." },
            { q: "Qu’est-ce qu’une turbine ?", r: "Le moteur qui transforme l’énergie du carburant en rotation." },
            { q: "À quoi sert le fenestron ?", r: "Remplacer le rotor arrière par un rotor caréné." },
            { q: "Quelle est la vitesse moyenne d’un hélicoptère de combat ?", r: "Environ 250 km/h." },
            { q: "Qu’est-ce que l’autorotation ?", r: "Capacité à atterrir sans moteur en utilisant le flux d’air." },
            { q: "Quel système stabilise les hélicoptères modernes ?", r: "Le pilote automatique 4 axes." },
            { q: "Qu’est-ce qu’un treuil ?", r: "Dispositif permettant de hisser une personne depuis l’hélico." },
            { q: "Comment s'appelle l’écran de vision tête haute ?", r: "Le HUD (Head-Up Display)." },
            { q: "Que mesure un anémomètre ?", r: "La vitesse de l'air." },
            { q: "Quel phénomène survient lorsque les pales dépassent la vitesse du son ?", r: "Un mur transsonique (interdit en hélico)." }
        ]},
        { title: "VI. Histoire de France", cards: [
            { q: "Qui a fondé la dynastie capétienne ?", r: "Hugues Capet (987)." },
            { q: "En quelle année a eu lieu la bataille de Marignan ?", r: "1515." },
            { q: "Quel roi est surnommé le “Roi Soleil” ?", r: "Louis XIV." },
            { q: "Quand la Révolution française a-t-elle commencé ?", r: "1789." },
            { q: "Quel est le symbole de la République française ?", r: "Marianne." },
            { q: "Qui a instauré le Code civil ?", r: "Napoléon Bonaparte." },
            { q: "Quel événement met fin à la Première Guerre mondiale ?", r: "L’armistice du 11 novembre 1918." },
            { q: "Quel chef militaire a appelé à résister en 1940 ?", r: "Charles de Gaulle." },
            { q: "Quel roi fut guillotiné pendant la Révolution ?", r: "Louis XVI." },
            { q: "Qui a mené la reconquête française au nom de Charles VII ?", r: "Jeanne d’Arc." },
            { q: "Quel président a mis fin à la guerre d’Algérie ?", r: "Charles de Gaulle (Accords d’Évian, 1962)." },
            { q: "Quelle monarchie a succédé à Napoléon Ier ?", r: "La Restauration (Louis XVIII)." },
            { q: "Qui fut le premier président de la Ve République ?", r: "Charles de Gaulle." },
            { q: "Quelle crise a paralysé la France en mai 1968 ?", r: "Grève générale et contestation étudiante." },
            { q: "Quel traité a fondé la CECA ?", r: "Le traité de Paris (1951)." },
            { q: "Quel roi a signé l’Édit de Nantes ?", r: "Henri IV." },
            { q: "À quel siècle correspond la guerre de Cent Ans ?", r: "XIVe–XVe siècle." },
            { q: "Qui a construit Versailles ?", r: "Louis XIV." },
            { q: "Quel conflit oppose la France à la Prusse en 1870 ?", r: "La guerre franco-prussienne." },
            { q: "Qui a mis en place les 35 heures ?", r: "Lionel Jospin (gouvernement Aubry)." }
        ]},
        { title: "VII. Géopolitique", cards: [
            { q: "Qu’est-ce que l’OTAN ?", r: "Alliance militaire fondée en 1949." },
            { q: "Quelle est la capitale politique de l’Union européenne ?", r: "Bruxelles." },
            { q: "Quelle mer sépare l’Europe de l’Afrique ?", r: "La Méditerranée." },
            { q: "Quel pays est la première puissance économique mondiale ?", r: "Les États-Unis." },
            { q: "Quel pays revendique Taïwan ?", r: "La Chine." },
            { q: "Que signifie G7 ?", r: "Groupe des 7 grandes puissances industrialisées." },
            { q: "Quel pays est le premier exportateur mondial de pétrole ?", r: "L’Arabie saoudite." },
            { q: "Quel pays est au cœur du conflit du Donbass ?", r: "L’Ukraine." },
            { q: "Quel détroit est crucial pour le commerce mondial ?", r: "Le détroit d’Ormuz." },
            { q: "Quelle organisation internationale siège à New York ?", r: "L’ONU." },
            { q: "Quel pays possède le plus de têtes nucléaires ?", r: "La Russie." },
            { q: "Quel État est souvent cité dans la rivalité avec les États-Unis ?", r: "La Chine." },
            { q: "Quel continent connaît la croissance démographique la plus rapide ?", r: "L’Afrique." },
            { q: "Quelle zone maritime est disputée entre plusieurs États en Asie ?", r: "La mer de Chine méridionale." },
            { q: "Quel pays est le principal allié des États-Unis au Moyen-Orient ?", r: "Israël." },
            { q: "Quel est le principal objectif de l’Union africaine ?", r: "Intégration politique et économique du continent." },
            { q: "Quelle ville est considérée comme le carrefour du Moyen-Orient ?", r: "Istanbul." },
            { q: "Quel pays a quitté l’Union européenne en 2020 ?", r: "Le Royaume-Uni (Brexit)." },
            { q: "Quelle est la puissance régionale dominante en Amérique du Sud ?", r: "Le Brésil." },
            { q: "Quel concept désigne l’influence d’un État par la culture et les médias ?", r: "Le soft power." }
        ]}
    ];
    
        
    let currentFlashCardSet = flashCardData[0].cards; 
    let currentCardIndex = 0;
    let isAnswerRevealed = false;


    // --- PARAMÈTRES SIMULATEUR ---
    let settings = {};
    let score = 0;
    let targetParams = { altitude: 1500, speed: 250, heading: 180 };
    let taskCounters = { instructions: 0, math: 0, sequences: 0, shapes: 0, targets: 0 }; 
    let correctTargetHits = 0; 
    let totalTargetsSpawned = 0; 
    let intervals = { game: null, countdown: null, instructions: null, math: null, sequences: null, shapes: null, targets: null }; 
    let mainTimeout;
    let timeLeft = 0;
    let currentMathAnswer = null; 
    let correctMathAnswers = 0;
    let totalMathProblems = 0;
    let memoryLogNumbers = [];
    let memoryLogShapes = [];
    let memoryNumbersScore = 0;
    let memoryShapesScore = 0;
    
    let currentTarget = null; 

    let plane = {
        x: 300, y: 200, viseurSpeed: 4,
        currentAltitude: 1500,
        currentSpeed: 250,
        currentHeading: 180
    };

    // --- RÉFÉRENCES DOM ---
    const mainMenu = document.getElementById('mainMenu');
    const simulatorInterface = document.getElementById('simulatorInterface');
    const startSimulatorButton = document.getElementById('startSimulatorButton');
    const startFlashcardButton = document.getElementById('startFlashcardButton');
    const exitSimInterfaceButton = document.getElementById('exitSimInterfaceButton');
    const exitSimScoreButton = document.getElementById('exitSimScoreButton'); 
    const backToMenuFlashcard = document.getElementById('backToMenuFlashcard');
    
    // Éléments d'historique
    const showHistoryButton = document.getElementById('showHistoryButton'); 
    const historyScreen = document.getElementById('historyScreen'); 
    const scoreList = document.getElementById('scoreList'); 
    const sortCriteriaSelect = document.getElementById('sortCriteria'); 
    const clearHistoryButton = document.getElementById('clearHistoryButton'); 
    const backToMenuHistory = document.getElementById('backToMenuHistory'); 

    // Éléments Flash Cards
    const flashCardScreen = document.getElementById('flashCardScreen');
    const flashCardTitle = document.getElementById('flashCardTitle');
    const cardContent = document.getElementById('cardContent');
    const flashCardText = document.getElementById('flashCardText');
    const currentCardIndexDisplay = document.getElementById('currentCardIndex');
    const totalCardsCountDisplay = document.getElementById('totalCardsCount');
    const revealAnswerButton = document.getElementById('revealAnswerButton');
    const nextCardButton = document.getElementById('nextCardButton');
    const seriesSelector = document.getElementById('seriesSelector'); 

    // Éléments Simulateur 
    const modal = document.getElementById('settingsModal');
    const settingsForm = document.getElementById('settingsForm');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const restitutionNumbersScreen = document.getElementById('restitutionNumbersScreen');
    const restitutionShapesScreen = document.getElementById('restitutionShapesScreen');
    const startGameButton = document.getElementById('startGameButton');
    const restartButton = document.getElementById('restartButton');
    const submitRestitutionButton = document.getElementById('submitRestitutionButton');
    const submitShapesButton = document.getElementById('submitShapesButton');
    const mathInput = document.getElementById('mathInput');
    const restitutionInput = document.getElementById('restitutionInput');
    const restitutionShapesInput = document.getElementById('restitutionShapesInput');
    const settingDuration = document.getElementById('settingDuration');
    const settingInstructionCount = document.getElementById('settingInstructionCount');
    const settingInstructionDelay = document.getElementById('settingInstructionDelay');
    const settingMathCount = document.getElementById('settingMathCount');
    const settingMathDelay = document.getElementById('settingMathDelay');
    const settingSequenceCount = document.getElementById('settingSequenceCount');
    const settingSequenceDelay = document.getElementById('settingSequenceDelay');
    const settingSequenceLength = document.getElementById('settingSequenceLength');
    const settingShapeCount = document.getElementById('settingShapeCount');
    const settingShapeDelay = document.getElementById('settingShapeDelay');
    const settingTargetFrequency = document.getElementById('settingTargetFrequency'); 
    
    const finalScoreDisplay = document.getElementById('finalScore');
    const mathScoreDisplay = document.getElementById('mathScore');
    const memoryNumbersScoreDisplay = document.getElementById('memoryNumbersScore');
    const memoryShapesScoreDisplay = document.getElementById('memoryShapesScore');
    const targetScoreDisplay = document.getElementById('targetScore'); 
    const saveScoreButton = document.getElementById('saveScoreButton'); 
    const skipSaveButton = document.getElementById('skipSaveButton'); 
    
    // Canvas & Context
    const flightCanvas = document.getElementById('flightSimCanvas');
    const flightCtx = flightCanvas.getContext('2d');
    const shapeCanvas = document.getElementById('shapeCanvas');
    const shapeCtx = shapeCanvas.getContext('2d');
    
    // Affichages de Tâches
    const timerDisplay = document.getElementById('timer');
    const instructionText = document.getElementById('flightInstruction'); 
    const numberText = document.getElementById('numberSequence');
    const mathText = document.getElementById('mathProblem');
    const altDisplay = document.getElementById('currentAltitude');
    const spdDisplay = document.getElementById('currentSpeed');
    const hdgDisplay = document.getElementById('currentHeading');
    const sequenceCounterDisplay = document.getElementById('sequenceCounter');
    const shapeCounterDisplay = document.getElementById('shapeCounter'); 

    
    // --- GESTION DU LOCAL STORAGE & HISTORIQUE ---
    
    const STORAGE_KEY = 'eopanSimScores';

    function getHistory() {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error("Erreur lors de la lecture du localStorage:", e);
            return [];
        }
    }

    function saveScore(newScore) {
        const history = getHistory();
        history.push(newScore);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
        } catch (e) {
            console.error("Erreur lors de l'écriture dans le localStorage:", e);
            alert("Sauvegarde impossible : espace de stockage plein ou non autorisé.");
        }
    }

    function clearHistory() {
        if (confirm("Êtes-vous sûr de vouloir effacer tout l'historique des scores ? Cette action est irréversible.")) {
            localStorage.removeItem(STORAGE_KEY);
            displayHistory(); // Rafraîchir l'affichage
        }
    }
    
    // Fonction principale pour charger, trier et afficher
    function displayHistory() {
        let history = getHistory();
        const criteria = sortCriteriaSelect.value;
        
        // 1. TRIER LES DONNÉES
        history.sort((a, b) => {
            switch (criteria) {
                case 'dateAsc':
                    return a.timestamp - b.timestamp; // Plus ancien en premier
                case 'dateDesc':
                    return b.timestamp - a.timestamp; // Plus récent en premier (par défaut)
                case 'pilotageDesc':
                    return b.pilotageScore - a.pilotageScore; // Meilleur score (plus de secondes)
                case 'pilotageAsc':
                    return a.pilotageScore - b.pilotageScore; // Moins bon score
                default:
                    return 0;
            }
        });

        // 2. AFFICHER LES DONNÉES DANS LE TABLEAU
        scoreList.innerHTML = ''; // Vider le tableau
        
        if (history.length === 0) {
            const row = scoreList.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 6;
            cell.textContent = 'Aucun score enregistré pour le moment.';
            return;
        }

        history.forEach(session => {
            const date = new Date(session.timestamp).toLocaleString('fr-FR', {
                year: 'numeric', month: 'numeric', day: 'numeric',
                hour: '2-digit', minute: '2-digit'
            });

            const row = scoreList.insertRow();
            
            row.insertCell().textContent = date;
            row.insertCell().textContent = `${Math.floor(session.pilotageScore / 60)}s`;
            row.insertCell().textContent = `${session.targetScore}/${session.totalTargets}`;
            row.insertCell().textContent = `${session.mathScore}/${session.totalMath}`;
            row.insertCell().textContent = `${session.memoryNumbersScore}/${session.totalSequences}`;
            row.insertCell().textContent = `${session.memoryShapesScore}/${session.totalShapes}`;
        });
    }

    // --- GESTION DE LA NAVIGATION ---

    function showScreen(screenId) {
        // Cacher tous les écrans principaux
        mainMenu.style.display = 'none';
        modal.style.display = 'none';
        flashCardScreen.style.display = 'none';
        simulatorInterface.style.display = 'none';
        historyScreen.style.display = 'none'; 

        // Afficher l'écran demandé
        if (screenId === 'mainMenu') {
            mainMenu.style.display = 'block';
        } else if (screenId === 'settingsModal') {
            modal.style.display = 'flex'; 
            settingsForm.style.display = 'block';
            scoreDisplay.style.display = 'none';
            restitutionNumbersScreen.style.display = 'none';
            restitutionShapesScreen.style.display = 'none';
        } else if (screenId === 'flashCardScreen') {
            flashCardScreen.style.display = 'block';
        } else if (screenId === 'simulatorInterface') {
            simulatorInterface.style.display = 'flex'; 
        } else if (screenId === 'historyScreen') { 
            displayHistory(); 
            historyScreen.style.display = 'block';
        }
    }
    
    // --- FONCTIONS FLASH CARDS ---
    
    function populateSeriesSelector() {
        seriesSelector.innerHTML = ''; 
        flashCardData.forEach((set, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${set.title} (${set.cards.length} cartes)`;
            seriesSelector.appendChild(option);
        });
        seriesSelector.value = 0;
    }

    function handleSeriesChange() {
        const selectedIndex = parseInt(seriesSelector.value);
        if (isNaN(selectedIndex) || selectedIndex < 0 || selectedIndex >= flashCardData.length) {
            return;
        }
        currentFlashCardSet = flashCardData[selectedIndex].cards;
        currentCardIndex = 0;
        flashCardTitle.textContent = flashCardData[selectedIndex].title;
        totalCardsCountDisplay.textContent = currentFlashCardSet.length;
        displayCard();
    }
    
    function initFlashCards() {
        populateSeriesSelector();
        handleSeriesChange(); 
        showScreen('flashCardScreen');
    }
    
    function displayCard() {
        if (currentCardIndex >= currentFlashCardSet.length) {
            flashCardText.textContent = "Série terminée ! Choisissez une nouvelle série dans le menu déroulant.";
            cardContent.className = 'card-answer';
            revealAnswerButton.style.display = 'none';
            nextCardButton.style.display = 'none';
            return;
        }
        
        const card = currentFlashCardSet[currentCardIndex];
        
        flashCardText.textContent = card.q;
        cardContent.className = 'card-question';
        currentCardIndexDisplay.textContent = currentCardIndex + 1;
        isAnswerRevealed = false;
        
        revealAnswerButton.style.display = 'block';
        nextCardButton.style.display = 'none';
    }
    
    function revealAnswer() {
        if (isAnswerRevealed) return;
        const card = currentFlashCardSet[currentCardIndex];
        flashCardText.textContent = card.r;
        cardContent.className = 'card-answer';
        revealAnswerButton.style.display = 'none';
        nextCardButton.style.display = 'block';
        isAnswerRevealed = true;
    }
    
    function nextCard() {
        currentCardIndex++;
        displayCard();
    }


    // --- GESTION DU SIMULATEUR DE VOL ---

    function showSettings() {
        scoreDisplay.style.display = 'none';
        restitutionNumbersScreen.style.display = 'none';
        restitutionShapesScreen.style.display = 'none';
        settingsForm.style.display = 'block';
        showScreen('settingsModal');
    }

    function loadSettingsAndStart() {
        // Lecture des settings
        settings = {
            duration: parseInt(settingDuration.value) * 60000, // minutes en ms
            instructionCount: parseInt(settingInstructionCount.value),
            instructionDelay: parseInt(settingInstructionDelay.value) * 1000,
            mathCount: parseInt(settingMathCount.value),
            mathDelay: parseInt(settingMathDelay.value) * 1000,
            sequenceCount: parseInt(settingSequenceCount.value),
            sequenceDelay: parseInt(settingSequenceDelay.value) * 1000,
            sequenceLength: parseInt(settingSequenceLength.value),
            shapeCount: parseInt(settingShapeCount.value),
            shapeDelay: parseInt(settingShapeDelay.value) * 1000,
            targetFrequency: parseInt(settingTargetFrequency.value) * 1000 
        };
        modal.style.display = 'none';
        showScreen('simulatorInterface'); 
        startSimulation();
    }

    function startSimulation() {
        
        flightCanvas.width = flightCanvas.clientWidth;
        flightCanvas.height = flightCanvas.clientHeight;
        shapeCanvas.width = 200;
        shapeCanvas.height = 200;


        // Réinitialiser les états
        score = 0;
        timeLeft = settings.duration / 1000;
        plane = { 
            x: flightCanvas.width / 2, y: flightCanvas.height / 2, 
            viseurSpeed: 4, currentAltitude: 1500, currentSpeed: 250, currentHeading: 180 
        };
        targetParams = { altitude: 1500, speed: 250, heading: 180 };
        taskCounters = { instructions: 0, math: 0, sequences: 0, shapes: 0, targets: 0 }; 
        correctMathAnswers = 0;
        totalMathProblems = 0;
        correctTargetHits = 0; 
        totalTargetsSpawned = 0; 
        currentTarget = null; 
        memoryLogNumbers = [];
        memoryLogShapes = [];
        memoryNumbersScore = 0;
        memoryShapesScore = 0;
        currentMathAnswer = null;
        mathInput.value = '';
        mathInput.classList.remove('correct', 'incorrect');
        
        // Réinitialiser les affichages
        timerDisplay.textContent = timeLeft;
        instructionText.textContent = "MAINTENIR 1500m, 250 kts, cap 180";
        mathText.textContent = "-- + -- = ?";
        numberText.textContent = "----";
        sequenceCounterDisplay.textContent = `0 / ${settings.sequenceCount}`;
        shapeCounterDisplay.textContent = `0 / ${settings.shapeCount}`;
        shapeCtx.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);

        // Nettoyage des anciens timers
        clearAllIntervals(); 

        // Démarrer les boucles
        intervals.game = setInterval(gameLoop, 1000 / 60); 
        intervals.countdown = setInterval(updateTimer, 1000);
        
        if (settings.instructionCount > 0) {
            setTimeout(runInstructionTask, 2000);
            intervals.instructions = setInterval(runInstructionTask, settings.instructionDelay);
        }
        if (settings.mathCount > 0) {
            setTimeout(runMathTask, 5000);
            intervals.math = setInterval(runMathTask, settings.mathDelay);
        }
        if (settings.sequenceCount > 0) {
            setTimeout(runSequenceTask, 10000);
            intervals.sequences = setInterval(runSequenceTask, settings.sequenceDelay);
        }
        if (settings.shapeCount > 0) {
            setTimeout(runShapeTask, 15000);
            intervals.shapes = setInterval(runShapeTask, settings.shapeDelay);
        }
        if (settings.targetFrequency > 0) { 
            intervals.targets = setInterval(spawnTarget, settings.targetFrequency);
        }
        
        mainTimeout = setTimeout(stopSimulation, settings.duration);
    }

    function stopSimulation() {
        clearAllIntervals();
        
        if (simulatorInterface.style.display === 'flex') {
            altDisplay.textContent = "FIN";
            spdDisplay.textContent = "FIN";
            hdgDisplay.textContent = "FIN";
            simulatorInterface.style.display = 'none';
        }
        
        // Logique de restitution:
        if (memoryLogNumbers.length > 0) {
            startNumberRestitution();
        } else if (memoryLogShapes.length > 0) {
            startShapeRestitution(true); 
        } else {
            showScoreScreen(); 
        }
    }
    
    function startNumberRestitution() {
        modal.style.display = 'flex'; 
        settingsForm.style.display = 'none';
        scoreDisplay.style.display = 'none';
        restitutionShapesScreen.style.display = 'none';
        restitutionNumbersScreen.style.display = 'block';
        restitutionInput.value = ''; 
    }

    function startShapeRestitution(skipNumberCalc = false) {
        // Calcul du score des nombres
        if (!skipNumberCalc) {
            const userInputs = restitutionInput.value.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const uniqueUserInputs = [...new Set(userInputs)]; 
            memoryNumbersScore = 0;
            for (const input of uniqueUserInputs) {
                if (memoryLogNumbers.includes(input)) {
                    memoryNumbersScore++;
                }
            }
        }
        
        restitutionNumbersScreen.style.display = 'none';
        
        if (memoryLogShapes.length > 0) {
            restitutionShapesScreen.style.display = 'block';
            restitutionShapesInput.value = ''; 
        } else {
            submitShapesRestitution(); 
        }
    }
    
    function submitShapesRestitution() {
        // Calcul du score des formes
        if (memoryLogShapes.length > 0) {
            const userShapeInputs = restitutionShapesInput.value.split('\n').map(s => s.trim().toLowerCase()).filter(s => s.length > 0);
            const uniqueUserShapeInputs = [...new Set(userShapeInputs)];
            const correctShapeAnswers = memoryLogShapes.map(item => (item.shape + ' ' + item.color).toLowerCase());
            memoryShapesScore = 0;
            for (const input of uniqueUserShapeInputs) {
                if (correctShapeAnswers.includes(input)) {
                    memoryShapesScore++;
                }
            }
        }

        showScoreScreen();
    }

    function showScoreScreen() {
        // Affichage des scores
        finalScoreDisplay.textContent = `${Math.floor(score / 60)} secondes`; 
        mathScoreDisplay.textContent = `${correctMathAnswers} / ${totalMathProblems}`;
        memoryNumbersScoreDisplay.textContent = `${memoryNumbersScore} / ${memoryLogNumbers.length}`;
        memoryShapesScoreDisplay.textContent = `${memoryShapesScore} / ${memoryLogShapes.length}`;
        targetScoreDisplay.textContent = `${correctTargetHits} / ${totalTargetsSpawned}`; 

        restitutionShapesScreen.style.display = 'none';
        restitutionNumbersScreen.style.display = 'none';
        settingsForm.style.display = 'none';
        modal.style.display = 'flex';
        scoreDisplay.style.display = 'block';
        
        // Afficher les boutons de sauvegarde
        saveScoreButton.style.display = 'inline-block';
        skipSaveButton.style.display = 'inline-block';
        restartButton.style.display = 'none';
        exitSimScoreButton.style.display = 'none';
    }


    function clearAllIntervals() {
        clearInterval(intervals.game);
        clearInterval(intervals.countdown);
        clearInterval(intervals.instructions);
        clearInterval(intervals.math);
        clearInterval(intervals.sequences);
        clearInterval(intervals.shapes);
        clearInterval(intervals.targets); 
        clearTimeout(mainTimeout); 
    }

    function updateTimer() {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            stopSimulation();
        }
    }

    function gameLoop() {
        // Dessin du fond (ciel/terre)
        flightCtx.clearRect(0, 0, flightCanvas.width, flightCanvas.height);
        flightCtx.fillStyle = '#87CEEB'; 
        flightCtx.fillRect(0, 0, flightCanvas.width, flightCanvas.height / 2);
        flightCtx.fillStyle = '#8B4513'; 
        flightCtx.fillRect(0, flightCanvas.height / 2, flightCanvas.width, flightCanvas.height / 2);
        
        // Dessin du réticule (plan)
        flightCtx.strokeStyle = 'white'; 
        flightCtx.lineWidth = 2;
        flightCtx.beginPath();
        flightCtx.moveTo(plane.x - 15, plane.y); flightCtx.lineTo(plane.x + 15, plane.y);
        flightCtx.moveTo(plane.x, plane.y - 15); flightCtx.lineTo(plane.x, plane.y + 15);
        flightCtx.stroke();
        
        // Dessin de la cible
        if (currentTarget) {
            flightCtx.fillStyle = 'red';
            flightCtx.beginPath();
            flightCtx.arc(currentTarget.x, currentTarget.y, 8, 0, Math.PI * 2); 
            flightCtx.fill();
        }
        
        // Mise à jour de l'affichage
        altDisplay.textContent = Math.round(plane.currentAltitude);
        spdDisplay.textContent = Math.round(plane.currentSpeed);
        hdgDisplay.textContent = (Math.round(plane.currentHeading) === 0 ? 360 : Math.round(plane.currentHeading));
        
        // Calcul du Score Pilotage
        const TOLERANCE = { alt: 50, spd: 10, hdg: 10 };
        let altError = Math.abs(plane.currentAltitude - targetParams.altitude);
        let spdError = Math.abs(plane.currentSpeed - targetParams.speed);
        let hdgDiff = Math.abs(plane.currentHeading - targetParams.heading);
        let hdgError = Math.min(hdgDiff, 360 - hdgDiff);
        
        if (altError < TOLERANCE.alt && spdError < TOLERANCE.spd && hdgError < TOLERANCE.hdg) {
            score++; 
        }
        
        // Vérification de l'atteinte de la cible
        checkTargetHit();
    }

    // Fonctions de Tâches
    function runInstructionTask() {
        if (taskCounters.instructions < settings.instructionCount) {
            generateFlightInstruction();
            taskCounters.instructions++;
        } else { clearInterval(intervals.instructions); }
    }
    
    function runMathTask() {
        if (taskCounters.math < settings.mathCount) {
            generateMathProblem();
            taskCounters.math++;
        } else { clearInterval(intervals.math); }
    }

    function runSequenceTask() {
        if (taskCounters.sequences < settings.sequenceCount) {
            taskCounters.sequences++; 
            sequenceCounterDisplay.textContent = `${taskCounters.sequences} / ${settings.sequenceCount}`;
            generateNumberSequence(); 
        } else { 
            clearInterval(intervals.sequences); 
        }
    }

    function runShapeTask() {
        if (taskCounters.shapes < settings.shapeCount) {
            taskCounters.shapes++;
            shapeCounterDisplay.textContent = `${taskCounters.shapes} / ${settings.shapeCount}`;
            generateShape();
        } else {
            clearInterval(intervals.shapes);
        }
    }
    
    // Fonctions de Ciblage
    function spawnTarget() {
        if (currentTarget) {
             // console.log("Cible manquée."); // Commenté pour ne pas spammer la console
        }
        
        const padding = 50; 
        currentTarget = {
            x: padding + Math.random() * (flightCanvas.width - 2 * padding),
            y: padding + Math.random() * (flightCanvas.height - 2 * padding)
        };
        totalTargetsSpawned++;
    }

    function checkTargetHit() {
        if (!currentTarget) return;

        const HIT_DISTANCE = 15; 
        
        const dx = plane.x - currentTarget.x;
        const dy = plane.y - currentTarget.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < HIT_DISTANCE) {
            correctTargetHits++;
            currentTarget = null; 
            // console.log("Cible touchée !"); // Commenté
        }
    }
    
    function checkMathAnswer() {
        if (currentMathAnswer === null) return; 
        
        const userAnswer = parseInt(mathInput.value.trim());

        if (!isNaN(userAnswer) && userAnswer === currentMathAnswer) {
            correctMathAnswers++;
            mathInput.classList.add('correct');
            mathInput.classList.remove('incorrect');
        } else {
            mathInput.classList.add('incorrect');
            mathInput.classList.remove('correct');
        }
        
        currentMathAnswer = null; 
        mathText.textContent = "-- + -- = ?"; 
        setTimeout(() => {
            mathInput.value = '';
            mathInput.classList.remove('correct', 'incorrect');
        }, 1000);
    }

    function generateFlightInstruction() {
        const altitudes = [500, 1000, 1500, 2000, 2500];
        const speeds = [200, 250, 300, 350];
        const headings = [
            { text: "Nord (360)", val: 0 }, { text: "Sud (180)", val: 180 }, 
            { text: "Est (090)", val: 90 }, { text: "Ouest (270)", val: 270 },
            { text: "Nord-Est (045)", val: 45 }, { text: "Sud-Ouest (225)", val: 225 }
        ];
        const alt = altitudes[Math.floor(Math.random() * altitudes.length)];
        const spd = speeds[Math.floor(Math.random() * speeds.length)];
        const head = headings[Math.floor(Math.random() * headings.length)];
        
        targetParams.altitude = alt;
        targetParams.speed = spd;
        targetParams.heading = head.val; 
        
        instructionText.textContent = `MAINTENIR ${alt}m, vitesse ${spd} kts, cap ${head.text}`;
    }

    function generateShape() {
        const shapes = ['cercle', 'carré', 'triangle'];
        const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
        const colorsFR = {
            'red': 'rouge', 'blue': 'bleu', 'green': 'vert', 
            'yellow': 'jaune', 'purple': 'violet', 'orange': 'orange'
        };
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const colorKey = colors[Math.floor(Math.random() * colors.length)];
        const colorFR = colorsFR[colorKey];
        memoryLogShapes.push({ shape: shape, color: colorFR });
        
        shapeCtx.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);
        shapeCtx.fillStyle = colorKey; 
        
        const cx = 100, cy = 100;
        const size = 80;
        switch (shape) {
            case 'cercle': shapeCtx.beginPath(); shapeCtx.arc(cx, cy, size, 0, 2 * Math.PI); shapeCtx.fill(); break;
            case 'carré': shapeCtx.fillRect(cx - size, cy - size, size * 2, size * 2); break;
            case 'triangle': 
                shapeCtx.beginPath(); 
                shapeCtx.moveTo(cx, cy - size); 
                shapeCtx.lineTo(cx + size, cy + size); 
                shapeCtx.lineTo(cx - size, cy + size); 
                shapeCtx.closePath(); 
                shapeCtx.fill(); 
                break;
        }
    }

    function generateNumberSequence() {
        let seq = "";
        for (let i = 0; i < settings.sequenceLength; i++) {
            seq += Math.floor(Math.random() * 10);
        }
        numberText.textContent = seq;
        memoryLogNumbers.push(seq); 
    }

    function generateMathProblem() {
        const n1 = Math.floor(Math.random() * 15) + 2;
        const n2 = Math.floor(Math.random() * 15) + 2;
        const ops = ['+', '-', '*'];
        const op = ops[Math.floor(Math.random() * ops.length)];
        let problem = "";
        let solution = 0;
        
        switch(op) {
            case '+':
                problem = `${n1} + ${n2} = ?`; solution = n1 + n2; break;
            case '-':
                if (n1 < n2) { problem = `${n2} - ${n1} = ?`; solution = n2 - n1; } 
                else { problem = `${n1} - ${n2} = ?`; solution = n1 - n2; }
                break;
            case '*':
                const n1_mult = Math.floor(n1 / 2) + 2; 
                const n2_mult = Math.floor(n2 / 3) + 2;
                problem = `${n1_mult} * ${n2_mult} = ?`; solution = n1_mult * n2_mult;
                break;
        }
        mathText.textContent = problem;
        currentMathAnswer = solution; 
        totalMathProblems++; 
    }

    // --- GESTION DES ENTRÉES CLAVIER ---
    window.addEventListener('keydown', (e) => {
        // Gérer la réponse au calcul mental via Entrée
        if (e.key === 'Enter' && document.activeElement === mathInput) {
            checkMathAnswer();
            return;
        }

        // Bloquer si le simulateur n'est pas actif
        if (simulatorInterface.style.display !== 'flex') {
            return;
        }
        
        const wrapHeading = (val) => (val + 360) % 360;

        switch (e.key.toLowerCase()) {
            // Pilotage (Translation du Viseur)
            case 'arrowup': 
            case 'w': e.preventDefault(); plane.y = Math.max(0, plane.y - plane.viseurSpeed); break;
            
            case 'arrowdown': 
            case 'x': e.preventDefault(); plane.y = Math.min(flightCanvas.height, plane.y + plane.viseurSpeed); break;
            
            case 'arrowleft': 
            case 'a': e.preventDefault(); plane.x = Math.max(0, plane.x - plane.viseurSpeed); break;
            
            case 'arrowright': 
            e.preventDefault(); plane.x = Math.min(flightCanvas.width, plane.x + plane.viseurSpeed); break; 
            
            // Vitesse
            case 'z': plane.currentSpeed = Math.min(450, plane.currentSpeed + 2); break;
            case 's': plane.currentSpeed = Math.max(100, plane.currentSpeed - 2); break;
            
            // Cap (Heading)
            case 'q': plane.currentHeading = wrapHeading(plane.currentHeading - 1); break;
            case 'd': plane.currentHeading = wrapHeading(plane.currentHeading + 1); break;
            
            // Altitude
            case 'r': plane.currentAltitude += 10; break;
            case 'f': plane.currentAltitude = Math.max(0, plane.currentAltitude - 10); break;
        }
    });
    
    // --- ATTACHE DES LISTENERS ---
    
    // Menu Principal
    startSimulatorButton.addEventListener('click', showSettings);
    startFlashcardButton.addEventListener('click', initFlashCards);
    showHistoryButton.addEventListener('click', () => showScreen('historyScreen')); 
    
    // Sortie Simulateur (Interface de Jeu)
    exitSimInterfaceButton.addEventListener('click', () => {
        clearAllIntervals();
        showScreen('mainMenu');
    });

    // Sortie Simulateur (Écran de Score)
    exitSimScoreButton.addEventListener('click', () => {
        showScreen('mainMenu');
    });

    // LISTENERS D'HISTORIQUE
    backToMenuHistory.addEventListener('click', () => {
        showScreen('mainMenu');
    });
    sortCriteriaSelect.addEventListener('change', displayHistory); // Déclenche le tri
    clearHistoryButton.addEventListener('click', clearHistory);

    // Retour Menu Flash Cards
    backToMenuFlashcard.addEventListener('click', () => {
        showScreen('mainMenu');
    });
    
    // Flash Cards 
    seriesSelector.addEventListener('change', handleSeriesChange); 
    revealAnswerButton.addEventListener('click', revealAnswer);
    nextCardButton.addEventListener('click', nextCard);

    // Simulateur 
    startGameButton.addEventListener('click', loadSettingsAndStart);
    restartButton.addEventListener('click', showSettings);
    submitRestitutionButton.addEventListener('click', () => startShapeRestitution(false));
    submitShapesButton.addEventListener('click', submitShapesRestitution); 
    
    // LISTENERS DE SAUVEGARDE
    saveScoreButton.addEventListener('click', () => {
        const sessionScore = {
            pilotageScore: score, // Secondes dans la tolérance (x60 frames/sec)
            mathScore: correctMathAnswers,
            totalMath: totalMathProblems,
            memoryNumbersScore: memoryNumbersScore,
            totalSequences: memoryLogNumbers.length,
            memoryShapesScore: memoryShapesScore,
            totalShapes: memoryLogShapes.length,
            targetScore: correctTargetHits, 
            totalTargets: totalTargetsSpawned, 
            timestamp: Date.now()
        };
        saveScore(sessionScore);
        
        alert("Score enregistré !");
        saveScoreButton.style.display = 'none';
        skipSaveButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
        exitSimScoreButton.style.display = 'inline-block';
    });
    
    skipSaveButton.addEventListener('click', () => {
        saveScoreButton.style.display = 'none';
        skipSaveButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
        exitSimScoreButton.style.display = 'inline-block';
    });

    mathInput.addEventListener('change', checkMathAnswer); 

    // Démarrer sur l'écran du menu principal
    showScreen('mainMenu');
});