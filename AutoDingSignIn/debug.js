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
                <input id="phoneKey" padding="10" gravity="center" inputType="numberPassword"/>
            </horizontal>
            <button     id="userButtonOne" w="*"   h="60"  text="一键打卡"/>
        </vertical>
    </scroll>
);
var str;
ui.keyFore.on("click",function(){
    threads.start(function(){
        str=dialogs.rawInput("请输入手机密码:").split("");
    })
})
ui.userButtonOne.click(function(){
    threads.start(function(){
        var i=0;
        for(i=0;i<4;i++){
            log(str[i]);
        }
    })
});

/*
function UserDataSetup(){
    storage.put("phoneKey1",phoneKey1);
}
function UserDataSetIn(){
    if(storage.contains("phoneKey1")){
        //toString(storage.get("phoneKey1")));
    }
}*/



function text_cut(str, inta, intb) {
    if (intb) {
        return str.substr(inta, intb)
    } 
    else {
        return str.substr(inta)
    }
}