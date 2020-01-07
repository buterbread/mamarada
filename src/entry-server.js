import { createApp } from './main'

function extractLang(context) {
  const { req } = context || {};
  const { headers } = req || {};
  const { cookie: cookieString } = headers || {};

  if (!cookieString) {
    return 'ua'
  }

  const result = {};
  cookieString.split(' ').forEach(item => {
    const [key, value] = item.split('=');
    result[key] = value;
  })

  const { lang } = result;

  return lang;
}

const prepareUrlForRouting = url => {
  const { BASE_URL } = process.env
  return url.startsWith(BASE_URL.replace(/\/$/, ''))
    ? url.substr(BASE_URL.length)
    : url
}

export default context => {
  return new Promise(async (resolve, reject) => {
    const {
      app,
      router,
      store,
    } = await createApp({ lang: extractLang(context) })

    router.push(prepareUrlForRouting(context.url));

    router.onReady(() => {
      context.rendered = () => {
        // After all preFetch hooks are resolved, our store is now
        // filled with the state needed to render the app.
        // When we attach the state to the context, and the `template` option
        // is used for the renderer, the state will automatically be
        // serialized and injected into the HTML as `window.__INITIAL_STATE__`.
        context.state = store.state

      }
      resolve(app)
    }, reject)
  })
}
