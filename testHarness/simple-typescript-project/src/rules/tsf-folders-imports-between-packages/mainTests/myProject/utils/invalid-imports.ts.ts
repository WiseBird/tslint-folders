// Utils package is configured to not allow imports from recognised packages
import {SomeClass} from "todo-area/someCode";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ['utils' is not allowed to import from 'todo-area' (tsf-folders-imports-between-packages)]
import {SomeClass} from "shell/someCode";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ['utils' is not allowed to import from 'shell' (tsf-folders-imports-between-packages)]
