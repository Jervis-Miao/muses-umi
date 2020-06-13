# umi project

## 环境要求

node >= 10 yarn > 1.16
npm/yarn registry 为淘宝镜像 registry（http://registry.npm.taobao.org/），可以进行私有库依赖

### 淘宝镜像 registry 配置

淘宝镜像 registry 地址为 http://registry.npm.taobao.org/  
可通过如下命令配置 npm：
```
npm set registry http://registry.npm.taobao.org
yarn config set registry http://registry.npm.taobao.org
```

**注意：** 淘宝镜像 registry 不使用代理访问，如果配置了代理，通过以下命令去掉：
```
npm config delete proxy
```

## 代码风格

我们的代遵循统一的代码风格，其内容在参考 [airbnb](https://github.com/airbnb/javascript) 的基础上做了一些修改。

JavaScript (ES6) : [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)  
React : [https://github.com/airbnb/javascript/tree/master/react](https://github.com/airbnb/javascript/tree/master/react)

## ESLint

为了保证 Code Style 的执行，我们使用 ESLint 帮助我们检查不符合规范的地方。其配置文件为 [.eslintrc.js](.eslintrc.js) 。  
该工具在常用的编辑器中都有插件支持。我们主要讲 Intellij/WebStorm 中的配置方法。

### Intellij/WebStorm

1. 打开设置：Settings > Languages & Frameworks > Code Quality Tools > ESLint
2. 勾选 `Enable` / `auto...`
3. Configuration file 选择项目根目录下的 ".eslintrc"

## javascript 格式化

格式化使用项目内的 xyz-x.x-on-xxx.xml

## 本地开发

安装依赖

```bash
$ yarn
```

启动

```bash
$ yarn start
```

默认端口 8000，可以修改 [package.json](package.json) 文件中 `PORT=8000` 部分。

### 更多

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).

