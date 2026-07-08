document.addEventListener('DOMContentLoaded', function () {
  const galleries = document.querySelectorAll('.project-gallery');

  galleries.forEach(function (gallery) {
    const mainImage = gallery.querySelector('.project-gallery-main-image');
    const thumbs = gallery.querySelectorAll('.project-gallery-thumb');

    function showImage(index) {
      const thumb = thumbs[index];
      if (!thumb) return;

      const newSrc = thumb.getAttribute('data-large');
      const newAlt = thumb.getAttribute('data-alt');

      if (!newSrc) return;

      mainImage.setAttribute('src', newSrc);
      mainImage.setAttribute('alt', newAlt || 'Project preview');

      thumbs.forEach(function (item) {
        item.classList.remove('active');
      });

      thumb.classList.add('active');
    }

    thumbs.forEach(function (thumb, index) {
      thumb.addEventListener('click', function () {
        showImage(index);
      });
    });

    let currentIndex = 0;
    setInterval(function () {
      currentIndex = (currentIndex + 1) % thumbs.length;
      showImage(currentIndex);
    }, 4000);
  });
});
