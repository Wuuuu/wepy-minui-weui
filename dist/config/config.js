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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJzZXR0aW5nIiwiYXBwc2V0dGluZ3MiLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJlIiwicGxhdGZvcm1ObyIsImFwcElkIiwibmFtZSIsInZlcnNpb24iLCJkZXNjcmlwdGlvbiIsImxvZ28iLCJyZWN0YW5nbGVMb2dvIiwicm9vdFVybCIsImltZ1Jvb3RVcmwiLCJpbWdVcmwiLCJ1cGxvYWRSb3V0ZSIsImxvZ2luUm91dGUiLCJob21lUm91dGUiLCJlcnJvclJvdXRlIiwiYXV0aG9yIiwiY29weXJpZ2h0IiwiYXV0aGVudGljYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLE1BQVQsR0FBa0I7QUFDaEIsTUFBSUMsVUFBVSxFQUFkO0FBQ0EsTUFBSUMsY0FBYyxFQUFsQjtBQUNBLE1BQUk7QUFDRkQsY0FBVUUsS0FBS0MsY0FBTCxDQUFvQixTQUFwQixDQUFWO0FBQ0FGLGtCQUFjRCxVQUFVQSxRQUFRQyxXQUFsQixHQUFnQyxFQUE5QztBQUNELEdBSEQsQ0FHRSxPQUFPRyxDQUFQLEVBQVUsQ0FBRzs7QUFFZixTQUFPO0FBQ0xDLGdCQUFZLE1BRFAsRUFDZ0I7QUFDckJDLFdBQU8sT0FGRixFQUVZO0FBQ2pCQyxVQUFNLEVBSEQsRUFHSztBQUNWQyxhQUFTLE9BSkosRUFJYTtBQUNsQkMsaUJBQWEsRUFMUixFQUtZO0FBQ2pCQyxVQUFNVCxZQUFZUyxJQUFaLElBQW9CLG9EQU5yQixFQU0yRTtBQUNoRkMsbUJBQWVWLFlBQVlVLGFBQVosSUFBNkIsb0RBUHZDLEVBTzZGO0FBQ2xHQyxhQUFTWCxZQUFZVyxPQUFaLElBQXVCLGdCQVIzQixFQVE2QztBQUNsREMsZ0JBQVlaLFlBQVlZLFVBQVosSUFBMEIsZ0JBVGpDLEVBU21EO0FBQ3hEQyxZQUFRYixZQUFZYSxNQUFaLElBQXNCLHdCQVZ6QixFQVVtRDtBQUN4REMsaUJBQWFkLFlBQVljLFdBQVosSUFBMkIsU0FYbkMsRUFXOEM7QUFDbkRDLGdCQUFZLG1DQVpQLEVBWTRDO0FBQ2pEQyxlQUFXLG9CQWJOLEVBYTRCO0FBQ2pDQyxnQkFBWSxRQWRQLEVBY2lCO0FBQ3RCQyxZQUFRLEVBZkg7QUFnQkxDLGVBQVcsRUFoQk47QUFpQkxDLG9CQUFnQjtBQWpCWCxHQUFQO0FBbUJEOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCeEIsUUFBakIiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29uZmlnKCkge1xuICB2YXIgc2V0dGluZyA9IHt9XG4gIHZhciBhcHBzZXR0aW5ncyA9IHt9XG4gIHRyeSB7XG4gICAgc2V0dGluZyA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3NldHRpbmcnKVxuICAgIGFwcHNldHRpbmdzID0gc2V0dGluZyA/IHNldHRpbmcuYXBwc2V0dGluZ3MgOiB7fVxuICB9IGNhdGNoIChlKSB7IH1cblxuICByZXR1cm4ge1xuICAgIHBsYXRmb3JtTm86ICflubPlj7DnvJblj7cnLCAgLy8g5bmz5Y+w57yW5Y+3XG4gICAgYXBwSWQ6ICdhcHBJRCcsICAvLyDlsI/nqIvluo9hcHBpZFxuICAgIG5hbWU6ICcnLCAvLyDlkI3np7BcbiAgICB2ZXJzaW9uOiAnMS4wLjAnLCAvLyDniYjmnKxcbiAgICBkZXNjcmlwdGlvbjogJycsIC8vIOivtOaYjlxuICAgIGxvZ286IGFwcHNldHRpbmdzLmxvZ28gfHwgJ2h0dHA6Ly9pcGguaHJlZi5sdS8xMjh4MTI4P3RleHQ9JUU1JThEJUEwJUU0JUJEJThEJywgLy8g5q2j5pa55b2ibG9nb1xuICAgIHJlY3RhbmdsZUxvZ286IGFwcHNldHRpbmdzLnJlY3RhbmdsZUxvZ28gfHwgJ2h0dHA6Ly9pcGguaHJlZi5sdS80MDB4MTI4P3RleHQ9JUU1JThEJUEwJUU0JUJEJThEJywgLy8g6ZW/5pa55b2ibG9nb1xuICAgIHJvb3RVcmw6IGFwcHNldHRpbmdzLnJvb3RVcmwgfHwgJ2h0dHBzOi8veHh4LmNuJywgLy8g5qC555uu5b2VIFxuICAgIGltZ1Jvb3RVcmw6IGFwcHNldHRpbmdzLmltZ1Jvb3RVcmwgfHwgJ2h0dHBzOi8veHh4LmNuJywgLy8g5Zu+54mH5qC555uu5b2VXG4gICAgaW1nVXJsOiBhcHBzZXR0aW5ncy5pbWdVcmwgfHwgJ2h0dHBzOi8veHh4LmNuL2ltZy9zcmMnLCAvLyDmoLnmja5pZOiOt+WPluWbvueJh+eahOWcsOWdgFxuICAgIHVwbG9hZFJvdXRlOiBhcHBzZXR0aW5ncy51cGxvYWRSb3V0ZSB8fCBcIi91cGxvYWRcIiwgLy8g57uf5LiA5LiK5Lyg6Lev55SxXG4gICAgbG9naW5Sb3V0ZTogJy9wYWdlcy9tZW1iZXIvYmluZHRlbGVwaG9uZS9pbmRleCcsIC8vIOeZu+W9lei3r+eUsVxuICAgIGhvbWVSb3V0ZTogJy9wYWdlcy9pbmRleC9pbmRleCcsIC8vIOS4u+mhtVxuICAgIGVycm9yUm91dGU6ICcvZXJyb3InLCAvLyDplJnor6/pobXpnaJcbiAgICBhdXRob3I6ICcnLFxuICAgIGNvcHlyaWdodDogJycsXG4gICAgYXV0aGVudGljYXRpb246IGZhbHNlXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25maWcoKSJdfQ==