var storage = storages.create("userPhoneKey");






var phoneKeyNum = dialogs.select("请选择秘密位数", ["无密码","四位密码", "六位密码" ]);

if(phoneKeyNum==0){
    toast("您的手机无密码");
    log("User:Key:null");
}
else{
    if(phoneKeyNum==1){
        storage.put("keynum", 4);
    }
    if(phoneKeyNum==2){
        storage.put("keynum", 6);
    }
    log("Auto:storage keynum:" + storage.get("keynum"))
    

    var phoneKey = dialogs.rawInput("请输入手机密码:");
    log("User:Key:"+phoneKey);
    toast("您的手机密码是："+phoneKey);
        
    storage.put("key", phoneKey);
    log("Auto:storage key:" + storage.get("key"));
    log(storage.get("key").split(""));
}