
let searchButton=document.querySelector('.searchButton')
let items=document.querySelector(".items")
let allItems=[];

for(i=1; i<=40; i++){
let item=document.createElement('div')
	item.classList.add('item','item'+i)
let h3=document.createElement('h3')
	h3.innerHTML='Item '+i
let p=document.createElement('p')
let priceTtl=document.createElement('span')
	priceTtl.classList.add('priceTtl')
	priceTtl.innerHTML='Price '
let priceVlu=document.createElement('span')
	priceVlu.classList.add('priceVlu')
	priceVlu.innerHTML= 5000 *i

	p.append(priceTtl)
	p.append(priceVlu)
	item.append(h3)
	item.append(p)
	items.append(item)
	allItems.push(item)
}

searchButton.addEventListener('click',()=>{
	let itemPrice=parseInt(document.querySelector('.searchField').value)
	let searchItems=allItems.filter((v)=>{
		let iPrice=parseInt(v.querySelector('.priceVlu').textContent)
		return iPrice <= itemPrice
	})
	items.innerHTML=''
	searchItems.map((i)=>{
		items.append(i)
	})
})
