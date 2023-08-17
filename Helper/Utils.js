export const currencyFormatter = (number) => {
        number = new Intl.NumberFormat("en-za", {
          style: "currency",
          currency: "ZAR",
        }).format(number);
    
     return number;
};
