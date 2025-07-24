/* https://Piratezis.github.io/Practice - .html 
-____________________________________________________ЗАМЕТКИ
Блочные внутри {}
 let - изменяемые типы данных
 const - неизменяемые типы данных
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
let list_numbers = [];
const len_list = 100;

//Функции
function generate_numbers(list_numbers_additional, len_list_additional){
  //Логика генерации списка чисел

  for (i = 0, i < len_list_additional, i++){
    
    new_random_number_fractional = Math.random();                            // Math.random() - генерит от 0.0 до 1.0  !
    new_random_number_basic = Math.floor(new_random_number_fractional * 101); // .floor - округляет ВНИЗ до целого!
    list_numbers.push(new_random_number);                                    //.push() == .append()
    return list_numbers_additional;
    
  }
}

function calculate_numbers(arr){
  //Логика функции здесь
  
  
}

//Вызов функций
calculate_numbers(generate_numbers(list_numbers, len_list));

//Вывод
console.log("Массив:", numbers);
console.log("Уникальные элементы:", uniqueNumbers);
console.log("Количество элементов:", numbers.length);
console.log("Среднее значение:", average);
console.log("Выше среднего:", aboveAverageCount);
console.log("Ниже среднего:", belowAverageCount);
console.log("Ниже 20:", below20Count);




