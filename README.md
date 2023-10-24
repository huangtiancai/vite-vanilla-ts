使用 Vite 预设的 vanilla-ts 模板学习 typescript

JavaScript 模块

- 无模块

  - 多个 js 文件实现了简单的模块化
  - 污染全局作用域

- CommonJS

  - 通过 module.exports 或 exports 来暴露模块，通过 require 来加载模块
  - 一次加载，多次使用。对同一个模块而言，只会运行一次，多次使用时会从缓存中获取
  - 模块加载的顺序，按照它出现的顺序
  - 代码都运行在模块作用域，不会造成全局污染
  - 同步加载，一般用于 node 端，不适用于浏览器端

- AMD

  - 异步加载，主要用在浏览器环境中
  - 主要依赖于 require.js 库
  - 不能按需加载，而是必须提前加载所有的依赖，实现了浏览器端的模块化加载

- CMD

  - 实现 js 库为 sea.js
  - 通过按需加载的方式，而不是必须在模块开始就加载所有的依赖，实现了浏览器端的模块化加载

- ES6 模块化（真正的规范）

  - ES6 目前无法在浏览器中执行，通过 babel 将不被支持的 import 编译为当前受到广泛支持的 require
  - import、export
    - export 命令用于规定模块的对外接口
    - import 命令用于输入其他模块提供的功能
  - 注意 导入、导出的方式

    - export
      - 统一导出 export { a, b, ... }
      - 分别导出 export a; export b; ...
    - import

      - import { a, b, ... } from './module' 导出与导入变量名一致，调用方式：直接调用 a();
      - import \* as common from './module' 全部导入 as 为为导入的变量重命名，调用方式：直接调用 common.a();

    - export default
      - export default 后不用使用 {}
      - export default a
    - import
      - import aa from './module' import 后不采用{}导入，后跟的变量名可以随意更改，想取什么取什么 aa()

Webpack
Babel

参考：https://blog.csdn.net/virgo_ling/article/details/130153762

在 TypeScript 中使用第三方库，如使用 lodash

1. 需要安装 lodash 的类型定义文件： typescript 引入 lodash，需要引入`@types/lodash` or `@types/lodash-es` 依赖，安装了类型定义文件后，TypeScript 编译器会自动使用它们

```javascript
// 安装：
npm i lodash
npm i -D @types/lodash

npm i lodash-es
npm i -D @types/lodash-es
```

参考：https://blog.csdn.net/m0_49768044/article/details/131979045

2.  lodash 有两个版本

- lodash 是默认的 `commonjs` 版本
- lodash-es 是 lodash 的 `es modules` 版本，体积也更小

以下是 `lodash` 导入的方式区别：

```javascript
// lodash
// 方式1：引入整个lodash对象
import _ from "lodash";
// 方式2：按名称引入特定的函数
import { round, debounce, throttle } from "lodash"; // 以上两种方式都会引入整个 lodash 库（注意上面解构的方法数量不同，引入的包大小有少许不同）

// 方法3：按需引入
// import round from "lodash/round"; // 3.49KB
// import debounce from "lodash/debounce"; // 3.49KB
// import throttle from "lodash/throttle"; // 3.49KB

// lodash-es
// 方式1：引入整个lodash对象
import _ from "lodash";
// 以下两种方式均为按需引入

// 方式2：按名称引入特定的函数
import round from "lodash-es/round";
import debounce from "lodash-es/debounce";
import throttle from "lodash-es/throttle";

// 方法3：按需引入 *
import { round, debounce, throttle } from "lodash-es";
```
