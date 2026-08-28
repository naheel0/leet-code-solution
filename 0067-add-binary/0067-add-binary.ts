function addBinary(a: string, b: string): string {
      let binA = BigInt("0b"+a)
  let binB = BigInt("0b"+b)
  let add = binA+ binB
  return add.toString(2)
};