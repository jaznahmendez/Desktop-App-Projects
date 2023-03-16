const Tarea = require('./../models/tareas');

/*
    GET /tareas
    GET /tareas/:id
    POST /tareas
    PUT /tareas/:id
    DELETE /tareas/:id
*/
class controladorTareas{
    static listar(req, res){
        console.log(req.query);
        Tarea.find({}).lean()
            .then(tareas => {
                res.send(tareas);
            })
            .catch(err => {
                console.log('error');
                res.send(err);
            });
    }

    static findTarea (req, res){
        let id = req.params.id;
        Tarea.findById(id)
            .then(tareas => {
                res.send(tareas);
            })
            .catch(err => {
                console.log('error');
                res.send('No se encuentran tareas con ese ID ' + err);
            });
    }

    static crearTarea(req, res){
        let obj = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            status: req.body.status
        }
        Tarea(obj).save().then( tarea => {
                console.log("Document inserted successfully");
                res.status(200).send(tarea);
            }).catch(err => {
                console.error("Failed to insert the document");
                res.send(err);
            });
    }

    static editarTarea(req, res){
        let obj = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            status: req.body.status,
            date: req.body.date
        }
        let id = req.params.id;
        Tarea.findByIdAndUpdate(id, obj, {new:true})
            .then(tarea => {
                console.log('Tarea Actualizada');
                res.status(200).send(tarea);
            })
            .catch(err => {
                console.log('error');
                res.send('No se logro actualizar la tarea ' + err);
            });
    }

    static borrarTarea(req, res){
        let id = req.params.id;
        Tarea.findByIdAndDelete(id)
            .then(tarea => {
                console.log('Tarea Eliminada');
                res.send(tarea);
            })
            .catch(err => {
                console.log('error');
                res.send('No se encuentran tareas con ese ID ' + err);
            });
    }
}

module.exports = controladorTareas;