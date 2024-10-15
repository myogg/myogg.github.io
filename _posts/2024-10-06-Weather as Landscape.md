---
layout: post
title: 将天气预报变成一幅画
tag:
  - 天气
---
一个很有创意的项目，将天气预报变成一幅画，

![](https://pic.superbed.cc/item/67029bf6991d0115df0d41c5.webp)


[https://github.com/lds133/weather_landscape](https://github.com/lds133/weather_landscape)


Weather as Landscape

Traditional weather stations often display sensor readings as raw numerical data. Navigating these dashboards can be overwhelming and stressful, as it requires significant effort to locate, interpret, and visualize specific parameters effectively.

Viewing a landscape image feels natural to the human eye. The calming effect of observing landscape elements reduces stress and requires minimal effort, allowing for a more relaxed visual experience.

The method below demonstrates how to encode weather information within a landscape image, with no or minimal reliance on numerical data.


Encoding principles


The landscape depicts a small house in the woods. The horizontal axis of the image represents a 24-hour timeline, starting from the current moment on the left, marked by the house, and extending to the conditions of the next day on the right. Various landscape elements distributed along the vertical axis symbolize weather events and conditions. The further an event is from the present, the farther it is positioned to the right in the image.
