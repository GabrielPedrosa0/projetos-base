function addPaciente(){
    const exames_ativos = document.querySelector('.exames-ativos')
    const nomePaciente = document.getElementById('nome_paciente')
    const cnsPaciente = document.getElementById('cns_paciente')

    const nome = nomePaciente.value
    const cns = cnsPaciente.value

    if(nome.trim() === "" || cns.trim() === ""){
        alert("Preencha os campos!!")
        return
    }

    const paciente = document.createElement('div')
    paciente.className = "paciente"

    const pNome = document.createElement('p')
    pNome.textContent = `Nome: ${nomePaciente.value}`

    const pCns = document.createElement('p')
    pCns.textContent = `CNS: ${cnsPaciente.value}`

    paciente.appendChild(pNome)
    paciente.appendChild(pCns)
    exames_ativos.appendChild(paciente)

    nomePaciente.value = ''
    cnsPaciente.value = ''
}