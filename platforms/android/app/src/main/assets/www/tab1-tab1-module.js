(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\" class=\"ion-text-center\">\r\n    <ion-title>\r\n      <img class=\"half-img-width\" src=\"../../assets/next-black-logo.svg\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <!-- Card de Entrada de Dados -->\r\n  <ion-card class=\"margin-card\">\r\n    <ion-card-header class=\"margin-less\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"7\" class=\"align-vertically-center\">\r\n            <ion-card-subtitle class=\"ion-text-center bold-text\">What will be the amount applied?</ion-card-subtitle>\r\n          </ion-col>\r\n          <ion-col size=\"5\">\r\n            <ion-input type=\"number\" class=\"input-value-card bold-text\" placeholder=\"US$ 0.00\" [(ngModel)]=\"investimento\"></ion-input>\r\n            </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-card-subtitle class=\"ion-text-center\">Amount applied: {{investimento | currency:'USD':true:'1.2-2'}}</ion-card-subtitle>\r\n      <ion-card-subtitle class=\"ion-text-center bold-text\">Yield rate: {{taxa}}%</ion-card-subtitle>\r\n      <ion-range color=\"primary\" value=1 min=\"0\" max=\"100\" step=\"1\" snaps=\"true\" [(ngModel)]=\"taxa\">\r\n        <ion-label slot=\"start\" class=\"bold-text\">\r\n          <button size=\"small\" class=\"buttom-range text-white\" (click)=\"taxa = taxa - 1\"><ion-icon name=\"remove\"></ion-icon></button>\r\n          0%\r\n        </ion-label>\r\n        <ion-label slot=\"end\" class=\"bold-text\">\r\n          100%\r\n          <button size=\"small\" class=\"buttom-range text-white\" (click)=\"taxa = taxa + 1\"><ion-icon name=\"add\"></ion-icon></button>\r\n        </ion-label>\r\n      </ion-range>\r\n      <ion-button class=\"text-white bold-text\" expand=\"block\" (click) =\"getSimular()\">Simulate</ion-button>\r\n    </ion-card-header>\r\n  </ion-card>\r\n  <!-- Card de Rendimentos -->\r\n  <ion-slides pager=\"true\">\r\n    <ion-slide>\r\n      <ion-card color=\"primary\" class=\"screen-size\">\r\n        <p class=\"text-white bold-text\">Yield</p>\r\n        <hr class=\"background-white\">\r\n        <ion-card-header class=\"margin-less\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <div>\r\n                  <p class=\"text-white size-letter-upper margin-less-p\">{{rendimentoMes | currency:'USD':true:'1.2-2'}}</p>\r\n                  <p class=\"text-white margin-less-p\">Yield/month</p>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-button color=\"primary\" class=\"border-btn-grey\" expand=\"block\" (click)=\"toggleDetails()\"><ion-icon class=\"size-icon\" color=\"light\" [name]=\"icon\"></ion-icon></ion-button>\r\n          <ion-list class=\"no-padding\" id=\"detalhamento\" [ngClass]=\"{'remove-list' : !clique}\">\r\n            <!-- Detalhamento do valor aplicado -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">Amount applied:</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{valorAplicado | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-label class=\"text-white subtitle\">Investment must be multiple of: US$ 50</ion-label>\r\n            </ion-item>\r\n            <!-- Detalhamento em meses -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">Month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">Yield</ion-label>\r\n            </ion-item>\r\n            <!-- 1 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">1st month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{primeiroAno[1] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <!-- 2 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">2nd month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{primeiroAno[2] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <!-- 3 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">3rd month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{primeiroAno[3] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <!-- 4 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">4th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{primeiroAno[4] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <!-- 5 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">5th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{primeiroAno[5] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <!-- 6 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">6th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{primeiroAno[6] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <!-- 7 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">7th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{primeiroAno[7] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <!-- 8 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">8th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{primeiroAno[8] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <!-- 9 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">9th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{primeiroAno[9] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <!-- 10 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">10th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{primeiroAno[10] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <!-- 11 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">11th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{primeiroAno[11] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <!-- 12 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">12th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{primeiroAno[12] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <!-- Detalhamento do rendimento -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\"></ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">Annual Yield:</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{rendimentoAnual | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">Yield + Investment:</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{rendimentoAnualComInvestimento | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">Points:</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{pontos}}</ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide>\r\n    <!-- Card de Rendimentos Reaplicados -->\r\n    <ion-slide>\r\n      <ion-card color=\"primary\" class=\"screen-size\">\r\n        <p class=\"text-white bold-text\">Reapplied Yield</p>\r\n        <hr class=\"background-white\">\r\n        <ion-card-header class=\"margin-less\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <div>\r\n                  <p class=\"text-white size-letter-upper margin-less-p\">{{rendimentoAnualReaplicado | currency:'USD':true:'1.2-2'}}</p>\r\n                  <p class=\"text-white margin-less-p\">Annual Yield Reapplied</p>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-button color=\"primary\" class=\"border-btn-grey\" expand=\"block\" (click)=\"toggleDetails()\"><ion-icon class=\"size-icon\" color=\"light\" [name]=\"icon\"></ion-icon></ion-button>\r\n          <ion-list class=\"no-padding\" id=\"detalhamento\" [ngClass]=\"{'remove-list' : !clique}\">\r\n            <!-- Detalhamento do valor aplicado -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">Amount:</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{valorAplicado | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-label class=\"text-white subtitle\">Investment must be multiple of: US$ 50</ion-label>\r\n            </ion-item>\r\n            <!-- Detalhamento em meses -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">Month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">Yield</ion-label>\r\n            </ion-item>\r\n            <!-- 1 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">1st month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\"> \r\n                <span *ngIf=\"primeiroAnoReaplicado[1] > 0\">{{primeiroAnoReaplicado[1] | currency:'USD':true:'1.2-2'}}</span>\r\n                <span *ngIf=\"primeiroAnoReaplicado[1] == 0\">----------</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <!-- 2 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">2nd month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">\r\n                <span *ngIf=\"primeiroAnoReaplicado[2] > 0\">{{primeiroAnoReaplicado[2] | currency:'USD':true:'1.2-2'}}</span>\r\n                <span *ngIf=\"primeiroAnoReaplicado[2] == 0\">----------</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <!-- 3 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">3rd month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">\r\n                <span *ngIf=\"primeiroAnoReaplicado[3] > 0\">{{primeiroAnoReaplicado[3] | currency:'USD':true:'1.2-2'}}</span>\r\n                <span *ngIf=\"primeiroAnoReaplicado[3] == 0\">----------</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <!-- 4 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">4th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">\r\n                <span *ngIf=\"primeiroAnoReaplicado[4] > 0\">{{primeiroAnoReaplicado[4] | currency:'USD':true:'1.2-2'}}</span>\r\n                <span *ngIf=\"primeiroAnoReaplicado[4] == 0\">----------</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <!-- 5 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">5th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">\r\n                <span *ngIf=\"primeiroAnoReaplicado[5] > 0\">{{primeiroAnoReaplicado[5] | currency:'USD':true:'1.2-2'}}</span>\r\n                <span *ngIf=\"primeiroAnoReaplicado[5] == 0\">----------</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <!-- 6 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">6th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">\r\n                <span *ngIf=\"primeiroAnoReaplicado[6] > 0\">{{primeiroAnoReaplicado[6] | currency:'USD':true:'1.2-2'}}</span>\r\n                <span *ngIf=\"primeiroAnoReaplicado[6] == 0\">----------</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <!-- 7 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">7th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">\r\n                <span *ngIf=\"primeiroAnoReaplicado[7] > 0\">{{primeiroAnoReaplicado[7] | currency:'USD':true:'1.2-2'}}</span>\r\n                <span *ngIf=\"primeiroAnoReaplicado[7] == 0\">----------</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <!-- 8 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">8th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">\r\n                <span *ngIf=\"primeiroAnoReaplicado[8] > 0\">{{primeiroAnoReaplicado[8] | currency:'USD':true:'1.2-2'}}</span>\r\n                <span *ngIf=\"primeiroAnoReaplicado[8] == 0\">----------</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <!-- 9 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">9th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">\r\n                <span *ngIf=\"primeiroAnoReaplicado[9] > 0\">{{primeiroAnoReaplicado[9] | currency:'USD':true:'1.2-2'}}</span>\r\n                <span *ngIf=\"primeiroAnoReaplicado[9] == 0\">----------</span>  \r\n              </ion-label>\r\n            </ion-item>\r\n            <!-- 10 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">10th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">\r\n                <span *ngIf=\"primeiroAnoReaplicado[10] > 0\">{{primeiroAnoReaplicado[10] | currency:'USD':true:'1.2-2'}}</span>\r\n                <span *ngIf=\"primeiroAnoReaplicado[10] == 0\">----------</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <!-- 11 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">11th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">\r\n                <span *ngIf=\"primeiroAnoReaplicado[11] > 0\">{{primeiroAnoReaplicado[11] | currency:'USD':true:'1.2-2'}}</span>\r\n                <span *ngIf=\"primeiroAnoReaplicado[11] == 0\">----------</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <!-- 12 mes -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">12th month</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">\r\n                <span *ngIf=\"primeiroAnoReaplicado[12] > 0\">{{primeiroAnoReaplicado[12] | currency:'USD':true:'1.2-2'}}</span>\r\n                <span *ngIf=\"primeiroAnoReaplicado[12] == 0\">----------</span>\r\n              </ion-label>\r\n            </ion-item>\r\n            <!-- Detalhamento do rendimento -->\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\"></ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">Annual Yield:</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{rendimentoAnualReaplicado | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">Yield + Investment:</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{rendimentoAnualComInvestimentoRe | currency:'USD':true:'1.2-2'}}</ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"full\">\r\n              <ion-label class=\"text-white item-list\">Points:</ion-label>\r\n              <ion-label class=\"text-white item-list put-on-right\">{{pontos}}</ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: white !important; }\n\n.img-size-box {\n  padding-top: 9px;\n  padding-left: 5px;\n  padding-right: 5px;\n  width: 100%;\n  height: 50%; }\n\nion-range {\n  padding: 8px 1px; }\n\n.buttom-range {\n  background-color: #151515;\n  border-radius: 15%;\n  width: 25px;\n  height: 25px; }\n\n.screen-size {\n  width: 100vw; }\n\n.background-white {\n  background-color: white; }\n\n.margin-less-p {\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em; }\n\n.size-letter-upper {\n  font-size: 150%; }\n\n.size-icon {\n  color: white;\n  font-size: 20px !important; }\n\n.border-btn-grey {\n  border: 1px solid #ced4da;\n  border-radius: 4px; }\n\n.remove-list {\n  display: none; }\n\n.item-list {\n  font-size: 1.893939393939394vh; }\n\n.put-on-right {\n  text-align: -webkit-right;\n  text-align: right; }\n\n.subtitle {\n  font-size: 1.5151515151515151vh;\n  margin-top: 0px;\n  margin-bottom: 25px; }\n\nion-slides span .swiper-pagination-bullet {\n  width: 100px !important;\n  height: 2px !important;\n  display: inline-block !important;\n  opacity: .2 !important; }\n\nion-slides {\n  --bullet-background: #a3a3a3;\n  --bullet-background-active: #E4E4E4; }\n\nion-list, ion-item {\n  --background: #151515 !important;\n  --background-color: #151515 !important; }\n\n.no-padding {\n  padding: 0px !important; }\n\n.margin-card {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXDc0NjAtUjIwR1xcRG9jdW1lbnRzXFx3b3JrXFxtb2JpbGUtZGV2ZWxvcG1lbnRcXG5leHQtc2ltdWxhdG9yL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUF1QixFQUFBOztBQUV6QjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBRWI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSwwQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFxQjtVQUFyQixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSw4QkFBOEIsRUFBQTs7QUFFaEM7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSw0QkFBb0I7RUFDcEIsbUNBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsZ0NBQWE7RUFDYixzQ0FBbUIsRUFBQTs7QUFFckI7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uaW1nLXNpemUtYm94IHtcclxuICBwYWRkaW5nLXRvcDogOXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxufVxyXG5pb24tcmFuZ2Uge1xyXG4gIHBhZGRpbmc6IDhweCAxcHg7XHJcbn1cclxuLmJ1dHRvbS1yYW5nZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcclxuICBib3JkZXItcmFkaXVzOiAxNSU7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi5zY3JlZW4tc2l6ZSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcbi5iYWNrZ3JvdW5kLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWFyZ2luLWxlc3MtcCB7XHJcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XHJcbiAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xyXG59XHJcbi5zaXplLWxldHRlci11cHBlciB7XHJcbiAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcbi5zaXplLWljb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4uYm9yZGVyLWJ0bi1ncmV5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ucmVtb3ZlLWxpc3Qge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLml0ZW0tbGlzdCB7XHJcbiAgZm9udC1zaXplOiAxLjg5MzkzOTM5MzkzOTM5NHZoO1xyXG59XHJcbi5wdXQtb24tcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IC13ZWJraXQtcmlnaHQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDEuNTE1MTUxNTE1MTUxNTE1MXZoO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbmlvbi1zbGlkZXMgc3BhbiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDJweCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IC4yICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLXNsaWRlcyB7XHJcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogI2EzYTNhMztcclxuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI0U0RTRFNDtcclxufVxyXG5pb24tbGlzdCwgaW9uLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogIzE1MTUxNSAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNSAhaW1wb3J0YW50O1xyXG59XHJcbi5uby1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubWFyZ2luLWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var Tab1Page = /** @class */ (function () {
    function Tab1Page(platform) {
        this.platform = platform;
        this.taxa = 0;
        this.primeiroAno = [];
        this.primeiroAnoReaplicado = [];
        this.investimentoMinimo = 50;
        this.valorAplicado = 0;
        this.taxa = 0;
        this.pontos = 0;
        this.clique = false;
        this.icon = 'ios-arrow-down';
        this.rendimentoMes = 0;
        this.rendimentoAnual = 0;
        this.rendimentoAnualComInvestimento = 0;
        this.rendimentoAnualReaplicado = 0;
        this.rendimentoAnualComInvestimentoRe = 0;
    }
    //método chamado pelo clique do botão simular
    Tab1Page.prototype.getSimular = function () {
        this.marred(this.investimento, this.investimentoMinimo);
        this.pontosRede(this.valorAplicado, this.investimentoMinimo);
        this.calculaRendimentos(this.valorAplicado, this.taxa);
        this.calculaRendimentosReaplicados(this.valorAplicado, this.taxa);
    };
    //calcula o valor aceitavel a ser aplicado, um valor que seja divisível pelo investimento mínimo
    Tab1Page.prototype.marred = function (investimento, investimentoMinimo) {
        this.valorAplicado = (investimentoMinimo * (Math.trunc(investimento / investimentoMinimo)));
    };
    //calcula a quantidade de pontos para a rede
    Tab1Page.prototype.pontosRede = function (valorAplicado, investimentoMinimo) {
        this.pontos = (valorAplicado / investimentoMinimo) * 8;
    };
    //calcula os rendimentos a juros simples
    Tab1Page.prototype.calculaRendimentos = function (valorAplicado, taxa) {
        var mes;
        this.rendimentoAnual = 0;
        this.rendimentoAnualComInvestimento = 0;
        for (mes = 1; mes < 13; mes++) {
            this.primeiroAno[mes] = (valorAplicado * (taxa / 100));
            this.rendimentoAnual = this.rendimentoAnual + this.primeiroAno[mes];
        }
        this.rendimentoMes = this.primeiroAno[1];
        this.rendimentoAnualComInvestimento = this.rendimentoAnual + valorAplicado;
    };
    //calcula os rendimentos a juros compostos
    Tab1Page.prototype.calculaRendimentosReaplicados = function (valorAplicado, taxa) {
        var mes;
        var mesPassado;
        var m;
        var acumuladoJurosSimples = 0;
        var acumuladoJurosCompostos = 0;
        var rendimento = 0;
        this.rendimentoAnualReaplicado = 0;
        this.rendimentoAnualComInvestimentoRe = 0;
        var indice = [];
        for (mes = 1; mes < 13; mes++) {
            if (mes == 1) {
                rendimento = 0;
                this.primeiroAnoReaplicado[mes] = rendimento;
                indice.push(mes);
            }
            else {
                for (mesPassado = 1; mesPassado < mes; mesPassado++) {
                    acumuladoJurosSimples = acumuladoJurosSimples + this.primeiroAno[mesPassado];
                }
                if (acumuladoJurosSimples < 50) {
                    rendimento = 0;
                    this.primeiroAnoReaplicado[mes] = rendimento;
                    indice.push(mes);
                }
                else if (acumuladoJurosSimples >= 50) {
                    for (m = 1; m < mes; m++) {
                        acumuladoJurosCompostos = acumuladoJurosCompostos + this.primeiroAnoReaplicado[m];
                    }
                    rendimento = ((valorAplicado + this.primeiroAno[1] + acumuladoJurosCompostos) * (taxa / 100));
                    this.primeiroAnoReaplicado[mes] = rendimento;
                }
                acumuladoJurosCompostos = 0;
            }
        }
        for (mes = 1; mes < 13; mes++) {
            this.rendimentoAnualReaplicado = this.rendimentoAnualReaplicado + this.primeiroAnoReaplicado[mes];
        }
        rendimento = 0;
        for (mes = 0; mes < indice.length; mes++) {
            rendimento = rendimento + this.primeiroAno[indice[mes]];
        }
        this.rendimentoAnualReaplicado = this.rendimentoAnualReaplicado + rendimento;
        this.rendimentoAnualComInvestimentoRe = this.rendimentoAnualReaplicado + valorAplicado;
    };
    //clique no detalhamento
    Tab1Page.prototype.toggleDetails = function () {
        if (this.clique) {
            this.clique = false;
            this.icon = 'ios-arrow-down';
        }
        else {
            this.clique = true;
            this.icon = 'ios-arrow-up';
        }
    };
    //Concotrle de inicialização e destruição da sessão
    Tab1Page.prototype.ngOnInit = function () { };
    Tab1Page.prototype.ngAfterViewInit = function () {
        this.backButtonSubscription = this.platform.backButton.subscribe(function () {
            navigator['app'].exitApp();
        });
    };
    Tab1Page.prototype.ngOnDestroy = function () {
        this.backButtonSubscription.unsubscribe();
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map