/**********************AutoDIngSignIn_V0.1.3*************************/

/***********************************UI用户定制页面*********************************/
"ui";
/***********************************全局变量*********************************/
var userUi = {
    singinMorning:  0,
    singinNoon:     0,
    singinEvening:  0,
    phoneKey1: 0,
    phoneKey2: 0,
    phoneKey3: 0,
    phoneKey4: 0,
    phoneKey5: 0,
    phoneKey6: 0,
    agrre:0,
    keynum:0
}
var userTime={
    timeMorning:0,
    timeNoon:0,
    timeEvening:0    
}
/***********************************全局变量*********************************/
ui.layout(
    <scroll>
        <vertical padding="25">
            <text gravity="left" textSize="23sp" textColor="blue" textStyle="bold"> 浙江纺织服装职业技术学院</text>
            <text gravity="right" textSize="23sp" textColor="blue" textStyle="bold"> 钉钉体温自动签到</text>
            <text gravity="right" textSize="10sp" textColor="black" textStyle="bold"> 版本：V0.1.3</text>
            <vertical>
                <text textColor="white" textSize="17sp" bg="#00ccff"  text="提示: "/>
                <text textColor="red" text="1.如果您在使用过程中出现身体体温不正常的情况，请立刻停止使用本软件，积极配合学校的体温测量工作！"/>
                <text text="2.使用本软件需要Android7.0以上版本"/>
                <text textColor="red" text="3.请将软件的'无障碍服务'等功能打开，否则将手机将出现无法自动签到"/>
                <text text="4.本软件不会进行联网操作，即不会泄露您任何隐私。"/>
                <text text=""/>
                <text gravity="center" textSize="20sp" text="请亲，请放心使用( ･´ω`･ )"/>
                <text text=""/>
            </vertical>

            <text textColor="white" textSize="17sp"  bg="#00ccff" text="任务时间："/>
            <vertical>
                <checkbox  id="uesrClickMorning"  text="早间打卡 07:05"></checkbox>
                <checkbox  id="uesrClickNoon"     text="午间打卡 12:05"></checkbox>
                <checkbox  id="uesrClickEvening"  text="晚间打卡 21:05"></checkbox>
                <text text=""/>
            </vertical>

                <text textColor="white" textSize="17sp"  bg="#00ccff" text="开机密码："/>
                <text text="用于自动解锁您的手机"/>
            <horizontal>
                <radiogroup>
                    <radio id="keyFore" text="4位密码"></radio>
                    <radio id="keySix"  text="6位密码"></radio>
                    <radio id="keyVoid" text="无密码" checked="true"></radio>
                </radiogroup>
            </horizontal>

            <horizontal gravity="center" bg="#ffc0cd">
                <input id="phoneKey1" padding="10" gravity="center" inputType="numberPassword"/>
                <input id="phoneKey2" padding="10" gravity="center" inputType="numberPassword"/>
                <input id="phoneKey3" padding="10" gravity="center" inputType="numberPassword"/>
                <input id="phoneKey4" padding="10" gravity="center" inputType="numberPassword"/>
                <input id="phoneKey5" padding="10" gravity="center" inputType="numberPassword"/>
                <input id="phoneKey6" padding="10" gravity="center" inputType="numberPassword"/>
            </horizontal>

            <text text=""/>
            <checkbox id="agrre" textSize="17sp" textColor="red"    text="同意上述提示,既可使用本软件"></checkbox>
            <text text=""/>

            <button     id="userButtonOne" w="*"   h="60"  text="一键打卡"/>
            <button     id="userButtonStart" w="*"   h="60"  text="启动定时打卡程序"/>
            <horizontal>
                <button id="userButtonStop" w="auto"   text="停止脚本"/>
                <button id="userButtonTest" w="*"   text="测试打卡程序   (点击后手动请息屏)"/>
            </horizontal>

            <text text=""/>
            <text text=""/>
            <horizontal>
                <button id="userBi"  bg="#ffc0cd"w="auto"   text="打赏"/>
                <button id="userHalp" w="*"   text="获取帮助 ∑(っ°Д°;)っ 反馈BUG"/>
                </horizontal>
            <text text=""/>

            <vertical>
                <text text="若您觉得本软件使用方便，不妨点击上方“打赏”按钮，"/>
                <text text="给这个快吃不起饭的Up打点赏钱(づ￣3￣)づ╭❤～"/>
                <text text=""/>
                <img src="https://i2.hdslb.com/bfs/face/e9e59c290616df86e9d6e52211140a8fb958b3b0.jpg@150w_150h.jpg"/>
                <text gravity="center" text="The Author:  樱落樱花瓣"/>
            </vertical>
            
        </vertical>
    </scroll>
);
/***********************************UI用户定制页面*********************************/
/***********************************UI界面选择*********************************/
ui.uesrClickMorning.on("check",function(check){
    if(check){
        userUi.singinMorning=1;
        if(userUi.singinMorning){
            toast("已为您设定好早间签到");
        }
    }
});
ui.uesrClickNoon.on("check",function(check){
    if(check){
        userUi.singinNoon=1;
        if(userUi.singinNoon){
            toast("已为您设定好午间签到");
        }
    }
});
ui.uesrClickEvening.on("check",function(check){
    if(check){
        userUi.singinEvening=1;
        if(userUi.singinEvening){
            toast("已为您设定好晚间签到");
        }
    }
});
ui.agrre.on("check",function(check){
    if(check){
        userUi.agrre=1;
        toast("您已同意上述条款");
    }
});
ui.keyFore.on("check",function(check){
    if(check){
        userUi.keynum=4;
    }
});
ui.keySix.on("check",function(check){
    if(check){
        userUi.keynum=6;
    }
});
ui.keyVoid.on("check",function(check){
    if(check){
        userUi.keynum=0;
    }
});
/***********************************UI界面选择*********************************/
/***********************************UI界面按钮多线程命令*********************************/
ui.userButtonOne.click(function(){
    threads.start(function(){
        if(confirm("是否确定开始'一键打卡'功能")){//对话框确认开启
            toast("已为启动'一键打卡'程序");
            device.keepScreenOn(); //保持亮屏
            Close_App();
            Open_App();
            Goto_AppClickInPage();
            Sign_in();
            sleep(1000);
            device.cancelKeepingAwake();//关闭保持亮屏
        }
    })
});
ui.userButtonStart.click(function(){//定时程序
    if(userUi.agrre==0){
        toast("请勾选'同意上述条款'方可使用软件");
        return ;
    }
    UserDataSetup();
    threads.start(function(){
        if(userUi.phoneKey1>=10 || userUi.phoneKey2>=10 || userUi.phoneKey3>=10 || 
            userUi.phoneKey4>=10 || userUi.phoneKey5>=10 || userUi.phoneKey6>=10){
            toast("四位密码每空一位 (づ￣3￣)づ╭❤～亲");
            return;
        }
        else{
            if(confirm("是否确定开始定时签到功能")){//对话框确认开启
                alert("成功开启");
                if(userUi.keynum==0){
                    toast("您手机的未设置解锁密码");
                    toast("软件将自动跳过自动解锁程序");
                }
                Sakura_MainTime();
            }
        }
    })
});
ui.userButtonTest.click(function(){//检查程序
    if(userUi.agrre==0){
        toast("请勾选'同意上述条款'方可使用软件");
        return ;
    }
    UserDataSetup();
    threads.start(function(){
        if(userUi.phoneKey1>=10 || userUi.phoneKey2>=10 || userUi.phoneKey3>=10 || 
            userUi.phoneKey4>=10 || userUi.phoneKey5>=10 || userUi.phoneKey6>=10){
            toast("四位密码每空一位 (づ￣3￣)づ╭❤～亲");
            return;
        }
        else{
            if(confirm("是否确定开始定时签到功能")){//对话框确认开启
                alert("成功开启");
                if(userUi.keynum==0){
                    toast("您手机的未设置解锁密码");
                    toast("软件将自动跳过自动解锁程序");
                    toast("请手动熄灭屏幕,测试程序5s倒计时");
                    sleep(10000);
                }
                else{
                    toast("软件即将运行测试程序");
                    toast("请手动熄灭屏幕,测试程序5s倒计时");
                    sleep(10000);
                } 
            }
        }
        Sakura_Test();
    })
});
ui.userButtonStop.click(function(){
    threads.shutDownAll();
    alert("已为您停止所有打卡程序");
});
ui.userBi.click(function(){
    alert("感谢投喂! ~~(◍´꒳`◍)~~","感谢金主大大的投喂~");
    app.openUrl("https://i0.hdslb.com/bfs/article/0be39a299ef79df39acf059eef86cd89d5f057bf.jpg@1320w_1320h.webp");
});
ui.userHalp.click(function(){
    app.openUrl("https://www.bilibili.com/read/cv8815679");
    alert("求关注! ლ(＾ω＾ლ)!!!","可以在专题的评论区反馈BUG哟，本野生型技术Up看到都会回复的呢~");
});
/***********************************UI界面按钮多线程命令*********************************/

/***********************************主函数命令*********************************/
function Sakura_MainTime(){
    while(1){
        curTime = new Date();
        if(userUi.singinMorning && curTime.getHours()== 7 && curTime.getMinutes()==5){
            Check_the_screen();
        }
        if(userUi.singinNoon    && curTime.getHours()==12 && curTime.getMinutes()==5){
            Check_the_screen();
        }
        if(userUi.singinEvening && curTime.getHours()==21 && curTime.getMinutes()==5){
            Check_the_screen();
        }
        /************测试模块**********/
        if(curTime.getHours()==16 && curTime.getMinutes()==55){
            Check_the_screen();
        }
        log("当前时间是"+curTime.getHours() + ":" + curTime.getMinutes() + ":" + curTime.getSeconds());
        sleep(5000);
        /************测试模块***********/
        //sleep(10000);//10s
    }
}
function Sakura_Test(){
    Bright_Screen();
    if(userUi.phoneKey1 + userUi.phoneKey2 + userUi.phoneKey3 + 
        userUi.phoneKey4 + userUi.phoneKey5 + userUi.phoneKey6){
        Unlock_Screen();
    }
    device.keepScreenOn(); //保持亮屏
    Close_App();
    Open_App();
    Goto_AppClickInPage();
    Sign_in();
    sleep(1000);
    device.cancelKeepingAwake();//关闭保持亮屏
}
/***********************************主函数命令*********************************/
/***********************************子函数命令*********************************/
//0.用户数据输入
function UserDataSetup(num){
    userUi.phoneKey1=ui.phoneKey1.getText();
    userUi.phoneKey2=ui.phoneKey2.getText();
    userUi.phoneKey3=ui.phoneKey3.getText();
    userUi.phoneKey4=ui.phoneKey4.getText();
    userUi.phoneKey5=ui.phoneKey5.getText();
    userUi.phoneKey6=ui.phoneKey6.getText();
    toast("您手机的解锁密码:"+userUi.phoneKey1 + userUi.phoneKey2 + userUi.phoneKey3 + 
                            userUi.phoneKey4 + userUi.phoneKey5 + userUi.phoneKey6);
}
//1.亮屏
function Bright_Screen() {
    log("进入'手机亮屏'子程序")
    device.wakeUpIfNeeded(); //唤醒设备
    sleep(500);click(0);sleep(400);click(0);sleep(500);//模拟双击亮屏
    device.keepScreenOn(); //保持亮屏
    if (!device.isScreenOn()) {
        log("未唤醒");
        device.wakeUpIfNeeded();
        bright_screen();
    }
    else log("已唤醒");
    sleep(500);
   
    var xSatrt=0,yStart=0,xEnd=0,yEnd=0,i=0;
    for(i=0;i<5;i++){
        swipe(xSatrt,yStart,xEnd,yEnd,random(201,230)); //上划调出密码界面
        xSatrt=500-random(0,100);
        yStart=2000+random(0,500);
        xEnd=501+random(0,100);
        yEnd=700-random(0,500);   
    }
    sleep(2000);
}
//2.解锁--安卓7.0及以上才能支持手势及坐标操作
function Unlock_Screen() {
    log("进入'手机解锁'子程序");   
    if(userUi.keynum==4){
        desc(userUi.phoneKey1).findOne().click();log("已输入密码："+userUi.phoneKey1);
        desc(userUi.phoneKey2).findOne().click();log("已输入密码："+userUi.phoneKey2);
        desc(userUi.phoneKey3).findOne().click();log("已输入密码："+userUi.phoneKey3);
        desc(userUi.phoneKey4).findOne().click();log("已输入密码："+userUi.phoneKey4);
    }
    else if(userUi.keynum==6){
        desc(userUi.phoneKey1).findOne().click();log("已输入密码："+userUi.phoneKey1);
        desc(userUi.phoneKey2).findOne().click();log("已输入密码："+userUi.phoneKey2);
        desc(userUi.phoneKey3).findOne().click();log("已输入密码："+userUi.phoneKey3);
        desc(userUi.phoneKey4).findOne().click();log("已输入密码："+userUi.phoneKey4);
        desc(userUi.phoneKey5).findOne().click();log("已输入密码："+userUi.phoneKey5);
        desc(userUi.phoneKey6).findOne().click();log("已输入密码："+userUi.phoneKey6);
    }
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
//6.签到完成
function Sign_in(){
    sleep(500);
    input(0,random(361,369)/10);//体温输入
    sleep(500);
    click(425,1684);//点击签到按钮
    sleep(500);
    click(425+5,1684+5);//点击签到按钮

    toast("'签到'已点击");
    log("'签到'已点击");
}
/***********************************子函数命令*********************************/
/***********************************检查函数*********************************/
//test1.检查程序
function Check_the_screen(){
    if(device.isScreenOn()){
        device.vibrate(100);sleep(200);device.vibrate(300);sleep(300);device.vibrate(100);
        toast("钉钉体温签到时间已到，考虑到您手机屏幕正在使用。");
        toast("本次'自动签到'程序已经关闭，请您稍后完成体温签到，谢谢(づ￣3￣)づ");
        return ;//跳出本次定时签到层序
    }
    else{
        Sakura_Test();
    }
}
/***********************************检查函数*********************************/
