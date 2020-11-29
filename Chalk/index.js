/*
    Name: Quinn Ridings
    Date: 11/13/2020
    For: OTC-CIS-131 Chalk Assignment
*/


//"Import" the chalk library/package
    const chalk = require('chalk');


//Abbreviated commands
    const log = console.log;
    const jerry = chalk.green;
    const jerryThought = chalk.bgKeyword('pink').black.bold;
    const boss = chalk.cyanBright
    const operator = chalk.italic.bold.hex('FFA8FD');
    const operatorVoice = chalk.bgKeyword('white').black.bold;

//Logging this as 1 big log instead of splitting to help keep formatting a little bit easier.
log(chalk.bgKeyword('black').white(`
|===========================================================|
|                                                           |
|   Jerry woke up this morning half off his bed.            |
|                                                           |
|   He coughed as he leaned up to turn off his alarm.       |
|                                                           |
|   ` + jerry(`   It's already 6:00?`) + `                                   |
|                                                           |
|   He says as he groans.                                   |
|                                                           |
|   He goes through his morning routine,                    |
|        brushin' his teeth,                                |
|        and combing his greasy hair.                       |
|                                                           |
|   He leaves to take his bike to the nearest business to   |
|        where he lives, which is still about 20 minutes    |
|        by bike.                                           |
|                                                           |
|   ` + boss(`   Hey Jerry! Ready to start in the kitchen?`) + `            |
|                                                           |
|   Yells Jerry's boss.                                     |
|                                                           |
|   ` + jerry(`   Yeah! I'll be there after I put my belongings away!`) + `  |
|                                                           |
|   After putting everything away and starting to clean the |
|        restaurant's dishes in the kitchen. Jerry's day    |
|        started going by slower and slower                 |
|                                                           |
|   Eventually, Jerry started to feel a little weird.       |
|                                                           |
|     ` + jerryThought(` Huh? What's going on? `) + `                               |
|     ` + jerryThought(`I thought this wasn't supposed to happen anymore?`) + `     |
|                                                           |
  |  Things started getting distorted and warped.          | 
|                                                           |      
    | This was happening in almost an electronical kind of    |  
  |        way. It seemed like his eyes were glitching on him.   |
   |                                                           |        
     | ` +jerryThought(` Seriously? Guess it still failed.`) + `              |            
  |  ` + jerryThought(` I thought we worked out all the kinks? `) + `             |   
|                                                           |         
   | ` + operatorVoice(` Unfortunately not, back to the drawing board then. `) + `  |   
  |    ` + operatorVoice(' Here let me shut it all down. ') + `                      |     
|                                                           |
   | Said a mysterious voice.                                  |
         |                                   |                     
   |  After they said that everything started shifting          |
  |     back to normal, and started to fade.                   | 
  |                                                           |
   |                                                           |
    |                                                            | 
   |                                                            | 
  |                                                           | 
 |                                                           | 
|                                                           |
|                                                           |
|                                                           |
|                                                           |
|                                                           |
|                                                           |
|                                                           |
|   A bright light filled Jerry's eyes and he winced at     |
|        the change in lighting.                            |
|                                                           |
|   ` + operator(`   Feelin' alright?`) + `                                     |
|                                                           |
|   Jerry heard from a somewhat familiar voice.             |
|                                                           |
|   ` + jerry(`   Yeah yeah, I'm fine Operator.                        ` + chalk.white('|') + `
` + chalk.white('|') + `      We'll work out the kinks and try it again tomorrow.  ` + chalk.white('|') + `
` + chalk.white('|') + `      Alright?`) + `                                             |
|                                                           |
|   ` + operator('   Alright. ') + `                                            |
|                                                           |
|   ` + jerry(`   Oh and Operator?`) + `                                     |
|                                                           |
|   ` + operator('   Yes? ') + `                                                |
|                                                           |
|   ` + jerry(`   From now on in test runs, let's NOT give me a dude`) + `   |
|   ` + jerry('     who has to bike to work? Makes for an easier test.') + ` |
|                                                           |
|   The operator laughed, and while smiling he said;        |
|                                                           |
|   ` + operator('   Alright, fair enough') + `                                 |
|                                                           |
|                                                           |
|                                                           |
|                                                           |
|                           ` + chalk.bold.italic.underline(' FIN ') + `                           |
|===========================================================|
`));