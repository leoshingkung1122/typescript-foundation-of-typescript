type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  if(user.age>=18){
    return true;
  }else if (user.age === undefined){
    return false;
  }else{
    return false;
  }
}

const result = isAdult({ id: "u01", name: "John"});
console.log(result); // ควรได้ false

// Error ที่เจอคือ
// age อาจจะเป็น undefined หรือ number ก็ได้ ถ้าเป็น undefined ไม่สามารถเอาไปเปรียบเทียบกับ 18 ได้