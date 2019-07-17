const inputs = document.querySelector("#inputs")

const regs = {
	cpf: /^(\d{3}[\.]\d{3}[\.]\d{3}[-]\d{2})$/,
	email: /^([\d\w\.\-]+[@][\d\w]+[.](org|br|com))$/,
	telefone: /^([9]?\d{4}[-]\d{4})$/,
	url: /^(w{3}[.][\d\w]+[.](com|org|br))$/
}

// Sempre que algo for digitado nos inputs a verificação acontece
inputs.addEventListener("keyup", (e) => {
	const id = e.target.id.toString()
	const inputChanged = document.getElementById(id)
	const result = regs[id].test(inputChanged.value.toString())

	validator(result, id);
})

// Essa função é responsável pela mensagem e cor do texto que aparece quando algo é digitado
const validator = (result, id) => {
	const span = document.getElementById(`span-${id}`)
	const spanContent =  `${id} ${result ? 'válido': 'inválido'}`  
	
	span.style.color = result ? 'green' : 'red'
	span.textContent = spanContent;
}