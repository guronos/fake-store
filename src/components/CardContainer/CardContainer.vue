<template>
  <div class="main-container container">
    <div v-for="(item, id) in productList" :key="id">
      <div @click="getLink(item)">
        <CardProduct :productProps="item" :page="page" />
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from '@/components/CardProduct';
export default {
  name: 'CardContainer',
  components: { CardProduct },
  props: {
    productList: Array,
    page: String,
  },
  methods: {
    getLink(productItem) {
      this.$router.push({
        name: 'prod',
        params: { id: productItem.id, meta: { title: 'lol' } },
      });
      this.$route.meta.title = productItem.title;
    },
  },
};
</script>

<style lang="scss">
.main-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  flex-wrap: wrap;
  margin: 32px auto 138px auto;
}
</style>
