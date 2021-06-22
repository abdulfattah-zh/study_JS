"use strict";

const DomElement = function () {
    this.selector;
    this.height;
    this.width;
    this.bg;
    this.fontSize;
};

DomElement.prototype.addElement = function (selector, _height, _width, _bg, _fontSize) {

    this.selector = selector;
    console.log(this.selector);
    if (selector.substr(0, 1) == '.') {
        let newDiv = document.createElement('div');
        newDiv.style.height = _height + 'px';
        newDiv.style.width = _width + 'px';
        newDiv.style.backgroundColor = _bg;
        newDiv.style.fontSize = _fontSize + 'px';
        newDiv.innerHTML = "1111111111111111111111111111111111111111111111111111111111111111111111111111111111";
        newDiv.classList.add(selector.substr(1, ));
        document.body.appendChild(newDiv);
    } else {
        let newDiv = document.createElement('p');
        newDiv.style.height = _height + 'px';
        newDiv.style.width = _width + 'px';
        newDiv.style.backgroundColor = _bg;
        newDiv.style.fontSize = _fontSize + 'px';
        newDiv.textContent = "2222222222222222222222222222222222222222222222222222222222222222222222222222222222";
        newDiv.id = (selector.substr(1, ));
        document.body.appendChild(newDiv);
    }

};

const domElement = new DomElement();

domElement.addElement('.div', );
domElement.addElement('#div');