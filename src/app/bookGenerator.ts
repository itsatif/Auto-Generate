export class BookGenerator {
  generateRandomDate() {
    const year = this.getRandomInt(2000, 2023);
    const month = this.getRandomInt(1, 12);
    const day = this.getRandomInt(1, 28);
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }

  generateRandomCountry() {
    const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Japan', 'India', 'China'];
    return countries[this.getRandomInt(0, countries.length - 1)];
  }

  generateRandomPrintCopies() {
    return this.getRandomInt(100, 5000);
  }

  *generateBooks(numBooks: number) {
    for (let i = 1; i <= numBooks; i++) {
      yield {
        id:i+1,
        publisherName: `Publisher ${i}`,
        title: `Book ${i}`,
        publishDate: this.generateRandomDate(),
        country: this.generateRandomCountry(),
        printCopies: this.generateRandomPrintCopies(),
      };
    }
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
