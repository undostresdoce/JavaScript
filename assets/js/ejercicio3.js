document.getElementById("btn-sumar").addEventListener("click", () => {
  document.getElementById("resultado").innerText = sumar();
});

document.getElementById("btn-restar").addEventListener("click", () => {
  if (restar() < 0) {
    document.getElementById("resultado").innerText = 0;
  } else {
    document.getElementById("resultado").innerText = restar();
  }
});

const sumar = () => {
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);

  let resultado = valor1 + valor2;
  return resultado;
};

const restar = () => {
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);

  let resultado = valor1 - valor2;
  return resultado;
};
