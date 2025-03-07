/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx737a06c4e539cbc8',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '158f2045bcf30f053d0619dc71ce4252',

  PROVINCE: '安徽',
  CITY: '芜湖',

  USERS: [
    {
      // 想要发送的人的名字
      name: '心心宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oxr5v6QcdEyrMAhiCkBfZt3QumXE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'cZD8gF4tgS57pj1483Av9-YOM1CymIH2FerxVbib_-g',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-3',
      festivals: [
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '08-26',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-08-26' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oxr5v6QcdEyrMAhiCkBfZt3QumXE',
    }
  ],

}

module.exports = USER_CONFIG

