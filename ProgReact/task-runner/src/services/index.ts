import $http from './api'
import Task from './Task.service'

export const api = {
  taskService: new Task($http),
}