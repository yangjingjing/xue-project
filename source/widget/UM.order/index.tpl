<!--
    @require order.less
    @require order.modal.less
    @require order.modal.js
-->
<div class="order-content">
    <div class="order information">
        <h4>订单信息</h4>
        <table class="table order-table">
            <tbody>
                <tr>
                    <td>订单号</td>
                    <td>20154540977421</td>
                </tr>
                <tr>
                    <td>下单时间</td>
                    <td>2015-09-21 13:00:00</td>
                </tr>
                <tr>
                    <td>订单状态</td>
                    <td>支付成功 待支付（你需要在<em>47小时</em>之内支付）</td>
                </tr>
                <tr>
                    <td>支付方式</td>
                    <td id="order-pay">银行卡支付</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="goods information">
        <h4>商品信息</h4>
        <div id="goods-ul">
            <ul class="goods-title">
                <li class="gt-first text-center">商品名称</li>
                <li class="gt-second">商品金额</li>
                <li class="gt-third">代金卡</li>
                <li class="gt-fourth">实际金额</li>
            </ul>
            <ul class="goods-content">
                <li class="gt-first">
                    <div class="ao-subtitle-left">
                        <div class="order-teacher ot-first">
                            <div class=" teacher-main teacher-main-border majar-items">
                                <ul class="avatar-items">
                                    <li>
                                        <a class="avatar-photo">
                                            <img src="img/order-teacher.png">
                                        </a>
                                    </li>
                                    <li>
                                        <a class="avatar-photo">
                                            <img src="img/order-teacher.png">
                                        </a>
                                    </li>
                                </ul>
                                <div class="avatar-roll">
                                    <a href="javascript:void(0);" class="prev none">
                                        <em class="icon-chevron-left">左</em>
                                    </a>
                                    <a href="javascript:void(0);" class="next">
                                        <em class="icon-chevron-right">右</em>
                                    </a>
                                </div>
                            </div>
                            <em>语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p>顾斐老师<br/>赠品：奥数思维训练汇编六年级</p>
                        </div>
                        <div class="order-teacher">
                            <div class=" teacher-main teacher-main-border majar-items">
                                <ul class="avatar-items">
                                    <li>
                                        <a class="avatar-photo">
                                            <img src="img/order-teacher.png">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <em>语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p>顾斐老师</p>
                        </div>
                    </div>
                </li>
                <li class="gt-second marTop">￥960.00</li>
                <li class="gt-third marTop">￥0.00</li>
                <li class="gt-fourth marTop">￥960.00</li>
            </ul>
                <ul class="goods-content">
                    <li class="gt-first">
                        <div class="ao-subtitle-left">
                            <div class="handwrap">
                                <span class="handout"><em>褔利</em>实物讲义邮寄（点击查看邮寄规则）</span>
                                <span class="handnum">X1</span>
                            </div>
                        </div>
                    </li>
                     <li class="gt-second">&nbsp;</li>
                    <li class="gt-third">&nbsp;</li>
                    <li class="gt-fourth marTop">待发货</li>
                </ul>
        </div>
    </div>
    <div class="settle information">
        <h4>结算信息</h4>
        <table class="table order-table">
            <tbody>
                <tr>
                    <td>订单金额</td>
                    <td id="ot-bold"><em>1924.00</em>元</td>
                </tr>
            </tbody>
        </table>
        <span class="btn btn-danger" data-toggle="modal" data-target="#orderModal" onclick="orderModal();">重新支付</span>
    </div>
    <div class="consignee information">
        <h4>收货人信息</h4>
        <table class="table order-table">
            <tbody>
                <tr>
                    <td>收货人姓名</td>
                    <td>王小明</td>
                </tr>
                <tr>
                    <td>所在地区</td>
                    <td>北京市朝阳区</td>
                </tr>
                <tr>
                    <td>所在地址</td>
                    <td>三环到四环之间芍药居2号院3号楼2门203</td>
                </tr>
                <tr>
                    <td>手机号</td>
                    <td>18225489745</td>
                </tr>
                <tr>
                    <td>邮编</td>
                    <td>1000000</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
