export function ConverterReal(valor) {
  valor = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return valor;
}
