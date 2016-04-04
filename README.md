## Thanks

Using the scaffold of [Phaser ES6 Boilerplate](https://github.com/belohlavek/phaser-es6-boilerplate).

Install dependencies

`npm install`

Run a development build...

`npm start`

...or a production build.

`npm run production`

Development builds will copy `phaser.min.js` together with `phaser.map` and `phaser.js`
Your ES6 code will be transpiled into ES5 and concatenated into a single file.
A sourcemap for your code will also be included (by default `game.map.js`).

Production builds will only copy `phaser.min.js`. Your ES6 code will be transpiled and
minified using UglifyJS.

Any modification to the files inside the `./src` and `./static` folder will trigger a full page reload.

If you modify the contents of other files, please manually restart the server.

## Notice

if you have the error `watch ENOSPC`, it's caused by the linux kernel inotify watch limit reached, run the command below and have fun~

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
