const mainPage = (req,res)=>{
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
}

const pageTwo = (req,res)=>{
    res.render('index', {
        title:"Page Two",
        name:"Bart Simpson",
        phonenumber:"4014677744",
        address:"1 New England Tech Blvd",
        email:"bsimpson@neit.edu",
        occupation:"Esteemed Professor Of Skateboarding"
    })
}

const pageThree = (req,res)=>{
    res.render('index', {title:"Page Three"})
}

module.exports = {
    mainPage,
    pageTwo,
    pageThree
}