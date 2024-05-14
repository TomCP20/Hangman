const words = [
    "hangman",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
];


export default function RandomWord() {
    return words[Math.floor((Math.random() * words.length))]
}