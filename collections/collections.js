const mobilePhones = new Set()
let phone_1 = {
    imei: 786687876788,
    model: "samsung",
    price: 10000,
    quantityAvailable: 20,
}
let phone_2 = {
    imei: 134567899876,
    model: 'mi',
    price: 12000,
    quantityAvailable: 10,
}
let phone_3 = {
    imei: 231234568976,
    model: 'realme',
    price: 14000,
    quantityAvailable: 15,
}
mobilePhones.add(phone_1)
mobilePhones.add(phone_2)
mobilePhones.add(phone_3)
let order = {
    model: "samsung",
    quantityOrdered: 5
}

const buyMobiles = (phoneSet, orderDetails) => {
    for (p of phoneSet) {
        if (p.model == orderDetails.model) {
            if (p.quantityAvailable > orderDetails.quantityOrdered) {
                p.quantityAvailable -= orderDetails.quantityOrdered;
            } else {
                console.log(`this mobile is available ${p.quantityAvailable}`)
                phoneSet.delete(p)
            }
        }
    }
    return mobilePhones;
}

buyMobiles(mobilePhones, orderDetails)

/**
 * const buyMobiles1 = (phoneSet, orderDetails) => {
    for (p of phoneSet) {
        if (p.model == orderDetails.model) {
            if (p.quantityAvailable > p.orderDetails.quantityOrdered) {
                p.quantityOrdered -= p.orderDetails;
            } else {
                console.log(`this mobile is available ${p.quantityAvailable}`)
                phoneSet.delete(p)
            }
        }
    }
    return phoneSet
}
**/

/**
 * Create a set of 5 newarticle which has the following properties.

a. articleId(number)

b. publishedDate(Date)

c. content(string)

d. author(string) 
**/

const newArticles = new Set();
let article1i = {
    articleId: 6765454534,
    publishedDate: new Date("2022-07-21"),
    content: "story about the sea",
    author: "Rudiyard Kilping",
}

let article2i = {
    articleId: 9087466788,
    publishedDate: new Date("2021-10-12"),
    content: "what is life",
    author: "Sipya Ford",
}

let article3i = {
    articleId: 3456767890,
    publishedDate: new Date("2023-06-15"),
    content: "technology development",
    author: "Sailes Marker",
}

let article4i = {
    articleId: 9876568990,
    publishedDate: new Date("2020-09-27"),
    content: "make in india digital",
    author: "Kailesh Ratthore",
}

let article5i = {
    articleId: 6754879089,
    publishedDate: new Date("2018-09-10"),
    content: "story based on boat",
    author: "Aman Gupta",
}
let article6i = {
    articleId: 6734879089,
    publishedDate: new Date("2019-09-10"),
    content: "story based on laptop",
    author: "Aman Gupta",
}
newArticles.add(article1i)
newArticles.add(article2i)
newArticles.add(article3i)
newArticles.add(article4i)
newArticles.add(article5i)
newArticles.add(article6i)

/**
 Create a function `listArticlesPublished` that takes a date as a parameter 
 and shows all the articles published on that date. 
 **/

const listarticlePublished_i = date => {
    for (l of newArticles) {
        if (l.publishedDate.getTime() == new Date(date).getTime()) {
            console.log(l);
        }
    }
}


/**
 Create a function `findArticlesByAuthor` that takes an author as a parameter and shows all the
  articles published by that author.
 **/
const findArticlesByAuthor1 = name => {
    for (i of newArticles) {
        if (i.author == name) {
            console.log(i)
        }
    }
}

/**
  Create a function `deleteArticles` that takes an author as a parameter and the article set as a parameter,
   deletes all the articles written by that author and returns the updated articles.
 **/

const deleteArticles3 = (author, setArticle) => {
    for (a of setArticle) {
        if (a.author == author) {
            newArticles.delete(a)
        }
    }
    return setArticle;
}

/**
  Create a function `deleteSensitiveArticles` that takes a sensitive word(string) as a parameter and the
   article set as a parameter, and deletes all the article that has that sensitive word 
 **/

/**
 const delete_SensitiveArticles = sensitiveWord => {
    for (s of newArticles) {
        let word = s.content.split(" ");
        for (i = 0; i < word.length; i++) {
            if (word[i] == sensitiveWord) {
                newArticles.delete(s)
            }
        }
    }
}
**/


const delete_SensitiveArticles11 = (word, articleSet) => {
    for (articles of articleSet) {
        let words = articles.content.split(" ")
        if (words.includes(word)) {
            articleSet.delete(a)
        }
    }
    return articleSet
}
/**Transfrom the set of articles into map of articles where the key would the author name and 
 value will be the array of articles written by the author. */


const convertToMap = articleSet => {
    let mapOfArticles = new Map();
    for (articles of articleSet) {
        if (mapOfArticles.has(articles.author)) {
            let arrayOfArticle = mapOfArticles.get(articles.author);
            arrayOfArticle[arrayOfArticle.length] = articles
            mapOfArticles.set(articles.author, arrayOfArticle)
        } else {
            mapOfArticles.set(articles.author, [articles])
        }
    }
    return mapOfArticles
}

const countAuthor11 = articleSet => {
    let mapOfArticles = new Map();
    for (articles of articleSet) {
        if (mapOfArticles.has(articles.author)) {
            mapOfArticles.set(articles.author, mapOfArticles.get(articles.author) + 1)
        } else {
            mapOfArticles.set(artiles.author, [articles])
        }
    }
}

/**Create an ecommerce application by creating following set and maps */

/**Create a map of 5 users, where email id is the key and value is the detail
  of the user. Example as below*/
const users = new Map();
users.set("zeeshan23@gmail.com", {
    name: "zeeshan",
    age: 20,
    city: "dhanbad"
});
users.set("shan23@gmail.com", {
    name: "shan",
    age: 24,
    city: "patna"
});
users.set("serajul67@gmail.com", {
    name: "serajul",
    age: 29,
    city: "kolkata"
});
users.set("mehrab32@gmail.com", {
    name: "mehrab",
    age: 25,
    city: "ranchi"
});
users.set("shadab78@gmail.com", {
    name: "shadab",
    age: 27,
    city: "dubai",
});

/** Create a set of products, each product has the following properties. */

const productses = new Set();
let product1 = {
    productId: 5,
    brandName: "gucci",
    quantityAvailable: 3,
    price: 12000,
    popularity: 0,
    dateManufactured: new Date(2020, 12, 23),
}
let product2 = {
    productId: 4,
    brandName: "reebok",
    quantityAvailable: 2,
    price: 15000,
    popularity: 0,
    dateManufactured: new Date(2022, 10, 10),
}
let product3 = {
    productId: 3,
    brandName: "pantaloon",
    quantityAvailable: 6,
    price: 23000,
    popularity: 0,
    dateManufactured: new Date(2019, 12, 12),
}
let product4 = {
    productId: 2,
    brandName: "dell",
    quantityAvailable: 5,
    price: 24000,
    popularity: 0,
    dateManufactured: new Date(2006, 10, 22),
}
let product5 = {
    productId: 1,
    brandName: "realme",
    quantityAvailable: 8,
    price: 120000,
    popularity: 0,
    dateManufactured: new Date(2010, 09, 10),
}
productses.add(product1)
productses.add(product2)
productses.add(product3)
productses.add(product4)
productses.add(product5)
let productIds = [1, 2]

/**Create an empty set of orders, where each order will be having the following properties. */
let neworders = new Set()

/**Create a function orderProduct that takes the productId, user email, array of productIds, 
 * products set and the empty orderset and save all this in the OrderSet and 
 * increments the product's popularity that has been ordered by 1 */

const orderProducts7 = (userEmail, productIds, products, orders) => {
    const orderId = orders.size + 1
    const productIdSet = new Set(productIds)
    orders.add({
        orderId: orderId,
        dateOrdered: new Date(),
        userEmail: userEmail,
        productsOrdered: productIdSet
    })
    for (p of products) {
        if (productIdSet.has(p.productId)) {
            p.popularity += 1
        }
    }
    return products;
}

/** Create a function listAllProducts that list all the products, order by manufacturing date */

const listAllProducts = (products) => {
    return Array.from(products)
        .sort((a, b) => a.dateManufactured.getTime() - b.dateManufactured.getTime())
}

/** Create a function, listUsersByCity that takes the city and users set as a parameter 
 * and list all the users in that city. */

const listUsersByCity1 = (city, users) => {
    return Array.from(users.values()).filter(u => u.city == city)
}

/**Create a function listOrdersByUsers that takes the orders set and products set as a parameter and 
 * returns a map of orders, where the key is the userId and
 *  value is the set of product brand name he has ordered. */

let listOrderByUsers6 = (orders, products) => {
    let mapOfOrder = new Map()
    let productArray = Array.from(products)
    for (o of orders) {
        let productsOrderedArray = Array.from(o.productsOrdered)
        let productBrands = productsOrderedArray.map(productId => {
            let productFound = productArray.find(p => p.productId == productId)
            return productFound.brandName
        })

        if (mapOfOrder.has(o.userEmail)) {
            let allbrandNames = Array.from(mapOfOrder.get(o.userEmail)).concat(productBrands)
            mapOfOrder.set(o.userEmail, new Set(allbrandNames))
        } else {
            mapOfOrder.set(o.userEmail, new Set(productBrands))
        }
    }
    return mapOfOrder;
}

/**Create a function listOrdersOfProducts that takes order set and products set as the parameter and
 *  returns a map of all the products, that has been ordered.
 *  The key of the returned map will be the brand name and the value will be the 
 *  number of times the product has been ordered. */

let listOrdersOfProducts1 = (orders, products) => {
    let mapOfOrder = new Map()
    let productArray = Array.from(products)
    for (o of orders) {
        let productsOrderedArray = Array.from(o.productsOrdered)
        let productBrands = productsOrderedArray.map(productId => {
            let productFound = productArray.find(p => p.productId == productId)
            return productFound.brandName
        })
        productBrands.forEach(p => {
            if (mapOfOrder.has(p)) {
                mapOfOrder.set(p, mapOfOrder.get(p) + 1)
            } else {
                mapOfOrder.set(p, 1)
            }
        })
    }

}

/**Create a function sortProducts that takes the product set and the field name as the parameter and 
 * returns an array of products that are sorted by the field name. For example if the function called 
 * - sortProducts(products, "popularity"), then the product set should be sorted by its popularity. */

const sortProducts1 = (productses, fieldName) => {
    return Array.from(productses).sort((a, b) => a[fieldName] - b[fieldName])
}



/**Create a function mostPopularProductUsers that takes the products, orders, and users as the parameter 
 * and returns an array of all the users who have ordered the product that has the highest popularity. */
let mostPopularProductUsers = (products, orders, users) => {
    let productArr = Array.from(products)
    let maxPopularity = Array.from(products).reduce((maxPop, currElem) => {
        if (maxPop > currElem.popularity) {
            return maxPop
        } else {
            return currElem.popularity
        }
    }, 0);

    let productIds = productArr.filter(p => p.popularity == maxPopularity).map(p => p.productId)

    let userWithPopularProduct = [];
    for (o of orders) {
        let hasProduct = false;
        for (orderProductId of o.productsOrdered) {
            if (!hasProduct && productIds.includes(orderProductId)) {
                hasProduct = true;
            }
        }
        if (hasProduct) {
            userWithPopularProduct.push(users.get(o.userEmail))
        }
    }
    return userWithPopularProduct;
}





/**objects */

function Users(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city

}



const user11 = new Users("krishna", 20, "dhanbad")
const user12 = new Users("afroz", 25, "punjab")
const user13 = new Users("sohail", 27, "haryana")
const user14 = new Users("zeeshan", 28, "ranchi")
const user15 = new Users("shadab", 26, "mumbai")

function Orders(orderId, dateOrdered, userEmail, productIdSet) {
    this.orderId = orderId;
    this.dateOrdered = dateOrdered;
    this.userEmail = userEmail;
    this.productIdSet = productIdSet
}

function Products(productId, brandName, quantityAvailable, price, popularity, dateManufactured) {
    this.productId = productId;
    this.brandName = brandName;
    this.quantityAvailable = quantityAvailable;
    this.price = price;
    this.popularity = popularity;
    this.dateManufactured = dateManufactured;
}

const product11 = new Products(1, "pantaloon", 1, 30000, 0, new Date(2020, 10, 22))
const product12 = new Products(2, "reebook", 9, 23000, 0, new Date(2022, 12, 12))
const product13 = new Products(3, "dell", 10, 8000, 0, new Date(2018, 09, 20))
const product14 = new Products(4, "mi", 8, 60000, 0, new Date(2023, 01, 15))
const product15 = new Products(5, "samsung", 4, 50000, 0, new Date(2010, 02, 09))

const orderProducts = (userEmail, productIds, products, orders) => {
    const orderId = orders.size + 1
    const productIdSet = new Set(productIds)
    orders.add = new Orders(orderId, new Date(), userEmail, productIdSet)

    for (p of products) {
        if (productIdSet.has(p.productId)) {
            p.popularity += 1
        }
    }
    return products;
}


function Cars(brandName, modelName, yearOfManufactured) {
    this.brandName = brandName;
    this.modelName = modelName;
    this.yearOfManufactured = yearOfManufactured;
}
const car21 = new Cars("maruti", "vxi", 2020)
const car31 = new Cars("hyundai", "lxi", 2021)
const car43 = new Cars("bmw", "zxi", 2022)

// let arrayCar = Array.from(car21, car31, car43)
let cars1 = [car21, car31, car43]
let listCarsEarlierThan34 = (cars1, years) => {
    return cars1.filter(y => y.yearOfManufactured < years)
}
const listCarsAge = (cars1) => {
    cars1.forEach(c => {
        console.log(`the ${c.brandName} is model ${c.modelName} is ${new Date().getUTCFullYear() - c.yearOfManufacture} years old`)
    }
    )
}


