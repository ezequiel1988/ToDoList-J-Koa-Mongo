module.exports = router => {

    const toDoController = require('../controllers/toDoController');
  
    router.post("/registrarse", toDoController.createUser);
    
    router.get('/registrarse', toDoController.getUsers);

    router.delete('/registrarse', toDoController.deleteUser)

  
  };
