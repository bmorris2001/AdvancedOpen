const express = require("express")
const exphbs = require("express-handlebars")


const app = express()

//Set the view engine

app.engine("hbs",exphbs.engine({
    defaultLayout:"main",
    extname:".hbs",
    helpers:{
        getShortComment(comment){
            if(comment.length < 60){
                return comment
            }
            return comment.substring(0,60)+'...'
        }
    }
}))

app.set('view engine', 'hbs')

app.get('/',(req,res)=>{
    res.render('home',{
        
        post:[
            {
            author:"Brandon M",
            image:"https://picsum.photos/500/500",
            comments:['comment 1','comment 2','Ad sit sit veniam labore officia deserunt ullamco nulla ut quis. Adipisicing mollit mollit sint irure reprehenderit nostrud do dolor. Culpa ullamco est culpa voluptate nostrud pariatur Lorem reprehenderit quis veniam. Deserunt cillum irure fugiat pariatur id mollit mollit voluptate irure consequat. Irure voluptate labore laboris in consequat officia incididunt aute.']
            },
        {
            author:"Brandon M 2",
            image:"https://picsum.photos/500/500?2",
            comments:['comment 1','comment 2','comment 3'] 
        },
        {
            author:"Brandon M 3",
            image:"https://picsum.photos/500/500?3",
            comments:['comment 1','comment 2','Amet nisi laboris ea dolor excepteur. Nostrud proident sit adipisicing est reprehenderit ut consequat aliquip aliqua enim nostrud. Incididunt proident elit esse ex magna elit. Veniam commodo consequat ipsum sint magna exercitation proident commodo aliqua fugiat.'] 
        }
    ]
    })
})

app.listen(3000,()=>{
    console.log("Connected On port 3000")
})
    