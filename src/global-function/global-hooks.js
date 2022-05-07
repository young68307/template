export const useName = () => {
  const name = ref('张三')
  function setName(value) {
    name.value = value
  }
  return { name, setName }
}
