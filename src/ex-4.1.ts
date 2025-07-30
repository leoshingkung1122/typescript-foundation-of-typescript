type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
    if(user.age !== undefined && user.age >= 18){
      return true
    }else{
      return false
    }
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ
//กำหนดให้ageเป็นoptionalจึงทำให้อาจเป็นundefinedได้จึงไม่สามาถนำไปเปรียบเทียบกับ >= 18ได้