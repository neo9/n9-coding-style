module.exports = {
  'extends': [
    'tslint-config-airbnb',
    'tslint-eslint-rules'
  ],
  'rules': {
    'no-shadowed-variable': true,
    'no-any': true,
    'no-console': [
      true,
      'debug',
      'info',
      'time',
      'timeEnd',
      'trace',
      'log'
    ],
    'no-debugger': true
  }
}

