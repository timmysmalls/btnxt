class ObjectFormatter {
    constructor(object) {
        this.object = object;
        this.returnValue = "";
        this.indentation = 0;
        this.spaces = 4;
    };

    addSpaces() {
        for (let i = 0; i < this.indentation * this.spaces; i++) {
            this.returnValue += "&nbsp;";
        }
    }

    format() {
        this.formatObject(this.object);
    };

    formatToken(token) {
        if (typeof token === "object") {
            this.returnValue += "</br>";
            this.indentation += 1;
            this.formatObject(token);
            this.indentation -= 1;
        } else {
            this.formatField(token);
        }
    }

    formatObject(object) {
        Object.keys(object).map(key => {
            this.addSpaces();
            this.returnValue += "<b>" + key + "</b>:" 
            this.formatToken(object[key]);
        });
    };

    formatField(token) {
        this.returnValue += "&nbsp;" + token + "</br>"
    };
};

export default ObjectFormatter;
