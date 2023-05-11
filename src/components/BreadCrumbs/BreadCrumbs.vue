<template>
  <div class="container breadcrumbs">
    <!-- Этот компонент правильно генерирует хлебные крошки, вне зависимости от кол-ва вложенных ссылок -->
    <router-link class="breadcrumbs__item breadcrumbs__link" :to="{ name: 'home' }">Главная </router-link>
    >
    <div v-for="(route, id) in getRoute" :key="id">
      <router-link class="breadcrumbs__item breadcrumbs__link" v-if="id !== getRoute.length - 1" :to="{ name: route.name }">
        {{ route.meta.title }}
      </router-link>
      <div class="breadcrumbs__item" v-else>{{ route.meta.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  computed: {
    getRoute() {
      return this.$route.matched;
    },
  },
};
</script>

<style lang="scss">
.breadcrumbs {
  font: {
    style: normal;
    weight: 400;
    size: 16px;
  }
  line-height: 24px;
  margin: 32px auto 16px auto;
  display: flex;
  flex-direction: row;
}
.breadcrumbs__link {
  text-decoration-line: underline;
  color: #464c58;
  &:hover {
    color: #464c58;
  }
}
.breadcrumbs__item {
  margin: 0 5px;
}
</style>
