
# 部署
1. 使用apache配置来转发域名
```
<VirtualHost *:80>
    ServerName biaoqing001.com
    Redirect permanent / http://www.biaoqing001.com/
</VirtualHost>

<VirtualHost *:80>
    # 主配置：www.biaoqing001.com 反向代理到目标地址
    ServerName www.biaoqing001.com
    ServerAlias biaoqing001.com  # 备用域名（会被下面的重定向覆盖）

    # 反向代理配置
    ProxyPass / https://my-joke-blog-73vn.vercel.app/
    ProxyPassReverse / https://my-joke-blog-73vn.vercel.app/
    SSLProxyEngine on
    SSLProxyVerify none

    # 可选：修正目标站的 Host 头
    RequestHeader set Host "my-joke-blog-73vn.vercel.app"
</VirtualHost>
```


Todo 部署https证书
```
<VirtualHost *:443> 
 ServerName www.biaoqing001.com

 # 修改为申请证书时绑定的域名。 

 SSLCertificateFile /root/ssl/www.biaoqing001.com_public.crt 
 # 将domain_name_public.crt替换成您证书文件名。
 SSLCertificateKeyFile /root/ssl/www.biaoqing001.com.key
  
# 将domain_name.key替换成您证书的密钥文件名。

 SSLCertificateChainFile /root/ssl/www.biaoqing001.com_chain.crt 
  # 将domain_name_chain.crt替换成您证书的证书链文件名。
 
 #自定义设置使用的TLS协议的类型以及加密套件（以下为配置示例，请您自行评估是否需要配置）
 #TLS协议版本越高，HTTPS通信的安全性越高，但是相较于低版本TLS协议，高版本TLS协议对浏览器的兼容性较差。
 #SSLProtocol all -SSLv2 -SSLv3 # 添加SSL协议支持协议，去掉不安全的协议。
 #SSLCipherSuite HIGH:!RC4:!MD5:!aNULL:!eNULL:!NULL:!DH:!EDH:!EXP:+MEDIUM # 修改加密套件。

     
    # 反向代理配置
    ProxyPass / https://my-joke-blog-73vn.vercel.app/
    ProxyPassReverse / https://my-joke-blog-73vn.vercel.app/
</VirtualHost>
```