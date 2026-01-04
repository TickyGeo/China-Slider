const slider = document.querySelector('.slider');
const prev = document.querySelector('.slider .btn.prev');
const next = document.querySelector('.slider .next');
const radio = document.querySelectorAll('.slider .radio input');
 
const image = [
    'https://i.pinimg.com/736x/e3/93/9f/e3939f748ca66785e7c01e0733bc1db9.jpg',
    'https://wallpapercat.com/w/full/1/c/d/35312-3840x2160-desktop-4k-china-background.jpg',
    'https://4kwallpapers.com/images/wallpapers/qingdao-china-night-cityscape-city-lights-reflections-5k-3840x2160-1600.jpg',
    'https://wallpapercat.com/w/full/e/f/1/35389-2560x1600-desktop-hd-china-wallpaper.jpg',
    'https://lp-cms-production.imgix.net/2025-08/shutterstock1741527056.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop',
];

let cur = 0;

next.onclick = () => {
    cur++;
    cur == image.length ? cur = 0 : '';
    slider.style.backgroundImage = `url(${image[cur]})`;
    radio[cur].checked = true;
};

prev.onclick = () => {
    cur--;
    cur < 0 ? cur = image.length - 1 : '';
    slider.style.backgroundImage = `url(${image[cur]})`;
    radio[cur].checked = true;
};


for (let i = 0; i < radio.length; i++) {
    radio[i].onchange = () => {
        cur = i;
        slider.style.backgroundImage = `url(${image[cur]})`;
    };
};