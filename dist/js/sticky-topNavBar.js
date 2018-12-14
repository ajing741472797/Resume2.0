"use strict";

!function () {
  var view = View('#topNavBar'); // view.style.border = '1px solid red'

  var controller = {
    view: null,
    init: function init(view) {
      this.view = view;
      this.blindEvents(); //绑定事件,等价于 this.blindEvents.call(this)
    },
    blindEvents: function blindEvents() {
      var _this = this;

      var view = this.view;
      window.addEventListener('scroll', function (x) {
        if (window.scrollY > 0) {
          _this.active();
        } else {
          _this.deactive();
        }
      }); //箭头函数没有this
    },
    active: function active() {
      this.view.classList.add('sticky');
    },
    deactive: function deactive() {
      view.classList.remove('sticky');
    }
  };
  controller.init(view); //相当于controller.init.call(controller,view)
}.call();