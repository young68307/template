<template>
  <div>One-Page</div>
  <div>{{ S_ProjectList }}</div>
</template>

<script setup>
  /*
    大致书写规范
    vue / vue-router / pinia 的api默认提供自动引入, 在页面中无需手动引入
  */

  import { useOneStore } from 'global-store'

  /* 逻辑 >> 获取store */
  // 函数 >> 获取store里面的所需参数和函数
  function F_GetStore() {
    const store = useOneStore()
    const { S_ProjectList } = storeToRefs(store)
    return { S_ProjectList }
  }
  const { S_ProjectList } = F_GetStore()
  /* 逻辑结束-------------------------------------------------------------------------------- */

  /* 逻辑 >> 这一段代码的介绍 */
  // 参数 >> 某某参数, 例如:
  // const userInfo = reactive({ name: '李四', age: 40 })
  // 函数 >> 某某函数, 例如:
  // function F_ChangeUserInfo() {}
  /* 逻辑结束-------------------------------------------------------------------------------- */
</script>

<style lang="less" scoped></style>
