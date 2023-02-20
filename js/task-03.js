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
const imagesGallery = document.querySelector('.gallery');
const imagesList = images.map((image) =>`<li><img src ='${image.url}' alt = '${image.alt}' width = "320"></li>`)


imagesGallery.insertAdjacentHTML('beforeend', imagesList)
console.log(imagesGallery);

const pictur = document.querySelectorAll('.picture')
imagesGallery.style.display = 'flex';
imagesGallery.style.listStyle = 'none'
imagesGallery.style.justifyContent = 'center'
imagesGallery.style.backgroundColor = 'green'
imagesGallery.style.gap = '20px'

