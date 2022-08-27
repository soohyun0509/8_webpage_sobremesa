const divs=document.querySelectorAll('.black')
const imgs=document.querySelectorAll('img')


imgs.forEach((img, index)=>{
	imgs[index].addEventListener('mouseover',()=>{
		divs.forEach((div,div_i)=>{
			if(index==div_i){
				div.style.display='block'
			}
		})
		
	})
	
	imgs[index].addEventListener('mouseout', ()=>{
		divs.forEach((div, div_i)=>{
			if(index==div_i){
				div.style.display='none'
			}
		})
	})
	
})
