import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class JShare extends IonicNativePlugin {
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
    init(platformConfig: PlatformConfig): Promise<any>;
    /**
     * 在JShare Sdk init()初始化之前调用
     *
     */
    setDebugMode(mode: boolean): void;
    /**
     * 获取已经正确配置的平台
     */
    getPlatformList(): Promise<string[]>;
    /**
     * 判断某个平台是否有效
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     * */
    isClientValid(name: string): Promise<boolean>;
    /**
     * 判断某个平台是否支持授权
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     * */
    isSupportAuthorize(name: string): Promise<boolean>;
    /**
     * 授权
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     **/
    authorize(name: string): Promise<PlatformAuthInfo>;
    /**
     * 判断某个平台是否已经授权
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     **/
    isAuthorize(name: string): Promise<boolean>;
    /**
     * 移除某个平台授权信息
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     * */
    removeAuthorize(name: string): Promise<any>;
    /**
     * 获取某个平台个人信息
     * @param name 平台名称，值可选
     * "Wechat"、
     * "SinaWeibo"、
     * "QQ"
     **/
    getUserInfo(name: string): Promise<PlatformUserInfo>;
}
export interface PlatformConfig {
    Wechat?: {
        appId: string;
        appSecret: string;
    };
    SinaWeibo?: {
        appKey: string;
        appSecret: string;
        redirectUrl: string;
    };
    QQ?: {
        appId: string;
        appKey: string;
    };
}
export interface PlatformAuthInfo {
    token: string;
    expiration: number;
    refresh_token: string;
    openid: string;
    originData: string;
}
export interface PlatformUserInfo {
    openid: string;
    name: string;
    imageUrl: string;
    gender: number;
    originData: string;
}
