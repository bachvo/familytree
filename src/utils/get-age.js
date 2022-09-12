/**
 * Calculate a persons age
 * @param {string} birthdayString - day of birth format mm/dd/yyyy
 * @param {string} [deathdayString] - day of death format mm/dd/yyyy
 * @returns {number}
 */
 export default function getAge(birthdayString, deathdayString) {
  const endDay = deathdayString ? new Date(deathdayString) : new Date();
  const birthDate = new Date(birthdayString);
  const m = endDay.getMonth() - birthDate.getMonth();
  let age = endDay.getFullYear() - birthDate.getFullYear();
  if (m < 0 || (m === 0 && endDay.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}