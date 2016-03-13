angular.module('starter.services', [])

.factory('ProfilService', ['CommunityService', function(CommunityService) {
    var people = [
        {
            id: 0,
            email: "sebastien@cadulink.com",
            firstName: "Sébastien",
            lastName: "Velluz",
            profession: "Médecin généraliste",
            practiceLocation: "Valenciennes",
            communities: [0,2,3]
        },
        {
            id: 1,
            email: "kamel@cadulink.com",
            firstName: "Kamel",
            lastName: "Velluz",
            profession: "Chirurgien-dentiste",
            practiceLocation: "Anzin",
            communities: [1,2]
        },
        {
            id: 2,
            email: "julien@cadulink.com",
            firstName: "Julien",
            lastName: "Velluz",
            profession: "Étudiant sage-femme",
            practiceLocation: "Lille",
            communities: [0,4]
        },
        {
            id: 3,
            email: "anthony@cadulink.com",
            firstName: "Anthony",
            lastName: "Velluz",
            profession: "ORL",
            practiceLocation: "Tourcoing",
            communities: [1,2,4]
        },
        {
            id: 4,
            email: "philippe@cadulink.com",
            firstName: "philippe",
            lastName: "Velluz",
            profession: "Médecin généraliste",
            practiceLocation: "Valenciennes",
            communities: [0,3,4]
        },
    ];

    return {
        get: function(personId=0) {
            return people[personId];
        },
        getCommunities(personId=0){
            communities = [];
            people[personId].communities.forEach(
                function (element, index, arry) {
                    communities.push(CommunityService.get(element));
                }
            );
            return communities;
        }
    };
}])

.factory('ArticleService', ['ProfilService', function(ProfilService) {
    var articles = [
      {
        id:1,
        communityId:1,
        authorId: 2,
        title:"Un test salivaire pour détecter le cancer : info ou intox ?",
        content: "<p>Si la decouverte se confirme, elle pourrait revolutionner le depistage du cancer. Des scientifiques sont en train de developper un test salivaire utilisable a domicile permettant de detecter la presence d'un cancer en une dizaine de minutes, rapporte le Telegraph. Ce test salivaire serait precis a 100% et si simple a utiliser qu'il pourrait etre mis en vente libre en pharmacie.Une simple goutte de salive en guise de test</br>Selon David Wong, un professeur d'oncologie a l'universite de Californie, il est possible de detecter des tumeurs lorsqu'elles circulent dans les fluides corporels. Les tests menes par ce scientifique ont demontre qu'une simple goutte de salive contient assez de donnees pour permettre d'etablir un diagnostic des le debut du developpement de la tumeur, assure-t-il. Actuellement, les scientifiques ne peuvent utiliser que les tests sanguins pour detecter un cancer, s'ils ont deja effectue une biopsie pour reperer une tumeur.</br>'Detecter le cancer le plus tot possible est crucial. Avec ce test, cela peut-etre fait par le patient lui-meme, chez lui, chez le dentiste, ou en pharmacie', souligne encore David Wong, qui espere voir le test arriver en Grande-Bretagne dans la decennie, voire plus tot.</p> ",
        picture:'',
        date: "19/05/2016"
      },
      {
        id:2,
        communityId:2,
        authorId: 2,
        title:"Le sens de l'orientation pourrait être lié à la testostérone",
        content:"Lors d'un trajet en voiture ou dans un centre commercial, certains hommes aiment bien prendre les choses en main. Dans ce cas, les femmes se fient à leur sens de l'orientation.</br>"+
        "Pour ceux qui se reconnaissent dans cette scène, pas la peine de pavoiser, les hommes n'auraient en fait aucun mérite, tout ne serait qu'une question d'hormone sexuelle mâle.</br>"+
        "Pour parvenir à cette conclusion, une équipe de scientifiques de l'Université norvégienne de sciences et de technologie (NTNU) a demandé à un groupe de 18 hommes et 18 femmes de retrouver leur chemin dans un labyrinthe virtuel en utilisant des lunettes 3D et une manette. </br>"+
        "Plus exactement, les chercheurs de Trondheim (Norvège) ont demandé aux volontaires de mener à bien des tâches d'orientation à partir de différents points du labyrinthe, comme \"trouver la voiture jaune\", par exemple. Pendant ces différentes missions, les chercheurs mesuraient en continu l'activité cérébrale des participants au moyen d'une Imagerie par Résonance Magnétique (IRM)</p>"+
        "<h2>Meilleurs résultats avec les hommes</h2>"+
        "<p>Et les résultats rapportés par l'équipe sont sans appel. Publiés dans la revue Behavioural Brain Research, ils montrent que les hommes réussissaient mieux que les dames. Ils menaient à bien deux fois plus de tâches en prenant des raccourcis et en recourant à l'utilisation des points cardinaux (Nord, Sud, Est, Ouest) pour s'orienter. Les femmes, elles, ont utilisé d'autres stratégies, en utilisant souvent un certain itinéraire pour se rendre à leur destination plutôt qu'en se référent aux points cardinaux.</br>"+
        "Dans des propos relayés par Relaxnews, Carl Pintzka, l'auteur principal de l'étude, conclut que « le sens de l'orientation des hommes était plus efficace. Ils se rendaient plus rapidement à leur destination ». </p>"+
        "<h2>La testostérone pour s'orienter</h2>"+
        "<p>Durant la suite de l'expérience, ce même Carl Pintzka a fait appel à un autre groupe de 42 participantes qu'il a divisé en deux. 21 femmes ont reçu une goutte de testostérone sur la langue avant de prendre part au test, et les autres ont reçu un placebo. </br>"+
        "Résultat, de nombreuses femmes qui avaient reçu de la testostérone réussissaient mieux les tests que les autres. « Même si elles n'étaient pas capables de mener à bien un plus grand nombre de missions, elles utilisaient mieux les points cardinaux pour s'orienter, comme les hommes de la phase d'étude précédente », précise le chercheur."+
        "Enfin, les données ont également révélé que les deux sexes utilisent des parties différentes de leur cerveau pour s'orienter, les hommes ayant plus tendance à utiliser l'hippocampe – la partie du cerveau liée aux points cardinaux - que les femmes.</br>"+
        "Conclusion des chercheurs, comme la perte de repères géographiques est l'un des premiers symptômes d'Alzheimer, le Pr Pintzka espère que cette étude aidera d'autres scientifiques à mieux comprendre le développement de la maladie."+
        "Et comme deux fois plus de femmes souffrent de cette maladie, elle pourrait peut-être être liée aux hormones sexuelles, pense-t-il. Une hypothèse qui reste à confirmer…..</p>",
        picture:'',
        date:'04/03/2016'
      },
      {
        id:3,
        communityId:1,
        authorId:3,
        title:"La santé connectée pour les pharmaciens ?",
        content:"<p>Pour faire de la santé connectée un succès en pharmacie, il faut que ce nouveau champ apporte d’abord la preuve de son bénéfice. Plusieurs points stratégiques doivent être remplis :</p>"+
        "<ol><li>La fiabilité technique</li><li>La gestion des données de santé</li><li>La certification des objets connectés</li><li>La sécurisation et le risque de piratage à distance</li><li>Un modèle économique fiable et rentable</li></ol>"+
        "<blockquote>« Le marché va être colossal, mais ce ne sera pas un marché d’objets, ce sera un marché de solutions santé, soutient Lionel Reichardt, lors d’une conférence organisée sur le sujet à Lyon (Rhône) le 9 novembre, à l'occasion du congrès annuel du groupement. L’objet n’est que du plastique. Ne vous enfermez pas dans une posture de vendeur de plastique car j’en connais un qui n’attendra pas deux jours pour dire « moi je n’ai pas le droit de vendre du médicament et eux ils vendent du plastique ». Le conseil est une dimension forte et indispensable dans ce domaine. Pour cela, il faudra évidemment que les pharmaciens soient à l’aise avec le matériel et les applications, ce qui signifie qu’ils soient un minimum utilisateurs. »</blockquote>"+
        "<h2>Passer de la vente à l’abonnement</h2>"+
        "<p>Quant au modèle économique, il risque lui aussi de faire sortir les officinaux de leur zone de confort : « Demain le modèle ne sera plus l’achat, mais l’abonnement », prédit Lionel Reichardt. Et d’ajouter : « Les experts du domaine sont convaincus que la solution pour l’essor de la santé connectée, c’est le pharmacien et pas le vendeur de la Fnac. Bien entendu, la gestion de données de santé implique de répondre aux questions sur la responsabilité et la rémunération. » Cet avenir ensoleillé n’est pas à l’abri de nuages menaçants, met en garde Lionel Reichardt. « Les nouveaux entrants dans le paysage n’ont pas d’état d’âme. Ils ont identifié les pharmaciens comme des partenaires privilégiés, mais si ça ne marche pas… »</p>"+
        "<h2>Des patients prêts à partager</h2>"+
        "<p>En janvier 2015, un sondage IFOP/PHR destiné à mieux appréhender le regard des Français sur l’e-pharmacie et les objets connectés montrait que 65 % des clients souhaitent disposer d’une offre d’objets connectés dans leur pharmacie.</p>"+
        "<p>Pour 73 % des personnes interrogées, les objets connectés permettent de garantir un meilleur échange avec les professionnels de santé et plus de 77 % sont prêts à partager leurs informations personnelles, qu’il s’agisse de traitements, de données corporelles ou relatives au sommeil et à l’activité physique, avec leur pharmacien.</p>",
        picture:'',
        date:"04/03/2016"
      },
      {
        id:4,
        communityId:2,
        authorId:3,
        title:"DEBAT : aujourd'hui grève des agents de la fonction publique hospitalière !",
        content:"<p>Soumis à un régime de rigueur depuis juillet 2010, les 5,6 millions d'agents de la fonction publique sont appelés à faire grève et manifester pour une hausse de leur pouvoir d'achat, mardi, jour de mobilisation, parallèlement, des enseignants.</br>"+
        "Soumis à un régime de rigueur depuis juillet 2010, les 5,6 millions d'agents de la fonction publique sont appelés à faire grève et manifester pour une hausse de leur pouvoir d'achat, mardi, jour de mobilisation, parallèlement, des enseignants.</p>"+
        "<h2>Les revendications</h2>"+
        "<p>Outre la baisse du pouvoir d'achat, CGT, FO et Solidaires dénoncent 'la perte d'emplois dans des secteurs clés de la fonction publique'. Ils soulignent que si des créations de postes ont été annoncées dans l'Éducation (+ 8 561 en 2016) et la sécurité (+ 732 police-gendarmerie, + 978 justice en 2016), 'la fonction publique a perdu globalement 150 000 postes depuis 2007', principalement avant 2012. Les syndicats réclament 'des créations nettes d'emplois publics statutaires dans les très nombreux secteurs qui en ont besoin', notamment le monde hospitalier.</p>"+
        "<h2>Prudence ministérielle</h2>"+
        "<p>Sans exclure un dégel du point d'indice, la ministre de la Fonction publique, Marylise Lebranchu, a déjà prévenu que cette possible hausse ne serait 'sans doute pas à la hauteur de ce que demandent les syndicats'.</p>"+
        "<p>'Ce sera à des années-lumière de ce que nous souhaitons : a minima des mesures pour 2016 qui garantissent une hausse de la valeur du point au moins égale à l'inflation et des mesures de rattrapage significatives pour les pertes depuis 2010', estime Jean-Marc Canon de la CGT.</p>"+
        "'<p>Il n'y aura pas de bonnes nouvelles dans les quinze jours qui viennent', a réaffirmé Mme Lebranchu mercredi devant le Conseil supérieur de la fonction publique territoriale.</p>"+
        "<p>Fin 2014, 5,64 millions de personnes travaillaient dans la fonction publique : 2,4 millions dans la fonction publique d'État, 1,9 million dans la fonction publique territoriale et 1,18 million dans la fonction publique hospitalière avec les contrats aidés.</p>"+
        "<h2>Et vous qu'en pensez vous ?</h2>",
        picture:"../img/article/greve.jpg",
        date:"26/01/2016"
      },
      {
        id:5,
        communityId:1,
        authorId:3,
        title:"Alzheimer : voir la vieillesse en rose réduit le risque",
        content:"<p>Un esprit sain dans un corps sain. Rabelais, et Juvénal avant lui, ont certainement compris l’intérêt d’allier le bien-être physique et psychique. Depuis, les scientifiques ont multiplié les travaux qui démontrent le bien fondé de ce précepte. La dernière étude en date, parue dans Psychology and Aging, abonde dans ce sens. Elle suggère que les personnes âgées qui voient positivement leur vieillissement sont moins à risque de développer la maladie d’Alzheimer.</p>"+
        "<p>Cette étude s’est déroulée en deux temps. D’abord, les chercheurs ont analysé les IRM cérébrales des participants à l’étude longitudinale sur le vieillissement de Baltimore (Maryland, Etats-Unis), qui a démarré en 1958. Leur objectif : déterminer les différences entre les personnes qui voient leur âge avancé positivement ou négativement.</p>"+
        "<p>Les volontaires qui apprécient de manière pessimiste le vieillissement affichent des changements cérébraux associés au développement d’une maladie d’Alzheimer. En effet, le volume de l’hippocampe recule davantage.</p>"+
        "<p>Dans un deuxième temps, les chercheurs ont complété les travaux par des autopsies cérébrales. Le but était d’analyser deux biomarqueurs de la maladie d’Alzheimer : les dépôts de plaque amyloïde et les enchevêtrements neurofibrillaires. Là encore, les participants « pessimistes » présentaient davantage de signes d’Alzheimer que les autres.</p>"+
        "<p>« Nous pensons que le stress généré par ces pensées négatives provenant de la société est parfois intériorisé par les individus, ce qui peut entraîner des modifications pathologiques du cerveau, explique Becca Levy, principal auteur. Mais, même si ces résultats sont inquiétants, il est encourageant de voir que ces pensées négatives peuvent être modérées, et que les pensées positives peuvent être renforcées. Par conséquent, l’effet négatif n’est pas inévitable. » Un message plein d’espoir donc.</p>",
        picture:'',
        date:"25/01/2016"
      },
      {
        id:6,
        communityId:1,
        authorId:4,
        title:"Pesticides : une étude associe lait contaminé et maladie de Parkinson",
        content:"<p>Pendant des années, un pesticide, l'heptachlor, a été utilisé dans les maisons pour tuer les termites, et dans les exploitations agricoles, pour protéger les cultures de maïs. Des traces de ce produit avaient été retrouvées dans des bouteilles de lait et des produits laitiers dans les années 1980. L’heptachlor a été retiré du marché américain à partir de 1988.</p>"+
        "<p>Sa production et sa vente sont également interdites dans l'Union Européenne depuis 2004, par le règlement 850/2004. La France avait elle interdit le produit dès 1992.</p>"+
        "<p>Une étude, parue ce jeudi dans la revue scientifique Neurology dévoile un lien entre l’heptachlor et le développement de la maladie de Parkinson, chez des hommes qui avaient consommé du lait contaminé.</p>"+
        "<h2>Perte de cellules</h2>"+
        "<p>Les auteurs de ces travaux, de l’université de Sciences médicales de Shiga, au Japon, ont suivi 449 hommes américano- japonais. Ces derniers faisaient partis d’une cohorte étudiée sur plus de 30 ans, jusqu’à leur décès.</p>"+
        "<p>Les scientifiques se sont penchés sur la consommation de lait de ces participants, et ont pratiqué une série d’autopsies afin d’analyser l’état du cerveau de 116 d'entre eux. Ils voulaient notamment déterminer l’ampleur de la perte de neurones, au niveau de la substance noire, qui constitue un signe avant-coureur de la maladie de Parkinson.</p>"+
        "<p>Les scientifiques ont d’abord découvert des traces d’heptachlor dans le cerveau de 90 % des personnes qui rapportaient la consommation la plus élevée de lait. Le pesticide a également été retrouvé chez 63 % de ceux qui n’en buvaient jamais.</p>"+
        "<h2>L'association lait-Parkinson</h2>"+
        "<p>Les individus non fumeurs, mais buveurs de lait, étaient près de 43 % à présenter une perte significative de cellules dans la substance noire. Etrangement, cette association n'est pas retrouvée chez les buveurs de lait qui, par ailleurs, étaient fumeurs.</p>"+
        "<p>Si les chercheurs sont dans l’impossibilité de conclure que la consommation de lait contenant de l’heptaclor a causé effectivement la maladie de Parkinson, ils soulignent une association significative entre les deux.</p>",
        picture:'',
        date:"25/01/2016"
      },
      {
        id:7,
        communityId:1,
        authorId:3,
        title:"Les dangers des appareils dentaires 'fait maison'",
        content:"<p>« Un sourire de rêve en quelques semaines », « des dents bien alignées grâce à une technique maison», « une dentition parfaite sans frais de dentiste » ... telles sont les promesses que font certaines vidéos d'amateurs partagées sur le Web, et qui ont alerté la Fédération Française d'Orthodontie.</p>"+
        "</p>Celle-ci s'inquiète de ce phénomène de mode qui touche principalement les adolescents. Ces jeunes seraient de plus en plus nombreux à s'inspirer de tutoriels publiés sur Youtube pour fabriquer euxmêmes leur propre dispositif othodontique afin de redresser leurs dents."+
        "<h2>Des risques non anodins</h2>"+
        "<p>La pratique la plus répandue consisterait à insérér un petit élastique autour des dents écartées, pour les resserrer. Or, comme l'explique la Fédération Française d'Orthodontie, les personnes qui suivent ce conseil s'exposent à des risques très importants.</p>"+
        "<p>Elles peuvent notamment subir une infection de la gencive, et leurs dents peuvent être déplacées dans la mauvaise direction. Pire, l'élastique peut pénétrer la gencive, celle-ci ne retenant alors plus les dents qui peuvent donc tomber.</p>"+
        "<h2>Budget... et mode</h2>"+
        "<p>Jusqu'à présent, la plupart des problèmes avaient surtout été observés aux Etats-Unis et en Asie. Dans ces deux régions du monde, les traitements orthodontiques peuvent être très coûteux en l'absence d'une bonne assurance maladie. Plusieurs des adolescents à l'origine des tutoriels qui prolifèrent sur le Web l'ont bien compris. Ils avancent cet argument financier pour encourager les internautes à les imiter.</p>"+
        "<p>Mais la France n'est plus épargnée. Récemment, un jeune garçon de 12 ans a été conduit en urgence à l'hôtal Pitié-Salpêtrière, après avoir perdu deux dents qu'il tentait de rapprocher. A la suite de cette affaire, la Fédération Française d'Orthodontie a décidé de communiquer.</p>"+
        "<p>Dans un pays comme la France, où les mutuelles et la CMU permettent d'accéder plus facilement à des soins de santé, les jeunes cèdent plutôt à un effet de mode en imitant d'autres adolescents de leur âge. Une tendance que les parents et les professionnels de santé doivent donc apprendre à repérer et à prévenir , avant qu'elle ne se diffuse plus largement dans l'Hexagone.</p>"+
        "<p>Même ci certains tutoriels promettent, preuves à l'appui, des résultats impressionnants à bas coût, les conséquences pour la santé peuvent être désastreuses.</p>",
        picture:'',
        date:"25/01/2016"
      },
      {
        id:8,
        communityId:2,
        authorId:4,
        title:"Après le décès du quatrième patient, Carmat ne répond plus",
        content:"<p>Le 22 décembre dernier, dans la plus grande discrétion, une équipe de la Pitié-Salpêtrière implantait le cœur artificiel développé par l'entreprise Carmat sur un quatrième patient, âgé de 58 ans. 'Malgré tous les efforts de l’équipe, le patient est décédé de complications médicales non liées à la prothèse', précise le professeur Pascal Leprince, chef de Service à l'Institut de cardiologie de l'hôpital.</p>"+
        "<p>Le cœur artificiel ne serait donc pas à l'origine du décès du quinquagénaire. Un détail qui a son importance, alors que le deuxième patient ayant reçu le dispositif médical de Carmat était décédé subitement, une dérive fonctionnelle de la prothèse avait alors été pointée du doigt.</p>"+
        "<p>'Au terme de cet essai, le système Carmat cumule une expérience clinique de 21 mois de fonctionnement. Carmat prépare l’essai clinique pivot', se félicite la société dans le communiqué. Rien d'alarmant donc, à en croire le français. A 17h35 ce 21 janvier, le titre a même grimpé de 12,5% pour s'établir à 33,5 euros l'action.</p>"+
        "<p>Pourtant, ce quatrième décès soulève de nombreuses interrogations… auxquelles Carmat n'a pas souhaité répondre.</p>"+
        "<h2>LE CRITÈRE DE RÉUSSITE : 30 JOURS DE SURVIE</h2>"+
        "<p>En novembre dernier, lorsque l'entreprise a reçu l'autorisation pour opérer un quatrième patient, L'Usine Nouvelle interrogeait Patrick Coulombier, son directeur général adjoint. Il expliquait alors que l'enjeu de cette implantation était l'aboutissement - et la réussite - de la phase de faisabilité durant laquelle est observée uniquement la sécurité du patient.</p>"+
        "<p>A ce stade de l'essai clinique, le but était que chaque patient survive un mois avec le cœur artificiel. Le 1er patient avait survécu 74 jours, le second 9 mois, le troisième un peu plus de 8 mois. Ce qui faisait dire à Patrick Coulombier que le cœur artificiel était en bonne position pour obtenir l'accord de l'agence nationale de sécurité du médicament (ANSM) pour l'étape suivante, l'essai clinique Pivot… Une fois que le 4ème patient aurait survécu au moins un mois avec le dispositif, prenait-il alors la peine de préciser.</p>"+
        "<p>Et dans un communiqué de presse daté du 8 septembre 2014, Carmat écrivait bien que l'essai clinique devait inclure quatre patients et que les critères de succès comportent - entre autres - la survie 30 jours après l’implantation et la récupération fonctionnelle des organes vitaux. Or pour cette dernière implantation - qui devait assurer le succès l'essai clinique de faisabilité - ce critère ne semble pas avoir été atteint. </p>"+
        "<h2>UNE COMMUNICATION BIEN MAÎTRISÉE</h2>"+
        "<p>L'opération sur le quatrième patient s'est déroulée le 22 décembre. Et si Carmat a pris le soin d'annoncer son décès ce 21 janvier, donc 30 jours après l'opération, il ne précise toutefois pas la date exacte de la mort. Le délai d'un mois semblerait ne pas avoir été atteint. Si c'est le cas, Carmat obtiendra-t-il l'indispensable feu vert de l'agence pour lancer l'essai clinique Pivot ? </p>"+
        "<p>Pour le moment, c'est silence radio, du côté de Carmat. Idem du côté de la Pitié Salpêtrière qui nous a rétorqué 'ne pas être concerné' : 'la ligne de conduite que l'on a eu, c'est que Carmat communique'. Même son de cloche à l'ANSM, où l'on nous explique que le protocole de l'essai clinique est la propriété de Carmat. L'agence est donc tenue à la confidentialité."+
        "<p>D'un point de vue éthique, ce mode de communication soulève un ensemble de questions, a commenté Emmanuel Hirsch, professeur d'éthique médicale à l'Université Paris Sud. C'est de la communication industrielle, pas de l'information médicale […] Cela donne l'impression d'une opacité organisé'.</p>"+
        "<h2>LES CRITÈRES DE RECRUTEMENT DES PATIENTS AVAIENT ÉTÉ ÉLARGIS</h2>"+
        "<p>Par ailleurs, en novembre, l'ANSM et le CPP (Comité de Protection des Personnes) ont autorisé l'élargissement des critères de recrutement des patients, grâce aux données intermédiaires issues des premières implantations. Jusqu’à présent, le protocole permettait d’inclure dans l’étude uniquement les personnes non éligibles à la transplantation, en phase terminale d’insuffisance cardiaque biventriculaire irréversible.</p>"+
        "<p>En toute logique, la phase post-opératoire aurait donc dû être moins problématique pour ce quatrième patient. Et on aurait pu penser qu'il survivrait plus longtemps. Sur ce point non plus, Carmat ne donnera pas d'éclaircissement. La société communiquera dans quelques semaines. Ce fût la réponse lapidaire que nous avons pu obtenir de son service presse.</p>",
        picture:'',
        date:"25/01/2016"
      },
      {
        id:9,
        communityId:2,
        authorId:1,
        title:"Infirmier(e) DE Cadre URGENT",
        content:"<p>Nous recherchons pour notre client un(e) infirmier(e) diplômé(e) d'Etat Cadre ou Cadre de Santé dans le cadre d'un CDI à temps complet dans une structure récente d'environ 80 places sur Strasbourg.</p>"+
        "<p>En étroite collaboration avec le médecin, vos tâches seront de :</p>"+
        "<ul><li>- gérer une équipe pluridisciplinaires,</li><li>- organiser le planning,</li><li>- suivre les projets de la structure (animation, communication, etc..)</li>"+
        "<p>Nous recherchons un(e) Infirmier(e) Diplômé(e) d'État Cadre ou Cadre de Santé expérimenté(e).</p>"+
        "<p>Compétences recherchées : </p>"+
        "<ul><li>- Esprit d'équipe, </li><li>- Volontaire, </li><li>- Organisé(e), tout en sachant s'adapter,</li><li>- Sens du relationnel,</li><li>- Force de proposition, </li><li>- Ambition professionnelle.</li>"+
        "<p>Fort(e) d'une expérience réussie au sein d'un établissement de Santé, vous souhaitez mettre à profit vos compétences dans une structure récente en plein développement. </p>"+
        "<p>Vous êtes professionnel(le), autonome et rigoureux(se), envoyez-nous votre candidature à : metiers-sante@wolf-interim.com</p>",
        picture:'',
        date:"21/01/2016"
      },
      {
        id:10,
        communityId:1,
        authorId:2,
        title:"Remplacement infirmier(e) liberal(e)",
        content:"<p>Cabinet infirmier proche de Caen recherche remplaçant(e) pour 4 à 5 jours mensuels (un WE inclus). volume de remplacement plus important en juillet/aout. Poste à pourvoir de suite. Premier contact par mail.</p>",
        picture:'',
        date:"21/01/2016"
      },
      {
        id:11,
        communityId:2,
        authorId:3,
        title:"Infirmier de pratique avancée en oncologie : un besoin plus qu'urgent",
        content:"<p>Les 8e Rencontres de la Cancérologie Française (RCFr), qui se sont tenues en décembre dernier à Paris, ont réuni patients et professionnels de santé autour d'une problématique importante : celle du parcours de soins en oncologie. Car en effet, de sa qualité dépend l'espérance de vie des patients ainsi que les probabilités de guérison.</p>"+
        "<p>Mais, pour optimiser ce parcours, encore faut-il une amélioration de la coordination des soins. Dans une telle démarche de qualité, il semble donc de plus en plus nécessaire que les fonctions d'infirmier en oncologie évolue vers de nouvelles responsabilités.</p>"+
        "<p>'Il reste beaucoup de dysfonctionnements dans le système. Pourtant, cela nous paraît essentiel qu'un lien efficace soit assuré dans les soins. Mais, pour cela, de nouvelles formations, de nouveaux métiers et de nouvelles compétences sont nécessaires, notamment pour les infirmiers. De fait, nous souhaitons une universitarisation de la profession infirmière afin qu'une pratique avancée soit enfin possible'</p>"+
        "<p>réagit le Professeur Véronique Trillet-Lenoir, chef du service d'oncologie médicale du CH Lyon-Sud et Professeur en cancérologie à l'Université Claude Bernard</p>"+
        "<p>Lyon 1. L'infirmière clinicienne a été annoncée dans la stratégie nationale de santé, la loi de santé et le plan cancer III. 2016 devrait être lannée de la sortie de ce nouveau statut. Toutefois, de nombreuses questions en suspens tendent à créer un scepticisme autour de cette attente.</p>"+
        "<p>Toutefois, de nombreuses questions en suspens tendent à créer un scepticisme autour de cette attente.</p>"+
        "<p>Si le métier d'infirmier clinicien existe déjà dans les pays anglo-saxons, il peine à émerger en France du fait de plusieurs problématiques. Parmi elles, l'aspect financier. En effet, chaque année, un infirmier diplômé d’État coûte en moyenne 50 000 euros, charges patronales incluses. Mais quid d'un infirmier de pratique avancée en oncologie (IPAO) ? La délicate question de la rémunération de ces nouveaux professionnels retarde l'entrée en formation des potentiels candidats.</p>",
        picture: '',
        date:'21/01/2016'
      },
      {
        id:12,
        communityId:3,
        authorId:4,
        title:"Consultation à distance en cardiologie : une première mondiale en Limousin",
        content:"<p>Dépistage des cardiopathies, amélioration des traitements liés à l’insuffisance cardiaque… Depuis le 16 novembre 2015, Lubersac, commune du Nord de la Corrèze, est à la pointe des technologies en matière de télémédecine. Elle expérimente auprès de 25 patients, la télé-échographie cardiaque. « Une première mondiale », explique Adechotech, la société qui a adapté son robot Melody. Les professionnels de santé, qui voient déjà tous les bienfaits pour les populations rurales de cette nouvelle offre de soins, sont enthousiastes.</p>"+
        "<h2>Bras robotisé</h2>"+
        "<p>Concrètement, un bras robotisé portant une sonde ultrasonore est placé sur le thorax du patient installé dans ce que l’on appelle « le centre patient ».</p>"+
        "<p>Dans le « centre expert », donc à distance, le cardiologue dirige les mouvements de la sonde à l’aide d’un joystick et réalise son diagnostic en direct et en temps réel.</p>"+
        "<p>« Le but de la télé-échographie robotisée, c’est que l’expert soit le plus proche possible de son exercice quotidien. Il vaut mieux bénéficier d’une échographie bien faite à distance que pas du tout » , explique Eric Lefebvre, président d’Adechotech.</p>"+
        "<p>Ce robot répond aux contraintes médicales et techniques et ouvre de nombreuses possibilités. Ses applications sont envisagées pour traiter les pathologies cardiaques comme ici en milieu rural où l’on se situe à 40 minutes en voiture d’un hôpital, mais aussi en centre de détention, sur un bateau, en zone médicale isolée comme une station de sports d’hiver, sur une plateforme pétrolière etc...</p>"+
        "<p>« En matière de cardiologie, on est à la recherche de l’image. Avoir l’image ça change tout, ça corrige le diagnostic, ça nous permet d’ajuster le traitement en temps réel. On a des patients essoufflés ? On veut savoir si c’est à cause de la respiration ou du cœur ? L’échographie va rapidement nous aider. C’est une révolution », confirme Patrick Dary, cardiologue, qui va monter un dossier avec le résultat des tests réalisés à Lubersac pour espérer voir financer cet équipement. Pour l’heure, ce n’est qu’un prototype.</p>"+
        "<h2>Premiers essais cliniques</h2>"+
        "<p>« On est les premiers à avoir fait des essais cliniques sur 25 patients. Le robot repart demain (ndlr ce soir) sur le centre d’études spatiales à Toulouse. Nous allons déposer un dossier de recherches auprès de la Société française de cardiologie pour avoir une bourse de recherche afin de faire l’acquisition de ce robot ».</p>"+
        "<p>Le docteur Dary se montre d’autant plus optimiste que le directeur de l’Agence régionale de santé du Limousin, Philippe Calmette, présent hier, s’est montré enthousiaste. « Un des objectifs de l’ARS, c’est de garantir l’accès aux soins pour tous. L’éloignement peut entraîner du renoncement. La télé médecine réduit les distances et donc les inégalités d’accès aux soins ».</p>"+
        "<p>Si l’essai venait à se transformer, Lubersac devrait attendre environ un an avant de disposer de cette nouvelle technologie.</p>",
        picture:"img/article/consult.jpg",
        date:'21/01/2016'
      }
    ];

    return {
        getAll: function() {
            return articles;
        },
        getByCommunity: function(communityId) {
            subArticles = [];
            articles.forEach(function(element, index, array) {
                if(element.communityId == communityId) {
                    subArticles.push(element);
                }
            });
            return subArticles;
        },
        get: function(articleId) {
            return null;
        },
        getAuthor: function(personId) {
            return ProfilService.get(personId);
        }
    };
}])

.factory('CommunityService', function() {
    var communities = [
        { id: 0, label: "Dentiste", description: "texte", communityManagerId: 2, relatedCommunities: [1,3,4] },
        { id: 1, label: "Médecin", description: "texte", communityManagerId: 1, relatedCommunities: [1,2] },
        { id: 2, label: "Infirmière", description: "texte", communityManagerId: 3, relatedCommunities: [0,2,4] },
        { id: 3, label: "Kinésithérapeute", description: "texte", communityManagerId: 4, relatedCommunities: [1,3,4] },
        { id: 4, label: "Chirurgie", description: "texte", communityManagerId: 4, relatedCommunities: [3,4] }
    ];

    return {
        get: function(communityId) {
            return communities[communityId];
        },
        getCommunities(communityId=0){
            subCommunities = [];
            communities[communityId].relatedCommunities.forEach(
                function (element, index, array) {
                    subCommunities.push(communities[element]);
                }
            );
            return subCommunities;
        }
    };
});
