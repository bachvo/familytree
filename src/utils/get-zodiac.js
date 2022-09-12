export const VIET_ZODIAC = {
  monkey: '\u{1F435}', // 🐵
  rooster: '\u{1F414}', // 🐔
  dog: '\u{1F436}', // 🐶
  pig: '\u{1F437}', // 🐷
  rat: '\u{1F42D}', // 🐭
  ox: '\u{1F42E}', // 🐮
  tiger: '\u{1F42F}', // 🐯
  cat: '\u{1F431}', // 🐱
  dragon: '\u{1F432}', // 🐲
  snake: '\u{1F40D}', // 🐍
  horse: '\u{1F434}', // 🐴
  goat: '\u{1F410}', // 🐐
}

/**
 * Calculate a persons vietnamese zodiac hexidecimal unicode string
 * @param {string} birthYear - gregorian birth year format yyyy
 * @returns {string} return hexidecimal unicode string representing the animal
 */
export default function getZodiacAnimalHex(birthYear) {
  const zodiacIndex = Object.values(VIET_ZODIAC);
  const remainder = birthYear % 12;
  return zodiacIndex[remainder]
}

/**
 * Calculate a persons vietnamese zodiac name
 * @param {string} birthYear - gregorian birth year format yyyy
 * @returns {string} return persons zodiac animal
 */
 export function getZodiacAnimalName(birthYear) {
  const zodiacIndex = Object.keys(VIET_ZODIAC);
  const remainder = birthYear % 12;
  return zodiacIndex[remainder]
}