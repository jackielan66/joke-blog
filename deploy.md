
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