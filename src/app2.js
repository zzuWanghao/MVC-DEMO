import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2>.tab-bar')
const $tabContent = $('#app2>.tab-content')
const localKey  = 'li.index'
  const index1 =  localStorage.getItem(localKey)??0


$tabBar.on('click','li',(e)=>{

const  $li = $(e.currentTarget)
const index = $li.index();
    localStorage.setItem(localKey,index)
    $li.addClass('selected')
        .siblings().removeClass('selected')
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})
 $tabBar.children().eq(index1).trigger('click')