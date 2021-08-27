// Javascript object Notation - JSON
const user = { id: 12, name: 'Subrata Shuvo', job: 'singer' };
const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);

const shop = {
    name: 'Ladies First',
    address: 'School Road',
    profit: 15000,
    products: ['laptop', 'Mobile', 'pepsi'],
    owner: {
        name: 'Subrata Shuvo',
        profession: 'Junior web dev'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted)