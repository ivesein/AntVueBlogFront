<template>
  <div class="sider">
    <div class="sider__left">
      <Profile/>
      <Categories/>
      <NewestArticles/>
    </div>
    <div class="sider__right">
      <Archives/>
    </div>
  </div>
</template>
<script>
import Profile from './profile'
import Archives from './archives'
import Categories from './categories'
import NewestArticles from './newestArticles'

export default {
  components: {
    Profile,
    Archives,
    Categories,
    NewestArticles,
  },
  mounted () {
    this.$store.dispatch('FETCH_CATEGORIES')
    this.$store.dispatch('FETCH_NEWEST_ARTICLE')
    this.$store.dispatch('FETCH_ARCHIVES')
  }
}
</script>
<style lang="scss">
  .sider {
    color: #000;
    width: 800px;
    padding: 40px 50px;
    box-sizing: border-box;
    &__left {
      float: left;
      width: 49%;
    }
    &__right {
      float: right;
      width: 49%;
    }
  }

  .sider:after {
    content: '';
    height: 0;
    display: block;
    clear: both;
  }

  @media (max-width: 960px) {
    .sider {
      padding: 0;
      width: 100%;
    }
  }

  @media (max-width: 1600px) {
    .sider {
      width: 500px;
      &__left {
        float: none;
        width: 100%;
      }
      .sider__right {
        float: none;
        width: 100%;
      }
    }
  }

</style>
