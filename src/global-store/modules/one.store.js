export const useOneStore = defineStore('oneStore', () => {
  const S_ProjectList = ref([1, 2, 3, 44])

  function S_CHANGE_PROJECT_LIST(data) {
    S_ProjectList.value = [...S_ProjectList.value, ...data]
  }

  // 将store中的参数和函数暴露出去
  return {
    S_ProjectList,
    S_CHANGE_PROJECT_LIST
  }
})
