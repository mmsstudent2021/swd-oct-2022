import camelCase from "lodash/camelCase";
import moment from "moment";
import * as bootstrap from 'bootstrap'

import "./style.scss";

const myName = "hein htet zan";

console.log(camelCase(myName));
console.log( moment().format("D MMM Y") )
