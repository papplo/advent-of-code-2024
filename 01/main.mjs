function primi(criteria) {
    //01 (a)
    let sum = 0;
    const leftlist = [];
    const rightlist = [];

    for (let index = 0; index < criteria.length; index++) {
        const [n1, n2] = criteria[index].split('   ');
        leftlist.push(n1);
        rightlist.push(n2);
    }

    leftlist.sort((a, b) => a - b);
    rightlist.sort((a, b) => a - b);

    for (let index = 0; index < leftlist.length; index++) {
        const diff = rightlist[index] - leftlist[index];

        sum += Math.abs(diff)
        console.log(diff, sum)
    }

    return sum

}

const deuce = (criteria) => {
    //01 b

    let sum  = 0;
    let leftlist = [];
    let rightlist = [];

    for (let index = 0; index < criteria.length; index++) {
        const [n1, n2] = criteria[index].split('   ');
        leftlist.push(n1);
        rightlist.push(n2);
    }

    leftlist.forEach(n1 => {
       const simScore = [...rightlist].filter(n2 => n2 === n1).length;
       sum += n1 * simScore
       console.log(simScore, sum);
    })

} 


export {
    primi, deuce
}