// todo-area can only import from grid, utils
import {SomeClass} from "shell/someCode";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ['todo-area' is not allowed to import from 'shell' (tsf-folders-imports-between-packages)]
import {SomeClass} from "contact-area";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ['todo-area' is not allowed to import from 'contact-area' (tsf-folders-imports-between-packages)]
