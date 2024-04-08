function packaging(numGroups, arr) {
    const packageGroupObj = {}
    for(let p of arr) {
        !packageGroupObj[p] 
            ? packageGroupObj[p] = 1
            : packageGroupObj[p] += 1
    }

    let uniquePackages = [...new Set(Object.keys(packageGroupObj))];
    uniquePackages = uniquePackages[0] < uniquePackages[uniquePackages.length - 1] ? uniquePackages.reverse() : uniquePackages
    let currPackageIdx = 0, currentVal = uniquePackages[0];
    while(currPackageIdx < uniquePackages.length) {
        // if(packageGroupObj[uniquePackages[currPackageIdx] - 1])
    }
    // for(let p of arr) {
    //     if(p - 1 < 1) {
    //         packages.push(p)
    //     } else if(!packageGroupObj[p - 1] && !packageGroupObj[p + 1]) {
    //         packages.push(p - 1)
    //         continue
    //     } else if(!packageGroupObj[p - 1] && packageGroupObj[p + 1]) {
    //         packages.push(p)
    //     } else {
    //         packages.push(p)
    //     }
    // }
    console.log(packageGroupObj, uniquePackages);
}

packaging(4, [3,1,3,4])
packaging(4, [1,3,2,2])
packaging(4, [1,1,1,1])
packaging(4, [3,2,3,5])
