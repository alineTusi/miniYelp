function filterPosts(e) {
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post');
  
    posts.forEach(post => {
      const title = post.querySelector('.post-title').innerText.toUpperCase();
      const body = post.querySelector('.post-body').innerText.toUpperCase();
  
      if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
        post.style.display = 'flex';
      } else {
        post.style.display = 'none';
      }
    });
  }
  
  // Show initial posts
  showPosts();
  
  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      showLoading();
    }
  });
  
  filter.addEventListener('input', filterPosts);