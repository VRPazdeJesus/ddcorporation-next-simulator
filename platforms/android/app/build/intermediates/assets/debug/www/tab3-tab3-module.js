(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\" class=\"ion-text-center\">\n    <ion-title>\n      <img class=\"half-img-width\" src=\"../../assets/next-black-logo.svg\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card color=\"primary\">\n    <ion-card-header class=\"margin-less\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"8\" class=\"align-vertically-center\">\n            <ion-card-subtitle class=\"ion-text-center bold-text\">Value to convert:</ion-card-subtitle>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-input type=\"number\" class=\"input-value-card bold-text\" placeholder=\"US$ 50.00\" [(ngModel)]=\"investimento\" (keyup)=\"onKey()\"></ion-input>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-card-subtitle class=\"ion-text-center\">\n          <span *ngIf=\"investimento > 0\">{{investimento | currency:'USD':true:'1.2-2'}} dollars</span>\n          <span *ngIf=\"investimento == 0\"></span>\n      </ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n  <ion-card class=\"bg\">\n    <ion-card-content>\n      <ion-list>\n        <!-- Reino Unido -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{AUD | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/aud.png\"><img> \n        </ion-item>\n        <!-- Bulgária -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{BGN | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/bgn.png\"><img> \n        </ion-item>\n        <!-- Brasil -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{BRL | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/brl.png\"><img>\n        </ion-item>\n        <!-- Canadá -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{CAD | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/cad.png\"><img>\n        </ion-item>\n        <!-- Suíça -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{CHF | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/chf.png\"><img>\n        </ion-item>\n        <!-- China -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{CNY | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/cny.png\"><img>\n        </ion-item>\n        <!-- República Tcheca -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{CZK | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/czk.png\"><img>\n        </ion-item>\n        <!-- Dinamarca -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{DKK | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/dkk.png\"><img>\n        </ion-item>\n        <!-- Europa -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{EUR | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/eur.png\"><img>\n        </ion-item>\n        <!-- Libra - Reino Unido -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{GBP | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/gbp.png\"><img>\n        </ion-item>\n        <!-- Hong Kong -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{HKD | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/hkd.png\"><img>\n        </ion-item>\n        <!-- Indonésia -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{IDR | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/idr.png\"><img>\n        </ion-item>\n        <!-- Índia -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{INR | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/inr.png\"><img>\n        </ion-item>\n        <!-- Japão -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{JPY | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/jpy.png\"><img>\n        </ion-item>\n        <!-- Coreia do Sul -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{KRW | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/krw.png\"><img>\n        </ion-item>\n        <!-- México -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{MXN | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/mxn.png\"><img>\n        </ion-item>\n        <!-- Noruega -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{NOK | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/nok.png\"><img>\n        </ion-item>\n        <!-- Polônia -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{PLN | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/pln.png\"><img>\n        </ion-item>\n        <!-- Suécia -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{SEK | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/sek.png\"><img>\n        </ion-item>\n        <!-- Tailândia -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{THB | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/thb.png\"><img>\n        </ion-item>\n        <!-- Turquia -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{TRY | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/try.png\"><img>\n        </ion-item>\n        <!-- África do Sul -->\n        <ion-item lines=\"full\">\n          <ion-label slot=\"start\">{{ZAR | currency:'USD':true:'1.2-2'}}</ion-label>\n          <img slot=\"end\" class=\"flag\" src=\"../../assets/flags/zar.png\"><img>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  --ion-background-color: white !important;\n  --background: white !important; }\n\n.flag {\n  width: 25%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxcVXNlcnNcXDc0NjAtUjIwR1xcRG9jdW1lbnRzXFx3b3JrXFxtb2JpbGUtZGV2ZWxvcG1lbnRcXG5leHQtc2ltdWxhdG9yL3NyY1xcYXBwXFx0YWIzXFx0YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUF1QjtFQUN2Qiw4QkFBYSxFQUFBOztBQUVqQjtFQUNJLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmZsYWcge1xuICAgIHdpZHRoOiAyNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var Tab3Page = /** @class */ (function () {
    function Tab3Page(http) {
        var _this = this;
        this.http = http;
        this.AUD = 0;
        this.BGN = 0;
        this.BRL = 0;
        this.USD = 0;
        this.CAD = 0;
        this.CHF = 0;
        this.CNY = 0;
        this.CZK = 0;
        this.DKK = 0;
        this.EUR = 0;
        this.GBP = 0;
        this.HKD = 0;
        this.IDR = 0;
        this.INR = 0;
        this.JPY = 0;
        this.KRW = 0;
        this.MXN = 0;
        this.NOK = 0;
        this.PLN = 0;
        this.SEK = 0;
        this.THB = 0;
        this.TRY = 0;
        this.ZAR = 0;
        //pegando o valor da taxa atual do dollar
        this.http.get('https://api.exchangeratesapi.io/latest').subscribe(function (response) {
            console.log(response['rates']);
            console.log(response['rates']['USD']);
            _this.taxaAUD = response['rates']['AUD'];
            _this.taxaBGN = response['rates']['BGN'];
            _this.taxaBRL = response['rates']['BRL'];
            _this.taxaUSD = response['rates']['USD'];
            _this.taxaCAD = response['rates']['CAD'];
            _this.taxaCHF = response['rates']['CHF'];
            _this.taxaCNY = response['rates']['CNY'];
            _this.taxaCZK = response['rates']['CZK'];
            _this.taxaDKK = response['rates']['DKK'];
            _this.taxaGBP = response['rates']['GBP'];
            _this.taxaHKD = response['rates']['HKD'];
            _this.taxaIDR = response['rates']['IDR'];
            _this.taxaINR = response['rates']['INR'];
            _this.taxaJPY = response['rates']['JPY'];
            _this.taxaKRW = response['rates']['KRW'];
            _this.taxaMXN = response['rates']['MXN'];
            _this.taxaNOK = response['rates']['NOK'];
            _this.taxaPLN = response['rates']['PLN'];
            _this.taxaSEK = response['rates']['SEK'];
            _this.taxaTHB = response['rates']['THB'];
            _this.taxaTRY = response['rates']['TRY'];
            _this.taxaZAR = response['rates']['ZAR'];
        });
    }
    Tab3Page.prototype.onKey = function () {
        this.AUD = this.investimento * (this.taxaAUD / this.taxaUSD);
        this.BGN = this.investimento * (this.taxaBGN / this.taxaUSD);
        //quantos reais em dollar
        this.BRL = this.investimento * (this.taxaBRL / this.taxaUSD);
        this.CAD = this.investimento * (this.taxaCAD / this.taxaUSD);
        this.CHF = this.investimento * (this.taxaCHF / this.taxaUSD);
        this.CNY = this.investimento * (this.taxaCNY / this.taxaUSD);
        this.CZK = this.investimento * (this.taxaCZK / this.taxaUSD);
        this.DKK = this.investimento * (this.taxaDKK / this.taxaUSD);
        this.EUR = this.investimento * (1 / this.taxaUSD);
        this.GBP = this.investimento * (this.taxaGBP / this.taxaUSD);
        this.HKD = this.investimento * (this.taxaHKD / this.taxaUSD);
        this.IDR = this.investimento * (this.taxaIDR / this.taxaUSD);
        this.INR = this.investimento * (this.taxaINR / this.taxaUSD);
        this.JPY = this.investimento * (this.taxaJPY / this.taxaUSD);
        this.KRW = this.investimento * (this.taxaKRW / this.taxaUSD);
        this.MXN = this.investimento * (this.taxaMXN / this.taxaUSD);
        this.NOK = this.investimento * (this.taxaNOK / this.taxaUSD);
        this.PLN = this.investimento * (this.taxaPLN / this.taxaUSD);
        this.SEK = this.investimento * (this.taxaSEK / this.taxaUSD);
        this.THB = this.investimento * (this.taxaTHB / this.taxaUSD);
        this.TRY = this.investimento * (this.taxaTRY / this.taxaUSD);
        this.ZAR = this.investimento * (this.taxaZAR / this.taxaUSD);
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map