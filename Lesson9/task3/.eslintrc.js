module.exports = {
  extends: 'eslint-config-airbnb-base',
 rules: {
     'no-console': 1,
     "import/prefer-default-export": "off",
 },
 parserOptions: {
     ecmaScript: 10,
     sourceType: 'module'
 },
 env: {
     browser: true,
 }
};