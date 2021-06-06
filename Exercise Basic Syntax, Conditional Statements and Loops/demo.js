function exam(input) {
    let sweetcakes = input[0]
    let amountOfOrderedCakes = Number(input[1])
    let dayOfMonth = Number(input[2])
    let discount = 0;
    let additionaldisc = 0;
    let finalPriceAfterDiscount = 0;
 
    if (dayOfMonth <= 15) {
        if (sweetcakes === 'Cake') {
            let priceForOneCake = 24
            let priceForAllOrderedCakes = amountOfOrderedCakes * priceForOneCake
            if (dayOfMonth <= 22) {
                if (priceForAllOrderedCakes >= 100 && priceForAllOrderedCakes <= 200) {
                    discount = 0.15 * priceForAllOrderedCakes
                    finalPriceAfterDiscount = (priceForAllOrderedCakes - discount).toFixed(2)
                }
                if (200 < priceForAllOrderedCakes) {
                    discount = 0.25 * priceForAllOrderedCakes
                    finalPriceAfterDiscount = (priceForAllOrderedCakes - discount).toFixed(2)
                }
                if (dayOfMonth <= 15) {
                    additionaldisc = 0.1 * finalPriceAfterDiscount
                    finalPriceAfterAlldisc = (finalPriceAfterDiscount - additionaldisc).toFixed(2)

                }
            }
            console.log(finalPriceAfterAlldisc)
            } else if (sweetcakes === 'Souffle') {
                let priceForOneSouffle = 6.66
                let priceForAllOrderedSouffles = amountOfOrderedCakes * priceForOneSouffle
                if(dayOfMonth <= 22) {
                    if (priceForAllOrderedSouffles >= 100 && priceForAllOrderedSouffles <= 200) {
                        discount = 0.15 * priceForAllOrderedSouffles
                        finalPriceAfterDiscount = (priceForAllOrderedSouffles - discount).toFixed(2)

                }
                if (200 < priceForAllOrderedSouffles) {
                    discount = 0.25 * priceForAllOrderedSouffles
                    finalpriceAfterDisc = (priceForAllOrderedSouffles - discount).toFixed(2)
                }
                if (dayOfMonth <= 15) {
                    additionaldisc = 0.1 * finalpriceAfterDisc
                    finalPriceAfterAllDiscount = (finalpriceAfterDisc - additionaldisc).toFixed(2)
                }
            console.log(finalPriceAfterAllDiscount)
            } 
        }else if (sweetcakes === 'Baklava') {
                let priceForOneBaklava = 12.60
                let priceForAllOrderedBaklava = amountOfOrderedCakes * priceForOneBaklava
                if(dayOfMonth <= 22){
 
                if (priceForAllOrderedBaklava >= 100 && priceForAllOrderedBaklava <= 200 ) {
                    discount = 0.15 * priceForAllOrderedBaklava
                    finalPriceAfterDiscount = (priceForAllOrderedBaklava - discount).toFixed(2)

                }
                if (200 < priceForAllOrderedBaklava) {
                    discount = 0.25 * priceForAllOrderedBaklava
                    finalPriceAfterDiscount = priceForAllOrderedBaklava - discount
                }
                if (dayOfMonth <= 15) {
                    additionaldisc = 0.1 * finalPriceAfterDiscount
                    finalPriceAfterAlldisc = (finalPriceAfterDiscount - additionaldisc).toFixed(2)
                }
            }
 
            console.log(finalPriceAfterAlldisc)
        }
        }
        else if (dayOfMonth > 15) {
            if (sweetcakes === 'Cake') {
                let priceForOneCake = 28.70
                let priceForAllOrderedCakes = amountOfOrderedCakes * priceForOneCake
                if (dayOfMonth <= 22) {
                    if (priceForAllOrderedCakes >= 100 && priceForAllOrderedCakes <= 200) {
                        discount = 0.15 * priceForAllOrderedCakes
                        finalPriceAfterDiscount = (priceForAllOrderedCakes - discount).toFixed(2)
                    }
                    if (200 < priceForAllOrderedCakes) {
                        discount = 0.25 * priceForAllOrderedCakes
                        finalPriceAfterDiscount = (priceForAllOrderedCakes - discount).toFixed(2)
                    }
                    if (dayOfMonth <= 15) {
                        additionaldisc = 0.1 * finalPriceAfterDiscount
                        finalPriceAfterAlldisc = (finalPriceAfterDiscount - additionaldisc).toFixed(2)
    
                    }
                }
                console.log(finalPriceAfterAlldisc)
                } else if (sweetcakes === 'Souffle') {
                    let priceForOneSouffle = 9.80
                    let priceForAllOrderedSouffles = amountOfOrderedCakes * priceForOneSouffle
                    if(dayOfMonth <= 22) {
                        if (priceForAllOrderedSouffles >= 100 && priceForAllOrderedSouffles <= 200) {
                            discount = 0.15 * priceForAllOrderedSouffles
                            finalPriceAfterDiscount = (priceForAllOrderedSouffles - discount).toFixed(2)
    
                    }
                    if (200 < priceForAllOrderedSouffles) {
                        discount = 0.25 * priceForAllOrderedSouffles
                        finalPriceAfterDiscount = (priceForAllOrderedSouffles - discount).toFixed(2)
                    }
                    if (dayOfMonth <= 15) {
                        additionaldisc = 0.1 * finalpriceAfterDisc
                        finalPriceAfterDiscount = (finalpriceAfterDisc - additionaldisc).toFixed(2)
                    }
                
                } 
                console.log(finalPriceAfterDiscount)
            }else if (sweetcakes === 'Baklava') {
                    let priceForOneBaklava = 16.98
                    let priceForAllOrderedBaklava = amountOfOrderedCakes * priceForOneBaklava
                    if(dayOfMonth <= 22){
     
                    if (priceForAllOrderedBaklava >= 100 && priceForAllOrderedBaklava <= 200 ) {
                        discount = 0.15 * priceForAllOrderedBaklava
                        finalPriceAfterDiscount = (priceForAllOrderedBaklava - discount).toFixed(2)
    
                    }
                    if (200 < priceForAllOrderedBaklava) {
                        discount = 0.25 * priceForAllOrderedBaklava
                        finalPriceAfterDiscount = priceForAllOrderedBaklava - discount
                    }
                    if (dayOfMonth <= 15) {
                        additionaldisc = 0.1 * finalPriceAfterDiscount
                        finalPriceAfterAlldisc = (finalPriceAfterDiscount - additionaldisc).toFixed(2)
                    }
                }
     
                console.log(finalPriceAfterAlldisc)
            }
            }
    }
exam(["Souffle",
"20",
"24"]);