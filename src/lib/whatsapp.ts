export const WHATSAPP_NUMBER = "919814996633";
export const PHONE_DISPLAY = "09814 99 6633";
export const PHONE_TEL = "+919814996633";
export const INSTAGRAM_HANDLE = "@mannorganiculture";
export const INSTAGRAM_URL = "https://www.instagram.com/mannorganiculture/";
export const ADDRESS = "Khanna - Khamano Rd, Salodi, Punjab 141417, India";
export const PLUS_CODE = "Q63J+44 Salodi, Punjab, India";

export function waLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const waMessages = {
  general: "Hello Mann Organiculture, I would like to know more about your farm.",
  vegetables: "Hello Mann Organiculture, I would like to enquire about your vegetables.",
  fruits: "Hello Mann Organiculture, I would like to enquire about your seasonal fruits.",
  pulses: "Hello Mann Organiculture, I would like to enquire about your pulses and farm produce.",
  grains: "Hello Mann Organiculture, I would like to enquire about your grains.",
  farmPlots: "Hello Mann Organiculture, I am interested in renting a farm plot.",
  product: (name: string) => `Hello Mann Organiculture, I would like to enquire about ${name}.`,
};
