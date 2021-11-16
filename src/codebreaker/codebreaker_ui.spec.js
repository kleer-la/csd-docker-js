import fs from "fs";

describe("CodeBreaker", () => {
    function codigo(nro) {
        return document.querySelector("#codigo").value = nro
    }
    function adivinar(nro) {
        document.querySelector("#numero").value = nro;
        document.querySelector("input[type=submit]").click();
    }
    function pistas() {
        return document.querySelector("#pistas").innerHTML
    }
    function resultado() {
        return document.querySelector("#resultado").innerHTML
    }
    beforeAll(() => {
        document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");
        require("../codebreaker/presenter");
    })
    it('Titulo del juego', () => {
        expect(document.querySelector("title").innerHTML ).toEqual('Codebreaker')
    })
    it('Muestra pistas inicial', () => {
        expect(pistas() ).toEqual('- - - -')
    })
    it('Muestra pistas', () => {
        codigo('3158')
        adivinar('0123')
        expect(pistas() ).toEqual('! * - -')
    })
    it('Muestra pistas', () => {
        codigo('3158')
        adivinar('3158')
        expect(resultado() ).toEqual('Ganó')
    })
    afterEach(() => {
        document.querySelector("#pistas").innerHTML = "";
        document.querySelector("#resultado").innerHTML = "";
    });
})
