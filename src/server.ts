import {app} from './app.js' ;
import {PORT} from './config/env.js' ;
//const PORT = 3000;
export function startserver() {
    app.listen(PORT, () => {
        console.log(`[server]: running on PORT${PORT}`)
    });
}
 startserver();