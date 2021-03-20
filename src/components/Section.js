export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._array = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(cardItem) {
    this._container.append(cardItem);
  }

  renderItems() {
    this._array.forEach((item) => this._renderer(item));
  }
}
