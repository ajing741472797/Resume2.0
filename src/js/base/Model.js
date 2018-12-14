// var model = Model({resourceName: 'Message'})
// model.init()
// model.fetch()
// model.save({name:'xxx'),content:'xxx'})
// Model 办事，我放心
/*
var model = Model({
  resourceName: '表名'
})
*/
window.Model = function(options){
    let resourceName = options.resourceName
    return {
        init: function(){
            var APP_ID = 'o8vzed3lpO8Nz3uXvbmjSiPA-gzGzoHsz'
            var APP_KEY = '5ml8Rgc8TNp8sjp2AduI0EF0'
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        fetch: function(){ 
            var query = new AV.Query(resourceName);
            return query.find()
        },
        save: function(object){
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object)
    }
}
}
