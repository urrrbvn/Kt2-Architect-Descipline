
//Создам массив объектов с наименованиями товаров

let productsArr = [
    {name: 'Петрушка', price: 150},
    {name: 'Творог', price: 100},
    {name: 'Треска', price: 200},
    {name: 'Курица', price: 250},
    {name: 'Яблоки', price: 90},
]

//Создаю дополнительный объект, он будет использоваться для расчета цены в долларах с учетом налогов

let priceParams = {
    tax: 1.2 ,
    dollarRatio: 60
}

//Создаем класс, который через конструктор формирует отдельный нужный мне объект с данными товара, добавляя параметр id

class Product{
    constructor(id, productParams){
        this.id = id
        this.price = productParams.price
        this.name = productParams.name
    }
}

// Создаем новый класс, он будет наследовать свойства Product 

class ProductInDollars extends Product{
    constructor(id,productParams, priceParams){

        super(id,productParams),
        this.taxPrice = this.price * 1,2,
        this.dollarPrice = this.taxPrice / priceParams.dollarRatio
    }
}

const FoodCart = []

function FoodcartAdd(products){

    let id = 1

    for (let product of products){
        let newProd = new ProductInDollars(id ,product, priceParams)
        FoodCart.push(newProd)
        id++
    }
    return FoodCart
}
console.log(FoodcartAdd(productsArr))
//В при выполнении данного кода, мы из массива с продуктами получили его расширенную верисю. 
// С помощью принципов ООП я создал функционал, позволяющий проводить перевод цен, например для страниц с вариативной локализацией.
// С полученным массивом можно сделать что угодно, например вывести его на странице с товарами.
