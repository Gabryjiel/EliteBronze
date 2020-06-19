const router = require('express').Router();

router.use('/', require('./home'));
router.use('/stats', require('./stats'));
router.use('/tournaments', require('./tournaments'));

router.use(function(err, req, res, next){
    console.log("index api");
    if(err.name === 'ValidationError'){
      return res.status(422).json({
        errors: Object.keys(err.errors).reduce(function(errors, key){
          errors[key] = err.errors[key].message;
  
          return errors;
        }, {})
      });
    }
  
    return next(err);
  });

module.exports = router;