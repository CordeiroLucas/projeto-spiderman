function handleMouseEnter() {
	// console.log('handle mouse enter called', this); // This especifica que só vai imprimir no terminal o elemento que o mouse está em cima.
	this.classList.add('s-card--hovered'); // Função adiciona a classe s-card--hovered ao elemento
	document.body.id = `${this.id}-hovered`; // ` ` Indica que estou conlocando um conteúdo em javascript. Função pega o id do elemento e concatena com o "-hovered"
}

function handleMouseLeave() {
	this.classList.remove('s-card--hovered'); // Função remove a classe s-card--hovered do elemento
	document.body.id = ''; // Limpa o id do body ao retirar o mouse do card
}

function addEventListenersToCards() { // Adiciona eventListeners nos cards
	const cardElements = document.getElementsByClassName('s-card'); // Seleciona todos elementos da classe 's-card'

	for (let index = 0; index < cardElements.length; index++) {
		const card = cardElements[index]; // const card recebe todos os elementos do card em questão no index
		card.addEventListener('mouseenter', handleMouseEnter); // Função que rodará no evento de passar o mouse por cima do card
		card.addEventListener('mouseleave', handleMouseLeave); // Função que rodará no evento de retirar o mouse de cima do card
	};
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false); // Vai esperar um evento da página html acontecer, o evento da função é o "DOMContentLoaded", ou seja, vai esperar carregar todo documento. 