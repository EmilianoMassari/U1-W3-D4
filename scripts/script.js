const tabellone = document.getElementById("tabellone")
const numeriEstratti = new Set()
const tabellineGiocatore = document.getElementById("tabellineGiocatore")

// Creazione del tabellone principale
for (let i = 1; i <= 76; i++) {
  const cella = document.createElement("div")
  cella.className = "cella"
  cella.innerText = i
  cella.id = "cella-" + i
  tabellone.appendChild(cella)
}

// Genera le tabelline del giocatore
function generaTabelline() {
  tabellineGiocatore.innerHTML = ""
  numeriEstratti.clear()
  document.getElementById("numeroEstratto").innerText = ""

  const numeroTabelline = parseInt(
    document.getElementById("numeroTabelline").value
  )

  for (let t = 0; t < numeroTabelline; t++) {
    const numeriTabellina = new Set()
    while (numeriTabellina.size < 25) {
      numeriTabellina.add(Math.floor(Math.random() * 76) + 1)
    }

    const tabellina = document.createElement("div")
    tabellina.className = "tabellina"

    numeriTabellina.forEach((num) => {
      const cella = document.createElement("div")
      cella.className = "cella"
      cella.innerText = num
      cella.id = `tabellina-${t}-cella-${num}`
      tabellina.appendChild(cella)
    })

    tabellineGiocatore.appendChild(tabellina)
  }
}

// Estrazione di un numero
function estraiNumero() {
  if (numeriEstratti.size >= 76) {
    alert("Tutti i numeri sono stati estratti!")
    return
  }

  let numero
  do {
    numero = Math.floor(Math.random() * 76) + 1
  } while (numeriEstratti.has(numero))

  numeriEstratti.add(numero)
  document.getElementById("numeroEstratto").innerText =
    "Numero estratto: " + numero

  // Evidenzia nel tabellone
  const cellaEstratta = document.getElementById("cella-" + numero)
  if (cellaEstratta) {
    cellaEstratta.classList.add("estratto")
  }

  // Evidenzia nelle tabelline
  const numeroTabelline = parseInt(
    document.getElementById("numeroTabelline").value
  )
  for (let t = 0; t < numeroTabelline; t++) {
    const cella = document.getElementById(`tabellina-${t}-cella-${numero}`)
    if (cella) {
      cella.classList.add("estratto")
    }
  }
}
