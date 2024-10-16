---
layout: post
title:  托管到CF后Github不能强制开启https的解决方法.md
categories: [java]
tags: [github,https,]
---

##### 开启 Encryption Full (strict) 模式
- 初始化,类中静态属性和初始化赋值，以及静态代码块的执行。
<!--more-->


开启 Encryption Full (strict) 模式
Full (strict) 模式与 Full 模式的区别在于，Full (strict) 模式使用的是由可信 CA 或 Cloudflare Origin CA 签名的有效证书并对每个请求验证证书，而非 Full 模式使用的无需验证的自签名证书。

GitHub Pages 可以通过开启 Enforce HTTPS 来获取免费的可信证书，满足开启 Full (strict) 模式的条件。下面就是我今天新发现的问题，我的 Pages 设置中不能开启 Enforce HTTPS，勾选框一直是灰色的，折腾半天发现是 Cloudflare 的代理状态的造成的，解决方案如下

在 Cloudflare 的 DNS 设置中把 Proxy status 全部设置为 DNS Only 状态，即灰色的云朵


回到 Pages 设置，刷新一下就可以勾选 Enforce HTTPS 了
GitHub 会自动申请 SSL 证书，有了这个证书才能够在 Cloudflare 开启 Full (strict)

等待 Pages 的 HTTPS 生效后，回到 Cloudflare，把刚才修改的 Proxy status 全部恢复为 Proxied 状态，即橙色的云朵
到 SSL/TLS 设置中，将 Encryption Mode 设置为 Full (strict).

##### 本文转自如下网址.具体可看

[网址](https://siriusq.top/github-pages-%E5%90%AF%E7%94%A8-cloudflare-%E5%8A%A0%E9%80%9F%E5%8F%8A-https.html)


