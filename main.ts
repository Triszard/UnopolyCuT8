function AuswahlSystem () {
    Temp = 0
    Temp2 = []
    basic.showString("Such dir einen Charakter aus!", 60)
    basic.clearScreen()
    while (true) {
        SpielFigurenSymbole[Temp].showImage(0, 75)
        if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B))) {
            Temp += -1
        }
        if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.A))) {
            Temp += 1
        }
        if (Temp < 0) {
            Temp = 5
        }
        if (Temp > 5) {
            Temp = 0
        }
        if (input.buttonIsPressed(Button.AB)) {
            Temp2.push(SpielFigurenSymbole[Temp])
            break;
        }
    }
    basic.clearScreen()
    basic.showString("Dein Charakter ist: ", 60)
    Temp2[0].showImage(0)
    basic.clearScreen()
    Temp2.push(SpielFigurenSymbole[randint(6, 11)])
    basic.showString("Der Computer Charakter ist: ", 60)
    Temp2[1].showImage(0)
    basic.clearScreen()
    return Temp2
}
function wuerfelSytem () {
    AugenZahlWürfel = [randint(1, 6), randint(1, 6), randint(1, 6)]
    return AugenZahlWürfel[0] + (AugenZahlWürfel[1] + AugenZahlWürfel[2])
}
function ladeSpielDateien () {
    SpielFigurenSymbole = [
    images.createImage(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `),
    images.createImage(`
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        `),
    images.createImage(`
        . # . # .
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `),
    images.createImage(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `),
    images.createImage(`
        # # . # #
        # . # . #
        . # . # .
        . . . . .
        # # # # #
        `),
    images.createImage(`
        . # . # .
        # . . . #
        . . # . .
        # # . # #
        . . . . .
        `),
    images.createImage(`
        . # # # .
        # # # # #
        . # # # .
        . . . . .
        . # # # .
        `),
    images.createImage(`
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        # # # # #
        `),
    images.createImage(`
        # # # # #
        # # . # #
        . . # . .
        . # # # .
        . # # # .
        `),
    images.createImage(`
        . # . # .
        . # # # .
        # # # # #
        . # . # .
        . # . # .
        `),
    images.createImage(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        # . # . #
        `),
    images.createImage(`
        # # . # #
        . # # . #
        . # # # .
        . # # # #
        # . . . #
        `)
    ]
    SpielKartenSymbole = [
    images.createImage(`
        . # # # .
        # # # # #
        . # . # .
        . # # # .
        . # # # .
        `),
    images.createImage(`
        . # . . .
        # # . . .
        . # . . .
        . # . . .
        . # . . .
        `),
    images.createImage(`
        . # . . .
        # . # . .
        . . # . .
        . # . . .
        # # # . .
        `),
    images.createImage(`
        . # # # .
        # . . . #
        . . . # #
        . . # . .
        . . # . .
        `),
    images.createImage(`
        # # . . .
        . . # . .
        # # . . .
        . . # . .
        # # . . .
        `),
    images.createImage(`
        # . # . .
        # . # . .
        # # # . .
        . . # . .
        . . # . .
        `),
    images.createImage(`
        # # # # #
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        `),
    images.createImage(`
        # # # . .
        # . . . .
        # # # . .
        . . # . .
        # # # . .
        `),
    images.createImage(`
        # # # . .
        # . . . .
        # # # . .
        # . # . .
        # # # . .
        `),
    images.createImage(`
        . # # # .
        # . . . #
        . . . # #
        . . # . .
        . . # . .
        `),
    images.createImage(`
        # # # . .
        . . # . .
        . # . . .
        # . . . .
        # . . . .
        `),
    images.createImage(`
        # # # . .
        # . # . .
        # # # . .
        # . # . .
        # # # . .
        `),
    images.createImage(`
        # # # # #
        . # # # .
        . # # # .
        . . . . .
        . . # . .
        `),
    images.createImage(`
        # # # . .
        # . # . .
        # # # . .
        . . # . .
        # # # . .
        `),
    images.createBigImage(`
        . # . # # # . . . .
        # # . # . # . . . .
        . # . # . # . . . .
        . # . # . # . . . .
        . # . # # # . . . .
        `),
    images.createImage(`
        . # . . #
        # # . # #
        . # . . #
        . # . . #
        . # . . #
        `),
    images.createBigImage(`
        . # . . # . . . . .
        # # . # . # . . . .
        . # . . . # . . . .
        . # . . # . . . . .
        . # . # # # . . . .
        `),
    images.createImage(`
        # # . # #
        . # . # .
        . . # . .
        . # . # .
        # # . # #
        `)
    ]
    Punkte = [0, 0]
    AktuellesSpielFeld = [0, 0]
}
// Spieler/Computer = 0 für Spieler und 1 für den Computer.
function LoterieSystem (SpielerComputer: number) {
    Temp = AktuellesSpielFeld[SpielerComputer]
    Temp3 = 40
    for (let index = 0; index < GewürfelteZahl; index++) {
        SpielKartenSymbole[Temp].scrollImage(1, Temp3)
        basic.clearScreen()
        if (Temp >= 18) {
            Temp = 0
        } else {
            Temp += 1
        }
        Temp3 += 5
    }
    SpielKartenSymbole[Temp].scrollImage(1, 120)
    basic.clearScreen()
    basic.pause(200)
    basic.showString("Deine Karte ist:", 60)
    SpielKartenSymbole[Temp].scrollImage(1, 120)
    basic.clearScreen()
    return Temp
}
function SpielZug () {
    basic.clearScreen()
    Charaktere[0].scrollImage(1, 60)
    basic.showString(" Du bist am Zug! A und B zum Wuerfeln!", 60)
    basic.clearScreen()
    while (true) {
        if (input.buttonIsPressed(Button.AB)) {
            GewürfelteZahl = wuerfelSytem()
            basic.showString("Du hast die Zahl", 60)
            basic.showNumber(GewürfelteZahl, 60)
            basic.showString(" gewürfelt!", 60)
            break;
        }
    }
    AktuellesSpielFeld.shift()
    AktuellesSpielFeld.unshift(LoterieSystem(0))
}
let GewürfelteZahl = 0
let Temp3 = 0
let AktuellesSpielFeld: number[] = []
let Punkte: number[] = []
let SpielKartenSymbole: Image[] = []
let AugenZahlWürfel: number[] = []
let SpielFigurenSymbole: Image[] = []
let Temp2: Image[] = []
let Temp = 0
let Charaktere: Image[] = []
ladeSpielDateien()
Charaktere = AuswahlSystem()
basic.pause(1000)
SpielZug()
