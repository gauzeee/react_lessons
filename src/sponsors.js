const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ["SRL", "PLO", "J&K"],
    rus: ["RusAuto", "SBO"]
};

const {
    cash,
    eu,
    rus
} = sponsors;

function calcCash(total = 0, ...cash) {
    const [money] = cash;

    money.forEach(sum => {
        total += +sum;
    });
    return total;
}
const money = calcCash(null, cash);

const [a, b] = eu;

export {
    eu,
    rus,
    money,
};