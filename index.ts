import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name jiguang-jshare
 * @description typescript warpper for cordova plugin cordova-plugin-jshare
 *
 * @usage
 * ```typescript
 * import { JShare } from '@ionic-native/cordova-plugin-jshare';
 *
 *
 * constructor(private jshare: JShare) { }
 *
 */
@Plugin({
  pluginName: 'JShare',
  plugin: 'cordova-plugin-jshare',
  pluginRef: 'plugins.JShare',
  repo: 'https://github.com/gitself/cordova-plugin-jshare.git',
  install: 'ionic cordova plugin add cordova-plugin-jshare --variable APP_KEY=your_app_key',
  installVariables: ['APP_KEY'],
  platforms: ['Android', 'iOS']
})
@Injectable()
export class JShare extends IonicNativePlugin {

/**
 * init JShare Sdk and config platform
 * 
 * 设置微信平台信息。
 *  参数说明
 *  appId 微信平台appId
 *  appSecret 微信平台appSecret
 *
 * 设置qq平台信息。
 *  参数说明
 *  appId qq平台appId
 *  appKey qq平台appKey

 * 设置微博平台信息。
 *  参数说明
 *  appKey 微博平台appKey
 *  appSecret 微博平台appSecret
 *  redirectUrl 新浪微博平台的回调url 
 * @param
 * {
 * Wechat:{ 'appId': string, 'appSecret':string }
 * SinaWeibo:{ 'appKey': string, 'appSecret':string,'redirectUrl':string }
 * QQ:{ 'appId': string, 'appKey':string }
 * }
 */
init(platformConfig: PlatformConfig): Promise<any> {
  return;
}

/**
 * 在JShare Sdk init()初始化之前调用
 * 
 */
@Cordova()
setDebugMode(mode: boolean): void {
  return;
}

/**
 * 获取已经正确配置的平台
 */
@Cordova()
getPlatformList(): Promise<string[]> {
  return;
}

/**
 * 判断某个平台是否有效
 * @param name 平台名称，值可选 
 * "Wechat"、
 * "SinaWeibo"、
 * "QQ"
 * */
@Cordova()
isClientValid(name: string): Promise<boolean> {
  return;
}

/**
 * 判断某个平台是否支持授权
 * @param name 平台名称，值可选 
 * "Wechat"、
 * "SinaWeibo"、
 * "QQ"
 * */
@Cordova()
isSupportAuthorize(name: string): Promise<boolean> {
  return;
}

/**
 * 授权
 * @param name 平台名称，值可选 
 * "Wechat"、
 * "SinaWeibo"、
 * "QQ"
 **/
@Cordova()
authorize(name: string): Promise<PlatformAuthInfo> {
  return;
}

/**
 * 判断某个平台是否已经授权
 * @param name 平台名称，值可选 
 * "Wechat"、
 * "SinaWeibo"、
 * "QQ"
 **/
@Cordova()
isAuthorize(name: string): Promise<boolean> {
  return;
}

/**
 * 移除某个平台授权信息
 * @param name 平台名称，值可选 
 * "Wechat"、
 * "SinaWeibo"、
 * "QQ"
 * */
@Cordova()
removeAuthorize(name: string): Promise<any> {
  return;
}

/**
 * 获取某个平台个人信息
 * @param name 平台名称，值可选 
 * "Wechat"、
 * "SinaWeibo"、
 * "QQ"
 **/
@Cordova()
getUserInfo(name: string): Promise<PlatformUserInfo> {
    return;
}

}

export interface PlatformConfig {
  Wechat?: { appId: string, appSecret: string};
  SinaWeibo?: { appKey: string, appSecret: string, redirectUrl: string};
  QQ?: { appId: string, appKey: string };
}

export interface PlatformAuthInfo {
  token: string;
  expiration: number; // token有效时间，时间戳
  refresh_token: string;
  openid: string;
  originData: string; // 授权原始数据
}
export interface PlatformUserInfo {
  openid: string;
  name: string; // 用户昵称
  imageUrl: string; // 头像url
  gender: number; // 性别, 1表示男性；2表示女性
  originData: string; // 用户信息原始数据
}
