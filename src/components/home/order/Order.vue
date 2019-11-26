<template>
    <div class="order">
      <div class="title">
           <span>订单</span>
           <span>早餐</span>
      </div>
      <div class="pj">
          <p>尚有<span>5</span>单未评价，立即评价最多可获得<span>716</span>积分</p>
      </div>

      <div class="ord-title">
           <span>我的订单</span>
           <span>全部订单></span>
      </div>

      <div class="order-container">

         <div class="all clearfix">
            <div class="order-item">
                <img src="/static/img/goods/aeljtplr.webp">
            </div>
            <div class="order-item">
                <h3>遇见你烤肉拌饭&大力鸡排套餐</h3>
                <div class="zhuangtai">
                    <span>></span>
                    <span>订单已完成</span>
                </div>
                <h6>22小时16分钟前</h6>
                <h4>脆皮鸡拌饭+鸡排+饮品</h4>
                <p>￥16.4</p>
                <div class="menu">
                    <input type="button" value="再来一单">
                    <input type="button" value="评价晒图得164积分">
                </div>
            </div>
        </div>

         <div class="all clearfix">
            <div class="order-item">
                <img src="/static/img/goods/aeljtplr.webp">
            </div>
            <div class="order-item">
                <h3>遇见你烤肉拌饭&大力鸡排套餐</h3>
                <div class="zhuangtai">
                    <span>></span>
                    <span>订单已完成</span>
                </div>
                <h6>22小时16分钟前</h6>
                <h4>脆皮鸡拌饭+鸡排+饮品</h4>
                <p>￥16.4</p>
                <div class="menu">
                    <input type="button" value="再来一单">
                    <input type="button" value="评价晒图得164积分">
                </div>
            </div>
        </div>

        </div>

    </div>
</template>
<script>
export default {
  name: 'Order'
}
</script>

<style lang="stylus" scoped>
.clearfix{clear:both}
    .order{
        .title{
            width:100%;height:1.6rem;line-height:1.6rem; font-size:0.4rem; color:#fff;background:#00a6ff
            span:nth-child(1){
                text-align:left
                float:left
                margin-left:0.5rem
            }
            span:nth-child(2){
                text-align:right
                float:right
                margin-right:0.5rem
            }
        }
        .pj{
            width: 94%;
            color: #666;
            border: 10px #f5f5f5 solid;
            height: 1.1rem;
            line-height: 1.1rem;
            border-radius: 60px;
            margin: auto;
            margin-top: 30px;
            font-size:.36rem

            span{color:#ff3c00}
        }
        .ord-title{
            width:100%;height:1.6rem;line-height:1.6rem; font-size:0.36rem;
            span:nth-child(1){
                text-align:left
                float:left

                margin-left:0.5rem
            }
            span:nth-child(2){
                text-align:right
                float:right
                margin-right:0.5rem;
                color:#00a6ff
            }
        }

     .order-container {

        width: 90%;
        margin:auto;
        height: auto;
        .all{

         width:100%;
         margin-top:55px;

        .order-item{border-bottom:1px #ccc solid}
        .order-item:nth-child(1) {float:left;width: 30%;
           img{width:100%;text-align:center}
        }
        .order-item:nth-child(2) {float:left;width: 65%;padding-left:5%;text-align: left;
            h3{font-size:.46rem;margin-bottom:15px }
            .zhuangtai{
                font-size:.3rem;
                span:nth-child(1){text-align:left;margin-right:65%}
                span:nth-child(2){text-align:right}
            }
            h6{font-size:.3rem;color:#666;margin-top:35px;font-weight:normal}
            h4{font-size:.4rem;margin-top:45px; margin-bottom 45px}
            p{font-size:.36rem; color:#000;margin-top:15px;}

                .menu{float:right;margin-top:65px;margin-bottom:55px;
                input:nth-child(1){
                    font-size:.36rem; color:#00a6ff;height:1rem;background:#fff; line-height:1rem;padding:0 .3rem; text-align:center; border:5px #00a6ff solid;border-radius:10px
                }

                 input:nth-child(2){
                    font-size:.3rem; color:#ff3c00;height:1rem;background:#fff; line-height:1rem;padding:0 .3rem; text-align:center; border:5px #ff3c00 solid;border-radius:10px
                }
            }

        }
        }
         }

 .clearfix:after { content:"."; display:block; height:0; visibility:hidden; clear:both; }
.all:nth-child(1){margin-top:0px}

    }
</style>
