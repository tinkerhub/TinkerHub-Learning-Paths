---
title: How to learn Flutter?
date: 2021-04-12T02:32:34+05:30
draft: false
featured: true
image: images/flutter/flutter.png
sub: true
type: "framework"
keywords: ["dart", "android", "ios", "flutter", "mobile"]
tags: ["dart", "android", "ios", "flutter", "mobile"]
---

Learning path for flutter.

## Requirement

- Basics of the oops concept is needed. [Learn more on Dart](https://github.com/evolvingkid/flutter-learning-path/tree/main/OOPS)
- Previous knowledge in any programing language like C++, JAVA, JS is good
- Laptop with i3 or higher is needed. i5 or Rayzen 5 is recommended.

{{< alert "info" >}}
If you have a low spec system. It is better to use a Linux system like Linux mint xfce and try to run on real devices using USB Debugging.
<a href="https://linuxmint.com/">Linux Mint</a>
{{< / alert >}}

## Install Flutter

- Install Anddroid Studio (In case if you are using Linux-based OS. Sometimes flutter SDK doesn't recognize android studio install. This Error occurs in new versions. To fix this copy android studio folder that you extracted and paste it on " /opt "
  directory.). [Install Android Studio](https://developer.android.com/studio)
- Install Git [Install Git](https://git-scm.com/)
- Install Vscode (Recommeded) [Install Vscode](https://code.visualstudio.com/download)
- Setup Flutter SDK [Setup Flutter](https://flutter.dev/docs/get-started/install)
- This is not recommeded for new peoples but if you are following old project in flutter use FVM to manage flutter version. [Install FVM](https://pub.dev/packages/fvm)
- Setup emulator or real mobile devices for app testing in flutter. (enable USB-Debugging for mobile devices testing).

## Setup Flutter

- In case if you are running flutter for 1st time it can be time-consuming. This is because Gradle needed to set up and android SDK needed to be setup. In any case if android SDK is not able to download and causes error then you can manually download it using android SDK manager.

## Next step

- Build a small flutter project like quiz app. Like [Youtube Link](https://youtu.be/x0uinJvhNxI). Try to learn about Stateless & stateful widgets.
- Need to know more about List and Map data type in dart.
- Try to learn HTTp calls. Use package like [HTTP](https://pub.dev/packages/http) or [DIO](https://pub.dev/packages/dio). Its better to learn with HTTP then lern Dio. In production apps or big project is better to use Dio.
- Do a project with Http or dio.
- Try to learn any of the state Managment Like [Provider](https://pub.dev/packages/provider), [Bloc](https://pub.dev/packages/bloc), [GetX](https://pub.dev/packages/get), [Riverpod](https://pub.dev/packages/riverpod).
- Try to do a project using state managment and follow a structure like MVC.
- Learn about dependency Injection like [Get It](https://pub.dev/packages/get_it).
- Try to learn about database in flutter like [sqflite](https://pub.dev/packages/sqflite), [Shared preferences](https://pub.dev/packages/shared_preferences), [Hive](https://pub.dev/packages/hive). (If you are learning Hive its better to follow youtube videos. Try to learn adapter in Hive).
- Try to implement JAVA or Swift code in to flutter using method channel.
