import {SomeClass} from "grid-package/someCode";
import {SomeClass} from "unrecognisedPackage/someCode";
import {SomeClass} from "utils/someCode";
import {SomeClass} from "./someFolder/someCode";
import {SomeClass} from "../someCode";
// some local directory that happens to use the package name 'todo-area':
import {SomeClass} from "./todo-utils/todo-area/someCode";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ [do not use a banned import path from package (tsf-folders-imports-between-packages)]
