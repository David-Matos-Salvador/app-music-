function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/user-edit/user-edit.component */
    "./src/app/components/user-edit/user-edit.component.ts");
    /* harmony import */


    var _components_artist_list_artist_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/artist-list/artist-list.component */
    "./src/app/components/artist-list/artist-list.component.ts");
    /* harmony import */


    var _components_artist_add_artist_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/artist-add/artist-add.component */
    "./src/app/components/artist-add/artist-add.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_artist_edit_artist_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/artist-edit/artist-edit.component */
    "./src/app/components/artist-edit/artist-edit.component.ts");
    /* harmony import */


    var _components_artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/artist-detail/artist-detail.component */
    "./src/app/components/artist-detail/artist-detail.component.ts");
    /* harmony import */


    var _components_album_add_album_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/album-add/album-add.component */
    "./src/app/components/album-add/album-add.component.ts");
    /* harmony import */


    var _components_album_edit_album_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/album-edit/album-edit.component */
    "./src/app/components/album-edit/album-edit.component.ts");
    /* harmony import */


    var _components_album_detail_album_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/album-detail/album-detail.component */
    "./src/app/components/album-detail/album-detail.component.ts");
    /* harmony import */


    var _components_add_song_add_song_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/add-song/add-song.component */
    "./src/app/components/add-song/add-song.component.ts");
    /* harmony import */


    var _components_edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/edit-song/edit-song.component */
    "./src/app/components/edit-song/edit-song.component.ts");

    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'artist/:page',
      component: _components_artist_list_artist_list_component__WEBPACK_IMPORTED_MODULE_3__["ArtistListComponent"]
    }, {
      path: 'create-artist',
      component: _components_artist_add_artist_add_component__WEBPACK_IMPORTED_MODULE_4__["ArtistAddComponent"]
    }, {
      path: 'edit-artist/:id',
      component: _components_artist_edit_artist_edit_component__WEBPACK_IMPORTED_MODULE_6__["ArtistEditComponent"]
    }, {
      path: 'artistt/:id',
      component: _components_artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_7__["ArtistDetailComponent"]
    }, {
      path: 'create-album/:artist',
      component: _components_album_add_album_add_component__WEBPACK_IMPORTED_MODULE_8__["AlbumAddComponent"]
    }, {
      path: 'edit-album/:id',
      component: _components_album_edit_album_edit_component__WEBPACK_IMPORTED_MODULE_9__["AlbumEditComponent"]
    }, {
      path: 'album/:id',
      component: _components_album_detail_album_detail_component__WEBPACK_IMPORTED_MODULE_10__["AlbumDetailComponent"]
    }, {
      path: 'create-song/:album',
      component: _components_add_song_add_song_component__WEBPACK_IMPORTED_MODULE_11__["AddSongComponent"]
    }, {
      path: 'edit-song/:id',
      component: _components_edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_12__["EditSongComponent"]
    }, {
      path: 'mis-datos',
      component: _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_2__["UserEditComponent"]
    }, {
      path: '**',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/global */
    "./src/app/services/global.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_player_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/player/player.component */
    "./src/app/components/player/player.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var _c1 = function _c1() {
      return ["/artist", 1];
    };

    var _c2 = function _c2() {
      return ["actived"];
    };

    var _c3 = function _c3() {
      return ["mis-datos"];
    };

    function AppComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(current)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Buscar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Artista");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Album");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Mis Datos");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_Template_a_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "salir");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.url + "get-image/" + ctx_r0.identity.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.identity.name, ", ", ctx_r0.identity.surname, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
      }
    }

    function AppComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-player");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_4_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.errormessage, " ");
      }
    }

    function AppComponent_div_4_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " el email es obligatorio ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_4_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.alertRegister);
      }
    }

    function AppComponent_div_4_span_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El email es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_4_span_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El password es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_4_span_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El nombre es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_4_span_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Los apellidos son Obligatorios");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 27, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_div_4_Template_form_ngSubmit_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_4_div_7_Template, 3, 1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_4_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.user.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_4_span_12_Template, 2, 0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 33, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_4_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.user.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 27, 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_div_4_Template_form_ngSubmit_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.onSubmitRegister();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_div_4_div_24_Template, 3, 1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Correo Electronico");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 39, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_4_Template_input_ngModelChange_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.user_register.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppComponent_div_4_span_30_Template, 2, 0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 42, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_4_Template_input_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.user_register.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppComponent_div_4_span_37_Template, 2, 0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 43, 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_4_Template_input_ngModelChange_42_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.user_register.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AppComponent_div_4_span_44_Template, 2, 0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Surname");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 45, 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_4_Template_input_ngModelChange_48_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.user_register.surname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AppComponent_div_4_span_50_Template, 2, 0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sign in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.errormessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.user.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r7.valid && _r7.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.user.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.alertRegister);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.user_register.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r7.valid && _r7.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.user_register.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r9.valid && _r9.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.user_register.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r16.valid && _r16.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.user_register.surname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r18.valid && _r18.touched);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(_route, _router, _userService) {
        _classCallCheck(this, AppComponent);

        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.title = 'App-Music';
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]('', '', '', '', '', 'ROLE_USER', '');
        this.user_register = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]('', '', '', '', '', 'ROLE_USER', '');
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.identity = this._userService.getIdentity();
          this.token = this._userService.getToken();
        }
      }, {
        key: "onSubmitRegister",
        value: function onSubmitRegister() {
          var _this = this;

          this._userService.register(this.user_register).subscribe(function (res) {
            var user = res.user;
            _this.user_register = user;

            if (!user._id) {
              _this.alertRegister = "Error al registrar el usuario";
            } else {
              _this.alertRegister = 'El registro se ha realizado con exitó, identificate con tu nueva cuenta :)';
              console.log(_this.user_register);
              _this.user_register = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]('', '', '', '', '', 'ROLE_USER', '');
            }
          }), function (err) {
            var errormessage = err;

            if (errormessage != null) {
              var body = JSON.parse(err._body);
              _this.alertRegister = body.message;
              console.log(err);
            }
          };
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this._userService.signup(this.user).subscribe(function (res) {
            var identity = res.user;
            _this2.identity = identity;

            if (!_this2.identity._id) {
              alert('El usuario no esta correctamente identificado');
            } else {
              //crear el elemento en el localstorage para la sesion del usuario
              localStorage.setItem('identity', JSON.stringify(identity)); //conseguir el token para enviar a cada  peticion http

              _this2._userService.signup(_this2.user, 'true').subscribe(function (res) {
                var token = res.token;
                _this2.token = token;

                if (_this2.token.length <= 0) {
                  alert('El token no se ha generado correctamente');
                } else {
                  //crear el elemento en el localstorage para tener el token disponible
                  localStorage.setItem('token', token);
                  _this2.user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]('', '', '', '', '', 'ROLE_USER', '');
                }
              }, function (err) {
                var errormessage = err;

                if (errormessage != null) {
                  var body = JSON.parse(err._body);
                  _this2.errormessage = body.message;
                  console.log(err);
                }
              });
            }
          }, function (err) {
            var errormessage = err;

            if (errormessage != null) {
              var body = JSON.parse(err._body);
              _this2.errormessage = body.message;
              console.log(err);
            }
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('identity');
          localStorage.removeItem('token');
          localStorage.clear();
          this.identity = null;
          this.token = null;
          this.errormessage = null;
          this.alertRegister = null;

          this._router.navigate(['/']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])],
      decls: 5,
      vars: 3,
      consts: [[1, "container-fluid"], [1, "row"], ["class", "navigation ", 4, "ngIf"], [4, "ngIf"], ["class", "m-5", 4, "ngIf"], [1, "navigation"], [1, "sidebar"], [1, "head-title"], [3, "routerLink"], [1, ""], ["href", "#", 1, "nav-link", "active"], [1, "fas", "fa-home"], [1, "sr-only"], [1, "fab", "fa-searchengin"], [1, "nav-link", "active", 3, "routerLink", "routerLinkActive"], [1, "fas", "fa-microphone-alt"], [1, "fas", "fa-compact-disc"], ["id", "user_logged"], [1, "nav-link", "active"], ["id", "img-logged", "alt", "", 1, "img-thumbnail", 2, "width", "7rem", 3, "src"], ["href", "", "id", "nameandsurname", 1, "nav-link", "active", "text-capitalize"], [1, "fas", "fa-user-cog"], ["href", "", 1, "nav-link", "active", 3, "click"], [1, "fas", "fa-sign-out-alt"], ["id", "main", 1, "p-5"], [1, "player"], [1, "m-5"], [1, "form-group", "col-6", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "form-group", "col-md-7"], ["class", "alert alert-info", 4, "ngIf"], ["type", "email", "name", "email", "placeholder", "Ingrese su email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "password", "name", "password", "placeholder", "Ingrese su Contrase\xF1a", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "submit", 1, "btn", "btn-outline-light", "ml-3"], ["registerForm", "ngForm"], [1, "form-group"], ["for", "inputEmail4"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-row"], [1, "form-group", "col-md-6"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["type", "text", "name", "surname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["surname", "ngModel"], ["type", "submit", 1, "btn", "btn-outline-light"], [1, "alert", "alert-info"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 32, 14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 5, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 53, 13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _components_player_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/user-edit/user-edit.component */
    "./src/app/components/user-edit/user-edit.component.ts");
    /* harmony import */


    var _components_artist_list_artist_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/artist-list/artist-list.component */
    "./src/app/components/artist-list/artist-list.component.ts");
    /* harmony import */


    var _components_artist_add_artist_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/artist-add/artist-add.component */
    "./src/app/components/artist-add/artist-add.component.ts");
    /* harmony import */


    var _components_artist_edit_artist_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/artist-edit/artist-edit.component */
    "./src/app/components/artist-edit/artist-edit.component.ts");
    /* harmony import */


    var _components_artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/artist-detail/artist-detail.component */
    "./src/app/components/artist-detail/artist-detail.component.ts");
    /* harmony import */


    var _components_album_add_album_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/album-add/album-add.component */
    "./src/app/components/album-add/album-add.component.ts");
    /* harmony import */


    var _components_album_edit_album_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/album-edit/album-edit.component */
    "./src/app/components/album-edit/album-edit.component.ts");
    /* harmony import */


    var _components_album_detail_album_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/album-detail/album-detail.component */
    "./src/app/components/album-detail/album-detail.component.ts");
    /* harmony import */


    var _components_add_song_add_song_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/add-song/add-song.component */
    "./src/app/components/add-song/add-song.component.ts");
    /* harmony import */


    var _components_edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/edit-song/edit-song.component */
    "./src/app/components/edit-song/edit-song.component.ts");
    /* harmony import */


    var _components_player_player_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/player/player.component */
    "./src/app/components/player/player.component.ts"); //USER
    //ARTIST
    //ALBUM
    //SOONG


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"], _components_artist_list_artist_list_component__WEBPACK_IMPORTED_MODULE_8__["ArtistListComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_artist_add_artist_add_component__WEBPACK_IMPORTED_MODULE_9__["ArtistAddComponent"], _components_artist_edit_artist_edit_component__WEBPACK_IMPORTED_MODULE_10__["ArtistEditComponent"], _components_artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_11__["ArtistDetailComponent"], _components_album_add_album_add_component__WEBPACK_IMPORTED_MODULE_12__["AlbumAddComponent"], _components_album_edit_album_edit_component__WEBPACK_IMPORTED_MODULE_13__["AlbumEditComponent"], _components_album_detail_album_detail_component__WEBPACK_IMPORTED_MODULE_14__["AlbumDetailComponent"], _components_add_song_add_song_component__WEBPACK_IMPORTED_MODULE_15__["AddSongComponent"], _components_edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_16__["EditSongComponent"], _components_player_player_component__WEBPACK_IMPORTED_MODULE_17__["PlayerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"], _components_artist_list_artist_list_component__WEBPACK_IMPORTED_MODULE_8__["ArtistListComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_artist_add_artist_add_component__WEBPACK_IMPORTED_MODULE_9__["ArtistAddComponent"], _components_artist_edit_artist_edit_component__WEBPACK_IMPORTED_MODULE_10__["ArtistEditComponent"], _components_artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_11__["ArtistDetailComponent"], _components_album_add_album_add_component__WEBPACK_IMPORTED_MODULE_12__["AlbumAddComponent"], _components_album_edit_album_edit_component__WEBPACK_IMPORTED_MODULE_13__["AlbumEditComponent"], _components_album_detail_album_detail_component__WEBPACK_IMPORTED_MODULE_14__["AlbumDetailComponent"], _components_add_song_add_song_component__WEBPACK_IMPORTED_MODULE_15__["AddSongComponent"], _components_edit_song_edit_song_component__WEBPACK_IMPORTED_MODULE_16__["EditSongComponent"], _components_player_player_component__WEBPACK_IMPORTED_MODULE_17__["PlayerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/add-song/add-song.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/add-song/add-song.component.ts ***!
    \***********************************************************/

  /*! exports provided: AddSongComponent */

  /***/
  function srcAppComponentsAddSongAddSongComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSongComponent", function () {
      return AddSongComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/global */
    "./src/app/services/global.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_song_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/song.service */
    "./src/app/services/song.service.ts");
    /* harmony import */


    var _services_album_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/album.service */
    "./src/app/services/album.service.ts");
    /* harmony import */


    var src_app_models_song__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/song */
    "./src/app/models/song.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function AddSongComponent_div_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.alertMessage);
      }
    }

    function AddSongComponent_div_0_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El n\xFAmero de la cancion es obligatoria");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddSongComponent_div_0_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El titulo es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddSongComponent_div_0_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La Duration es Obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddSongComponent_div_0_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " El navegador no soporta la reproduccion del audio ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r10.url + "get_song/" + ctx_r10.song.file, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AddSongComponent_div_0_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddSongComponent_div_0_div_25_div_1_Template, 4, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sube la el fichero de audio ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddSongComponent_div_0_div_25_Template_input_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.fileChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "subir el fichero");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.song.file && ctx_r9.song.file != "null");
      }
    }

    function AddSongComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddSongComponent_div_0_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddSongComponent_div_0_div_6_Template, 3, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "N\xFAmero");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSongComponent_div_0_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.song.number = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddSongComponent_div_0_span_12_Template, 2, 0, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Titulo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSongComponent_div_0_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.song.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddSongComponent_div_0_span_18_Template, 2, 0, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Duration");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSongComponent_div_0_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.song.duration = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AddSongComponent_div_0_span_24_Template, 2, 0, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddSongComponent_div_0_div_25_Template, 9, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.titulo + ctx_r0.album, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.alertMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.song.number);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r7.valid && _r7.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.song.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r5.valid && _r5.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.song.duration);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r7.valid && _r7.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0._isEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r1.form.valid);
      }
    }

    var AddSongComponent = /*#__PURE__*/function () {
      function AddSongComponent(_route, _router, _userService, _albumService, _songService) {
        _classCallCheck(this, AddSongComponent);

        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._albumService = _albumService;
        this._songService = _songService;
        this.titulo = "Crear Nuevo Cancion para el album: ";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
        this.song = new src_app_models_song__WEBPACK_IMPORTED_MODULE_5__["Song"]("1", "", "", "", "");
        this._isEdit = false;
      }

      _createClass(AddSongComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("song-add.component.ts cargado");
          this.getName();
        }
      }, {
        key: "getName",
        value: function getName() {
          var _this3 = this;

          this._route.params.forEach(function (params) {
            var album_id = params['album'];
            _this3.song.album = album_id;

            _this3._albumService.getAlbum(_this3.token, album_id).subscribe(function (res) {
              if (!res.album) {
                console.log(res);
              } else {
                _this3.album = res.album.title;
                console.log(_this3.album);
              }
            }, function (err) {
              var alertMessage = err;

              if (alertMessage != null) {
                var body = JSON.parse(err._body);
                _this3.alertMessage = body.message;
                console.log(err);
              }
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          console.log(this.song);

          this._songService.addSong(this.token, this.song).subscribe(function (res) {
            if (!res.song) {
              _this4.alertMessage = "Error en el servidor ";
            } else {
              _this4.alertMessage = "¡La canción se ha creado correctamente !";
              _this4.song = res.song;

              _this4._router.navigate(['/edit-song', res.song._id]);
            }
          }, function (err) {
            var alertMessage = err;

            if (alertMessage != null) {
              var body = JSON.parse(err._body);
              _this4.alertMessage = body.message;
              console.log(err);
            }
          });
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(file) {}
      }]);

      return AddSongComponent;
    }();

    AddSongComponent.ɵfac = function AddSongComponent_Factory(t) {
      return new (t || AddSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"]));
    };

    AddSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddSongComponent,
      selectors: [["app-add-song"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"], _services_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"]])],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "ngSubmit"], ["formSong", "ngForm"], [1, "container"], ["class", "alert alert-info", 4, "ngIf"], [1, "form-group", "col-md-6", "col-lg-4"], ["type", "text", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["d", "ngModel"], ["type", "text", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["type", "text", "name", "duration", 1, "form-control", 3, "ngModel", "ngModelChange"], ["duration", "ngModel"], [1, "text-right", "col-lg-4", "col-md-6"], ["type", "submit", "value", "canci\xF3n", 1, "btn", "btn-outline-light", "pull-right", 3, "disabled"], [1, "alert", "alert-info"], ["class", "form-group col-md-6 col-lg-4", 4, "ngIf"], [1, "custom-file"], ["type", "file", "id", "customFile", 1, "custom-file-input", 3, "change"], ["for", "customFile", 1, "custom-file-label"], ["controls", ""], ["type", "audio/mpeg", 3, "src"]],
      template: function AddSongComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddSongComponent_div_0_Template, 28, 10, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity && ctx.identity.role == "ROLE_ADMIN");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXNvbmcvYWRkLXNvbmcuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-song',
          templateUrl: './add-song.component.html',
          styleUrls: ['./add-song.component.css'],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"], _services_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"]
        }, {
          type: _services_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/album-add/album-add.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/album-add/album-add.component.ts ***!
    \*************************************************************/

  /*! exports provided: AlbumAddComponent */

  /***/
  function srcAppComponentsAlbumAddAlbumAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumAddComponent", function () {
      return AlbumAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/global */
    "./src/app/services/global.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_models_album__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/album */
    "./src/app/models/album.ts");
    /* harmony import */


    var _services_artist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/artist.service */
    "./src/app/services/artist.service.ts");
    /* harmony import */


    var _services_album_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/album.service */
    "./src/app/services/album.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AlbumAddComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.alertMessage);
      }
    }

    function AlbumAddComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El title es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AlbumAddComponent_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La description es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AlbumAddComponent_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El year es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AlbumAddComponent_div_23_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r9.url + "get-img-album/" + ctx_r9.album.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AlbumAddComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlbumAddComponent_div_23_div_1_Template, 2, 1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sube la Foto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AlbumAddComponent_div_23_Template_input_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.fileChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Elige la imagen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.album.image && ctx_r8.album.image != "null");
      }
    }

    var AlbumAddComponent = /*#__PURE__*/function () {
      function AlbumAddComponent(_route, _router, _userService, _artistService, _albumService) {
        _classCallCheck(this, AlbumAddComponent);

        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._artistService = _artistService;
        this._albumService = _albumService;
        this.titulo = "Crear Nuevo Album";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
        this.album = new src_app_models_album__WEBPACK_IMPORTED_MODULE_3__["Album"]('', '', '', 2020, '', '');
        this.is_edit = false;
      }

      _createClass(AlbumAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('album-add.component cargando...');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this5 = this;

          this._route.params.forEach(function (params) {
            var artist_id = params['artist'];
            _this5.album.artist = artist_id;

            _this5._albumService.addAlbum(_this5.token, _this5.album).subscribe(function (res) {
              if (!res.album) {
                _this5.alertMessage = "Error en el Servidor";
              } else {
                _this5.alertMessage = "!El album  se ha creado  correctamente";
                _this5.album = res.album;

                _this5._router.navigate(['/edit-album', res.album._id]);
              }
            }, function (err) {
              var alertMessage = err;

              if (alertMessage != null) {
                var body = JSON.parse(err._body);
                _this5.alertMessage = body.message;
                console.log(err);
              }
            });
          });
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(file) {}
      }]);

      return AlbumAddComponent;
    }();

    AlbumAddComponent.ɵfac = function AlbumAddComponent_Factory(t) {
      return new (t || AlbumAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_artist_service__WEBPACK_IMPORTED_MODULE_4__["ArtistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_album_service__WEBPACK_IMPORTED_MODULE_5__["AlbumService"]));
    };

    AlbumAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlbumAddComponent,
      selectors: [["app-album-add"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_artist_service__WEBPACK_IMPORTED_MODULE_4__["ArtistService"], _services_album_service__WEBPACK_IMPORTED_MODULE_5__["AlbumService"]])],
      decls: 27,
      vars: 11,
      consts: [[3, "ngSubmit"], ["formAlbum", "ngForm"], ["class", "alert alert-info", 4, "ngIf"], [1, "form-group", "col-md-6", "col-lg-6"], ["type", "text", "name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], [4, "ngIf"], ["type", "text", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], ["type", "text", "name", "year", 1, "form-control", 3, "ngModel", "ngModelChange"], ["year", "ngModel"], [1, "text-right", "col-lg-4", "col-md-6"], ["type", "submit", 1, "btn", "btn-outline-light", "pull-right", 3, "disabled"], [1, "alert", "alert-info"], ["class", "form-group col-md-6 col-lg-6", 4, "ngIf"], [1, "custom-file"], ["type", "file", "id", "customFile", 1, "custom-file-input", 3, "change"], ["for", "customFile", 1, "custom-file-label"], [1, "img-thumbnail", 3, "src"]],
      template: function AlbumAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AlbumAddComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlbumAddComponent_div_4_Template, 3, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Titulo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AlbumAddComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.album.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AlbumAddComponent_span_10_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Descripci\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AlbumAddComponent_Template_textarea_ngModelChange_14_listener($event) {
            return ctx.album.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AlbumAddComponent_span_16_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "A\xF1o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AlbumAddComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.album.year = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AlbumAddComponent_span_22_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AlbumAddComponent_div_23_Template, 9, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.album.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r2.valid && _r2.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.album.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r4.valid && _r4.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.album.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r6.valid && _r6.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.is_edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxidW0tYWRkL2FsYnVtLWFkZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-album-add',
          templateUrl: './album-add.component.html',
          styleUrls: ['./album-add.component.css'],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_artist_service__WEBPACK_IMPORTED_MODULE_4__["ArtistService"], _services_album_service__WEBPACK_IMPORTED_MODULE_5__["AlbumService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _services_artist_service__WEBPACK_IMPORTED_MODULE_4__["ArtistService"]
        }, {
          type: _services_album_service__WEBPACK_IMPORTED_MODULE_5__["AlbumService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/album-detail/album-detail.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/album-detail/album-detail.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AlbumDetailComponent */

  /***/
  function srcAppComponentsAlbumDetailAlbumDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumDetailComponent", function () {
      return AlbumDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/global */
    "./src/app/services/global.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_album_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/album.service */
    "./src/app/services/album.service.ts");
    /* harmony import */


    var _services_song_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/song.service */
    "./src/app/services/song.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AlbumDetailComponent_div_0_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.url + "get-img-album/" + ctx_r1.album.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/create-song", a1];
    };

    function AlbumDetailComponent_div_0_a_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Song");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.album._id));
      }
    }

    function AlbumDetailComponent_div_0_div_13_li_2_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumDetailComponent_div_0_div_13_li_2_div_7_div_1_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var song_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r8.onDeleteSong(song_r5._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Eliminar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumDetailComponent_div_0_div_13_li_2_div_7_div_1_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);

          return ctx_r11.onCancelSong();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancelar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a1) {
      return ["/edit-song", a1];
    };

    function AlbumDetailComponent_div_0_div_13_li_2_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlbumDetailComponent_div_0_div_13_li_2_div_7_div_1_Template, 5, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumDetailComponent_div_0_div_13_li_2_div_7_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var song_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r12.onDeleteConfirm(song_r5._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Borrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var song_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.confirmado == song_r5._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, song_r5._id));
      }
    }

    function AlbumDetailComponent_div_0_div_13_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumDetailComponent_div_0_div_13_li_2_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var song_r5 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r16.startPlayer(song_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AlbumDetailComponent_div_0_div_13_li_2_div_7_Template, 7, 4, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var song_r5 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r5.number + ". " + song_r5.name + ". " + song_r5.duration);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.identity && ctx_r4.identity.role == "ROLE_ADMIN");
      }
    }

    function AlbumDetailComponent_div_0_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlbumDetailComponent_div_0_div_13_li_2_Template, 9, 2, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.song);
      }
    }

    function AlbumDetailComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AlbumDetailComponent_div_0_img_3_Template, 1, 1, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AlbumDetailComponent_div_0_a_12_Template, 2, 3, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AlbumDetailComponent_div_0_div_13_Template, 3, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.album.image && ctx_r0.album.image !== "null");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.album.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.album.year);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.album.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.identity.role == "ROLE_ADMIN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.song);
      }
    }

    var AlbumDetailComponent = /*#__PURE__*/function () {
      function AlbumDetailComponent(_route, _router, _userService, _albumService, _songService) {
        _classCallCheck(this, AlbumDetailComponent);

        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._albumService = _albumService;
        this._songService = _songService;
        this.titulo = "Detalle  Album";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
      }

      _createClass(AlbumDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("album-detail.component.ts esta funcionando"); //sacar el album de la bbdd

          this.getAlbum();
        }
      }, {
        key: "getAlbum",
        value: function getAlbum() {
          var _this6 = this;

          this._route.params.forEach(function (params) {
            var id = params['id'];

            _this6._albumService.getAlbum(_this6.token, id).subscribe(function (res) {
              if (!res.album) {
                console.log(res);
              } else {
                _this6.album = res.album; // sacar los albunes de los artistas

                _this6._songService.getSongs(_this6.token, res.album._id).subscribe(function (res) {
                  if (!res.songs) {
                    _this6.alertMessage = "El Album no tiene canciones";
                  } else {
                    _this6.song = res.songs;
                  }
                }, function (err) {
                  var alertMessage = err;

                  if (alertMessage != null) {
                    var body = JSON.parse(err._body); //this.alertMessage = body.message;

                    console.log(err);
                  }
                });
              }
            }, function (err) {
              var alertMessage = err;

              if (alertMessage != null) {
                var body = JSON.parse(err._body); //this.alertMessage = body.message;

                console.log(err);
              }
            });
          });
        }
      }, {
        key: "onDeleteConfirm",
        value: function onDeleteConfirm(id) {
          this.confirmado = id;
        }
      }, {
        key: "onCancelSong",
        value: function onCancelSong() {
          this.confirmado = null;
        }
      }, {
        key: "onDeleteSong",
        value: function onDeleteSong(id) {
          var _this7 = this;

          this._songService.deleteSong(this.token, id).subscribe(function (res) {
            if (!res.song) {
              alert("Error en el servidor");
            } else {
              _this7.getAlbum();
            }
          }, function (err) {
            var alertMessage = err;

            if (alertMessage != null) {
              var body = JSON.parse(err._body); //this.alertMessage = body.message;

              console.log(err);
            }
          });
        }
      }, {
        key: "startPlayer",
        value: function startPlayer(song) {
          var songPlayer = JSON.stringify(song);
          var file_path = this.url + 'get_song/' + song.file;
          var image_path = this.url + 'get-img-album/' + song.album.image;
          localStorage.setItem('sound_song', songPlayer);
          document.getElementById("mp3-source").setAttribute("src", file_path);
          document.getElementById("player").load();
          document.getElementById("player").play();
          document.getElementById("play-song-title").innerHTML = song.name + '&nbsp';
          document.getElementById("play-song-artist").innerHTML = '&nbsp' + 'Cantante: ' + song.album.artist.name;
          document.getElementById("play-image-album").setAttribute("src", image_path);
        }
      }]);

      return AlbumDetailComponent;
    }();

    AlbumDetailComponent.ɵfac = function AlbumDetailComponent_Factory(t) {
      return new (t || AlbumDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_album_service__WEBPACK_IMPORTED_MODULE_3__["AlbumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_song_service__WEBPACK_IMPORTED_MODULE_4__["SongService"]));
    };

    AlbumDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlbumDetailComponent,
      selectors: [["app-album-detail"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_album_service__WEBPACK_IMPORTED_MODULE_3__["AlbumService"], _services_song_service__WEBPACK_IMPORTED_MODULE_4__["SongService"]])],
      decls: 1,
      vars: 1,
      consts: [["class", "artist-box", 4, "ngIf"], [1, "artist-box"], ["id", "artist-head-card"], [1, "image"], [3, "src", 4, "ngIf"], [1, "data"], [1, "inner"], [1, "description"], ["class", "btn btn-outline-light pull-right ml-3 ", 3, "routerLink", 4, "ngIf"], ["id", "gallery-songs", 4, "ngIf"], [3, "src"], [1, "btn", "btn-outline-light", "pull-right", "ml-3", 3, "routerLink"], ["id", "gallery-songs"], ["id", "song-list"], ["class", "song-item", 4, "ngFor", "ngForOf"], [1, "song-item"], [1, "song-detail"], [1, "btn", "btn-success", 3, "click"], ["aria-hidden", "true", 1, "far", "fa-play-circle"], [1, "title"], ["class", "left-btn", 4, "ngIf"], [1, "left-btn"], [4, "ngIf"], [1, "btn", "btn-warning", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-primary", 3, "click"]],
      template: function AlbumDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlbumDetailComponent_div_0_Template, 14, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.album);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["#artist-head-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{\r\n    \r\n    overflow: hidden;\r\n    float: left;\r\n    margin-right: 30px;\r\n    border:1px solid white;\r\n    border-radius: 5px;\r\n}\r\n#artist-head-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 130px;\r\n    height: 130px;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    color: black;\r\n}\r\n.artist_list[_ngcontent-%COMP%]{\r\n    padding-top: 50px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n    justify-content: space-around;\r\n    align-content: center;\r\n    \r\n    \r\n}\r\n.artist-item[_ngcontent-%COMP%]{\r\n    flex-basis: 260px;\r\n    height: 450px;        \r\n    border: 1px solid  #84BD00;\r\n    margin-top: 10px;\r\n \r\n}\r\n.artist-img[_ngcontent-%COMP%]{\r\n    height: 245px;    \r\n    overflow: hidden;\r\n    background-color: wheat;\r\n    width:260px;\r\n    \r\n}\r\n.artist-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  \r\n}\r\n.artist-container[_ngcontent-%COMP%]{\r\n    background: #222;\r\n    height: 203px;\r\n    border-top: 1px solid #84BD00;  \r\n    \r\n}\r\n.artist-name[_ngcontent-%COMP%]{   \r\n    \r\n    color: white;\r\n    padding: 10px;\r\n    display: block;\r\n    text-align: center;\r\n    \r\n}\r\n.artist-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n}\r\n#borderr[_ngcontent-%COMP%]{\r\n    width: 260px;\r\n    overflow:hidden;\r\n    white-space:nowrap;\r\n    text-overflow: ellipsis;\r\n     border-top: 1px solid #84BD00;\r\n}\r\n.description[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n}\r\n.song-detail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    margin: 10px;\r\n}\r\n.title[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    margin: 10px;\r\n}\r\n.left-btn[_ngcontent-%COMP%]{\r\n   \r\n    margin: 10px;\r\n    float: right;\r\n    \r\n}\r\n.left-btn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n   display: inline-block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGJ1bS1kZXRhaWwvYWxidW0tZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IscUJBQXFCOzs7QUFHekI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFdBQVc7O0FBRWY7QUFDQTtFQUNFLFlBQVk7O0FBRWQ7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNkJBQTZCOztBQUVqQztBQUNBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUJBQXVCO0tBQ3RCLDZCQUE2QjtBQUNsQztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTs7QUFFaEI7QUFDQTtHQUNHLHFCQUFxQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxidW0tZGV0YWlsL2FsYnVtLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FydGlzdC1oZWFkLWNhcmQgLmltYWdle1xyXG4gICAgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiNhcnRpc3QtaGVhZC1jYXJkIC5pbWFnZSBpbWd7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG59XHJcbmF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmFydGlzdF9saXN0e1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLmFydGlzdC1pdGVte1xyXG4gICAgZmxleC1iYXNpczogMjYwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4OyAgICAgICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAgIzg0QkQwMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiBcclxufVxyXG4uYXJ0aXN0LWltZ3tcclxuICAgIGhlaWdodDogMjQ1cHg7ICAgIFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xyXG4gICAgd2lkdGg6MjYwcHg7XHJcbiAgICBcclxufSAgIFxyXG4uYXJ0aXN0LWltZyBpbWd7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIFxyXG59XHJcbi5hcnRpc3QtY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgIGhlaWdodDogMjAzcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzg0QkQwMDsgIFxyXG4gICAgXHJcbn1cclxuLmFydGlzdC1uYW1leyAgIFxyXG4gICAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG4uYXJ0aXN0LW5hbWUgYXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSBcclxudWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbiNib3JkZXJye1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4NEJEMDA7XHJcbn1cclxuLmRlc2NyaXB0aW9ue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5zb25nLWRldGFpbCBhe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi50aXRsZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4ubGVmdC1idG57XHJcbiAgIFxyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgXHJcbn1cclxuLmxlZnQtYnRuIGRpdntcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-album-detail',
          templateUrl: './album-detail.component.html',
          styleUrls: ['./album-detail.component.css'],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_album_service__WEBPACK_IMPORTED_MODULE_3__["AlbumService"], _services_song_service__WEBPACK_IMPORTED_MODULE_4__["SongService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _services_album_service__WEBPACK_IMPORTED_MODULE_3__["AlbumService"]
        }, {
          type: _services_song_service__WEBPACK_IMPORTED_MODULE_4__["SongService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/album-edit/album-edit.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/album-edit/album-edit.component.ts ***!
    \***************************************************************/

  /*! exports provided: AlbumEditComponent */

  /***/
  function srcAppComponentsAlbumEditAlbumEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumEditComponent", function () {
      return AlbumEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/global */
    "./src/app/services/global.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_models_album__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/album */
    "./src/app/models/album.ts");
    /* harmony import */


    var _services_album_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/album.service */
    "./src/app/services/album.service.ts");
    /* harmony import */


    var _services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/upload.service */
    "./src/app/services/upload.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AlbumEditComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.alertMessage);
      }
    }

    function AlbumEditComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El title es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AlbumEditComponent_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La description es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AlbumEditComponent_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El year es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AlbumEditComponent_div_23_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r9.url + "get-img-album/" + ctx_r9.album.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AlbumEditComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlbumEditComponent_div_23_div_1_Template, 2, 1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sube la Foto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AlbumEditComponent_div_23_Template_input_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.fileChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Elige la imagen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.album.image && ctx_r8.album.image != "null");
      }
    }

    var AlbumEditComponent = /*#__PURE__*/function () {
      function AlbumEditComponent(_route, _router, _userService, _albumService, _UploadService) {
        _classCallCheck(this, AlbumEditComponent);

        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._albumService = _albumService;
        this._UploadService = _UploadService;
        this.titulo = "Editar Album";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
        this.album = new src_app_models_album__WEBPACK_IMPORTED_MODULE_3__["Album"]('', '', '', 2020, '', '');
        this.is_edit = true;
      }

      _createClass(AlbumEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('album.edit.component.ts esta cargando ...'); //conseguir el album

          this.getAlbum();
        }
      }, {
        key: "getAlbum",
        value: function getAlbum() {
          var _this8 = this;

          this._route.params.forEach(function (params) {
            var id = params['id'];

            _this8._albumService.getAlbum(_this8.token, id).subscribe(function (res) {
              if (!res.album) {
                _this8._router.navigate(['/']);
              } else {
                _this8.album = res.album;
              }
            }, function (err) {
              var alertMessage = err;

              if (alertMessage != null) {
                var body = JSON.parse(err._body);
                console.log(err);
              }
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this9 = this;

          this._route.params.forEach(function (params) {
            var id = params['id'];

            _this9._albumService.editAlbum(_this9.token, id, _this9.album).subscribe(function (res) {
              if (!res.album) {
                _this9.alertMessage = "Error en el Servidor";
              } else {
                _this9.alertMessage = "¡El album  se ha actualizado  correctamente!";
                console.log(_this9.alertMessage); // subir la imagen al servidor

                if (!_this9.filesToUpload) {
                  //redirigir
                  _this9._router.navigate(['/artistt', res.album.artist]);
                } else {
                  _this9._UploadService.makeFileRequest(_this9.url + 'upload-img-album/' + id, [], _this9.filesToUpload, _this9.token, 'image').then(function (result) {
                    _this9._router.navigate(['/artistt', res.album.artist]);
                  }, function (error) {
                    console.log(error);
                  });
                }
              }
            }, function (err) {
              var alertMessage = err;

              if (alertMessage != null) {
                var body = JSON.parse(err._body);
                _this9.alertMessage = body.message;
                console.log(err);
              }
            });
          });
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(fileInput) {
          this.filesToUpload = fileInput.target.files;
        }
      }]);

      return AlbumEditComponent;
    }();

    AlbumEditComponent.ɵfac = function AlbumEditComponent_Factory(t) {
      return new (t || AlbumEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]));
    };

    AlbumEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlbumEditComponent,
      selectors: [["app-album-edit"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]])],
      decls: 27,
      vars: 11,
      consts: [[3, "ngSubmit"], ["formAlbum", "ngForm"], ["class", "alert alert-info", 4, "ngIf"], [1, "form-group", "col-md-6", "col-lg-6"], ["type", "text", "name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], [4, "ngIf"], ["type", "text", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], ["type", "text", "name", "year", 1, "form-control", 3, "ngModel", "ngModelChange"], ["year", "ngModel"], [1, "text-right", "col-lg-4", "col-md-6"], ["type", "submit", 1, "btn", "btn-outline-light", "pull-right", 3, "disabled"], [1, "alert", "alert-info"], ["class", "form-group col-md-6 col-lg-6", 4, "ngIf"], [1, "custom-file"], ["type", "file", "id", "customFile", 1, "custom-file-input", 3, "change"], ["for", "customFile", 1, "custom-file-label"], [1, "img-thumbnail", 3, "src"]],
      template: function AlbumEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AlbumEditComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlbumEditComponent_div_4_Template, 3, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Titulo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AlbumEditComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.album.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AlbumEditComponent_span_10_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Descripci\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AlbumEditComponent_Template_textarea_ngModelChange_14_listener($event) {
            return ctx.album.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AlbumEditComponent_span_16_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "A\xF1o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AlbumEditComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.album.year = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AlbumEditComponent_span_22_Template, 2, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AlbumEditComponent_div_23_Template, 9, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.album.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r2.valid && _r2.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.album.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r4.valid && _r4.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.album.year);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r6.valid && _r6.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.is_edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxidW0tZWRpdC9hbGJ1bS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-album-edit',
          templateUrl: '../album-add/album-add.component.html',
          styleUrls: ['./album-edit.component.css'],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"]
        }, {
          type: _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/artist-add/artist-add.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/artist-add/artist-add.component.ts ***!
    \***************************************************************/

  /*! exports provided: ArtistAddComponent */

  /***/
  function srcAppComponentsArtistAddArtistAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtistAddComponent", function () {
      return ArtistAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/global */
    "./src/app/services/global.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_models_artist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/artist */
    "./src/app/models/artist.ts");
    /* harmony import */


    var _services_artist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/artist.service */
    "./src/app/services/artist.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ArtistAddComponent_form_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.alertMessage);
      }
    }

    function ArtistAddComponent_form_0_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El nombre es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ArtistAddComponent_form_0_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La descripcion es Obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ArtistAddComponent_form_0_div_18_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r9.url + "get-img-artist/" + ctx_r9.artist.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ArtistAddComponent_form_0_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtistAddComponent_form_0_div_18_div_1_Template, 2, 1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sube la Foto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ArtistAddComponent_form_0_div_18_Template_input_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.fileChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Elige la imagen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.artist.image && ctx_r8.artist.image != "null");
      }
    }

    function ArtistAddComponent_form_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ArtistAddComponent_form_0_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ArtistAddComponent_form_0_div_5_Template, 3, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ArtistAddComponent_form_0_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.artist.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ArtistAddComponent_form_0_span_11_Template, 2, 0, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ArtistAddComponent_form_0_Template_textarea_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.artist.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ArtistAddComponent_form_0_span_17_Template, 2, 0, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ArtistAddComponent_form_0_div_18_Template, 9, 1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.titulo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.alertMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.artist.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r4.valid && _r4.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.artist.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r6.valid && _r6.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.is_edit);
      }
    }

    function ArtistAddComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No tienes acceso a esta parte de la aplicacion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ArtistAddComponent = /*#__PURE__*/function () {
      function ArtistAddComponent(_route, _router, _userService, _artistService) {
        _classCallCheck(this, ArtistAddComponent);

        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._artistService = _artistService;
        this.titulo = "Crear un nuevo Artista";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
        this.artist = new src_app_models_artist__WEBPACK_IMPORTED_MODULE_3__["Artist"]('', '', '', '');
        this.is_edit = false;
      }

      _createClass(ArtistAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('artist-add.component cargando...');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this10 = this;

          this._artistService.addArtist(this.token, this.artist).subscribe(function (response) {
            if (!response.artist) {
              alert('error en el servidor');
            } else {
              _this10.artist = response.artist;
              _this10.alertMessage = "El artista se creó con exito";

              _this10._router.navigate(['/edit-artist/' + response.artist._id]);
            }
          }, function (err) {
            var alertMessage = err;

            if (alertMessage != null) {
              var body = JSON.parse(err._body);
              _this10.alertMessage = body.message;
              console.log(err);
            }
          });
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {}
      }]);

      return ArtistAddComponent;
    }();

    ArtistAddComponent.ɵfac = function ArtistAddComponent_Factory(t) {
      return new (t || ArtistAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_artist_service__WEBPACK_IMPORTED_MODULE_4__["ArtistService"]));
    };

    ArtistAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArtistAddComponent,
      selectors: [["app-artist-add"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_artist_service__WEBPACK_IMPORTED_MODULE_4__["ArtistService"]])],
      decls: 2,
      vars: 2,
      consts: [[3, "ngSubmit", 4, "ngIf"], [4, "ngIf"], [3, "ngSubmit"], ["formArtist", "ngForm"], [1, "container"], ["class", "alert alert-info", 4, "ngIf"], [1, "form-group", "col-md-6", "col-lg-4", "col-xl-8"], ["type", "text", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["type", "text", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], [1, "text-right", "col-lg-4", "col-md-6", "col-xl-8"], ["type", "submit", 1, "btn", "btn-outline-light", "pull-right"], [1, "alert", "alert-info"], ["class", "form-group col-md-6 col-lg-4 col-xl-8", 4, "ngIf"], [1, "custom-file"], ["type", "file", "id", "customFile", 1, "custom-file-input", 3, "change"], ["for", "customFile", 1, "custom-file-label"], [1, "img-thumbnail", 3, "src"]],
      template: function ArtistAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArtistAddComponent_form_0_Template, 22, 7, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtistAddComponent_div_1_Template, 5, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity && ctx.identity.role == "ROLE_ADMIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity || ctx.identity.role != "ROLE_ADMIN");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aXN0LWFkZC9hcnRpc3QtYWRkLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtistAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-artist-add',
          templateUrl: './artist-add.component.html',
          styleUrls: ['./artist-add.component.css'],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_artist_service__WEBPACK_IMPORTED_MODULE_4__["ArtistService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _services_artist_service__WEBPACK_IMPORTED_MODULE_4__["ArtistService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/artist-detail/artist-detail.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/artist-detail/artist-detail.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ArtistDetailComponent */

  /***/
  function srcAppComponentsArtistDetailArtistDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtistDetailComponent", function () {
      return ArtistDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/global */
    "./src/app/services/global.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_artist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/artist.service */
    "./src/app/services/artist.service.ts");
    /* harmony import */


    var _services_album_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/album.service */
    "./src/app/services/album.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ArtistDetailComponent_div_0_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.url + "get-img-artist/" + ctx_r2.artist.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/create-album", a1];
    };

    function ArtistDetailComponent_div_0_a_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Album");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r3.artist._id));
      }
    }

    function ArtistDetailComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ArtistDetailComponent_div_0_img_3_Template, 1, 1, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ArtistDetailComponent_div_0_a_9_Template, 2, 3, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.artist.image && ctx_r0.artist.image !== "null");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.artist.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.artist.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.identity.role == "ROLE_ADMIN");
      }
    }

    var _c1 = function _c1(a1) {
      return ["/edit-album", a1];
    };

    function ArtistDetailComponent_ul_1_li_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtistDetailComponent_ul_1_li_1_div_9_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var album_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.OndeleteConfirm(album_r5._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Borrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var album_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, album_r5._id));
      }
    }

    function ArtistDetailComponent_ul_1_li_1_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtistDetailComponent_ul_1_li_1_div_10_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var album_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.onDeleteAlbum(album_r5._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Eliminar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtistDetailComponent_ul_1_li_1_div_10_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r15.onCancelAlbum();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cancelar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2(a1) {
      return ["/album", a1];
    };

    var _c3 = function _c3(a1) {
      return ["/artistt", a1];
    };

    function ArtistDetailComponent_ul_1_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ArtistDetailComponent_ul_1_li_1_div_9_Template, 5, 3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ArtistDetailComponent_ul_1_li_1_div_10_Template, 5, 0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var album_r5 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.url + "get-img-album/" + album_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, album_r5._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", album_r5.title, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, album_r5.artist._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", album_r5.artist.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.identity.role == "ROLE_ADMIN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.confirmado == album_r5._id);
      }
    }

    function ArtistDetailComponent_ul_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtistDetailComponent_ul_1_li_1_Template, 11, 11, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.albums);
      }
    }

    var ArtistDetailComponent = /*#__PURE__*/function () {
      function ArtistDetailComponent(_route, _router, _userService, _artistService, _albumService) {
        _classCallCheck(this, ArtistDetailComponent);

        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._artistService = _artistService;
        this._albumService = _albumService;
        this.titulo = "Editar  Artista";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
      }

      _createClass(ArtistDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('artist-detail.component cargando...');
          this.getArtist();
        }
      }, {
        key: "getArtist",
        value: function getArtist() {
          var _this11 = this;

          this._route.params.forEach(function (params) {
            var id = params['id'];

            _this11._artistService.getArtist(_this11.token, id).subscribe(function (res) {
              if (!res.artist) {
                console.log(res);
              } else {
                _this11.artist = res.artist; // sacar los albunes de los artistas

                _this11._albumService.getAlbums(_this11.token, res.artist._id).subscribe(function (res) {
                  if (!res.albums) {
                    _this11.alertMessage = "Este Artista No tiene Albums";
                  } else {
                    _this11.albums = res.albums;
                    console.log(_this11.albums);
                  }
                }, function (err) {
                  var alertMessage = err;

                  if (alertMessage != null) {
                    var body = JSON.parse(err._body); //this.alertMessage = body.message;

                    console.log(err);
                  }
                });
              }
            }, function (err) {
              var alertMessage = err;

              if (alertMessage != null) {
                var body = JSON.parse(err._body); //this.alertMessage = body.message;

                console.log(err);
              }
            });
          });
        }
      }, {
        key: "OndeleteConfirm",
        value: function OndeleteConfirm(id) {
          this.confirmado = id;
        }
      }, {
        key: "onCancelAlbum",
        value: function onCancelAlbum() {
          this.confirmado = null;
        }
      }, {
        key: "onDeleteAlbum",
        value: function onDeleteAlbum(id) {
          var _this12 = this;

          this._albumService.deleteAlbum(this.token, id).subscribe(function (res) {
            if (!res.album) {
              alert("Error en el servidor");
            }

            _this12.getArtist();
          }, function (err) {
            var alertMessage = err;

            if (alertMessage != null) {
              var body = JSON.parse(err._body); //this.alertMessage = body.message;

              console.log(err);
            }
          });
        }
      }]);

      return ArtistDetailComponent;
    }();

    ArtistDetailComponent.ɵfac = function ArtistDetailComponent_Factory(t) {
      return new (t || ArtistDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"]));
    };

    ArtistDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArtistDetailComponent,
      selectors: [["app-artist-detail"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"], _services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"]])],
      decls: 2,
      vars: 2,
      consts: [["class", "artist-box", 4, "ngIf"], ["class", "artist_list", 4, "ngIf"], [1, "artist-box"], ["id", "artist-head-card"], [1, "image"], [3, "src", 4, "ngIf"], [1, "data"], [1, "description"], ["href", "#", "class", "btn btn-outline-light pull-right ", 3, "routerLink", 4, "ngIf"], [3, "src"], ["href", "#", 1, "btn", "btn-outline-light", "pull-right", 3, "routerLink"], [1, "artist_list"], ["class", " artist-item", 4, "ngFor", "ngForOf"], [1, "artist-item"], [1, "artist-img"], [1, "artist-container"], [1, "artist-name"], [3, "routerLink"], ["id", "borderr", 1, "artist-name", 3, "routerLink"], ["class", "artist-name", 4, "ngIf"], ["class", "seguro", 4, "ngIf"], [1, "btn", "btn-warning", "mr-2", 3, "routerLink"], [1, "btn", "btn-danger", "ml-2", 3, "click"], [1, "seguro"], [1, "btn", "btn-danger", "mr-2", 3, "click"], [1, "btn", "btn-primary", "ml-2", 3, "click"]],
      template: function ArtistDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArtistDetailComponent_div_0_Template, 10, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtistDetailComponent_ul_1_Template, 2, 1, "ul", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.artist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["#artist-head-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{\r\n    width: 130px;\r\n    height: 130px;\r\n    overflow: hidden;\r\n    float: left;\r\n    margin-right: 30px;\r\n    border:1px solid white;\r\n    border-radius: 5px;\r\n}\r\n#artist-head-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 130px;\r\n    height: 130px;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    color: black;\r\n}\r\n.artist_list[_ngcontent-%COMP%]{\r\n    padding-top: 50px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n    justify-content: space-around;\r\n    align-content: center;\r\n    \r\n    \r\n}\r\n.artist-item[_ngcontent-%COMP%]{\r\n    flex-basis: 260px;\r\n    height: 450px;        \r\n    border: 1px solid  #84BD00;\r\n    margin-top: 10px;\r\n \r\n}\r\n.artist-img[_ngcontent-%COMP%]{\r\n    height: 245px;    \r\n    overflow: hidden;\r\n    background-color: wheat;\r\n    width:260px;\r\n    \r\n}\r\n.artist-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  \r\n}\r\n.artist-container[_ngcontent-%COMP%]{\r\n    background: #222;\r\n    height: 203px;\r\n    border-top: 1px solid #84BD00;  \r\n    \r\n}\r\n.artist-name[_ngcontent-%COMP%]{   \r\n    \r\n    color: white;\r\n    padding: 10px;\r\n    display: block;\r\n    text-align: center;\r\n    \r\n}\r\n.artist-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n}\r\n#borderr[_ngcontent-%COMP%]{\r\n    width: 260px;\r\n    overflow:hidden;\r\n    white-space:nowrap;\r\n    text-overflow: ellipsis;\r\n     border-top: 1px solid #84BD00;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpc3QtZGV0YWlsL2FydGlzdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IscUJBQXFCOzs7QUFHekI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFdBQVc7O0FBRWY7QUFDQTtFQUNFLFlBQVk7O0FBRWQ7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNkJBQTZCOztBQUVqQztBQUNBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUJBQXVCO0tBQ3RCLDZCQUE2QjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aXN0LWRldGFpbC9hcnRpc3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXJ0aXN0LWhlYWQtY2FyZCAuaW1hZ2V7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4jYXJ0aXN0LWhlYWQtY2FyZCAuaW1hZ2UgaW1ne1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxufVxyXG5he1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5hcnRpc3RfbGlzdHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbi5hcnRpc3QtaXRlbXtcclxuICAgIGZsZXgtYmFzaXM6IDI2MHB4O1xyXG4gICAgaGVpZ2h0OiA0NTBweDsgICAgICAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgICM4NEJEMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gXHJcbn1cclxuLmFydGlzdC1pbWd7XHJcbiAgICBoZWlnaHQ6IDI0NXB4OyAgICBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcclxuICAgIHdpZHRoOjI2MHB4O1xyXG4gICAgXHJcbn0gICBcclxuLmFydGlzdC1pbWcgaW1ne1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBcclxufVxyXG4uYXJ0aXN0LWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICBoZWlnaHQ6IDIwM3B4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4NEJEMDA7ICBcclxuICAgIFxyXG59XHJcbi5hcnRpc3QtbmFtZXsgICBcclxuICAgIFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuLmFydGlzdC1uYW1lIGF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0gXHJcbnVse1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4jYm9yZGVycntcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODRCRDAwO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtistDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-artist-detail',
          templateUrl: './artist-detail.component.html',
          styleUrls: ['./artist-detail.component.css'],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"], _services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _services_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"]
        }, {
          type: _services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/artist-edit/artist-edit.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/artist-edit/artist-edit.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ArtistEditComponent */

  /***/
  function srcAppComponentsArtistEditArtistEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtistEditComponent", function () {
      return ArtistEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/global */
    "./src/app/services/global.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_models_artist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/artist */
    "./src/app/models/artist.ts");
    /* harmony import */


    var _services_artist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/artist.service */
    "./src/app/services/artist.service.ts");
    /* harmony import */


    var _services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/upload.service */
    "./src/app/services/upload.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ArtistEditComponent_form_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.alertMessage);
      }
    }

    function ArtistEditComponent_form_0_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El nombre es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ArtistEditComponent_form_0_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La descripcion es Obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ArtistEditComponent_form_0_div_18_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r9.url + "get-img-artist/" + ctx_r9.artist.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ArtistEditComponent_form_0_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtistEditComponent_form_0_div_18_div_1_Template, 2, 1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sube la Foto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ArtistEditComponent_form_0_div_18_Template_input_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.fileChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Elige la imagen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.artist.image && ctx_r8.artist.image != "null");
      }
    }

    function ArtistEditComponent_form_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ArtistEditComponent_form_0_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ArtistEditComponent_form_0_div_5_Template, 3, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ArtistEditComponent_form_0_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.artist.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ArtistEditComponent_form_0_span_11_Template, 2, 0, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ArtistEditComponent_form_0_Template_textarea_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.artist.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ArtistEditComponent_form_0_span_17_Template, 2, 0, "span", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ArtistEditComponent_form_0_div_18_Template, 9, 1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.titulo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.alertMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.artist.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r4.valid && _r4.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.artist.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r6.valid && _r6.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.is_edit);
      }
    }

    function ArtistEditComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No tienes acceso a esta parte de la aplicacion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ArtistEditComponent = /*#__PURE__*/function () {
      function ArtistEditComponent(_route, _router, _userService, _UploadService, _artistService) {
        _classCallCheck(this, ArtistEditComponent);

        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._UploadService = _UploadService;
        this._artistService = _artistService;
        this.titulo = "Editar  Artista";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
        this.artist = new src_app_models_artist__WEBPACK_IMPORTED_MODULE_3__["Artist"]('', '', '', '');
        this.is_edit = true;
      }

      _createClass(ArtistEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('artist-edit.component cargando...');
          this.getArtist();
        }
      }, {
        key: "getArtist",
        value: function getArtist() {
          var _this13 = this;

          this._route.params.forEach(function (params) {
            var id = params['id'];

            _this13._artistService.getArtist(_this13.token, id).subscribe(function (res) {
              if (!res.artist) {
                console.log(res);
              } else {
                _this13.artist = res.artist;
              }
            }, function (err) {
              var alertMessage = err;

              if (alertMessage != null) {
                var body = JSON.parse(err._body); //this.alertMessage = body.message;

                console.log(err);
              }
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this14 = this;

          this._route.params.forEach(function (params) {
            var id = params['id'];

            _this14._artistService.updateArtist(_this14.token, id, _this14.artist).subscribe(function (response) {
              if (!response.artistUpdate) {
                alert('error en el servidor');
              } else {
                //this.artist = response.artist;
                _this14.alertMessage = "El artista se actualizado con exito"; //subir la imagen del artista

                if (!_this14.filesToUpload) {
                  _this14._router.navigate(['/artistt', response.artistUpdate._id]);
                } else {
                  _this14._UploadService.makeFileRequest(_this14.url + 'upload-img-artist/' + id, [], _this14.filesToUpload, _this14.token, 'image').then(function (result) {
                    _this14._router.navigate(['/artistt', response.artistUpdate._id]);
                  }, function (error) {
                    console.log(error);
                  });
                }
              }
            }, function (err) {
              var alertMessage = err;

              if (alertMessage != null) {
                var body = JSON.parse(err._body);
                _this14.alertMessage = body.message;
                console.log(err);
              }
            });
          });
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(fileInput) {
          this.filesToUpload = fileInput.target.files;
        }
      }]);

      return ArtistEditComponent;
    }();

    ArtistEditComponent.ɵfac = function ArtistEditComponent_Factory(t) {
      return new (t || ArtistEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_artist_service__WEBPACK_IMPORTED_MODULE_4__["ArtistService"]));
    };

    ArtistEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArtistEditComponent,
      selectors: [["app-artist-edit"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_artist_service__WEBPACK_IMPORTED_MODULE_4__["ArtistService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]])],
      decls: 2,
      vars: 2,
      consts: [[3, "ngSubmit", 4, "ngIf"], [4, "ngIf"], [3, "ngSubmit"], ["formArtist", "ngForm"], [1, "container"], ["class", "alert alert-info", 4, "ngIf"], [1, "form-group", "col-md-6", "col-lg-4", "col-xl-8"], ["type", "text", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["type", "text", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], [1, "text-right", "col-lg-4", "col-md-6", "col-xl-8"], ["type", "submit", 1, "btn", "btn-outline-light", "pull-right"], [1, "alert", "alert-info"], ["class", "form-group col-md-6 col-lg-4 col-xl-8", 4, "ngIf"], [1, "custom-file"], ["type", "file", "id", "customFile", 1, "custom-file-input", 3, "change"], ["for", "customFile", 1, "custom-file-label"], [1, "img-thumbnail", 3, "src"]],
      template: function ArtistEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArtistEditComponent_form_0_Template, 22, 7, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtistEditComponent_div_1_Template, 5, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity && ctx.identity.role == "ROLE_ADMIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.identity || ctx.identity.role != "ROLE_ADMIN");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aXN0LWVkaXQvYXJ0aXN0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtistEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-artist-edit',
          templateUrl: '../artist-add/artist-add.component.html',
          styleUrls: ['./artist-edit.component.css'],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_artist_service__WEBPACK_IMPORTED_MODULE_4__["ArtistService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]
        }, {
          type: _services_artist_service__WEBPACK_IMPORTED_MODULE_4__["ArtistService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/artist-list/artist-list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/artist-list/artist-list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ArtistListComponent */

  /***/
  function srcAppComponentsArtistListArtistListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtistListComponent", function () {
      return ArtistListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/global */
    "./src/app/services/global.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_artist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/artist.service */
    "./src/app/services/artist.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/create-artist"];
    };

    function ArtistListComponent_div_0_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Artist");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1(a1) {
      return ["/edit-artist", a1];
    };

    function ArtistListComponent_div_0_ul_12_li_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtistListComponent_div_0_ul_12_li_1_div_4_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var artist_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r7.OndeleteConfirm(artist_r4._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " eliminar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var artist_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, artist_r4._id));
      }
    }

    function ArtistListComponent_div_0_ul_12_li_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtistListComponent_div_0_ul_12_li_1_div_7_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var artist_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r11.onDeleteArtist(artist_r4._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Eliminar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtistListComponent_div_0_ul_12_li_1_div_7_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r14.onCancelArtist();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cancelar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2(a1) {
      return ["/artistt", a1];
    };

    function ArtistListComponent_div_0_ul_12_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArtistListComponent_div_0_ul_12_li_1_div_4_Template, 5, 3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ArtistListComponent_div_0_ul_12_li_1_div_7_Template, 5, 0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var artist_r4 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.url + "get-img-artist/" + artist_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.identity.role == "ROLE_ADMIN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, artist_r4._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", artist_r4.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.confirmado == artist_r4._id);
      }
    }

    function ArtistListComponent_div_0_ul_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtistListComponent_div_0_ul_12_li_1_Template, 8, 7, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.artists);
      }
    }

    var _c3 = function _c3(a1) {
      return ["/artist", a1];
    };

    function ArtistListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ArtistListComponent_div_0_a_3_Template, 2, 2, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Previus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ArtistListComponent_div_0_ul_12_Template, 2, 1, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.titulo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.identity.role == "ROLE_ADMIN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, ctx_r0.prev_page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx_r0.next_page));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.identity);
      }
    }

    var ArtistListComponent = /*#__PURE__*/function () {
      function ArtistListComponent(_route, _router, _userService, _artistService) {
        _classCallCheck(this, ArtistListComponent);

        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._artistService = _artistService;
        this.titulo = "Artista";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
        this.next_page = 1;
        this.prev_page = 1;
      }

      _createClass(ArtistListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.identity);
          this.getArtist();
        }
      }, {
        key: "getArtist",
        value: function getArtist() {
          var _this15 = this;

          this._route.params.forEach(function (params) {
            var page = +params['page']; // utilizo el mas para comvertir a numero el parametro page

            if (!page) {
              page = 1;
            } else {
              _this15.next_page = page + 1;
              _this15.prev_page = page - 1;

              if (_this15.prev_page == 0) {
                _this15.prev_page = 1;
              }

              _this15._artistService.getArtists(_this15.token, page).subscribe(function (res) {
                if (!res.artists) {
                  _this15._router.navigate(['/']);
                } else {
                  _this15.artists = res.artists;
                  console.log(_this15.artists);
                }
              }, function (err) {
                var alertMessage = err;

                if (alertMessage != null) {
                  var body = JSON.parse(err._body); //this.alertMessage = body.message;

                  console.log(err);
                }
              });
            }
          });
        }
      }, {
        key: "OndeleteConfirm",
        value: function OndeleteConfirm(id) {
          this.confirmado = id;
        }
      }, {
        key: "onCancelArtist",
        value: function onCancelArtist() {
          this.confirmado = null;
        }
      }, {
        key: "onDeleteArtist",
        value: function onDeleteArtist(id) {
          var _this16 = this;

          this._artistService.deleteArtist(this.token, id).subscribe(function (res) {
            if (!res.artist) {
              alert('Error en el servidor');
            }

            _this16.getArtist();
          }, function (err) {
            var alertMessage = err;

            if (alertMessage != null) {
              var body = JSON.parse(err._body); //this.alertMessage = body.message;

              console.log(err);
            }
          });
        }
      }]);

      return ArtistListComponent;
    }();

    ArtistListComponent.ɵfac = function ArtistListComponent_Factory(t) {
      return new (t || ArtistListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"]));
    };

    ArtistListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArtistListComponent,
      selectors: [["app-artist-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"]])],
      decls: 1,
      vars: 1,
      consts: [["class", "head-page", 4, "ngIf"], [1, "head-page"], ["class", "btn btn-light", 3, "routerLink", 4, "ngIf"], ["aria-label", "Page navigation example"], [1, "pagination"], [1, "page-item"], [1, "page-link", 3, "routerLink"], ["class", "artist_list", 4, "ngIf"], [1, "btn", "btn-light", 3, "routerLink"], [1, "artist_list"], ["class", " artist-item", 4, "ngFor", "ngForOf"], [1, "artist-item"], [1, "artist-img"], [3, "src"], [1, "artist-container"], ["class", "artist-name", 4, "ngIf"], ["id", "borderr", 1, "artist-name", 3, "routerLink"], ["class", "seguro", 4, "ngIf"], [1, "artist-name"], [3, "routerLink"], [3, "click"], [1, "seguro"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-primary", 3, "click"]],
      template: function ArtistListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArtistListComponent_div_0_Template, 13, 9, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["a[_ngcontent-%COMP%]{\r\n    color: black;\r\n}\r\n.artist_list[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n    justify-content: space-around;\r\n    align-content: center;\r\n    \r\n    \r\n}\r\n.artist-item[_ngcontent-%COMP%]{\r\n    flex-basis: 260px;\r\n    height: 400px;        \r\n    border: 1px solid  #84BD00;\r\n    margin-top: 10px;\r\n \r\n}\r\n.artist-img[_ngcontent-%COMP%]{\r\n    height: 245px;    \r\n    overflow: hidden;\r\n    background-color: wheat;\r\n    width:260px;\r\n    \r\n}\r\n.artist-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  \r\n}\r\n.artist-container[_ngcontent-%COMP%]{\r\n    background: #222;\r\n    height: 152px;\r\n    border-top: 1px solid #84BD00;  \r\n    \r\n}\r\n.artist-name[_ngcontent-%COMP%]{   \r\n    \r\n    color: white;\r\n    padding: 10px;\r\n    display: block;\r\n    text-align: center;\r\n    \r\n}\r\n.artist-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\nul[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n}\r\n#borderr[_ngcontent-%COMP%]{\r\n    width: 260px;\r\n    overflow:hidden;\r\n    white-space:nowrap;\r\n    text-overflow: ellipsis;\r\n     border-top: 1px solid #84BD00;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpc3QtbGlzdC9hcnRpc3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLHFCQUFxQjs7O0FBR3pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixXQUFXOztBQUVmO0FBQ0E7RUFDRSxZQUFZOztBQUVkO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2Qjs7QUFFakM7QUFDQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtLQUN0Qiw2QkFBNkI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FydGlzdC1saXN0L2FydGlzdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5hcnRpc3RfbGlzdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4uYXJ0aXN0LWl0ZW17XHJcbiAgICBmbGV4LWJhc2lzOiAyNjBweDtcclxuICAgIGhlaWdodDogNDAwcHg7ICAgICAgICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICAjODRCRDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuIFxyXG59XHJcbi5hcnRpc3QtaW1ne1xyXG4gICAgaGVpZ2h0OiAyNDVweDsgICAgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XHJcbiAgICB3aWR0aDoyNjBweDtcclxuICAgIFxyXG59ICAgXHJcbi5hcnRpc3QtaW1nIGltZ3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgXHJcbn1cclxuLmFydGlzdC1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgaGVpZ2h0OiAxNTJweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjODRCRDAwOyAgXHJcbiAgICBcclxufVxyXG4uYXJ0aXN0LW5hbWV7ICAgXHJcbiAgICBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbi5hcnRpc3QtbmFtZSBhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59IFxyXG51bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuI2JvcmRlcnJ7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzg0QkQwMDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtistListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-artist-list',
          templateUrl: './artist-list.component.html',
          styleUrls: ['./artist-list.component.css'],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _services_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/edit-song/edit-song.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/edit-song/edit-song.component.ts ***!
    \*************************************************************/

  /*! exports provided: EditSongComponent */

  /***/
  function srcAppComponentsEditSongEditSongComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditSongComponent", function () {
      return EditSongComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/global */
    "./src/app/services/global.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_song_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/song.service */
    "./src/app/services/song.service.ts");
    /* harmony import */


    var _services_album_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/album.service */
    "./src/app/services/album.service.ts");
    /* harmony import */


    var _services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/upload.service */
    "./src/app/services/upload.service.ts");
    /* harmony import */


    var src_app_models_song__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/song */
    "./src/app/models/song.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function EditSongComponent_div_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.alertMessage);
      }
    }

    function EditSongComponent_div_0_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El n\xFAmero de la cancion es obligatoria");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditSongComponent_div_0_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El titulo es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditSongComponent_div_0_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La Duration es Obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditSongComponent_div_0_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "audio", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " El navegador no soporta la reproduccion del audio ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r10.url + "get_song/" + ctx_r10.song.file, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function EditSongComponent_div_0_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditSongComponent_div_0_div_25_div_1_Template, 4, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sube la el fichero de audio ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditSongComponent_div_0_div_25_Template_input_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.fileChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "subir el fichero");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.song.file && ctx_r9.song.file != "null");
      }
    }

    function EditSongComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditSongComponent_div_0_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditSongComponent_div_0_div_6_Template, 3, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "N\xFAmero");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSongComponent_div_0_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.song.number = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditSongComponent_div_0_span_12_Template, 2, 0, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Titulo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSongComponent_div_0_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.song.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EditSongComponent_div_0_span_18_Template, 2, 0, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Duration");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditSongComponent_div_0_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.song.duration = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EditSongComponent_div_0_span_24_Template, 2, 0, "span", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EditSongComponent_div_0_div_25_Template, 9, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.titulo + ctx_r0.album, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.alertMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.song.number);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r7.valid && _r7.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.song.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r5.valid && _r5.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.song.duration);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r7.valid && _r7.touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0._isEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r1.form.valid);
      }
    }

    var EditSongComponent = /*#__PURE__*/function () {
      function EditSongComponent(_route, _router, _userService, _albumService, _songService, _UploadService) {
        _classCallCheck(this, EditSongComponent);

        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._albumService = _albumService;
        this._songService = _songService;
        this._UploadService = _UploadService;
        this.titulo = "Editar Cancion ";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
        this.song = new src_app_models_song__WEBPACK_IMPORTED_MODULE_6__["Song"]("1", "", "", "", "");
        this._isEdit = true;
        this.album = "";
      }

      _createClass(EditSongComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSong();
        }
      }, {
        key: "getSong",
        value: function getSong() {
          var _this17 = this;

          this._route.params.forEach(function (params) {
            var id = params['id'];

            _this17._songService.getSong(_this17.token, id).subscribe(function (res) {
              if (!res.song) {
                console.log(res);
              } else {
                _this17.song = res.song;
              }
            }, function (err) {
              var alertMessage = err;

              if (alertMessage != null) {
                var body = JSON.parse(err._body);
                _this17.alertMessage = body.message;
                console.log(err);
              }
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this18 = this;

          this._route.params.forEach(function (params) {
            var id = params['id'];

            _this18._songService.editSong(_this18.token, id, _this18.song).subscribe(function (res) {
              if (!res.song) {
                console.log(res);
              } else {
                _this18.alertMessage = "¡La canción se ha actualizado correctamente !"; //subir el fichero de audio

                if (!_this18.filesToUpload) {
                  console.log(res);

                  _this18._router.navigate(['/album', res.song.album]);
                } else {
                  _this18._UploadService.makeFileRequest(_this18.url + 'upload_song/' + id, [], _this18.filesToUpload, _this18.token, 'file').then(function (result) {
                    _this18._router.navigate(['/album', res.song.album]);
                  }, function (error) {
                    console.log(error);
                  });
                }
              }
            }, function (err) {
              var alertMessage = err;

              if (alertMessage != null) {
                var body = JSON.parse(err._body);
                _this18.alertMessage = body.message;
                console.log(err);
              }
            });
          });
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(fileInput) {
          this.filesToUpload = fileInput.target.files;
        }
      }]);

      return EditSongComponent;
    }();

    EditSongComponent.ɵfac = function EditSongComponent_Factory(t) {
      return new (t || EditSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]));
    };

    EditSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditSongComponent,
      selectors: [["app-edit-song"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"], _services_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]])],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "ngSubmit"], ["formSong", "ngForm"], [1, "container"], ["class", "alert alert-info", 4, "ngIf"], [1, "form-group", "col-md-6", "col-lg-4"], ["type", "text", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["d", "ngModel"], ["type", "text", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["type", "text", "name", "duration", 1, "form-control", 3, "ngModel", "ngModelChange"], ["duration", "ngModel"], [1, "text-right", "col-lg-4", "col-md-6"], ["type", "submit", "value", "canci\xF3n", 1, "btn", "btn-outline-light", "pull-right", 3, "disabled"], [1, "alert", "alert-info"], ["class", "form-group col-md-6 col-lg-4", 4, "ngIf"], [1, "custom-file"], ["type", "file", "id", "customFile", 1, "custom-file-input", 3, "change"], ["for", "customFile", 1, "custom-file-label"], ["controls", ""], ["type", "audio/mpeg", 3, "src"]],
      template: function EditSongComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditSongComponent_div_0_Template, 28, 10, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.identity && ctx.identity.role == "ROLE_ADMIN");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1zb25nL2VkaXQtc29uZy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-song',
          templateUrl: '../add-song/add-song.component.html',
          styleUrls: ['./edit-song.component.css'],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"], _services_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _services_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"]
        }, {
          type: _services_song_service__WEBPACK_IMPORTED_MODULE_3__["SongService"]
        }, {
          type: _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/artist", 1];
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 18,
      vars: 2,
      consts: [[1, "jumbotron"], [1, "container"], [1, "display-3"], [1, "fas", "fa-laptop-code", "d-inline"], [1, "btn", "btn-success", "btn-lg", 3, "routerLink"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "APP-MUSIC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bienvenido a la ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "aplicacion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " creada por : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "David Matos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "HR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Desarrollador Web Full Stack especializado en Tecnologia Javascript,dominando librerias como React y Framework como Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Learn more \xBB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/player/player.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/player/player.component.ts ***!
    \*******************************************************/

  /*! exports provided: PlayerComponent */

  /***/
  function srcAppComponentsPlayerPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () {
      return PlayerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_song__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/song */
    "./src/app/models/song.ts");
    /* harmony import */


    var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/global */
    "./src/app/services/global.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PlayerComponent_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.url + "get-img-album/" + ctx_r0.song.album.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PlayerComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PlayerComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.song.album.artist.name, " ");
      }
    }

    var PlayerComponent = /*#__PURE__*/function () {
      function PlayerComponent() {
        _classCallCheck(this, PlayerComponent);

        this.url = _services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
      }

      _createClass(PlayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var SONG = JSON.parse(localStorage.getItem('sound_song'));

          if (SONG) {
            this.song = SONG;
            console.log(this.song);
          } else {
            this.song = new _models_song__WEBPACK_IMPORTED_MODULE_1__["Song"]("1", "", "", "", "");
          }
        }
      }]);

      return PlayerComponent;
    }();

    PlayerComponent.ɵfac = function PlayerComponent_Factory(t) {
      return new (t || PlayerComponent)();
    };

    PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayerComponent,
      selectors: [["app-player"]],
      decls: 12,
      vars: 5,
      consts: [[1, "album-image"], ["class", "image", 4, "ngIf"], [1, "audio-file"], ["id", "play-song-title"], ["id", "play-song-artist", 4, "ngIf"], ["controls", "", "id", "player", 1, "player-audio"], ["id", "mp3-source", "type", "audio/mpeg", 3, "src"], [1, "image"], ["id", "play-image-album", 3, "src"], ["src", "assets/image/default.jpg", "alt", "default", "id", "play-image-album"], ["id", "play-song-artist"]],
      template: function PlayerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerComponent_span_1_Template, 2, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerComponent_div_2_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Reproduciendo ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayerComponent_span_8_Template, 2, 1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "audio", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "source", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " El navegador no soporta la reproduccion del audio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.song.album);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.song.album);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.song.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.song.artist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.url + "get_song/" + ctx.song.file, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".image[_ngcontent-%COMP%]{    \r\n    margin: 10px;\r\n    overflow: hidden;\r\n    float: left;\r\n    margin-right: 30px;\r\n    border:1px solid white;\r\n    border-radius: 5px;\r\n  }\r\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 130px;\r\n    height: 130px;\r\n      \r\n  }\r\n  .audio-file[_ngcontent-%COMP%]{\r\n    float: left;\r\n    width: 70%;\r\n    margin: 10px;   \r\n  }\r\n  .audio-file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n      display: inline-block;\r\n      margin: 0px;\r\n      padding-right: 20px;\r\n     \r\n  }\r\n  .audio-file[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    padding: 0px 5px;\r\n  }\r\n  .player-audio[_ngcontent-%COMP%]{\r\n      display: block;\r\n      width: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7O0VBRWY7RUFDQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtFQUNkO0VBQ0E7TUFDSSxxQkFBcUI7TUFDckIsV0FBVztNQUNYLG1CQUFtQjs7RUFFdkI7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7RUFDQTtNQUNJLGNBQWM7TUFDZCxXQUFXO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXsgICAgXHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICAuaW1hZ2UgaW1ne1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgXHJcbiAgfVxyXG4gIC5hdWRpby1maWxle1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAxMHB4OyAgIFxyXG4gIH1cclxuICAuYXVkaW8tZmlsZSBzcGFue1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgIFxyXG4gIH1cclxuICAuYXVkaW8tZmlsZSBwe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gIH1cclxuICAucGxheWVyLWF1ZGlve1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-player',
          templateUrl: './player.component.html',
          styleUrls: ['./player.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-edit/user-edit.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/user-edit/user-edit.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserEditComponent */

  /***/
  function srcAppComponentsUserEditUserEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserEditComponent", function () {
      return UserEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/global */
    "./src/app/services/global.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserEditComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.alertUpdate, " ");
      }
    }

    function UserEditComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El email es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserEditComponent_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El nombre es obligatorio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserEditComponent_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Los apellidos son Obligatorios");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserEditComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r8.url + "get-image/" + ctx_r8.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var UserEditComponent = /*#__PURE__*/function () {
      function UserEditComponent(_userService) {
        _classCallCheck(this, UserEditComponent);

        this._userService = _userService;
        this.titulo = "Actualizar mis datos "; //LocalStorage

        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].url;
      }

      _createClass(UserEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('user-edit.component.ts cargadi');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this19 = this;

          this._userService.update_user(this.user).subscribe(function (res) {
            if (!res.user) {
              _this19.alertUpdate = "El usuario no se ha actualizado";
            } else {
              //this.user = res.user; esto lo malogra
              localStorage.setItem('identity', JSON.stringify(_this19.user));
              document.getElementById('nameandsurname').innerHTML = _this19.user.name + _this19.user.surname;

              if (!_this19.filesToUpload) {//redirrecion
              } else {
                _this19.makeFileRequest(_this19.url + 'upload-image/' + _this19.user._id, [], _this19.filesToUpload).then(function (result) {
                  _this19.user.image = result.image;
                  localStorage.setItem('identity', JSON.stringify(_this19.user));
                  var image_path = _this19.url + 'get-image/' + _this19.user.image;
                  document.getElementById('img-logged').setAttribute('src', image_path);
                  console.log(_this19.user);
                });
              }

              _this19.alertUpdate = "El usuario se ha actualizado correctamente";
            }
          }, function (err) {
            var alertUpdate = err;

            if (alertUpdate != null) {
              var body = JSON.parse(err._body);
              _this19.alertUpdate = body.message;
              console.log(err);
            }
          });
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(fileInput) {
          this.filesToUpload = fileInput.target.files;
          console.log(this.filesToUpload);
        }
      }, {
        key: "makeFileRequest",
        value: function makeFileRequest(url, params, files) {
          var token = this.token;
          return new Promise(function (resolve, reject) {
            var formdata = new FormData();
            var xhr = new XMLHttpRequest();

            for (var i = 0; i < files.length; i++) {
              formdata.append('image', files[i], files[i].name);
            }

            xhr.onreadystatechange = function () {
              if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                  resolve(JSON.parse(xhr.response));
                } else {
                  reject(xhr.response);
                }
              }
            };

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formdata);
          });
        }
      }]);

      return UserEditComponent;
    }();

    UserEditComponent.ɵfac = function UserEditComponent_Factory(t) {
      return new (t || UserEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    UserEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserEditComponent,
      selectors: [["app-user-edit"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])],
      decls: 34,
      vars: 9,
      consts: [[1, "col-6", 3, "ngSubmit"], ["userUpdateForm", "ngForm"], ["class", "alert alert-info", 4, "ngIf"], [1, "form-group"], ["for", "inputEmail4"], ["type", "emai l", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], [1, "form-row"], [1, "form-group", "col-md-6"], ["type", "text", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["type", "text", "name", "surname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["surname", "ngModel"], [1, "custom-file"], ["type", "file", "id", "customFile", 1, "custom-file-input", 3, "change"], ["for", "customFile", 1, "custom-file-label"], ["class", "form-group col-md-6", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-outline-light"], [1, "alert", "alert-info"], ["alt", "", 1, "img-thumbnail", 3, "src"]],
      template: function UserEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserEditComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserEditComponent_div_4_Template, 3, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Correo Electronico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.user.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserEditComponent_span_10_Template, 2, 0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.user.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserEditComponent_span_17_Template, 2, 0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Surname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserEditComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.user.surname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserEditComponent_span_23_Template, 2, 0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sube la Foto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserEditComponent_Template_input_change_28_listener($event) {
            return ctx.fileChangeEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Elige la imagen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UserEditComponent_div_31_Template, 2, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Update data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertUpdate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r2.valid && _r2.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r4.valid && _r4.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.surname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r6.valid && _r6.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.image && ctx.user.image != "null");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-edit',
          templateUrl: './user-edit.component.html',
          styleUrls: ['./user-edit.component.css'],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/album.ts":
  /*!*********************************!*\
    !*** ./src/app/models/album.ts ***!
    \*********************************/

  /*! exports provided: Album */

  /***/
  function srcAppModelsAlbumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Album", function () {
      return Album;
    });

    var Album = function Album(_id, title, description, year, image, artist) {
      _classCallCheck(this, Album);

      this._id = _id;
      this.title = title;
      this.description = description;
      this.year = year;
      this.image = image;
      this.artist = artist;
    };
    /***/

  },

  /***/
  "./src/app/models/artist.ts":
  /*!**********************************!*\
    !*** ./src/app/models/artist.ts ***!
    \**********************************/

  /*! exports provided: Artist */

  /***/
  function srcAppModelsArtistTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Artist", function () {
      return Artist;
    });

    var Artist = function Artist(_id, name, description, image) {
      _classCallCheck(this, Artist);

      this._id = _id;
      this.name = name;
      this.description = description;
      this.image = image;
    };
    /***/

  },

  /***/
  "./src/app/models/song.ts":
  /*!********************************!*\
    !*** ./src/app/models/song.ts ***!
    \********************************/

  /*! exports provided: Song */

  /***/
  function srcAppModelsSongTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Song", function () {
      return Song;
    });

    var Song = function Song(number, name, duration, file, album) {
      _classCallCheck(this, Song);

      this.number = number;
      this.name = name;
      this.duration = duration;
      this.file = file;
      this.album = album;
    };
    /***/

  },

  /***/
  "./src/app/models/user.ts":
  /*!********************************!*\
    !*** ./src/app/models/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User(_id, name, surname, email, password, role, image) {
      _classCallCheck(this, User);

      this._id = _id;
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.password = password;
      this.role = role;
      this.image = image;
    };
    /***/

  },

  /***/
  "./src/app/services/album.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/album.service.ts ***!
    \*******************************************/

  /*! exports provided: AlbumService */

  /***/
  function srcAppServicesAlbumServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumService", function () {
      return AlbumService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./global */
    "./src/app/services/global.ts");

    var AlbumService = /*#__PURE__*/function () {
      function AlbumService(_http) {
        _classCallCheck(this, AlbumService);

        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
      }

      _createClass(AlbumService, [{
        key: "getAlbums",
        value: function getAlbums(token) {
          var artistId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          var option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: headers
          });

          if (artistId == null) {
            return this._http.get(this.url + 'albums', option).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res.json();
            }));
          } else {
            return this._http.get(this.url + 'albums/' + artistId, option).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res.json();
            }));
          }
        }
      }, {
        key: "getAlbum",
        value: function getAlbum(token, id) {
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          var option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: headers
          });
          return this._http.get(this.url + 'album/' + id, option).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }, {
        key: "addAlbum",
        value: function addAlbum(token, album) {
          var params = JSON.stringify(album);
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          return this._http.post(this.url + 'album', params, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }, {
        key: "editAlbum",
        value: function editAlbum(token, id, album) {
          var params = JSON.stringify(album);
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          return this._http.put(this.url + 'album/' + id, params, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }, {
        key: "deleteAlbum",
        value: function deleteAlbum(token, id) {
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          var option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: headers
          });
          return this._http["delete"](this.url + 'album/' + id, option).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }]);

      return AlbumService;
    }();

    AlbumService.ɵfac = function AlbumService_Factory(t) {
      return new (t || AlbumService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]));
    };

    AlbumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlbumService,
      factory: AlbumService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/artist.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/artist.service.ts ***!
    \********************************************/

  /*! exports provided: ArtistService */

  /***/
  function srcAppServicesArtistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtistService", function () {
      return ArtistService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./global */
    "./src/app/services/global.ts");

    var ArtistService = /*#__PURE__*/function () {
      function ArtistService(_http) {
        _classCallCheck(this, ArtistService);

        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
      }

      _createClass(ArtistService, [{
        key: "getArtists",
        value: function getArtists(token, page) {
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          var option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: headers
          });
          return this._http.get(this.url + 'artists/' + page, option).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }, {
        key: "getArtist",
        value: function getArtist(token, id) {
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          var option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: headers
          });
          return this._http.get(this.url + 'artist/' + id, option).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }, {
        key: "addArtist",
        value: function addArtist(token, artist) {
          var params = JSON.stringify(artist);
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          return this._http.post(this.url + 'artist', params, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }, {
        key: "updateArtist",
        value: function updateArtist(token, id, artist) {
          var params = JSON.stringify(artist);
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          return this._http.put(this.url + 'artist/' + id, params, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }, {
        key: "deleteArtist",
        value: function deleteArtist(token, id) {
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          var option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: headers
          });
          return this._http["delete"](this.url + 'artist/' + id, option).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }]);

      return ArtistService;
    }();

    ArtistService.ɵfac = function ArtistService_Factory(t) {
      return new (t || ArtistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]));
    };

    ArtistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ArtistService,
      factory: ArtistService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/global.ts":
  /*!************************************!*\
    !*** ./src/app/services/global.ts ***!
    \************************************/

  /*! exports provided: GLOBAL */

  /***/
  function srcAppServicesGlobalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GLOBAL", function () {
      return GLOBAL;
    });

    var GLOBAL = {
      url: 'https://app-music-david-matos.herokuapp.com/api/'
    };
    /***/
  },

  /***/
  "./src/app/services/song.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/song.service.ts ***!
    \******************************************/

  /*! exports provided: SongService */

  /***/
  function srcAppServicesSongServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SongService", function () {
      return SongService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./global */
    "./src/app/services/global.ts");

    var SongService = /*#__PURE__*/function () {
      function SongService(_http) {
        _classCallCheck(this, SongService);

        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
      }

      _createClass(SongService, [{
        key: "getSong",
        value: function getSong(token, id) {
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          var option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: headers
          });
          return this._http.get(this.url + 'song/' + id, option).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }, {
        key: "getSongs",
        value: function getSongs(token) {
          var albumId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          var option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: headers
          });

          if (albumId == null) {
            return this._http.get(this.url + 'songs', option).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res.json();
            }));
          } else {
            return this._http.get(this.url + 'songs/' + albumId, option).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              return res.json();
            }));
          }
        }
      }, {
        key: "addSong",
        value: function addSong(token, song) {
          var params = JSON.stringify(song);
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          return this._http.post(this.url + 'song', params, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }, {
        key: "editSong",
        value: function editSong(token, id, song) {
          var params = JSON.stringify(song);
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          return this._http.put(this.url + 'song/' + id, params, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }, {
        key: "deleteSong",
        value: function deleteSong(token, id) {
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': token
          });
          var option = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: headers
          });
          return this._http["delete"](this.url + 'song/' + id, option).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }]);

      return SongService;
    }();

    SongService.ɵfac = function SongService_Factory(t) {
      return new (t || SongService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]));
    };

    SongService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SongService,
      factory: SongService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SongService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/upload.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/upload.service.ts ***!
    \********************************************/

  /*! exports provided: UploadService */

  /***/
  function srcAppServicesUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadService", function () {
      return UploadService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./global */
    "./src/app/services/global.ts");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

    var UploadService = /*#__PURE__*/function () {
      function UploadService(_http) {
        _classCallCheck(this, UploadService);

        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
      }

      _createClass(UploadService, [{
        key: "makeFileRequest",
        value: function makeFileRequest(url, params, files, token, name) {
          return new Promise(function (resolve, reject) {
            var formdata = new FormData();
            var xhr = new XMLHttpRequest();

            for (var i = 0; i < files.length; i++) {
              formdata.append(name, files[i], files[i].name);
            }

            xhr.onreadystatechange = function () {
              if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                  resolve(JSON.parse(xhr.response));
                } else {
                  reject(xhr.response);
                }
              }
            };

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formdata);
          });
        }
      }]);

      return UploadService;
    }();

    UploadService.ɵfac = function UploadService_Factory(t) {
      return new (t || UploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]));
    };

    UploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UploadService,
      factory: UploadService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./global */
    "./src/app/services/global.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(_http) {
        _classCallCheck(this, UserService);

        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
      }

      _createClass(UserService, [{
        key: "signup",
        value: function signup(user_to_login) {
          var gethash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          if (gethash != null) {
            user_to_login.gethash = gethash;
          }

          var json = JSON.stringify(user_to_login);
          var params = json;
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
          });
          return this._http.post(this.url + 'login', params, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }, {
        key: "register",
        value: function register(user_to_register) {
          var json = JSON.stringify(user_to_register);
          var params = json;
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
          });
          return this._http.post(this.url + 'register', params, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }, {
        key: "update_user",
        value: function update_user(user_to_update) {
          var json = JSON.stringify(user_to_update);
          var params = json;
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
          });
          return this._http.put(this.url + 'update-user/' + user_to_update._id, params, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
          }));
        }
      }, {
        key: "getIdentity",
        value: function getIdentity() {
          var identity = JSON.parse(localStorage.getItem('identity'));

          if (identity != "undefined") {
            this.identity = identity;
          } else {
            this.identity = null;
          }

          return this.identity;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          var token = localStorage.getItem('token');

          if (token != "undefined") {
            this.token = token;
          } else {
            this.token = null;
          }

          return this.token;
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\david\Desktop\Cursoudemy\app-music\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map