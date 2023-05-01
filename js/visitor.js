//获取访客信息
fetch('https://api.vvhan.com/api/visitor.info').then(res => res.json()).then((data) => { //获取访客信息
    let c = document.querySelectorAll('#visitor .content')[0]
    var system = data['system']
    var addr = data['location']
    var ipaddr = data['ip']
    var weather = data['tq'] + "&nbsp" + data['high'].replace("最低 ", "") + "~" + data['high'].replace("最高 ", "")
    var tip = data['tip']
    var f1 = data['fl']
    system = system === "未知操作系统" ? "移动端" : system
    addr = addr === null ? "未知" : addr
    ipaddr = ipaddr === null ? "未知" : ipaddr
    weather = weather === null ? "未知" : weather
    tip = tip === null ? "未知" : tip
    f1 = f1 === null ? "未知" : f1
    c.innerHTML = `<div><p><span id=name>系统</span><span class="num">${system}</span></p></div>
    <div><p><span id=name>地址</span><span class="num">${addr}</span></p></div>
    <div><p><span id=name>IP地址</span><span class="num">${ipaddr}</span></p></div>
    <div><p><span id=name>天气</span><span class="num">${weather}</span></p></div>
    <div><p><span id=name>风级</span><span class="num">${f1}</span></p></div>
    <div><p><span id=name>温馨提示</span><span class="num">
        <div style="width:100% !important"><span style="font-weight:bold;display:block;">${tip}</span></div>
    </p></span></div>
    `
});

