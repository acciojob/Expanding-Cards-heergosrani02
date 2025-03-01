let images = document.querySelectorAll('.panel-1');

const expandImage = () => {
    images.forEach((image) => {
        image.addEventListener('click', () => {
			image.classList.remove('active');
            image.classList.add('active');
        })
    })
}

expandImage();
