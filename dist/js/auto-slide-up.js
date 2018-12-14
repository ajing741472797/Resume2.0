"use strict";

//添加offset类，使模块显示时从下往上跳出来
!function () {
  //为了避免声明全局变量，我们使用立即执行函数
  var specialTags = document.querySelectorAll('[data-x]'); //获取页面关键标签，用data-x标记

  for (var i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset');
  } //使“关于”这一栏一打开页面就跳动


  setTimeout(function () {
    findClosestAndRemoveOffset();
  }, 2000); //导航栏下拉变色动效

  window.addEventListener('scroll', function () {
    findClosestAndRemoveOffset();
  });
  /*下面不用看*/

  function findClosestAndRemoveOffset() {
    //到达指定模块，导航栏相应a高亮
    var specialTags = document.querySelectorAll('[data-x]'); //获取页面关键标签，用data-x标记

    var minIndex = 0;

    for (var _i = 1; _i < specialTags.length; _i++) {
      if (Math.abs(specialTags[_i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = _i;
      } //遍历标签，看哪个离当前滚动高度最近，获取其index

    } // minIndex 就是离窗口顶部最近的元素


    specialTags[minIndex].classList.remove('offset');
    var id = specialTags[minIndex].id;
    var a = document.querySelector('a[href="#' + id + '"]'); //id == 'siteAbout'  'a[href="#siteAbout"]'

    var li = a.parentNode;
    var brotherAndMe = li.parentNode.children;

    for (var _i2 = 0; _i2 < brotherAndMe.length; _i2++) {
      brotherAndMe[_i2].classList.remove('highlight');
    }

    li.classList.add('highlight');
  }

  var liTags = document.querySelectorAll('nav.menu > ul > li');

  for (var _i3 = 0; _i3 < liTags.length; _i3++) {
    liTags[_i3].onmouseenter = function (x) {
      x.currentTarget.classList.add('active');
    };

    liTags[_i3].onmouseleave = function (x) {
      x.currentTarget.classList.remove('active');
    };
  }
}.call();