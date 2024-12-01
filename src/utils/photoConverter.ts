const placeholderImage = '/assets/img/placeholder.jpg';
const firstImage = '/assets/img/image_1.jpg';

export const photoConverter = (img: string) => {
    if (!img) {
        return placeholderImage;
    }
    if (img === 'no-photo.jpg') {
      return firstImage; 
    }
  return img;
}
