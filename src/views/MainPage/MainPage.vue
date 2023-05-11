<template>
  <div>
    <div class="image"></div>
    <CardContainer :page="'main'" :productList="showProduct" />
  </div>
</template>

<script>
import CardContainer from '@/components/CardContainer';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'MainPage',
  components: { CardContainer },
  data() {
    return {};
  },
  created() {
    if (!this.showProduct.length) {
      this.getProductList();
    }
  },
  methods: {
    ...mapActions(['getProductList']),
  },
  computed: {
    ...mapGetters(['showProduct']),
  },
};
</script>

<style lang="scss">
.image {
  background-image: url(@/assets/ImageHeader.webp);
  width: 1920px;
  height: 505px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  margin-bottom: 70px;
}
</style>
