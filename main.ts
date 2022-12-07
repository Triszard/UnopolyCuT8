function CharakterAuswahl (liste: any[]) {
	
}
function ladeSpielDateien () {
    SpielFiguren = [
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
        . . # # #
        # . # . #
        . # # # #
        # # # . .
        # # . # .
        `)
    ]
    SpielKarten = [
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
let SpielFiguren: Image[] = []
let SpielKarten: Image[] = []
ladeSpielDateien()
CharakterAuswahl(SpielKarten)
basic.forever(function () {
	
})
