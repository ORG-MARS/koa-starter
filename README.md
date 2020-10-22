# 轻服务云工程 Koa 项目

此项目运行在[轻服务云工程](https://inspirecloud.bytedance.net/docs/cloud-project/quickstart.html)中。

轻服务云工程提供开箱即用的开发体验，开发者无需考虑服务器和数据库等基础设施的搭建，更不用操心测试环境配置、数据备份和线上运维等一系列繁琐之事，只需专注于产品开发本身。

## 安装轻服务 CLI

```sh
npm i -g @byted/inspirecloud-cli --registry=http://bnpm.byted.org/
```

更多 CLI 的使用方法，可参考：[安装和使用 CLI](https://inspirecloud.bytedance.net/docs/cloud-project/cli.html)。

## 本地开发项目

```sh
inspirecloud dev
```

更多本地开发细节，可参考：[本地调试云工程](https://inspirecloud.bytedance.net/docs/cloud-project/dev.html)。

## 部署项目至云端

```sh
inspirecloud deploy
```

或

```sh
inspirecloud deploy -m "Deploying a new feature."
```

更多部署项目的细节，可参考：[部署云工程](https://inspirecloud.bytedance.net/docs/cloud-project/deploy.html)。

## 项目目录

```sh
project
  |- node_modules    # 该项目的依赖项的安装目录
  |- public          # 静态资源目录
  |- src             # 包含主要逻辑文件的目录，为 Koa 的工程文件
      |- controllers   # controller 是业务入口
      |- models        # model 负责数据操作
      |- routes        # route 是路由定义
      |- services      # service 是业务定义
      |- app.js        # app 是 Koa 实例定义
  |- index.js        # 云工程的入口文件
  |- inspirecloud.json  # 轻服务云工程配置文件
  |- package.json    # npm 的通用配置文件
  |- .gitignore      # Git 管理时标识忽略内容的文件
```
## 如何发布类似的模板
想要发布自定义的云工程模板，通过发布一个 `@byted-inspirecloud-template/my-template` 的包，即可为轻服务 CLI 创建名为 `my-template` 的模板。

模板机制很简单：如果用户选择使用 `my-template` 模板，则会将 bnpm 包 `@byted-inspirecloud-template/my-template` 的内容复制到项目目录。

详见[轻服务 CLI 项目模板](https://inspirecloud.bytedance.net/docs/cloud-project/cli-template.html)。

## 反馈

有任何问题和建议，欢迎在 Lark 中搜索加入「轻服务（即 inspirecloud）用户群」反馈。

---
Powered By [轻服务 - 面向未来的云服务](https://inspirecloud.com)
