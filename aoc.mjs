import fs from 'fs';
import path from 'path';

const main = () => {
    const args = process.argv.slice(2);
    if (args.length < 3) {
      console.error('Usage: node aoc.js <day> <version> <InputFile>');
      process.exit(1);
    }
  
    const [day, version, inputFile] = args;
    const criteria = fs.readFileSync(path.join(day, inputFile), 'utf-8').split('\n').filter(Boolean);
    
    function test(criteria) {
      //01 (a)
      let sum = 0;
      const leftlist = [];
      const rightlist = [];

      for (let index = 0; index < criteria.length; index++) {
        const [n1, n2] = criteria[index].split('   ');
        leftlist.push(n1);
        rightlist.push(n2);
      }

      leftlist.sort((a,b) => a-b);
      rightlist.sort((a,b) => a-b);

      for (let index = 0; index < leftlist.length; index++) {
        const diff = rightlist[index] - leftlist[index];

        sum += Math.abs(diff)
        console.log(diff, sum)
      }

      return sum

    }

    const output = test(criteria);

    console.log('output: ', day, output)
  };
  
main()