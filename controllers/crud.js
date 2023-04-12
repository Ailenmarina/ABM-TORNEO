const conexion = require('../database/db.js');

//GUARDAR REGISTRO
exports.save =(req,res)=>{
    const nombre_torneo=req.body.NOMBRE_TORNEO;
    const ubicacion=req.body.UBICACION;
    const fecha_inicio=req.body.FECHA_INICIO;
    const fecha_fin=req.body.FECHA_FIN;
    const cantidad_equipos=req.body.CANTIDAD_EQUIPOS;
    conexion.query('INSERT INTO TORNEO SET ?',{ nombre_torneo:nombre_torneo,ubicacion:ubicacion, fecha_inicio:fecha_inicio, fecha_fin:fecha_fin, cantidad_equipos:cantidad_equipos}, (error, results)=>{

        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
};

//ACTUALIZAR REGISTRO
exports.update = (req, res)=>{
    const id_torneo=req.body.ID_TORNEO;
    const nombre_torneo=req.body.NOMBRE_TORNEO;
    const ubicacion=req.body.UBICACION;
    const fecha_inicio=req.body.FECHA_INICIO;
    const fecha_fin=req.body.FECHA_FIN;
    const cantidad_equipos=req.body.CANTIDAD_EQUIPOS;
    conexion.query('UPDATE TORNEO SET ? WHERE ID_TORNEO = ?',[{nombre_torneo:nombre_torneo,ubicacion:ubicacion, fecha_inicio:fecha_inicio, fecha_fin:fecha_fin, cantidad_equipos:cantidad_equipos}, id_torneo], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};

//NOMBRE_TORNEO:NOMBRE_TORNEO,UBICACION:UBICACION, FECHA_INICIO:FECHA_INICIO, FECHA_FIN:FECHA_FIN, CANTIDAD_EQUIPOS:CANTIDAD_EQUIPOS}//