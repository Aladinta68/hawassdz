export const handleTitle = (type) => {
  let title;
  if (type === "hotels") {
    title = "الفنادق الموصى بها";
  }
  if (type === "destinations") {
    title = "الوجهات الموصى بها";
  }
  if (type === "trips") {
    title = "الرحلات الموصى بها";
  }
  if (type === "restaurants") {
    title = "المطاعم الموصى بها";
  }
  return title;
};
export const handleDescription = (type) => {
  let description;
  if (type === "hotels") {
    description = "بعض من أكثر الفنادق الموصى بها لزيارتك.";
  }
  if (type === "destinations") {
    description = "بعض الوجهات الموصى بها لزيارتك.";
  }
  if (type === "trips") {
    description = "بعض من أكثر الرحلات الموصى بها لك لزيارتها مع إطلالة جميلة.";
  }
  if (type === "restaurants") {
    description = "بعض من أكثر المطاعم الموصى بها لزيارتك.";
  }
  return description;
};
export const moveLeft = (swiperRef) => {
  if (swiperRef.current) {
    swiperRef.current.slidePrev();
  }
};
export const moveRight = (swiperRef) => {
  if (swiperRef.current) {
    swiperRef.current.slideNext();
  }
};
