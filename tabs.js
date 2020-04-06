window.addEventListener('DOMContentLoaded', function(){

  'use strict';
  let tabs = document.querySelector('.tabs'),
      tabsItem = document.querySelectorAll('.tabs-item'),
      tabsContent = document.querySelectorAll('.tabs-content-item');


  function tabsShow(visibleTabs){
    for(let i = visibleTabs; i < tabsContent.length; i++){
      tabsContent[i].classList.add('tabs-show');
      tabsItem[i].classList.add('tabs-item_active');
      break;
    }
  }

  tabsShow(0);

  function tabsHide(hideTabs){
    tabsContent[hideTabs].classList.remove('tabs-show'); 
  }

  tabs.addEventListener('click', function(e){
    let tabsTarget = e.target;
    for(let i = 0; i < tabsItem.length; i++){
      if(tabsTarget == tabsItem[i]){
        tabsItem[i].classList.add('tabs-item_active');
        tabsShow(i);
      } else {
        tabsItem[i].classList.remove('tabs-item_active');
        tabsContent[i].classList.remove('tabs-show');
      }
    }
  });

});