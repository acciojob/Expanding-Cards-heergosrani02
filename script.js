let images = document.querySelectorAll('.panel');

const expandImage = () => {
    images.forEach((image) => {
        image.addEventListener('click', () => {
			images.forEach((img) => img.classList.remove('active'));
            image.classList.add('active');
        })
    })
}

expandImage();
