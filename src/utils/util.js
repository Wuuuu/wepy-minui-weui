const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

// 显示繁忙提示
var showBusy = text =>
  wx.showToast({
    title: text,
    icon: "loading",
    duration: 10000
  });

// 显示成功提示
var showSuccess = text =>
  wx.showToast({
    title: text,
    icon: "success"
  });

// 显示失败提示
var showModel = (title, content) => {
  wx.hideToast();

  wx.showModal({
    title,
    content: JSON.stringify(content),
    showCancel: false
  });
};

// 获取Token
var getToken = () => {
  try {
    return wx.getStorageSync("token");
  } catch (error) {
    return null;
  }
};

// 设置Token
var setToken = token => {
  try {
    return wx.setStorageSync("token", token);
  } catch (error) {
    return null;
  }
};

// 获取会员信息
var getUnionuser = () => {
  try {
    return wx.getStorageSync("unionuser");
  } catch (error) {
    return null;
  }
};

// 设置会员信息
var setUnionuser = (unionuser) => {
  try {
    return wx.setStorageSync("unionuser", unionuser);
  } catch (error) {
    return null;
  }
};
module.exports = {
  formatTime,
  showBusy,
  showSuccess,
  showModel,
  getToken,
	setToken,
	getUnionuser,
	setUnionuser
};
