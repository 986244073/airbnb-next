const { prettier } = require('prefer-code-style')

module.exports = {
    ...prettier,
    printWidth: 80,  // <-- 在这里指定最大长度。为了更好的可读性，一般推荐在 120 以内。

}