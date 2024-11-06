//Drag and Drop
//Ref: https://www.youtube.com/watch?v=4bzJrEETW4w
//Codes: https://github.com/machadop1407/react-drag-and-drop-tutorial/tree/main/src

/*
 Step 1: Install library React-DND (https://react-dnd.github.io/react-dnd/about)
        Open terminal and type: npm install react-dnd react-dnd-html5-backend
        => Open package.json to see the installed 2 dnd : "react-dnd": "^16.0.1"
            and "react-dnd-html5-backend": "^16.0.1" ( allow React DnD the HTML5 drag and drop API under the hood)
*/       

/*
 Step 2: Create Demo5.js Component as below
    We will create DragDrop.js component in a saperate file
 */   
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./DragDrop";
import "../App.css";

function Demo5() {
    return (<>
        <h1>Drag and Drop an item to the below section</h1>
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <DragDrop />
            </div>
        </DndProvider>
      </>
    );
  }
  
  export default Demo5;