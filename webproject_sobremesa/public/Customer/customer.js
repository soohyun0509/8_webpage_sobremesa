

/**
	1. 문의하기 버튼 누르면 인풋에 입력한 데이터 js에 저장
	2. 저장한 데이터를 HTML에 출력
  순번 = 인덱스로 표시
 */
 


let customers=[]

출력()

function 데이터저장(){
	const customer={
		type: document.querySelector('.form_type').value,
		title: document.querySelector('.form_title').value,
		
		
	}
	alert('저장완료')
	
	customers.push(customer)
	console.log(customer.type)
	
	document.querySelector('.form_type').value=''
	document.querySelector('.form_title').value=''
	document.querySelector('.form_content').value=''
	document.querySelector('.form_email').value=''
	document.querySelector('.form_phone').value=''
	
	
	출력()
}


function 출력(){
	let html=`<tr><th>순번</th><th>문의유형</th><th>제목</th></tr>`
	
	for(let i=0; i<customers.length; i++){
		html+=`	<tr>
					<th>${[i+1]}</th>
					<th>${customers[i].type}</th>
					<th>${customers[i].title}</th>
				</tr>`
	}

	
	document.querySelector('.result').innerHTML= html
	
	
}

