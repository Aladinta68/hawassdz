import hotelimg from "../../../assets/search layout/hotel.webp";
import restaurantimg from "../../../assets/search layout/restaurant.webp";
import destinationimg from "../../../assets/search layout/destination.webp";
import tripimg from "../../../assets/search layout/trip.webp";
export const handleImage = (source) => {
  if (source === "restaurants") return restaurantimg;
  if (source === "hotels") return hotelimg;
  if (source === "destinations") return destinationimg;
  if (source === "wilaya") return "    ";
  if (source === "trips") return tripimg;
};
export const handleHeading = (source) => {
  if (source === "restaurants") return "المطاعم    ";
  if (source === "hotels") return "الفنادق    ";
  if (source === "destinations") return "الوجهات السياحية    ";
  if (source === "wilaya") return "الولايات    ";
  if (source === "trips") return "التجارب و الفعاليات    ";
};
export const handleText = (source) => {
  if (source === "restaurants") return "إكتشف أفضل المطاعم لدينا    ";
  if (source === "hotels") return "إكتشف أفضل الفنادق في الجزائر    ";
  if (source === "destinations") return "اكتشف وجهاتنا    ";
  if (source === "wilaya") return "    ";
  if (source === "trips") return "ابحث عن أفضل التجارب و الفعاليات    ";
};
