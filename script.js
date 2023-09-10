// let a = 1 // integer parseInt('1') = 1
// a = 5 / 3 // float parseFloat('1') = 1.0
// let b = 'kjdfhgdjkl' // string
// let c = true // bool
// let c2 = false // bool
// let d = [1, '23423423', 1231, [123, a, c2, []]]
// let student = {
// 	'name': 'vasia', 
// 	'name2': '2',
// 	'age': 18, 
// 	'csergse': [{}]
// }

// function r(first_arg, second_arg){
// 	return first_arg + second_arg
// }
// console.log(r(3, 5))
// console.log(r(7, 5))

// const el1 = document.getElementsByTagName('section');
// const el1 = document.getElementsByClassName('im');
// const el1 = document.getElementById('secta');
// const el1 = document.querySelectorAll('.im');

// let a = 2
// a = a + 1
// a += 1

// let a = 1
// const el1 = document.querySelector('.zag2');
// console.log(el1)
// el1.addEventListener('click', function (){
// 	console.log(a)
// 	a += 100
// })

// const el1 = document.querySelector('.zag2');
// el1.style.background = 'red';
// el1.style.fontSize = '5px';
// el1.style.fontFamily = "'Montserrat', sans-serif";

let a = 0
const ngg = document.getElementById('but');
ngg.addEventListener(
	'click', 

	function (){
		if (a == 0){ // (a > 5) (a >= 5) (a != 5) (a > 5  && a < 11) (a > 5 || a < 11)
			ngg.style.transform = 'scale(4)'
			a = 1
		} else {
			ngg.style.transform = 'scale(1)'
			a = 0
		}
	}

	)



const headerNav = document.querySelector('.header-nav');
function showMobileMenu(){
	headerNav.classList.toggle('mobile_menu_active')
}
const btnBurger = document.querySelector('.burger');
btnBurger.addEventListener('click', showMobileMenu)
























