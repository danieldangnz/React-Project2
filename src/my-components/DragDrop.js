/*
 Step 3: Create DragDrop.js Component:
    We will create Picture.js Component
 */ 
 import React, { useState } from "react";
 import Picture from "./Picture";
 import { useDrop } from "react-dnd";
 import "../App.css";
 
 const PictureList = [
   {id: 1,
    url:"https://pdbimg.choice.com.au/apple-iphone-11-64gb_1.jpg",
   },
   {id: 2,
    url: "https://www.pbtech.co.nz/imgprod/M/P/MPHSAM0091600__1.jpg?h=2745782345",
   },
   {id: 3,
    url:"https://www.spark.co.nz/content/dam/spark/images/product-images/devices/phones/nokia/nokia-c02/nokia-c02-dark-cyan-FEATURED-1.png",
   },
 ];
 
 function DragDrop() {
   const [board, setBoard] = useState([]);
 
   const [{ isOver }, drop] = useDrop(() => ({
     accept: "image",
     drop: (item) => addImageToBoard(item.id),
     collect: (monitor) => ({
       isOver: !!monitor.isOver(),
     }),
   }));
 
   const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        
        //Add the new picture the existing picture list
        //setBoard((board) => [...board, pictureList[0]]);//add the new picture the existing picture list
        
        //Allow to a single element to the board
        setBoard([pictureList[0]]);
   };

   return (
     <>
       <div className="Pictures" style={{border: 'solid 2px black'}}>
         {PictureList.map((picture) => {
           return <Picture url={picture.url} id={picture.id} />;
         })}
       </div>

       <div className="Board" ref={drop}>
         {board.map((picture) => {
           return <Picture url={picture.url} id={picture.id} />;
         })}
       </div>
     </>
   );
 }
 
 export default DragDrop;