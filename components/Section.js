export default class Section {
  constructor({ items, renderer }, classSelector) {
    this._array = items;
    this._renderer = renderer;
    this._container = document.querySelector(classSelector);
  }
  renderItems() {
    this._array.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(cardTemplate) {
    this._container.prepend(cardTemplate);
  }
}