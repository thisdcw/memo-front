# memo管理系统前端

### 介绍

一个多功能管理系统,致力于打造成优秀的开源框架项目,前端采用Vue、Element UI、LayUi、
后端采用Spring Boot、Mysql、Redis & shiro。 权限认证使用shiro

### 系统要求

- JDK >= 21
- MySQL >= 8.0.34
- Maven >= 3.8
- Node >= 16.x

### 核心技术

- **SpringBoot2.6.4**:稳定的性能特性
- **knife4j**:一个为 Swagger 接口文档增强的工具，提供了更直观的 API 文档展示和更便捷的接口测试体验
- **Vue3.4**:Vue.js的最新稳定版本，提供更强的性能和更丰富的功能，构建响应式用户界面。
- **Vite5**:使用`Vite 5`作为前端开发和构建工具，它利用现代浏览器的原生 ES 模块导入特性，提供了快速的冷启动和即时模块热更新
- **Typescript**:通过 `TypeScript` 的集成，引入静态类型检查，增强了代码的可维护性和可读性，提前避免潜在的错误
- **Pinia**:状态管理采用 `Pinia`，这是 Vue 3 的解构式状态管理库，它简单、灵活且易于使用，优化了应用的状态管理。
- **Element-Plus**:一个基于 Vue 3 的组件库，提供了一系列高质量的 UI 组件，帮助开发者快速构建美观、功能完备的用户界面。

### 打包成docker

```bash
docker build -t memo-front:v0.0.1 .
```

### 启动

```bash
docker run -d -p 5173:80 --name memo-front memo-front:v0.0.1
```
