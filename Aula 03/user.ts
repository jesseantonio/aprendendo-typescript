type AccountInfo = {
    id: number,
    name: string,
    email?: string,
}

type CharInfo = {
    nickname: string,
    level: number | string,
}

const account: AccountInfo = {
    id: 123,
    name: "Jessé"
}

const char: CharInfo = {
    nickname: "jesseantonio",
    level: "20"
}

// Inserction

type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id: 123,
    name: "jesseee",
    nickname: "jesseantonioo",
    level: 1
}
