Blockly.Blocks['gy273_new'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_GY273_SDA, "GY273，SDA")
        .appendField(new Blockly.FieldDropdown([
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
          ["8", "8"],
          ["9", "9"],
          ["10", "10"],
          ["11", "11"],
          ["12", "12"],
          ["13", "13"],
          ["14", "14"],
          ["15", "15"],
          ["16", "16"],
          ["17", "17"],
          ["18", "18"],
          ["19", "19"]
          // ["A4", "4"]
        ]), "sda")
        .appendField(Blockly.Msg.WEBDUINO_GY273_SCL, " SCL")
        .appendField(new Blockly.FieldDropdown([
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
          ["8", "8"],
          ["9", "9"],
          ["10", "10"],
          ["11", "11"],
          ["12", "12"],
          ["13", "13"],
          ["14", "14"],
          ["15", "15"],
          ["16", "16"],
          ["17", "17"],
          ["18", "18"],
          ["19", "19"]
          // ["A5", "5"]
        ]), "scl");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['gy273_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("gy273"), "var")
        .appendField(Blockly.Msg.WEBDUINO_GY273_START, "開始偵測");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField(Blockly.Msg.WEBDUINO_GY273_DO, "執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['gy273_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("gy273"), "var")
        .appendField(Blockly.Msg.WEBDUINO_GY273_STOP, "停止偵測");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['gy273_val'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("gy273"), "var")
        .appendField(Blockly.Msg.WEBDUINO_GY273_IS, "的")
        .appendField(new Blockly.FieldDropdown([["X", "_x"], ["Y", "_y"], ["Z", "_z"]]), "info")
        .appendField(Blockly.Msg.WEBDUINO_GY273_VAL, "數值");
    this.setOutput(true, null);
    this.setColour(35);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['gy273_compass'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("gy273"), "var")
        .appendField(Blockly.Msg.WEBDUINO_GY273_IS, "的")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.WEBDUINO_GY273_DIRECTION_ANGLE, "_degree"], [Blockly.Msg.WEBDUINO_GY273_DIRECTION, "_direction"]]), "arrow")
        .appendField(Blockly.Msg.WEBDUINO_GY273_X_DIRECTION, "( X軸箭頭為方向 )")
    this.setOutput(true, null);
    this.setColour(35);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};