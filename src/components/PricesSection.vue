<template>
  <section class="homeSection">
    <div class="container">
      <div class="prices">
        <div class="pricesBlock" id="nannyToGo">
          <h2 class="pricesBlock-title">
            <strong class="pricesBlock-titleText">{{ $t('priceInfo.NannyForToddlers.Title') }}</strong>
            <span class="pricesBlock-titlePrice">
              {{ $t('from') }} <strong class="pricesBlock-titlePriceAmount">₴150</strong> {{ $t('hrs') }}
            </span>
          </h2>

          <div class="pricesBlock-description">
            <section class="pricesBlock-descriptionSection">
              <h3 class="pricesBlock-descriptionTitle">{{ $t('priceInfo.NannyForToddlers.DayTime') }}</h3>
              <p class="pricesBlock-descriptionPara">{{ $t('priceInfo.NannyForToddlers.DayTimeDescription') }}</p>
            </section>
            <section class="pricesBlock-descriptionSection">
              <h3 class="pricesBlock-descriptionTitle">{{ $t('priceInfo.NannyForToddlers.NightTime') }}</h3>
              <p class="pricesBlock-descriptionPara">{{ $t('priceInfo.NannyForToddlers.NightTimeDescription') }}</p>
            </section>

            <section class="pricesBlock-descriptionSection">
              <h3 class="pricesBlock-descriptionTitle pricesBlock-descriptionTitle_inline">
                {{ $t('priceInfo.NannyForToddlers.Weekends') }}
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <h3 class="pricesBlock-descriptionTitle pricesBlock-descriptionTitle_inline">
                {{ $t('priceInfo.NannyForToddlers.Holidays') }}
              </h3>
            </section>
            <section class="pricesBlock-descriptionSection">
              <h3 class="pricesBlock-descriptionTitle"><strong>{{ $t('priceInfo.NannyForToddlers.Note1') }}</strong></h3>
            </section>
          </div>

          <div class="pricesBlock-buttonsBox">
            <a :href=phoneHref class="button pricesBlock-orderButton">{{ $t('ToCall') }}</a>
            <a :href=viberChatLink class="button pricesBlock-viberButton">Viber</a>
            <a :href=telegramChatLink class="button pricesBlock-telegramButton">Telegram</a>
          </div>
        </div>

        <div class="pricesBlock">
          <h2 class="pricesBlock-title">
            <strong class="pricesBlock-titleText">{{ $t('priceInfo.NannyForNewborns.Title') }}</strong>
            <span class="pricesBlock-titlePrice">
              {{ $t('from') }} <strong class="pricesBlock-titlePriceAmount">₴200</strong> {{ $t('hrs') }}
            </span>
          </h2>

          <div class="pricesBlock-description">
            <section class="pricesBlock-descriptionSection">
              <h3 class="pricesBlock-descriptionTitle">
                {{ $t('priceInfo.NannyForNewborns.DayTime') }}
              </h3>
              <p class="pricesBlock-descriptionPara">
                {{ $t('priceInfo.NannyForNewborns.DayTimeDescription') }}
              </p>
            </section>
            <section class="pricesBlock-descriptionSection">
              <h3 class="pricesBlock-descriptionTitle">{{ $t('priceInfo.NannyForNewborns.NightTime') }}</h3>
              <p class="pricesBlock-descriptionPara">{{ $t('priceInfo.NannyForNewborns.NightTimeDescription') }}</p>
            </section>
            <section class="pricesBlock-descriptionSection">
              <h3 class="pricesBlock-descriptionTitle pricesBlock-descriptionTitle_inline">
                {{ $t('priceInfo.NannyForNewborns.Weekends') }}
              </h3>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <h3 class="pricesBlock-descriptionTitle pricesBlock-descriptionTitle_inline">
                {{ $t('priceInfo.NannyForNewborns.Holidays') }}
              </h3>
            </section>
          </div>

          <div class="pricesBlock-buttonsBox">
            <a :href=phoneHref class="button pricesBlock-orderButton">{{ $t('ToCall') }}</a>
            <a :href=viberChatLink class="button pricesBlock-viberButton">Viber</a>
            <a :href=telegramChatLink class="button pricesBlock-telegramButton">Telegram</a>
          </div>
        </div>

        <div class="pricesBlock" id="nannyForFamily">
          <h2 class="pricesBlock-title">
            <strong class="pricesBlock-titleText">
              {{ $t('priceInfo.NannyFullTime.Title') }}
            </strong>
            <span class="pricesBlock-titlePrice">
            <strong class="pricesBlock-titlePriceAmount">₴10000</strong>
          </span>
          </h2>

          <div class="pricesBlock-description">
            <section class="pricesBlock-descriptionSection">
              <h3 class="pricesBlock-descriptionTitle">
                {{ $t('priceInfo.NannyFullTime.Note1') }}
              </h3>
            </section>
          </div>

          <div class="pricesBlock-buttonsBox">
            <a :href=phoneHref class="button pricesBlock-orderButton">{{ $t('ToCall') }}</a>
            <a :href=viberChatLink class="button pricesBlock-viberButton">Viber</a>
            <a :href=telegramChatLink class="button pricesBlock-telegramButton">Telegram</a>
          </div>
        </div>

        <div class="pricesBlock">
          <h2 class="pricesBlock-title">
            <strong class="pricesBlock-titleText">
              {{ $t('priceInfo.NannyPartTime.Title') }}
            </strong>
            <span class="pricesBlock-titlePrice">
              {{ $t('priceInfo.NannyPartTime.SubTitle') }}
            </span>
          </h2>

          <div class="pricesBlock-description">
            <section class="pricesBlock-descriptionSection">
              <h3 class="pricesBlock-descriptionTitle">
                {{ $t('priceInfo.NannyPartTime.Note1') }}
              </h3>
            </section>
          </div>

          <div class="pricesBlock-buttonsBox">
            <a :href=phoneHref class="button pricesBlock-orderButton">{{ $t('ToCall') }}</a>
            <a :href=viberChatLink class="button pricesBlock-viberButton">Viber</a>
            <a :href=telegramChatLink class="button pricesBlock-telegramButton">Telegram</a>
          </div>
        </div>

        <div class="pricesBlock" id="autoDaddy">
          <h2 class="pricesBlock-title">
            <strong class="pricesBlock-titleText">{{ $t('priceInfo.AutoDaddy.Title') }}</strong>
            <span class="pricesBlock-titlePrice">
              {{ $t('from') }} <strong class="pricesBlock-titlePriceAmount">₴350</strong> {{ $t('hrs') }}
            </span>
          </h2>
          <div class="pricesBlock-description">
            <section class="pricesBlock-descriptionSection">
              <h3 class="pricesBlock-descriptionTitle">{{ $t('priceInfo.AutoDaddy.lessThan10km') }}</h3>
            </section>
            <section class="pricesBlock-descriptionSection">
              <h3 class="pricesBlock-descriptionTitle">{{ $t('priceInfo.AutoDaddy.moreThan10km') }}</h3>
            </section>
            <section class="pricesBlock-descriptionSection">
              <h3 class="pricesBlock-descriptionTitle"><strong>{{ $t('priceInfo.AutoDaddy.Note1') }}</strong></h3>
            </section>
          </div>

          <div class="pricesBlock-buttonsBox">
            <a :href=phoneHref class="button pricesBlock-orderButton">{{ $t('ToCall') }}</a>
            <a :href=viberChatLink class="button pricesBlock-viberButton">Viber</a>
            <a :href=telegramChatLink class="button pricesBlock-telegramButton">Telegram</a>
          </div>
        </div>

        <div class="pricesBlock" id="kidsWithIndividualNeeds">
          <h2 class="pricesBlock-title">
            <strong class="pricesBlock-titleText">{{ $t('priceInfo.KidsWithIndividualNeeds.Title') }}</strong>
            <span class="pricesBlock-titlePrice">
              {{ $t('from') }} <strong class="pricesBlock-titlePriceAmount">₴250</strong> {{ $t('hrs') }}
            </span>
          </h2>

          <div class="pricesBlock-buttonsBox">
            <a :href=phoneHref class="button pricesBlock-orderButton">{{ $t('ToCall') }}</a>
            <a :href=viberChatLink class="button pricesBlock-viberButton">Viber</a>
            <a :href=telegramChatLink class="button pricesBlock-telegramButton">Telegram</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import contact from '../config/contact'
const { phones, socialMedia } = contact
const { phoneNumber } = phones[0] || {}
const { viberChatLink, telegramChatLink } = socialMedia || {}

export default {
  name: 'PricesSection',
  data () {
    return {
      phoneHref: `tel:${phoneNumber}`,
      viberChatLink,
      telegramChatLink
    }
  }
}
</script>

<style lang="scss">

</style>
