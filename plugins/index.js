const istanbul = require('istanbul-lib-coverage');

module.exports = (on, config) => {
  // Chọn công cụ báo cáo code coverage
  // Sử dụng `cypress-istanbul`
  if (config.env.coverage) {
    on('task', require('@cypress/code-coverage/task'));
    on('task', require('@cypress/istanbul/task'));
    on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

    // Thêm reporter cho code coverage report
    config.reporterOptions = {
      'report-dir': 'coverage',
      'report-page-title': 'Code Coverage',
      'report-title': 'Code Coverage Report',
      'report-branches': '50',
      'report-functions': '50',
      'report-lines': '50',
      'report-statements': '50',
    };
  }

  return config;
};
