class Properties {}

Properties.screenWidth = 150;
Properties.screenHeight = 200;
Properties.rows = 3;
Properties.columns = 3;
Properties.assets = {
  tiles: {URL:'assets/tiles.png', name:'tiles', width:32, height:32, frames:14},
  replay: {URL:'assets/replay.png', name:'replay', width:128, height:65},
}
Properties.boardTop = (Properties.screenHeight - (Properties.assets.tiles.height * Properties.columns)) * 0.5;
Properties.boardLeft = (Properties.screenWidth - (Properties.assets.tiles.width * Properties.rows)) * 0.5;
Properties.durtime = 1000; //ms

export default Properties;
