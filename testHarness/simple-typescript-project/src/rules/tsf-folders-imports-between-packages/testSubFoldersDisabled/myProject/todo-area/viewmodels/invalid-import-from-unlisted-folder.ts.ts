import {SomeClass} from "../components/SomeClass";
// disabled! ['todo-area' sub folder 'viewmodels' is not allowed to import from 'components' (tsf-folders-imports-between-packages)]
import {SomeClass} from "../viewmodels/SomeClass";
// import from utils IS allowed:
import {SomeClass} from "../utils/SomeClass";
import {SomeClass} from "unrecognisedPackage/someCode";
import {SomeClass} from "./someFolder/someCode";
import {SomeClass} from "../someCode";
