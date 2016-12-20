import antlr4 from 'antlr4/index';
import ArtlingLexer from './generated/ArtlingLexer';
import ArtlingParser from './generated/ArtlingParser';


const input = "your text to parse here"
const chars = new antlr4.InputStream(input);
const lexer = new ArtlingLexer.MyGrammarLexer(chars);
const tokens  = new antlr4.CommonTokenStream(lexer);
const parser = new ArtlingParser.MyGrammarParser(tokens);

parser.buildParseTrees = true;

const tree = parser.MyStartRule();

console.log('hello');
