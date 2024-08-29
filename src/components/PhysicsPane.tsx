import Matter from "matter-js";
import { useEffect, useRef, useState } from "react";
import { colors, colorsSansWhite, selectRandom } from "../consts";

const SIZE = 120;
const X_OFFSET = 0;
const Y_OFFSET = 40;

const PhysicsPane = () => {
    const sceneRef = useRef(null);
    const engineRef = useRef(Matter.Engine.create());
    const [running, setRunning] = useState(false);
    Matter.use("matter-dom-plugin");

    useEffect(() => {
        // Create an engine
        const engine = engineRef.current;
        const { world } = engine;

        // Create a renderer
        const render = Matter.Render.create({
            element: sceneRef.current!,
            engine: engine,
            options: {
                width: 1120,
                wireframes: false,
                background: "rgb(0,0,0,0)",
            },
        });

        const ground = Matter.Bodies.rectangle(400, 610, 1500, 60, {
            isStatic: true,
            render: {
                opacity: 0,
            },
        });

        const objects = [ground];

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 5; j++) {
                objects.push(
                    Math.random() < 0.5
                        ? Matter.Bodies.rectangle(
                              i * SIZE + X_OFFSET,
                              j * SIZE + Y_OFFSET,
                              SIZE,
                              SIZE,
                              {
                                  render: {
                                      fillStyle: selectRandom(colorsSansWhite),
                                  },
                              },
                          )
                        : Matter.Bodies.circle(
                              i * SIZE + X_OFFSET,
                              j * SIZE + Y_OFFSET,
                              SIZE / 2,
                              {
                                  render: {
                                      fillStyle: selectRandom(colorsSansWhite),
                                  },
                              },
                          ),
                );
            }
        }

        // Add the bodies to the world
        Matter.World.add(world, objects);

        // Run the renderer
        Matter.Render.run(render);
        const gameloop = setInterval(loopLogic, 10);

        // Cleanup on unmount
        return () => {
            clearInterval(gameloop);
            Matter.World.clear(world, false);
            Matter.Engine.clear(engine);
            Matter.Render.stop(render);
            render.canvas.remove();
            render.textures = {};
        };
    }, []);

    const loopLogic = () => {
        Matter.Engine.update(engineRef.current, 10);
    };

    return (
        <>
            <div ref={sceneRef} className="" />
            {/* @ts-ignore */}
            <div id="test" matter></div>
        </>
    );
};
export default PhysicsPane;
