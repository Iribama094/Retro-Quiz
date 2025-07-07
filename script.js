// Question Database
const questionDatabase = {
    general: [
        { question: "What is the capital of Australia?", answers: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2 },
        { question: "Which planet is known as the Red Planet?", answers: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
        { question: "What is the largest ocean on Earth?", answers: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
        { question: "Who painted the Mona Lisa?", answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"], correct: 2 },
        { question: "What is the smallest country in the world?", answers: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: 1 },
        { question: "Which element has the chemical symbol 'O'?", answers: ["Gold", "Oxygen", "Silver", "Iron"], correct: 1 },
        { question: "What is the tallest mountain in the world?", answers: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"], correct: 2 },
        { question: "Which continent is the largest by area?", answers: ["Africa", "North America", "Asia", "Europe"], correct: 2 },
        { question: "What is the currency of Japan?", answers: ["Yuan", "Won", "Yen", "Rupee"], correct: 2 },
        { question: "Who wrote 'Romeo and Juliet'?", answers: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: 1 },
        { question: "What is the hardest natural substance?", answers: ["Gold", "Iron", "Diamond", "Platinum"], correct: 2 },
        { question: "Which country has the most time zones?", answers: ["Russia", "USA", "China", "Canada"], correct: 0 },
        { question: "What is the largest mammal in the world?", answers: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"], correct: 1 },
        { question: "Which gas makes up most of Earth's atmosphere?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 2 },
        { question: "What is the longest river in the world?", answers: ["Amazon", "Nile", "Mississippi", "Yangtze"], correct: 1 },
        { question: "Which country invented pizza?", answers: ["Greece", "Italy", "France", "Spain"], correct: 1 },
        { question: "What is the speed of light?", answers: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], correct: 0 },
        { question: "Which organ in the human body produces insulin?", answers: ["Liver", "Kidney", "Pancreas", "Heart"], correct: 2 },
        { question: "What is the most spoken language in the world?", answers: ["English", "Spanish", "Mandarin Chinese", "Hindi"], correct: 2 },
        { question: "Which planet is closest to the Sun?", answers: ["Venus", "Mercury", "Earth", "Mars"], correct: 1 },
        { question: "What is the largest desert in the world?", answers: ["Sahara", "Gobi", "Antarctica", "Arabian"], correct: 2 },
        { question: "Who invented the telephone?", answers: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Benjamin Franklin"], correct: 1 },
        { question: "What is the chemical formula for water?", answers: ["CO2", "H2O", "NaCl", "CH4"], correct: 1 },
        { question: "Which country is known as the Land of the Rising Sun?", answers: ["China", "South Korea", "Japan", "Thailand"], correct: 2 },
        { question: "What is the largest bone in the human body?", answers: ["Skull", "Femur", "Spine", "Ribcage"], correct: 1 }
    ],
    science: [
        { question: "What is the atomic number of carbon?", answers: ["4", "6", "8", "12"], correct: 1 },
        { question: "Which scientist developed the theory of relativity?", answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"], correct: 1 },
        { question: "What is the powerhouse of the cell?", answers: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"], correct: 2 },
        { question: "Which gas is most abundant in Earth's atmosphere?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correct: 2 },
        { question: "What is the study of earthquakes called?", answers: ["Geology", "Seismology", "Meteorology", "Oceanography"], correct: 1 },
        { question: "Which planet has the most moons?", answers: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 1 },
        { question: "What is the pH of pure water?", answers: ["6", "7", "8", "9"], correct: 1 },
        { question: "Which blood type is known as the universal donor?", answers: ["A", "B", "AB", "O"], correct: 3 },
        { question: "What is the smallest unit of matter?", answers: ["Molecule", "Atom", "Electron", "Proton"], correct: 1 },
        { question: "Which force keeps planets in orbit around the Sun?", answers: ["Magnetic force", "Gravitational force", "Nuclear force", "Electric force"], correct: 1 },
        { question: "What is the chemical symbol for gold?", answers: ["Go", "Gd", "Au", "Ag"], correct: 2 },
        { question: "Which organ is responsible for filtering blood?", answers: ["Liver", "Lungs", "Kidneys", "Heart"], correct: 2 },
        { question: "What is the speed of sound in air at room temperature?", answers: ["343 m/s", "300 m/s", "400 m/s", "500 m/s"], correct: 0 },
        { question: "Which scientist is known for the laws of motion?", answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Johannes Kepler"], correct: 1 },
        { question: "What is the most abundant element in the universe?", answers: ["Oxygen", "Carbon", "Hydrogen", "Helium"], correct: 2 },
        { question: "Which part of the brain controls balance?", answers: ["Cerebrum", "Cerebellum", "Brainstem", "Hippocampus"], correct: 1 },
        { question: "What is the chemical formula for methane?", answers: ["CH4", "CO2", "H2O", "NH3"], correct: 0 },
        { question: "Which type of radiation has the shortest wavelength?", answers: ["Radio waves", "Microwaves", "X-rays", "Gamma rays"], correct: 3 },
        { question: "What is the process by which plants make food?", answers: ["Respiration", "Photosynthesis", "Transpiration", "Germination"], correct: 1 },
        { question: "Which planet is known for its prominent ring system?", answers: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 1 },
        { question: "What is the hardest substance known to science?", answers: ["Diamond", "Graphene", "Tungsten", "Titanium"], correct: 0 },
        { question: "Which scientist discovered penicillin?", answers: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Gregor Mendel"], correct: 1 },
        { question: "What is the study of heredity called?", answers: ["Genetics", "Evolution", "Ecology", "Anatomy"], correct: 0 },
        { question: "Which gas is produced during photosynthesis?", answers: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"], correct: 2 },
        { question: "What is the largest organ in the human body?", answers: ["Liver", "Brain", "Lungs", "Skin"], correct: 3 }
    ],
    history: [
        { question: "In which year did World War II end?", answers: ["1944", "1945", "1946", "1947"], correct: 1 },
        { question: "Who was the first President of the United States?", answers: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"], correct: 2 },
        { question: "Which ancient wonder of the world was located in Alexandria?", answers: ["Hanging Gardens", "Lighthouse", "Colossus", "Mausoleum"], correct: 1 },
        { question: "The Berlin Wall fell in which year?", answers: ["1987", "1988", "1989", "1990"], correct: 2 },
        { question: "Who was known as the 'Iron Lady'?", answers: ["Angela Merkel", "Margaret Thatcher", "Golda Meir", "Indira Gandhi"], correct: 1 },
        { question: "Which empire was ruled by Julius Caesar?", answers: ["Greek", "Roman", "Byzantine", "Ottoman"], correct: 1 },
        { question: "The French Revolution began in which year?", answers: ["1789", "1799", "1779", "1769"], correct: 0 },
        { question: "Who painted the ceiling of the Sistine Chapel?", answers: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"], correct: 2 },
        { question: "Which country gifted the Statue of Liberty to the USA?", answers: ["Britain", "France", "Spain", "Italy"], correct: 1 },
        { question: "The Titanic sank in which year?", answers: ["1910", "1911", "1912", "1913"], correct: 2 },
        { question: "Who was the first man to walk on the moon?", answers: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"], correct: 1 },
        { question: "Which war was fought between the North and South in America?", answers: ["Revolutionary War", "Civil War", "War of 1812", "Spanish-American War"], correct: 1 },
        { question: "The Great Wall of China was built to defend against which people?", answers: ["Mongols", "Japanese", "Russians", "Koreans"], correct: 0 },
        { question: "Who wrote the Communist Manifesto?", answers: ["Vladimir Lenin", "Karl Marx", "Joseph Stalin", "Leon Trotsky"], correct: 1 },
        { question: "Which Egyptian queen was known for her relationships with Julius Caesar and Mark Antony?", answers: ["Nefertiti", "Hatshepsut", "Cleopatra", "Ankhesenamun"], correct: 2 },
        { question: "The Renaissance began in which country?", answers: ["France", "Germany", "Italy", "Spain"], correct: 2 },
        { question: "Who was the British Prime Minister during most of World War II?", answers: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"], correct: 1 },
        { question: "The Hundred Years' War was fought between which two countries?", answers: ["England and France", "Spain and Portugal", "Germany and Austria", "Italy and Greece"], correct: 0 },
        { question: "Which explorer is credited with discovering America?", answers: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"], correct: 1 },
        { question: "The Black Death occurred in which century?", answers: ["13th", "14th", "15th", "16th"], correct: 1 },
        { question: "Who was the last Tsar of Russia?", answers: ["Alexander III", "Nicholas II", "Alexander II", "Nicholas I"], correct: 1 },
        { question: "The Magna Carta was signed in which year?", answers: ["1205", "1215", "1225", "1235"], correct: 1 },
        { question: "Which ancient civilization built Machu Picchu?", answers: ["Aztec", "Maya", "Inca", "Olmec"], correct: 2 },
        { question: "The Cold War was primarily between which two superpowers?", answers: ["USA and China", "USA and USSR", "Britain and Germany", "France and Russia"], correct: 1 },
        { question: "Who was assassinated in Sarajevo in 1914, sparking World War I?", answers: ["Kaiser Wilhelm", "Archduke Franz Ferdinand", "Tsar Nicholas", "King George V"], correct: 1 }
    ],
    movies: [
        { question: "Which movie won the Academy Award for Best Picture in 2023?", answers: ["Top Gun: Maverick", "Everything Everywhere All at Once", "The Banshees of Inisherin", "Avatar: The Way of Water"], correct: 1 },
        { question: "Who directed the movie 'Inception'?", answers: ["Steven Spielberg", "Christopher Nolan", "Martin Scorsese", "Quentin Tarantino"], correct: 1 },
        { question: "Which actor played the Joker in 'The Dark Knight'?", answers: ["Joaquin Phoenix", "Jack Nicholson", "Heath Ledger", "Jared Leto"], correct: 2 },
        { question: "What is the highest-grossing film of all time?", answers: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"], correct: 2 },
        { question: "Which movie features the song 'My Heart Will Go On'?", answers: ["The Bodyguard", "Titanic", "Ghost", "Dirty Dancing"], correct: 1 },
        { question: "Who played Forrest Gump?", answers: ["Tom Cruise", "Tom Hanks", "Brad Pitt", "Leonardo DiCaprio"], correct: 1 },
        { question: "Which movie is known for the quote 'May the Force be with you'?", answers: ["Star Trek", "Star Wars", "Guardians of the Galaxy", "Interstellar"], correct: 1 },
        { question: "Who directed 'Pulp Fiction'?", answers: ["Martin Scorsese", "Quentin Tarantino", "David Fincher", "Paul Thomas Anderson"], correct: 1 },
        { question: "Which movie won the first ever Academy Award for Best Picture?", answers: ["Wings", "Sunrise", "The Jazz Singer", "7th Heaven"], correct: 0 },
        { question: "Who played Neo in 'The Matrix'?", answers: ["Will Smith", "Keanu Reeves", "Johnny Depp", "Brad Pitt"], correct: 1 },
        { question: "Which Disney movie features the song 'Let It Go'?", answers: ["Moana", "Frozen", "Tangled", "Encanto"], correct: 1 },
        { question: "Who directed 'Jaws'?", answers: ["George Lucas", "Steven Spielberg", "Francis Ford Coppola", "Martin Scorsese"], correct: 1 },
        { question: "Which movie features a young Macaulay Culkin?", answers: ["The Good Son", "Home Alone", "My Girl", "Uncle Buck"], correct: 1 },
        { question: "Who played the main character in 'Gladiator'?", answers: ["Brad Pitt", "Russell Crowe", "Mel Gibson", "Kevin Costner"], correct: 1 },
        { question: "Which movie is set in the fictional country of Wakanda?", answers: ["Black Panther", "Captain America", "Thor", "Iron Man"], correct: 0 },
        { question: "Who directed 'The Godfather'?", answers: ["Martin Scorsese", "Francis Ford Coppola", "Robert De Niro", "Al Pacino"], correct: 1 },
        { question: "Which movie features the character Jack Sparrow?", answers: ["Treasure Island", "Pirates of the Caribbean", "Master and Commander", "The Count of Monte Cristo"], correct: 1 },
        { question: "Who played the main character in 'Rocky'?", answers: ["Robert De Niro", "Al Pacino", "Sylvester Stallone", "Arnold Schwarzenegger"], correct: 2 },
        { question: "Which movie is known for the quote 'Here's looking at you, kid'?", answers: ["Gone with the Wind", "Casablanca", "Roman Holiday", "Sunset Boulevard"], correct: 1 },
        { question: "Who directed 'E.T. the Extra-Terrestrial'?", answers: ["George Lucas", "Steven Spielberg", "Ridley Scott", "James Cameron"], correct: 1 },
        { question: "Which movie features the song 'Somewhere Over the Rainbow'?", answers: ["Singin' in the Rain", "The Wizard of Oz", "Mary Poppins", "The Sound of Music"], correct: 1 },
        { question: "Who played the main character in 'The Terminator'?", answers: ["Sylvester Stallone", "Arnold Schwarzenegger", "Bruce Willis", "Jean-Claude Van Damme"], correct: 1 },
        { question: "Which movie won the Academy Award for Best Picture in 2020?", answers: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"], correct: 2 },
        { question: "Who directed 'Avatar'?", answers: ["Steven Spielberg", "James Cameron", "Ridley Scott", "Peter Jackson"], correct: 1 },
        { question: "Which movie features the character Hannibal Lecter?", answers: ["Seven", "The Silence of the Lambs", "Zodiac", "Shutter Island"], correct: 1 }
    ],
    videogames: [
        { question: "Which game features the character Master Chief?", answers: ["Call of Duty", "Halo", "Gears of War", "Destiny"], correct: 1 },
        { question: "What is the best-selling video game of all time?", answers: ["Tetris", "Minecraft", "Grand Theft Auto V", "Super Mario Bros."], correct: 1 },
        { question: "Which company created the PlayStation?", answers: ["Nintendo", "Microsoft", "Sony", "Sega"], correct: 2 },
        { question: "In which game do you play as Link?", answers: ["Super Mario", "The Legend of Zelda", "Metroid", "Donkey Kong"], correct: 1 },
        { question: "Which game popularized the battle royale genre?", answers: ["Fortnite", "PUBG", "Apex Legends", "Call of Duty: Warzone"], correct: 1 },
        { question: "What is the main character's name in the Grand Theft Auto: Vice City?", answers: ["Carl Johnson", "Niko Bellic", "Tommy Vercetti", "Claude"], correct: 2 },
        { question: "Which game features the Umbrella Corporation?", answers: ["Silent Hill", "Resident Evil", "Dead Space", "The Last of Us"], correct: 1 },
        { question: "What year was the original Super Mario Bros. released?", answers: ["1983", "1985", "1987", "1989"], correct: 1 },
        { question: "Which game is known for the phrase 'The cake is a lie'?", answers: ["Half-Life", "Portal", "BioShock", "System Shock"], correct: 1 },
        { question: "Who is the main antagonist in the Super Mario series?", answers: ["Wario", "Bowser", "King K. Rool", "Ganondorf"], correct: 1 },
        { question: "Which game features the city of Rapture?", answers: ["Fallout", "BioShock", "Dishonored", "Prey"], correct: 1 },
        { question: "What is the currency in Fortnite?", answers: ["Coins", "V-Bucks", "Credits", "Gems"], correct: 1 },
        { question: "Which game series features Kratos?", answers: ["Devil May Cry", "God of War", "Bayonetta", "Ninja Gaiden"], correct: 1 },
        { question: "What is the highest level in Pac-Man?", answers: ["Level 255", "Level 256", "Level 999", "Level 1000"], correct: 1 },
        { question: "Which game introduced the concept of 'respawning'?", answers: ["Doom", "Quake", "Wolfenstein", "Duke Nukem"], correct: 0 },
        { question: "What is the name of the princess in the Super Mario series?", answers: ["Zelda", "Peach", "Daisy", "Rosalina"], correct: 1 },
        { question: "Which game features the character Solid Snake?", answers: ["Splinter Cell", "Metal Gear", "Hitman", "Assassin's Creed"], correct: 1 },
        { question: "What is the maximum level in the original Donkey Kong?", answers: ["Level 22", "Level 117", "Level 255", "Level 999"], correct: 1 },
        { question: "Which game popularized the zombie survival genre?", answers: ["Dead Rising", "Left 4 Dead", "Resident Evil", "Call of Duty: Zombies"], correct: 2 },
        { question: "What is the name of the main character in Half-Life?", answers: ["Gordon Freeman", "Adrian Shephard", "Barney Calhoun", "Alyx Vance"], correct: 0 },
        { question: "Which game features the character Lara Croft?", answers: ["Uncharted", "Tomb Raider", "Indiana Jones", "Assassin's Creed"], correct: 1 },
        { question: "What is the name of the final boss in the original Legend of Zelda?", answers: ["Ganon", "Ganondorf", "Agahnim", "Vaati"], correct: 0 },
        { question: "Which game introduced the concept of achievements/trophies?", answers: ["Xbox 360", "PlayStation 3", "Steam", "Nintendo"], correct: 0 },
        { question: "What is the name of the main character in the Metroid series?", answers: ["Samus Aran", "Ridley", "Dark Samus", "Zero Suit"], correct: 0 },
        { question: "Which game features the phrase 'Would you kindly'?", answers: ["System Shock", "BioShock", "Prey", "Dishonored"], correct: 1 }
    ],
    music: [
        { question: "Which band released the album 'Abbey Road'?", answers: ["The Rolling Stones", "The Beatles", "Led Zeppelin", "Pink Floyd"], correct: 1 },
        { question: "Who composed 'The Four Seasons'?", answers: ["Bach", "Mozart", "Vivaldi", "Beethoven"], correct: 2 },
        { question: "Which instrument has 88 keys?", answers: ["Organ", "Piano", "Harpsichord", "Accordion"], correct: 1 },
        { question: "Who is known as the 'King of Pop'?", answers: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"], correct: 1 },
        { question: "Which song was a hit for Queen in 1975?", answers: ["We Will Rock You", "Bohemian Rhapsody", "Another One Bites the Dust", "We Are the Champions"], correct: 1 },
        { question: "What does 'forte' mean in music?", answers: ["Soft", "Loud", "Fast", "Slow"], correct: 1 },
        { question: "Which country is famous for flamenco music?", answers: ["Italy", "Spain", "Portugal", "Greece"], correct: 1 },
        { question: "Who wrote 'Für Elise'?", answers: ["Mozart", "Bach", "Beethoven", "Chopin"], correct: 2 },
        { question: "Which instrument is Yo-Yo Ma famous for playing?", answers: ["Violin", "Piano", "Cello", "Flute"], correct: 2 },
        { question: "What genre of music did Bob Marley popularize?", answers: ["Jazz", "Reggae", "Blues", "Rock"], correct: 1 },
        { question: "Which band sang 'Stairway to Heaven'?", answers: ["Deep Purple", "Led Zeppelin", "Black Sabbath", "The Who"], correct: 1 },
        { question: "How many strings does a standard guitar have?", answers: ["4", "5", "6", "7"], correct: 2 },
        { question: "Which composer wrote 'The Magic Flute'?", answers: ["Bach", "Mozart", "Beethoven", "Haydn"], correct: 1 },
        { question: "What is the highest female singing voice?", answers: ["Alto", "Soprano", "Mezzo-soprano", "Contralto"], correct: 1 },
        { question: "Which city is considered the birthplace of jazz?", answers: ["Chicago", "New York", "New Orleans", "Memphis"], correct: 2 },
        { question: "Who sang 'Like a Rolling Stone'?", answers: ["Bob Dylan", "Neil Young", "Leonard Cohen", "Johnny Cash"], correct: 0 },
        { question: "Which instrument family does the trumpet belong to?", answers: ["Woodwind", "Brass", "Percussion", "String"], correct: 1 },
        { question: "What does 'piano' mean in musical terms?", answers: ["Fast", "Slow", "Soft", "Loud"], correct: 2 },
        { question: "Which band released 'Dark Side of the Moon'?", answers: ["Led Zeppelin", "Pink Floyd", "The Who", "Deep Purple"], correct: 1 },
        { question: "How many movements are in a typical symphony?", answers: ["2", "3", "4", "5"], correct: 2 },
        { question: "Which singer is known as 'The Voice'?", answers: ["Whitney Houston", "Mariah Carey", "Celine Dion", "Barbra Streisand"], correct: 0 },
        { question: "What is the lowest male singing voice?", answers: ["Tenor", "Baritone", "Bass", "Countertenor"], correct: 2 },
        { question: "Which country originated the tango?", answers: ["Spain", "Argentina", "Brazil", "Mexico"], correct: 1 },
        { question: "Who composed 'The Nutcracker'?", answers: ["Stravinsky", "Tchaikovsky", "Prokofiev", "Rachmaninoff"], correct: 1 },
        { question: "Which scale has no sharps or flats?", answers: ["C major", "G major", "D major", "F major"], correct: 0 }
    ],
    soccer: [
        { question: "Which country won the 2022 FIFA World Cup?", answers: ["France", "Argentina", "Brazil", "Croatia"], correct: 1 },
        { question: "Who scored the most goals in the 2022 World Cup?", answers: ["Lionel Messi", "Kylian Mbappé", "Olivier Giroud", "Julian Alvarez"], correct: 1 },
        { question: "Which club won the 2023 UEFA Champions League?", answers: ["Real Madrid", "Manchester City", "Inter Milan", "AC Milan"], correct: 1 },
        { question: "Who won the 2023 Ballon d'Or?", answers: ["Lionel Messi", "Erling Haaland", "Kylian Mbappé", "Karim Benzema"], correct: 0 },
        { question: "Which team won the 2023 Premier League?", answers: ["Arsenal", "Manchester City", "Manchester United", "Newcastle"], correct: 1 },
        { question: "Who is the current top scorer in Premier League history?", answers: ["Wayne Rooney", "Alan Shearer", "Harry Kane", "Sergio Aguero"], correct: 1 },
        { question: "Which country hosted the 2023 Women's World Cup?", answers: ["France", "Australia & New Zealand", "England", "USA"], correct: 1 },
        { question: "Who won the 2023 Women's World Cup?", answers: ["England", "Spain", "Australia", "Sweden"], correct: 1 },
        { question: "Which player transferred to Al-Nassr in 2023?", answers: ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Karim Benzema"], correct: 1 },
        { question: "Who is Manchester City's current manager?", answers: ["Jurgen Klopp", "Pep Guardiola", "Thomas Tuchel", "Antonio Conte"], correct: 1 },
        { question: "Which team won the 2023 FA Cup?", answers: ["Manchester City", "Manchester United", "Arsenal", "Chelsea"], correct: 0 },
        { question: "Who is the current captain of the England national team?", answers: ["Harry Kane", "Jordan Henderson", "Raheem Sterling", "Declan Rice"], correct: 0 },
        { question: "Which club did Jude Bellingham join in 2023?", answers: ["Barcelona", "Real Madrid", "Manchester City", "PSG"], correct: 1 },
        { question: "Who won the 2023 Copa America?", answers: ["Brazil", "Argentina", "Uruguay", "Colombia"], correct: 1 },
        { question: "Which goalkeeper won the 2023 Yashin Trophy?", answers: ["Alisson", "Emiliano Martinez", "Thibaut Courtois", "Ederson"], correct: 1 },
        { question: "Who is PSG's current top scorer?", answers: ["Neymar", "Kylian Mbappé", "Lionel Messi", "Mauro Icardi"], correct: 1 },
        { question: "Which team won the 2023 Serie A title?", answers: ["Juventus", "AC Milan", "Napoli", "Inter Milan"], correct: 2 },
        { question: "Who scored the winning goal in the 2023 Champions League final?", answers: ["Erling Haaland", "Rodri", "Kevin De Bruyne", "Ilkay Gundogan"], correct: 1 },
        { question: "Which country won the 2023 UEFA Nations League?", answers: ["Spain", "Croatia", "Italy", "Netherlands"], correct: 0 },
        { question: "Who is the current Real Madrid captain?", answers: ["Sergio Ramos", "Karim Benzema", "Luka Modric", "Nacho"], correct: 2 },
        { question: "Which player won the 2023 Premier League Golden Boot?", answers: ["Erling Haaland", "Harry Kane", "Ivan Toney", "Marcus Rashford"], correct: 0 },
        { question: "Who is the current Barcelona manager?", answers: ["Ronald Koeman", "Xavi", "Pep Guardiola", "Luis Enrique"], correct: 1 },
        { question: "Which team won the 2023 Bundesliga?", answers: ["Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Union Berlin"], correct: 0 },
        { question: "Who won the 2023 African Cup of Nations?", answers: ["Egypt", "Senegal", "Morocco", "Algeria"], correct: 1 },
        { question: "Which player has the most assists in 2023?", answers: ["Kevin De Bruyne", "Lionel Messi", "Kylian Mbappé", "Bruno Fernandes"], correct: 0 }
    ],
    afrobeats: [
        { question: "Who is known as the 'King of Afrobeats'?", answers: ["Wizkid", "Burna Boy", "Fela Kuti", "Davido"], correct: 2 },
        { question: "Which Nigerian artist won the Grammy for Best Global Music Album in 2021?", answers: ["Wizkid", "Burna Boy", "Davido", "Tiwa Savage"], correct: 1 },
        { question: "What does 'Afrobeats' combine?", answers: ["Jazz and Blues", "Traditional African music and Western pop", "Rock and Hip-hop", "Classical and Electronic"], correct: 1 },
        { question: "Which song by Wizkid featured Drake?", answers: ["Essence", "One Dance", "Come Closer", "Fever"], correct: 1 },
        { question: "Who is the founder of the modern Afrobeats genre?", answers: ["Fela Kuti", "King Sunny Ade", "Ebenezer Obey", "Orlando Julius"], correct: 0 },
        { question: "Which Nigerian artist is known as 'Starboy'?", answers: ["Davido", "Burna Boy", "Wizkid", "Olamide"], correct: 2 },
        { question: "What is Burna Boy's real name?", answers: ["Damini Ogulu", "Ayodeji Balogun", "David Adeleke", "Innocent Idibia"], correct: 0 },
        { question: "Which female artist is known as the 'Queen of Afrobeats'?", answers: ["Yemi Alade", "Tiwa Savage", "Simi", "Teni"], correct: 1 },
        { question: "Which Davido song became a global hit in 2017?", answers: ["If", "Fall", "Fia", "Assurance"], correct: 1 },
        { question: "What instrument is central to traditional Afrobeat music?", answers: ["Guitar", "Saxophone", "Drums", "Piano"], correct: 1 },
        { question: "Which Nigerian artist collaborated with Beyoncé on 'Brown Skin Girl'?", answers: ["Wizkid", "Burna Boy", "Davido", "Yemi Alade"], correct: 0 },
        { question: "What is the name of Fela Kuti's band?", answers: ["Africa 70", "Oriental Brothers", "Lijadu Sisters", "Osibisa"], correct: 0 },
        { question: "Which city is considered the heart of Afrobeats?", answers: ["Accra", "Lagos", "Johannesburg", "Nairobi"], correct: 1 },
        { question: "Who sang 'Johnny'?", answers: ["Yemi Alade", "Tiwa Savage", "Simi", "Teni"], correct: 0 },
        { question: "Which artist is known for the song 'Ye'?", answers: ["Wizkid", "Davido", "Burna Boy", "Olamide"], correct: 2 },
        { question: "What does 'Omo Baba Olowo' mean?", answers: ["Son of a Rich Man", "King of Music", "Young and Free", "Born to Shine"], correct: 0 },
        { question: "Which artist released 'Love Damini' album?", answers: ["Wizkid", "Davido", "Burna Boy", "Rema"], correct: 2 },
        { question: "Who is known as 'Baddest'?", answers: ["Davido", "Wizkid", "Burna Boy", "Olamide"], correct: 0 },
        { question: "Which song made Rema internationally famous?", answers: ["Dumebi", "Iron Man", "Calm Down", "Lady"], correct: 2 },
        { question: "What is Tiwa Savage's record label?", answers: ["Mavin Records", "YBNL", "Starboy Entertainment", "DMW"], correct: 0 },
        { question: "Which artist sang 'Soco'?", answers: ["Wizkid", "Davido", "Burna Boy", "Naira Marley"], correct: 0 },
        { question: "Who is the CEO of Mavin Records?", answers: ["Don Jazzy", "Olamide", "Davido", "Wizkid"], correct: 0 },
        { question: "Which artist is known for 'Ginger' featuring Wizkid?", answers: ["Burna Boy", "Davido", "Rema", "Fireboy DML"], correct: 0 },
        { question: "What genre did Fela Kuti create?", answers: ["Afrobeats", "Afrobeat", "Highlife", "Juju"], correct: 1 },
        { question: "Which artist won the BET Award for Best International Act in 2019?", answers: ["Wizkid", "Davido", "Burna Boy", "Mr Eazi"], correct: 2 }
    ],
    nigeria: [
        { question: "When did Nigeria gain independence?", answers: ["1960", "1963", "1958", "1962"], correct: 0 },
        { question: "Who was Nigeria's first President?", answers: ["Nnamdi Azikiwe", "Tafawa Balewa", "Obafemi Awolowo", "Ahmadu Bello"], correct: 0 },
        { question: "Which year did the Nigerian Civil War end?", answers: ["1967", "1970", "1969", "1971"], correct: 1 },
        { question: "Who is the current President of Nigeria (as of 2023)?", answers: ["Muhammadu Buhari", "Bola Tinubu", "Atiku Abubakar", "Peter Obi"], correct: 1 },
        { question: "What is the capital of Nigeria?", answers: ["Lagos", "Kano", "Abuja", "Port Harcourt"], correct: 2 },
        { question: "Which region was formerly known as Biafra?", answers: ["North", "West", "East", "South-South"], correct: 2 },
        { question: "Who led the military coup in 1966?", answers: ["Chukwuma Nzeogwu", "Yakubu Gowon", "Murtala Mohammed", "Ibrahim Babangida"], correct: 0 },
        { question: "When was Lagos replaced as Nigeria's capital?", answers: ["1991", "1990", "1989", "1992"], correct: 0 },
        { question: "Who was known as the 'Zik of Africa'?", answers: ["Obafemi Awolowo", "Nnamdi Azikiwe", "Ahmadu Bello", "Herbert Macaulay"], correct: 1 },
        { question: "Which political party ruled Nigeria from 1999-2015?", answers: ["APC", "PDP", "ANPP", "AD"], correct: 1 },
        { question: "Who was Nigeria's longest-serving military ruler?", answers: ["Sani Abacha", "Ibrahim Babangida", "Olusegun Obasanjo", "Yakubu Gowon"], correct: 1 },
        { question: "What is Nigeria's official language?", answers: ["Yoruba", "Igbo", "Hausa", "English"], correct: 3 },
        { question: "Which Nigerian won the Nobel Prize for Literature?", answers: ["Chinua Achebe", "Wole Soyinka", "Ben Okri", "Chimamanda Adichie"], correct: 1 },
        { question: "When did Nigeria become a republic?", answers: ["1960", "1963", "1966", "1979"], correct: 1 },
        { question: "Who was the first female Speaker of the House of Representatives?", answers: ["Patricia Etteh", "Amina Mohammed", "Ngozi Okonjo-Iweala", "Diezani Alison-Madueke"], correct: 0 },
        { question: "Which state is known as the 'Centre of Excellence'?", answers: ["Kano", "Lagos", "Rivers", "Kaduna"], correct: 1 },
        { question: "Who founded the University of Nigeria, Nsukka?", answers: ["Nnamdi Azikiwe", "Obafemi Awolowo", "Ahmadu Bello", "Tafawa Balewa"], correct: 0 },
        { question: "What does ECOWAS stand for?", answers: ["Economic Community of West African States", "East Coast of West Africa States", "Economic Council of West Africa", "European Community of West African States"], correct: 0 },
        { question: "Which Nigerian served as UN Secretary-General?", answers: ["Emeka Anyaoku", "Ibrahim Gambari", "Amina Mohammed", "None"], correct: 3 },
        { question: "When was the Fourth Republic established?", answers: ["1998", "1999", "2000", "1997"], correct: 1 },
        { question: "Who was the first Nigerian to become World Bank President?", answers: ["Ngozi Okonjo-Iweala", "Akinwumi Adesina", "Adebayo Adedeji", "None"], correct: 3 },
        { question: "Which Nigerian state was created last?", answers: ["Ebonyi", "Bayelsa", "Ekiti", "Gombe"], correct: 1 },
        { question: "Who was Nigeria's first female Finance Minister?", answers: ["Ngozi Okonjo-Iweala", "Kemi Adeosun", "Zainab Ahmed", "Nenadi Usman"], correct: 0 },
        { question: "What is the motto of Nigeria?", answers: ["Unity and Faith", "Peace and Progress", "Unity, Work, Progress", "Faith, Unity, Progress"], correct: 2 },
        { question: "Which Nigerian city hosted the 2009 FIFA U-17 World Cup final?", answers: ["Lagos", "Abuja", "Kano", "Port Harcourt"], correct: 1 }
    ]
};

// Game State
let gameState = {
    currentQuestion: 0,
    score: 0,
    correctAnswers: 0,
    questions: [],
    timeLeft: 15,
    timer: null
};

// DOM Elements
const elements = {
    screens: {
        landing: document.getElementById('landing-screen'),
        setup: document.getElementById('setup-screen'),
        quiz: document.getElementById('quiz-screen'),
        results: document.getElementById('results-screen'),
        leaderboard: document.getElementById('leaderboard-screen'),
        join: document.getElementById('join-screen')
    },
    quiz: {
        questionText: document.getElementById('question-text'),
        answersContainer: document.getElementById('answers-container'),
        currentQuestion: document.getElementById('current-question'),
        totalQuestions: document.getElementById('total-questions'),
        timeLeft: document.getElementById('time-left'),
        currentScore: document.getElementById('current-score'),
        progressBar: document.getElementById('progress-bar'),
        finalScore: document.getElementById('final-score'),
        correctAnswers: document.getElementById('correct-answers'),
        timeTaken: document.getElementById('time-taken')
    },
    setup: {
        categorySelect: document.getElementById('category-select')
    }
};

// Theme Management
function setTheme(theme) {
    document.body.className = document.body.className.replace(/theme-\w+/, '');
    document.body.classList.add(`theme-${theme}`);
}

// Screen Management
function showScreen(screenId) {
    // Hide all screens
    Object.values(elements.screens).forEach(screen => {
        if (screen) screen.classList.add('hidden');
    });

    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
    }

    // Special handling for results screen
    if (screenId === 'results-screen') {
        displayResults();
    }
}

// Quiz Functions
function startQuiz() {
    const category = elements.setup.categorySelect?.value || 'general';
    const questions = questionDatabase[category] || questionDatabase.general;

    // Shuffle and select questions
    gameState.questions = shuffleArray([...questions]).slice(0, 10);
    gameState.currentQuestion = 0;
    gameState.score = 0;
    gameState.correctAnswers = 0;

    showScreen('quiz-screen');
    loadQuestion();
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function loadQuestion() {
    if (gameState.currentQuestion >= gameState.questions.length) {
        endQuiz();
        return;
    }

    const question = gameState.questions[gameState.currentQuestion];

    // Update UI
    if (elements.quiz.questionText) {
        elements.quiz.questionText.textContent = question.question;
    }
    if (elements.quiz.currentQuestion) {
        elements.quiz.currentQuestion.textContent = gameState.currentQuestion + 1;
    }
    if (elements.quiz.totalQuestions) {
        elements.quiz.totalQuestions.textContent = gameState.questions.length;
    }
    if (elements.quiz.currentScore) {
        elements.quiz.currentScore.textContent = gameState.score;
    }

    // Update progress bar
    const progress = ((gameState.currentQuestion) / gameState.questions.length) * 100;
    if (elements.quiz.progressBar) {
        elements.quiz.progressBar.style.width = progress + '%';
    }

    // Load answers
    loadAnswers(question);

    // Start timer
    startTimer();
}

function loadAnswers(question) {
    if (!elements.quiz.answersContainer) return;

    elements.quiz.answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'arcade-button pixel-font bg-black bg-opacity-30 hover:bg-[var(--primary)] hover:bg-opacity-50 text-white p-4 rounded-lg border-2 border-[var(--secondary)] transition-all duration-300 transform hover:scale-105';
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        elements.quiz.answersContainer.appendChild(button);
    });
}

function startTimer() {
    gameState.timeLeft = 15;
    updateTimer();

    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        updateTimer();

        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            selectAnswer(-1); // Time's up, wrong answer
        }
    }, 1000);
}

function updateTimer() {
    if (elements.quiz.timeLeft) {
        elements.quiz.timeLeft.textContent = gameState.timeLeft;
    }
}

function selectAnswer(selectedIndex) {
    clearInterval(gameState.timer);

    const question = gameState.questions[gameState.currentQuestion];
    const answerButtons = elements.quiz.answersContainer?.querySelectorAll('button') || [];

    // Check if answer is correct
    const isCorrect = selectedIndex === question.correct;

    if (isCorrect) {
        gameState.score += 100;
        gameState.correctAnswers++;

        // Visual feedback for correct answer
        if (answerButtons[selectedIndex]) {
            answerButtons[selectedIndex].classList.add('answer-correct');
        }
    } else {
        // Visual feedback for wrong answer
        if (selectedIndex >= 0 && answerButtons[selectedIndex]) {
            answerButtons[selectedIndex].classList.add('answer-wrong');
        }
    }

    // Disable all buttons
    answerButtons.forEach(button => {
        button.disabled = true;
    });

    // Mark correct answer
    if (answerButtons[question.correct]) {
        answerButtons[question.correct].classList.add('answer-correct');
        answerButtons[question.correct].classList.add('float');
    }

    // Move to next question after delay
    setTimeout(() => {
        gameState.currentQuestion++;
        loadQuestion();
    }, 2000);
}

function endQuiz() {
    showScreen('results-screen');
}

function displayResults() {
    if (elements.quiz.finalScore) {
        elements.quiz.finalScore.textContent = gameState.score.toString();
    }
    if (elements.quiz.correctAnswers) {
        elements.quiz.correctAnswers.textContent = `${gameState.correctAnswers}/${gameState.questions.length}`;
    }

    // Calculate time taken (mock)
    const minutes = Math.floor(Math.random() * 2) + 1;
    const seconds = Math.floor(Math.random() * 60);
    if (elements.quiz.timeTaken) {
        elements.quiz.timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    // Create matrix rain for results screen
    createResultsMatrixRain();
}

function createResultsMatrixRain() {
    const container = document.getElementById('results-matrix');
    if (!container) return;

    // Clear existing matrix
    container.innerHTML = '';

    const characters = '★☆✦✧◆◇♦♢⚡⭐🎉🎊💫⭐';

    for (let i = 0; i < 20; i++) {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = characters[Math.floor(Math.random() * characters.length)];
        char.style.left = Math.random() * 100 + '%';
        char.style.animationDelay = Math.random() * 3 + 's';
        char.style.animationDuration = (Math.random() * 2 + 3) + 's';
        char.style.color = ['gold', 'silver', '#ff6b6b', '#4ecdc4', '#ffe66d'][Math.floor(Math.random() * 5)];
        container.appendChild(char);
    }
}

// Visual Effects Functions
function createMatrixRain() {
    const container = document.getElementById('matrix-container');
    if (!container) return;

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    for (let i = 0; i < 15; i++) {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = characters[Math.floor(Math.random() * characters.length)];
        char.style.left = Math.random() * 100 + '%';
        char.style.animationDelay = Math.random() * 3 + 's';
        char.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(char);
    }
}

function addCategoryIcons() {
    const categorySelect = document.getElementById('category-select');
    if (!categorySelect) return;

    const options = categorySelect.querySelectorAll('option');
    const icons = {
        'general': '🧠',
        'science': '🔬',
        'history': '🏛️',
        'movies': '🎬',
        'videogames': '🎮',
        'music': '🎵',
        'soccer': '⚽',
        'afrobeats': '🎶',
        'nigeria': '🇳🇬'
    };

    options.forEach(option => {
        const value = option.value;
        if (icons[value] && !option.textContent.includes(icons[value])) {
            option.textContent = icons[value] + ' ' + option.textContent;
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createMatrixRain();
    addCategoryIcons();
});

showScreen('landing-screen');
