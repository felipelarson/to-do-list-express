const express = require('express')

const checklistDepedentroute = express.Router()

const Checklist = require('../model/checklist')
const Task = require('../model/task')

checklistDepedentroute.get('/:id/tasks/new', (req, res) => {
  try {
    let task = Task()
    res.status(200).render('tasks/new', {checklistId: req.params.id, task: task})
  } catch (error) {
    res.status(422).render('pages/error', {errors: 'Erro ao carregar o formulario'})
  }
})

module.exports = {checklistDepedent: checklistDepedentroute}