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

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header-color\">\r\n    <ion-title>\r\n      <ion-chip>\r\n        <ion-avatar>\r\n          <img src=\"../../assets/logo-d.png\">\r\n        </ion-avatar>\r\n        <ion-label class=\"text-white\">NEXT Simulator</ion-label>\r\n      </ion-chip>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <!-- Card de Entrada de Dados -->\r\n    <ion-card class=\"welcome-card\">\r\n      <ion-img class=\"size-logo center\" src=\"/assets/next.png\"></ion-img>\r\n      <ion-card-header class=\"margin-less\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"8\">\r\n              <ion-card-subtitle class=\"item-centralized\">What will be the amount applied?</ion-card-subtitle>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <ion-input type=\"number\" class=\"input-value-card\" placeholder=\"US$ 0.00\" [(ngModel)]=\"investimento\"></ion-input>\r\n              </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <ion-card-subtitle>Amount applied: {{investimento | currency:'USD':true:'1.2-2'}}</ion-card-subtitle>\r\n        <ion-card-subtitle>Yield rate: {{taxa}}%</ion-card-subtitle>\r\n        <ion-range color=\"dark\" value=1 min=\"0\" max=\"100\" step=\"1\" snaps=\"true\" [(ngModel)]=\"taxa\">\r\n          <ion-label slot=\"start\">\r\n            <button size=\"small\" class=\"buttom-range dark\" (click)=\"taxa = taxa - 1\"><ion-icon name=\"remove\"></ion-icon></button>\r\n            0%\r\n          </ion-label>\r\n          <ion-label slot=\"end\">\r\n            100%\r\n            <button size=\"small\" class=\"buttom-range dark\" (click)=\"taxa = taxa + 1\"><ion-icon name=\"add\"></ion-icon></button>\r\n          </ion-label>\r\n        </ion-range>\r\n        <ion-button class=\"header-color\" expand=\"block\" (click) =\"getSimular()\">Simulate</ion-button>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <!-- Card de Rendimentos -->\r\n    <ion-slides pager=\"true\">\r\n      <ion-slide>\r\n        <ion-card class=\"welcome-card header-color largura-tela\">\r\n          <p class=\"text-white\">Yield</p>\r\n          <hr class=\"background-white\">\r\n          <ion-card-header class=\"margin-less\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <div>\r\n                    <p class=\"text-white size-letter-upper margin-less-p\">{{rendimentoMes | currency:'USD':true:'1.2-2'}}</p>\r\n                    <p class=\"text-white margin-less-p\">Yield/month</p>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card-header>\r\n          <ion-card-content class=\"alinhamento-centro\">\r\n            <ion-button class=\"header-color border-btn-grey\" expand=\"block\" (click)=\"toggleDetails()\"><ion-icon class=\"tamanho-icone\" color=\"primary\" [name]=\"icon\"></ion-icon></ion-button>\r\n            <ion-list id=\"detalhamento\" [ngClass]=\"{'remove-lista' : !clique}\">\r\n              <!-- Detalhamento do valor aplicado -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">Amount applied:</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{valorAplicado | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <ion-item lines=\"none\">\r\n                <ion-label class=\"text-white legenda\">Investment must be multiple of: US$ 50</ion-label>\r\n              </ion-item>\r\n              <!-- Detalhamento em meses -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">Month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">Yield</ion-label>\r\n              </ion-item>\r\n              <!-- 1 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">1st month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{primeiroAno[1] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <!-- 2 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">2nd month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{primeiroAno[2] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <!-- 3 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">3rd month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{primeiroAno[3] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <!-- 4 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">4th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{primeiroAno[4] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <!-- 5 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">5th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{primeiroAno[5] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <!-- 6 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">6th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{primeiroAno[6] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <!-- 7 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">7th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{primeiroAno[7] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <!-- 8 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">8th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{primeiroAno[8] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <!-- 9 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">9th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{primeiroAno[9] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <!-- 10 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">10th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{primeiroAno[10] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <!-- 11 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">11th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{primeiroAno[11] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <!-- 12 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">12th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{primeiroAno[12] | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <!-- Detalhamento do rendimento -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\"></ion-label>\r\n              </ion-item>\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">Annual Yield:</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{rendimentoAnual | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">Yield + Investment:</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{rendimentoAnualComInvestimento | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">Points:</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{pontos}}</ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-slide>\r\n      <!-- Card de Rendimentos Reaplicados -->\r\n      <ion-slide>\r\n        <ion-card class=\"welcome-card header-color largura-tela\">\r\n          <p class=\"text-white\">Reapplied Yield</p>\r\n          <hr class=\"background-white\">\r\n          <ion-card-header class=\"margin-less\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <div>\r\n                    <p class=\"text-white size-letter-upper margin-less-p\">{{rendimentoAnualReaplicado | currency:'USD':true:'1.2-2'}}</p>\r\n                    <p class=\"text-white margin-less-p\">Annual Yield Reapplied</p>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-card-header>\r\n          <ion-card-content class=\"alinhamento-centro\">\r\n            <ion-button class=\"header-color border-btn-grey\" expand=\"block\" (click)=\"toggleDetails()\"><ion-icon class=\"tamanho-icone\" color=\"primary\" [name]=\"icon\"></ion-icon></ion-button>\r\n            <ion-list id=\"detalhamento\" [ngClass]=\"{'remove-lista' : !clique}\">\r\n              <!-- Detalhamento do valor aplicado -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">Amount applied:</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{valorAplicado | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <ion-item lines=\"none\">\r\n                <ion-label class=\"text-white legenda\">Investment must be multiple of: US$ 50</ion-label>\r\n              </ion-item>\r\n              <!-- Detalhamento em meses -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">Month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">Yield</ion-label>\r\n              </ion-item>\r\n              <!-- 1 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">1st month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\"> \r\n                  <span *ngIf=\"primeiroAnoReaplicado[1] > 0\">{{primeiroAnoReaplicado[1] | currency:'USD':true:'1.2-2'}}</span>\r\n                  <span *ngIf=\"primeiroAnoReaplicado[1] == 0\">----------</span>\r\n                </ion-label>\r\n              </ion-item>\r\n              <!-- 2 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">2nd month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">\r\n                  <span *ngIf=\"primeiroAnoReaplicado[2] > 0\">{{primeiroAnoReaplicado[2] | currency:'USD':true:'1.2-2'}}</span>\r\n                  <span *ngIf=\"primeiroAnoReaplicado[2] == 0\">----------</span>\r\n                </ion-label>\r\n              </ion-item>\r\n              <!-- 3 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">3rd month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">\r\n                  <span *ngIf=\"primeiroAnoReaplicado[3] > 0\">{{primeiroAnoReaplicado[3] | currency:'USD':true:'1.2-2'}}</span>\r\n                  <span *ngIf=\"primeiroAnoReaplicado[3] == 0\">----------</span>\r\n                </ion-label>\r\n              </ion-item>\r\n              <!-- 4 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">4th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">\r\n                  <span *ngIf=\"primeiroAnoReaplicado[4] > 0\">{{primeiroAnoReaplicado[4] | currency:'USD':true:'1.2-2'}}</span>\r\n                  <span *ngIf=\"primeiroAnoReaplicado[4] == 0\">----------</span>\r\n                </ion-label>\r\n              </ion-item>\r\n              <!-- 5 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">5th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">\r\n                  <span *ngIf=\"primeiroAnoReaplicado[5] > 0\">{{primeiroAnoReaplicado[5] | currency:'USD':true:'1.2-2'}}</span>\r\n                  <span *ngIf=\"primeiroAnoReaplicado[5] == 0\">----------</span>\r\n                </ion-label>\r\n              </ion-item>\r\n              <!-- 6 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">6th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">\r\n                  <span *ngIf=\"primeiroAnoReaplicado[6] > 0\">{{primeiroAnoReaplicado[6] | currency:'USD':true:'1.2-2'}}</span>\r\n                  <span *ngIf=\"primeiroAnoReaplicado[6] == 0\">----------</span>\r\n                </ion-label>\r\n              </ion-item>\r\n              <!-- 7 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">7th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">\r\n                  <span *ngIf=\"primeiroAnoReaplicado[7] > 0\">{{primeiroAnoReaplicado[7] | currency:'USD':true:'1.2-2'}}</span>\r\n                  <span *ngIf=\"primeiroAnoReaplicado[7] == 0\">----------</span>\r\n                </ion-label>\r\n              </ion-item>\r\n              <!-- 8 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">8th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">\r\n                  <span *ngIf=\"primeiroAnoReaplicado[8] > 0\">{{primeiroAnoReaplicado[8] | currency:'USD':true:'1.2-2'}}</span>\r\n                  <span *ngIf=\"primeiroAnoReaplicado[8] == 0\">----------</span>\r\n                </ion-label>\r\n              </ion-item>\r\n              <!-- 9 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">9th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">\r\n                  <span *ngIf=\"primeiroAnoReaplicado[9] > 0\">{{primeiroAnoReaplicado[9] | currency:'USD':true:'1.2-2'}}</span>\r\n                  <span *ngIf=\"primeiroAnoReaplicado[9] == 0\">----------</span>  \r\n                </ion-label>\r\n              </ion-item>\r\n              <!-- 10 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">10th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">\r\n                  <span *ngIf=\"primeiroAnoReaplicado[10] > 0\">{{primeiroAnoReaplicado[10] | currency:'USD':true:'1.2-2'}}</span>\r\n                  <span *ngIf=\"primeiroAnoReaplicado[10] == 0\">----------</span>\r\n                </ion-label>\r\n              </ion-item>\r\n              <!-- 11 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">11th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">\r\n                  <span *ngIf=\"primeiroAnoReaplicado[11] > 0\">{{primeiroAnoReaplicado[11] | currency:'USD':true:'1.2-2'}}</span>\r\n                  <span *ngIf=\"primeiroAnoReaplicado[11] == 0\">----------</span>\r\n                </ion-label>\r\n              </ion-item>\r\n              <!-- 12 mes -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">12th month</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">\r\n                  <span *ngIf=\"primeiroAnoReaplicado[12] > 0\">{{primeiroAnoReaplicado[12] | currency:'USD':true:'1.2-2'}}</span>\r\n                  <span *ngIf=\"primeiroAnoReaplicado[12] == 0\">----------</span>\r\n                </ion-label>\r\n              </ion-item>\r\n              <!-- Detalhamento do rendimento -->\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\"></ion-label>\r\n              </ion-item>\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">Annual Yield:</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{rendimentoAnualReaplicado | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">Yield + Investment:</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{rendimentoAnualComInvestimentoRe | currency:'USD':true:'1.2-2'}}</ion-label>\r\n              </ion-item>\r\n              <ion-item lines=\"full\">\r\n                <ion-label class=\"text-white item-lista\">Points:</ion-label>\r\n                <ion-label class=\"text-white item-lista alinhamento-direita\">{{pontos}}</ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides>\r\n    \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.header-color {\n  --ion-background-color: #212121 !important;\n  --background: #212121 !important;\n  color: white;\n  text-align: center; }\n\n.border-btn-grey {\n  border: 1px solid #ced4da;\n  border-radius: 4px; }\n\n.header-color-contrast {\n  --ion-background-color: white !important;\n  --background: white !important;\n  color: #212121;\n  text-align: center; }\n\nion-content {\n  --ion-background-color: white !important; }\n\n.input-value-card {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n\n.text-white {\n  color: white; }\n\n.size-letter-upper {\n  font-size: 150%; }\n\n.put-margin-bottom {\n  margin-bottom: 5px; }\n\n.size-logo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  height: 50%; }\n\n.alinhamento-centro {\n  text-align: center !important; }\n\n.tamanho-icone {\n  color: white;\n  font-size: 20px !important; }\n\n.remove-lista {\n  display: none; }\n\n.background-white {\n  background-color: white; }\n\n.margin-less {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: 5px !important;\n  padding-inline-start: 5px !important;\n  -webkit-padding-end: 5px !important;\n  padding-inline-end: 5px !important;\n  padding-left: 5px !important;\n  padding-right: 5px !important;\n  padding-top: 5px !important;\n  padding-bottom: 5px !important; }\n\n.margin-less-p {\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em; }\n\n.legenda {\n  font-size: 1.5151515151515151vh;\n  margin-top: 0px;\n  margin-bottom: 25px; }\n\n.item-lista {\n  font-size: 1.893939393939394vh; }\n\n.alinhamento-direita {\n  text-align: -webkit-right;\n  text-align: right; }\n\n.largura-tela {\n  width: 100vw; }\n\nion-slides span .swiper-pagination-bullet {\n  width: 100px !important;\n  height: 2px !important;\n  display: inline-block !important;\n  /* border-radius: 100%; */\n  background: #000 !important;\n  opacity: .2 !important; }\n\ndiv.item-native {\n  padding-left: unset;\n  padding-right: unset;\n  /* -webkit-padding-start: calc(var(--padding-start) + var(--ion-safe-area-left, 0px)); */\n  /* padding-inline-start: calc(var(--padding-start) + var(--ion-safe-area-left, 0px)); */\n  /* -webkit-padding-end: var(--padding-end); */\n  /* padding-inline-end: var(--padding-end); */ }\n\n.buttom-range {\n  background-color: #212121;\n  border-radius: 15%;\n  width: 25px;\n  height: 25px;\n  color: white; }\n\nion-range {\n  padding: 8px 1px; }\n\n.item-centralized {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXDc0NjAtUjIwR1xcRG9jdW1lbnRzXFx3b3JrXFxtb2JpbGUtZGV2ZWxvcG1lbnRcXG5leHQtc2ltdWxhdG9yL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSwwQ0FBdUI7RUFDdkIsZ0NBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHdDQUF1QjtFQUN2Qiw4QkFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSx3Q0FBdUIsRUFBQTs7QUFFekI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHdFQUF3RSxFQUFBOztBQUUxRTtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUViO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UsWUFBWTtFQUNaLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIscUNBQXFDO0VBQ3JDLG9DQUFvQztFQUNwQyxtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLDBCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQXFCO1VBQXJCLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsOEJBQThCLEVBQUE7O0FBRWhDO0VBRUUseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLHlCQUFBO0VBQ0EsMkJBQTJCO0VBQzNCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsd0ZBQUE7RUFDQSx1RkFBQTtFQUNBLDZDQUFBO0VBQ0EsNENBQUEsRUFBNkM7O0FBRy9DO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFFZDtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbUNBQW1DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmhlYWRlci1jb2xvciB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMSAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogIzIxMjEyMSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJvcmRlci1idG4tZ3JleSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmhlYWRlci1jb2xvci1jb250cmFzdCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMyMTIxMjE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnB1dC12YWx1ZS1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG4udGV4dC13aGl0ZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zaXplLWxldHRlci11cHBlciB7XHJcbiAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcbi5wdXQtbWFyZ2luLWJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5zaXplLWxvZ28ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcbi5hbGluaGFtZW50by1jZW50cm8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi50YW1hbmhvLWljb25lIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlbW92ZS1saXN0YSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uYmFja2dyb3VuZC13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hcmdpbi1sZXNzIHtcclxuICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xyXG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctaW5saW5lLWVuZDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXJnaW4tbGVzcy1wIHtcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcclxuICBtYXJnaW4tYmxvY2stZW5kOiAwZW07XHJcbn1cclxuLmxlZ2VuZGEge1xyXG4gIGZvbnQtc2l6ZTogMS41MTUxNTE1MTUxNTE1MTUxdmg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLml0ZW0tbGlzdGEge1xyXG4gIGZvbnQtc2l6ZTogMS44OTM5MzkzOTM5MzkzOTR2aDtcclxufVxyXG4uYWxpbmhhbWVudG8tZGlyZWl0YSB7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDUuMjYyNjI2dmg7XHJcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1yaWdodDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ubGFyZ3VyYS10ZWxhIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuaW9uLXNsaWRlcyBzcGFuIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgLyogYm9yZGVyLXJhZGl1czogMTAwJTsgKi9cclxuICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogLjIgIWltcG9ydGFudDtcclxufVxyXG5kaXYuaXRlbS1uYXRpdmUge1xyXG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XHJcbiAgcGFkZGluZy1yaWdodDogdW5zZXQ7XHJcbiAgLyogLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiBjYWxjKHZhcigtLXBhZGRpbmctc3RhcnQpICsgdmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0LCAwcHgpKTsgKi9cclxuICAvKiBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1wYWRkaW5nLXN0YXJ0KSArIHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCwgMHB4KSk7ICovXHJcbiAgLyogLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0tcGFkZGluZy1lbmQpOyAqL1xyXG4gIC8qIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tcGFkZGluZy1lbmQpOyAqL1xyXG59XHJcbi8vIElvbiBSYW5nZVxyXG4uYnV0dG9tLXJhbmdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1yYW5nZSB7XHJcbiAgcGFkZGluZzogOHB4IDFweDtcclxufVxyXG4uaXRlbS1jZW50cmFsaXplZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59Il19 */"

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