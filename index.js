let nav = document.getElementById('main-navigation');
let portfolio = document.querySelector('#portfolio');
let home = document.querySelector('#home');
let contato = document.querySelector('#contato');
let sobre = document.querySelector('#sobre');
let header = document.querySelector('header');

//usando no form
function changeFocus(event) {
	
	let el = event.target;
	
	if(el.value) {
		if(!el.classList.contains('done')) {
			el.classList.add('done');
		}
	} 
	else {
		if(el.classList.contains('done')) {
			el.classList.remove('done');
		}
	}
	
}


function changeActiveClass(id) {
	
	document.querySelector('.active').classList.remove('active');
	el = document.querySelector(`#nav-${id}`);
	el.classList.add('active');
	
}

var options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.8
}

var observer = new IntersectionObserver(callback, options);

function callback(entries, observer) {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			changeActiveClass(entry.target.id);
		}
		
		if(entry.target.id == 'home') {
			if(entry.isIntersecting)
				header.classList.add('header-top');
			else
				header.classList.remove('header-top');
		}
  });
}

observer.observe(portfolio);
observer.observe(contato);
observer.observe(home);
observer.observe(sobre);



portfolio.addEventListener('click', (event) => {
	let el = event.target;	
	if(el.matches('img')) {
		descricao = el.parentElement.lastElementChild;
		descricao.classList.toggle('open');
		return;
	}
});

let descricoes = document.querySelectorAll('.descricao-container');

descricoes.forEach((descricao) => {
	descricao.addEventListener('click', () => {
		descricao.classList.toggle('open');
	});
});

