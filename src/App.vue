<template>
  <div class="app">
    <div>
    <div class="app__wrapper">
      <header>
        <NavBar />
      </header>
      <main>
        <router-view />
      </main>
    </div>
    <footer>
      <BottomNavigation />
    </footer>
  </div></div>
</template>
<script>
import NavBar from '@/components/NavBar';
import BottomNavigation from '@/components/BottomNavigation';

export default {
  name: 'App',
  components: { NavBar, BottomNavigation },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
* {
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
}
.app {
  display: flex;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
}
.app__wrapper {
  min-height: 100vh;
  margin-bottom: -96px;
}
h1 {
  font : {
    style: normal;
    weight: 500;
    size: 40px;
    height: 48px;
  }
}
h2 {
  font : {
    style: normal;
    weight: 500;
    size: 24px;
  }
  line-height: 32px;
}
h3 {
  font: {
    style: normal;
    weight: 500;
    size: 16px;
  }
  line-height: 24px;
}
.paragraph-style-1 {
  font: {
    style: normal;
    weight: 400;
    size: 16px;
  }
  line-height: 24px;
  color: #464c58;
}

.paragraph-style-3 {
  font: {
    style: normal;
    weight: 400;
    size: 12px;
  }
  line-height: 18px;
}
</style>
