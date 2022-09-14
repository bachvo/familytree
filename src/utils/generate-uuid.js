/**
 * Generate a unique 32 char long uuid
 * @returns {string}
 */
export default function generateUUID() {
  let d = new Date().getTime(); // Time in milliseconds since the ECMAScript epoch
  let d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(char) {
    let r = Math.random() * 16;
    if (d > 0){//Use timestamp until depleted
      r = (d + r)%16 | 0;
      d = Math.floor(d/16);
    } else {//Use microseconds since page-load if supported
      r = (d2 + r)%16 | 0;
      d2 = Math.floor(d2/16);
    }
    return (char === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}