import { validateEmail } from "../src/email.js";

describe("validateEmail", () => {

    test("valide un email correct", () => {
        expect(validateEmail("test@example.com")).toBe(true);
    });

    test("rejette un email sans @", () => {
        expect(validateEmail("testexample.com")).toBe(false);
    });

    test("rejette un email avec plusieurs @", () => {
        expect(validateEmail("test@@example.com")).toBe(false);
    });

    test("rejette un email sans texte avant @", () => {
        expect(validateEmail("@example.com")).toBe(false);
    });

    test("rejette un email sans texte après @", () => {
        expect(validateEmail("test@")).toBe(false);
    });

    test("rejette un email sans point dans le domaine", () => {
        expect(validateEmail("test@examplecom")).toBe(false);
    });

    test("rejette un email avec un point à la fin du domaine", () => {
        expect(validateEmail("test@example.com.")).toBe(false);
    });

    test("rejette un email contenant un espace", () => {
        expect(validateEmail("test@ex ample.com")).toBe(false);
    });

});