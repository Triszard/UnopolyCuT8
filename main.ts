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
    Temp2.push(SpielFigurenSymbole[randint(6, 11)])
    basic.showString("Der Computer Charakter ist: ", 60)
    Temp2[1].showImage(0)
    basic.clearScreen()
    return Temp2
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
        . # # # .
        # . . . #
        . . . # #
        . . # . .
        . . # . .
        `),
    images.createImage(`
        . # # # .
        # . . . #
        . . . # #
        . . # . .
        . . # . .
        `),
    images.createImage(`
        # # # # #
        . # # # .
        . # # # .
        . . . . .
        . . # . .
        `),
    images.createImage(`
        # # # # #
        . # # # .
        . # # # .
        . . . . .
        . . # . .
        `),
    images.createImage(`
        . # # # .
        # # # # #
        . # . # .
        . # # # .
        . # # # .
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
}
function wuerfelFunktion () {
    AugenZahlWürfel = [randint(1, 6), randint(1, 6), randint(1, 6)]
    basic.showNumber(AugenZahlWürfel[0] + (AugenZahlWürfel[1] + AugenZahlWürfel[2]))
}
let AugenZahlWürfel: number[] = []
let Punkte: number[] = []
let SpielKartenSymbole: Image[] = []
let SpielFigurenSymbole: Image[] = []
let Temp2: Image[] = []
let Temp = 0
ladeSpielDateien()
let Charaktere = AuswahlSystem()
basic.forever(function () {
	
})
