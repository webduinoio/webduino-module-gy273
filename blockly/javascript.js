Blockly.JavaScript['gy273_new'] = function(block) {
  var dropdown_sda = block.getFieldValue('sda');
  var dropdown_scl = block.getFieldValue('scl');
  var code = 'getGY273(board,'+ dropdown_sda + ',' + dropdown_scl + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['gy273_on'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = variable_var + '.on(async function(_x, _y, _z, _degree, _direction){\n'+
  '  ' + variable_var + '._x = _x;\n' +
  '  '+ variable_var + '._y = _y;\n' +
  '  '+ variable_var + '._z = _z;\n' +
  '  '+ variable_var + '._degree = _degree;\n' +
  '  '+ variable_var + '._direction = _direction;\n' +  // '  '+ variable_var + '.direction = direction;\n' +
  statements_do + '});\n';
  return code;
};

Blockly.JavaScript['gy273_off'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  var code = variable_var + '.off();\n';
  return code;
};

Blockly.JavaScript['gy273_val'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  var dropdown_info = block.getFieldValue('info');
  var code = variable_var + '.' + dropdown_info;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['gy273_compass'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  var dropdown_info = block.getFieldValue('arrow');
  var code = variable_var + '.' + dropdown_info;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};