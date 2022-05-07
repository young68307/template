# Vue3 + Vite + Pinia + Ant-Design-Vue创建的项目模板

## 项目插件说明.md 
   * 关于项目中使用的插件说明
---
## 特殊文件说明
   * .eslintrc-auto-import.json: 使用 unplugin-auto-import 自动引入依赖的组件后eslint会出现提示性错误, 此文件可避免

   * auto-import.d.js: unplugin-auto-import 自动引入依赖插件的配置文件,由插件自动生成
---
## 项目中的一些规范说明
  
  **全局公共组件: src/global-components**
  * 此文件夹下为各个公共组件的文件夹, *命名为首字母大写, 单词之间以-连接*, 例如: Global-Header
  * 公共组件的文件夹是对应的公共组件的文件, *命名和此文件夹的名称一致*, 例如: Global-Header.vue


  **业务模块: src/global-function**
  * **global-hooks.js文件**:  封装全局的hooks方法的js文件 

  * 全局hooks方法的命名: *use_加首字母大写的名称*, 其中变量和函数的命名参考如下: const { name, setName } = useName()


  **store: src/global-store**
  * **index.js文件**:  集中导出modules里面的store文件

  * **modules文件夹**: 存放各个业务所需的store.js
  
  * store文件的命名为 **xxx.store.js** 
  
  * 参数名: *S_加首字母大写的名称*, 例如: S_ProjectList 

  * 函数名: *S_加所有字母大写的名称, 单词之间以_连接*, 例如: S_CHANGE_PROJECT_LIST

  
  **api接口: src/global-services**
  * **index.js文件**:  配置全局的axios, 并导出封装好的axios请求函数

  * **modules文件夹**: 存放各个业务所需的接口函数的js文件

  * api接口文件的命名为 *某某.api.js*

  * 每个请求函数单独导出, export const 某某函数, 函数名为 *Api_加首字母大写的名称*, 例如: Api_GetList


  **业务模块: src/view-pages**
  * **每一段逻辑的参数和函数最好集中在一起, 方便查询, 若不需要某个文件或文件夹, 必须及时删掉文件或文件夹以及删除对其的引用** 

  * 此文件夹下为各个业务模块的文件夹, 文件夹名为 *首字母大写, 单词之间以-连接*, 例如: Student-Record

  * 此业务模块的默认入口文件命名: *Index.vue*

  * 此业务模块的私有组件文件夹命名: *My-Components*, 私有组件的命名为 *My-加首字母大写的名称*, 例如: My-Hello.vue

  * 此业务模块的私有表单文件夹命名: *My-Form*, 私有表单的命名为 *My-加首字母大写的名称-Form*, 例如: My-Student-Form.vue

  * **global-hooks.js文件**:  封装全局的hooks方法的js文件 

  * 此业务模块的私有Hooks文件夹命名: *My-Hooks*, 此文件夹下默认的文件为index.js

  * hooks方法的命名: *use_加首字母大写的名称*, 其中变量和函数的命名参考如下: const { name, setName } = use_Name()

  * 函数名: *F_加首字母大写的名称*, 例如: function F_ChangeUserInfo() {}