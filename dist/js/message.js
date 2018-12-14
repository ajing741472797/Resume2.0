"use strict";

!function () {
  var model = Model({
    resourceName: 'Message'
  });
  var view = View('section.message');
  var controller = Controller({
    messageList: null,
    form: null,
    init: function init(view, controller) {
      this.messageList = view.querySelector('#messageList');
      this.form = view.querySelector('form');
      this.loadMessages();
    },
    loadMessages: function loadMessages() {
      var _this = this;

      this.model.fetch().then(function (messages) {
        var array = messages.map(function (item) {
          return item.attributes;
        });
        array.forEach(function (item) {
          var li = document.createElement('li');
          li.innerText = item.name + ": " + item.content;

          _this.messageList.appendChild(li);
        });
      });
    },
    bindEvents: function bindEvents() {
      var _this2 = this;

      this.form.addEventListener('submit', function (e) {
        e.preventDefault();

        _this2.saveMessage();
      });
    },
    saveMessage: function saveMessage() {
      var myForm = this.form;
      var content = myForm.querySelector('input[name=content]').value;
      var name = myForm.querySelector('input[name=name]').value;
      this.model.save({
        'name': name,
        'content': content
      }).then(function (object) {
        var li = document.createElement('li');
        li.innerText = object.attributes.name + ": " + object.attributes.content;
        var messageList = document.querySelector('#messageList');
        messageList.appendChild(li);
        myForm.querySelector('input[name=content]').value = '';
        console.log(object);
      });
    }
  });
  controller.init(view, model);
}.call(); //leanCloud 数据库 数据存储开发指南
// // 创建 TestObject 表
// var TestObject = AV.Object.extend('TestObject');
// // 在表中创建一行数据
// var testObject = new TestObject();
// // 数据内容是 words: 'Hello World!' 保存
// // 如果保存成功，则运行 alert('')
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })