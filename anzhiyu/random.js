var posts=["posts/4a17b156.html","posts/e96bb967.html","posts/bc51e6d.html","posts/ab65d9e6.html","posts/fb374582.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};