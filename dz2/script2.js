//1
let Auto1 = {
    producer: "Ford Motor Company",
    model: "Mustang",
    year: "2015",
    avg_speed: 200,
    Showinfo: function Showinfo(){
        alert(`Producer: ${this.producer}\nModel: ${this.model}\nYear: ${this.year}\nAverage speed: ${this.avg_speed}`);
    },
    CalcTime: function CalcTime(dist){
        let t1 = dist/this.avg_speed;
        return t1 + (Math.floor(t1/4));
    }
}
//2
let Fraction1 = {
    numerator: 2,
    denominator: 5,
    Add : function Add(other){
        let nN1 = this.numerator * other.denominator;
        let nN2 = this.denominator * other.numerator;
        let nD = this.denominator * other.denominator;
        let Fraction3 = {
            numerator: nN1 + nN2,
            denominator: nD,
            Add : this.Add,
            Subtract : this.Subtract,
            Multiply : this.Multiply,
            Divide : this.Divide,
            BiggestDiv : this.BiggestDiv,
            CrossOut : this.CrossOut};
        return Fraction3;
    },
    Subtract : function Subtract(other){
        let nN1 = this.numerator * other.denominator;
        let nN2 = this.denominator * other.numerator;
        let nD = this.denominator * other.denominator;
        let Fraction3 = {
            numerator: nN1 - nN2,
            denominator: nD,
            Add : this.Add,
            Subtract : this.Subtract,
            Multiply : this.Multiply,
            Divide : this.Divide,
            BiggestDiv : this.BiggestDiv,
            CrossOut : this.CrossOut};
        return Fraction3;
    },
    Multiply : function Multiply(other){
        let Fraction3 = {
            numerator: this.numerator * other.numerator,
            denominator: this.denominator * other.denominator,
            Add : this.Add,
            Subtract : this.Subtract,
            Multiply : this.Multiply,
            Divide : this.Divide,
            BiggestDiv : this.BiggestDiv,
            CrossOut : this.CrossOut};
        return Fraction3;
    },
    Divide : function Divide(other){
        let Fraction3 = {
            numerator: this.numerator * other.denominator,
            denominator: this.denominator * other.numerator,
            Add : this.Add,
            Subtract : this.Subtract,
            Multiply : this.Multiply,
            Divide : this.Divide,
            BiggestDiv : this.BiggestDiv,
            CrossOut : this.CrossOut};
        return Fraction3;
    },
    BiggestDiv: function BiggestDiv(a, b) {
        if (a == b) return b;
        else if (b != 0 && a != 0) {
            if (a > b) return this.BiggestDiv(a % b, b);
            return this.BiggestDiv(a, b % a);
        }
        return a + b;
    },
    CrossOut: function CrossOut() {
        let divisor = this.BiggestDiv(this.numerator, this.denominator);
        this.numerator /= divisor;
        this.denominator /= divisor;
    }
}

let Time = {
    hours: 20,
    minutes: 30,
    seconds: 45,
    ShowTime : function ShowTime(){
        alert(`${this.hours}:${this.minutes}:${this.seconds}`);
    },
    ChangeSec: function (ds) {
        this.seconds += ds;
        if (this.seconds >= 60) {
            this.minutes += Math.floor(this.seconds / 60);
            this.seconds %= 60;
        } else if (this.seconds < 0) {
            this.minutes += Math.floor(this.seconds / 60);
            this.seconds = (this.seconds % 60 + 60) % 60;
        }
    },

    ChangeMin: function (dm) {
        this.minutes += dm;
        if (this.minutes >= 60) {
            this.hours += Math.floor(this.minutes / 60);
            this.minutes %= 60;
        } else if (this.minutes < 0) {
            this.hours += Math.floor(this.minutes / 60);
            this.minutes = (this.minutes % 60 + 60) % 60;
        }
    },
    ChangeH : function ChangeH(dh){
        this.hours += dh;

        this.hours = (this.hours % 24 + 24) % 24;
    }
}
