let Review = require('./review.model')
let debug = require('debug')('demo:review')

const sendJSONResponse = (res, status, content) =>{
    res.status(status)
    res.json(content)
}

module.exports.readReviewsAll = (req,res)=>{
    debug('Getting all reviews')

    Review.find().exec().then(results =>{
        sendJSONResponse(res,200,results)
    }).catch(err =>{
        sendJSONResponse(res,404,err)
    })
}


module.exports.reviewReadOne = (req,res)=>{
    if(req.params && req.params.reviewid){
        debug("Getting a single review with id = ", req.params.reviewid)

        Review.findById(req.params.reviewid).exec().then(results =>{
            sendJSONResponse(res,200,results)
        }).catch(err =>{
            sendJSONResponse(res,404,{
                "message":"Review not found"
            })
        })
    }else{
        sendJSONResponse(res,404,{
            "message":"Review id not found"
        })
    }

    
}


module.exports.reviewCreate = (req,res)=>{
    debug('Creating review', req.body)

    Review.create({
        author:req.body.author,
        rating:req.body.rating,
        reviewText:req.body.reviewText
    }).then(dataSaved =>{
        debug(dataSaved)
        sendJSONResponse(res, 201, dataSaved)
    }).catch(err=>{
        debug(err)
        sendJSONResponse(res,404,err)
    })
}

module.exports.reviewUpdateOne = (req,res)=>{
    if(!req.params.reviewid){
        sendJSONResponse(res,404,{
            "message":"Review id not found reviewid required"
        })
        return 
    }
    Review.findById(req.params.reviewid).exec().then(reviewData =>{
        reviewData.author = req.body.author;
        reviewData.rating = req.body.rating;
        reviewData.reviewText = req.body.reviewText;
        return reviewData.save()
    }).then(data =>{
        sendJSONResponse(res,200,data)
    }).catch(err=>{
        sendJSONResponse(res,400,err)
    })

}


module.exports.reviewDeleteOne = (req,res)=>{
    if(!req.params.reviewid){
        sendJSONResponse(res,404,{
            "message":"Review id not found reviewid required"
        })
        return 
    }
    Review.findByIdAndRemove(req.params.reviewid).exec().then(reviewData =>{
        debug("Review ID " + req.params.reviewid + " deleted")
        debug(reviewData)
        sendJSONResponse(res,204,null)
    }).catch(err=>{
        sendJSONResponse(res,400,err)
    })

}


