export function parcerlar(valor: string) {
    const transformar = valor.replace('.', '')
    const transformarValor = parseFloat(transformar)
    const valFinal = (transformarValor / 10)
    return valFinal.toPrecision(3)
}