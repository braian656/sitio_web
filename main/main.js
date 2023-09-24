

const headerMenu = document.querySelector('.header_menu');
const buttons = document.querySelectorAll('.icon_caret .btn');
const links = document.querySelectorAll('.list_items');

links.forEach((enlace)=>{
	enlace.addEventListener('click', ()=>{
		headerMenu.classList.remove('show_header')
	})
})

 buttons.forEach((btn)=>{
 	btn.addEventListener('click',(e)=>{
 		let btnSelect = e.currentTarget;
 		if(btnSelect.classList.contains('show')){
 			headerMenu.classList.add('show_header');
 		}else{
 			headerMenu.classList.remove('show_header')
 		}
 	})
 })


window.addEventListener('DOMContentLoaded', ()=>{
	masCard()
})


const menuGallery = document.querySelector('.gallery');
function masCard(){
	let displayMenu = menu.map((item)=>{
		return `<article class="card_food">
				<div class="img_food">
					<img src= ${item.img} alt="">
					<span class="icon">
						<img src="./img/icons/caret-right-filled.svg" alt="">
					</span>
				</div>
				<div class="info_food">
					<h1 class="name">${item.nombre}</h1>
					<p class="txr">${item.txt}</p>
				</div>
			</article>`
	})
	displayMenu = displayMenu.join('');
	menuGallery.innerHTML = displayMenu;



	const btns = document.querySelectorAll('.icon')
	const cards = document.querySelectorAll('.card_food');
		btns.forEach((button)=>{
			button.addEventListener('click', (e)=>{
				
				let cardSelect = e.currentTarget.parentElement.parentElement
				cards.forEach((card)=>{
					if(card !== cardSelect){
						card.classList.remove('card_show')
					}
				})
				cardSelect.classList.toggle('card_show')
			})
		})


}

const menu = [
	{
		id: 1,
		img: './img/menu/plato-1.jpg',
		nombre: 'Menu 1',
		txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel aliquam debitis repellat veniam sunt iusto ab consequatur dolores at atque.',
	},
	{
		id: 2,
		img: './img/menu/plato-1.jpg',
		nombre: 'Menu 2',
		txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel aliquam debitis repellat veniam sunt iusto ab consequatur dolores at atque.',
	},
	{
		id: 3,
		img: './img/menu/plato-1.jpg',
		nombre: 'Menu 3',
		txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel aliquam debitis repellat veniam sunt iusto ab consequatur dolores at atque.'
	}
]