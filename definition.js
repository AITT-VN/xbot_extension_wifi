Blockly.Blocks["xbot_wifi_connect"] = {
  init: function () {
    this.jsonInit({
      colour: "#7F85D4",
      nextStatement: null,
      tooltip: Blockly.Msg.XBOT_WIFI_CONNECT_TOOLTIP,
      message0: Blockly.Msg.XBOT_WIFI_CONNECT_MESSAGE0,
      previousStatement: null,
      args0: [
        { type: "input_dummy" },
        { type: "input_value", name: "WIFI", check: "String" },
        { type: "input_dummy" },
        { type: "input_value", name: "PASSWORD", check: "String" },
        { type: "input_dummy" },
        { type: "input_value", name: "NAME", check: "String" },
      ],
      helpUrl: Blockly.Msg.XBOT_WIFI_CONNECT_HELPURL,
    });
  },
};

Blockly.Blocks["xbot_wifi_check_message"] = {
  init: function () {
    this.jsonInit({
      colour: "#7F85D4",
      nextStatement: null,
      tooltip: Blockly.Msg.XBOT_WIFI_CHECK_MESSAGE_TOOLTIP,
      message0: Blockly.Msg.XBOT_WIFI_CHECK_MESSAGE_MESSAGE0,
      previousStatement: null,
      helpUrl: Blockly.Msg.XBOT_WIFI_CHECK_MESSAGE_HELPURL,
    });
  },
};

Blockly.Blocks["xbot_wifi_send_message"] = {
  init: function () {
    this.jsonInit({
      colour: "#7F85D4",
      nextStatement: null,
      tooltip: Blockly.Msg.XBOT_WIFI_SEND_MESSAGE_TOOLTIP,
      message0: Blockly.Msg.XBOT_WIFI_SEND_MESSAGE_MESSAGE0,
      previousStatement: null,
      args0: [
        { type: "input_dummy" },
        { type: "input_value", name: "MESSAGE", check: "String" },
        { type: "input_dummy" },
        { type: "input_value", name: "NAME", check: "String" },
      ],
      helpUrl: Blockly.Msg.XBOT_WIFI_SEND_MESSAGE_HELPURL,
    });
  },
};

Blockly.Blocks["xbot_wifi_log_data"] = {
  init: function () {
    this.jsonInit({
      colour: "#7F85D4",
      nextStatement: null,
      tooltip: Blockly.Msg.XBOT_WIFI_LOG_DATA_TOOLTIP,
      message0: Blockly.Msg.XBOT_WIFI_LOG_DATA_MESSAGE0,
      previousStatement: null,
      args0: [
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "DATA",
        },
        {
          type: "field_dropdown",
          name: "CHANNEL",
          options: [
            ["V1", "V1"],
            ["V2", "V2"],
            ["V3", "V3"],
            ["V4", "V4"],
            ["V5", "V5"],
            ["V6", "V6"],
            ["V7", "V7"],
            ["V8", "V8"],
            ["V9", "V9"],
            ["V10", "V10"],
            ["V11", "V11"],
            ["V12", "V12"],
            ["V13", "V13"],
            ["V14", "V14"],
            ["V15", "V15"],
            ["V16", "V16"],
            ["V17", "V17"],
            ["V18", "V18"],
            ["V19", "V19"],
            ["V20", "V20"],
          ],
        },
      ],
      helpUrl: Blockly.Msg.XBOT_WIFI_LOG_DATA_HELPURL,
    });
  },
};

Blockly.Blocks["xbot_wifi_on_receive_message"] = {
  init: function () {
    this.jsonInit({
      colour: "#7F85D4",
      nextStatement: null,
      tooltip: Blockly.Msg.XBOT_WIFI_ON_RECEIVE_MESSAGE_TOOLTIP,
      message0: Blockly.Msg.XBOT_WIFI_ON_RECEIVE_MESSAGE_MESSAGE0,
      previousStatement: null,
      args0: [
        {
          variable: Blockly.Msg.XBOT_WIFI_ON_RECEIVE_MESSAGE_MESSAGE1,
          type: "field_variable",
          name: "message",
        },
        { type: "input_dummy" },
        { type: "input_statement", name: "ACTION" },
      ],
      helpUrl: Blockly.Msg.XBOT_WIFI_ON_RECEIVE_MESSAGE_HELPURL,
    });
  },
};

Blockly.Blocks["xbot_wifi_on_receive_message_from_dashboard"] = {
  init: function () {
    this.jsonInit({
      colour: "#7F85D4",
      nextStatement: null,
      tooltip:
        Blockly.Msg.XBOT_WIFI_ON_RECEIVE_MESSAGE_FROM_DASHBOARD_TOOLTIP,
      message0:
        Blockly.Msg.XBOT_WIFI_ON_RECEIVE_MESSAGE_FROM_DASHBOARD_MESSAGE0,
      previousStatement: null,
      args0: [
        {
          variable:
            Blockly.Msg.XBOT_WIFI_ON_RECEIVE_MESSAGE_FROM_DASHBOARD_MESSAGE1,
          type: "field_variable",
          name: "message",
        },
        {
          type: "field_dropdown",
          name: "CHANNEL",
          options: [
            ["V1", "V1"],
            ["V2", "V2"],
            ["V3", "V3"],
            ["V4", "V4"],
            ["V5", "V5"],
            ["V6", "V6"],
            ["V7", "V7"],
            ["V8", "V8"],
            ["V9", "V9"],
            ["V10", "V10"],
            ["V11", "V11"],
            ["V12", "V12"],
            ["V13", "V13"],
            ["V14", "V14"],
            ["V15", "V15"],
            ["V16", "V16"],
            ["V17", "V17"],
            ["V1", "V18"],
            ["V19", "V19"],
            ["V20", "V20"],
          ],
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "ACTION",
        },
      ],
      helpUrl:
        Blockly.Msg.XBOT_WIFI_ON_RECEIVE_MESSAGE_FROM_DASHBOARD_HELPURL,
    });
  },
};

Blockly.Python['xbot_wifi_connect'] = function(block) {
  Blockly.Python.definitions_['import_wifi'] = 'from wifi import *';
  var value_wifi = Blockly.Python.valueToCode(block, 'WIFI', Blockly.Python.ORDER_ATOMIC);
  var value_password = Blockly.Python.valueToCode(block, 'PASSWORD', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'connect(' + value_wifi + ', ' + value_password + ', ' + value_name + ')\n';
  return code;
};

Blockly.Python['xbot_wifi_check_message'] = function(block) {
  Blockly.Python.definitions_['import_wifi'] = 'from wifi import *';
  // TODO: Assemble Python into code variable.
  var code = 'check_message()\n';
  return code;
};

Blockly.Python['xbot_wifi_send_message'] = function(block) {
  Blockly.Python.definitions_['import_wifi'] = 'from wifi import *';
  var value_message = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'send_message(' + value_name + ', ' + value_message + ')\n';
  return code;
};

Blockly.Python['xbot_wifi_log_data'] = function(block) {
  Blockly.Python.definitions_['import_wifi'] = 'from wifi import *';
  var value_data = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_ATOMIC);
  var dropdown_channel = block.getFieldValue('CHANNEL');
  // TODO: Assemble Python into code variable.
  var code = 'log_data("' + dropdown_channel + '", ' + value_data + ')\n';
  return code;
};

Blockly.Python['xbot_wifi_on_receive_message'] = function(block) {
  Blockly.Python.definitions_['import_wifi'] = 'from wifi import *';
  var variable_message = Blockly.Python.variableDB_.getName(block.getFieldValue('message'), Blockly.Variables.NAME_TYPE);
  var statements_action = Blockly.Python.statementToCode(block, 'ACTION');
  // TODO: Assemble Python into code variable.
  var cbFunctionName = Blockly.Python.provideFunction_(
    'on_message_receive_callback_' + block.id,
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(' + variable_message + '):',
      statements_action || Blockly.Python.PASS
    ]);
  
  var code = 'on_receive_message("", ' + cbFunctionName + ')\n';
  return code;
};

Blockly.Python['xbot_wifi_on_receive_message_from_dashboard'] = function(block) {
  Blockly.Python.definitions_['import_wifi'] = 'from wifi import *';
  var variable_message = Blockly.Python.variableDB_.getName(block.getFieldValue('message'), Blockly.Variables.NAME_TYPE);
  var dropdown_channel = block.getFieldValue('CHANNEL');
  var statements_action = Blockly.Python.statementToCode(block, 'ACTION');
  // TODO: Assemble Python into code variable.
  var cbFunctionName = Blockly.Python.provideFunction_(
    'on_message_receive_callback_' + block.id,
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(' + variable_message + '):',
      statements_action || Blockly.Python.PASS
    ]);
  
  var code = 'on_receive_message("' + dropdown_channel + '", ' + cbFunctionName + ')\n';
  return code;
};