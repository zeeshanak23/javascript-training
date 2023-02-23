let phone1 = {
    imeiNum: 1224,
    price: 120000,
    model: "samsung",
    quantityAvailable: 10
}

let phone2 = {
    imeiNum: 1224,
    price: 120000,
    model: "mi",
    quantityAvailable: 10
}

let phone3 = {
    imeiNum: 1224,
    price: 120000,
    model: "oneplus",
    quantityAvailable: 10
}

let phones = new Set([phone1, phone2, phone3])
let order = {
    model: "samsung",
    quantityOrdered: 5
}
const buyMobiles = (phoneSet, orderDetail) => {
    for (p of phoneSet) {
        if (p.model == orderDetail.model) {
            if (p.quantityAvailable > orderDetail.quantityOrdered) {
                p.quantityAvailable -= orderDetail.quantityOrdered;
            } else {
                console.log(`This mobile has only ${p.quantityAvailable}`);
                phoneSet.delete(p)
            }
        }
    }
    return phoneSet;
}

let a1 = {
    articleId: 1,
    publishedDate: new Date(),
    content: "Javascript has map and set as keyed collection",
    author: "torqbit"
}


let a2 = {
    articleId: 2,
    publishedDate: new Date(),
    content: "Javascript has arrow and anonymous functions",
    author: "torqbit"
}


let a3 = {
    articleId: 3,
    publishedDate: new Date(),
    content: "Javascript has lot of features",
    author: "shad"
}
const deleteSensitiveArticles = (word, articleSet) => {
    for (article of articleSet) {
        let words = article.content.split(" ")
        if (words.include(word)) {
            articleSet.delete(article)
        }
    }
    return articleSet;
}

const convertToMap = articleSet => {
    let mapOfArticles = new Map();
    for (article of articleSet) {
        if (mapOfArticles.has(article.author)) {
            let arrayOfArticles = mapOfArticles.get(article.author);
            arrayOfArticles[arrayOfArticles.length] = article
            mapOfArticles.set(article.author, arrayOfArticles)
        } else {
            mapOfArticles.set(article.author, [article])
        }

    }
    return mapOfArticles;
}

const articlesByAuthor = articleSet => {
    let mapOfArticles = new Map();
    for (article of articleSet) {
        if (mapOfArticles.has(article.author)) {
            mapOfArticles.set(article.author, mapOfArticles.get(article.author) + 1)
        } else {
            mapOfArticles.set(article.author, 1)
        }
    }
    return mapOfArticles;
}

const orderProduct = (userEmail, productIds, products, orders) => {
    const orderId = orders.size + 1
    const productIdSet = new Set(productIds)
    orders.add({
        orderId: orderId,
        dateOrdered: new Date(),
        userEmail: userEmail,
        productsOrdered: productIdSet
    })

    for (product of products) {
        if (productIdSet.has(product.productId)) {
            product.popularity += 1
        }
    }
    return products;
}

