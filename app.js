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

const list_len = 100;

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

function calculate_numbers(array, lenArray){
  //Подсчет значений для списка здесь: среднее, 
  
  len unique_list_numbers = [];
  for (const i of array){
   
  
}

 function calculate_lenArray(array){
  //Подсчет длины списка
  return calculate_numbers.length; 
}
 
//Вызов функций
let list_numbers_values = generate_numbers([], list_len);
const list_numbers_len = calculate_lenArray(list_numbers_values);
unique_list_numbers_values = uniq(list_numbers_values)
count_average_numbers = ;
count_long_average_numbers = ;
count_lower_average_numbers =;
calculate_numbers();

//Вывод
console.log("Массив: ", list_numbers_values);
console.log("Количество элементов: ", list_numbers_len); 
console.log("Уникальные элементы: ", unique_list_numbers_values);

console.log("Среднее значение: ", average);
console.log("Выше среднего: ", aboveAverageCount);
console.log("Ниже среднего: ", belowAverageCount);
console.log("Ниже 20: ", below20Count);




