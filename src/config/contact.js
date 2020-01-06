import global from './global'

const { SOCIAL_MEDIA_PHONE_1, SOCIAL_MEDIA_TGDOMAIN_1 } = global

const contact = (() => ({
  phones: [
    {
      key: 'phone1',
      phoneLabel: '+38 067 524 79 39',
      phoneLabelLocal: '067 524 79 39',
      phoneNumber: '+380675247939'
    }
  ],
  socialMedia: {
    viberChatLink: `viber://chat?number=${SOCIAL_MEDIA_PHONE_1}`,
    telegramChatLink: `tg://resolve?domain=${SOCIAL_MEDIA_TGDOMAIN_1}`
  }
}))()

export default contact
