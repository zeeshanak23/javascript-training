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

/**const buyMobiles1 = (phoneSet, orderDetails) => {
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
}**/

/**Create a set of 5 newarticle which has the following properties.

a. articleId(number)

b. publishedDate(Date)

c. content(string)

d. author(string) **/

const new_articles = new Set();
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
new_articles.add(article1i)
new_articles.add(article2i)
new_articles.add(article3i)
new_articles.add(article4i)
new_articles.add(article5i)

/**Create a function `listArticlesPublished` that takes a date as a parameter and shows all the articles published on that date. */

const listarticlePublished_i = date => {
    for (l of new_articles) {
        if (l.publishedDate.getTime() == new Date(date).getTime()) {
            console.log(l);
        }
    }
}


/**Create a function `findArticlesByAuthor` that takes an author as a parameter and shows all the articles published by that author.
 */
const findArticlesByAuthor1 = name => {
    for (i of new_articles) {
        if (i.author == name) {
            console.log(i)
        }
    }
}

/**Create a function `deleteArticles` that takes an author as a parameter and the article set as a parameter, deletes all the articles written by that author and returns the updated articles. */

const deleteArticles1 = (author, SetArticle) => {
    for (a of SetArticle) {
        if (a.author == author) {
            new_articles.delete(a)
        }
    }
    return SetArticle;
}