"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var $ = window["$"];
var PositionService = (function () {
    function PositionService() {
    }
    PositionService.prototype.isStaticPositioned = function (nativeEl) {
        return ($(nativeEl).css("position") || "static") === "static";
    };
    PositionService.prototype.positionElements = function (hostEl, targetEl, positionStr, bufferDistance, appendToBody) {
        if (positionStr === void 0) { positionStr = "top"; }
        if (bufferDistance === void 0) { bufferDistance = 0; }
        var position = this.breakPositionString(positionStr), $hostEl = $(hostEl), $targetEl = $(targetEl), hostElPos = appendToBody ? $hostEl.offset() : $hostEl.position();
        var shiftWidth = {
            center: function () {
                return hostElPos.left + ($hostEl.width() / 2) - ($targetEl.innerWidth() / 2);
            },
            left: function () {
                return hostElPos.left - $targetEl.innerWidth() - bufferDistance;
            },
            right: function () {
                return hostElPos.left + $hostEl.width() + bufferDistance;
            }
        };
        var shiftHeight = {
            center: function () {
                return hostElPos.top + ($hostEl.height() / 2) - ($targetEl.innerHeight() / 2);
            },
            top: function () {
                return hostElPos.top - $targetEl.innerHeight() - bufferDistance;
            },
            bottom: function () {
                return hostElPos.top + $hostEl.height() + bufferDistance;
            }
        };
        return {
            top: shiftHeight[position.vertical](),
            left: shiftWidth[position.horizontal]()
        };
    };
    PositionService.prototype.breakPositionString = function (positionStr) {
        var positionStrParts = positionStr.split("-");
        if (positionStrParts.length > 1) {
            return {
                horizontal: positionStrParts[0],
                vertical: positionStrParts[1]
            };
        }
        else if (positionStr === "top" || positionStr === "bottom") {
            return {
                horizontal: "center",
                vertical: positionStr
            };
        }
        else if (positionStr === "left" || positionStr === "right") {
            return {
                horizontal: positionStr,
                vertical: "center"
            };
        }
        return {
            horizontal: "center",
            vertical: "center"
        };
    };
    PositionService = __decorate([
        core_1.Injectable()
    ], PositionService);
    return PositionService;
}());
exports.PositionService = PositionService;
//# sourceMappingURL=position.service.js.map