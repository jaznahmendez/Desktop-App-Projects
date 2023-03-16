const router = require('express').Router();
const controller = require('./../controllers/tareas');

/* GET /tareas
GET /tareas/:id
POST /tareas
PUT /tareas/:id
DELETE /tareas/:id
*/

/**
 * @swagger
 * /tareas/{id}:
 *  get:
 *    description: obtener tarea especifica
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id de la tarea a buscar
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: tarea con ese id
 */
router.get('/:id', controller.findTarea);

/**
 * @swagger
 * /tareas:
 *  get:
 *    description: obtener lista de tareas
 *    responses:
 *      200:
 *        description: La lista de las tareas del usuario
 */
router.get('', controller.listar);

/**
 * @swagger
 * /tareas:
 *  put:
 *    description: crear tarea
 *    parameters:
 *      - in: body
 *        name: obj
 *        description: tarea a crear
 *        schema:
 *          type: string
 *          properties:
 *            titulo:
 *              type: string
 *            descripcion:
 *              type: string
 *            status:
 *              type: string 
 *    responses:
 *      200:
 *        description: tarea creada
 */
router.put('', controller.crearTarea);

/**
 * @swagger
 * /tareas/{id}:
 *  put:
 *    description: crear tarea
 *    parameters:
 *      - in: body
 *        name: obj
 *        description: tarea a crear
 *        schema:
 *          type: string
 *          properties:
 *            titulo:
 *              type: string
 *            descripcion:
 *              type: string
 *            status:
 *              type: string 
 *            date:
 *              type: string
 *      - in: path
 *        name: id
 *        description: id de tarea a editar
 *    responses:
 *      200:
 *        description: tarea editada
 */
router.put('/:id', controller.editarTarea);

/**
 * @swagger
 * /tareas/{id}:
 *  delete:
 *    description: obtener tarea especifica
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id de la tarea a eliminar
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: tarea eliminada
 */
router.delete('/:id', controller.borrarTarea);
module.exports = router;