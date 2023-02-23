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