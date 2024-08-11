class Circel {
    private radius: number = 1.0;
    private colour: string = "red";

    constructor(radius: number = 1.0, colour: string = 'red') {
        this.radius = radius;
        this.colour = colour;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getColour(): string {
        return this.colour;
    }

    setColour(colour: string): void {
        this.colour = colour;
    }

    toString() {
        console.log(`Radius: ${this.radius}, Colour: ${this.colour}`);
    }

    getArea(): number {

        return Math.PI * this.radius ** 2;

    }

    getCircumferenece(): number {
        return 2 * Math.PI * this.radius;
    }


}