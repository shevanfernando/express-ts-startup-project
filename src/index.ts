/**
 * @created 06/10/2021 - 10:58
 * @project express-ts-startup-project
 * @author  Shevan
 * @file    index
 */

import app from '@src/app';

const port = 5000;

app.listen(port, async () => console.log(`Server is listening on port ${port}`));
