import fs from 'fs';
import path from 'path';

import { primi, deuce } from './01/main.mjs';
import { Cipher } from 'crypto';

const main = () => {
    const args = process.argv.slice(2);
    if (args.length < 3) {
      console.error('Usage: node aoc.js <day> <version> <InputFile>');
      process.exit(1);
    }
  
    const [day, version, inputFile] = args;
    const criteria = fs.readFileSync(path.join(day, inputFile), 'utf-8').split('\n').filter(Boolean);
   
    let output;
    if (version == 1) {
    output = primi(criteria)
      console.log('asdsdasdasd')
    } else {
      output = deuce(criteria)
    }
   

    console.log('day:', day, 'part:', version, output)
  };
  
main()