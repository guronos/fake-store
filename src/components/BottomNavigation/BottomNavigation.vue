<template>
  <div class="footer">
    <div class="footer-wrap container">
      <router-link to="favorites"> <div class="footer-wrap__text">Избранное</div></router-link>
      <h2 class="footer-wrap__phone">8 800 888 00 88</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  width: 1920px;
  height: 96px;
  background: #0a1e32;
}
.footer-wrap {
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-wrap__text {
  font : {
    style: normal;
    weight: 500;
    size: 18px;
  }
  line-height: 24px;
  display: flex;
  align-items: center;

  color: #ffffff;
}
.footer-wrap__phone {
  color: #ffffff;
}
</style>
