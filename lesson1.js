const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

var employersNames = employers.filter(name => {
    return name.length > 0
});

employersNames = employersNames.map(name => {
    return name.toLowerCase().trim();
})

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {
    cash,
    eu,
    rus
} = sponsors;

function calcCash(total = 0, ...cash) {
    const [money] = cash;
    money.forEach(sum => {
        total += +sum
    })
    return total;
}

const money = calcCash(null, cash);
const [a, b] = eu;

function makeBusiness(owner, director = 'Victor', cash, emp) {
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${a}. It's a huge risk.`);
}
makeBusiness(...['Sam', null, money, employersNames]);