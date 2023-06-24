export interface Flashcard {
    id: string,
    front: string,
    back: string,
    right: number,
    wrong: number, 
    viewed: number,
    flagged: boolean
}

export interface FlashcardDeck {
    id: string,
    cards: Array<Flashcard>
    lastviewed: number, //index of the last card viewed
}