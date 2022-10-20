import { SVG } from "https://cdn.skypack.dev/@svgdotjs/svg.js@3.1.2";
import { random } from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.37";

const width = 768;
const height = 768;

const foregroundColor = getComputedStyle(document.getElementsByTagName('body')[0]).getPropertyValue('--color-foreground');
const backgroundColor = getComputedStyle(document.getElementsByTagName('body')[0]).getPropertyValue('--color-background');

const svg = SVG().viewbox(0, 0, width, height).addTo('body')
    .attr('preserveAspectRatio', 'xMidYMid slice');

svg.rect(width, height).fill('#E04250');

const baseShape = svg.circle(width)
    .cx(width / 2)
    .cy(height / 2)
    .fill('#fff');

// Get the base shape's bounding box
const bounds = baseShape.node.getBBox();

// Split the base shape's bounding box into line segments
const boundsSegments = [
  [
    { x: bounds.x, y: bounds.y },
    { x: bounds.x + bounds.width, y: bounds.y }
  ],
  [
    { x: bounds.x + bounds.width, y: bounds.y },
    { x: bounds.x + bounds.width, y: bounds.y + bounds.height }
  ],
  [
    { x: bounds.x + bounds.width, y: bounds.y + bounds.height },
    { x: bounds.x, y: bounds.y + bounds.height }
  ],
  [
    { x: bounds.x, y: bounds.y + bounds.height },
    { x: bounds.x, y: bounds.y }
  ]
];

// How many lines do we want?
const numLines = 2048;

const lineGroup = svg.group();

// Render the lines!
for (let i = 0; i < numLines; i++) {
  // Pick two points along the shape's bounding box and draw a line between them
  const segment1 = random(boundsSegments);
  const segment2 = random(boundsSegments);

  const startX = random(segment1[0].x, segment1[1].x);
  const startY = random(segment1[0].y, segment1[1].y);

  const endX = random(segment2[0].x, segment2[1].x);
  const endY = random(segment2[0].y, segment2[1].y);

  lineGroup.line(startX, startY, endX, endY).stroke({
    width: random(1, 8),
    color: random([ foregroundColor, backgroundColor ])
  });
}

lineGroup.maskWith(baseShape);