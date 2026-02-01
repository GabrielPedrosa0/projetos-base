function addPaciente(){
    const exames_ativos = document.querySelector('.exames-ativos')
    const nomePaciente = document.getElementById('nome_paciente')
    const cnsPaciente = document.getElementById('cns_paciente')
    const dataExame = document.getElementById('exame_date')
    const aviso = document.querySelector('.aviso')

    const nome = nomePaciente.value
    const cns = cnsPaciente.value
    const data = dataExame.value


    if(nome.trim() === "" || cns.trim() === "" || data.trim() === ""){
        aviso.classList.add('show')
        nomePaciente.classList.add('importatante')
        cnsPaciente.classList.add('importatante')

        setTimeout(function(){
            aviso.classList.remove('show')
            nomePaciente.classList.remove('importatante')
            cnsPaciente.classList.remove('importatante')
        }, 3000)
        
        return
    }

    const paciente = document.createElement('div')
    paciente.className = "paciente"

    const btnRemove = document.createElement('button')
    btnRemove.className = 'btnRemove'
    btnRemove.innerHTML = '<i class="ri-user-minus-fill"></i> Remover paciente'

    btnRemove.addEventListener('click', () => {
        paciente.remove()
    })

    const pNome = document.createElement('p')
    pNome.textContent = `Nome: ${nomePaciente.value}`

    const pCns = document.createElement('p')
    pCns.textContent = `CNS: ${cnsPaciente.value}`

    const pdate = document.createElement('p')
    pdate.textContent = `Data do exame: ${data}`


    paciente.appendChild(pNome)
    paciente.appendChild(pCns)
    paciente.appendChild(pdate)
    paciente.appendChild(btnRemove)
    exames_ativos.appendChild(paciente)

    nomePaciente.value = ''
    cnsPaciente.value = ''
    dataExame.value = ''
      
}



function addUSG(){
    const pacienteUSG = document.getElementById('usg')
    const listUsgs = document.querySelector('.list_usgs')
    
    const pUSG = pacienteUSG.value

    const usgRemove = document.createElement('button')
    usgRemove.className = 'usgRemove'
    usgRemove.innerHTML = '<i class="ri-close-circle-fill"></i>'

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