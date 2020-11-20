    "use strict"; //严格模式
    //固定语法
    //获取 div

    /*
    * 获取id的Dom元素
    * @param{string}id
    */
    function $(id) {
        return document.getElementById(id);
    }

//创建元素
    function createEl(node) {
        return document.createElement(node);
    }


    /*
    *定义节点属性
    */
    function setAttr(node,styles){
        for (let key in styles){
            node.setAttribute(key,styles[key]);
        }
    }

    function getAttr(node,attr){
        return node.getAttribute(attr);
    }


    const divDom = $('table-data-wrap');

    const tableDom = createEl('table');//创建Dom元素

    setAttr(tableDom,{
        'width' : '100%',
        'border':'0',
        'cellpadding':'0',
        'cellspacing':'0',
        'id':'table-data-wrap'
    });//定义节点属性

    let aa = getAttr(tableDom,'width');


    tableDom.innerHTML = `<div>
                            <thead>
                             <tr>
                                <th>头像</th>
                                <th>姓名</th>
                                <th>性别</th>
                                <th>年龄</th>
                                <th>手机号</th>
                                <th>国籍</th>
                                <th width="200">爱好</th>
                                <th>头衔</th>
                                <th>操作</th>
                             </tr>
                          </thead>
                          <tbody>
    <tr>
    <td>
    <div class="face">
        <span class="gender icon-boy"></span>
        <img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1583671638490&amp;di=957e858d102bae600e6b5472843bdfe6&amp;imgtype=0&amp;src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F20%2F20180220165946_RiGPS.thumb.700_0.jpeg" alt="">
        </div>
        </td>
        <td>
        <div class="people-name">
        <h4 class="name">小龙女</h4>
        <span class="nickname option-05 fs-12">昵称：夏末的晨曦</span>
    </div>
    </td>
    <td>
    <div class="gender-wrap">
        <span class="gender icon-girl"></span>
        <span class="gender icon-boy option-05"></span>
        </div>
        </td>
        <td>
        <div class="age text-center">
        <p>25</p>
        <span class="option-05 fs-12">（单身狗）</span>
    </div>
    </td>
    <td>
    <div class="phone">
        +86<span class="option-05">（中国）</span><br>
    13588888888
    </div>
    </td>
    <td>
    <div>
    <img src="http://www.web-jshtml.cn/curriculum/javascript/images/china.jpg" alt="中国">
        <p class="country-name" style="color: red;">中国</p>
        </div>
        </td>
        <td>
        <div class="likes">
        <span style="background-color: #468d9c;">跑步</span>
        <span style="background-color: #469c4e;">看电影</span>
        <span style="background-color: #9c468b;">二次元</span>
        <span style="background-color: #9c4646;">小猫小狗</span>
        <span style="background-color: #b9af10;">小说</span>
        </div>
        </td>
        <td>
        <div class="grade">
        <span class="role-name">小白</span>
        <div class="grade-wrap icon-grade">
        <div class="grade-high icon-grade" style="width: 33.33332%;"></div>
        </div>
        </div>
        </td>
        <td>
        <div class="operation">
        <a href="javascript: void(0);" class="operation-btn">设置</a>
        <ul class="links">
        <a href="javascript: void(0);">编辑</a>
        <a href="javascript: void(0);">删除</a>
        <a href="javascript: void(0);">锁定</a>
        <a href="javascript: void(0);">收起</a>
        </ul>
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <div class="face">
        <span class="gender icon-boy"></span>
        <img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1583671638490&amp;di=957e858d102bae600e6b5472843bdfe6&amp;imgtype=0&amp;src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F20%2F20180220165946_RiGPS.thumb.700_0.jpeg" alt="">
        </div>
        </td>
        <td>
        <div class="people-name">
        <h4 class="name">小龙女</h4>
        <span class="nickname option-05 fs-12">昵称：夏末的晨曦</span>
    </div>
    </td>
    <td>
    <div class="gender-wrap">
        <span class="gender icon-girl"></span>
        <span class="gender icon-boy option-05"></span>
        </div>
        </td>
        <td>
        <div class="age text-center">
        <p>25</p>
        <span class="option-05 fs-12">（单身狗）</span>
    </div>
    </td>
    <td>
    <div class="phone">
        +86<span class="option-05">（中国）</span><br>
    13588888888
    </div>
    </td>
    <td>
    <div>
    <img src="http://www.web-jshtml.cn/curriculum/javascript/images/china.jpg" alt="中国">
        <p class="country-name" style="color: red;">中国</p>
        </div>
        </td>
        <td>
        <div class="likes">
        <span style="background-color: #468d9c;">跑步</span>
        <span style="background-color: #469c4e;">看电影</span>
        <span style="background-color: #9c468b;">二次元</span>
        <span style="background-color: #9c4646;">小猫小狗</span>
        <span style="background-color: #b9af10;">小说</span>
        </div>
        </td>
        <td>
        <div class="grade">
        <span class="role-name">小白</span>
        <div class="grade-wrap icon-grade">
        <div class="grade-high icon-grade" style="width: 33.33332%;"></div>
        </div>
        </div>
        </td>
        <td>
        <div class="operation">
        <a href="javascript: void(0);" class="operation-btn">设置</a>
        <ul class="links">
        <a href="javascript: void(0);">编辑</a>
        <a href="javascript: void(0);">删除</a>
        <a href="javascript: void(0);">锁定</a>
        <a href="javascript: void(0);">收起</a>
        </ul>
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <div class="face">
        <span class="gender icon-boy"></span>
        <img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1583671638490&amp;di=957e858d102bae600e6b5472843bdfe6&amp;imgtype=0&amp;src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F20%2F20180220165946_RiGPS.thumb.700_0.jpeg" alt="">
        </div>
        </td>
        <td>
        <div class="people-name">
        <h4 class="name">小龙女</h4>
        <span class="nickname option-05 fs-12">昵称：夏末的晨曦</span>
    </div>
    </td>
    <td>
    <div class="gender-wrap">
        <span class="gender icon-girl"></span>
        <span class="gender icon-boy option-05"></span>
        </div>
        </td>
        <td>
        <div class="age text-center">
        <p>25</p>
        <span class="option-05 fs-12">（单身狗）</span>
    </div>
    </td>
    <td>
    <div class="phone">
        +86<span class="option-05">（中国）</span><br>
    13588888888
    </div>
    </td>
    <td>
    <div>
    <img src="http://www.web-jshtml.cn/curriculum/javascript/images/china.jpg" alt="中国">
        <p class="country-name" style="color: red;">中国</p>
        </div>
        </td>
        <td>
        <div class="likes">
        <span style="background-color: #468d9c;">跑步</span>
        <span style="background-color: #469c4e;">看电影</span>
        <span style="background-color: #9c468b;">二次元</span>
        <span style="background-color: #9c4646;">小猫小狗</span>
        <span style="background-color: #b9af10;">小说</span>
        </div>
        </td>
        <td>
        <div class="grade">
        <span class="role-name">小白</span>
        <div class="grade-wrap icon-grade">
        <div class="grade-high icon-grade" style="width: 33.33332%;"></div>
        </div>
        </div>
        </td>
        <td>
        <div class="operation">
        <a href="javascript: void(0);" class="operation-btn">设置</a>
        <ul class="links">
        <a href="javascript: void(0);">编辑</a>
        <a href="javascript: void(0);">删除</a>
        <a href="javascript: void(0);">锁定</a>
        <a href="javascript: void(0);">收起</a>
        </ul>
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <div class="face">
        <span class="gender icon-boy"></span>
        <img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1583671638490&amp;di=957e858d102bae600e6b5472843bdfe6&amp;imgtype=0&amp;src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F20%2F20180220165946_RiGPS.thumb.700_0.jpeg" alt="">
        </div>
        </td>
        <td>
        <div class="people-name">
        <h4 class="name">小龙女</h4>
        <span class="nickname option-05 fs-12">昵称：夏末的晨曦</span>
    </div>
    </td>
    <td>
    <div class="gender-wrap">
        <span class="gender icon-girl"></span>
        <span class="gender icon-boy option-05"></span>
        </div>
        </td>
        <td>
        <div class="age text-center">
        <p>25</p>
        <span class="option-05 fs-12">（单身狗）</span>
    </div>
    </td>
    <td>
    <div class="phone">
        +86<span class="option-05">（中国）</span><br>
    13588888888
    </div>
    </td>
    <td>
    <div>
    <img src="http://www.web-jshtml.cn/curriculum/javascript/images/china.jpg" alt="中国">
        <p class="country-name" style="color: red;">中国</p>
        </div>
        </td>
        <td>
        <div class="likes">
        <span style="background-color: #468d9c;">跑步</span>
        <span style="background-color: #469c4e;">看电影</span>
        <span style="background-color: #9c468b;">二次元</span>
        <span style="background-color: #9c4646;">小猫小狗</span>
        <span style="background-color: #b9af10;">小说</span>
        </div>
        </td>
        <td>
        <div class="grade">
        <span class="role-name">小白</span>
        <div class="grade-wrap icon-grade">
        <div class="grade-high icon-grade" style="width: 33.33332%;"></div>
        </div>
        </div>
        </td>
        <td>
        <div class="operation">
        <a href="javascript: void(0);" class="operation-btn">设置</a>
        <ul class="links">
        <a href="javascript: void(0);">编辑</a>
        <a href="javascript: void(0);">删除</a>
        <a href="javascript: void(0);">锁定</a>
        <a href="javascript: void(0);">收起</a>
        </ul>
        </div>
        </td>
        </tr>
        <tr>
        <td>
        <div class="face">
        <span class="gender icon-boy"></span>
        <img src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1583671638490&amp;di=957e858d102bae600e6b5472843bdfe6&amp;imgtype=0&amp;src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F20%2F20180220165946_RiGPS.thumb.700_0.jpeg" alt="">
        </div>
        </td>
        <td>
        <div class="people-name">
        <h4 class="name">小龙女</h4>
        <span class="nickname option-05 fs-12">昵称：夏末的晨曦</span>
    </div>
    </td>
    <td>
    <div class="gender-wrap">
        <span class="gender icon-girl"></span>
        <span class="gender icon-boy option-05"></span>
        </div>
        </td>
        <td>
        <div class="age text-center">
        <p>25</p>
        <span class="option-05 fs-12">（单身狗）</span>
    </div>
    </td>
    <td>
    <div class="phone">
        +86<span class="option-05">（中国）</span><br>
    13588888888
    </div>
    </td>
    <td>
    <div>
    <img src="http://www.web-jshtml.cn/curriculum/javascript/images/china.jpg" alt="中国">
        <p class="country-name" style="color: red;">中国</p>
        </div>
        </td>
        <td>
        <div class="likes">
        <span style="background-color: #468d9c;">跑步</span>
        <span style="background-color: #469c4e;">看电影</span>
        <span style="background-color: #9c468b;">二次元</span>
        <span style="background-color: #9c4646;">小猫小狗</span>
        <span style="background-color: #b9af10;">小说</span>
        </div>
        </td>
        <td>
        <div class="grade">
        <span class="role-name">小白</span>
        <div class="grade-wrap icon-grade">
        <div class="grade-high icon-grade" style="width: 33.33332%;"></div>
        </div>
        </div>
        </td>
        <td>
        <div class="operation">
        <a href="javascript: void(0);" class="operation-btn">设置</a>
        <ul class="links">
        <a href="javascript: void(0);">编辑</a>
        <a href="javascript: void(0);">删除</a>
        <a href="javascript: void(0);">锁定</a>
        <a href="javascript: void(0);">收起</a>
        </ul>
        </div>
        </td>
        </tr>
        </tbody>
        </div>`




    divDom.appendChild(tableDom);



