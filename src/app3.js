import './app3.css'
import $ from 'jquery'
const localKey= 'app3.active'
const $square = $('#app3>.square')
const active = localStorage.getItem(localKey) === 'yes';

 $square.toggleClass('active',active)


$square.on('click',()=>{
    if($square.hasClass('active')){
        $square.removeClass('active')
        localStorage.setItem(localKey,'no')
    }else {
        $square.addClass('active')
        localStorage.setItem(localKey,'yes')
    }
})

