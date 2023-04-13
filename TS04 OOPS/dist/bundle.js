var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("EPerson", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("EHuman", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class EHuman {
        constructor(name) {
            this.name = name;
        }
    }
    exports.default = EHuman;
});
define("CPerson", ["require", "exports", "EHuman"], function (require, exports, EHuman_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    EHuman_1 = __importDefault(EHuman_1);
    class CPerson extends EHuman_1.default {
        constructor(name) {
            super(name);
        }
        showAge() {
            return this.age;
        }
    }
    exports.default = CPerson;
});
define("EHero", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("ECHero", ["require", "exports", "CPerson"], function (require, exports, CPerson_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    CPerson_1 = __importDefault(CPerson_1);
    class ECHero extends CPerson_1.default {
        constructor(name) {
            super(name);
            this.superPowers = [];
        }
        addSuperPower(power) {
            this.superPowers.push(power);
        }
        listSuperPower() {
            return this.superPowers;
        }
    }
    exports.default = ECHero;
});
define("Main", ["require", "exports", "ECHero"], function (require, exports, ECHero_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ECHero_1 = __importDefault(ECHero_1);
    let batman = new ECHero_1.default("batman");
    batman.age = 33;
    batman.addSuperPower("money");
    batman.addSuperPower("batarang");
    console.log(batman.listSuperPower());
});
let myUser = {
    name: "Manoj",
    age: 21,
    address: "",
};
let hello;
hello = function (n, lang) {
    if ((lang = "en")) {
        return `hello ${n}`;
    }
    else {
        return `hola ${n}`;
    }
};
console.log(hello("Manoj", "en"));
let userX = {
    //----- ts merges the to interface with same name but not type not
    name: "Manoj",
    age: 21,
    address: "Mysore",
};
let regUser = {
    name: "Manoj",
    age: 21,
};
let hero = {
    name: "Manoj",
    age: 21,
    superPower: "",
};
let man1 = {
    name: "Tom",
    age: 30,
    dob: "14/08/1990",
    x: 1,
};
//  ----- functions with optional parameters
function product(name, lang = "en", disc) {
    return `${name} ${lang} ${disc}`;
}
console.log(product("lap", "en", "Dic"));
// ------------------classes---------------------------
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
let myperson = new Person("Jerry");
console.log(myperson.greet());
class Hero extends Person {
    constructor(name) {
        super(name);
        this.superPowers = [];
    }
    addPower(power) {
        this.superPowers.push(power);
    }
    getPower() {
        return this.superPowers;
    }
}
let hero1 = new Hero("Avtar");
hero1.addPower("Water");
console.log(hero1.getPower());
// ----------------- Access Modeifiers-----------------------
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
class Cperson {
    constructor(nam) {
        this.name = nam;
    }
}
//------------------------------abstruct class---------------------------
class AHuman {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// let abimpl = new AHuman(); // cannot create a insatance of abstract class
class APerson extends AHuman {
    constructor(name, age) {
        super(name, age);
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vRVBlcnNvbi50cyIsIi4uL0VIdW1hbi50cyIsIi4uL0NQZXJzb24udHMiLCIuLi9FSGVyby50cyIsIi4uL0VDSGVyby50cyIsIi4uL01haW4udHMiLCIuLi9zY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQ0NBLE1BQThCLE1BQU07UUFHbEMsWUFBWSxJQUFZO1lBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25CLENBQUM7S0FFRjtJQVBELHlCQU9DOzs7Ozs7SUNQRCxNQUFxQixPQUFRLFNBQVEsZ0JBQU07UUFDekMsWUFBWSxJQUFZO1lBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLENBQUM7UUFDRCxPQUFPO1lBQ0wsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2xCLENBQUM7S0FDRjtJQVBELDBCQU9DOzs7Ozs7Ozs7O0lFTEQsTUFBcUIsTUFBTyxTQUFRLGlCQUFPO1FBRXpDLFlBQVksSUFBWTtZQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFGZCxnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUczQixDQUFDO1FBQ0QsYUFBYSxDQUFDLEtBQWE7WUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUNELGNBQWM7WUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQztLQUNGO0lBWEQseUJBV0M7Ozs7OztJQ2JELElBQUksTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNoQixNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsT0FB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Q0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFPRCxNQUFNLE9BQU87SUFFWCxZQUFZLEdBQVc7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBQ0QseUVBQXlFO0FBQ3pFLE1BQWUsTUFBTTtJQUduQixZQUFZLElBQVksRUFBRSxHQUFXO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Q0FHRjtBQUVELDRFQUE0RTtBQUU1RSxNQUFNLE9BQVEsU0FBUSxNQUFNO0lBQzFCLFlBQVksSUFBWSxFQUFFLEdBQVc7UUFDbkMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0QsS0FBSztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgRVBlcnNvbiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGFnZTogbnVtYmVyO1xyXG59XHJcbiIsImltcG9ydCBFUGVyc29uIGZyb20gXCIuL0VQZXJzb25cIjtcclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRUh1bWFuIGltcGxlbWVudHMgRVBlcnNvbiB7XHJcbiAgYWdlOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICB9XHJcbiAgYWJzdHJhY3Qgc2hvd0FnZSgpOiBudW1iZXI7XHJcbn1cclxuIiwiaW1wb3J0IEVIdW1hbiBmcm9tIFwiLi9FSHVtYW5cIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1BlcnNvbiBleHRlbmRzIEVIdW1hbiB7XHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihuYW1lKTtcclxuICB9XHJcbiAgc2hvd0FnZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuYWdlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgRVBlcnNvbiBmcm9tIFwiLi9FUGVyc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgRUhlcm9vIGV4dGVuZHMgRVBlcnNvbiB7XHJcbiAgc3VwZXJQb3dlcnM6IHN0cmluZ1tdO1xyXG59XHJcbiIsImltcG9ydCBDUGVyc29uIGZyb20gXCIuL0NQZXJzb25cIjtcclxuaW1wb3J0IEVIZXJvbyBmcm9tIFwiLi9FSGVyb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRUNIZXJvIGV4dGVuZHMgQ1BlcnNvbiBpbXBsZW1lbnRzIEVIZXJvbyB7XHJcbiAgc3VwZXJQb3dlcnM6IHN0cmluZ1tdID0gW107XHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihuYW1lKTtcclxuICB9XHJcbiAgYWRkU3VwZXJQb3dlcihwb3dlcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1cGVyUG93ZXJzLnB1c2gocG93ZXIpO1xyXG4gIH1cclxuICBsaXN0U3VwZXJQb3dlcigpOiBTdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdXBlclBvd2VycztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEVDSGVybyBmcm9tIFwiLi9FQ0hlcm9cIjtcclxubGV0IGJhdG1hbiA9IG5ldyBFQ0hlcm8oXCJiYXRtYW5cIik7XHJcbmJhdG1hbi5hZ2UgPSAzMztcclxuYmF0bWFuLmFkZFN1cGVyUG93ZXIoXCJtb25leVwiKTtcclxuYmF0bWFuLmFkZFN1cGVyUG93ZXIoXCJiYXRhcmFuZ1wiKTtcclxuY29uc29sZS5sb2coYmF0bWFuLmxpc3RTdXBlclBvd2VyKCkpO1xyXG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWludGVyZmFjZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmludGVyZmFjZSBJVXNlciB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHJlYWRvbmx5IGFnZTogbnVtYmVyO1xyXG4gIGFkZHJlc3M/OiBzdHJpbmc7IC8vb3B0aW9uYWxcclxufVxyXG5cclxubGV0IG15VXNlcjogSVVzZXIgPSB7XHJcbiAgbmFtZTogXCJNYW5valwiLFxyXG4gIGFnZTogMjEsXHJcbiAgYWRkcmVzczogXCJcIixcclxufTtcclxuXHJcbi8vIG15VXNlci5hZ2UgPSAyMTsgbm90IGFsbG9lZCBiZWNhdXNlIGl0IGlzIHJlYWRvbmx5XHJcblxyXG5pbnRlcmZhY2UgSUd1ZXN0IHtcclxuICAobmFtZTogc3RyaW5nLCBsYW5ndWFnZTogc3RyaW5nKTogc3RyaW5nOyAvL2Z1bmN0aW9uIG9mIHBhcmFtZXRlcnMgbmFtZSBhbmQgbGFuZ3VhZ2UgYW5kIHJldHVybnMgc3RyaW5nIChDb25zdHJ1Y3RvcilcclxufVxyXG5cclxubGV0IGhlbGxvOiBJR3Vlc3Q7XHJcblxyXG5oZWxsbyA9IGZ1bmN0aW9uIChuOiBzdHJpbmcsIGxhbmc6IHN0cmluZykge1xyXG4gIGlmICgobGFuZyA9IFwiZW5cIikpIHtcclxuICAgIHJldHVybiBgaGVsbG8gJHtufWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBgaG9sYSAke259YDtcclxuICB9XHJcbn07XHJcblxyXG5jb25zb2xlLmxvZyhoZWxsbyhcIk1hbm9qXCIsIFwiZW5cIikpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tVHlwZSB2L3MgaW50ZXJmYWNlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyB0eXBlIFVzZXIgPSB7XHJcbi8vICAgbmFtZTogc3RyaW5nO1xyXG4vLyAgIGFnZTogbnVtYmVyO1xyXG4vLyB9O1xyXG5cclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gIGFkZHJlc3M/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmxldCB1c2VyWDogVXNlciA9IHtcclxuICAvLy0tLS0tIHRzIG1lcmdlcyB0aGUgdG8gaW50ZXJmYWNlIHdpdGggc2FtZSBuYW1lIGJ1dCBub3QgdHlwZSBub3RcclxuICBuYW1lOiBcIk1hbm9qXCIsXHJcbiAgYWdlOiAyMSxcclxuICBhZGRyZXNzOiBcIk15c29yZVwiLFxyXG59O1xyXG4vLyBpbnRlcmZhY2UgZXh0ZWRucyBidXQgdHlwZSBub3RcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS11c2luZyBleHRlbmRzIGtleSB3b3JkIC0tLS0tLS0tLS0tLS0tLS0tXHJcbmludGVyZmFjZSBFQ0hlcm8gZXh0ZW5kcyBVc2VyIHtcclxuICBzdXBlclBvd2VyOiBzdHJpbmc7XHJcbn1cclxuXHJcbmxldCByZWdVc2VyOiBJVXNlciA9IHtcclxuICBuYW1lOiBcIk1hbm9qXCIsXHJcbiAgYWdlOiAyMSxcclxufTtcclxuXHJcbmxldCBoZXJvOiBFQ0hlcm8gPSB7XHJcbiAgbmFtZTogXCJNYW5valwiLFxyXG4gIGFnZTogMjEsXHJcbiAgc3VwZXJQb3dlcjogXCJcIixcclxufTtcclxuXHJcbi8vIC0tLS0tLS0tSW5kZXhpbmctLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbnRlcmZhY2UgTWFuIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgYWdlOiBudW1iZXI7XHJcbiAgYWRkcmVzcz86IHN0cmluZztcclxuICBbcHJvcGVydHk6IHN0cmluZ106IGFueTsgLy8gdGhlIGltcGxlbWVudGF0aW9uIGNhbiBoYXZlIGFueSBvdGhlIHJwcm9wZXJ0aWVzXHJcbn1cclxuXHJcbmxldCBtYW4xOiBNYW4gPSB7XHJcbiAgbmFtZTogXCJUb21cIixcclxuICBhZ2U6IDMwLFxyXG4gIGRvYjogXCIxNC8wOC8xOTkwXCIsXHJcbiAgeDogMSxcclxufTtcclxuXHJcbi8vICAtLS0tLSBmdW5jdGlvbnMgd2l0aCBvcHRpb25hbCBwYXJhbWV0ZXJzXHJcblxyXG5mdW5jdGlvbiBwcm9kdWN0KG5hbWU6IHN0cmluZywgbGFuZzogc3RyaW5nID0gXCJlblwiLCBkaXNjPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gYCR7bmFtZX0gJHtsYW5nfSAke2Rpc2N9YDtcclxufVxyXG5cclxuY29uc29sZS5sb2cocHJvZHVjdChcImxhcFwiLCBcImVuXCIsIFwiRGljXCIpKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLWNsYXNzZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY2xhc3MgUGVyc29uIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuICBncmVldCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBIZWxsbyAke3RoaXMubmFtZX1gO1xyXG4gIH1cclxufVxyXG5cclxubGV0IG15cGVyc29uID0gbmV3IFBlcnNvbihcIkplcnJ5XCIpO1xyXG5jb25zb2xlLmxvZyhteXBlcnNvbi5ncmVldCgpKTtcclxuXHJcbmNsYXNzIEhlcm8gZXh0ZW5kcyBQZXJzb24ge1xyXG4gIHN1cGVyUG93ZXJzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgc3VwZXIobmFtZSk7XHJcbiAgfVxyXG4gIGFkZFBvd2VyKHBvd2VyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuc3VwZXJQb3dlcnMucHVzaChwb3dlcik7XHJcbiAgfVxyXG5cclxuICBnZXRQb3dlcigpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdXBlclBvd2VycztcclxuICB9XHJcbn1cclxuXHJcbmxldCBoZXJvMSA9IG5ldyBIZXJvKFwiQXZ0YXJcIik7XHJcbmhlcm8xLmFkZFBvd2VyKFwiV2F0ZXJcIik7XHJcbmNvbnNvbGUubG9nKGhlcm8xLmdldFBvd2VyKCkpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0gQWNjZXNzIE1vZGVpZmllcnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jbGFzcyBQZXJzb24xIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgYWdlOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuYWdlID0gYWdlO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgZ3JlZXQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgSGVsbG8gJHt0aGlzLm5hbWV9YDtcclxuICB9XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLWNsYXMgYW5kIGludGVyZmVhYy0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW50ZXJmYWNlIFVQZXJzb24ge1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgQ3BlcnNvbiBpbXBsZW1lbnRzIFVQZXJzb24ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBjb25zdHJ1Y3RvcihuYW06IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtO1xyXG4gIH1cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWFic3RydWN0IGNsYXNzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmFic3RyYWN0IGNsYXNzIEFIdW1hbiB7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgYWdlOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuYWdlID0gYWdlO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgZ3JlZXQoKTogdm9pZDtcclxufVxyXG5cclxuLy8gbGV0IGFiaW1wbCA9IG5ldyBBSHVtYW4oKTsgLy8gY2Fubm90IGNyZWF0ZSBhIGluc2F0YW5jZSBvZiBhYnN0cmFjdCBjbGFzc1xyXG5cclxuY2xhc3MgQVBlcnNvbiBleHRlbmRzIEFIdW1hbiB7XHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xyXG4gICAgc3VwZXIobmFtZSwgYWdlKTtcclxuICB9XHJcbiAgZ3JlZXQoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhgSGVsbG8gJHt0aGlzLm5hbWV9YCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==