
 new Vue({
    el: '#app',
    data:{
        message:'hello world'
    },
    methods:{
        changeMessage: function(event){
            this.message = event.target.value;
        }
    }
    
});