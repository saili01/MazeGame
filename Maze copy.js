//Pulling off some different properties from Matter
const {Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse}= Matter;

const engine=Engine.create();
const {world}=engine;
const width=800;
const height=600;
const render=Render.create({
    //tell the matter js exactly where we want to show the drawing of the world inside the dom
    element:document.body,
    engine:engine,
    //height amd width of the canvas element
    options:{
        width,
        height,
        wireframes:false,
    }

});
Render.run(render);
Runner.run(Runner.create(),engine);
//this will help to click and drag the rectangle anywhere around the canvas as a spring
World.add(world,MouseConstraint.create(engine,{mouse: Mouse.create(render.canvas)}))
//created shape of rectangle with some properties
// const shape=Bodies.rectangle(200,200,50,50,{
//     isStatic:true //if not true then the shape will fall down due to gravity and become invisible
// });
//Creating the walls so that the shape rectangle does not fall down and go invisible. The rectangle will fall down and stop at the bottom border
const walls=[
    Bodies.rectangle(400,0,800,40,{isStatic:true}),
    Bodies.rectangle(400,600,800,40,{isStatic:true}),
    Bodies.rectangle(0,300,40,600,{isStatic:true}),
    Bodies.rectangle(800,300,40,600,{isStatic:true})
]
World.add(world,walls); //Here we added our shape to the world
for(let i=0;i<50;i++)
{
    if(Math.random()>0.5){
        World.add(world,Bodies.rectangle(Math.random()*width,Math.random()*height,30,50));
    }
    else{
        World.add(world,Bodies.circle(Math.random()*width,Math.random()*height,40));
    }
}