System.register("EPerson", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("EHuman", [], function (exports_2, context_2) {
    "use strict";
    var EHuman;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            EHuman = class EHuman {
                constructor(name) {
                    this.name = name;
                }
            };
            exports_2("default", EHuman);
        }
    };
});
System.register("CPerson", ["EHuman"], function (exports_3, context_3) {
    "use strict";
    var EHuman_1, CPerson;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (EHuman_1_1) {
                EHuman_1 = EHuman_1_1;
            }
        ],
        execute: function () {
            CPerson = class CPerson extends EHuman_1.default {
                constructor(name) {
                    super(name);
                }
                showAge() {
                    return this.age;
                }
            };
            exports_3("default", CPerson);
        }
    };
});
System.register("EHero", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("ECHero", ["CPerson"], function (exports_5, context_5) {
    "use strict";
    var CPerson_1, ECHero;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (CPerson_1_1) {
                CPerson_1 = CPerson_1_1;
            }
        ],
        execute: function () {
            ECHero = class ECHero extends CPerson_1.default {
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
            };
            exports_5("default", ECHero);
        }
    };
});
System.register("Main", ["ECHero"], function (exports_6, context_6) {
    "use strict";
    var ECHero_1, batman;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (ECHero_1_1) {
                ECHero_1 = ECHero_1_1;
            }
        ],
        execute: function () {
            batman = new ECHero_1.default("batman");
            batman.age = 33;
            batman.addSuperPower("money");
            batman.addSuperPower("batarang");
            console.log(batman.listSuperPower());
        }
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vRVBlcnNvbi50cyIsIi4uL0VIdW1hbi50cyIsIi4uL0NQZXJzb24udHMiLCIuLi9FSGVyby50cyIsIi4uL0VDSGVyby50cyIsIi4uL01haW4udHMiLCIuLi9zY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O1FBSUEsQ0FBQzs7Ozs7Ozs7OztZQ0hELFNBQUEsTUFBOEIsTUFBTTtnQkFHbEMsWUFBWSxJQUFZO29CQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDbkIsQ0FBQzthQUVGLENBQUE7O1FBQ0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7WUNSRCxVQUFBLE1BQXFCLE9BQVEsU0FBUSxnQkFBTTtnQkFDekMsWUFBWSxJQUFZO29CQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2QsQ0FBQztnQkFDRCxPQUFPO29CQUNMLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDbEIsQ0FBQzthQUNGLENBQUE7O1FBQ0QsQ0FBQzs7Ozs7Ozs7O1FDSkQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7WUNGRCxTQUFBLE1BQXFCLE1BQU8sU0FBUSxpQkFBTztnQkFFekMsWUFBWSxJQUFZO29CQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRmQsZ0JBQVcsR0FBYSxFQUFFLENBQUM7Z0JBRzNCLENBQUM7Z0JBQ0QsYUFBYSxDQUFDLEtBQWE7b0JBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUNELGNBQWM7b0JBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUMxQixDQUFDO2FBQ0YsQ0FBQTs7UUFDRCxDQUFDOzs7Ozs7Ozs7Ozs7OztZQ2RHLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFF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LElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFDUyxLQUFLO1FBQ2IsT0FBTyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFPRCxNQUFNLE9BQU87SUFFWCxZQUFZLEdBQVc7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBQ0QseUVBQXlFO0FBQ3pFLE1BQWUsTUFBTTtJQUduQixZQUFZLElBQVksRUFBRSxHQUFXO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Q0FHRjtBQUVELDRFQUE0RTtBQUU1RSxNQUFNLE9BQVEsU0FBUSxNQUFNO0lBQzFCLFlBQVksSUFBWSxFQUFFLEdBQVc7UUFDbkMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0QsS0FBSztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgRVBlcnNvbiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGFnZTogbnVtYmVyO1xyXG59XHJcbiIsImltcG9ydCBFUGVyc29uIGZyb20gXCIuL0VQZXJzb25cIjtcclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRUh1bWFuIGltcGxlbWVudHMgRVBlcnNvbiB7XHJcbiAgYWdlOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICB9XHJcbiAgYWJzdHJhY3Qgc2hvd0FnZSgpOiBudW1iZXI7XHJcbn1cclxuIiwiaW1wb3J0IEVIdW1hbiBmcm9tIFwiLi9FSHVtYW5cIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1BlcnNvbiBleHRlbmRzIEVIdW1hbiB7XHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihuYW1lKTtcclxuICB9XHJcbiAgc2hvd0FnZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuYWdlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgRVBlcnNvbiBmcm9tIFwiLi9FUGVyc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgRUhlcm9vIGV4dGVuZHMgRVBlcnNvbiB7XHJcbiAgc3VwZXJQb3dlcnM6IHN0cmluZ1tdO1xyXG59XHJcbiIsImltcG9ydCBDUGVyc29uIGZyb20gXCIuL0NQZXJzb25cIjtcclxuaW1wb3J0IEVIZXJvbyBmcm9tIFwiLi9FSGVyb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRUNIZXJvIGV4dGVuZHMgQ1BlcnNvbiBpbXBsZW1lbnRzIEVIZXJvbyB7XHJcbiAgc3VwZXJQb3dlcnM6IHN0cmluZ1tdID0gW107XHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihuYW1lKTtcclxuICB9XHJcbiAgYWRkU3VwZXJQb3dlcihwb3dlcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1cGVyUG93ZXJzLnB1c2gocG93ZXIpO1xyXG4gIH1cclxuICBsaXN0U3VwZXJQb3dlcigpOiBTdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdXBlclBvd2VycztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEVDSGVybyBmcm9tIFwiLi9FQ0hlcm9cIjtcclxubGV0IGJhdG1hbiA9IG5ldyBFQ0hlcm8oXCJiYXRtYW5cIik7XHJcbmJhdG1hbi5hZ2UgPSAzMztcclxuYmF0bWFuLmFkZFN1cGVyUG93ZXIoXCJtb25leVwiKTtcclxuYmF0bWFuLmFkZFN1cGVyUG93ZXIoXCJiYXRhcmFuZ1wiKTtcclxuY29uc29sZS5sb2coYmF0bWFuLmxpc3RTdXBlclBvd2VyKCkpO1xyXG4iLCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWludGVyZmFjZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmludGVyZmFjZSBJVXNlciB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHJlYWRvbmx5IGFnZTogbnVtYmVyO1xyXG4gIGFkZHJlc3M/OiBzdHJpbmc7IC8vb3B0aW9uYWxcclxufVxyXG5cclxubGV0IG15VXNlcjogSVVzZXIgPSB7XHJcbiAgbmFtZTogXCJNYW5valwiLFxyXG4gIGFnZTogMjEsXHJcbiAgYWRkcmVzczogXCJcIixcclxufTtcclxuXHJcbi8vIG15VXNlci5hZ2UgPSAyMTsgbm90IGFsbG9lZCBiZWNhdXNlIGl0IGlzIHJlYWRvbmx5XHJcblxyXG5pbnRlcmZhY2UgSUd1ZXN0IHtcclxuICAobmFtZTogc3RyaW5nLCBsYW5ndWFnZTogc3RyaW5nKTogc3RyaW5nOyAvL2Z1bmN0aW9uIG9mIHBhcmFtZXRlcnMgbmFtZSBhbmQgbGFuZ3VhZ2UgYW5kIHJldHVybnMgc3RyaW5nIChDb25zdHJ1Y3RvcilcclxufVxyXG5cclxubGV0IGhlbGxvOiBJR3Vlc3Q7XHJcblxyXG5oZWxsbyA9IGZ1bmN0aW9uIChuOiBzdHJpbmcsIGxhbmc6IHN0cmluZykge1xyXG4gIGlmICgobGFuZyA9IFwiZW5cIikpIHtcclxuICAgIHJldHVybiBgaGVsbG8gJHtufWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBgaG9sYSAke259YDtcclxuICB9XHJcbn07XHJcblxyXG5jb25zb2xlLmxvZyhoZWxsbyhcIk1hbm9qXCIsIFwiZW5cIikpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tVHlwZSB2L3MgaW50ZXJmYWNlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyB0eXBlIFVzZXIgPSB7XHJcbi8vICAgbmFtZTogc3RyaW5nO1xyXG4vLyAgIGFnZTogbnVtYmVyO1xyXG4vLyB9O1xyXG5cclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gIGFkZHJlc3M/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmxldCB1c2VyWDogVXNlciA9IHtcclxuICAvLy0tLS0tIHRzIG1lcmdlcyB0aGUgdG8gaW50ZXJmYWNlIHdpdGggc2FtZSBuYW1lIGJ1dCBub3QgdHlwZSBub3RcclxuICBuYW1lOiBcIk1hbm9qXCIsXHJcbiAgYWdlOiAyMSxcclxuICBhZGRyZXNzOiBcIk15c29yZVwiLFxyXG59O1xyXG4vLyBpbnRlcmZhY2UgZXh0ZWRucyBidXQgdHlwZSBub3RcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS11c2luZyBleHRlbmRzIGtleSB3b3JkIC0tLS0tLS0tLS0tLS0tLS0tXHJcbmludGVyZmFjZSBFQ0hlcm8gZXh0ZW5kcyBVc2VyIHtcclxuICBzdXBlclBvd2VyOiBzdHJpbmc7XHJcbn1cclxuXHJcbmxldCByZWdVc2VyOiBJVXNlciA9IHtcclxuICBuYW1lOiBcIk1hbm9qXCIsXHJcbiAgYWdlOiAyMSxcclxufTtcclxuXHJcbmxldCBoZXJvOiBFQ0hlcm8gPSB7XHJcbiAgbmFtZTogXCJNYW5valwiLFxyXG4gIGFnZTogMjEsXHJcbiAgc3VwZXJQb3dlcjogXCJcIixcclxufTtcclxuXHJcbi8vIC0tLS0tLS0tSW5kZXhpbmctLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbnRlcmZhY2UgTWFuIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgYWdlOiBudW1iZXI7XHJcbiAgYWRkcmVzcz86IHN0cmluZztcclxuICBbcHJvcGVydHk6IHN0cmluZ106IGFueTsgLy8gdGhlIGltcGxlbWVudGF0aW9uIGNhbiBoYXZlIGFueSBvdGhlIHJwcm9wZXJ0aWVzXHJcbn1cclxuXHJcbmxldCBtYW4xOiBNYW4gPSB7XHJcbiAgbmFtZTogXCJUb21cIixcclxuICBhZ2U6IDMwLFxyXG4gIGRvYjogXCIxNC8wOC8xOTkwXCIsXHJcbiAgeDogMSxcclxufTtcclxuXHJcbi8vICAtLS0tLSBmdW5jdGlvbnMgd2l0aCBvcHRpb25hbCBwYXJhbWV0ZXJzXHJcblxyXG5mdW5jdGlvbiBwcm9kdWN0KG5hbWU6IHN0cmluZywgbGFuZzogc3RyaW5nID0gXCJlblwiLCBkaXNjPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gYCR7bmFtZX0gJHtsYW5nfSAke2Rpc2N9YDtcclxufVxyXG5cclxuY29uc29sZS5sb2cocHJvZHVjdChcImxhcFwiLCBcImVuXCIsIFwiRGljXCIpKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLWNsYXNzZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY2xhc3MgUGVyc29uIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuICBncmVldCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBIZWxsbyAke3RoaXMubmFtZX1gO1xyXG4gIH1cclxufVxyXG5cclxubGV0IG15cGVyc29uID0gbmV3IFBlcnNvbihcIkplcnJ5XCIpO1xyXG5jb25zb2xlLmxvZyhteXBlcnNvbi5ncmVldCgpKTtcclxuXHJcbmNsYXNzIEhlcm8gZXh0ZW5kcyBQZXJzb24ge1xyXG4gIHN1cGVyUG93ZXJzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgc3VwZXIobmFtZSk7XHJcbiAgfVxyXG4gIGFkZFBvd2VyKHBvd2VyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuc3VwZXJQb3dlcnMucHVzaChwb3dlcik7XHJcbiAgfVxyXG5cclxuICBnZXRQb3dlcigpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdXBlclBvd2VycztcclxuICB9XHJcbn1cclxuXHJcbmxldCBoZXJvMSA9IG5ldyBIZXJvKFwiQXZ0YXJcIik7XHJcbmhlcm8xLmFkZFBvd2VyKFwiV2F0ZXJcIik7XHJcbmNvbnNvbGUubG9nKGhlcm8xLmdldFBvd2VyKCkpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0gQWNjZXNzIE1vZGVpZmllcnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jbGFzcyBQZXJzb24xIHtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgYWdlOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuYWdlID0gYWdlO1xyXG4gIH1cclxuICBwcm90ZWN0ZWQgZ3JlZXQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgSGVsbG8gJHt0aGlzLm5hbWV9YDtcclxuICB9XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLWNsYXMgYW5kIGludGVyZmVhYy0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuaW50ZXJmYWNlIFVQZXJzb24ge1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgQ3BlcnNvbiBpbXBsZW1lbnRzIFVQZXJzb24ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBjb25zdHJ1Y3RvcihuYW06IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtO1xyXG4gIH1cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWFic3RydWN0IGNsYXNzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmFic3RyYWN0IGNsYXNzIEFIdW1hbiB7XHJcbiAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBwdWJsaWMgYWdlOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuYWdlID0gYWdlO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgZ3JlZXQoKTogdm9pZDtcclxufVxyXG5cclxuLy8gbGV0IGFiaW1wbCA9IG5ldyBBSHVtYW4oKTsgLy8gY2Fubm90IGNyZWF0ZSBhIGluc2F0YW5jZSBvZiBhYnN0cmFjdCBjbGFzc1xyXG5cclxuY2xhc3MgQVBlcnNvbiBleHRlbmRzIEFIdW1hbiB7XHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xyXG4gICAgc3VwZXIobmFtZSwgYWdlKTtcclxuICB9XHJcbiAgZ3JlZXQoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhgSGVsbG8gJHt0aGlzLm5hbWV9YCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==