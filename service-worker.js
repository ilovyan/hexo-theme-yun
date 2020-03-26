/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.bf686d9e.css",
    "revision": "e61547f238d2617f769384effa195531"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a8ce4280.js",
    "revision": "a583dde2f2c33b69482c51e0ab27b701"
  },
  {
    "url": "assets/js/11.12589b32.js",
    "revision": "2cfe6031835c8020b5a770850d227819"
  },
  {
    "url": "assets/js/12.3bf3b95d.js",
    "revision": "b593708f174c902485e8a5b8895bc148"
  },
  {
    "url": "assets/js/13.f139c024.js",
    "revision": "31f19fde76211953628d4e5e0b2db17a"
  },
  {
    "url": "assets/js/14.ee8dc7bd.js",
    "revision": "53cf75d3f679b488ecba47e201a09468"
  },
  {
    "url": "assets/js/15.287bc112.js",
    "revision": "2e009a0d8c96ec32988d0ac410af2d24"
  },
  {
    "url": "assets/js/16.1e8c74e1.js",
    "revision": "19334e1eadbcb34a512c6046bda863c9"
  },
  {
    "url": "assets/js/17.1f33c9ad.js",
    "revision": "7f39d163016e00f75eb02b4caabedde9"
  },
  {
    "url": "assets/js/18.5103f93f.js",
    "revision": "a8bfd6c41fb239d7317e614af0fcaf36"
  },
  {
    "url": "assets/js/2.87270e65.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/3.f9f44839.js",
    "revision": "b4a2dd5ee008fd9ef0c9261cea06c73a"
  },
  {
    "url": "assets/js/4.326d35e8.js",
    "revision": "cd79d2067b3dbcf3ecabc34d2b243d91"
  },
  {
    "url": "assets/js/5.5a688d0c.js",
    "revision": "1a4bc2bdbcb9d08bf1ae4d7b1f9f0a1b"
  },
  {
    "url": "assets/js/6.f10ceb6f.js",
    "revision": "2b0180504c044f2b2ba6cee20e3ef44f"
  },
  {
    "url": "assets/js/7.ad2d785b.js",
    "revision": "daccce7f6840e5d5cfbd27ac5d9b5567"
  },
  {
    "url": "assets/js/8.e61a35e4.js",
    "revision": "34289b2af2ebb8babc2d1610e904008f"
  },
  {
    "url": "assets/js/9.026f77ea.js",
    "revision": "dc75c276d2ab064a188109e26ce2be13"
  },
  {
    "url": "assets/js/app.c8cb7df9.js",
    "revision": "3a95871fd75e252b8a186b5f2903c696"
  },
  {
    "url": "en/guide/index.html",
    "revision": "d5a2aff2904144473dfef4f6d6065925"
  },
  {
    "url": "en/index.html",
    "revision": "d0a43c53db5a55558e492ff11d3e6914"
  },
  {
    "url": "guide/about.html",
    "revision": "1698344c5cd6303743ad81445486c142"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "52ab9f13f4fd59b8a1d5498583eb1138"
  },
  {
    "url": "guide/config.html",
    "revision": "8014ce3043c24327c126c442017416ef"
  },
  {
    "url": "guide/faq.html",
    "revision": "0cbf95097058388307145c3ecc72eefc"
  },
  {
    "url": "guide/index.html",
    "revision": "6398f78e7ab82dc4e88a85a60dddc9b8"
  },
  {
    "url": "guide/page.html",
    "revision": "f81d47b7eb720946d331c77de930b24f"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "0ffa63c6bcc00d52fd08dccdf86bed3d"
  },
  {
    "url": "guide/Todo.html",
    "revision": "7b583d488babf7e2be6479231a82118e"
  },
  {
    "url": "index.html",
    "revision": "8921ba6a9f8fd433eda2b468ed345aba"
  },
  {
    "url": "logo.gif",
    "revision": "a15b28b70e73f11115a7d195eba8b3b9"
  },
  {
    "url": "logo.png",
    "revision": "bb35d0cf00948250fd08e4663c133e12"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
