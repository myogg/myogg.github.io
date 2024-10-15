---
title: "go 语言参考资料"
tags: ["golang", "programming"]
date: 2019/04/07 09:22:18
layout: post
excerpt: 一些 go 语言参考资料，不定期更新
comments: true
categories: programming
---

## go 语言参考资料 ##

今年跳了一次槽，期间各种面试，除了算法题之外，还会问一些基础知识，因为主要的技术栈是 `go`，所以面试的时候避免不了一些基础问题。

最典型的就是“你对 `goroutine` 有什么理解？”

坦白说就是没有什么理解，除了知道它比线程要轻之外。但是为什么比线程轻量也实在说不出。真的挺惭愧的。

所以假期开始补课，跟着[《Go语言学习笔记》](https://book.douban.com/subject/26832468/)看源代码，看 `goroutine` 的实现部分。看得很痛苦，底层实现的代码非常繁复，代码都是一坨一坨的，更不用说底层的汇编。看了两天之后，只是对 G-M-P 模型有个模糊的理解（比如你现在问我“G、M和P分别是什么？”我不能给出一个很准确的回答，我现在也不清楚 G 和 P 的[状态转移](http://xargin.com/state-of-goroutine/)）。只能说这是一个长期学习过程。总的来说，我现在对 `goroutine` 的理解并没有超过[这篇博客](https://morsmachine.dk/go-scheduler)，除了一点：除了 P 本地的 G 队列之外，还有一个全局的 G 队列，这个 P 在调度 G 的时候，会从全局的队列中抢任务，也会在本地队列过长的时候，把一部分 G 转移到全局队列中。`go` 实现 [work stealing 算法](http://supertech.csail.mit.edu/papers/steal.pdf)。 这篇 paper 的阅读笔记见[《work strealing 算法》](https://gitpress.io/c/dante/work_stealing)。

在阅读 `go` 的源代码时，有一个障碍就是底层的汇编语言。如果有时间，需要了解一下 `go` 的汇编，有一个[官方文档](https://golang.org/doc/asm)。这是我从前公司同事[曹春晖的博客](http://xargin.com/)那里知道的，他的博客有很多值得学习的资料（做同事的时候没有好好抱大腿，真是可惜了）。

还有一些平时收集的材料，最近也在持续消化中。

* [Why I Use Interface](https://medium.com/@kent.rancourt/go-pointers-why-i-use-interfaces-in-go-338ae0bdc9e4) 这篇感觉没啥啊。
* [Understanding Real-World Concurrency Bugs in Go](https://songlh.github.io/paper/go-study.pdf)
* [Build A Go API](https://medium.com/commonbond-engineering/build-a-go-api-eb27e6663d78) 这篇也没啥特别的内容啊。
* [go-perfbook](https://github.com/dgryski/go-perfbook)
* [go modules](https://github.com/golang/go/wiki/Modules) 作为 `go` 1.11 引入的新特性，需要了解一下。

另外还需进一步看一些库的实现，累积经验：

* [bigqueue](https://github.com/grandecola/bigqueue)
* [go-micro](https://github.com/micro/go-micro)
* [goreply](https://github.com/buger/goreplay)

真是生有涯而知无涯啊，这份工作真是一刻都不得闲。

## grpc 文档笔记 ##

最近开始使用 grpc 进行开发，所以抽时间细读一下 grpc 的文档。

相关笔记：[《gRPC 文档笔记》](https://zhangyet.github.io/archivers/grpc-doc-notes)
