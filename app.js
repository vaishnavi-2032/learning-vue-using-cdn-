//app is root component
const app = Vue.createApp({
    //data,functions
    //template: "<h2>I am the template</h2>"
    //data function returns data object
    data(){
        return {
            url: 'https://www.google.com/',
            showbooks: true,
            // title:"The Final Empire",
            // author:"Vaishnavi",
            // age:19,
            // x:0,
            // y:0
            books:[
                {title: 'Harry Potter and the sorcerers stone',author:'J.K.Rowling',img:'1.jpeg',isfav: true},
                {title: 'Harry Potter and the cursed child',author:'J.K.Rowling',img:'2.jpeg',isfav: false},
                {title: 'Princess Soup',author:'unknown',img:'3.jpeg',isfav: true}

            ]
        }
    },
    methods: {
        // changetitle(title){
        //    // this.title = 'New title'
        //    this.title = title
        // }

        toggleshowbooks(){
            this.showbooks= !this.showbooks
        },

        togglefav(book){
            book.isfav=!book.isfav
        },

        //whenever events happen on browser we automatically get access to an optional event object
        //and that can be taken as a parameter but it must be a first parameter
        //here called it as e
        handleEvent(e,data){
            console.log(e,e.type)
            if(data){
                console.log(data)
            }
        },
        handlemousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY

        }

    },
    //computed property is the property that depends on the data  and when the data changes this will update
    computed:{
        filteredbooks(){
            return this.books.filter((book) => book.isfav)
        }
    }
})

//mounting the root component to the dom where id is app
app.mount('#app')