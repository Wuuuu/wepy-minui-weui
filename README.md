# wepy + minui + weui + wepy-redux
wepy + minui + weui + wepy-redux

## min-cli 1.0.5-beta1, wepy 1.6.0

## 使用方法

1、clone本项目

2、执行

```
npm i / cnpm i / yarn i

wepy build -w
```

3、更新过后内置了wepy-redux,可以更好的管理store
    在小程序开发工具内新建小程序，并将目录指向dist目录

4、开始体验吧。

## 工具类util的使用

./src目录下的utils文件的util.js
封装了一些常用的方法

<!-- 
## 如何在已有的wepy项目中使用minui？

1、新建wepy项目（如果已有项目，则跳过）

2、新建配置文件：min.config.json
配置内容：
新加入了style,可供全局颜色样式使用
```
{
  "style": {
    "brandColor": "#FF0077",
    "controlColor": "#FF5777",
    "mainHeadingColor": "#333333",
    "subHeadingColor": "#666666",
    "darkPromptColor": "#999999",
    "splitLineColor": "#ECECEC",
    "backgroundColour": "#EFEFEF"
  },
  "prefix": "wxc",
  "dest": "dist",
  "npm": {
    "dest": "dist/packages",
    "scope": ""
  },
  "compilers": {
    "babel": {
      "sourceMaps": "inline",
      "presets": ["env"],
      "plugins": [
        "syntax-export-extensions",
        "transform-class-properties",
        "transform-decorators-legacy",
        "transform-export-extensions"
      ]
    }
  }
}

```

3、再通过 min install @minui/wxc-xxx 命令 安装需要的组件

```
$ min install @minui/wxc-loading
```

4、在页面使用，this.$wxpage.selectComponent方法调用（详见index.wpy 以及 ![minui框架主页](https://github.com/meili/minui)）

<img src="https://ws3.sinaimg.cn/large/006tKfTcgy1fm6xmveiqmj30k00zo76h.jpg" width="30%" height="30%"> -->

## Wepy小程序组件预览
![Image text](https://mp.weixin.qq.com/wxopen/qrcode?action=show&type=2&fakeid=3507273656&token=1182659679)
