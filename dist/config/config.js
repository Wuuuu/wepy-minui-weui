'use strict';

function config() {
  var setting = {};
  var appsettings = {};
  try {
    setting = wepy.getStorageSync('setting');
    appsettings = setting ? setting.appsettings : {};
  } catch (e) {}

  return {
    platformNo: '平台编号', // 平台编号
    appId: 'appID', // 小程序appid
    name: '', // 名称
    version: '1.0.0', // 版本
    description: '', // 说明
    logo: appsettings.logo || 'http://iph.href.lu/128x128?text=%E5%8D%A0%E4%BD%8D', // 正方形logo
    rectangleLogo: appsettings.rectangleLogo || 'http://iph.href.lu/400x128?text=%E5%8D%A0%E4%BD%8D', // 长方形logo
    rootUrl: appsettings.rootUrl || 'https://xxx.cn', // 根目录 
    imgRootUrl: appsettings.imgRootUrl || 'https://xxx.cn', // 图片根目录
    imgUrl: appsettings.imgUrl || 'https://xxx.cn/img/src', // 根据id获取图片的地址
    uploadRoute: appsettings.uploadRoute || "/upload", // 统一上传路由
    loginRoute: '/pages/member/bindtelephone/index', // 登录路由
    homeRoute: '/pages/index/index', // 主页
    errorRoute: '/error', // 错误页面
    author: '',
    copyright: '',
    authentication: false
  };
}

module.exports = config();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJzZXR0aW5nIiwiYXBwc2V0dGluZ3MiLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJlIiwicGxhdGZvcm1ObyIsImFwcElkIiwibmFtZSIsInZlcnNpb24iLCJkZXNjcmlwdGlvbiIsImxvZ28iLCJyZWN0YW5nbGVMb2dvIiwicm9vdFVybCIsImltZ1Jvb3RVcmwiLCJpbWdVcmwiLCJ1cGxvYWRSb3V0ZSIsImxvZ2luUm91dGUiLCJob21lUm91dGUiLCJlcnJvclJvdXRlIiwiYXV0aG9yIiwiY29weXJpZ2h0IiwiYXV0aGVudGljYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLE1BQVQsR0FBa0I7QUFDaEIsTUFBSUMsVUFBVSxFQUFkO0FBQ0EsTUFBSUMsY0FBYyxFQUFsQjtBQUNBLE1BQUk7QUFDRkQsY0FBVUUsS0FBS0MsY0FBTCxDQUFvQixTQUFwQixDQUFWO0FBQ0FGLGtCQUFjRCxVQUFVQSxRQUFRQyxXQUFsQixHQUFnQyxFQUE5QztBQUNELEdBSEQsQ0FHRSxPQUFPRyxDQUFQLEVBQVUsQ0FBRzs7QUFFZixTQUFPO0FBQ0xDLGdCQUFZLE1BRFAsRUFDZ0I7QUFDckJDLFdBQU8sT0FGRixFQUVZO0FBQ2pCQyxVQUFNLEVBSEQsRUFHSztBQUNWQyxhQUFTLE9BSkosRUFJYTtBQUNsQkMsaUJBQWEsRUFMUixFQUtZO0FBQ2pCQyxVQUFNVCxZQUFZUyxJQUFaLElBQW9CLG9EQU5yQixFQU0yRTtBQUNoRkMsbUJBQWVWLFlBQVlVLGFBQVosSUFBNkIsb0RBUHZDLEVBTzZGO0FBQ2xHQyxhQUFTWCxZQUFZVyxPQUFaLElBQXVCLGdCQVIzQixFQVE2QztBQUNsREMsZ0JBQVlaLFlBQVlZLFVBQVosSUFBMEIsZ0JBVGpDLEVBU21EO0FBQ3hEQyxZQUFRYixZQUFZYSxNQUFaLElBQXNCLHdCQVZ6QixFQVVtRDtBQUN4REMsaUJBQWFkLFlBQVljLFdBQVosSUFBMkIsU0FYbkMsRUFXOEM7QUFDbkRDLGdCQUFZLG1DQVpQLEVBWTRDO0FBQ2pEQyxlQUFXLG9CQWJOLEVBYTRCO0FBQ2pDQyxnQkFBWSxRQWRQLEVBY2lCO0FBQ3RCQyxZQUFRLEVBZkg7QUFnQkxDLGVBQVcsRUFoQk47QUFpQkxDLG9CQUFnQjtBQWpCWCxHQUFQO0FBbUJEOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCeEIsUUFBakIiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29uZmlnKCkge1xyXG4gIHZhciBzZXR0aW5nID0ge31cclxuICB2YXIgYXBwc2V0dGluZ3MgPSB7fVxyXG4gIHRyeSB7XHJcbiAgICBzZXR0aW5nID0gd2VweS5nZXRTdG9yYWdlU3luYygnc2V0dGluZycpXHJcbiAgICBhcHBzZXR0aW5ncyA9IHNldHRpbmcgPyBzZXR0aW5nLmFwcHNldHRpbmdzIDoge31cclxuICB9IGNhdGNoIChlKSB7IH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBsYXRmb3JtTm86ICflubPlj7DnvJblj7cnLCAgLy8g5bmz5Y+w57yW5Y+3XHJcbiAgICBhcHBJZDogJ2FwcElEJywgIC8vIOWwj+eoi+W6j2FwcGlkXHJcbiAgICBuYW1lOiAnJywgLy8g5ZCN56ewXHJcbiAgICB2ZXJzaW9uOiAnMS4wLjAnLCAvLyDniYjmnKxcclxuICAgIGRlc2NyaXB0aW9uOiAnJywgLy8g6K+05piOXHJcbiAgICBsb2dvOiBhcHBzZXR0aW5ncy5sb2dvIHx8ICdodHRwOi8vaXBoLmhyZWYubHUvMTI4eDEyOD90ZXh0PSVFNSU4RCVBMCVFNCVCRCU4RCcsIC8vIOato+aWueW9omxvZ29cclxuICAgIHJlY3RhbmdsZUxvZ286IGFwcHNldHRpbmdzLnJlY3RhbmdsZUxvZ28gfHwgJ2h0dHA6Ly9pcGguaHJlZi5sdS80MDB4MTI4P3RleHQ9JUU1JThEJUEwJUU0JUJEJThEJywgLy8g6ZW/5pa55b2ibG9nb1xyXG4gICAgcm9vdFVybDogYXBwc2V0dGluZ3Mucm9vdFVybCB8fCAnaHR0cHM6Ly94eHguY24nLCAvLyDmoLnnm67lvZUgXHJcbiAgICBpbWdSb290VXJsOiBhcHBzZXR0aW5ncy5pbWdSb290VXJsIHx8ICdodHRwczovL3h4eC5jbicsIC8vIOWbvueJh+agueebruW9lVxyXG4gICAgaW1nVXJsOiBhcHBzZXR0aW5ncy5pbWdVcmwgfHwgJ2h0dHBzOi8veHh4LmNuL2ltZy9zcmMnLCAvLyDmoLnmja5pZOiOt+WPluWbvueJh+eahOWcsOWdgFxyXG4gICAgdXBsb2FkUm91dGU6IGFwcHNldHRpbmdzLnVwbG9hZFJvdXRlIHx8IFwiL3VwbG9hZFwiLCAvLyDnu5/kuIDkuIrkvKDot6/nlLFcclxuICAgIGxvZ2luUm91dGU6ICcvcGFnZXMvbWVtYmVyL2JpbmR0ZWxlcGhvbmUvaW5kZXgnLCAvLyDnmbvlvZXot6/nlLFcclxuICAgIGhvbWVSb3V0ZTogJy9wYWdlcy9pbmRleC9pbmRleCcsIC8vIOS4u+mhtVxyXG4gICAgZXJyb3JSb3V0ZTogJy9lcnJvcicsIC8vIOmUmeivr+mhtemdolxyXG4gICAgYXV0aG9yOiAnJyxcclxuICAgIGNvcHlyaWdodDogJycsXHJcbiAgICBhdXRoZW50aWNhdGlvbjogZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY29uZmlnKCkiXX0=