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
function EreignisKarteAusführen (Fall: number, SpielerComputer: number) {
    if (Fall == 0) {
        Temp = randint(1, 72)
        KartenStärke[SpielerComputer] = Temp
        basic.showString("Deine Kampfstärke beträgt nun:", 60)
        basic.showNumber(Temp, 60)
        Case = 0
    } else if (Fall == 1) {
        Temp = randint(-66, 6)
        KartenStärke[SpielerComputer] = Temp
        basic.showString("Deine Kampfstärke beträgt nun:", 60)
        basic.showNumber(Temp, 60)
        Case = 0
    } else if (Fall == 2) {
        Temp = randint(1, 200)
        Punkte[SpielerComputer] = Temp
        basic.showString("Deine Punkte wurden um:", 60)
        basic.showNumber(Temp, 60)
        basic.showString("erhöht! Würfel nochmal!", 60)
        Case = 1
    } else {
        Temp = randint(-1, -200)
        Punkte[SpielerComputer] = Temp
        basic.showString("Deine Punkte wurden um:", 60)
        basic.showNumber(Temp, 60)
        basic.showString("vermindert! Würfel nochmal!", 60)
        Case = 1
    }
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
    KartenStärke = [0, 0]
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
function SpielZug (ComputerSpieler: number) {
    if (Case != -1) {
        if (ComputerSpieler == 0) {
            basic.clearScreen()
            Charaktere[ComputerSpieler].scrollImage(1, 60)
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
        } else {
            basic.clearScreen()
            Charaktere[ComputerSpieler].scrollImage(1, 60)
            basic.showString("Ist am Zug!", 60)
            basic.clearScreen()
            GewürfelteZahl = wuerfelSytem()
            basic.showString("Er hat die Zahl", 60)
            basic.showNumber(GewürfelteZahl, 60)
            basic.showString(" gewürfelt!", 60)
        }
        AktuellesSpielFeld.shift()
        AktuellesSpielFeld.unshift(LoterieSystem(ComputerSpieler))
        KarteAuswerten(ComputerSpieler)
        if (Case == 0) {
            SpielZug(1)
        } else {
            SpielZug(0)
        }
        if (Case == 1) {
            Case = -1
        }
    }
}
// Spieler/Computer = 0 für Spieler und 1 für den Computer.
function KarteAuswerten (SpielerComputer: number) {
    Temp = AktuellesSpielFeld[SpielerComputer]
    if (Temp == 1 || (Temp == 2 || (Temp == 4 || (Temp == 5 || (Temp == 7 || (Temp == 8 || (Temp == 10 || (Temp == 11 || (Temp == 13 || (Temp == 14 || (Temp == 15 || Temp == 16))))))))))) {
        if (SpielerComputer == 0) {
            KartenStärke[0] = Temp
            basic.showString("Deine KartenStärke wurde festgelegt", 60)
        } else {
            KartenStärke[1] = Temp
            basic.showString("Deine KartenStärke wurde festgelegt", 60)
        }
        basic.showString("Dein Zug ist vorbei!", 60)
    } else if (Temp == 3 || Temp == 9) {
        EreignisKarteAusführen(0, SpielerComputer)
    } else if (Temp == 6 || Temp == 12) {
        EreignisKarteAusführen(1, SpielerComputer)
    } else if (Temp == 0) {
        EreignisKarteAusführen(2, SpielerComputer)
    } else {
        EreignisKarteAusführen(3, SpielerComputer)
    }
}
let GewürfelteZahl = 0
let Temp3 = 0
let AktuellesSpielFeld: number[] = []
let SpielKartenSymbole: Image[] = []
let Punkte: number[] = []
let Case = 0
let KartenStärke: number[] = []
let AugenZahlWürfel: number[] = []
let SpielFigurenSymbole: Image[] = []
let Temp2: Image[] = []
let Temp = 0
let Charaktere: Image[] = []
ladeSpielDateien()
Charaktere = AuswahlSystem()
basic.pause(1000)
SpielZug(1)
