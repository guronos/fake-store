<template>
  <div class="card">
    <div class="card__wrap">
      <img :src="productProps.image" class="card__image" alt="Изображение товара" />
      <div></div>

      <div class="card__description">
        <div class="paragraph-style-3 card__title">{{ productProps.title }}</div>
        <div class="card__price">$ {{ productProps.price }}</div>
      </div>
    </div>
    <div v-if="page === 'main'" @click.stop="selectProduct()">
      <IconEmpty v-if="!productProps.favorites" class="card__icon" />
      <IconFavorites class="card__icon" v-else />
    </div>
    <div v-else>
      <div class="icon-close" @click.stop="selectProduct()">
        <div class="icon-close__item-1"></div>
        <div class="icon-close__item-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import IconEmpty from '@/assets/IconEmpty.vue';
import IconFavorites from '@/assets/IconFavorites.vue';
import { mapMutations } from 'vuex';
export default {
  name: 'CardProduct',
  components: { IconEmpty, IconFavorites },
  props: {
    productProps: Object,
    page: String,
  },
  methods: {
    ...mapMutations(['addAndRemoveFavorites']),
    selectProduct() {
      this.addAndRemoveFavorites(this.productProps);
    },
  },
};
</script>

<style lang="scss">
.card {
  display: flex;
  justify-content: center;
  width: 320px;
  height: 418px;
  position: relative;
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  }
}

.card__wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card__image {
  max-height: 300px;
  max-width: 320px;
}
.card__description {
  position: absolute;
  width: 152px;
  height: 55px;
  left: calc(50% - 152px / 2);
  bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.card__title {
  color: #0a1e32;
  padding-top: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.card__price {
  font : {
    style: normal;
    weight: 700;
    size: 16px;
  }
  line-height: 24px;
  color: #464c58;
}
.card__icon {
  position: absolute;
  left: 89.38%;
  right: 3.12%;
  top: 2.39%;
  bottom: 92.34%;
  width: 24px;
  height: 22px;
  &:hover {
    cursor: pointer;
  }
}
.icon-close {
  position: absolute;
  right: 10px;
  top: 21px;
  width: 24px;
  height: 22px;
  &:hover {
    cursor: pointer;
  }
  .icon-close__item-1 {
    position: absolute;
    width: 24px;
    height: 2px;
    background: #0a1e32;
    border-radius: 2px;
    transform: rotate(135deg);
  }
  .icon-close__item-2 {
    position: absolute;
    width: 24px;
    height: 2px;
    background: #0a1e32;
    border-radius: 2px;
    transform: rotate(45deg);
  }
}
</style>
