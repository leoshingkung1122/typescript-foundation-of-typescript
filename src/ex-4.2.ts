function processData(data: unknown): string {
  if(typeof data === "string"){
    return data.toUpperCase();
  }else {
    return "Not a string"
  }
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
//เพราะว่ากำหนดค่าเป็นunknowเวลาจะนำมาใช้ร่วมกับ built-in function ต้องกำหนดtypeให้มันก่อน
