const express = require('express');
const router = express.Router();

const conexion = require('./database/db');
//MOSTRAR REGISTROS
router.get('/', (req, res)=>{

    conexion.query('SELECT * FROM TORNEO', (error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('index.ejs', {results:results});
        }
            }) 
        })

//CREAR REGISTRO
router.get('/create',(req, res)=>{
res.render('create');
})

//EDITAR REGISTRO
router.get('/edit/:id', (req, res)=>{
    const id= req.params.id ;
conexion.query('SELECT * FROM TORNEO WHERE ID_TORNEO =?', [id], (error, results)=>{
    if(error){
        throw error;
    }else{
        res.render('edit.ejs', {user:results[0]});
    }
}
)
})

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM TORNEO WHERE ID_TORNEO = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});
const crud = require('./controllers/crud.js');

router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;