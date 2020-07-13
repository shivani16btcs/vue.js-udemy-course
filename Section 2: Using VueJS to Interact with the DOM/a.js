new Vue({
    el:'#app',
    data:{
        title:"hello",
        link:"https://www.google.com/",
        completelink:'"<a href="https://www.google.com/">google</a>"'
    },
    methods:{
        show:function(){
            return this.title
        }
    }
})