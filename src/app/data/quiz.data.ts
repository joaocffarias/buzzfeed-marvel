export interface Question {
    id: number;
    label: string;
    options: Option[];
}

export interface Option {
    id: number;
    name: string;
    alias: string;
}

export const questions: Question[] = [
    {
        id: 1,
        label: "Qual seria seu superpoder ideal?",
        options: [
            { id: 1, name: "Inteligência Genial", alias: "A" },
            { id: 2, name: "Super Força e Resistência", alias: "B" },
            { id: 3, name: "Controle Climático", alias: "C" },
            { id: 4, name: "Espionagem e Agilidade", alias: "D" }
        ]
    },
    {
        id: 2,
        label: "Qual a sua arma preferida?",
        options: [
            { id: 1, name: "Armadura Tecnológica", alias: "A" },
            { id: 2, name: "Escudo Indestrutível", alias: "B" },
            { id: 3, name: "Martelo Mágico", alias: "C" },
            { id: 4, name: "Bastões de Combate", alias: "D" }
        ]
    },
    {
        id: 3,
        label: "Como você lida com inimigos?",
        options: [
            { id: 1, name: "Hackeio seus sistemas", alias: "A" },
            { id: 2, name: "Lidero um ataque frontal", alias: "B" },
            { id: 3, name: "Invoco trovões", alias: "C" },
            { id: 4, name: "Infiltro-me e ataco de surpresa", alias: "D" }
        ]
    },
    {
        id: 4,
        label: "Qual sua cor favorita?",
        options: [
            { id: 1, name: "Vermelho e Dourado", alias: "A" },
            { id: 2, name: "Azul, Vermelho e Branco", alias: "B" },
            { id: 3, name: "Vermelho e Prata", alias: "C" },
            { id: 4, name: "Preto", alias: "D" }
        ]
    }
];

export const results = {
    A: {
        name: "Homem de Ferro",
        description: "Gênio, bilionário, playboy e filantropo. Você resolve problemas com tecnologia e inteligência.",
        img: "https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png" // Placeholder URL
    },
    B: {
        name: "Capitão América",
        description: "O Primeiro Vingador. Você é leal, corajoso e um líder nato.",
        img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Captain_America_Vol_9_19_Textless.jpg" // Placeholder URL
    },
    C: {
        name: "Thor",
        description: "Deus do Trovão. Você possui força bruta e um coração nobre.",
        img: "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg" // Placeholder URL
    },
    D: {
        name: "Viúva Negra",
        description: "Mestre da espionagem. Você é ágil, inteligente e letal.",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Scarlett_Johansson_as_Black_Widow.jpg/220px-Scarlett_Johansson_as_Black_Widow.jpg" // Placeholder URL
    }
};
