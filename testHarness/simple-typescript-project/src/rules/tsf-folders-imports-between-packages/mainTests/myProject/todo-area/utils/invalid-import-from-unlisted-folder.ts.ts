import {SomeClass} from "../components/SomeClass";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ['todo-area' sub folder 'utils' is not allowed to import from 'components' (tsf-folders-imports-between-packages)]
import {SomeClass} from "../viewmodels/SomeClass";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ['todo-area' sub folder 'utils' is not allowed to import from 'viewmodels' (tsf-folders-imports-between-packages)]
import {SomeClass} from "unrecognisedPackage/someCode";
import {SomeClass} from "./someFolder/someCode";
import {SomeClass} from "../someCode";
