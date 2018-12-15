// grid-package cannot import from any other recognised packages
import {SomeClass} from "shell/someCode";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ['grid-package' is not allowed to import from 'shell' (tsf-folders-imports-between-packages)]
import {SomeClass} from "todo-area";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ['grid-package' is not allowed to import from 'todo-area' (tsf-folders-imports-between-packages)]
import {SomeClass} from "unrecognisedPackage/someCode";
import {SomeClass} from "utils/someCode";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ['grid-package' is not allowed to import from 'utils' (tsf-folders-imports-between-packages)]
import {SomeClass} from "./someFolder/someCode";
import {SomeClass} from "../someCode";
