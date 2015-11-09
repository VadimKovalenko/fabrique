//Доступ к элементу basket
var	basket_div = document.getElementById("basket");
//Создаем класс товаров
function Article(title, name, price) {
	this.title = title;
	this.name = name;
	this.price = price;
}
//Создаем массив с экземплярами классов (эмуляция базы данных с товарами)
var articles = [
	article_1 = new Article ("art1", "Claire Aitch Bath Sheets", 29.99),
	article_2 = new Article ("art2", "Chocolate Cushion Set", 36.99),
	article_3 = new Article ("art3", "Kay Lea Modern Bed Set", 59.99),
	article_4 = new Article ("art4", "Ali Baba Rug & Cushion", 259.99),
	article_5 = new Article ("art5", "Royale Curtains", 159.99),
	article_6 = new Article ("art6", "Claire Aitch Zebra Rug", 129.99),
	article_7 = new Article ("art7", "Real Pine Wood Flooring", 19.99),
	article_8 = new Article ("art8", "Modern Flowers Bed Set", 89.99)	
];
//Добавление раcпарсенного объекта в локальное хранилище
function ObjParse(a) {
			localStorage.setItem(articles[a].title, JSON.stringify(articles[a]));
			alert ("Товар " + articles[a].name + " добавлен в локальное хранилище");
		}
//Достаем товар из локального хранилища и отображаем его в DOM
function insertToDOM(){
//Создаем шаблон единственной инструкции var
storage_articles = [localStorage.getItem(articles[0].title),
						localStorage.getItem(articles[1].title),
						localStorage.getItem(articles[2].title),
						localStorage.getItem(articles[3].title),
						localStorage.getItem(articles[4].title),
						localStorage.getItem(articles[5].title),
						localStorage.getItem(articles[6].title),
						localStorage.getItem(articles[7].title),						
						];
//Удаляем пустые элементы из массива
for(var i = storage_articles.length; i--;){
	if (storage_articles[i] === null) storage_articles.splice(i, 1);
}

//Добавляем отображение кол-ва товаров в корзине
document.getElementById("items_count").innerHTML = storage_articles.length;

for (i=0; i<storage_articles.length; ++i) {	
		//Создание элемента newDiv с присвоением ему определенного айди
		newDiv = document.createElement('div');
				for (j=0; j < 6; ++j) {
					var cell = document.createElement('div');
					cell.className = 'row-cell';
					var cells = document.getElementsByClassName('row-cell');
					newDiv.appendChild(cell);
					//Назначаем идентификатор каждому блоку с товаром, заменяя пробел на нижеий знак подчеркивания
					//newDiv.id = (JSON.parse(storage_articles[i]).name).split(/[\s&]/g).join('_');
					newDiv.id = JSON.parse(storage_articles[i]).title;
					newDiv.className = 'article-row';
					basket_div.appendChild(newDiv);
					}
					newDiv.childNodes[3].className = "cell-select";
					//На каждый щелчек по элементу заново подсчитывается сумма
					newDiv.childNodes[3].onclick = function() {CalculateSumm() };
					newDiv.childNodes[4].className += " summ_article";
					var delete_button = document.createElement('button');
					delete_button.className  = "delete-button";
					newDiv.childNodes[5].appendChild(delete_button);
					//На каждый щелчек по элементу заново подсчитывается сумма
					newDiv.childNodes[5].onclick = function() {CalculateSumm() };
					delete_button.addEventListener( "click" , deleteArticle, false);
					setContent();
		}
}
//Функция удаления товара
function deleteArticle() {
	//Получаем доступ к определенному элементу
	var par = document.getElementById(this.parentNode.parentNode.id);
	//Удаляем его из DOM
	par.parentNode.removeChild(par);
	//удаляем из локального хранилища
	localStorage.removeItem(this.parentNode.parentNode.id);
	//Тут следует добавить ф-цию отображения кол-ва товаров в корзине
}
	
//Ф-ция задает содержимое блоков имитируя данные из БД 
function setContent() {
	//Добавляем тег select и теги option
	var sel = document.createElement("select");
	newDiv.childNodes[3].appendChild(sel);
	var opt1 = document.createElement("option");
	opt1.text = "1";
	opt1.value = 1;
	var opt2 = document.createElement("option");
	opt2.text = "2";
	opt2.value = 2;
	var opt3 = document.createElement("option");
	opt3.text = "3";
	opt3.value = 3;
	var opt4 = document.createElement("option");
	opt4.text = "4";
	opt4.value = 4;
	var opt5 = document.createElement("option");
	opt5.text = "5";
	opt5.value = 5;
	var opt6 = document.createElement("option");
	opt6.text = "6";
	opt6.value = 6;
	var opt7 = document.createElement("option");
	opt7.text = "7";
	opt7.value = 7;
	var opt8 = document.createElement("option");
	opt8.text = "8";
	opt8.value = 8;
	var opt9 = document.createElement("option");
	opt9.text = "9";
	opt9.value = 9;
	var opt10 = document.createElement("option");
	opt10.text = "10";
	opt10.value = 10;				
	//Нужно 10 раз добавить элементы option
	newDiv.childNodes[3].childNodes[0].appendChild(opt1);
	newDiv.childNodes[3].childNodes[0].appendChild(opt2);
	newDiv.childNodes[3].childNodes[0].appendChild(opt3);
	newDiv.childNodes[3].childNodes[0].appendChild(opt4);
	newDiv.childNodes[3].childNodes[0].appendChild(opt5);
	newDiv.childNodes[3].childNodes[0].appendChild(opt6);
	newDiv.childNodes[3].childNodes[0].appendChild(opt7);
	newDiv.childNodes[3].childNodes[0].appendChild(opt8);
	newDiv.childNodes[3].childNodes[0].appendChild(opt9);
	newDiv.childNodes[3].childNodes[0].appendChild(opt10);
	
	if (newDiv.id == "art1") {
		newDiv.childNodes[0].id = "image_" + newDiv.id;
		newDiv.childNodes[1].innerHTML = article_1.name;					
		newDiv.childNodes[3].id = "select_" + newDiv.id;
		newDiv.childNodes[2].innerHTML = "£" + article_1.price;
		var selectOpt = document.getElementById("select_" + newDiv.id).firstChild;
		newDiv.childNodes[4].id = "summ_" + newDiv.id;
		var selectDiv = document.getElementById(newDiv.childNodes[4].id);
		newDiv.childNodes[4].innerHTML = "£" + article_1.price;
		//Функция подсчета суммы элементов
		selectOpt.onchange = function() {
			selectDiv.innerHTML =  "£" + (article_1.price*selectOpt.value).toFixed(2);
		};
	}
	if (newDiv.id == "art2") {
		newDiv.childNodes[0].id = "image_" + newDiv.id;
		newDiv.childNodes[1].innerHTML = article_2.name;	
		newDiv.childNodes[3].id = "select_" + newDiv.id;
		newDiv.childNodes[2].innerHTML = "£" + article_2.price;	
		var selectOpt = document.getElementById("select_" + newDiv.id).firstChild;
		newDiv.childNodes[4].id = "summ_" + newDiv.id;
		var selectDiv = document.getElementById(newDiv.childNodes[4].id);
		newDiv.childNodes[4].innerHTML = "£" + article_2.price;
		//Функция подсчета суммы элементов
		selectOpt.onchange = function() {
			selectDiv.innerHTML =   "£" + (article_2.price*selectOpt.value).toFixed(2);
		};					
	}
	if (newDiv.id == "art3") {
		newDiv.childNodes[0].id = "image_" + newDiv.id;
		newDiv.childNodes[1].innerHTML = article_3.name;	
		newDiv.childNodes[3].id = "select_" + newDiv.id;
		newDiv.childNodes[2].innerHTML = "£" + article_3.price;	
		var selectOpt = document.getElementById("select_" + newDiv.id).firstChild;
		newDiv.childNodes[4].id = "summ_" + newDiv.id;
		var selectDiv = document.getElementById(newDiv.childNodes[4].id);
		newDiv.childNodes[4].innerHTML = "£" + article_3.price;
		//Функция подсчета суммы элементов
		selectOpt.onchange = function() {
			selectDiv.innerHTML =  "£" + (article_3.price*selectOpt.value).toFixed(2);
		};					
	}	
	if (newDiv.id == "art4") {
		newDiv.childNodes[0].id = "image_" + newDiv.id;
		newDiv.childNodes[1].innerHTML = article_4.name;	
		newDiv.childNodes[3].id = "select_" + newDiv.id;
		newDiv.childNodes[2].innerHTML = "£" + article_4.price;	
		var selectOpt = document.getElementById("select_" + newDiv.id).firstChild;
		newDiv.childNodes[4].id = "summ_" + newDiv.id;
		var selectDiv = document.getElementById(newDiv.childNodes[4].id);
		newDiv.childNodes[4].innerHTML = "£" + article_4.price;
		//newDiv.childNodes[4].className += " summ_article";
		//Функция подсчета суммы элементов
		selectOpt.onchange = function() {
			selectDiv.innerHTML =  "£" + (article_4.price*selectOpt.value).toFixed(2);
		};					
	}
	if (newDiv.id == "art5") {
		newDiv.childNodes[0].id = "image_" + newDiv.id;	
		newDiv.childNodes[1].innerHTML = article_5.name;	
		newDiv.childNodes[3].id = "select_" + newDiv.id;
		newDiv.childNodes[2].innerHTML = "£" + article_5.price;	
		var selectOpt = document.getElementById("select_" + newDiv.id).firstChild;
		newDiv.childNodes[4].id = "summ_" + newDiv.id;
		var selectDiv = document.getElementById(newDiv.childNodes[4].id);
		newDiv.childNodes[4].innerHTML = "£" + article_5.price;
		//Функция подсчета суммы элементов
		selectOpt.onchange = function() {
			selectDiv.innerHTML =  "£" + (article_5.price*selectOpt.value).toFixed(2);
		};					
	}
	if (newDiv.id == "art6") {
		newDiv.childNodes[0].id = "image_" + newDiv.id;	
		newDiv.childNodes[1].innerHTML = article_6.name;	
		newDiv.childNodes[3].id = "select_" + newDiv.id;
		newDiv.childNodes[2].innerHTML = "£" + article_6.price;	
		var selectOpt = document.getElementById("select_" + newDiv.id).firstChild;
		newDiv.childNodes[4].id = "summ_" + newDiv.id;
		var selectDiv = document.getElementById(newDiv.childNodes[4].id);
		newDiv.childNodes[4].innerHTML = "£" + article_6.price;
		//Функция подсчета суммы элементов
		selectOpt.onchange = function() {
			selectDiv.innerHTML =  "£" + (article_6.price*selectOpt.value).toFixed(2);
		};					
	}
	if (newDiv.id == "art7") {
		newDiv.childNodes[0].id = "image_" + newDiv.id;	
		newDiv.childNodes[1].innerHTML = article_7.name;	
		newDiv.childNodes[3].id = "select_" + newDiv.id;
		newDiv.childNodes[2].innerHTML = "£" + article_7.price;	
		var selectOpt = document.getElementById("select_" + newDiv.id).firstChild;
		newDiv.childNodes[4].id = "summ_" + newDiv.id;
		var selectDiv = document.getElementById(newDiv.childNodes[4].id);
		newDiv.childNodes[4].innerHTML = "£" + article_7.price;
		//Функция подсчета суммы элементов
		selectOpt.onchange = function() {
			selectDiv.innerHTML =  "£" + (article_7.price*selectOpt.value).toFixed(2);
		};					
	}
	if (newDiv.id == "art8") {
		newDiv.childNodes[0].id = "image_" + newDiv.id;	
		newDiv.childNodes[1].innerHTML = article_8.name;
		newDiv.childNodes[3].id = "select_" + newDiv.id;
		newDiv.childNodes[2].innerHTML = "£" + article_8.price;	
		var selectOpt = document.getElementById("select_" + newDiv.id).firstChild;
		newDiv.childNodes[4].id = "summ_" + newDiv.id;
		var selectDiv = document.getElementById(newDiv.childNodes[4].id);
		newDiv.childNodes[4].innerHTML = "£" + article_8.price;
		//Функция подсчета суммы элементов
		selectOpt.onchange = function() {
			selectDiv.innerHTML =  "£" + (article_8.price*selectOpt.value).toFixed(2);
		};					
	}		
}
//Подсчитываем сумму всех товаров
function CalculateSumm() {
	var total_summ = document.getElementById("price");
	var article_summ = document.getElementsByClassName("summ_article");
	var x = 0;
	for (i=0; i<article_summ.length; i++) {
		article_summ[i].innerHTML = article_summ[i].innerHTML.replace(/[^0-9.]/g, "");//Удаляем лишний символ значка валюты
		x += parseFloat(article_summ[i].innerHTML);
		console.log(article_summ[i].innerHTML);
	}
	total_summ.innerHTML = x.toFixed(2);
	//Сброс переменной на начальное значение
	x = 0;
}
insertToDOM();
//Подсчитываем сумму товаров в корзине
CalculateSumm();