export function stringParaValor(valor: string) {
    const valorNumero = parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    return valorNumero
}