// contact-area can only import from grid, utils
import {SomeClass} from "shell/someCode";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ['contact-area' is not allowed to import from 'shell' (tsf-folders-imports-between-packages)]
import {SomeClass} from "todo-area";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ['contact-area' is not allowed to import from 'todo-area' (tsf-folders-imports-between-packages)]
