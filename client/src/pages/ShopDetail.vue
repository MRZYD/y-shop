<!-- 商品详情页 -->
<template lang="html">
  <div class="detail">
    <span class="detail-catalog">商品详情页 {{ $route.params.productId }}</span>
    <div class="detail-body">
      <img class="detail-img" :src="'static/' + goods.productImage" alt="">
    </div>
    <span class="detail-gn">{{ goods.productName }}</span>
    <span class="detail-gs">￥{{ goods.salePrice }}</span>
    <button class="detail-button" type="button" name="button" @click="addCart">加入购物车</button>
    <modal v-bind:mdShow="mdShowCart" v-on:close="closeModal">
      <p slot="message">
        <svg class="icon-status-ok">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
        </svg>
        <span>加入购物车成功！</span>
      </p>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="mdShowCart = false">继续购物</a>
        <router-link class="btn btn--m btn--red" href="javascript:;" to="/cart">查看购物车</router-link>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
import '../assets/css/detail.css'
export default {
  components: {
    Modal
  },
  data () {
    return {
      productId: '',
      mdShowCart: false,
      goods: {

      }
    }
  },
  mounted () {
    this.productId = this.$route.params.productId
    this.getGoods()
  },
  methods: {
    closeModal () {
      this.mdShowCart = false
    },
    getGoods () {
      this.$http.get(`/goods/detail?productId=${this.productId}`)
      .then(res => {
        console.log(res)
        res = res.data
        if (res.status === '0') {
          this.goods = res.result
        }
      })
    },
    addCart () {
      this.$http.post('/goods/addCart', {productId: this.productId})
      .then(res => {
        res = res.data
        if (res.status === '0') {
          this.mdShowCart = true
          this.$store.commit('updateCartCount', 1)
        } else {
          this.mdShowCart = true
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
