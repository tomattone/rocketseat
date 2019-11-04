'use strict'

class Project {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      titile: 'required'
    }
  }
}

module.exports = Project
