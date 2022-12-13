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
function KartenKampf () {
    if (Punkte[0] < Punkte[1]) {
        basic.showString("Du hast Punkte gegen den Computer verloren:", 60)
        Punkte[0] = Punkte[0] - 100
        basic.showNumber(Punkte[0])
        basic.showString("Der Computer hat Punkte gewonnen:", 60)
        Punkte[1] = Punkte[0] + 100
        basic.showNumber(Punkte[1])
    } else if (Punkte[0] > Punkte[1]) {
        basic.showString("Der Computer hat Punkte gegen den dich verloren:", 60)
        Punkte[1] = Punkte[0] - 100
        basic.showNumber(Punkte[1])
        basic.showString("Du hast Punkte gewonnen:", 60)
        Punkte[0] = Punkte[0] + 100
        basic.showNumber(Punkte[0])
    } else {
        basic.showString("Du hast einen Gleichstand mit dem Computer. Dein Punkte sind:", 60)
        Punkte[0] = Punkte[0] + 50
        basic.showNumber(Punkte[0])
        basic.showString("Dem Computer seine Punkte sind jetzt:", 60)
        Punkte[1] = Punkte[0] + 50
        basic.showNumber(Punkte[1])
    }
}
function EreignisKarteAusführen (Fall: number, SpielerComputer: number) {
    if (Fall == 0) {
        Temp = randint(1, 72)
        KartenStärke[SpielerComputer] = Temp
        basic.showString("Deine Kampfstärke wurde gesetzt!", 60)
    } else if (Fall == 1) {
        Temp = randint(-66, 6)
        KartenStärke[SpielerComputer] = Temp
        basic.showString("Deine Kampfstärke wurde gesetzt!", 60)
    } else if (Fall == 2) {
        Temp = randint(1, 200)
        Punkte[SpielerComputer] = Temp
        basic.showString("Deine Punkte wurden um:", 60)
        basic.showNumber(Temp, 60)
        basic.showString("erhöht!", 60)
        KartenStärke[SpielerComputer] = 0
        basic.showString("Deine Kampfstärke wurde gesetzt!", 60)
    } else {
        Temp = randint(-1, -200)
        Punkte[SpielerComputer] = Temp
        basic.showString("Deine Punkte wurden um:", 60)
        basic.showNumber(Temp, 60)
        basic.showString("vermindert!", 60)
        KartenStärke[SpielerComputer] = 18
        basic.showString("Deine Kampfstärke wurde gesetzt!", 60)
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
    if (SpielerComputer == 0) {
        Temp = AktuellesSpielFeld[0]
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
    } else {
        Temp = AktuellesSpielFeld[1]
        for (let index = 0; index < GewürfelteZahl; index++) {
            if (Temp >= 18) {
                Temp = 0
            } else {
                Temp += 1
            }
        }
        basic.showString("Seine Karte ist:", 60)
        SpielKartenSymbole[Temp].scrollImage(1, 120)
        basic.clearScreen()
        return Temp
    }
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
    KarteAuswerten(0)
    basic.clearScreen()
    Charaktere[1].scrollImage(1, 60)
    basic.showString("Ist am Zug!", 60)
    basic.clearScreen()
    GewürfelteZahl = wuerfelSytem()
    basic.showString("Er hat die Zahl", 60)
    basic.showNumber(GewürfelteZahl, 60)
    basic.showString(" gewürfelt!", 60)
    AktuellesSpielFeld.pop()
    AktuellesSpielFeld.push(LoterieSystem(1))
    KarteAuswerten(1)
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
let KartenStärke: number[] = []
let AugenZahlWürfel: number[] = []
let SpielFigurenSymbole: Image[] = []
let Temp2: Image[] = []
let Temp = 0
let Punkte: number[] = []
let Charaktere: Image[] = []
ladeSpielDateien()
Charaktere = AuswahlSystem()
basic.pause(1000)
while (Punkte[0] >= 1000 || Punkte[1] >= 1000) {
    SpielZug()
    KartenKampf()
}
if (Punkte[0] >= 1000) {
    basic.showString("Glückwunsch du hast gewonnen! Drücke den Reset Button um das Spiel erneut zu starten ...", 60)
} else {
    basic.showString("Der Computer hat das Spiel gewonnnen! Drücke den Reset Button um das Spiel erneut zu starten ...", 60)
}
