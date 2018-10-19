<script>
  
</script>

<template>
  <div class="what">
    <div class="content">
      <div>
        <h3>What is Portal Network</h3>
        <p>Portal Network solves the problem of user adoption, complexity, human error and lack of interoperability by deploying BNS standard across multiple blockchain protocols.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$container : 960px;
.what {
  margin-top: -224px;
}
.content {
  max-width: $container;
  width: 100%;
  margin: 0px auto 62px auto;
  >div {
    max-width: 630px;
    width: 100%;
    background-color: #000;
    padding: 65px 56px 65px 47px;
    h3 {
      font-size: 30px;
      font-weight: 800;
      color: #fff;
      margin-bottom: 10px;
      &:before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        background: url("~images/what.png") top left no-repeat;
        background-size: 100% auto;
        width: 42px;
        height: 52px;
        margin-right: 48px;
      }
    }
    p {
      margin-left: 90px;
      font-size: 16px;
      font-weight: 600;
      line-height: 25px;
      color: #fff;
    }
  }
}
</style>