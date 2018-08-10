var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var JShare = (function (_super) {
    __extends(JShare, _super);
    function JShare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    JShare.prototype.init = /**
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
    function (platformConfig) {
        return;
    };
    /**
     * 在JShare Sdk init()初始化之前调用
     *
     */
    /**
     * 在JShare Sdk init()初始化之前调用
     *
     */
    JShare.prototype.setDebugMode = /**
     * 在JShare Sdk init()初始化之前调用
     *
     */
    function (mode) {
        return;
    };
    /**
     * 获取已经正确配置的平台
     */
    /**
     * 获取已经正确配置的平台
     */
    JShare.prototype.getPlatformList = /**
     * 获取已经正确配置的平台
     */
    function () {
        return;
    };
    /**
     * 判断某个平台是否有效
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     * */
    /**
     * 判断某个平台是否有效
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     * */
    JShare.prototype.isClientValid = /**
     * 判断某个平台是否有效
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     * */
    function (name) {
        return;
    };
    /**
     * 判断某个平台是否支持授权
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     * */
    /**
     * 判断某个平台是否支持授权
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     * */
    JShare.prototype.isSupportAuthorize = /**
     * 判断某个平台是否支持授权
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     * */
    function (name) {
        return;
    };
    /**
     * 授权
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     **/
    /**
     * 授权
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     **/
    JShare.prototype.authorize = /**
     * 授权
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     **/
    function (name) {
        return;
    };
    /**
     * 判断某个平台是否已经授权
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     **/
    /**
     * 判断某个平台是否已经授权
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     **/
    JShare.prototype.isAuthorize = /**
     * 判断某个平台是否已经授权
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     **/
    function (name) {
        return;
    };
    /**
     * 移除某个平台授权信息
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     * */
    /**
     * 移除某个平台授权信息
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     * */
    JShare.prototype.removeAuthorize = /**
     * 移除某个平台授权信息
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     * */
    function (name) {
        return;
    };
    /**
     * 获取某个平台个人信息
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     **/
    /**
     * 获取某个平台个人信息
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     **/
    JShare.prototype.getUserInfo = /**
     * 获取某个平台个人信息
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     **/
    function (name) {
        return;
    };
    JShare.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], JShare.prototype, "setDebugMode", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], JShare.prototype, "getPlatformList", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], JShare.prototype, "isClientValid", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], JShare.prototype, "isSupportAuthorize", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], JShare.prototype, "authorize", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], JShare.prototype, "isAuthorize", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], JShare.prototype, "removeAuthorize", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], JShare.prototype, "getUserInfo", null);
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
    JShare = __decorate([
        Plugin({
            pluginName: 'JShare',
            plugin: 'cordova-plugin-jshare',
            pluginRef: 'plugins.JShare',
            repo: 'https://github.com/gitself/cordova-plugin-jshare.git',
            install: 'ionic cordova plugin add cordova-plugin-jshare --variable APP_KEY=your_app_key',
            installVariables: ['APP_KEY'],
            platforms: ['Android', 'iOS']
        })
    ], JShare);
    return JShare;
}(IonicNativePlugin));
export { JShare };
//# sourceMappingURL=index.js.map