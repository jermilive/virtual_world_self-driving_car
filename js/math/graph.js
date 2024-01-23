class Graph {
  constructor(points = [], segmants = []) {
    this.points = points;
    this.segments = segments;
  }
  draw(ctx) {
    for (const seg of this.segments) {
      seg.draw(ctx);
    }
    for (const point of this.points) {
      point.draw(ctx);
    }
  }
}
