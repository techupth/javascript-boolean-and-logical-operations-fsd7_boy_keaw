// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 ;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;

// John information
let lastMonthBought = 4001;
let boughtDay = "Friday";
let boughtITCategory = false;
let hasDiscountEvent = true;
let memberCard = "Gold";

// Reassign John
lastMonthPaidMoreThan4000 = lastMonthBought > 4000;
isWeekday = /Monday|Tuesday|Wednesday|Thursday|Friday/.test(boughtDay);
hasBoughtProductFromITCategory = boughtITCategory;
hasAttendedDiscountEvent = hasDiscountEvent;
isPlatinum = memberCard === "Platinum";

hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    hasBoughtProductFromITCategory &&
    hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);
