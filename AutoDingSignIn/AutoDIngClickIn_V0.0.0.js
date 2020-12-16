/***********************************UI用户定制页面*********************************/
"ui";
var userUi = {
    singinMorning:  0,
    singinNoon:     0,
    singinEvening:  0,
    phoneKey1: 0,
    phoneKey2: 0,
    phoneKey3: 0,
    phoneKey4: 0,
}
ui.layout(
    <vertical padding="30">
        <text gravity="left" textSize="20sp" textColor="blue" textStyle="bold"> 浙江纺织服装职业技术学院</text>
        <text gravity="right" textSize="20sp" textColor="blue" textStyle="bold"> 钉钉体温自动签到</text>
        <text gravity="right" textSize="10sp" textColor="black" textStyle="bold"> 版本：V0.0.0</text>
        
        <vertical>
            <text text=""/>
            <text textColor="red" textSize="20sp"   text="提示: "/>
            <text textColor="red" text="1.如果您在使用过程中出现身体体温不正常的情况，请立刻停止使用本软件，积极配合学校的体温测量工作！"/>
            <text text="2.本软件仅用于学习交流！要爱校爱健康哟！"/>
            <text text="3.本软件不会进行联网操作，即不会泄露您任何隐私。"/>
            <text textSize="20sp" gravity="center" text="亲，(^_^)请放心使用~"/>
        </vertical>

        <vertical>
            <text textColor="black" text="任务时间："/>
            <checkbox  id="uesrClickMorning"  text="早间签到（07:05）"></checkbox>
            <checkbox  id="uesrClickNoon"     text="午间签到（12:05）"></checkbox>
            <checkbox  id="uesrClickEvening"  text="晚间签到（21:05）"></checkbox>
            <text text=""/>
            <text textColor="black" text="开机密码（4位）："/>
            <text text="用于自动解锁您的手机"/>
            
        </vertical>
        <horizontal>
            <input id="phoneKey1" marginLeft="16" padding="12" gravity="center" inputType="numberPassword"/>
            <input id="phoneKey2" marginLeft="16" padding="12" gravity="center" inputType="numberPassword"/>
            <input id="phoneKey3" marginLeft="16" padding="12" gravity="center" inputType="numberPassword"/>
            <input id="phoneKey4" marginLeft="16" padding="12" gravity="center" inputType="numberPassword"/>
        </horizontal>
        
        <button     id="userButtonStart"    w="*"   h="60"   text="完成设置"/>
        <horizontal>
            <button id="userButtonTest" w="auto"   text="测试   (点击后手动请息屏)"/>
            <button id="userButtonStop" w="*"   text="停止脚本"/>
        </horizontal>
        <text text=""/>
        <text text=""/>
        <text gravity="center" textColor="red"    text="使用本软件即默认视为您以同意以上提示"/>
    </vertical>
);
/***********************************UI用户定制页面*********************************/
/***********************************全局变量*********************************/
var phoneKey1=ui.phoneKey1.getText();
var phoneKey2=ui.phoneKey2.getText();
var phoneKey3=ui.phoneKey3.getText();
var phoneKey4=ui.phoneKey4.getText();
/***********************************全局变量*********************************/
/***********************************UI界面按钮多线程命令*********************************/
ui.userButtonStart.click(function(){
    threads.start(function(){
        if(phoneKey1>=10 || phoneKey2>=10 || phoneKey3>=10 || phoneKey4>=10){
            toast("四位密码每空一位 (づ￣3￣)づ╭❤～亲");
            return;
        }
        else toast("您手机的解锁密码:"+phoneKey1+phoneKey2+phoneKey3+phoneKey4);
        Sakura_MainTime();
    })
});
ui.userButtonTest.click(function(){
    threads.start(function(){
        if(phoneKey1>=10 || phoneKey2>=10 || phoneKey3>=10 || phoneKey4>=10){
            toast("四位密码每空一位 (づ￣3￣)づ╭❤～亲");
            return;
        }
        else toast("您手机的解锁密码"+phoneKey1+phoneKey2+phoneKey3+phoneKey4);
        toast("请手动熄灭屏幕,测试程序5s倒计时");
        sleep(6000);
        Sakura_Test();
    })
});
ui.userButtonStop.click(function(){
    threads.shutDownAll();
});
/***********************************UI界面按钮多线程命令*********************************/
/***********************************UI界面签到时间选择*********************************/
ui.uesrClickMorning.on("check",function(check){
    if(check){
        toast("已为您设定好早间签到");
    }
});
ui.uesrClickMorning.on("check",function(check){
    if(check){
        toast("已为您设定好午间签到");
    }
});
ui.uesrClickMorning.on("check",function(check){
    if(check){
        toast("已为您设定好晚间签到");
    }
});
/***********************************UI界面签到时间选择*********************************/
/***********************************主函数命令*********************************/
function Sakura_MainTime(){
    curTime = new Date();
    toast("当前时间是"+curTime.getHours() + ":" + curTime.getMinutes() + ":" + curTime.getSeconds());

    if(device.isScreenOn()){
        device.vibrate(100);
        sleep(200);
        device.vibrate(300);
        sleep(300);
        device.vibrate(100);
        toast("钉钉体温签到时间已到，考虑到您手机屏幕正在使用。");
        toast("本次'自动签到'程序已经关闭，请您稍后完成体温签到，谢谢(づ￣3￣)づ");
        return ;//跳出本次定时签到层序
    }

}
function Sakura_Test(){
    Bright_Screen();
    Unlock_Screen();
    Close_App();
    Open_App();
    Goto_AppClickInPage();
    Sign_in();
    sleep(1000);
    device.cancelKeepingAwake();
}
/***********************************主函数命令*********************************/
/***********************************子函数命令*********************************/
//1.亮屏
function Bright_Screen() {
    log("进入'手机亮屏'子程序")
    device.wakeUpIfNeeded(); //唤醒设备
    device.keepScreenOn(); //保持亮屏
    if (!device.isScreenOn()) {
        log("未唤醒");
        device.wakeUpIfNeeded();
        bright_screen();
    }
    else log("已唤醒");
    sleep(500);//回到手机主页
}
//2.解锁--安卓7.0及以上才能支持手势及坐标操作
function Unlock_Screen() {
    log("进入'手机解锁'子程序");
    swipe(500,2000,500,1000,201); 
    sleep(2000);//上划调出手势界面
    desc(phoneKey1).findOne().click();
    desc(phoneKey2).findOne().click();
    desc(phoneKey3).findOne().click();
    desc(phoneKey4).findOne().click();
    sleep(2000);//密码输入
    home();
    sleep(1000);//回到手机主页
}
//3.结束钉钉进程，确保启动钉钉后进入主页面
function Close_App() {
    log("进入'停止钉钉进程'子程序");
    app.openAppSetting("com.alibaba.android.rimet"); //进入钉钉设置
    text(app.getAppName("com.alibaba.android.rimet")).waitFor();
    let is_sure = textMatches(/(强制.*|.*停止|强行.*)/).clickable(true).findOne();
    if (is_sure.enabled()) {
        sleep(1000);
        textMatches(/(强制.*|.*停止|.*确定.*)/).clickable(true).findOne().click();
        sleep(1000);
        textMatches(/(强制.*|.*停止|.*确定.*)/).clickable(true).findOne().click();
        log(app.getAppName("com.alibaba.android.rimet") + "应用已被关闭");
        sleep(500);
        home();
    } else {
        log(app.getAppName("com.alibaba.android.rimet") + "应用不能被正常关闭,重试");
        sleep(500);
        home();
    }
}
//4.开启钉钉进程
function Open_App() {
    log("进入'钉钉登录判定'子程序");
    app.launchApp("钉钉");
    app.launchPackage("com.alibaba.android.rimet");
    sleep(7000);
    if (id("et_pwd_login").exists()) { //判定是否在登录页面
        var 手机号码 = id("et_phone_input").findOne();
        手机号码.setText("请输入登录名");
        var 密码 = id("et_pwd_login").findOne();
        sleep(1000);
        密码.setText("请输入登录密码");
        id("btn_next").findOne().click();
        info = "账号未登录>>已登录成功"
        log(info)
    } else {
        if (className("android.widget.RelativeLayout").exists()) {
            log("账号已登录")
            sleep(500);
        } else {
            log("未检测到钉钉活动页面>>重启钉钉")
            is_login();
        }
    }
}
//5.进入签到页面
function Goto_AppClickInPage() {
    log("进入'考勤页面'")
    while(1){
        if (null != textMatches("浙纺服").clickable(true).findOne(3000)) {
            toast("Text find:浙纺服")
            coordZhefangfu = textMatches(/(.*浙纺服.*)/).findOnce()
            log("Text find:浙纺服")
            sleep(500);
            coordZhefangfu.click();
            sleep(6000);
            log("进入'浙纺服'");
        }
        else if (null != descMatches("工作台").clickable(true).findOne(3000)){
            toast("Desc find:工作台")
            coordGongzuotai = descMatches(/(.*工作台.*)/).findOnce()
            log("Desc find:工作台")
            sleep(500);
            coordGongzuotai.click();
            sleep(6000);
            log("进入'浙纺服'");
        }

        if (null != textMatches("智慧学工").clickable(true).findOne(3000)) {
            toast("Text find:智慧学工")
            coordZhihuixuegong = textMatches(/(.*智慧学工.*)/).findOne()
            log("Text find:智慧学工")
            sleep(500)
            coordZhihuixuegong.click();
            sleep(5000);
            log("进入'智慧学工'");
        } 

        if (null != textMatches("签到")) {
            toast("Text find:每日签到")
            coordMeiriqiandao = textMatches(/(.*每日签到.*)/).findOne()
            log("Text find:每日签到")
            sleep(500)
            coordMeiriqiandao.click();
            sleep(5000);
            log("进入'每日签到'");

            toast("手机已经进入'智慧学工'->'每日签到'页面，Goto_AppClickInPage子程序完成");
            sleep(2000);
            return ;
        } 
    }
}
function Sign_in(){
    sleep(500);
    input(0,random(361,369)/10);
    if (null != textMatches("签到").checked(false).clickde(false)) {
        coordQiandao = textMatches(/(.*签到.*)/).findOne()
        sleep(500)
        coordQiandao.click();
        sleep(5000);
        toast("'签到'已点击");
    } 
}
/***********************************子函数命令*********************************/
