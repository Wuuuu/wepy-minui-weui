'use strict';

function config() {
  var setting = {};
  var appsettings = {};
  try {
    setting = wepy.getStorageSync('setting');
    appsettings = setting ? setting.appsettings : {};
  } catch (e) {}

  return {
    platformNo: 'teach', // 平台编号
    appId: 'wx64a1c6b915f39968', // 小程序appid
    name: '教立方', // 名称
    version: '1.0.0', // 版本
    description: '', // 说明
    logo: appsettings.logo || 'http://iph.href.lu/128x128?text=%E5%8D%A0%E4%BD%8D', // 正方形logo
    rectangleLogo: appsettings.rectangleLogo || 'http://iph.href.lu/400x128?text=%E5%8D%A0%E4%BD%8D', // 长方形logo
    rootUrl: appsettings.rootUrl || 'https://ceshi.conpanda.cn', // 根目录  https://store.conpanda.cn
    imgRootUrl: appsettings.imgRootUrl || 'https://ceshi.conpanda.cn', // 图片根目录
    imgUrl: appsettings.imgUrl || 'https://ceshi.conpanda.cn/img/src', // 根据id获取图片的地址
    uploadRoute: appsettings.uploadRoute || "/upload", // 统一上传路由
    loginRoute: '/pages/member/bindtelephone/index', // 登录路由
    homeRoute: '/pages/index/index', // 主页
    errorRoute: '/error', // 错误页面
    author: '成都童伙信息技术有限公司',
    copyright: '版权所有 © 2018 由 成都童伙信息技术有限公司 提供',
    authentication: false,
    getToken: function getToken() {
      try {
        return wx.getStorageSync('token');
      } catch (e) {}
      return null;
    },
    setToken: function setToken(token) {
      try {
        return wx.setStorageSync('token', token);
      } catch (e) {}
      return null;
    },
    getUnionuser: function getUnionuser() {
      try {
        return wx.getStorageSync('unionuser');
      } catch (e) {}
      return null;
    },
    setUnionuser: function setUnionuser(unionuser) {
      try {
        return wx.setStorageSync('unionuser', unionuser);
      } catch (e) {}
      return null;
    }
  };
}

module.exports = config();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJzZXR0aW5nIiwiYXBwc2V0dGluZ3MiLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJlIiwicGxhdGZvcm1ObyIsImFwcElkIiwibmFtZSIsInZlcnNpb24iLCJkZXNjcmlwdGlvbiIsImxvZ28iLCJyZWN0YW5nbGVMb2dvIiwicm9vdFVybCIsImltZ1Jvb3RVcmwiLCJpbWdVcmwiLCJ1cGxvYWRSb3V0ZSIsImxvZ2luUm91dGUiLCJob21lUm91dGUiLCJlcnJvclJvdXRlIiwiYXV0aG9yIiwiY29weXJpZ2h0IiwiYXV0aGVudGljYXRpb24iLCJnZXRUb2tlbiIsInd4Iiwic2V0VG9rZW4iLCJ0b2tlbiIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0VW5pb251c2VyIiwic2V0VW5pb251c2VyIiwidW5pb251c2VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxNQUFULEdBQWtCO0FBQ2hCLE1BQUlDLFVBQVUsRUFBZDtBQUNBLE1BQUlDLGNBQWMsRUFBbEI7QUFDQSxNQUFJO0FBQ0ZELGNBQVVFLEtBQUtDLGNBQUwsQ0FBb0IsU0FBcEIsQ0FBVjtBQUNBRixrQkFBY0QsVUFBVUEsUUFBUUMsV0FBbEIsR0FBZ0MsRUFBOUM7QUFDRCxHQUhELENBR0UsT0FBT0csQ0FBUCxFQUFVLENBQUc7O0FBRWYsU0FBTztBQUNMQyxnQkFBWSxPQURQLEVBQ2lCO0FBQ3RCQyxXQUFPLG9CQUZGLEVBRXlCO0FBQzlCQyxVQUFNLEtBSEQsRUFHUTtBQUNiQyxhQUFTLE9BSkosRUFJYTtBQUNsQkMsaUJBQWEsRUFMUixFQUtZO0FBQ2pCQyxVQUFNVCxZQUFZUyxJQUFaLElBQW9CLG9EQU5yQixFQU0yRTtBQUNoRkMsbUJBQWVWLFlBQVlVLGFBQVosSUFBNkIsb0RBUHZDLEVBTzZGO0FBQ2xHQyxhQUFTWCxZQUFZVyxPQUFaLElBQXVCLDJCQVIzQixFQVF3RDtBQUM3REMsZ0JBQVlaLFlBQVlZLFVBQVosSUFBMEIsMkJBVGpDLEVBUzhEO0FBQ25FQyxZQUFRYixZQUFZYSxNQUFaLElBQXNCLG1DQVZ6QixFQVU4RDtBQUNuRUMsaUJBQWFkLFlBQVljLFdBQVosSUFBMkIsU0FYbkMsRUFXOEM7QUFDbkRDLGdCQUFZLG1DQVpQLEVBWTRDO0FBQ2pEQyxlQUFXLG9CQWJOLEVBYTRCO0FBQ2pDQyxnQkFBWSxRQWRQLEVBY2lCO0FBQ3RCQyxZQUFRLGNBZkg7QUFnQkxDLGVBQVcsK0JBaEJOO0FBaUJMQyxvQkFBZ0IsS0FqQlg7QUFrQkxDLGNBQVUsb0JBQVk7QUFDcEIsVUFBSTtBQUNGLGVBQU9DLEdBQUdwQixjQUFILENBQWtCLE9BQWxCLENBQVA7QUFDRCxPQUZELENBRUUsT0FBT0MsQ0FBUCxFQUFVLENBQUc7QUFDZixhQUFPLElBQVA7QUFDRCxLQXZCSTtBQXdCTG9CLGNBQVUsa0JBQVVDLEtBQVYsRUFBaUI7QUFDekIsVUFBSTtBQUNGLGVBQU9GLEdBQUdHLGNBQUgsQ0FBa0IsT0FBbEIsRUFBMkJELEtBQTNCLENBQVA7QUFDRCxPQUZELENBRUUsT0FBT3JCLENBQVAsRUFBVSxDQUFHO0FBQ2YsYUFBTyxJQUFQO0FBQ0QsS0E3Qkk7QUE4Qkx1QixrQkFBYyx3QkFBWTtBQUN4QixVQUFJO0FBQ0YsZUFBT0osR0FBR3BCLGNBQUgsQ0FBa0IsV0FBbEIsQ0FBUDtBQUNELE9BRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVUsQ0FBRztBQUNmLGFBQU8sSUFBUDtBQUNELEtBbkNJO0FBb0NMd0Isa0JBQWMsc0JBQVVDLFNBQVYsRUFBcUI7QUFDakMsVUFBSTtBQUNGLGVBQU9OLEdBQUdHLGNBQUgsQ0FBa0IsV0FBbEIsRUFBK0JHLFNBQS9CLENBQVA7QUFDRCxPQUZELENBRUUsT0FBT3pCLENBQVAsRUFBVSxDQUFHO0FBQ2YsYUFBTyxJQUFQO0FBQ0Q7QUF6Q0ksR0FBUDtBQTJDRDs7QUFFRDBCLE9BQU9DLE9BQVAsR0FBaUJoQyxRQUFqQiIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb25maWcoKSB7XG4gIHZhciBzZXR0aW5nID0ge31cbiAgdmFyIGFwcHNldHRpbmdzID0ge31cbiAgdHJ5IHtcbiAgICBzZXR0aW5nID0gd2VweS5nZXRTdG9yYWdlU3luYygnc2V0dGluZycpXG4gICAgYXBwc2V0dGluZ3MgPSBzZXR0aW5nID8gc2V0dGluZy5hcHBzZXR0aW5ncyA6IHt9XG4gIH0gY2F0Y2ggKGUpIHsgfVxuXG4gIHJldHVybiB7XG4gICAgcGxhdGZvcm1ObzogJ3RlYWNoJywgIC8vIOW5s+WPsOe8luWPt1xuICAgIGFwcElkOiAnd3g2NGExYzZiOTE1ZjM5OTY4JywgIC8vIOWwj+eoi+W6j2FwcGlkXG4gICAgbmFtZTogJ+aVmeeri+aWuScsIC8vIOWQjeensFxuICAgIHZlcnNpb246ICcxLjAuMCcsIC8vIOeJiOacrFxuICAgIGRlc2NyaXB0aW9uOiAnJywgLy8g6K+05piOXG4gICAgbG9nbzogYXBwc2V0dGluZ3MubG9nbyB8fCAnaHR0cDovL2lwaC5ocmVmLmx1LzEyOHgxMjg/dGV4dD0lRTUlOEQlQTAlRTQlQkQlOEQnLCAvLyDmraPmlrnlvaJsb2dvXG4gICAgcmVjdGFuZ2xlTG9nbzogYXBwc2V0dGluZ3MucmVjdGFuZ2xlTG9nbyB8fCAnaHR0cDovL2lwaC5ocmVmLmx1LzQwMHgxMjg/dGV4dD0lRTUlOEQlQTAlRTQlQkQlOEQnLCAvLyDplb/mlrnlvaJsb2dvXG4gICAgcm9vdFVybDogYXBwc2V0dGluZ3Mucm9vdFVybCB8fCAnaHR0cHM6Ly9jZXNoaS5jb25wYW5kYS5jbicsIC8vIOagueebruW9lSAgaHR0cHM6Ly9zdG9yZS5jb25wYW5kYS5jblxuICAgIGltZ1Jvb3RVcmw6IGFwcHNldHRpbmdzLmltZ1Jvb3RVcmwgfHwgJ2h0dHBzOi8vY2VzaGkuY29ucGFuZGEuY24nLCAvLyDlm77niYfmoLnnm67lvZVcbiAgICBpbWdVcmw6IGFwcHNldHRpbmdzLmltZ1VybCB8fCAnaHR0cHM6Ly9jZXNoaS5jb25wYW5kYS5jbi9pbWcvc3JjJywgLy8g5qC55o2uaWTojrflj5blm77niYfnmoTlnLDlnYBcbiAgICB1cGxvYWRSb3V0ZTogYXBwc2V0dGluZ3MudXBsb2FkUm91dGUgfHwgXCIvdXBsb2FkXCIsIC8vIOe7n+S4gOS4iuS8oOi3r+eUsVxuICAgIGxvZ2luUm91dGU6ICcvcGFnZXMvbWVtYmVyL2JpbmR0ZWxlcGhvbmUvaW5kZXgnLCAvLyDnmbvlvZXot6/nlLFcbiAgICBob21lUm91dGU6ICcvcGFnZXMvaW5kZXgvaW5kZXgnLCAvLyDkuLvpobVcbiAgICBlcnJvclJvdXRlOiAnL2Vycm9yJywgLy8g6ZSZ6K+v6aG16Z2iXG4gICAgYXV0aG9yOiAn5oiQ6YO956ul5LyZ5L+h5oGv5oqA5pyv5pyJ6ZmQ5YWs5Y+4JyxcbiAgICBjb3B5cmlnaHQ6ICfniYjmnYPmiYDmnIkgwqkgMjAxOCDnlLEg5oiQ6YO956ul5LyZ5L+h5oGv5oqA5pyv5pyJ6ZmQ5YWs5Y+4IOaPkOS+mycsXG4gICAgYXV0aGVudGljYXRpb246IGZhbHNlLFxuICAgIGdldFRva2VuOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcbiAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBzZXRUb2tlbjogZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gd3guc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywgdG9rZW4pXG4gICAgICB9IGNhdGNoIChlKSB7IH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgZ2V0VW5pb251c2VyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gd3guZ2V0U3RvcmFnZVN5bmMoJ3VuaW9udXNlcicpXG4gICAgICB9IGNhdGNoIChlKSB7IH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgc2V0VW5pb251c2VyOiBmdW5jdGlvbiAodW5pb251c2VyKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gd3guc2V0U3RvcmFnZVN5bmMoJ3VuaW9udXNlcicsIHVuaW9udXNlcilcbiAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29uZmlnKCkiXX0=