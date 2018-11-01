<script>
  
</script>

<template>
  <div class="what">
    <div class="content">
      <div>
        <h3>
          <span data-aos="fade-right"><img src="../../images/what.png" alt=""></span>
          <p data-aos="fade-right" data-aos-duration="500">What is Portal Network</p>
        </h3>
        <p data-aos="fade-right">Portal Network solves the problem of user adoption, complexity, human error and lack of interoperability by deploying BNS standard across multiple blockchain protocols.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/scss/_var.scss";

.what {
  margin-top: -224px;
  @media screen and (max-width: $pad) {
    margin-top: -175px;
  }
  @media screen and (max-width: $mob) {
    margin-top: 0px;
  }
}
.content {
  max-width: $container;
  width: 100%;
  margin: 0px auto;
  >div {
    max-width: 630px;
    width: 100%;
    background-color: #000;
    padding: 65px 56px 65px 47px;
    @media screen and (max-width: $pad) {
      margin: 0px auto;
      padding: 30px 44px 43px 44px;
    }
    h3 {
      display: flex;
      align-items: center;
      overflow: hidden;
      margin-bottom: 10px;
      @media screen and (max-width: $mob) {
        font-size: 20px;
        margin-bottom: 20px;
      }
      span {
        display: block;
        width: 42px;
        margin-right: 46px;
        img {
          width: 100%;
        }
      }
      p {
        font-size: 30px;
        font-weight: 800;
        color: #fff;
        @media screen and (max-width: $mob) {
          font-size: 20px;
        }
      }
    }
    >p {
      margin-left: 90px;
      font-size: 16px;
      font-weight: 600;
      line-height: 25px;
      color: #fff;
      overflow: hidden;
      @media screen and (max-width: $mob) {
        margin-left: 0px;
        text-align: center;
        font-weight: 300;
      }
    }
  }
}
</style>