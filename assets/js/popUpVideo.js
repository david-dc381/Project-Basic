(function() {
  
  const linkVideo     = document.getElementById('video-icon'),
        videoModal    = document.getElementById('video-modal'),
        scrollHidden  = document.getElementsByTagName('html')[0],
        closeVideo    = document.querySelectorAll('.video-modal i')[0],
        iframeVideo   = document.getElementById('iframe');

let active = false;
  
  
  linkVideo.addEventListener('click', () => {
    
    if ( active === false ) {
      active = true;
      videoModal.style.display = 'block';
      iframeVideo.setAttribute("src", "https://www.youtube.com/embed/r44RKWyfcFw");
      scrollHidden.style.overflowY = 'hidden';
    }
  });

  closeVideo.addEventListener('click', function () {
    if (active === true) {
      active = false;
      videoModal.style.display = "none";
      iframeVideo.removeAttribute('src');
      scrollHidden.style.overflowY = "scroll";
    }
  });


}())