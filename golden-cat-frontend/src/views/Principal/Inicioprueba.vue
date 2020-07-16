<template>
 <select v-model="selected">
  <option disabled value="">Seleccione un elemento</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
</template>
<script>
new Vue({
  el: '...',
  data: {
    selected: ''
  }
})

</script>
  