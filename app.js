/* https://Piratezis.github.io/Practice - .html 
-____________________________________________________ЗАМЕТКИ
Неблочные 
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
  //Генерация списка из чисел
  for (let i = 0; i < len_list_additional; i++){
    let new_random_number_fractional = Math.random(); // генерит от 0.0 до 1.0
    let new_random_number_basic = Math.floor(new_random_number_fractional * 101); // округляет вниз до целого
    list_numbers_additional.push(new_random_number_basic); // добавляем в массив
  }
  return list_numbers_additional;
}

function calculate_numbers(array, list_numbers_len){

  // Подсчет значений для списка здесь: среднее, уникальные значения и т.д.

  let unique_list_numbers = [...new Set(array)]; // уникальный список
  let sum = 0;

  for (const num of array){
    sum += num;
  }

  let average = sum / list_numbers_len; // среднее значение
  let more_average_numbers = calculate_lenArray(array.filter(num => num > average)); // количество элементов выше среднего
  let below_average_numbers = calculate_lenArray(array.filter(num => num < average)); // элементов ниже среднего
  let below20_numbers = calculate_lenArray(array.filter(num => num < 20));           // элементов ниже 20

  return {
    unique_list_numbers,
    average,
    more_average_numbers,
    below_average_numbers,
    below20_numbers
  };
}

function calculate_lenArray(array){
  //___________________________________ Подсчет длины списка
  return array.length; 
}


// Вызов функций
let list_numbers_values = generate_numbers([], list_len);
const list_numbers_len = calculate_lenArray(list_numbers_values);

let {unique_list_numbers, average, more_average_numbers, below_average_numbers, below20_numbers} = calculate_numbers(list_numbers_values, list_numbers_len);
console.log("Список\n")
console.log(unique_list_numbers, "\n")
console.log("Среднее значени: ", average)
console.log("Кол-во больше среднего: ", more_average_numbers)
console.log("Количество меньше среднего: ", below_average_numbers)
console.log("Кол-во меньше 20: ", below20_numbers)




