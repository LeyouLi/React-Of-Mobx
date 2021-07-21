# 配置装饰器语法

- 1、cnpm install react-app-rewired @babel/plugin-proposal-decorators customize-cra

- 2、在项目根目录下创建 config-overrides.js

```javascript
  const { override, addDecoratorsLegacy } = require("customize-cra");
  module.exports = override(addDecoratorsLegacy());
```

- 3、package.json

```javascript
"script": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
}
```

## 解决vscode编辑器关于装饰器语法的警告
- 修改配置："javascript.implicitProjectConfig.experimentalDecorators": true