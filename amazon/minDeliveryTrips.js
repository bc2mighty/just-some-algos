// https://aonecode.com/amazon-online-assessment/Minimum-Delivery-Trips

function minDeliveryTrips(arr) {
    const deliveryObj = {}
    for(let i = 0;i < arr.length;i++) {
        arr[i] in deliveryObj ? 
            deliveryObj[arr[i]] += 1 
            : deliveryObj[arr[i]] = 1;
    }
    const values = Object.values(deliveryObj);
    const unacceptedDelivery = values.find((val) => {
        return val < 2 || val > 3;
    })
    return unacceptedDelivery ? -1 : values.length;
}

let minDeliveryTripsVal = minDeliveryTrips([1, 8, 5, 8, 5, 1, 1]);
console.log(minDeliveryTripsVal);
minDeliveryTripsVal = minDeliveryTrips([3, 4, 4, 3, 1]);
console.log(minDeliveryTripsVal);
minDeliveryTripsVal = minDeliveryTrips([2, 4, 6, 6, 4, 2, 4]);
console.log(minDeliveryTripsVal);