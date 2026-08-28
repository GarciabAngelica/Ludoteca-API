INSERT INTO games (
    name,
    description,
    category,
    min_players,
    max_players,
    min_age,
    stock,
    tags
)
VALUES
(
    'Catan',
    'Juego de estrategia, comercio y construccion de asentamientos.',
    'Strategy',
    3,
    4,
    10,
    5,
    ARRAY['strategy', 'trade', 'family']
),
(
    'Ticket to Ride',
    'Juego de estrategia basado en construir rutas ferroviarias.',
    'Strategy',
    2,
    5,
    8,
    3,
    ARRAY['strategy', 'trains', 'family']
),
(
    'Carcassonne',
    'Juego de colocacion de losetas y control de territorio.',
    'Strategy',
    2,
    5,
    7,
    4,
    ARRAY['strategy', 'tiles', 'medieval']
),
(
    'Pandemic',
    'Juego cooperativo donde los jugadores combaten enfermedades alrededor del mundo.',
    'Cooperative',
    2,
    4,
    8,
    2,
    ARRAY['cooperative', 'strategy', 'team']
),
(
    'Forbidden Island',
    'Juego cooperativo donde los jugadores buscan tesoros antes de que la isla se hunda.',
    'Cooperative',
    2,
    4,
    10,
    3,
    ARRAY['cooperative', 'adventure', 'family']
),
(
    'Uno',
    'Juego de cartas familiar donde los jugadores intentan quedarse sin cartas.',
    'Card',
    2,
    10,
    7,
    8,
    ARRAY['cards', 'family', 'party']
),
(
    'Exploding Kittens',
    'Juego de cartas rapido donde los jugadores intentan evitar cartas explosivas.',
    'Card',
    2,
    5,
    7,
    6,
    ARRAY['cards', 'party', 'humor']
),
(
    'Sushi Go!',
    'Juego de cartas donde los jugadores crean combinaciones de platos de sushi.',
    'Card',
    2,
    5,
    8,
    4,
    ARRAY['cards', 'family', 'drafting']
),
(
    'Dixit',
    'Juego creativo de cartas ilustradas basado en pistas y narracion.',
    'Party',
    3,
    8,
    8,
    5,
    ARRAY['party', 'cards', 'creative', 'family']
),
(
    'Codenames',
    'Juego por equipos basado en palabras, pistas y asociaciones.',
    'Party',
    4,
    8,
    10,
    3,
    ARRAY['party', 'words', 'team']
),
(
    'Just One',
    'Juego cooperativo de palabras donde los jugadores dan pistas para descubrir una palabra.',
    'Party',
    3,
    7,
    8,
    4,
    ARRAY['party', 'words', 'cooperative']
),
(
    'Chess',
    'Juego abstracto de estrategia para dos jugadores.',
    'Abstract',
    2,
    2,
    6,
    0,
    ARRAY['strategy', 'abstract', 'classic']
),
(
    'Checkers',
    'Juego clasico de estrategia para dos jugadores.',
    'Abstract',
    2,
    2,
    6,
    3,
    ARRAY['abstract', 'classic', 'strategy']
),
(
    'Azul',
    'Juego abstracto de colocacion de azulejos y patrones.',
    'Abstract',
    2,
    4,
    8,
    2,
    ARRAY['abstract', 'tiles', 'strategy']
),
(
    'King of Tokyo',
    'Juego de dados donde monstruos compiten por controlar Tokyo.',
    'Family',
    2,
    6,
    8,
    5,
    ARRAY['family', 'dice', 'monsters']
),
(
    'Kingdomino',
    'Juego familiar de construccion de reinos utilizando fichas similares al domino.',
    'Family',
    2,
    4,
    8,
    4,
    ARRAY['family', 'tiles', 'strategy']
),
(
    'Dobble',
    'Juego rapido de observacion y reflejos para toda la familia.',
    'Family',
    2,
    8,
    6,
    7,
    ARRAY['family', 'party', 'speed']
),
(
    '7 Wonders',
    'Juego de desarrollo de civilizaciones mediante seleccion de cartas.',
    'Strategy',
    3,
    7,
    10,
    2,
    ARRAY['strategy', 'cards', 'civilization']
),
(
    'The Resistance',
    'Juego de deduccion social con identidades ocultas y equipos enfrentados.',
    'Party',
    5,
    10,
    13,
    0,
    ARRAY['party', 'social', 'deduction', 'team']
),
(
    'Splendor',
    'Juego de estrategia donde los jugadores coleccionan gemas y desarrollan su comercio.',
    'Strategy',
    2,
    4,
    10,
    3,
    ARRAY['strategy', 'cards', 'family']
);