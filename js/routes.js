var routes = [
  {
 	path: '/',
 	url: './index.html',
 	name: 'beranda',
  },
  {
    path: '/tentang/',
    url: './pages/tentang.html',
    name: 'tentang',
  },
  {
    path: '/materi/',
    url: './pages/materi.html',
    name: 'materi-panduan-haji-umroh',
  },
  {
    path: '/video/',
    url: './pages/video.html',
    name: 'video-panduan-haji-umroh',
  },
  {
    path: '/quiz/',
    url: './pages/quiz.html',
    name: 'quiz-panduan-haji-umroh',
  },



  {
    path: '(.*)',
    url: './pages/404.html',
    name: '404',
  },
];