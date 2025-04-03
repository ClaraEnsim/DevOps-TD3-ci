const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

describe("Test de la page HTML", () => {
    let dom;
    let document;
    let window;

    beforeAll(() => {
        // Charger le bon fichier HTML
        const htmlPath = path.resolve(__dirname, "simplePicture.html");
        const html = fs.readFileSync(htmlPath, "utf8");

        // Charger le DOM avec exécution des scripts
        dom = new JSDOM(html, { runScripts: "dangerously" });
        document = dom.window.document;
        window = dom.window;
    });

    test("Le bouton doit exister", () => {
        const button = document.querySelector("#btn");
        expect(button).not.toBeNull();
        expect(button.textContent).toBe("Cliquez-moi");
    });

    test("Le bouton doit afficher un message après un clic", () => {
        const button = document.querySelector("#btn");
        const message = document.querySelector("#message");

        // Simuler un clic sur le bouton
        button.dispatchEvent(new window.Event("click"));

        // Vérifier que le texte a bien changé
        expect(message.textContent).toBe("Bonjour ! Vous avez cliqué sur le bouton.");
    });
});
