import { Games } from "./games.module.js";
import { UI } from "./ui.module.js";


$(document).ready(function () {
    new UI();
    new Games();
});

