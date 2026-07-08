document.addEventListener('DOMContentLoaded', function () {
  const galleries = document.querySelectorAll('.project-gallery');

  galleries.forEach(function (gallery) {
    const mainImage = gallery.querySelector('.project-gallery-main-image');
    const thumbs = gallery.querySelectorAll('.project-gallery-thumb');

    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        const newSrc = this.getAttribute('data-large');
        const newAlt = this.getAttribute('data-alt');

        if (!newSrc) return;

        mainImage.setAttribute('src', newSrc);
        mainImage.setAttribute('alt', newAlt || 'Project preview');

        thumbs.forEach(function (item) {
          item.classList.remove('active');
        });

        this.classList.add('active');
      });
    });
  });
});
