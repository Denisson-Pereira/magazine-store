export function descontos(valor: string, desconto: number) {
    const transformar = parseFloat(valor.replace('.', ''))
    const preco = (transformar - (transformar * desconto/100)).toString()
    return preco.replace('.', ',')
}