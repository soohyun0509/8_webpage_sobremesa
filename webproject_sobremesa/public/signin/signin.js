/*
	아이디: admin
	비밀번호: 1234
	가 아닌 아이디와 비밀번호로 로그인 시도하면 잘못되었다고 알림 뜨기
	맞으면 메인 페이지로 이동
	
	[주요 기능]
	document.getElementById : 입력된 아이디와 비밀번호를 체크
 */

 function checkUser(){
	let emp_name = document.getElementById('signin_id').value
	let emp_pay = document.getElementById('signin_pw').value
	
	if(emp_name=='admin' && emp_pay=='1234'){
		alert("정상적으로 로그인되었습니다.")
		window.location.href="../main/index.html"		//메인페이지로 이동
	}else{
		alert("아이디 또는 비밀번호가 잘못되었습니다.")
		emp_name=''
		emp_pay=''
	}
}
 
 