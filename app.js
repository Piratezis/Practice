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
  //Генерация списка из чисел
  for (let i = 0; i < len_list_additional; i++){
    let new_random_number_fractional = Math.random(); // генерит от 0.0 до 1.0
    let new_random_number_basic = Math.floor(new_random_number_fractional * 101); // округляет вниз до целого
    list_numbers_additional.push(new_random_number_basic); // добавляем в массив
  }
  return list_numbers_additional;
}

function calculate_numbers(array,list_numbers_len){
  // Подсчет значений для списка здесь: среднее, уникальные значения и т.д.
  let unique_list_numbers = [...new Set(array)]; // создание уникального списка
  let sum = 0;

  for (const num of array){
    sum += num;
  }

  let average = sum / list_numbers_len; // среднее значение
  let aboveAverageCount = calculate_lenArray(array.filter(num => num > average)); // количество элементов выше среднего
  let belowAverageCount = calculate_lenArray(array.filter(num => num < average)); // количество элементов ниже среднего
  let below20Count = calculate_lenArray(array.filter(num => num < 20));           // количество элементов ниже 20

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

// ___________________________________Функция вывода в html
output_result_on_display(){
  const result_container = document.getElementById('results');
  
  if (!resultsContainer) {
    console.error('Элемент с id="results" не найден на странице');
    return;
  }

  // Форматируем вывод
  resultsContainer.innerHTML = 
    <h2>Результаты анализа массива</h2>
    <p><strong>Количество элементов:</strong> ${list_numbers_len}</p>
    <p><strong>Среднее значение:</strong> ${average.toFixed(2)}</p>
    <p><strong>Выше среднего:</strong> ${more_average_numbers}</p>
    <p><strong>Ниже среднего:</strong> ${below_average_numbers}</p>
    <p><strong>Ниже 20:</strong> ${below20_numbers}</p>
    <p><strong>Уникальные элементы:</strong> ${unique_list_numbers.join(', ')}</p>
    <p><strong>Полный массив:</strong> [${list_numbers_values.join(', ')}]</p>
  ;
}
}

console.log("Массив: ", list_numbers_values);
console.log("Количество элементов: ", list_numbers_len); 
console.log("Уникальные элементы: ", unique_list_numbers);
console.log("Среднее значение: ", average);
console.log("Выше среднего: ", more_average_numbers);
console.log("Ниже среднего: ", below_average_numbers);
console.log("Ниже 20: ", below20_numbers);

// Вызов функций
let list_numbers_values = generate_numbers([], list_len);
const list_numbers_len = calculate_lenArray(list_numbers_values);

let {unique_list_numbers, average, more_average_numbers, below_average_numbers, below20_numbers} = calculate_numbers(list_numbers_values, list_numbers_len);
// Вызов вывода






