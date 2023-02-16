let parStr = 'Java javaScript Ja JAHAHjaeerewf'
let keyWord = 'Jav'
function fn(parStr, keyWord, spanStart, spanEnd) {
  let arr = []
  let arr2 = []
  let index = parStr.toLowerCase().indexOf(keyWord.toLowerCase())
  while (index > -1) {
    arr.push(index)
    index = parStr.toLowerCase().indexOf(keyWord.toLowerCase(), index + 1)
  }
  console.log('arr:', arr)

  arr.forEach((item, index) => {
    let endIndex = item + keyWord.length
    let result = parStr.slice(item, endIndex)
    console.log('result:', result)
    if (index == 0) {
      let aaa = parStr.slice(0, item) + spanStart + result + spanEnd
      arr2.push(aaa)
    } else {
      let beforeItem = arr[index - 1]
      let aaa = parStr.slice(beforeItem + keyWord.length, item) + spanStart + result + spanEnd
      arr2.push(aaa)
      console.log('beforeItem:', beforeItem)
    }
    if (index == arr.length - 1) {
      arr2.push(parStr.substring(endIndex))
    }
  })
  console.log('arr2:', arr2)

  return arr2.join('')
}
