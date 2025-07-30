type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  const age = user.age ?? 0;
  return age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ ต้องใช้ Nullish Coalescing ในการกำหนดค่า Option
