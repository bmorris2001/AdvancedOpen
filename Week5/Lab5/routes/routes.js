const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { EmployeeController } = require('../controllers/employee.controller');


// CREATE ROUTES

const routeCreate = router.route('/create');

routeCreate.get(((req, res) => {
    
    res.render('create', {action: '/create'});
}));

routeCreate.post( async (req, res) => {
   
    let employee = await EmployeeController.createEmployee(req.body);

    if (employee) {
        res.redirect('view');
    } else {
        res.render('error');
    }

});


// DELETE ROUTES

const routeDelete = router.route('/delete/:id');

routeDelete.post(async (req, res) => {
    
    const search = { _id: ObjectId(req.params.id) };

    
    let employee = await EmployeeController.deleteEmployee(search);

    if (employee) {
        res.redirect('../view');
    } else {
        res.render('error');
    }
});



/// VIEW ROUTES

const routeView = router.route('/view');

routeView.get(async (req, res) => {
    

    let employees = await EmployeeController.getAllEmployees();
    if (employees) {
        res.render('view', {employees: employees});
    } else {
        res.render('error');
    }
});


// MISC ROUTES

router.route('/query').get((req, res) => {
    res.render('query');
});

router.route('*').get((req, res) => {
    
    res.redirect('create');
});





module.exports = router;
