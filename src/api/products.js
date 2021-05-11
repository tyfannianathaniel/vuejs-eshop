const products = [
    {
        'id': 1,
        'title': "T-Shirt 100% Coton Fitness Sportee Noir",
        'brand': 'Byamba',
        'images': [
            {
                "id": 1,
                "filename": "t-shirt-100-coton-fitness-sportee-noir.webp",
                "alt": "T-Shirt de sport noir",
            },
        ],
        'description': "C'est le t-shirt basique par excellence, simple et efficace, qui trouve forcément sa place dans votre dressing de sportif… ou dans la vie de tous les jours",
        'quantity': 42,
        'price': 22.0,
        'on_sale': true,
    },
    {
        'id': 2,
        'title': "T-Shirt Manches Longues Running Homme Noir",
        'brand': 'Arbor',
        'images': [
            {
                "id": 1,
                "filename": "tee-shirt-manches-longues-running-homme-respirant-kalenji-dry-noir.webp",
                "alt": "T-Shirt de sport manches longues noir",
            },
        ],
        'description': "Notre équipe de concepteurs a développé ce t-shirt manches longues homme respirant afin de rendre vos footings printaniers ou automnals confortables.",
        'quantity': 0,
        'price': 14.0,
        'on_sale': true,
    },
    {
        'id': 3,
        'title': "T-Shirt Coton Extensible Fitness",
        'brand': 'Noway',
        'images': [
            {
                "id": 1,
                "filename": "t-shirt-coton-extensible-fitness.webp",
                "alt": "T-Shirt en coton extensible",
            },
        ],
        'description': "La qualité au bon prix pour ce t-shirt qui offre une excellente liberté de mouvements. Parfait pour être stylé à la salle de sport… et même ailleurs !",
        'quantity': 128,
        'price': 3.14,
        'on_sale': false,
    },
    {
        'id': 4,
        'title': "T-Shirt D'Escalade Coton Homme Bordeaux",
        'brand': 'Eskal',
        'images': [
            {
                "id": 1,
                "filename": "t-shirt-descalade-vertika-homme-bordeaux.webp",
                "alt": "T-Shirt d'escalade bordeaux",
            },
        ],
        'description': "Développé avec notre team de grimpeurs, pour assurer votre confort, que vous grimpiez sans relâche ou que vous assuriez au pied de la voie.",
        'quantity': 24,
        'price': 22.0,
        'on_sale': true,
    },
    {
        'id': 5,
        'title': "T-Shirt D'Escalade Laine Merinos Homme Bleu-Gris",
        'brand': 'Eskal',
        'images': [
            {
                "id": 1,
                "filename": "t-shirt-descalade-laine-merinos-edge-homme-bleu-gris.webp",
                "alt": "T-Shirt d'escalade en laine Merinos",
            },
        ],
        'description': "Conçu en laine mérinos, naturellement douce et respirante, pour les grimpeurs recherchant confort et limitations d'odeurs pendant l'effort.",
        'quantity': 12,
        'price': 20.0,
        'on_sale': true,
    },
    {
        'id': 6,
        'title': "T-shirt technique Fitness gris chiné",
        'brand': 'Dyomos',
        'images': [
            {
                "id": 1,
                "filename": "t-shirt-technique-fitness-gris-chine.webp",
                "alt": "T-shirt technique Fitness gris chiné",
            },
        ],
        'description': "Combinant un tissu respirant et un design classique, ce T-shirt masculin est votre essentiel de fitness cardio training.",
        'quantity': 2,
        'price': 3,
        'on_sale': true,
    },
    {
        'id': 7,
        'title': "T-shirt 100% MESH Fitness Cardio",
        'brand': 'Dyomos',
        'images': [
            {
                "id": 1,
                "filename": "t-shirt-100-mesh-fitness-cardio-training-homme-blanc-eco-concu-500.webp",
                "alt": "T-shirt 100% MESH Fitness Cardio",
            },
        ],
        'description': "En plus d'être éco-conçu, ce T-shirt est composé à 100% de Mesh! Ce type de textile à maille large permet une respirabilité optimale.",
        'quantity': 0,
        'price': 15,
        'on_sale': true,
    },
    {
        'id': 8,
        'title': "T-shirt Basketball Homme",
        'brand': 'Carnak',
        'images': [
            {
                "id": 1,
                "filename": "nope",
                "alt": "T-shirt Basketball Homme",
            },
        ],
        'description': "Ce maillot conçu pour la pratique du basket est très léger et très doux. ",
        'quantity': 2,
        'price': 6,
        'on_sale': true,
    },
]

export default {
    getProducts (cb) {
        setTimeout( () => cb(products), 1000)
    }
}