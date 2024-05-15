const words = [
    "hangman",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "cyan",
    "lavander",
    "lilac",
    "white",
    "black",
    "grey",
    "silver",
    "pink",
    "maroon",
    "brown",
    "beige",
    "tan",
    "peach",
    "lime",
    "olive",
    "turquise",
    "teal",
    "indigo",
    "violet",
];


export default function RandomWord() {
    return words[Math.floor((Math.random() * words.length))]
}