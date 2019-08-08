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

module.exports = "<ion-header>\n  <ion-toolbar class=\"header-color\">\n    <ion-title>\n      <ion-chip>\n        <ion-avatar>\n          <img src=\"../../assets/logo-d.png\">\n        </ion-avatar>\n        <ion-label class=\"text-white\">NEXT Simulator</ion-label>\n      </ion-chip>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card bg\">\n    <ion-card-header class=\"margin-less\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"8\">\n            <ion-card-subtitle class=\"item-centralized\">What value do you want to convert?</ion-card-subtitle>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-input type=\"number\" class=\"input-value-card\" placeholder=\"US$ 1.00\" [(ngModel)]=\"investimento\"></ion-input>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-card-subtitle>{{investimento | currency:'USD':true:'1.2-2'}} dollars</ion-card-subtitle>\n      <!-- <ion-button class=\"light\" expand=\"block\" (click) =\"getSimular()\">Simulate</ion-button> -->\n    </ion-card-header>\n  </ion-card>\n  <ion-card class=\"welcome-card bg\">\n    <ion-card-content class=\"alinhamento-centro\">\n      <ion-list>\n        <!-- 1 mes -->\n        <ion-item lines=\"full\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../assets/flags/aud.png\">\n          </ion-avatar>\n          <ion-label class=\"\">AUD:</ion-label>  \n          <ion-label class=\"item-lista alinhamento-direita\" slot=\"end\">{{3 | currency:'USD':true:'1.2-2'}}</ion-label>\n        </ion-item>\n        <!-- 2 mes -->\n        <ion-item lines=\"full\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../assets/flags/bgn.png\">\n          </ion-avatar>\n          <ion-label class=\"\">BGN:</ion-label>  \n          <ion-label class=\"item-lista alinhamento-direita\" slot=\"end\">{{3 | currency:'USD':true:'1.2-2'}}</ion-label>\n        </ion-item>\n        <!-- 3 mes -->\n        <ion-item lines=\"full\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../assets/flags/brl.png\">\n          </ion-avatar>\n          <ion-label class=\"\">BRL:</ion-label>  \n          <ion-label class=\"item-lista alinhamento-direita\" slot=\"end\">{{3 | currency:'USD':true:'1.2-2'}}</ion-label>\n        </ion-item>\n        <!-- 4 mes -->\n        <ion-item lines=\"full\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../assets/flags/cad.png\">\n          </ion-avatar>\n          <ion-label class=\"\">CAD:</ion-label>  \n          <ion-label class=\"item-lista alinhamento-direita\" slot=\"end\">{{3 | currency:'USD':true:'1.2-2'}}</ion-label>\n        </ion-item>\n        <!-- 5 mes -->\n        <ion-item lines=\"full\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../assets/flags/chf.png\">\n          </ion-avatar>\n          <ion-label class=\"\">CHF:</ion-label>  \n          <ion-label class=\"item-lista alinhamento-direita\" slot=\"end\">{{3 | currency:'USD':true:'1.2-2'}}</ion-label>\n        </ion-item>\n        <!-- 6 mes -->\n        <ion-item lines=\"full\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../assets/flags/cny.png\">\n          </ion-avatar>\n          <ion-label class=\"\">CNY:</ion-label>  \n          <ion-label class=\"item-lista alinhamento-direita\" slot=\"end\">{{3 | currency:'USD':true:'1.2-2'}}</ion-label>\n        </ion-item>\n        <!-- 7 mes -->\n        <ion-item lines=\"full\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../assets/flags/czk.png\">\n          </ion-avatar>\n          <ion-label class=\"\">CZK:</ion-label>  \n          <ion-label class=\"item-lista alinhamento-direita\" slot=\"end\">{{3 | currency:'USD':true:'1.2-2'}}</ion-label>\n        </ion-item>\n        <!-- 8 mes -->\n        <ion-item lines=\"full\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../assets/flags/dkk.png\">\n          </ion-avatar>\n          <ion-label class=\"\">DKK:</ion-label>  \n          <ion-label class=\"item-lista alinhamento-direita\" slot=\"end\">{{3 | currency:'USD':true:'1.2-2'}}</ion-label>\n        </ion-item>\n        <!-- 9 mes -->\n        <ion-item lines=\"full\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../assets/flags/eur.png\">\n          </ion-avatar>\n          <ion-label class=\"\">EUR:</ion-label>  \n          <ion-label class=\"item-lista alinhamento-direita\" slot=\"end\">{{3 | currency:'USD':true:'1.2-2'}}</ion-label>\n        </ion-item>\n        <!-- 10 mes -->\n        <ion-item lines=\"full\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../assets/flags/gbp.png\">\n          </ion-avatar>\n          <ion-label class=\"\">GBP:</ion-label>  \n          <ion-label class=\"item-lista alinhamento-direita\" slot=\"end\">{{3 | currency:'USD':true:'1.2-2'}}</ion-label>\n        </ion-item>\n        <!-- 11 mes -->\n        <ion-item lines=\"full\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../assets/flags/hkd.png\">\n          </ion-avatar>\n          <ion-label class=\"\">HKD:</ion-label>  \n          <ion-label class=\"item-lista alinhamento-direita\" slot=\"end\">{{3 | currency:'USD':true:'1.2-2'}}</ion-label>\n        </ion-item>\n        <!-- 12 mes -->\n        <ion-item lines=\"full\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../../assets/flags/hrk.png\">\n          </ion-avatar>\n          <ion-label class=\"\">HRK:</ion-label>  \n          <ion-label class=\"item-lista alinhamento-direita\" slot=\"end\">{{3 | currency:'USD':true:'1.2-2'}}</ion-label>\n        </ion-item>\n        <!-- Detalhamento do rendimento -->\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-color {\n  --ion-background-color: #212121 !important;\n  --background: #212121 !important;\n  color: white;\n  text-align: center; }\n\n.welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.margin-less {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: 5px !important;\n  padding-inline-start: 5px !important;\n  -webkit-padding-end: 5px !important;\n  padding-inline-end: 5px !important;\n  padding-left: 5px !important;\n  padding-right: 5px !important;\n  padding-top: 5px !important;\n  padding-bottom: 5px !important; }\n\n.item-centralized {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%); }\n\n.input-value-card {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n\n.bg {\n  --ion-background-color: white !important;\n  --background: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxcVXNlcnNcXDc0NjAtUjIwR1xcRG9jdW1lbnRzXFx3b3JrXFxtb2JpbGUtZGV2ZWxvcG1lbnRcXG5leHQtc2ltdWxhdG9yL3NyY1xcYXBwXFx0YWIzXFx0YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUF1QjtFQUN2QixnQ0FBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixxQ0FBcUM7RUFDckMsb0NBQW9DO0VBQ3BDLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixtQ0FBbUMsRUFBQTs7QUFFdkM7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHdFQUF3RSxFQUFBOztBQUU1RTtFQUNJLHdDQUF1QjtFQUN2Qiw4QkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29sb3Ige1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMyMTIxMjEgIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQ6ICMyMTIxMjEgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFyZ2luLWxlc3Mge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiA1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG4uaXRlbS1jZW50cmFsaXplZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmlucHV0LXZhbHVlLWNhcmQge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuLmJnIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */"

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
        this.http = http;
        //pegando o valor da taxa atual do dollar
        this.http.get('https://api.exchangeratesapi.io/latest').subscribe(function (response) {
            console.log(response['rates']);
            console.log(response['rates']['USD']);
        });
    }
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