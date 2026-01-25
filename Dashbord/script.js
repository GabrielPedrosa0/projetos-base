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

    const btnRemove = document.createElement('button')
    btnRemove.className = 'btnRemove'
    btnRemove.textContent = 'Remover'

    btnRemove.addEventListener('click', () => {
        paciente.remove()
    })

    const pNome = document.createElement('p')
    pNome.textContent = `Nome: ${nomePaciente.value}`

    const pCns = document.createElement('p')
    pCns.textContent = `CNS: ${cnsPaciente.value}`


    paciente.appendChild(pNome)
    paciente.appendChild(pCns)
    paciente.appendChild(btnRemove)
    exames_ativos.appendChild(paciente)

    nomePaciente.value = ''
    cnsPaciente.value = ''
      
}



function addUSG(){
    const pacienteUSG = document.getElementById('usg')
    const listUsgs = document.querySelector('.list_usgs')
    
    const pUSG = pacienteUSG.value

    const usgRemove = document.createElement('button')
    usgRemove.className = 'usgRemove'
    usgRemove.textContent = 'X'

    usgRemove.addEventListener('click', () => {
        list.remove()
    })

    const list = document.createElement('li')
    list.textContent = `${pUSG}`
    list.className = 'pUSGS'

    listUsgs.appendChild(list)
    list.appendChild(usgRemove)

    pacienteUSG.value = ''   

    
    
} 