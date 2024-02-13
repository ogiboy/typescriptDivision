namespace division {
  // Challenge 2
  //
  // Beklenenler:
  // TypeScript'in JavaScript'ten farkı nedir?
  // TypeScript, JavaScript'in üst kümesidir ve tip güvenliği sağlar.
  // 1'den 100'e kadar sayılardan 3'e ve 5'e aynı anda bölünebilen numaların sayısı ve toplamı nedir ?
  //
  // Örnek Çıktı:
  // Koşula uyan toplam numara sayısı: 17
  // Koşula uyan numaraların toplamı: 48
  export function divisibleNumbers(
    start: number,
    end: number,
    number1: number,
    number2: number
  ): {
    count: number;
    summary: number;
  } {
    let count = 0;
    let summary = 0;

    for (let i = start; i < end; i++) {
      if (i % number1 === 0 && i % number2 === 0) {
        count++;
        summary += i;
      }
    }
    return { count, summary };
  }
}

const { count, summary } = division.divisibleNumbers(1, 100, 3, 5);

console.log(`Koşula uyan toplam numara sayısı: ${count}`);
console.log(`Koşula uyan numaraların toplamı: ${summary}`);
