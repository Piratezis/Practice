/* https://Piratezis.github.io/Practice - .html 
-____________________________________________________ЗАМЕТКИ
Неблочные 
Блочные внутри {}
 let - изменяемые типы данных
 const - неизменяемые типы данных, нельзя переопределить, но можно изменить свойства.
чтобы запретить изменять содержимое или свойства: Object.freeze()
Типы: Number, string, Null: null (намеренное отсутствие значения)
Undefined: let x; (значение не присвоено)
Symbol: Symbol('id') (уникальные идентификаторы)
BigInt: 123n (для больших чисел)
ПроВЕРКАТипа: typeoff
 && || - и или 
== (нестрогое сравнение и строгое сравнение) ===
Условия как в питоне, но есть switch(day) { case "1 день недели": вывод Понедельник; break; default:...... но без breake
Циклы как в питоне for(условие), while (условие), но do while - сначала выполниться, потом условие проверит
функции устроены +- как питон: ввод и вывод аргументов и return
Что нужно для рандомной генерации?
Как импортировать?
const i of numbers_list == i for i in numbers_list  -- цикл for для массивов


*/

// Ввод параметров

const LenListNumbers = 100;

//Функции
function generate_numbers(ListNumbersAdditional, LenListAdditional){
  //Генерация списка из чисел
  for (let i = 0; i < LenListAdditional; i++){
    let NewRandomNumberFractional = Math.random(); // генерит от 0.0 до 1.0
    let NewRandomNumberBasic = Math.floor(NewRandomNumberFractional * 101); // округляет вниз до целого
    ListNumbersAdditional.push(NewRandomNumberBasic); //в массив
  }
  return ListNumbersAdditional;
}

function calculate_numbers(Array, LenListNumbers){

  // Подсчет значений для списка здесь: среднее, уникальные значения и т.д.

  let UniqueListNumbers = [...new Set(Array)]; // уникальный список
  let Sum = 0;

  for (const Num of Array){
    Sum += Num;
  }

  let Average = Sum / LenListNumbers; // среднее значение
  let MoreAverageNumbers = (Array.filter(Num => Num > Average).length); // количество элементов выше среднего
  let BelowAverageNumbers = (Array.filter(Num => Num < Average).length); // элементов ниже среднего
  let Below20Numbers = (Array.filter(Num => Num < 20).length);           // элементов ниже 20

  return {
    UniqueListNumbers,
    Average,
    MoreAverageNumbers,
    BelowAverageNumbers,
    Below20Numbers
  };
}

// Вызов функций
let ListNumbers= generate_numbers([], LenListNumbers);


let {UniqueListNumbers, Average, MoreAverageNumbers, BelowAverageNumbers, Below20Numbers} = calculate_numbers(ListNumbers, LenListNumbers);
console.log("Список начальный:\n");
console.log(ListNumbers, "\n");
console.log("Список уникальных значений:\n");
console.log(UniqueListNumbers, "\n");
console.log("Среднее значени: ", Average)
console.log("Кол-во больше среднего: ", MoreAverageNumbers);
console.log("Количество меньше среднего: ", BelowAverageNumbers);
console.log("Кол-во меньше 20: ", Below20Numbers);

