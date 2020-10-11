'use strict';

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/*const createGalleryItem = document.querySelector('#gallery');
createGalleryItem.insertAdjacentHTML(
  'afterbegin',
  images.reduce((acc, { url, alt }) => {
    acc += `<li><img src="${url}" alt="${alt}" width = 200 height = 150></li>`;
    return acc;
  }, ''),
);
createGalleryItem.setAttribute('style', 'list-style-type:none; display: flex;');*/

const createGalleryItem = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = 200 height = 150></li>`;
const galleryMarkup = images.reduce(
  (acc, item) => acc + createGalleryItem(item),
  '');
const galleryList = document.querySelector("#gallery");
galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryList.setAttribute("style", "list-style-type:none; display: flex;");