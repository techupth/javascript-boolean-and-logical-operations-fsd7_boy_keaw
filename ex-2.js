// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;
let memberLevel = "Platinum";
lastMonthPaidMoreThan4000 = 4001;
isWeekday = true;
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
memberLevel = "Gold";
isPlatinum = memberLevel == "Platinum";

let hasPromotion;
hasPromotion =
  (lastMonthPaidMoreThan4000 > 4000 &&
    isWeekday &&
    !hasBoughtProductFromITCategory &&
    !hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);
