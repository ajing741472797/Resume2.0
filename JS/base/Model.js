window.Model = function(options){
    let resourseName = options.resourseName
    return {
        init: function () {
            var APP_ID = 'o8vzed3lpO8Nz3uXvbmjSiPA-gzGzoHsz'
            var APP_KEY = '5ml8Rgc8TNp8sjp2AduI0EF0'
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        fetch: function(){ 
            var query = new AV.Query(resourseName);
            return query.find()
        },
        save: function(object){
            var X = AV.Object.extend(resourseName);
            var x = new X();
            return x.save(object)
    }
}
}
