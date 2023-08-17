import { createSchema } from "sanity";
import restaurant from "./restaurant";
import category from "./category";
import dish from "./dish";
import featured from "./featured";

import { schemaTypes } from ".";

export default createSchema({
    name: "default",
    types: schemaTypes.concat([
        restaurant,
        category,
        dish,
        featured
    ])
});
