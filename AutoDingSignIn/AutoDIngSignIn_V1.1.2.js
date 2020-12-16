/***********************************UI用户定制页面*********************************/
"ui";
ui.layout(
    <scroll bg="#FFE7BA">
        <vertical padding="25">
            <text gravity="left" textSize="23sp" textColor="blue" textStyle="bold"> 浙江纺织服装职业技术学院</text>
            <text gravity="right" textSize="23sp" textColor="blue" textStyle="bold"> 钉钉体温自动签到</text>
            <text gravity="right" textSize="10sp" textColor="black" textStyle="bold"> 版本：V1.1.2</text>
            <vertical>
                <text textColor="white" textSize="17sp" bg="#00ccff"  text="提示: "/>
                <text textColor="red" text="1.如果您在使用过程中出现身体体温不正常的情况，请立刻停止使用本软件，积极配合学校的体温测量工作！"/>
                <text text="2.使用本软件需要Android7.0以上版本"/>
                <text textColor="red" text="3.请将软件的'无障碍服务'等功能打开，否则将手机将出现无法自动签到"/>
                <text text="4.本软件不会进行联网操作，即不会泄露您任何隐私。"/>
                <button id="userHalp"  bg="#ffc0cd"   text="如何使用本软件？"/>
                <text gravity="center" textSize="20sp" text="( ･´ω`･ )亲，请放心使用~"/>
                <text text=""/>
            </vertical>

            <text textColor="white" textSize="17sp"  bg="#00ccff" text="任务时间："/>
            <vertical>
                <horizontal>
                    <checkbox  id="uesrClickMorning" checked="true" text="早间打卡"></checkbox>
                    <input id="timeMorningHour" padding="10" gravity="center" text="7" inputType="number"/>
                    <text text=":"/>
                    <input id="timeMorningMin" padding="10" gravity="center" text="10" inputType="number"/>
                    <text text="推荐7:10"/>
                </horizontal>
                <horizontal>
                    <checkbox  id="uesrClickNoon"  text="午间打卡"></checkbox>
                    <input id="timeNoonHour" padding="10" gravity="center" text="12" inputType="number"/>
                    <text text=":"/>
                    <input id="timeNoonMin" padding="10" gravity="center"  text="10" inputType="number"/>
                    <text text="推荐12:10"/>
                </horizontal>
                <horizontal>
                    <checkbox  id="uesrClickEvening" checked="true" text="晚间打卡"></checkbox>
                    <input id="timeEveningHour" padding="10" gravity="center" text="21" inputType="number"/>
                    <text text=":"/>
                    <input id="timeEveningMin" padding="10" gravity="center" text="10" inputType="number"/>
                    <text text="推荐21:10"/>
                </horizontal>
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
                <button id="userHalpBug" bg="#00ccff" w="*"   text="获取帮助 ∑(っ°Д°;)っ 反馈BUG"/>
                </horizontal>
            <text text=""/>

            <vertical>
                <button id="userUpDate" w="*" bg="#FFE1FF"  text="检查更新"/>
                <text text=""/>
                <text text="若您觉得本软件使用方便，不妨点击上方“打赏”按钮，"/>
                <text text="(づ￣3￣)づ╭❤～给这个快吃不起饭的Up打点赏钱"/>
                <text text=""/>
                <img src="https://i2.hdslb.com/bfs/face/e9e59c290616df86e9d6e52211140a8fb958b3b0.jpg@150w_150h.jpg"/>
                <text gravity="center" text="The Author:  樱落樱花瓣"/>
            </vertical>
            
        </vertical>
    </scroll>
);
/***********************************UI用户定制页面*********************************/
/***********************************全局变量*********************************/
var phoneKey=0;
var userUi = {
    singinMorning:  1,
    singinNoon:     0,
    singinEvening:  1,
    agrre:0,
    keynum:0,
}
var userTime={
    timeMorningHour:0,
    timeMorningMin:0,
    timeNoonHour:0,
    timeNoonMin:0,
    timeEveningHour:0,
    timeEveningMin:0,
}
/***********************************全局变量*********************************/
/***********************************UI界面选择线程*********************************/
threads.start(function(){
    /*******************************任务时间选框****************************************/
    ui.uesrClickMorning.on("check",function(check){
        if(check){
            userUi.singinMorning=1;
        }
        else{
            userUi.singinMorning=0;
        }
        log("User:早间签到"+userUi.singinMorning);
    });
    ui.uesrClickNoon.on("check",function(check){
        if(check){
            userUi.singinNoon=1;
        }
        else{
            userUi.singinNoon=0;
        }
        log("User:午间签到"+userUi.singinNoon);
    });
    ui.uesrClickEvening.on("check",function(check){
        if(check){
            userUi.singinEvening=1;
        }
        else{
            userUi.singinEvening=0;
        }
        log("User:晚间签到"+userUi.singinEvening);
    });
    /*******************************任务时间选框****************************************/
    /*******************************同意选框****************************************/
    ui.agrre.on("check",function(check){
        if(check){
            userUi.agrre=1;
        }
        else{
            userUi.agrre=0;
        }
    });
})
    /*******************************同意选框****************************************/
    /*******************************密码选框****************************************/
ui.keyFore.on("check",function(check){
    threads.start(function(){
        if(check){
            userUi.keynum=4;
            phoneKey = dialogs.rawInput("请输入手机密码:").split("");
            log("User:密码位数:"+userUi.keynum+" 密码："+phoneKey[0]+phoneKey[1]+phoneKey[2]+phoneKey[3]);
            toast("您设置的密码位数为"+userUi.keynum+"位"+" 密码："+phoneKey[0]+phoneKey[1]+phoneKey[2]+phoneKey[3]);      
        }    
    })
});
ui.keySix.on("check",function(check){
    threads.start(function(){
        if(check){
            userUi.keynum=6;
            phoneKey = dialogs.rawInput("请输入手机密码:").split("");
            log("User:密码位数:"+userUi.keynum+" 密码："+phoneKey[0]+phoneKey[1]+phoneKey[2]+phoneKey[3]+phoneKey[4]+phoneKey[5]);
            toast("您设置的密码位数为"+userUi.keynum+"位"+" 密码："+phoneKey[0]+phoneKey[1]+phoneKey[2]+phoneKey[3]+phoneKey[4]+phoneKey[5]);      
        }
    })

});
ui.keyVoid.on("check",function(check){
    threads.start(function(){
        if(check){
            userUi.keynum=0;
            log("User:密码位数"+userUi.keynum);
        }
    })
});
    /*******************************密码选框****************************************/

/***********************************UI界面选择线程*********************************/
/***********************************UI界面按钮多线程命令*********************************/
ui.userButtonOne.click(function(){
    log("Procedure：停止所有线程");
    threads.shutDownAll();
    threads.start(function(){
        if(confirm("是否确定开始'一键打卡'功能")){//对话框确认开启
            toast("已为启动'一键打卡'程序");
            log("User：主动启动一键打卡");
            Sakura_Ding();
        }
    })
});
ui.userButtonStart.click(function(){//定时程序
    log("Procedure停止所有线程");
    threads.shutDownAll();
    threads.start(function(){
        if(Check_the_ui()){
            if(userUi.keynum==0){
                alert("您手机的未设置解锁密码，软件将自动跳过自动解锁程序");
            }
            if(confirm("是否确定开始定时签到功能")){//对话框确认开启
                alert("成功开启");
                log("User：主动启动定时程序");
                Sakura_MainTime();
            }
        }
    })
});
ui.userButtonTest.click(function(){//检查程序
    log("Procedure：停止所有线程");
    threads.shutDownAll();
    threads.start(function(){
        if(Check_the_ui()){
            if(userUi.keynum==0){
                toast("您手机的未设置解锁密码");
                toast("软件将自动跳过自动解锁程序");
            }
            if(confirm("是否开始签到功能的测试")){//对话框确认开启
                alert("开启测试：请手动熄灭屏幕,测试程序5s倒计时");
                sleep(5000);
            }
        }
        log("User：主动启动检查程序");
        Sakura_Test();
    })
});
ui.userButtonStop.click(function(){
    log("User：主动停止所有线程");
    threads.shutDownAll();
    alert("已为您停止所有打卡程序");
});
ui.userHalp.click(function(){
    app.openUrl("https://www.bilibili.com/read/cv8815679");
    alert("~~(◍´꒳`◍)~~","求关注~求三连~~~");
});
ui.userBi.click(function(){
    alert(" ~~(◍´꒳`◍)~~ 感谢投喂!","感谢金主大大的投喂~");
    app.openUrl("https://i0.hdslb.com/bfs/article/0be39a299ef79df39acf059eef86cd89d5f057bf.jpg@1320w_1320h.webp");
});
ui.userHalpBug.click(function(){
    app.openUrl("https://www.bilibili.com/read/cv8815679");
    alert(" ლ(＾ω＾ლ)!!!求关注!","可以在专题的评论区反馈BUG哟，本野生型技术Up看到都会回复的呢~");
});
/***********************************UI界面按钮多线程命令*********************************/
/***********************************主函数命令*********************************/
function Sakura_MainTime(){
    while(1){
        curTime = new Date();
        if(userUi.singinMorning && curTime.getHours()==userTime.timeMorningHour && curTime.getMinutes()==userTime.timeMorningMin){
            log("Auto：早间签到时间到"+userTime.timeMorningHour+":"+userTime.timeMorningMin);
            Check_the_screen();
        }
        if(userUi.singinNoon    && curTime.getHours()==userTime.timeNoonHour && curTime.getMinutes()==userTime.timeNoonMin){
            log("Auto：午间签到时间到"+userTime.timeNoonHour+":"+userTime.timeNoonMin);
            Check_the_screen();
        }
        if(userUi.singinEvening && curTime.getHours()==userTime.timeEveningHour && curTime.getMinutes()==userTime.timeEveningMin){
            log("Auto：晚间签到时间到"+userTime.timeEveningHour+":"+userTime.timeEveningMin);
            Check_the_screen();
        }
        log("Procedure：当前时间是"+curTime.getHours() + ":" + curTime.getMinutes() + ":" + curTime.getSeconds());
        sleep(10000);//10s
    }
}
function Sakura_Test(){//测试程序 解锁+签到
    Bright_Screen();
    if(userUi.keynum){
        Unlock_Screen();
    }
    Sakura_Ding();
}
function Sakura_Ding(){//签到程序 签到
    device.keepScreenOn(); //保持亮屏
    var checkError=1; //定位中检查
    while(checkError){
        Close_App();
        Open_App();
        Goto_AppClickInPage();
        if (null != textMatches("定位中").clickable(true).findOne(3000)) {
            toast("Text find:定位中")
            log("Procedure：Text find:定位中")
            sleep(500);
        }
        else{
            checkError=0;//定位成功
            toast("定位成功")
            log("Procedure：定位成功")
            sleep(500);
        }
        Sign_in();
    }
    sleep(1000);
    device.cancelKeepingAwake();//关闭保持亮屏
    checkError=1;
}
/***********************************主函数命令*********************************/
/***********************************检查函数*********************************/
function Check_the_ui(){
    User_DataSetIn();
    if(userUi.agrre==0){
        pass=0;
        toast("请勾选'同意上述条款'方可使用软件");
    }
    else if(userTime.timeMorningHour>=24 || userTime.timeNoonHour>=24 || userTime.timeEveningHour>=24 ||
        userTime.timeMorningMin>=60 || userTime.timeNoonMin >=60 || userTime.timeEveningMin >=60){
        pass=0;
        alert("(づ￣3￣)づ╭❤～亲 小时<24 分钟<60 ");
    }
    else {
        pass=1;//无错误
    }
    log("Procedure：ui输入检测pass："+pass);
    return pass;
}
function Check_the_screen(){//屏幕检查程序
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
/***********************************子函数命令*********************************/
//0.用户数据
function User_DataSetIn(){
    /******************************数据转移************************************* */
    userTime.timeMorningHour=   ui.timeMorningHour.getText();
    userTime.timeMorningMin=    ui.timeMorningMin.getText();
    userTime.timeNoonHour=      ui.timeNoonHour.getText();
    userTime.timeNoonMin=       ui.timeNoonMin.getText();
    userTime.timeEveningHour=   ui.timeEveningHour.getText();
    userTime.timeEveningMin=    ui.timeEveningMin.getText(); 
    log("Procedure：用户时钟设置数据交接完毕");
    log("Procedure："+"早间签到确认"+userUi.singinMorning+" 时间："+userTime.timeMorningHour+":"+userTime.timeMorningMin);
    log("Procedure："+"午间签到确认"+userUi.singinNoon+" 时间："+userTime.timeNoonHour+":"+userTime.timeNoonMin);
    log("Procedure："+"晚间签到确认"+userUi.singinEvening+" 时间："+userTime.timeEveningHour+":"+userTime.timeEveningMin);
    /******************************数据转移************************************* */
}
//1.亮屏
function Bright_Screen() {
    log("Procedure：进入'手机亮屏'子程序")
    device.wakeUpIfNeeded(); //唤醒设备
    sleep(500);click(0);sleep(400);click(0);sleep(500);//模拟双击亮屏
    device.keepScreenOn(); //保持亮屏
    if (!device.isScreenOn()) {
        log("Procedure：未唤醒");
        device.wakeUpIfNeeded();
        bright_screen();
    }
    else log("Procedure：已唤醒");
    sleep(500);
   
    var xSatrt=0,yStart=0,xEnd=0,yEnd=0,i=0;
    for(i=0;i<5;i++){
        xSatrt=random(0,100);
        yStart=1500+random(0,500);
        xEnd=random(0,100);
        yEnd=700-random(0,500);   
        swipe(xSatrt,yStart,xEnd,yEnd,random(201,230)); //上划调出密码界面
        //gesture(random(201,230), [xSatrt, yStart], [xEnd, yEnd]);
        log("Procedure：上划次数："+i);
    }
    sleep(2000);
}
//2.解锁--安卓7.0及以上才能支持手势及坐标操作
function Unlock_Screen() {
    log("Procedure：进入'手机解锁'子程序");   
    if(userUi.keynum){
        desc(phoneKey[0]).findOne().click();log("Procedure：已输入密码："+phoneKey[0]);
        desc(phoneKey[1]).findOne().click();log("Procedure：已输入密码："+phoneKey[1]);
        desc(phoneKey[2]).findOne().click();log("Procedure：已输入密码："+phoneKey[2]);
        desc(phoneKey[3]).findOne().click();log("Procedure：已输入密码："+phoneKey[3]);
        if(userUi.keynum==6){
            desc(phoneKey[4]).findOne().click();log("Procedure：已输入密码："+phoneKey[4]);
            desc(phoneKey[5]).findOne().click();log("Procedure：已输入密码："+phoneKey[5]);
        }
    }
    sleep(2000);//密码输入
    home();
    sleep(1000);//回到手机主页1
}
//3.结束钉钉进程，确保启动钉钉后进入主页面
function Close_App() {
    log("Procedure：进入'停止钉钉进程'子程序");
    app.openAppSetting("com.alibaba.android.rimet"); //进入钉钉设置
    text(app.getAppName("com.alibaba.android.rimet")).waitFor();
    let is_sure = textMatches(/(强制.*|.*停止|.*结束.*|强行.*)/).clickable(true).findOne();
    if (is_sure.enabled()) {
        sleep(1000);
        textMatches(/(强制.*|.*停止|.*结束.*|.*确定.*)/).clickable(true).findOne().click();
        sleep(1000);
        textMatches(/(强制.*|.*停止|.*结束.*|.*确定.*)/).clickable(true).findOne().click();
        log("Procedure："+app.getAppName("com.alibaba.android.rimet") + "应用已被关闭");
        sleep(500);
        home();
    } else {
        log("Procedure："+app.getAppName("com.alibaba.android.rimet") + "应用不能被正常关闭,重试");
        sleep(500);
        home();
    }
}
//4.开启钉钉进程
function Open_App() {
    log("Procedure：进入'钉钉登录判定'子程序");
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
            log("Procedure：账号已登录")
            sleep(500);
        } else {
            log("Procedure：未检测到钉钉活动页面>>重启钉钉")
            is_login();
        }
    }
}
//5.进入签到页面
function Goto_AppClickInPage() {
    log("Procedure：进入'考勤页面'")
    while(1){
        if (null != textMatches("浙纺服").clickable(true).findOne(3000)) {
            toast("Text find:浙纺服")
            coordZhefangfu = textMatches(/(.*浙纺服.*)/).findOnce()
            log("Procedure：Text find:浙纺服")
            sleep(500);
            coordZhefangfu.click();
            sleep(6000);
            log("Procedure：进入'浙纺服'");
        }
        else if (null != descMatches("工作台").clickable(true).findOne(3000)){
            toast("Desc find:工作台")
            coordGongzuotai = descMatches(/(.*工作台.*)/).findOnce()
            log("Procedure：Desc find:工作台")
            sleep(500);
            coordGongzuotai.click();
            sleep(6000);
            log("Procedure：进入'浙纺服'");
        }

        if (null != textMatches("智慧学工").clickable(true).findOne(3000)) {
            toast("Text find:智慧学工")
            coordZhihuixuegong = textMatches(/(.*智慧学工.*)/).findOne()
            log("Procedure：Text find:智慧学工")
            sleep(500)
            coordZhihuixuegong.click();
            sleep(5000);
            log("Procedure：进入'智慧学工'");
        } 

        if (null != textMatches("签到")) {
            toast("Text find:每日签到")
            coordMeiriqiandao = textMatches(/(.*每日签到.*)/).findOne()
            log("Procedure：Text find:每日签到")
            sleep(500)
            coordMeiriqiandao.click();
            sleep(5000);
            log("Procedure：进入'每日签到'");
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
    log("Procedure：点击签到");
}
/***********************************子函数命令*********************************/
