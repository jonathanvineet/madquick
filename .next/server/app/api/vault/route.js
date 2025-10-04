"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/vault/route";
exports.ids = ["app/api/vault/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvault%2Froute&page=%2Fapi%2Fvault%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvault%2Froute.ts&appDir=%2Fworkspaces%2Fmadquick%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fmadquick&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvault%2Froute&page=%2Fapi%2Fvault%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvault%2Froute.ts&appDir=%2Fworkspaces%2Fmadquick%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fmadquick&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _workspaces_madquick_src_app_api_vault_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/vault/route.ts */ \"(rsc)/./src/app/api/vault/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/vault/route\",\n        pathname: \"/api/vault\",\n        filename: \"route\",\n        bundlePath: \"app/api/vault/route\"\n    },\n    resolvedPagePath: \"/workspaces/madquick/src/app/api/vault/route.ts\",\n    nextConfigOutput,\n    userland: _workspaces_madquick_src_app_api_vault_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/vault/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ2YXVsdCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdmF1bHQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ2YXVsdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZ3b3Jrc3BhY2VzJTJGbWFkcXVpY2slMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRndvcmtzcGFjZXMlMkZtYWRxdWljayZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDRDtBQUM1RTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL21hZHF1aWNrLz80YTFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi93b3Jrc3BhY2VzL21hZHF1aWNrL3NyYy9hcHAvYXBpL3ZhdWx0L3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS92YXVsdC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3ZhdWx0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS92YXVsdC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi93b3Jrc3BhY2VzL21hZHF1aWNrL3NyYy9hcHAvYXBpL3ZhdWx0L3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS92YXVsdC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvault%2Froute&page=%2Fapi%2Fvault%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvault%2Froute.ts&appDir=%2Fworkspaces%2Fmadquick%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fmadquick&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/vault/route.ts":
/*!************************************!*\
  !*** ./src/app/api/vault/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _models_VaultItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/VaultItem */ \"(rsc)/./src/models/VaultItem.ts\");\n\n\n\n\n\nasync function GET() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"unauthorized\"\n    }, {\n        status: 401\n    });\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.dbConnect)();\n    const items = await _models_VaultItem__WEBPACK_IMPORTED_MODULE_4__.VaultItem.find({\n        userId: session.user.id\n    }).sort({\n        updatedAt: -1\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(items.map((i)=>({\n            _id: i._id.toString(),\n            ciphertext: i.ciphertext,\n            iv: i.iv,\n            createdAt: i.createdAt,\n            updatedAt: i.updatedAt\n        })));\n}\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session?.user) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"unauthorized\"\n    }, {\n        status: 401\n    });\n    const { ciphertext, iv } = await req.json();\n    if (!ciphertext || !iv) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"missing fields\"\n    }, {\n        status: 400\n    });\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.dbConnect)();\n    const created = await _models_VaultItem__WEBPACK_IMPORTED_MODULE_4__.VaultItem.create({\n        userId: session.user.id,\n        ciphertext,\n        iv\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        _id: created._id.toString()\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS92YXVsdC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNFO0FBQ0o7QUFDSjtBQUNVO0FBRXhDLGVBQWVLO0lBQ3BCLE1BQU1DLFVBQVUsTUFBTUwsMkRBQWdCQSxDQUFDQyxrREFBV0E7SUFDbEQsSUFBSSxDQUFDSSxTQUFTQyxNQUFNLE9BQU9QLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFlLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBQ3RGLE1BQU1QLGtEQUFTQTtJQUNmLE1BQU1RLFFBQVEsTUFBTVAsd0RBQVNBLENBQUNRLElBQUksQ0FBQztRQUFFQyxRQUFRLFFBQVNOLElBQUksQ0FBU08sRUFBRTtJQUFDLEdBQUdDLElBQUksQ0FBQztRQUFFQyxXQUFXLENBQUM7SUFBRTtJQUM5RixPQUFPaEIscURBQVlBLENBQUNRLElBQUksQ0FBQ0csTUFBTU0sR0FBRyxDQUFDLENBQUNDLElBQVk7WUFBRUMsS0FBS0QsRUFBRUMsR0FBRyxDQUFDQyxRQUFRO1lBQUlDLFlBQVlILEVBQUVHLFVBQVU7WUFBRUMsSUFBSUosRUFBRUksRUFBRTtZQUFFQyxXQUFXTCxFQUFFSyxTQUFTO1lBQUVQLFdBQVdFLEVBQUVGLFNBQVM7UUFBQztBQUM5SjtBQUVPLGVBQWVRLEtBQUtDLEdBQVk7SUFDckMsTUFBTW5CLFVBQVUsTUFBTUwsMkRBQWdCQSxDQUFDQyxrREFBV0E7SUFDbEQsSUFBSSxDQUFDSSxTQUFTQyxNQUFNLE9BQU9QLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFlLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBQ3RGLE1BQU0sRUFBRVcsVUFBVSxFQUFFQyxFQUFFLEVBQUUsR0FBRyxNQUFNRyxJQUFJakIsSUFBSTtJQUN6QyxJQUFJLENBQUNhLGNBQWMsQ0FBQ0MsSUFBSSxPQUFPdEIscURBQVlBLENBQUNRLElBQUksQ0FBQztRQUFFQyxPQUFPO0lBQWlCLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBQzVGLE1BQU1QLGtEQUFTQTtJQUNmLE1BQU11QixVQUFlLE1BQU10Qix3REFBU0EsQ0FBQ3VCLE1BQU0sQ0FBQztRQUFFZCxRQUFRLFFBQVNOLElBQUksQ0FBU08sRUFBRTtRQUFFTztRQUFZQztJQUFHO0lBQy9GLE9BQU90QixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1FBQUVXLEtBQUtPLFFBQVFQLEdBQUcsQ0FBQ0MsUUFBUTtJQUFHO0FBQ3pEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFkcXVpY2svLi9zcmMvYXBwL2FwaS92YXVsdC9yb3V0ZS50cz84NTJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL2xpYi9hdXRoJztcbmltcG9ydCB7IGRiQ29ubmVjdCB9IGZyb20gJ0AvbGliL2RiJztcbmltcG9ydCB7IFZhdWx0SXRlbSB9IGZyb20gJ0AvbW9kZWxzL1ZhdWx0SXRlbSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgaWYgKCFzZXNzaW9uPy51c2VyKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ3VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgYXdhaXQgZGJDb25uZWN0KCk7XG4gIGNvbnN0IGl0ZW1zID0gYXdhaXQgVmF1bHRJdGVtLmZpbmQoeyB1c2VySWQ6IChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZCB9KS5zb3J0KHsgdXBkYXRlZEF0OiAtMSB9KTtcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGl0ZW1zLm1hcCgoaTogYW55KSA9PiAoeyBfaWQ6IGkuX2lkLnRvU3RyaW5nKCksIGNpcGhlcnRleHQ6IGkuY2lwaGVydGV4dCwgaXY6IGkuaXYsIGNyZWF0ZWRBdDogaS5jcmVhdGVkQXQsIHVwZGF0ZWRBdDogaS51cGRhdGVkQXQgfSkpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgaWYgKCFzZXNzaW9uPy51c2VyKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ3VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgY29uc3QgeyBjaXBoZXJ0ZXh0LCBpdiB9ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgaWYgKCFjaXBoZXJ0ZXh0IHx8ICFpdikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdtaXNzaW5nIGZpZWxkcycgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgYXdhaXQgZGJDb25uZWN0KCk7XG4gIGNvbnN0IGNyZWF0ZWQ6IGFueSA9IGF3YWl0IFZhdWx0SXRlbS5jcmVhdGUoeyB1c2VySWQ6IChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZCwgY2lwaGVydGV4dCwgaXYgfSk7XG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IF9pZDogY3JlYXRlZC5faWQudG9TdHJpbmcoKSB9KTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJkYkNvbm5lY3QiLCJWYXVsdEl0ZW0iLCJHRVQiLCJzZXNzaW9uIiwidXNlciIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsIml0ZW1zIiwiZmluZCIsInVzZXJJZCIsImlkIiwic29ydCIsInVwZGF0ZWRBdCIsIm1hcCIsImkiLCJfaWQiLCJ0b1N0cmluZyIsImNpcGhlcnRleHQiLCJpdiIsImNyZWF0ZWRBdCIsIlBPU1QiLCJyZXEiLCJjcmVhdGVkIiwiY3JlYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/vault/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst authOptions = {\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            authorize: async (credentials)=>{\n                const email = credentials?.email;\n                const password = credentials?.password;\n                if (!email || !password) return null;\n                await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__.dbConnect)();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__.User.findOne({\n                    email: email.toLowerCase()\n                });\n                if (!user) return null;\n                const valid = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compare(password, user.passwordHash);\n                if (!valid) return null;\n                return {\n                    id: user._id.toString(),\n                    email: user.email\n                };\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/sign-in\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) token.uid = user.id;\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) session.user.id = token.uid;\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBEO0FBQ3JCO0FBQ0E7QUFDUDtBQUV2QixNQUFNSSxjQUErQjtJQUMxQ0MsU0FBUztRQUFFQyxVQUFVO0lBQU07SUFDM0JDLFdBQVc7UUFDVFAsMkVBQVdBLENBQUM7WUFDVlEsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFPO2dCQUN0Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBRSxXQUFXLE9BQU9MO2dCQUNoQixNQUFNQyxRQUFRRCxhQUFhQztnQkFDM0IsTUFBTUcsV0FBV0osYUFBYUk7Z0JBQzlCLElBQUksQ0FBQ0gsU0FBUyxDQUFDRyxVQUFVLE9BQU87Z0JBQ2hDLE1BQU1aLGtEQUFTQTtnQkFDZixNQUFNYyxPQUFPLE1BQU1iLDhDQUFJQSxDQUFDYyxPQUFPLENBQUM7b0JBQUVOLE9BQU9BLE1BQU1PLFdBQVc7Z0JBQUc7Z0JBQzdELElBQUksQ0FBQ0YsTUFBTSxPQUFPO2dCQUNsQixNQUFNRyxRQUFRLE1BQU1mLHVEQUFjLENBQUNVLFVBQVVFLEtBQUtLLFlBQVk7Z0JBQzlELElBQUksQ0FBQ0YsT0FBTyxPQUFPO2dCQUN6QixPQUFPO29CQUFFRyxJQUFJLEtBQWNDLEdBQUcsQ0FBQ0MsUUFBUTtvQkFBSWIsT0FBTyxLQUFjQSxLQUFLO2dCQUFDO1lBQ2xFO1FBQ0Y7S0FDRDtJQUNEYyxPQUFPO1FBQUVDLFFBQVE7SUFBVztJQUM1QkMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFYixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTWEsTUFBTUMsR0FBRyxHQUFHLEtBQWNSLEVBQUU7WUFDdEMsT0FBT087UUFDVDtRQUNBLE1BQU12QixTQUFRLEVBQUVBLE9BQU8sRUFBRXVCLEtBQUssRUFBRTtZQUM5QixJQUFJdkIsUUFBUVUsSUFBSSxFQUFFLFFBQVNBLElBQUksQ0FBU00sRUFBRSxHQUFHTyxNQUFNQyxHQUFHO1lBQ3RELE9BQU94QjtRQUNUO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFkcXVpY2svLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgQ3JlZGVudGlhbHMgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG5pbXBvcnQgeyBkYkNvbm5lY3QgfSBmcm9tICdAL2xpYi9kYic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQC9tb2RlbHMvVXNlcic7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6ICdqd3QnIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzKHtcbiAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogJ0VtYWlsJywgdHlwZTogJ3RleHQnIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH1cbiAgICAgIH0sXG4gICAgICBhdXRob3JpemU6IGFzeW5jIChjcmVkZW50aWFscykgPT4ge1xuICAgICAgICBjb25zdCBlbWFpbCA9IGNyZWRlbnRpYWxzPy5lbWFpbDtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBjcmVkZW50aWFscz8ucGFzc3dvcmQ7XG4gICAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSByZXR1cm4gbnVsbDtcbiAgICAgICAgYXdhaXQgZGJDb25uZWN0KCk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKSB9KTtcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3QgdmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuICAgICAgICBpZiAoIXZhbGlkKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHsgaWQ6ICh1c2VyIGFzIGFueSkuX2lkLnRvU3RyaW5nKCksIGVtYWlsOiAodXNlciBhcyBhbnkpLmVtYWlsIH0gYXMgYW55O1xuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIHBhZ2VzOiB7IHNpZ25JbjogJy9zaWduLWluJyB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikgdG9rZW4udWlkID0gKHVzZXIgYXMgYW55KS5pZDtcbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSAoc2Vzc2lvbi51c2VyIGFzIGFueSkuaWQgPSB0b2tlbi51aWQgYXMgc3RyaW5nO1xuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfVxuICB9XG59O1xuIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzIiwiZGJDb25uZWN0IiwiVXNlciIsImJjcnlwdCIsImF1dGhPcHRpb25zIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kT25lIiwidG9Mb3dlckNhc2UiLCJ2YWxpZCIsImNvbXBhcmUiLCJwYXNzd29yZEhhc2giLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dbConnect: () => (/* binding */ dbConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet cached = global.mongoose;\nif (!cached) cached = global.mongoose = {\n    conn: null,\n    promise: null\n};\nasync function dbConnect() {\n    const uri = process.env.MONGODB_URI;\n    if (!uri) throw new Error(\"Missing MONGODB_URI\");\n    if (cached.conn) return cached.conn;\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri).then((m)=>m);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxJQUFJQyxTQUFTLE9BQWdCRCxRQUFRO0FBRXJDLElBQUksQ0FBQ0MsUUFBUUEsU0FBUyxPQUFnQkQsUUFBUSxHQUFHO0lBQUVHLE1BQU07SUFBTUMsU0FBUztBQUFLO0FBRXRFLGVBQWVDO0lBQ3BCLE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztJQUNuQyxJQUFJLENBQUNILEtBQUssTUFBTSxJQUFJSSxNQUFNO0lBQzFCLElBQUlULE9BQVFFLElBQUksRUFBRSxPQUFPRixPQUFRRSxJQUFJO0lBQ3JDLElBQUksQ0FBQ0YsT0FBUUcsT0FBTyxFQUFFO1FBQ3BCSCxPQUFRRyxPQUFPLEdBQUdKLHVEQUFnQixDQUFDTSxLQUFLTSxJQUFJLENBQUMsQ0FBQ0MsSUFBTUE7SUFDdEQ7SUFDQVosT0FBUUUsSUFBSSxHQUFHLE1BQU1GLE9BQVFHLE9BQU87SUFDcEMsT0FBT0gsT0FBUUUsSUFBSTtBQUNyQiIsInNvdXJjZXMiOlsid2VicGFjazovL21hZHF1aWNrLy4vc3JjL2xpYi9kYi50cz85ZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmxldCBjYWNoZWQgPSAoZ2xvYmFsIGFzIGFueSkubW9uZ29vc2UgYXMgeyBjb25uOiB0eXBlb2YgbW9uZ29vc2UgfCBudWxsOyBwcm9taXNlOiBQcm9taXNlPHR5cGVvZiBtb25nb29zZT4gfCBudWxsIH0gfCB1bmRlZmluZWQ7XG5cbmlmICghY2FjaGVkKSBjYWNoZWQgPSAoZ2xvYmFsIGFzIGFueSkubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG4gIGlmICghdXJpKSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgTU9OR09EQl9VUkknKTtcbiAgaWYgKGNhY2hlZCEuY29ubikgcmV0dXJuIGNhY2hlZCEuY29ubjtcbiAgaWYgKCFjYWNoZWQhLnByb21pc2UpIHtcbiAgICBjYWNoZWQhLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KHVyaSkudGhlbigobSkgPT4gbSk7XG4gIH1cbiAgY2FjaGVkIS5jb25uID0gYXdhaXQgY2FjaGVkIS5wcm9taXNlO1xuICByZXR1cm4gY2FjaGVkIS5jb25uO1xufVxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsImNvbm5lY3QiLCJ0aGVuIiwibSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        index: true\n    },\n    passwordHash: {\n        type: String,\n        required: true\n    },\n    salt: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZEO0FBVTdELE1BQU1FLGFBQWEsSUFBSUQsNENBQU1BLENBQVE7SUFDbkNFLE9BQU87UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtRQUFNQyxRQUFRO1FBQU1DLE9BQU87SUFBSztJQUNqRUMsY0FBYztRQUFFTCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDN0NJLE1BQU07UUFBRU4sTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0FBQ3ZDLEdBQUc7SUFBRUssWUFBWTtBQUFLO0FBRWYsTUFBTUMsT0FBcUJaLHdEQUFlLENBQUNZLElBQUksSUFBSVoscURBQWMsQ0FBUSxRQUFRRSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFkcXVpY2svLi9zcmMvbW9kZWxzL1VzZXIudHM/MDk2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCwgTW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXIgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkSGFzaDogc3RyaW5nOyAvLyBiY3J5cHQgaGFzaFxuICBzYWx0OiBzdHJpbmc7IC8vIGJhc2U2NCBzYWx0IGZvciBQQktERjJcbiAgY3JlYXRlZEF0OiBEYXRlO1xuICB1cGRhdGVkQXQ6IERhdGU7XG59XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hPElVc2VyPih7XG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSwgaW5kZXg6IHRydWUgfSxcbiAgcGFzc3dvcmRIYXNoOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgc2FsdDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSk7XG5cbmV4cG9ydCBjb25zdCBVc2VyOiBNb2RlbDxJVXNlcj4gPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbDxJVXNlcj4oJ1VzZXInLCBVc2VyU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsIlVzZXJTY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsImluZGV4IiwicGFzc3dvcmRIYXNoIiwic2FsdCIsInRpbWVzdGFtcHMiLCJVc2VyIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/VaultItem.ts":
/*!*********************************!*\
  !*** ./src/models/VaultItem.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VaultItem: () => (/* binding */ VaultItem)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst VaultItemSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    userId: {\n        type: String,\n        required: true,\n        index: true\n    },\n    ciphertext: {\n        type: String,\n        required: true\n    },\n    iv: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst VaultItem = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).VaultItem || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"VaultItem\", VaultItemSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1ZhdWx0SXRlbS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkQ7QUFVN0QsTUFBTUUsa0JBQWtCLElBQUlELDRDQUFNQSxDQUFhO0lBQzdDRSxRQUFRO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUMsT0FBTztJQUFLO0lBQ3BEQyxZQUFZO1FBQUVKLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUMzQ0csSUFBSTtRQUFFTCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7QUFDckMsR0FBRztJQUFFSSxZQUFZO0FBQUs7QUFFZixNQUFNQyxZQUErQlgsd0RBQWUsQ0FBQ1csU0FBUyxJQUFJWCxxREFBYyxDQUFhLGFBQWFFLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL21hZHF1aWNrLy4vc3JjL21vZGVscy9WYXVsdEl0ZW0udHM/NmY4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCwgTW9kZWwgfSBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZhdWx0SXRlbSBleHRlbmRzIERvY3VtZW50IHtcbiAgdXNlcklkOiBzdHJpbmc7IC8vIHJlZmVyZW5jZXMgVXNlci5faWRcbiAgY2lwaGVydGV4dDogc3RyaW5nOyAvLyBiYXNlNjQgQUVTLUdDTVxuICBpdjogc3RyaW5nOyAvLyBiYXNlNjQgMTItYnl0ZSBJVlxuICBjcmVhdGVkQXQ6IERhdGU7XG4gIHVwZGF0ZWRBdDogRGF0ZTtcbn1cblxuY29uc3QgVmF1bHRJdGVtU2NoZW1hID0gbmV3IFNjaGVtYTxJVmF1bHRJdGVtPih7XG4gIHVzZXJJZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCBpbmRleDogdHJ1ZSB9LFxuICBjaXBoZXJ0ZXh0OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgaXY6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9XG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSk7XG5cbmV4cG9ydCBjb25zdCBWYXVsdEl0ZW06IE1vZGVsPElWYXVsdEl0ZW0+ID0gbW9uZ29vc2UubW9kZWxzLlZhdWx0SXRlbSB8fCBtb25nb29zZS5tb2RlbDxJVmF1bHRJdGVtPignVmF1bHRJdGVtJywgVmF1bHRJdGVtU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsIlZhdWx0SXRlbVNjaGVtYSIsInVzZXJJZCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImluZGV4IiwiY2lwaGVydGV4dCIsIml2IiwidGltZXN0YW1wcyIsIlZhdWx0SXRlbSIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/VaultItem.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@panva","vendor-chunks/oidc-token-hash"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fvault%2Froute&page=%2Fapi%2Fvault%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvault%2Froute.ts&appDir=%2Fworkspaces%2Fmadquick%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fmadquick&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();