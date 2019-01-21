class makeBusiness {
  constructor(owner, director = "Victor", cash, emp) {
    this.ownert = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }
  tell(sumSponsors, a) {
    console.log(
      `We have a business. Owner: ${this.owner}, director: ${
        this.director
      }. Our budget: ${this.cash}. And our employers: ${this.emp}`
    );
    console.log("And we have a sponsors: ");
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${a}. It's a huge risk.`);
  }
}

function Result(eu, rus, money, employersNames) {
  const sumSponsors = [...eu, ...rus, "unexpected sponsor"];
  let buisness = new makeBusiness(...["Sam", null, money, employersNames]);
  buisness.tell(sumSponsors);
}

export {
  Result
};