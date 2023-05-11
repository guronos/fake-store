<template>
  <div>
    <BreadCrumbs />
    <h1 class="container">Избранное</h1>
    <div v-if="showCountFavorites.length">
      <CardContainer :page="'favorites'" :productList="showCountFavorites" />
    </div>
    <div class="plug__wrapper" v-else>
      <h2 class="plug__text">Список избранного пуст</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardContainer from '@/components/CardContainer';
import BreadCrumbs from '@/components/BreadCrumbs';
export default {
  name: 'FavoritesProducts',
  components: { CardContainer, BreadCrumbs },
  computed: {
    ...mapGetters(['showCountFavorites']),
  },
};
</script>

<style lang="scss">
.plug__wrapper {
  margin: 123px auto;
}
.plug__text {
  text-align: center;
  color: #464c58;
}
</style>
