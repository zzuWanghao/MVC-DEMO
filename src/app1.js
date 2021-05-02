import './app1.css'
import $ from 'jquery'

const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#divide2')
const $number = $('#number')
$number.text(localStorage.getItem('n')||100)

let n = parseFloat( $number.text())
$button1.on('click',()=>{
    n+=1
    localStorage.setItem('n',n);
    $number.text(n);
})
$button2.on('click',()=>{
    n-=1
    localStorage.setItem('n',n);
    $number.text(n);
})
$button3.on('click',()=>{
    n=n*2
    localStorage.setItem('n',n);
    $number.text(n);
})
$button4.on('click',()=>{
    n/=2
    localStorage.setItem('n',n);
    $number.text(n);
})
