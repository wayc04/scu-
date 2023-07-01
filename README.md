# scu-
微信小程序
**微信小程序获取用户信息的唯一方式是openid 对于用户所有的操作都是基于openid**

## 云函数
**对openid进行获取**
* ask
对用户的openid进行查询  
调用方式：  
 wx.cloud.callFunction({  
        name:"ask",  
      })  
参数：无需任何data
返回值：openid在**res.result.openid**中


**对用户是否存在进行查询**
* checkExist
对用户是否d进行查询  
调用方式：
wx.cloud.callFunction({  
          name:"checkExist",  
          data:{  
            openid:openId,  
          },  
            
        })

参数：data中的openid（用户的openid）
返回值：bool：true为存在 false为不存在 **res。result**中

**对用户进行数据库的注册**
* signUp  
将用户加到数据库中  
调用方式：  
wx.cloud.callFunction({
      name:"signUp",  
      data:{  
        userName:userName ,  
       userInfo:userInfo,  
        openid:openid,  
      }
    })  

  
参数：data中的userName是用户填入的名字 userInfo是获取的用户信息 openid是用户的openid
返回值：bool：true为成功 false为失败 **res。result**中

