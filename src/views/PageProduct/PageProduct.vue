<template>
  <div>
    <BreadCrumbs />
    <div class="container about-product">
      <div class="about-product__image-wrapper">
        <img class="about-product__image" width="715px" :src="getInfoAboutProduct.image" alt="Изображение товара" />
      </div>
      <div class="about-product__information">
        <div class="about-product__descriptions">
          <h1 class="about-product__title">{{ getInfoAboutProduct.title }}</h1>
          <div class="about-product__subtitle paragraph-style-1">
            {{ getInfoAboutProduct.description }}
          </div>
          <div class="about-product__price">$ {{ getInfoAboutProduct.price }}</div>
          <button
            :class="{
              btn_disable: getInfoAboutProduct.favorites,
              btn__favorites: !getInfoAboutProduct.favorites,
            }"
            @click="setProductInFavorites(getInfoAboutProduct)"
          >
            <div>
              <div class="btn___icon"></div>
            </div>

            <span class="btn__text">Избранное</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs';
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'PageProduct',
  components: { BreadCrumbs },
  computed: {
    ...mapGetters(['showProduct']),
    getInfoAboutProduct() {
      const [resultProduct] = this.showProduct.filter((product) => product.title === this.$route.meta.title);
      return resultProduct;
    },
  },
  methods: {
    ...mapMutations(['addFavorites']),
    setProductInFavorites(product) {
      if (!product.favorites) {
        this.addFavorites(product);
      }
    },
  },
};
</script>

<style lang="scss">
.about-product {
  display: flex;
  margin: 32px auto 208px auto;
  height: 750px;
}
.about-product__image-wrapper {
  display: flex;
}
.about-product__image {
  max-width: 680px;
  max-height: 715px;
  margin-right: 40px;
}
.about-product__title {
  color: #0a1e32;
}
.about-product__subtitle,
.about-product__title,
.about-product__price,
.btn__favorites {
  margin-bottom: 24px;
}
.about-product__price {
  font: {
    style: normal;
    weight: 700;
    size: 32px;
  }
  line-height: 40px;
  color: #0a1e32;
}
.btn__favorites {
  width: 200px;
  height: 48px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #0a1e32;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    .btn___icon {
      width: 20px;
      height: 18px;
      margin-right: 8px;
      background-image: url('@/assets/IconFavoritesSVG.svg');
    }
  }
}
.btn___icon {
  width: 20px;
  height: 18px;
  margin-right: 8px;
  background-image: url('@/assets/IconEmptySVG.svg');
}
.btn__text {
  font: {
    style: normal;
    weight: 700;
    size: 16px;
  }
  line-height: 32px;
  color: #0a1e32;
}
.btn_disable {
  opacity: 0.3;
  width: 200px;
  height: 48px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #0a1e32;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}
</style>
