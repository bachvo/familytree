/**
 * A dictionary containing all vietnamese zodiac animals and their javascript character entities/hex
 * @property {object}
 */
export const VIET_ZODIAC = {
  monkey: '\u{1F435}', // ๐ต
  rooster: '\u{1F414}', // ๐
  dog: '\u{1F436}', // ๐ถ
  pig: '\u{1F437}', // ๐ท
  rat: '\u{1F42D}', // ๐ญ
  buffalo: '\u{1F42E}', // ๐ฎ
  tiger: '\u{1F42F}', // ๐ฏ
  cat: '\u{1F431}', // ๐ฑ
  dragon: '\u{1F432}', // ๐ฒ
  snake: '\u{1F40D}', // ๐
  horse: '\u{1F434}', // ๐ด
  goat: '\u{1F410}', // ๐
}

/**
 * An array of all the keys of VIET_ZODIAC
 * @property {string[]}
 */
const VIET_ZODIAC_KEYS = Object.keys(VIET_ZODIAC);

/**
 * An array of all the values of VIET_ZODIAC
 * @property {string[]}
 */
const VIET_ZODIAC_VALUES = Object.values(VIET_ZODIAC);

/**
 * Offset the zodiac by -1 because gregorian and lunar are not equal
 * @param {string} birthYear - gregorian birth year format yyyy
 * @param {number} remainder - remainder
 * @return {number} remainder - remainder
 */
function offsetRemainder(birthYear, remainder) {
  let _remainder = remainder;
  const offsetYear = {
    '1956': true, // Hiแบฟu
    '1995': true, // Luรขn (Matthew)
  }

  if (birthYear in offsetYear) {
    if (_remainder === 0) {
      _remainder = 11
    } else {
      _remainder--
    }
  }

  return _remainder;
}

/**
 * Calculate a persons vietnamese zodiac javascript character entity/hex string
 * @param {string} birthYear - gregorian birth year format yyyy
 * @returns {string} return javascript character entity representing the animal
 */
export default function getZodiacAnimalHex(birthYear) {
  const remainder = birthYear % 12;
  return VIET_ZODIAC_VALUES[offsetRemainder(birthYear, remainder)];
}

/**
 * Calculate a persons vietnamese zodiac name
 * @param {string} birthYear - gregorian birth year format yyyy
 * @returns {string} return persons zodiac animal
 */
 export function getZodiacAnimalName(birthYear) {
  const remainder = birthYear % 12;
  return VIET_ZODIAC_KEYS[offsetRemainder(birthYear, remainder)];
}