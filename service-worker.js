if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const b=e=>c(e,r),f={module:{uri:r},exports:d,require:b};i[r]=Promise.all(s.map((e=>f[e]||b(e)))).then((e=>(a(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"0e397da4ebc96e9beaf0310de7688a0c"},{url:"about/index.html",revision:"89a88fb37c17708e85a3910e4cfae520"},{url:"air-conditioner/index.html",revision:"72a48e1867022fc8b21c4cc0cea982b5"},{url:"album/index.html",revision:"fbc83e3c09a523ed5b867490258d952f"},{url:"anzhiyu/random.js",revision:"60589533925e06919edeaa1cb0d5b222"},{url:"archives/2023/04/index.html",revision:"49a3cefe121372d4127e92c9a0e23c4e"},{url:"archives/2023/05/index.html",revision:"6f33abe2424c1f0f2bc2f8bbea67e010"},{url:"archives/2023/index.html",revision:"3d64f86a554590045238d079a38375ac"},{url:"archives/index.html",revision:"99c9839be042a2b77aed13a32432d301"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"bangumis/index.html",revision:"c1702b638aa8cf992ebd83bed651ebc9"},{url:"categories/index.html",revision:"fb0da13c253064129760e215f46ceebf"},{url:"categories/个人/index.html",revision:"f6c3d222bef9216620cf08d07208e68c"},{url:"categories/初中生活/index.html",revision:"b63e5536bfd604d14ea3b6ff5296a1d5"},{url:"categories/博客/index.html",revision:"0d43cf88ae3cda6c9f44e4d27b8934b8"},{url:"categories/游戏/index.html",revision:"5b150e2f9b8cec8e1f70305c8f0bbb4b"},{url:"cinemas/index.html",revision:"566fdc5c4b6b0a912793181e645f6530"},{url:"css/custom.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/index.css",revision:"acf2aace8141e23bdf596ae3c65016f3"},{url:"css/kslink.css",revision:"dd1af3c36730c7ef47a7c1f4eab27bdb"},{url:"css/mouse.css",revision:"d6db61fb1b3fed676956a4701cc8b62b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/visitor.css",revision:"dbb52df354e6a8f3777a6ec2d5054a53"},{url:"dailyPhoto/index.html",revision:"9ae266b9448c30275bb12add340ef11b"},{url:"essay/index.html",revision:"c2ae7a8907ec19f4ad8cefdea8f1d770"},{url:"fcircle/index.html",revision:"4e042a3a580647778c90a957f6714662"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/A1.svg",revision:"db5ad23565f2fa8d877b9fdcabe9b913"},{url:"img/A2.svg",revision:"9e5ce2dd15b714ec9907407028701f8a"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"196eadc8c1543d2ba0e6bcf82c8627bf"},{url:"js/kslink.js",revision:"c5e1f13cf2b125ab4d8637718a88e903"},{url:"js/main.js",revision:"3f8ef3f6e9809c64561230a679317bc5"},{url:"js/search/algolia.js",revision:"dff0d830ab1d005f1eda1ea299c724cc"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"a8e83cbb013f8954fba1335604368e3d"},{url:"js/visitor.js",revision:"2cf28a06e1b017e6e26365bf42ac3cde"},{url:"link/index.html",revision:"9c636d9b12b06983bef4755692fa5c12"},{url:"music/index.html",revision:"c6e90f4544c5357bb6d714c2dc82f664"},{url:"posts/4a17b156.html",revision:"0d90f529f4b90fe23cfc7fa6bdafe587"},{url:"posts/ab65d9e6.html",revision:"c182c911e901cd5c2e655ade8b644b3a"},{url:"posts/bc51e6d.html",revision:"ecfbab8c86949624d964b581f0bb2be0"},{url:"posts/e96bb967.html",revision:"9a4843e0ee1e752b2e03582fb51cce34"},{url:"posts/fb374582.html",revision:"a7470f87af6021c1e758fa2d3318212d"},{url:"tags/hexo/index.html",revision:"beb1f28502bd053d96396cdfbd4d473c"},{url:"tags/index.html",revision:"51150ecca207679e7bea753e7afc6c2c"},{url:"tags/Ta们/index.html",revision:"d69b72cffca7f0b4fe85ac5c4d0dfc9e"},{url:"tags/光遇/index.html",revision:"2af6e75c9fabf63d5496ed53f9dcc011"},{url:"tags/开篇之作/index.html",revision:"a8d1c934b32fe991a4da293c0bad9174"},{url:"tags/我/index.html",revision:"93098eeb63d902639297e5b7a0cd132f"},{url:"wordScenery/index.html",revision:"7cab6fc19947d296e7c15abb8bcd818d"}],{})}));
//# sourceMappingURL=service-worker.js.map
