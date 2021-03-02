let orders = require("./data.json").orders;

class OrdersAnalyzer {
  constructor() {
    this.weekdays = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
  }

  totalQuantity(productId, orders) {
    // TODO: Implement
    let output = {};
    for (let i = 0; i < this.weekdays.length; i++) {
      for (let j = 0; j < orders.length; j++) {
        let day = new Date(orders[j].creationDate).getDay();
        if (day === i) {
          for (let k = 0; k < orders[j].orderLines.length; k++) {
            console.log(
              orders[j].orderLines[k].productId,
              orders[j].orderLines[k].quantity
            );
            output[this.weekdays[i]] += orders[j].orderLines[k].quantity;
          }
        }
      }
      output[this.weekdays[i]] = 0;
    }
    return output;
  }
}
