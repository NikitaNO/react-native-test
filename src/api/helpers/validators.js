const validator = require('validator');

module.exports = new class {

  validateName(val) {
    const {length} = val;

    if(length >= 2 && length <= 255) return true;
  }

  validateEmail(val) {
    return validator.isEmail(val);
  }

  validatePassword(val) {
    const {length} = val;
    
    if(length >= 8 && length <= 50) return true;
  }

  validatePhone(val) {
    return validator.isMobilePhone(val, 'uk-UA') || validator.isEmpty(val);
  }
  
};