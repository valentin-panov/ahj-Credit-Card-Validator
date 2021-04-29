export default function getCardType(number) {
  if (!number) {
    return false;
  }
  let type = false;
  switch (number.substring(0, 2)) {
    // не придумал с ходу, как красиво решить это, кроме как захардкодить (
    case `40`:
    case `41`:
    case `42`:
    case `43`:
    case `44`:
    case `45`:
    case `46`:
    case `47`:
    case `48`:
    case `49`:
      type = 'visa';
      break;
    case '22':
      type = 'mir';
      break;
    case '51':
    case '52':
    case '53':
    case '54':
    case '55':
      type = 'master';
      break;
    case '34':
    case '37':
      type = 'amex';
      break;
    case '31':
    case '35':
      type = 'jcb';
      break;
    case '30':
    case '36':
    case '38':
      type = 'diners_club';
      break;
    case '60':
      type = 'discover';
      break;
    default:
      type = true;
      break;
  }
  return type;
}

// Credit Card Type	Credit Card Number
// American Express	371449635398431
// Diners Club	30569309025904
// Discover	6011111111111117
// JCB	3530111333300000
// MasterCard	5555555555554444
// Visa	4111111111111111

// Card length:

// Visa and Visa Electron: 13 or 16
// Mastercard: 16
// Discover: 16
// American Express: 15
// Diner's Club: 14 (including enRoute, International, Blanche)
// Maestro: 12 to 19 (multi-national Debit Card)
// Laser: 16 to 19 (Ireland Debit Card)
// Switch: 16, 18 or 19 (United Kingdom Debit Card)
// Solo: 16, 18 or 19 (United Kingdom Debit Card)
// JCB: 15 or 16 (Japan Credit Bureau)
// China UnionPay: 16 (People's Republic of China)
