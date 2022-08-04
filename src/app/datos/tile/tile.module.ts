
export class Tile{
  color?: string;
  cols?: number;
  rows?: number;
  text?: string;
  constructor(color:string,cols:number,rows:number,text:string){
    this.color = color,
    this.cols = cols,
    this.rows = rows,
    this.text = text
  }
}
