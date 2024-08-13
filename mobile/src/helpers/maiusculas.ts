export function maiusculas(palavra: string | undefined | null): string {
    if (typeof palavra === 'string') {
        return palavra.toUpperCase();
    }
    return '';
}
