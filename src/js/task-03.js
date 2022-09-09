const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeGallery = ({ url, alt }) => {
  return `<li><img src = ${url} alt = ${alt} width = auto height=250 class="image"></li>`
};

const galleryElement = document.querySelector('.gallery');
const makeGalleryItem = images.map(makeGallery).join('');
galleryElement.insertAdjacentHTML("afterbegin", makeGalleryItem);
console.log(makeGalleryItem);


galleryElement.style.listStyle = 'none';
galleryElement.style.display = 'flex';
galleryElement.style.gap = '30px';
galleryElement.style.justifyContent = 'center';
galleryElement.style.paddingTop = '30px';
galleryElement.style.paddingBottom = '30px';
galleryElement.style.backgroundColor = 'rgba(72, 122, 180, .3)'
const image = document.querySelectorAll('.image');
for (const img of image) {
  img.style.boxShadow = '3px 5px 3px #757878';
  img.style.borderRadius = '10px';
};

// done