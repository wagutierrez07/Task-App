'use strict'

const { RouteResource } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('tasks/index')

Route.get('tasks', 'TaskController.index')

Route.get('tasks/add', 'TaskController.add')
Route.post('tasks', 'TaskController.store')

Route.get('tasks/:id', 'TaskController.details')

Route.get('tasks/edit/:id', 'TaskController.edit')
Route.put('tasks/:id', 'TaskController.update')

Route.delete('tasks/:id', 'TaskController.destroy')