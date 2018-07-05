/**
 * @shushanth
 * helper utils
 */


/**
 * Creates Dom elements and using the method in this object
 * can be to insert / append the created DOM element into the
 * document body
 *
 * @param {string} DOMElement
 * @param {string} id
 */
export const createDOMElement = (DOMElement = 'div', id = 'root') => {
  const element = document.createElement(DOMElement);
  element.id = id;
  return {
    create: () => {
      document.body.appendChild(element);
      return element;
    }
  }
};

/**
 * creates and returns new object binded with objects fn's
 * @param {object} obj
 * @param {array {strings}} fns
 */

export const bindable = (obj, fns) => {
  let bindableObj = {};
  fns.map(fn => bindableObj[fn] = obj[fn].bind(obj));
  return bindableObj;
};

