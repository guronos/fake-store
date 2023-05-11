<template>
  <div>
    <div class="navigation container">
      <router-link :to="{ name: 'home' }"> <Logo class="logo navigation__logo" /></router-link>
      <router-link :to="{ name: 'favorites' }">
        <div class="navigation__favorites">
          <IconFavorites />
          <div class="navigation__favorites-count">
            <span>{{ showCountFavorites.length }}</span>
          </div>
        </div>
      </router-link>
    </div>
    <hr />
  </div>
</template>

<script>
import IconFavorites from '@/assets/IconFavorites.vue';
import Logo from '@/assets/Logo.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'NavBar.vue',
  components: { IconFavorites, Logo },
  computed: {
    ...mapGetters(['showCountFavorites']),
  },
};
</script>

<style lang="scss">
$counter-size: 16px;

.navigation {
  height: 75px;
  max-height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 161px;
  height: 40px;
  display: flex;
  align-items: end;
  justify-content: space-between;
}
.navigation__favorites {
  width: 20px;
  height: 18px;
  position: relative;
}
.navigation__favorites-count {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: #eb4c47;
  width: $counter-size;
  height: $counter-size;
  position: absolute;
  right: -45%;
  top: 0;
  span {
    font: {
      style: normal;
      weight: 700;
      size: $counter-size/2;
    }
    line-height: 12px;
    color: #ffffff;
  }
}
</style>
