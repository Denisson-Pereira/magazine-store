export function descontos(valor: string, desconto: number): string {
    const valorDesconto = parseFloat(valor) - parseFloat(valor)*(desconto / 100)
    return valorDesconto.toString()
}
