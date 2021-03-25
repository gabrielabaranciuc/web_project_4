(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=n,this._config=e,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass}var n,r;return n=t,(r=[{key:"_showErrorMessage",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));n.textContent=t,n.classList.add(this._errorClass),e.classList.add(this._inputErrorClass)}},{key:"_hideErrorMessage",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideErrorMessage(e):this._showErrorMessage(e,e.validationMessage)}},{key:"_toggleButtonState",value:function(e,t){e.every((function(e){return e.validity.valid}))?(t.classList.remove(this._inactiveButtonClass),t.disabled=!1):(t.classList.add(this._inactiveButtonClass),t.disabled=!0)}},{key:"_setEventListeners",value:function(){var e=this,t=Array.from(this._formElement.querySelectorAll(this._inputSelector)),n=this._formElement.querySelector(this._submitButtonSelector);this._formElement.addEventListener("reset",(function(){t.forEach((function(r){e._hideErrorMessage(r),e._toggleButtonState(t,n)}))})),t.forEach((function(r){r.addEventListener("input",(function(){e._checkInputValidity(r),e._toggleButtonState(t,n)}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&e(n.prototype,r),t}(),n={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_visible"},r=document.querySelector(".profile__edit-button"),o=document.querySelector(".profile__add-button"),i=(document.querySelector(".profile__name"),document.querySelector(".profile__title"),document.querySelector(".profile__image-container"),document.querySelector(".profile__button_edit-avatar")),a=document.querySelector(".modal_type_edit-profile").querySelector(".form"),c=a.querySelector(".form__input_type_name"),l=a.querySelector(".form__input_type_title");function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n,r){var o=t.cardItem,i=t.handleCardClick,a=t.handleDeleteClick,c=t.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o.name,this._link=o.link,this._likes=o.likes,this._cardItem=o,this._myId=r,this._userId=this._myId,this._id=o._id,this._ownerId=o.owner._id,this._cardTemplateSelector=n,this._handleCardClick=i,this._handleDeleteClick=a,this._handleLikeClick=c}var t,n;return t=e,(n=[{key:"_getCardTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._card.querySelector(".card__delete-button").closest(".card"),this._card.querySelector(".card__delete-button").addEventListener("click",(function(){e._handleDeleteClick(e._card,e._id)})),this._card.querySelector(".card__like-button").addEventListener("click",(function(t){var n=e._card.querySelector(".card__like-button").classList.contains("card__like-button_active");e._handleLikeClick(n,e._cardItem._id,e._card.querySelector(".card__like-counter")),t.target.classList.toggle("card__like-button_active")})),this._card.querySelector(".card__image").addEventListener("click",(function(){e._handleCardClick({title:e._name,link:e._link})}))}},{key:"_updateCardView",value:function(){var e=this;this._card.querySelector(".card__like-counter").textContent=this._likes.length,this._likes.forEach((function(t){e._userId===t.cardId&&e._card.querySelector(".card__like-button").classList.toggle("card__like-button_active")}));var t=this._card.querySelector(".card__delete-button");"a48b9cd997833ba8b6a73b1c"!==this._ownerId&&(t.style.display="none")}},{key:"remove",value:function(){this._card.remove()}},{key:"id",value:function(){return this._id}},{key:"generateCard",value:function(){return this._card=this._getCardTemplate(),this._card.querySelector(".card__image").style.backgroundImage="url('".concat(this._link,"')"),this._card.querySelector(".card__title").textContent=this._name,this._setEventListeners(),this._updateCardView(),this._card}}])&&u(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("modal__reset-button")||t.target.classList.contains("modal_opened"))&&e.close()}))}},{key:"open",value:function(){this._popupElement.classList.add("modal_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("modal_opened"),document.removeEventListener("keyup",this._handleEscClose)}}])&&f(t.prototype,n),e}();function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(e){var t,n=e.popupSelector,r=e.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._submitHandler=r,t._formElement=t._popupElement.querySelector(".form"),t._formButton=t._popupElement.querySelector(".form__submit-button"),t._inputList=t._popupElement.querySelectorAll(".form__input"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;p(v(a.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e.renderLoading(!0),e._submitHandler(e._getInputValues(),e._listItem,e._cardId),e.close()}))}},{key:"close",value:function(){p(v(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"renderLoading",value:function(e){this._formButton.textContent=e?"Saving...":this._formButton.dataset.text}},{key:"setSubmitAction",value:function(e){this._submitHandler=e}}])&&_(t.prototype,n),a}(d);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"open",value:function(e,t){var n=this._popupElement.querySelector(".modal__image"),r=this._popupElement.querySelector(".modal__image-caption");n.src=t,r.textContent=e,n.alt=e,E(w(a.prototype),"open",this).call(this)}}])&&k(t.prototype,n),a}(d);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._array=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"prependItem",value:function(e){this._container.prepend(e)}}])&&j(t.prototype,n),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.imageSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileNameEl=document.querySelector(n),this._profileJobEl=document.querySelector(r),this._profileImageEl=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileNameEl.textContent,job:this._profileJobEl.textContent,imageLink:this._profileImageEl.src,_id:this._id}}},{key:"setUserInfo",value:function(e){e.avatar&&(this._profileImageEl.src=e.avatar),this._profileNameEl.textContent=e.name,this._profileJobEl.textContent=e.about,this._id=this._myId}}])&&O(t.prototype,n),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T,A=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getAppInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.imageLink})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.job})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:e.title,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"updateLike",value:function(e,t){return e?fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)})):fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}}])&&P(t.prototype,n),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-7",headers:{authorization:"7fda3d54-cdd7-4a60-96d1-9efeeab5176a","Content-Type":"application/json"}}),B=new L(".modal_type_image");B.setEventListeners();var R=new b({popupSelector:".modal_type_delete-card"});R.setEventListeners();var x=function(e,t){var n=new s({cardItem:e,handleCardClick:function(e){var t=e.title,n=e.link;B.open(t,n)},handleDeleteClick:function(e){R.open({cardId:e._id}),R.setSubmitAction((function(){A.deleteCard(n.id()).then((function(){n.remove()})).catch((function(e){return console.log("Error! "+e)})).finally((function(){return R.renderLoading(!1)}))}))},handleLikeClick:function(e,t,n){A.updateLike(e,t).then((function(e){n.textContent=e.likes.length}))},myId:t},".card-template",D.getUserInfo.myId);return n.generateCard()},V=new I({items:[],renderer:function(e){V.addItem(x(e,T))}},".cards__list"),D=new q({nameSelector:".profile__name",jobSelector:".profile__title",imageSelector:".profile__avatar"});A.getAppInfo().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];T=i._id,D.setUserInfo(i),o.forEach((function(e){V.addItem(x(e,i._id))}))})).catch((function(e){console.log(e)}));var H=new b({popupSelector:".modal_type_add-card",submitHandler:function(e){H.renderLoading(!0),A.addCard(e).then((function(e){V.prependItem(x(e,e.owner._id),!0)})).then((function(){H.close()})).then((function(){H.renderLoading(!1)})).catch((function(e){console.log(e)})).finally((function(){return H.renderLoading(!1)}))}});H.setEventListeners(),o.addEventListener("click",(function(){H.open()}));var M=new b({popupSelector:".modal_type_change-avatar",submitHandler:function(e){M.renderLoading(!0),A.changeAvatar(e).then((function(e){D.setUserInfo(e)})).catch(console.log).finally((function(){return M.renderLoading(!1)}))}});M.setEventListeners(),i.addEventListener("click",(function(){M.open()}));var N=new b({popupSelector:".modal_type_edit-profile",submitHandler:function(e){N.renderLoading(!0),A.changeUserInfo(e).then((function(e){D.setUserInfo(e)})).catch(console.log).finally((function(){return N.renderLoading(!1)}))}});N.setEventListeners(),r.addEventListener("click",(function(){var e=D.getUserInfo();c.value=e.name,l.value=e.job,N.open()})),Array.from(document.querySelectorAll(n.formSelector)).forEach((function(e){new t(n,e).enableValidation()}))})();