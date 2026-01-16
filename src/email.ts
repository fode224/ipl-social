 function validateEmail(email: string): boolean {
    if (email.includes(" ")) return false;

    const parts = email.split("@");
    if (parts.length !== 2) return false;

    const [local, domain] = parts;
    if (!local || !domain) return false;

    if (!domain.includes(".") || domain.endsWith(".")) return false;

    return true;
}

export {validateEmail};
